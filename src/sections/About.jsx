import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <section id="about" className="py-12 sm:py-14 bg-secondary relative overflow-hidden">
      <div className="container mx-auto px-5 sm:px-8 md:px-12 max-w-4xl">

        <div className="flex items-center gap-4 mb-8 md:mb-14 justify-center flex-col text-center">
          <motion.h2 initial={{ opacity:0, y:20 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true }}
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-primaryText">
            About <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-accent">Me</span>
          </motion.h2>
          <motion.div initial={{ opacity:0, scale:0 }} whileInView={{ opacity:1, scale:1 }} viewport={{ once:true }}
            className="flex items-center gap-2 mt-3">
            <div className="w-12 h-1 bg-accent rounded-full" />
            <div className="w-3 h-1 bg-accent rounded-full" />
            <div className="w-1 h-1 bg-accent rounded-full" />
          </motion.div>
        </div>

        <motion.div initial="hidden" whileInView="visible" viewport={{ once:true }}
          variants={{ hidden:{ opacity:0 }, visible:{ opacity:1, transition:{ staggerChildren:0.2 } } }}>
          <div className="space-y-4 sm:space-y-6 text-secondaryText text-sm sm:text-base md:text-lg leading-relaxed text-center">
            <motion.p variants={{ hidden:{ opacity:0, y:20 }, visible:{ opacity:1, y:0, transition:{ duration:0.5 } } }}>
              I am a <strong className="font-semibold text-primaryText">3rd-year Software Engineering undergraduate</strong> at the University of Kelaniya with a strong passion for building practical and scalable web applications.
            </motion.p>
            <motion.p variants={{ hidden:{ opacity:0, y:20 }, visible:{ opacity:1, y:0, transition:{ duration:0.5 } } }}>
              My core expertise lies in <strong className="font-semibold text-primaryText">Full-Stack Web Development</strong>, working extensively with technologies such as React, JavaScript, PHP, and Spring Boot. I thrive on architecting robust backend databases and crafting intuitive, user-friendly interfaces.
            </motion.p>
            <motion.p variants={{ hidden:{ opacity:0, y:20 }, visible:{ opacity:1, y:0, transition:{ duration:0.5 } } }}>
              Outside of coursework, I constantly bridge the gap between academic theory and practical engineering through immersive personal projects. I am deeply driven by problem-solving and the desire to build highly scalable applications that deliver exceptional user experiences.
            </motion.p>
          </div>

          <div className="pt-8 sm:pt-10 border-t border-border/50 mt-8 sm:mt-10 grid grid-cols-2 sm:grid-cols-4 gap-5 sm:gap-8">
            {[
              { label:'Degree', value:'BSc (Hons) Software Engineering' },
              { label:'Current GPA', value:'3.79/4.00' },
              { label:'Focus',  value:'Full-Stack Web Development' },
              { label:'Location', value:'Sri Lanka' },
            ].map(({ label, value }) => (
              <motion.div key={label}
                variants={{ hidden:{ opacity:0, scale:0.9 }, visible:{ opacity:1, scale:1, transition:{ duration:0.4 } } }}
                className="flex flex-col items-center text-center">
                <span className="font-bold text-primaryText mb-1 sm:mb-2 text-base sm:text-lg">{label}</span>
                <span className="text-secondaryText text-sm sm:text-base">{value}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default About;