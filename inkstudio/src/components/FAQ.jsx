import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const faqs = [
  { q: "How much does a tattoo cost?", a: "Pricing depends on size, placement, and complexity. We charge starting from Rs 1,500 for minimal pieces. Large custom work is priced per session or piece." },
  { q: "Do I need an appointment?", a: "Yes. We operate strictly by appointment to ensure dedicated time and preparation for each piece. Walk-ins are not accepted." },
  { q: "Can I bring my own design?", a: "Absolutely. We welcome reference material and your own designs. Our artists will refine it to ensure it works perfectly as a tattoo." },
  { q: "Can you customize an existing design?", a: "Yes, that is our specialty. Bring us your inspiration, and we will create a unique, custom piece tailored to you." },
  { q: "Do you do cover-ups?", a: "Yes. Cover-ups require a consultation to assess the existing tattoo, skin condition, and design possibilities." },
  { q: "How should I prepare for my tattoo?", a: "Get a good night's sleep, eat a substantial meal before your session, stay hydrated, and avoid alcohol or blood-thinning medications." },
  { q: "What is your cancellation policy?", a: "We require 48 hours notice for cancellations. Deposits are non-refundable but can be transferred to a rescheduled date if ample notice is given." },
  { q: "How long does a tattoo take to heal?", a: "Surface healing typically takes 2-3 weeks, but deeper skin healing can take up to 4-6 weeks. We provide detailed aftercare instructions." }
]

export default function FAQ() {
  const [open, setOpen] = useState(0)

  return (
    <section className="py-32 px-6 md:px-12 border-t border-white/5">
      <div className="max-w-4xl mx-auto">
        <div className="text-xs uppercase tracking-[0.3em] text-gray-500 mb-4 text-center">[ Information ]</div>
        <h2 className="font-marker text-4xl md:text-7xl text-center mb-20">QUESTIONS</h2>

        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <div key={i} className="border-b border-white/10">
              <button 
                className="w-full flex justify-between items-center py-6 text-left group"
                onClick={() => setOpen(open === i ? null : i)}
              >
                <span className={`text-lg md:text-xl font-light transition-colors ${open === i ? 'text-white' : 'text-gray-400 group-hover:text-white'}`}>
                  {faq.q}
                </span>
                <span className={`text-xl transition-transform duration-300 ${open === i ? 'rotate-45' : ''}`}>+</span>
              </button>
              <AnimatePresence>
                {open === i && (
                  <motion.div 
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: 'easeInOut' }}
                    className="overflow-hidden"
                  >
                    <p className="pb-6 text-gray-500 leading-relaxed max-w-xl">{faq.a}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}