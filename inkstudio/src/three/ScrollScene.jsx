import { useRef, useMemo } from 'react'
import { useFrame } from '@react-three/fiber'
import * as THREE from 'three'

export default function ScrollScene() {
  const meshRef = useRef()
  
  // Procedural Abstract Tattoo Needle / Ink Spire
  const geometry = useMemo(() => {
    const geo = new THREE.ConeGeometry(0.5, 4, 64, 1, true)
    // Twist the geometry slightly for an organic, artistic feel
    const pos = geo.attributes.position
    const vec = new THREE.Vector3()
    for (let i = 0; i < pos.count; i++) {
      vec.fromBufferAttribute(pos, i)
      const angle = vec.y * 0.5
      vec.x = vec.x * Math.cos(angle) - vec.z * Math.sin(angle)
      vec.z = vec.x * Math.sin(angle) + vec.z * Math.cos(angle)
      pos.setXYZ(i, vec.x, vec.y, vec.z)
    }
    geo.computeVertexNormals()
    return geo
  }, [])

  useFrame((state, delta) => {
    if (!meshRef.current) return
    
    // Basic continuous rotation
    meshRef.current.rotation.y += delta * 0.15
    
    // Scroll-driven transformations (Simulated based on scrollY globally)
    const scrollProgress = window.scrollY / (document.body.scrollHeight - window.innerHeight)
    
    // Move object based on scroll
    meshRef.current.rotation.x = scrollProgress * Math.PI * 0.5
    meshRef.current.position.x = scrollProgress * 3
    meshRef.current.position.y = scrollProgress * 2
    meshRef.current.scale.setScalar(1 - scrollProgress * 0.5)
  })

  return (
    <mesh ref={meshRef} geometry={geometry} rotation={[0.2, 0, 0]}>
      {/* Black Chrome / Dark Metallic Material */}
      <meshStandardMaterial 
        color="#050505" 
        metalness={1.0} 
        roughness={0.2} 
        envMapIntensity={1.5} 
      />
    </mesh>
  )
}