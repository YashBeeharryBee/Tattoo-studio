import { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Send, Upload, ChevronDown } from 'lucide-react';

export default function Booking() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    date: '',
    style: 'Fine Line',
    artist: 'No Preference',
    placement: '',
    size: ''
  });
  
  const [file, setFile] = useState(null);
  const [fileName, setFileName] = useState('No file chosen');
  const fileInputRef = useRef(null);
  const [status, setStatus] = useState('idle');

  // Dropdown open states
  const [isStyleOpen, setIsStyleOpen] = useState(false);
  const [isArtistOpen, setIsArtistOpen] = useState(false);

  const styleOptions = ['Fine Line', 'Blackwork', 'Minimal', 'Realism', 'Custom', 'Cover-Up'];
  const artistOptions = ['No Preference', 'Alex', 'Mia'];

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFileChange = (e) => {
    if (e.target.files && e.target.files.length > 0) {
      setFile(e.target.files[0]);
      setFileName(e.target.files[0].name);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('loading');

    const dbData = new FormData();
    Object.keys(formData).forEach(key => dbData.append(key, formData[key]));
    if (file) dbData.append('referenceImage', file);

    try {
      // 1. Send to XAMPP Database
      const dbResponse = await fetch('http://localhost:8080/inkstudio-api/submit_booking.php', {
        method: 'POST', 
        body: dbData
      });
      const dbResult = await dbResponse.json();
      if (!dbResponse.ok) throw new Error(dbResult.error || 'Failed to save to database');

      // 2. Send Email via Web3Forms
      let emailBody = `New Booking Request:\nName: ${formData.name}\nEmail: ${formData.email}\nPhone: ${formData.phone}\nDate: ${formData.date}\nStyle: ${formData.style}\nArtist: ${formData.artist}\nPlacement: ${formData.placement}\nSize: ${formData.size}`;
      
      if (dbResult.imageUrl) {
        emailBody += `\nReference Image: ${dbResult.imageUrl}`;
      }

      await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          access_key: 'ba12d436-128d-43de-8d10-c0237ed43d22',
          subject: 'New Tattoo Booking from ' + formData.name,
          from_name: 'Inkstudio Website',
          message: emailBody
        })
      });

      // 3. Success: Reset Form
      setStatus('success');
      setFormData({ name: '', email: '', phone: '', date: '', style: 'Fine Line', artist: 'No Preference', placement: '', size: '' });
      setFile(null); 
      setFileName('No file chosen');
      if (fileInputRef.current) fileInputRef.current.value = "";
      
    } catch (err) {
      console.error("Booking Error:", err);
      setStatus('error');
    }
  };

  return (
    <section id="booking" className="py-32 px-6 max-w-4xl mx-auto font-body">
      <h2 className="font-heading text-5xl md:text-7xl mb-4 text-center">BOOK A SESSION</h2>
      <p className="text-studio-light text-center mb-16 text-sm md:text-base">Fill out the form below to request your appointment.</p>

      {status === 'success' && <p className="text-center text-green-400 mb-8">Booking request sent successfully!</p>}
      {status === 'error' && <p className="text-center text-red-400 mb-8">Failed to send booking. Please try again.</p>}

      <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
        
        {/* Full Name */}
        <input type="text" name="name" placeholder="Full Name" required onChange={handleChange} value={formData.name} className="bg-transparent border-b border-studio-gray py-3 text-sm focus:outline-none focus:border-white transition-colors" />
        
        {/* Email */}
        <input type="email" name="email" placeholder="Email" required onChange={handleChange} value={formData.email} className="bg-transparent border-b border-studio-gray py-3 text-sm focus:outline-none focus:border-white transition-colors" />
        
        {/* Phone */}
        <input type="tel" name="phone" placeholder="Phone" required onChange={handleChange} value={formData.phone} className="bg-transparent border-b border-studio-gray py-3 text-sm focus:outline-none focus:border-white transition-colors" />
        
        {/* Preferred Date */}
        <input type="date" name="date" required onChange={handleChange} value={formData.date} className="bg-transparent border-b border-studio-gray py-3 text-sm focus:outline-none focus:border-white transition-colors text-studio-light" />
        
        {/* Custom Style Dropdown (White BG / Dark Text) */}
        <div className="relative">
          <button type="button" onClick={() => { setIsStyleOpen(!isStyleOpen); setIsArtistOpen(false); }} className="w-full text-left border-b border-studio-gray py-3 text-sm text-white flex justify-between items-center focus:outline-none focus:border-white transition-colors">
            {formData.style} <ChevronDown size={16} className={`transition-transform duration-300 ${isStyleOpen ? 'rotate-180' : 'rotate-0'}`} />
          </button>
          <AnimatePresence>
            {isStyleOpen && (
              <>
                <div className="fixed inset-0 z-40" onClick={() => setIsStyleOpen(false)} />
                <motion.div 
                  initial={{ opacity: 0, y: -10 }} 
                  animate={{ opacity: 1, y: 0 }} 
                  exit={{ opacity: 0, y: -10 }} 
                  transition={{ duration: 0.2 }} 
                  className="absolute top-full left-0 w-full bg-white border border-studio-gray mt-2 z-50 shadow-2xl"
                >
                  {styleOptions.map(option => (
                    <div key={option} onClick={() => { setFormData({...formData, style: option}); setIsStyleOpen(false); }} className={`px-4 py-3 text-sm cursor-pointer transition-colors ${formData.style === option ? 'bg-black text-white' : 'text-black hover:bg-gray-100'}`}>
                      {option}
                    </div>
                  ))}
                </motion.div>
              </>
            )}
          </AnimatePresence>
        </div>

        {/* Custom Artist Dropdown (White BG / Dark Text) */}
        <div className="relative">
          <button type="button" onClick={() => { setIsArtistOpen(!isArtistOpen); setIsStyleOpen(false); }} className="w-full text-left border-b border-studio-gray py-3 text-sm text-white flex justify-between items-center focus:outline-none focus:border-white transition-colors">
            {formData.artist} <ChevronDown size={16} className={`transition-transform duration-300 ${isArtistOpen ? 'rotate-180' : 'rotate-0'}`} />
          </button>
          <AnimatePresence>
            {isArtistOpen && (
              <>
                <div className="fixed inset-0 z-40" onClick={() => setIsArtistOpen(false)} />
                <motion.div 
                  initial={{ opacity: 0, y: -10 }} 
                  animate={{ opacity: 1, y: 0 }} 
                  exit={{ opacity: 0, y: -10 }} 
                  transition={{ duration: 0.2 }} 
                  className="absolute top-full left-0 w-full bg-white border border-studio-gray mt-2 z-50 shadow-2xl"
                >
                  {artistOptions.map(option => (
                    <div key={option} onClick={() => { setFormData({...formData, artist: option}); setIsArtistOpen(false); }} className={`px-4 py-3 text-sm cursor-pointer transition-colors ${formData.artist === option ? 'bg-black text-white' : 'text-black hover:bg-gray-100'}`}>
                      {option}
                    </div>
                  ))}
                </motion.div>
              </>
            )}
          </AnimatePresence>
        </div>

        {/* Tattoo Placement */}
        <input type="text" name="placement" placeholder="Tattoo Placement" required onChange={handleChange} value={formData.placement} className="bg-transparent border-b border-studio-gray py-3 text-sm focus:outline-none focus:border-white transition-colors" />
        
        {/* Approximate Size */}
        <input type="text" name="size" placeholder="Approximate Size" required onChange={handleChange} value={formData.size} className="bg-transparent border-b border-studio-gray py-3 text-sm focus:outline-none focus:border-white transition-colors" />
        
        {/* File Upload & Submit Area */}
        <div className="md:col-span-2 flex flex-col md:flex-row items-center justify-between mt-4 gap-6">
          <div className="flex items-center gap-4 w-full md:w-auto">
            <button type="button" onClick={() => fileInputRef.current.click()} className="flex items-center gap-2 border border-dashed border-studio-gray px-6 py-4 text-studio-light text-xs hover:border-white transition-colors">
              <Upload size={14} /> UPLOAD REFERENCE IMAGE
            </button>
            <span className="text-studio-light text-xs truncate max-w-[150px]">{fileName}</span>
            <input type="file" name="referenceImage" ref={fileInputRef} onChange={handleFileChange} accept="image/png, image/jpeg, image/webp" className="hidden" />
          </div>
          
          <button type="submit" disabled={status === 'loading'} className="flex items-center gap-4 bg-white text-black px-10 py-4 text-xs tracking-[0.2em] font-semibold hover:bg-studio-light transition-all duration-300 disabled:opacity-50">
            {status === 'loading' ? 'SENDING...' : 'REQUEST APPOINTMENT'} <Send size={14} />
          </button>
        </div>
      </form>
    </section>
  );
}