import { useRef } from 'react'
import { useScroll, useTransform, motion } from 'framer-motion'

export default function ScrollStory() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  })

  const words = ["FROM", "IDEA", "TO", "INK", "TO", "SOMETHING", "PERMANENT."]

  const opacities = words.map((_, i) => {
    const start = i / words.length
    const end = start + (1 / words.length)
    // eslint-disable-next-line react-hooks/rules-of-hooks
    return useTransform(scrollYProgress, [start, end], [0.1, 1])
  })

  return (
    <section ref={ref} className="h-[100vh] relative">
      <div className="sticky top-0 h-screen flex items-center justify-center overflow-hidden">
        
        <div className="absolute inset-0 z-0 flex items-center justify-center opacity-20">
          <div className="w-96 h-96 bg-ink-700 rounded-full blur-[100px]"></div>
        </div>

        <div className="z-10 text-center px-6">
          {words.map((word, i) => {
            const opacity = opacities[i]
            
            return (
              <motion.span 
                key={i} 
                style={{ opacity }}
                className="block font-marker text-[12vw] xl:text-[4vw] md:text-[10vw] leading-[0.9] mix-blend-difference"
              >
                {word}
              </motion.span>
            )
          })}
        </div>
      </div>
    </section>
  )
}