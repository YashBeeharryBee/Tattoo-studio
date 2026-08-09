import { motion } from 'framer-motion'

export default function Intro() {
  const words = "Every tattoo carries a story. At Inkstudio, we transform ideas, memories and personal expressions into artwork designed to live with you.".split(" ")

  return (
    <section className="min-h-screen flex items-center justify-center py-20 px-6 md:px-12">
      <div className="max-w-6xl mx-auto">
        <div className="text-xs uppercase tracking-[0.3em] text-gray-500 mb-12 text-center">
          [ Est. 2026 — Mauritius ]
        </div>
        
        <h2 className="font-marker text-5xl md:text-8xl text-center mb-16">
          MORE THAN INK.
        </h2>

        <div className="flex flex-wrap justify-center gap-x-4 gap-y-2 text-2xl md:text-4xl font-light text-gray-300 max-w-4xl mx-auto text-center">
          {words.map((word, i) => (
            <motion.span
              key={i}
              initial={{ opacity: 0.1 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
            >
              {word}
            </motion.span>
          ))}
        </div>
      </div>
    </section>
  )
}