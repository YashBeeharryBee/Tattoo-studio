import { motion } from 'framer-motion'

const steps = [
  { num: '01', title: 'Consultation', desc: 'We discuss your idea, placement, size and style.' },
  { num: '02', title: 'Design', desc: 'Our artist develops a concept tailored to you.' },
  { num: '03', title: 'Session', desc: 'Your tattoo is carefully applied in a professional studio environment.' },
  { num: '04', title: 'Aftercare', desc: 'You leave with clear aftercare instructions to help your tattoo heal properly.' },
]

export default function Process() {
  return (
    <section className="py-32 px-6 md:px-12 border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-4 gap-12 md:gap-6">
          {steps.map((step, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.15, ease: [0.22, 1, 0.36, 1] }}
              className="border-t border-white/10 pt-8"
            >
              <div className="text-5xl font-marker text-gray-700 mb-6">{step.num}</div>
              <h3 className="text-xl font-light mb-4 tracking-wide">{step.title}</h3>
              <p className="text-sm text-gray-500 leading-relaxed">{step.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}