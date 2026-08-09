import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const works = [
  { id: 1, style: 'Fine Line', artist: 'Alex', img: 'https://images.unsplash.com/photo-1543059080-f9b1272213d5?q=80&w=600&auto=format&fit=crop', size: 'tall' },
  { id: 2, style: 'Blackwork', artist: 'Alex', img: 'https://images.unsplash.com/photo-1565058379802-bbe93b2f703a?q=80&w=600&auto=format&fit=crop', size: 'normal' },
  { id: 3, style: 'Realism', artist: 'Mia', img: 'https://images.unsplash.com/photo-1611501275019-9b5cda994e8d?q=80&w=600&auto=format&fit=crop', size: 'wide' },
  { id: 4, style: 'Minimal', artist: 'Alex', img: 'https://images.unsplash.com/photo-1598211686290-a8ef209d87c5?q=80&w=600&auto=format&fit=crop', size: 'normal' },
  { id: 5, style: 'Custom', artist: 'Mia', img: 'https://images.unsplash.com/photo-1543059080-f9b1272213d5?q=80&w=600&auto=format&fit=crop', size: 'tall' },
  { id: 6, style: 'Blackwork', artist: 'Mia', img: 'https://images.unsplash.com/photo-1611501275019-9b5cda994e8d?q=80&w=600&auto=format&fit=crop', size: 'wide' },
]

export default function Portfolio() {
  const [selected, setSelected] = useState(null)

  return (
    <section id="work" className="py-32 px-6 md:px-12 border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-end mb-20">
          <h2 className="font-marker text-4xl md:text-7xl">SELECTED WORK</h2>
          <div className="hidden md:flex gap-4 text-xs uppercase tracking-widest text-gray-500">
            <span className="text-white">All</span>
            <span>Fine Line</span>
            <span>Blackwork</span>
            <span>Realism</span>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 auto-rows-[300px]">
          {works.map((work) => (
            <div 
              key={work.id} 
              className={`relative overflow-hidden cursor-pointer group ${work.size === 'tall' ? 'row-span-2' : work.size === 'wide' ? 'col-span-2' : ''}`}
              onClick={() => setSelected(work)}
              data-cursor="view"
            >
              <img 
                src={work.img} 
                alt={work.style} 
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
              />
              <div className="absolute bottom-0 left-0 p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="text-xs uppercase tracking-widest text-gray-300">{work.style}</div>
                <div className="text-lg font-light">{work.artist}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selected && (
          <motion.div 
            className="fixed inset-0 z-50 bg-ink-900/95 backdrop-blur-md flex items-center justify-center p-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelected(null)}
          >
            <button className="absolute top-8 right-8 text-sm uppercase tracking-widest border border-white/20 px-4 py-2 hover:bg-white hover:text-ink-900 transition-all" onClick={() => setSelected(null)}>
              Close ✕
            </button>
            <motion.div 
              className="max-w-4xl w-full grid md:grid-cols-2 gap-8"
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
            >
              <img src={selected.img} alt={selected.style} className="w-full aspect-[3/4] object-cover" />
              <div className="flex flex-col justify-center">
                <div className="text-xs uppercase tracking-[0.3em] text-gray-500 mb-2">Tattoo Detail</div>
                <h3 className="font-marker text-4xl mb-4">{selected.style}</h3>
                <div className="text-gray-400 mb-8">By {selected.artist}</div>
                <p className="text-gray-300">A custom {selected.style.toLowerCase()} piece created at Inkstudio. Crafted with precision and care in Mauritius.</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}