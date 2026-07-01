import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <section id="about" className="py-24 bg-secondary relative overflow-hidden">
      <div className="container mx-auto px-6 md:px-12 max-w-4xl">
        
        {/* Header */}
        <div className="flex items-center gap-4 mb-16 justify-center flex-col text-center">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold text-primaryText"
          >
            About <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-accent">Me</span>
          </motion.h2>
          <motion.div 
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="flex items-center gap-2 mt-4"
          >
            <div className="w-12 h-1 bg-accent rounded-full"></div>
            <div className="w-3 h-1 bg-accent rounded-full"></div>
            <div className="w-1 h-1 bg-accent rounded-full"></div>
          </motion.div>
        </div>

        {/* Biography */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1, transition: { staggerChildren: 0.2 } }
          }}
        >
          <div className="space-y-6 text-secondaryText text-lg leading-relaxed text-center">
            <motion.p variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5 } } }}>
              I am a <strong className="font-semibold text-primaryText">Software Engineering undergraduate</strong> at the University of Kelaniya with a strong passion for building practical and scalable web applications.
            </motion.p>
            <motion.p variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5 } } }}>
              My core expertise lies in <strong className="font-semibold text-primaryText">Full-Stack Web Development</strong>, working extensively with technologies such as React, JavaScript, PHP, and Spring Boot. I thrive on architecting robust backend databases and crafting intuitive, user-friendly interfaces.
            </motion.p>
            <motion.p variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5 } } }}>
              Outside of coursework, I constantly bridge the gap between academic theory and practical engineering through immersive personal projects. I am deeply driven by problem-solving and the desire to build highly scalable applications that deliver exceptional user experiences.
            </motion.p>
          </div>

          {/* Quick Stats */}
          <div className="pt-10 border-t border-border/50 mt-10 grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div variants={{ hidden: { opacity: 0, scale: 0.9 }, visible: { opacity: 1, scale: 1, transition: { duration: 0.4 } } }} className="flex flex-col items-center text-center">
              <span className="font-bold text-primaryText mb-2 text-lg">Degree</span>
              <span className="text-secondaryText">BSc (Hons) Software Engineering</span>
            </motion.div>
            <motion.div variants={{ hidden: { opacity: 0, scale: 0.9 }, visible: { opacity: 1, scale: 1, transition: { duration: 0.4 } } }} className="flex flex-col items-center text-center">
              <span className="font-bold text-primaryText mb-2 text-lg">Focus</span>
              <span className="text-secondaryText">Full-Stack Web Development</span>
            </motion.div>
            <motion.div variants={{ hidden: { opacity: 0, scale: 0.9 }, visible: { opacity: 1, scale: 1, transition: { duration: 0.4 } } }} className="flex flex-col items-center text-center">
              <span className="font-bold text-primaryText mb-2 text-lg">Location</span>
              <span className="text-secondaryText">Sri Lanka</span>
            </motion.div>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default About;