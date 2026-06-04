import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-scroll';
import profileImage from '../assets/profile.png';

const Hero = () => {
  return (
    <section id="hero" className="min-h-screen flex items-center relative overflow-hidden pt-20">
      
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10">
        <div className="absolute top-[-10%] left-[-10%] w-96 h-96 bg-accent/10 rounded-full mix-blend-screen filter blur-3xl opacity-50 animate-blob"></div>
        <div className="absolute top-[20%] right-[-10%] w-96 h-96 bg-blue-500/10 rounded-full mix-blend-screen filter blur-3xl opacity-50 animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-[-20%] left-[20%] w-96 h-96 bg-cyan-500/10 rounded-full mix-blend-screen filter blur-3xl opacity-50 animate-blob animation-delay-4000"></div>
      </div>

      <div className="container mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-6"
        >
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-accent font-medium tracking-wide uppercase"
          >
            Welcome to my portfolio
          </motion.p>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-5xl md:text-6xl lg:text-7xl font-bold font-poppins text-primaryText leading-tight"
          >
           Hi, I'm
<br />
<span className="whitespace-nowrap inline-block pt-4  text-transparent bg-clip-text bg-gradient-to-r from-accent to-blue-400">
  Jothini Sivanesan
</span>
          </motion.h1>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-2xl md:text-3xl font-medium text-secondaryText"
          >
            Full Stack Developer
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="text-secondaryText max-w-lg text-lg"
          >
            I build modern, scalable, and exceptional digital experiences. Passionate about turning complex problems into elegant solutions.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="flex flex-wrap gap-4 pt-4"
          >
            <Link
              to="projects"
              smooth={true}
              offset={-80}
              duration={500}
              className="px-8 py-3 bg-accent text-white rounded-full font-medium hover:bg-accentHover transition-colors cursor-pointer shadow-lg shadow-accent/30"
            >
              View Projects
            </Link>
            <a
              href="/cv.pdf"
              target="_blank"
              rel="noreferrer"
              className="px-8 py-3 bg-transparent border border-border text-primaryText rounded-full font-medium hover:bg-card transition-colors cursor-pointer"
            >
              Download CV
            </a>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative flex justify-center items-center translate-x-4 md:translate-x-8"
        >
          <div className="relative w-72 h-72 md:w-96 md:h-96">
            <div className="absolute inset-0 bg-gradient-to-tr from-accent to-blue-500 rounded-full transform rotate-6 opacity-30 blur-lg shadow-[0_0_30px_rgba(0,212,255,0.3)]"></div>
            
            <img 
              src={profileImage} 
              alt="Portrait" 
              className="absolute inset-0 w-full h-full object-cover rounded-full border-2 border-border shadow-2xl z-10 brightness-75"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
