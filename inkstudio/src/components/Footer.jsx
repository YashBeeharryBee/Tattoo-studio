export default function Footer() {
  return (
    <footer className="relative pt-32 pb-12 px-6 md:px-12 border-t border-white/5 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        
        <div className="grid md:grid-cols-4 gap-12 mb-32">
          <div className="md:col-span-2">
            <div className="text-xs uppercase tracking-[0.3em] text-gray-500 mb-4">[ Contact ]</div>
            <h3 className="text-3xl font-light mb-8">Tattoo art from Mauritius.</h3>
            <div className="space-y-2 text-gray-400">
              <div>hello@inkstudio.mu</div>
              <div>+230 1234 5678</div>
              <div>Tribeca mall, Mauritius</div>
            </div>
          </div>
          
          <div>
            <div className="text-xs uppercase tracking-[0.3em] text-gray-500 mb-4">[ Navigate ]</div>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#home" className="hover:text-white transition-colors">Home</a></li>
              <li><a href="#artists" className="hover:text-white transition-colors">Artists</a></li>
              <li><a href="#work" className="hover:text-white transition-colors">Work</a></li>
              <li><a href="#about" className="hover:text-white transition-colors">Services</a></li>
            </ul>
          </div>

          <div>
            <div className="text-xs uppercase tracking-[0.3em] text-gray-500 mb-4">[ Social ]</div>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-white transition-colors">Instagram ↗</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Facebook ↗</a></li>
              <li><a href="#" className="hover:text-white transition-colors">TikTok ↗</a></li>
            </ul>
          </div>
        </div>

        {/* Giant Typography */}
        <div className="relative">
          <h2 className="font-marker text-[5vw] leading-[0.8] text-stroke opacity-50 select-none">
            MAKE IT PERMANENT.
          </h2>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center mt-20 text-xs text-gray-600 uppercase tracking-widest">
          <div>© 2026 InkStudio. All rights reserved.</div>
          <div>InkStudio Studio</div>
        </div>
      </div>
    </footer>
  )
}