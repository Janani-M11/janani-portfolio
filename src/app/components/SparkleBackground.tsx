'use client'
import React, { useEffect } from 'react'

const SparkleBackground = () => {
  useEffect(() => {
    const container = document.getElementById('sparkle-container')
    if (!container) return

    for (let i = 0; i < 80; i++) {
      const sparkle = document.createElement('div')
      sparkle.className = 'sparkle'
      sparkle.style.left = `${Math.random() * 100}%`
      sparkle.style.top = `${Math.random() * 100}vh`
      sparkle.style.animationDelay = `${Math.random() * 10}s`
      container.appendChild(sparkle)
    }
  }, [])

  return <div id="sparkle-container" className="fixed inset-0 pointer-events-none z-0"></div>
}

export default SparkleBackground
