import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

export default function Cursor() {
  const [pos, setPos] = useState({ x: 0, y: 0 })
  const [hovered, setHovered] = useState(false)

  useEffect(() => {
    const move = (e) => setPos({ x: e.clientX, y: e.clientY })
    window.addEventListener('mousemove', move)

    const hoverables = document.querySelectorAll('a, button, [data-cursor]')
    const handleEnter = () => setHovered(true)
    const handleLeave = () => setHovered(false)

    hoverables.forEach(el => {
      el.addEventListener('mouseenter', handleEnter)
      el.addEventListener('mouseleave', handleLeave)
    })

    return () => {
      window.removeEventListener('mousemove', move)
      hoverables.forEach(el => {
        el.removeEventListener('mouseenter', handleEnter)
        el.removeEventListener('mouseleave', handleLeave)
      })
    }
  }, [])

  return (
    <>
      <motion.div 
        className="cursor-dot" 
        style={{ x: pos.x, y: pos.y }}
      />
      <motion.div 
        className={`cursor-outline ${hovered ? 'hovered' : ''}`} 
        style={{ x: pos.x, y: pos.y }}
        animate={{ scale: hovered ? 1.5 : 1 }}
        transition={{ type: 'spring', stiffness: 300, damping: 20 }}
      />
    </>
  )
}