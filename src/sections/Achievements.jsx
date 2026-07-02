import React from 'react';
import { motion } from 'framer-motion';

const achievementsData = [
  { title: "Dean's List",                    organization: 'University of Kelaniya' },
  { title: 'Bronze Badge – Java',            organization: 'HackerRank' },
  { title: 'AWS Well-Architected Foundations', organization: 'AWS' },
];

const BadgeIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 24 24"
    fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z"/>
    <path d="m9 12 2 2 4-4"/>
  </svg>
);

const Achievements = () => {
  return (
    <section id="achievements" className="py-12 sm:py-14 bg-secondary">
      <div className="container mx-auto px-5 sm:px-8 md:px-12 max-w-6xl">

        <div className="flex items-center gap-4 mb-8 md:mb-14 justify-center flex-col text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-primaryText">
            Achievements &amp; <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-accent">Certifications</span>
          </h2>
          <div className="flex items-center gap-2 mt-3">
            <div className="w-12 h-1 bg-accent rounded-full" />
            <div className="w-3 h-1 bg-accent rounded-full" />
            <div className="w-1 h-1 bg-accent rounded-full" />
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 w-full max-w-5xl mx-auto">
          {achievementsData.map((a, idx) => (
            <motion.div key={idx}
              initial={{ opacity:0, y:20 }} whileInView={{ opacity:1, y:0 }}
              viewport={{ once:true }} transition={{ duration:0.5, delay:idx * 0.1 }}
              className="bg-card/50 backdrop-blur-sm border border-border/50 rounded-2xl p-6 sm:p-8 flex flex-col items-center text-center gap-3 hover:border-accent/40 transition-all duration-300 shadow-sm hover:shadow-md hover:shadow-accent/5 hover:-translate-y-1">
              <div className="h-12 w-12 sm:h-14 sm:w-14 rounded-full bg-accent/10 flex items-center justify-center text-accent mb-1">
                <BadgeIcon />
              </div>
              <h3 className="text-base sm:text-lg lg:text-xl font-bold text-primaryText">{a.title}</h3>
              <p className="text-secondaryText text-xs sm:text-sm">{a.organization}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements;
