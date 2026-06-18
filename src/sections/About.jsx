import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <section id="about" className="py-24 bg-background relative overflow-hidden">
      <div className="container mx-auto px-6 md:px-12 max-w-4xl">
        
        {/* Header */}
        <div className="flex items-center gap-4 mb-16 justify-center flex-col text-center">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold text-primaryText"
          >
            About Me
          </motion.h2>
          <motion.div 
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="w-24 h-1 bg-accent rounded-full mt-4"
          ></motion.div>
        </div>

        {/* Biography */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="space-y-6 text-secondaryText text-lg leading-relaxed text-center">
            <p>
              I am a <strong className="font-semibold text-primaryText">Software Engineering undergraduate</strong> at the University of Kelaniya with a strong passion for building practical and scalable web applications.
            </p>
            <p>
              My core expertise lies in <strong className="font-semibold text-primaryText">Full-Stack Web Development</strong>, working extensively with technologies such as React, JavaScript, PHP, and Spring Boot. I thrive on architecting robust backend databases and crafting intuitive, user-friendly interfaces.
            </p>
            <p>
              Outside of coursework, I constantly bridge the gap between academic theory and practical engineering through immersive personal projects. I am deeply driven by problem-solving and the desire to build highly scalable applications that deliver exceptional user experiences.
            </p>
          </div>

          {/* Quick Stats */}
          <div className="pt-10 border-t border-border/50 mt-10 grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex flex-col items-center text-center">
              <span className="font-bold text-primaryText mb-2 text-lg">Degree</span>
              <span className="text-secondaryText">BSc (Hons) Software Engineering</span>
            </div>
            <div className="flex flex-col items-center text-center">
              <span className="font-bold text-primaryText mb-2 text-lg">Focus</span>
              <span className="text-secondaryText">Full-Stack Web Development</span>
            </div>
            <div className="flex flex-col items-center text-center">
              <span className="font-bold text-primaryText mb-2 text-lg">Location</span>
              <span className="text-secondaryText">Sri Lanka</span>
            </div>
          </div>

        </motion.div>

      </div>
    </section>
  );
};

export default About;