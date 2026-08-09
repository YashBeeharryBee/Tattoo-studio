import { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import { Environment, ContactShadows } from '@react-three/drei'
import ScrollScene from '../three/ScrollScene'

export default function Hero() {
  return (
    <section id="home" className="relative h-screen w-full overflow-hidden flex items-center justify-center">
      
      {/* 3D Background */}
      <div className="absolute inset-0 z-0">
        <Canvas camera={{ position: [0, 0, 6], fov: 45 }}>
          <Suspense fallback={null}>
            {/* Cinematic Lighting */}
            <ambientLight intensity={0.1} />
            <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={2} color="#ffffff" />
            <spotLight position={[-10, -5, 5]} angle={0.2} penumbra={1} intensity={1} color="#3a3a3a" />
            
            {/* Abstract Tattoo Needle/Ink Drop Object */}
            <ScrollScene />
            
            <Environment preset="night" />
            <ContactShadows position={[0, -2.5, 0]} opacity={0.5} scale={20} blur={2} far={4.5} />
          </Suspense>
        </Canvas>
      </div>

      {/* Hero Content */}
      <div className="relative z-10 flex flex-col items-center text-center px-6 pointer-events-none">
        <div className="text-xs md:text-sm uppercase tracking-[0.3em] text-gray-500 mb-8">
          Custom Tattoos · Timeless Art · Mauritius
        </div>
        <h1 className="font-marker text-[18vw] md:text-[12vw] leading-[0.8] text-canvas mix-blend-difference">
          INK<br />YOUR<br />STORY.
        </h1>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-10 flex flex-col items-center gap-2 text-[10px] uppercase tracking-[0.3em] text-gray-500 animate-pulse">
        Scroll to Explore
        <div className="w-px h-8 bg-gray-700"></div>
      </div>
    </section>
  )
}