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
      sparkle.style.animationDelay = `${Math.random() * 5}s`
      container.appendChild(sparkle)
    }
  }, [])

  return (
    <div id="sparkle-container" className="fixed inset-0 pointer-events-none z-0">
      <style jsx global>{`
        .sparkle {
          position: absolute;
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: radial-gradient(circle, #ffffff, #ffffff);
          animation: sparkle 3s linear infinite;
          pointer-events: none;
          z-index: -1;
        }

        .dark .sparkle {
          background: radial-gradient(circle, #d946ef, #a855f7);
        }

        @keyframes sparkle {
          0% {
            transform: scale(0.5) translateY(0) rotate(0deg);
            opacity: 0.6;
          }
          100% {
            transform: scale(1.2) translateY(-200px) rotate(180deg);
            opacity: 0;
          }
        }
      `}</style>
    </div>
  )
}

export default SparkleBackground
