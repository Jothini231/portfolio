import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const navLinks = [
  { title: 'Home', path: 'hero' },
  { title: 'About', path: 'about' },
  { title: 'Skills', path: 'skills' },
  { title: 'Projects', path: 'projects' },
  { title: 'Articles', path: 'articles' },
  { title: 'Contact', path: 'contact' },
];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'glass-nav py-4' : 'bg-transparent py-6'}`}>
      <div className="container mx-auto px-6 md:px-12 flex justify-end items-center">
        
        <nav className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <Link
              key={link.title}
              to={link.path}
              spy={true}
              smooth={true}
              offset={-80}
              duration={500}
              className="text-secondaryText hover:text-accent font-medium cursor-pointer transition-colors"
              activeClass="text-accent"
            >
              {link.title}
            </Link>
          ))}
        </nav>

        
        <button
          className="md:hidden text-primaryText"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.nav
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden glass-nav absolute top-full left-0 w-full flex flex-col items-center py-4 space-y-4"
          >
            {navLinks.map((link) => (
              <Link
                key={link.title}
                to={link.path}
                spy={true}
                smooth={true}
                offset={-80}
                duration={500}
                className="text-primaryText font-medium cursor-pointer text-lg"
                activeClass="text-accent"
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
