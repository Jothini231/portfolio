import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import { Menu, X, Sun, Moon } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTheme } from '../context/ThemeContext';

const navLinks = [
  { title: 'Home', path: 'hero' },
  { title: 'About', path: 'about' },
  { title: 'Skills', path: 'skills' },
  { title: 'Achievements', path: 'achievements' },
  { title: 'Projects', path: 'projects' },
  { title: 'Articles', path: 'articles' },
  { title: 'Contact', path: 'contact' },
];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className="fixed top-0 left-0 w-full z-50 flex justify-center pt-6 px-4 md:px-8 transition-all duration-500 pointer-events-none">
      
      {/* Desktop & Tablet Floating Nav */}
      <div 
        className={`pointer-events-auto flex items-center justify-between transition-all duration-500 rounded-full w-full ${
          isScrolled 
            ? 'bg-card/80 backdrop-blur-xl border border-border/60 shadow-[0_8px_30px_rgba(0,0,0,0.12)] px-6 py-3 max-w-4xl' 
            : 'bg-transparent border border-transparent px-2 py-2 max-w-6xl'
        }`}
      >
        {/* Logo/Brand Mark */}
        <Link 
          to="hero" 
          smooth={true} 
          className="font-bold text-2xl tracking-tighter cursor-pointer text-primaryText"
        >
          J<span className="text-accent">S.</span>
        </Link>
        
        {/* Navigation Links */}
        <nav className="hidden md:flex items-center space-x-1">
          {navLinks.map((link) => (
            <Link
              key={link.title}
              to={link.path}
              spy={true}
              smooth={true}
              offset={-100}
              duration={500}
              className="relative px-4 py-2 text-sm font-medium cursor-pointer transition-colors duration-300 text-secondaryText hover:text-primaryText group"
              activeClass="!text-accent"
            >
              <span>{link.title}</span>
              <span className="absolute left-4 right-4 bottom-1 h-0.5 bg-accent scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left rounded-full"></span>
            </Link>
          ))}
          
          <button
            onClick={toggleTheme}
            className={`ml-4 p-2 rounded-full transition-colors text-secondaryText hover:text-primaryText ${theme === 'dark' ? 'hover:bg-white/5' : 'hover:bg-black/5'}`}
            aria-label="Toggle Theme"
          >
            {theme === 'light' ? <Moon size={20} /> : <Sun size={20} />}
          </button>
        </nav>

        {/* Mobile Menu & Theme Toggle (Mobile) */}
        <div className="md:hidden flex items-center gap-2">
          <button
            onClick={toggleTheme}
            className={`p-2 rounded-full transition-colors text-secondaryText hover:text-primaryText ${theme === 'dark' ? 'hover:bg-white/5' : 'hover:bg-black/5'}`}
            aria-label="Toggle Theme"
          >
            {theme === 'light' ? <Moon size={20} /> : <Sun size={20} />}
          </button>
          <button
            className={`text-primaryText p-2 rounded-full transition-colors ${theme === 'dark' ? 'hover:bg-white/5' : 'hover:bg-black/5'}`}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.nav
            initial={{ opacity: 0, y: -20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="md:hidden absolute top-[5.5rem] left-4 right-4 pointer-events-auto bg-card/95 backdrop-blur-2xl border border-border shadow-2xl rounded-3xl flex flex-col items-center py-6 space-y-2"
          >
            {navLinks.map((link) => (
              <Link
                key={link.title}
                to={link.path}
                spy={true}
                smooth={true}
                offset={-80}
                duration={500}
                className={`w-[80%] text-center py-3 rounded-xl text-secondaryText font-medium cursor-pointer text-lg transition-colors hover:text-primaryText ${theme === 'dark' ? 'hover:bg-white/5' : 'hover:bg-black/5'}`}
                activeClass="!text-accent !bg-accent/10"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.title}
              </Link>
            ))}
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
