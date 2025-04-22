'use client';

import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isDark, setIsDark] = useState(true); // Default to dark theme

  useEffect(() => {
    // Sync with global theme
    const isDarkMode = document.documentElement.classList.contains('dark');
    setIsDark(isDarkMode);
  }, []);

  const toggleTheme = () => {
    const newTheme = isDark ? 'light' : 'dark';
    setIsDark(!isDark);
    localStorage.setItem('theme', newTheme);
    document.documentElement.classList.toggle('dark', !isDark);
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuItems = ['home', 'skills', 'education', 'projects', 'contact'];

  return (
    <nav
      className={`animate-fadeIn fixed top-0 left-0 w-full z-50 transition-all duration-500 
        ${scrolled ? 'py-3' : 'py-5'}
        ${isDark
          ? 'bg-gradient-to-r from-purple-800/70 via-indigo-700/60 to-purple-900/70 border-b border-purple-800/20 backdrop-blur-md shadow-lg shadow-purple-900/10'
          : 'bg-gradient-to-r from-blue-500/70 via-teal-400/60 to-green-500/70 border-b border-teal-400/40 backdrop-blur-xl shadow-lg shadow-teal-300/20'
        }
      `}
    >
      <div className="max-w-screen-xl mx-auto px-6 md:px-8 flex justify-between items-center">
        <h1
          className={`text-xl sm:text-2xl md:text-3xl font-bold tracking-wider
            ${isDark
              ? 'bg-gradient-to-r from-purple-300 via-pink-300 to-purple-500 text-transparent bg-clip-text'
              : 'text-white'
            }
          `}
        >
          Janani M
        </h1>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          {menuItems.map((item) => (
            <a
              key={item}
              href={`#${item}`}
              className={`capitalize font-medium text-base relative group transition-colors duration-300
                ${isDark
                  ? 'text-white hover:text-purple-200'
                  : 'text-white hover:text-teal-300 hover:drop-shadow-[0_0_5px_rgba(255,255,255,0.7)]'
                }
              `}
            >
              <span className="relative z-10">{item === 'contact' ? 'Contact Me' : item}</span>
              <span
                className={`absolute inset-0 rounded-lg -z-10 scale-0 opacity-0 
                  group-hover:scale-110 group-hover:opacity-100 transition-all duration-300
                  ${isDark ? 'bg-purple-900/20' : 'bg-white/20'}`}
              ></span>
              <span
                className={`absolute bottom-[-4px] left-0 h-[2px] w-0
                  group-hover:w-full transition-all duration-300
                  ${isDark
                    ? 'bg-gradient-to-r from-purple-300 to-pink-300'
                    : 'bg-teal-300'
                  }
                `}
              ></span>
            </a>
          ))}

          {/* Theme Toggle */}
          <div className="ml-4 flex items-center">
            <label className="relative inline-flex items-center cursor-pointer">
              <input
                type="checkbox"
                className="sr-only peer"
                checked={isDark}
                onChange={toggleTheme}
              />
              <div
                className={`w-11 h-6 rounded-full peer after:content-[''] after:absolute 
                  after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border 
                  after:rounded-full after:h-5 after:w-5 after:transition-all
                  peer-checked:after:translate-x-full peer-checked:after:border-white
                  ${isDark
                    ? 'bg-gradient-to-r from-purple-700 to-indigo-800 after:shadow-purple-500/20'
                    : 'bg-gradient-to-r from-teal-400 to-green-500 after:shadow-teal-500/20'
                  }
                `}
              ></div>
            </label>
          </div>
        </div>

        {/* Mobile Menu */}
        <div className="md:hidden flex items-center">
          <div className="mr-3">
            <label className="relative inline-flex items-center cursor-pointer">
              <input
                type="checkbox"
                className="sr-only peer"
                checked={isDark}
                onChange={toggleTheme}
              />
              <div
                className={`w-10 h-5 rounded-full peer after:content-[''] after:absolute 
                  after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border 
                  after:rounded-full after:h-4 after:w-4 after:transition-all
                  peer-checked:after:translate-x-full peer-checked:after:border-white
                  ${isDark
                    ? 'bg-gradient-to-r from-purple-700 to-indigo-800'
                    : 'bg-gradient-to-r from-teal-400 to-green-500'
                  }
                `}
              ></div>
            </label>
          </div>

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className={`p-2 rounded-md transition-colors hover:ring hover:ring-white/30 hover:shadow-md
              ${isDark ? 'text-white hover:bg-purple-900/40' : 'text-white hover:bg-white/20'}
            `}
            aria-label="Toggle menu"
          >
            {menuOpen ? <X className="w-6 h-6 text-white" /> : <Menu className="w-6 h-6 text-white" />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown */}
      {menuOpen && (
        <div
          className={`md:hidden px-6 pt-4 pb-6 flex flex-col gap-4 animate-fadeIn
            ${isDark
              ? 'bg-gradient-to-b from-slate-950/98 to-purple-950/98 border-t border-purple-800/20'
              : 'bg-gradient-to-b from-teal-400/90 to-green-500/90 border-t border-teal-400/60'
            }
          `}
        >
          {menuItems.map((item) => (
            <a
              key={item}
              href={`#${item}`}
              onClick={() => setMenuOpen(false)}
              className={`capitalize py-3 block w-full rounded-lg text-lg font-medium transition-all duration-300
                ${isDark
                  ? 'text-white hover:text-purple-300 hover:bg-purple-900/20'
                  : 'text-white hover:text-teal-300 hover:bg-white/10'
                }
              `}
            >
              <div className="flex justify-center items-center">
                {item === 'contact' ? 'Contact Me' : item}
              </div>
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}
