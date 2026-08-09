const testimonials = [
  { text: "The whole experience was incredible. The attention to detail was exactly what I wanted.", name: "Sarah K.", tattoo: "Fine Line" },
  { text: "Best studio in Mauritius. Clean, professional, and the art speaks for itself.", name: "James P.", tattoo: "Blackwork" },
  { text: "They took my vague idea and turned it into a masterpiece. Forever grateful.", name: "Lina M.", tattoo: "Custom" }
]

export default function Testimonials() {
  return (
    <section className="py-32 px-6 md:px-12 border-t border-white/5 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-3 gap-12">
          {testimonials.map((t, i) => (
            <div key={i} className="flex flex-col justify-between">
              <div>
                <div className="text-xs uppercase tracking-[0.3em] text-gray-500 mb-6">★★★★★</div>
                <p className="text-2xl font-light leading-relaxed mb-8">"{t.text}"</p>
              </div>
              <div className="border-t border-white/10 pt-4">
                <div className="text-sm text-white">{t.name}</div>
                <div className="text-xs text-gray-500 uppercase tracking-widest mt-1">{t.tattoo}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}