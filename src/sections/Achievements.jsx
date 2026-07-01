import React from 'react';
import { motion } from 'framer-motion';

const achievementsData = [
  {
    title: "Dean's List",
    organization: "University of Kelaniya"
  },
  {
    title: "Bronze Badge – Java",
    organization: "HackerRank"
  },
  {
    title: "AWS Well-Architected Foundations",
    organization: "AWS"
  }
];

const Achievements = () => {
  return (
    <section id="achievements" className="py-24 bg-secondary">
      <div className="container mx-auto px-6 md:px-12 max-w-6xl">
        
        <div className="flex items-center gap-4 mb-16 justify-center flex-col text-center">
          <h2 className="text-3xl md:text-5xl font-bold text-primaryText">
            Achievements & <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-accent">Certifications</span>
          </h2>
          <div className="flex items-center gap-2 mt-4">
            <div className="w-12 h-1 bg-accent rounded-full"></div>
            <div className="w-3 h-1 bg-accent rounded-full"></div>
            <div className="w-1 h-1 bg-accent rounded-full"></div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-5xl mx-auto">
          {achievementsData.map((achievement, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="bg-card/50 backdrop-blur-sm border border-border/50 rounded-2xl p-8 flex flex-col items-center text-center gap-4 hover:border-accent/40 transition-all duration-300 shadow-sm hover:shadow-md hover:shadow-accent/5 hover:-translate-y-1"
            >
              <div className="h-14 w-14 rounded-full bg-accent/10 flex items-center justify-center text-accent mb-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z"/>
                  <path d="m9 12 2 2 4-4"/>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-primaryText">{achievement.title}</h3>
              <p className="text-secondaryText text-sm">{achievement.organization}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements;
