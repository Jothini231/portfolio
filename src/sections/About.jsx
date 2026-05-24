import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <section id="about" className="py-24 bg-background">
      <div className="container mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="max-w-5xl mx-auto"
        >
          <div className="flex items-center gap-4 mb-16 justify-center flex-col text-center">
            <h2 className="text-3xl md:text-5xl font-bold text-primaryText">About Me</h2>
            <div className="w-24 h-1 bg-accent rounded-full mt-4"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 text-secondaryText text-lg leading-relaxed">
            <div className="space-y-6 text-justify">
              <p>
                I am a Software Engineering undergraduate at the University of Kelaniya with a strong passion for building practical and scalable web applications.
                I enjoy transforming ideas into real-world software solutions through clean design and efficient code.
              </p>
              <p>
                My core focus is full-stack web development, working with technologies such as React, JavaScript, PHP, and Spring Boot.
                I have developed project,book fair stall reservation system as part of my academic and personal learning journey.
              </p>
            </div>
            <div className="space-y-6 text-justify">
              <p>
                I enjoy solving real-world problems and learning new technologies through hands-on experience.
                Whether it's designing user-friendly interfaces or working on backend logic and databases, I take interest in the full development process.
              </p>
              <p>
                Outside of development, I focus on improving my problem-solving skills and exploring new areas in software engineering to grow as a well-rounded developer.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;