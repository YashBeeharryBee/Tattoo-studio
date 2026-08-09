const artists = [
  {
    name: 'Alex',
    role: 'Tattoo Artist',
    specialty: 'Fine Line / Minimal / Blackwork',
    bio: 'Specializes in delicate, intricate designs that blend precision with emotion.',
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRl1n7T-axv2ePRbmUQfJJqPwxyUGIu0-IjE6xoRDkpC1BDwv8R87Wq5ho&s=10'
  },
  {
    name: 'Mia',
    role: 'Tattoo Artist',
    specialty: 'Realism / Custom',
    bio: 'Focuses on hyper-realistic portraits and deeply personal custom pieces.',
    img: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=600&auto=format&fit=crop'
  }
]

export default function Artists() {
  return (
    <section id="artists" className="py-32 px-6 md:px-12 border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        <div className="mb-20">
          <div className="text-xs uppercase tracking-[0.3em] text-gray-500 mb-4">[ The Team ]</div>
          <h2 className="font-marker text-4xl md:text-7xl">THE HANDS<br/>BEHIND THE INK.</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16">
          {artists.map((artist, i) => (
            <div key={i} className="group" data-cursor="view">
              <div className="relative aspect-[3/4] overflow-hidden mb-6 bg-ink-800">
                <img 
                  src={artist.img} 
                  alt={artist.name} 
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink-900/50 to-transparent"></div>
              </div>
              
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-3xl font-light mb-2">{artist.name}</h3>
                  <div className="text-sm text-gray-500 uppercase tracking-widest">{artist.role}</div>
                </div>
                <div className="text-right text-xs text-gray-400 uppercase tracking-widest">
                  {artist.specialty}
                </div>
              </div>
              <p className="mt-4 text-gray-400 max-w-md">{artist.bio}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}