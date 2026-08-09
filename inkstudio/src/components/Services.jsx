const services = [
  { name: 'Minimal Tattoo', price: 'Rs 1,500', desc: 'Small, simple designs under 5cm.' },
  { name: 'Fine Line', price: 'Rs 2,000', desc: 'Delicate, intricate line work.' },
  { name: 'Blackwork', price: 'Rs 2,500', desc: 'Solid black ink and bold patterns.' },
  { name: 'Custom Design', price: 'Rs 3,000', desc: 'Bespoke artwork created from your concept.' },
  { name: 'Large Piece', price: 'Rs 5,000', desc: 'Half sleeves, back pieces, and large scale work.' },
  { name: 'Cover-Up', price: 'Rs 4,000', desc: 'Transforming old tattoos into new art.' },
  { name: 'Consultation', price: 'Rs 500', desc: 'Discuss ideas, placement, and design feasibility.' },
]

export default function Services() {
  return (
    <section id="about" className="py-32 px-6 md:px-12 border-t border-white/5 bg-ink-900">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 mb-20">
          <div>
            <div className="text-xs uppercase tracking-[0.3em] text-gray-500 mb-4">[ Pricing ]</div>
            <h2 className="font-marker text-4xl md:text-7xl">SERVICES</h2>
          </div>
          <div className="flex items-end">
            <p className="text-gray-400 text-sm leading-relaxed">
              Final pricing depends on size, placement, complexity, style and estimated session time. Prices listed are starting estimates. All consultations require a non-refundable fee which is deducted from the final tattoo cost.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-px bg-white/5">
          {services.map((service, i) => (
            <div key={i} className="bg-ink-900 p-8 hover:bg-ink-800 transition-colors duration-300 group">
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-2xl font-light group-hover:translate-x-2 transition-transform duration-300">{service.name}</h3>
                <div className="text-xl font-light text-gray-400">{service.price}</div>
              </div>
              <p className="text-sm text-gray-500">{service.desc}</p>
              <div className="mt-6 text-xs uppercase tracking-widest text-gray-600">Starting from</div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <a href="#contact" className="inline-block text-sm uppercase tracking-widest border border-white/20 px-8 py-4 hover:bg-white hover:text-ink-900 transition-all duration-300">
            Get a Quote →
          </a>
        </div>
      </div>
    </section>
  )
}