import { useEffect, useState } from 'react'
import Lenis from 'lenis'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Intro from './components/Intro'
import TattooStyles from './components/TattooStyles'
import ScrollStory from './components/ScrollStory'
import Artists from './components/Artists'
import Portfolio from './components/Portfolio'
import Services from './components/Services'
import Process from './components/Process'
import Booking from './components/Booking'
import Testimonials from './components/Testimonials'
import FAQ from './components/FAQ'
import Footer from './components/Footer'
import Cursor from './components/Cursor'

export default function App() {
  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    // Smooth Scroll Setup
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    })

    function raf(time) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }
    requestAnimationFrame(raf)

    // Set loaded to fade in content
    setTimeout(() => setLoaded(true), 500)

    return () => lenis.destroy()
  }, [])

  return (
    <>
      <div className="grain"></div>
      <div className="vignette"></div>
      <Cursor />
      <Navbar />
      <main className={`transition-opacity duration-1000 ${loaded ? 'opacity-100' : 'opacity-0'}`}>
        <Hero />
        <Intro />
        <TattooStyles />
        <ScrollStory />
        <Artists />
        <Portfolio />
        <Services />
        <Process />
        <Booking />
        <Testimonials />
        <FAQ />
        <Footer />
      </main>
    </>
  )
}