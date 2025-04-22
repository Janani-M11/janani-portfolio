'use client';  // Mark the file as a client component
import React, { useState, useEffect } from 'react';

export default function RocketLoader() {
  const [progress, setProgress] = useState(0);
  const [finished, setFinished] = useState(false);
  const [bubbles, setBubbles] = useState<any[]>([]);

  useEffect(() => {
    // Rocket progress logic
    const interval = setInterval(() => {
      setProgress(prev => {
        const newProgress = prev + 2;
        if (newProgress >= 100) {
          clearInterval(interval);
          setTimeout(() => setFinished(true), 1800); // Let the rocket finish its launch
        }
        return newProgress >= 100 ? 100 : newProgress;
      });
    }, 100);

    // Bubble generation logic (runs only in the client-side)
    if (typeof window !== 'undefined') {
      const generatedBubbles = [...Array(40)].map(() => ({
        left: `${Math.random() * 100}%`,
        width: `${2 + Math.random() * 4}px`,
        height: `${2 + Math.random() * 4}px`,
        animationDelay: `${Math.random() * 10}s`,
        animationDuration: `${3 + Math.random() * 3}s`,
      }));
      setBubbles(generatedBubbles);
    }

    return () => clearInterval(interval);
  }, []);

  if (finished) return null;

  return (
    <div className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-gradient-to-br from-black via-[#2e003e] to-[#4c1d95] transition-all duration-700">
      {/* Rocket with launch animation */}
      <div
        className="mb-12"
        style={{
          animation: progress >= 100 ? 'rocketLaunch 2s forwards' : 'rocketFloat 2s infinite ease-in-out',
        }}
      >
        <svg
          width="120"
          height="120"
          viewBox="0 0 64 64"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Sleek body */}
          <path
            d="M32 2C26 12 24 28 24 40H40C40 28 38 12 32 2Z"
            fill="#e0e0e0"
            stroke="#9333ea"
            strokeWidth="2"
          />
          {/* Window */}
          <circle cx="32" cy="24" r="4" fill="#9333ea" />
          {/* Wings */}
          <path d="M24 40L16 52H24V40Z" fill="#c084fc" />
          <path d="M40 40L48 52H40V40Z" fill="#c084fc" />
          {/* Fire */}
          <path
            d="M28 52C28 58 30 64 32 64C34 64 36 58 36 52L32 60L28 52Z"
            fill="#fb923c"
          >
            <animate
              attributeName="d"
              values="
                M28 52C28 58 30 64 32 64C34 64 36 58 36 52L32 60L28 52Z;
                M28 52C28 60 30 66 32 66C34 66 36 60 36 52L32 60L28 52Z;
                M28 52C28 58 30 64 32 64C34 64 36 58 36 52L32 60L28 52Z"
              dur="0.3s"
              repeatCount="indefinite"
            />
          </path>
        </svg>
      </div>

      {/* Loading text */}
      <div className="text-lg text-white font-semibold mb-4">
        {progress < 100 ? 'Loading...' : 'Launching...'}
      </div>

      {/* Progress Bar */}
      <div className="w-64 h-3 bg-white/20 rounded-full overflow-hidden mb-2">
        <div
          className="h-full bg-gradient-to-r from-pink-500 to-purple-500 transition-all duration-200"
          style={{ width: `${progress}%` }}
        />
      </div>

      {/* Percentage */}
      <div className="text-sm text-white font-medium">
        {progress}%
      </div>

      {/* Bubble animations */}
      {bubbles.map((bubble, index) => (
        <div
          key={index}
          className="absolute bottom-0 bg-white opacity-30 rounded-full animate-bubble"
          style={{
            left: bubble.left,
            width: bubble.width,
            height: bubble.height,
            animationDelay: bubble.animationDelay,
            animationDuration: bubble.animationDuration,
          }}
        />
      ))}

      {/* Keyframes */}
      <style jsx>{`
        @keyframes rocketFloat {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-12px);
          }
        }

        @keyframes rocketLaunch {
          0% {
            transform: translateY(0);
            opacity: 1;
          }
          100% {
            transform: translateY(-700px);
            opacity: 0;
          }
        }

        @keyframes bubble {
          0% {
            transform: translateY(0);
            opacity: 0.3;
          }
          100% {
            transform: translateY(-100vh);
            opacity: 0;
          }
        }
      `}</style>
    </div>
  );
}
