import { useState } from 'react'
import { motion } from 'framer-motion'

const styles = [
  { num: '01', title: 'Fine Line', desc: 'Delicate lines. Precise details. Timeless simplicity.', img: 'https://images.unsplash.com/photo-1611501275019-9b5cda994e8d?q=80&w=600&auto=format&fit=crop' },
  { num: '02', title: 'Blackwork', desc: 'Bold contrasts. Solid black ink. Striking statements.', img: 'https://images.unsplash.com/photo-1565058379802-bbe93b2f703a?q=80&w=600&auto=format&fit=crop' },
  { num: '03', title: 'Minimal', desc: 'Less is more. Clean geometry. Subtle presence.', img: 'https://images.unsplash.com/photo-1598211686290-a8ef209d87c5?q=80&w=600&auto=format&fit=crop' },
  { num: '04', title: 'Realism', desc: 'Life-like details. Shadows and light brought to skin.', img: 'https://images.unsplash.com/photo-1543059080-f9b1272213d5?q=80&w=600&auto=format&fit=crop' },
]

export default function TattooStyles() {
  const [hovered, setHovered] = useState(null)

  return (
    <section id="services" className="py-32 px-6 md:px-12 border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-end mb-20">
          <h2 className="font-marker text-4xl md:text-7xl">THE CRAFT</h2>
          <div className="text-xs uppercase tracking-[0.3em] text-gray-500 hidden md:block">Tattoo Styles</div>
        </div>

        <div className="flex flex-col">
          {styles.map((style, i) => (
            <motion.div 
              key={style.num}
              className="relative grid grid-cols-12 items-center py-10 border-t border-white/10 cursor-pointer transition-all duration-500 group"
              onMouseEnter={() => setHovered(i)}
              onMouseLeave={() => setHovered(null)}
              data-cursor="view"
            >
              <div className="col-span-2 md:col-span-1 text-gray-600 text-sm">{style.num}</div>
              
              <div className="col-span-7 md:col-span-4 overflow-hidden">
                <h3 className={`text-3xl md:text-5xl font-light transition-all duration-500 ${hovered === i ? 'translate-x-4 text-white' : 'text-gray-400'}`}>
                  {style.title}
                </h3>
              </div>

              <div className="col-span-12 md:col-span-5 text-gray-500 text-sm mt-4 md:mt-0 md:px-8">
                {style.desc}
              </div>

              <div className="col-span-3 md:col-span-2 flex justify-end">
                <div className={`w-16 h-16 md:w-24 md:h-24 overflow-hidden rounded-full transition-all duration-700 ${hovered === i ? 'opacity-100 scale-100' : 'opacity-0 scale-50'}`}>
                  <img src={style.img} alt={style.title} className="w-full h-full object-cover grayscale" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}