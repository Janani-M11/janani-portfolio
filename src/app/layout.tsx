'use client';  // Mark the file as a client component
import './globals.css';

import { useState, useEffect, Suspense, lazy } from 'react';
import RocketLoader from './components/RocketLoader';

// Lazy load components that aren't needed immediately
const SparkleBackground = lazy(() => import('./components/SparkleBackground'));
const Navbar = lazy(() => import('./components/Navbar'));
const Footer = lazy(() => import('./components/Footer'));

// Simple fallback components for lazy-loaded items
const NavbarFallback = () => <div className="h-16 bg-purple-100 dark:bg-purple-900 w-full fixed top-0 animate-pulse"></div>;
const FooterFallback = () => <div className="h-24 bg-purple-100 dark:bg-purple-900 w-full animate-pulse mt-8"></div>;

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const [isLoading, setIsLoading] = useState(true);

  // Simulate a loading time of 3 seconds (you can adjust this)
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false); // Hide loader after 3 seconds
    }, 3000); 
  }, []);

  // Set and maintain dark theme
  useEffect(() => {
    // Always set dark theme
    document.documentElement.classList.add('dark');
    localStorage.setItem('theme', 'dark');

    // Listen for theme changes from Navbar
    const handleThemeChange = () => {
      const isDark = document.documentElement.classList.contains('dark');
      if (!isDark) {
        document.documentElement.classList.add('dark');
        localStorage.setItem('theme', 'dark');
      }
    };

    // Add event listener for theme changes
    document.addEventListener('DOMContentLoaded', handleThemeChange);
    window.addEventListener('load', handleThemeChange);

    return () => {
      document.removeEventListener('DOMContentLoaded', handleThemeChange);
      window.removeEventListener('load', handleThemeChange);
    };
  }, []);

  return (
    <html lang="en">
      <body
        className="bg-[#f8e1ff] text-[#4b006e] dark:bg-black dark:text-white transition-colors duration-300 text-lg leading-relaxed relative"
      >
        {/* Show RocketLoader while initial loading */}
        {isLoading && <RocketLoader />}

        {/* Once loading is finished, render the rest of the layout with lazy-loaded components */}
        {!isLoading && (
          <>
            <Suspense fallback={null}>
              <SparkleBackground />
            </Suspense>
            
            <Suspense fallback={<NavbarFallback />}>
              <Navbar />
            </Suspense>
            
            <main className="pt-24 space-y-12 max-w-7xl mx-auto px-4 md:px-8 z-10 relative">
              {children}
            </main>
            
            <Suspense fallback={<FooterFallback />}>
              <Footer />
            </Suspense>
          </>
        )}
      </body>
    </html>
  );
}
