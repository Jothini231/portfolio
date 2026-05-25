import React from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { Link } from 'react-scroll';

const Footer = () => {
  return (
    <footer className="bg-background py-12 border-t border-border relative overflow-hidden">
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          
          
          <div className="text-secondaryText text-sm text-center md:text-left">
            <p>&copy; {new Date().getFullYear()} Jothini Sivanesan. All rights reserved.</p>
          </div>

          
          <div className="flex flex-col md:flex-row items-center gap-6 md:gap-8">
            <div className="flex gap-6">
              <a href="#" className="text-secondaryText hover:text-accent transition-colors">
                <FaGithub size={24} />
              </a>
              <a href="#" className="text-secondaryText hover:text-accent transition-colors">
                <FaLinkedin size={24} />
              </a>
            </div>
            <Link to="hero" smooth={true} duration={500} className="text-sm text-secondaryText hover:text-primaryText cursor-pointer transition-colors md:border-l md:border-border md:pl-8">
              Back to Top
            </Link>
          </div>

        </div>
      </div>
    </footer>
  );
};

export default Footer;
