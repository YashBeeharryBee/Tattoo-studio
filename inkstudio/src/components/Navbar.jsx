import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const links = ['Home', 'Artists', 'Work', 'Services', 'About', 'booking']

  return (
    <>
      <nav className={`fixed top-0 w-full z-50 transition-all duration-500 ${scrolled ? 'bg-ink-900/80 backdrop-blur-md border-b border-white/5' : 'bg-transparent'}`}>
        <div className="flex justify-between items-center px-6 md:px-12 py-5">
          <a href="#home" className="text-xl tracking-widest font-light">INKSTUDIO</a>
          
          <ul className="hidden md:flex items-center gap-10 text-xs uppercase tracking-[0.2em] text-gray-400">
            {links.map(link => (
              <li key={link} className="hover:text-white transition-colors duration-300">
                <a href={`#${link.toLowerCase()}`}>{link}</a>
              </li>
            ))}
          </ul>

          <a href="#booking" className="hidden md:block text-xs uppercase tracking-widest border border-white/20 px-4 py-2 hover:bg-white hover:text-ink-900 transition-all duration-300">
            Book a Session →
          </a>

          <button className="md:hidden flex flex-col gap-1.5 z-50" onClick={() => setMenuOpen(!menuOpen)}>
            <div className={`w-6 h-px bg-white transition-all ${menuOpen ? 'rotate-45 translate-y-1' : ''}`}></div>
            <div className={`w-6 h-px bg-white transition-all ${menuOpen ? '-rotate-45 -translate-y-1' : ''}`}></div>
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {menuOpen && (
          <motion.div 
            className="fixed inset-0 bg-ink-900 z-40 flex flex-col items-center justify-center gap-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            {links.map(link => (
              <a 
                key={link} 
                href={`#${link.toLowerCase()}`} 
                className="text-3xl font-marker hover:text-gray-400 transition-colors"
                onClick={() => setMenuOpen(false)}
              >
                {link}
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}