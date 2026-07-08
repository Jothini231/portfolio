import React from 'react';
import { motion } from 'framer-motion';

const skillCategories = [
  { title: 'Programming Languages',   skills: ['Java', 'JavaScript', 'C', 'PHP', 'HTML', 'CSS'] },
  { title: 'Frontend Development',    skills: ['React.js', 'Tailwind CSS'] },
  { title: 'Backend Development',     skills: ['Spring Boot', 'Node.js', 'Express.js', 'PHP'] },
  { title: 'Database Technologies',   skills: ['MySQL', 'MongoDB'] },
  { title: 'Tools & Platforms',       skills: ['Git', 'GitHub', 'GitHub Actions', 'Postman', 'Cloudinary', 'Vercel', 'Railway', 'Figma', 'Canva'] },
  { title: 'Core Concepts',           skills: ['OOP', 'DSA', 'SOLID Principles', 'REST API Design', 'CI/CD Pipelines', 'Authentication (JWT, OAuth)'] },
  { title: 'Soft Skills',             skills: ['Problem Solving', 'Team Collaboration', 'Communication', 'Time Management', 'Adaptability'] },
];

const Skills = () => {
  return (
    <section id="skills" className="py-12 sm:py-14 bg-background">
      <div className="container mx-auto px-5 sm:px-8 md:px-12 max-w-6xl">
        <motion.div initial={{ opacity:0, y:50 }} whileInView={{ opacity:1, y:0 }}
          viewport={{ once:true, margin:'-100px' }} transition={{ duration:0.6 }}>

          <div className="flex items-center gap-4 mb-8 md:mb-14 justify-center flex-col text-center">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-primaryText">
              My <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-accent">Skills</span>
            </h2>
            <div className="flex items-center gap-2 mt-3">
              <div className="w-12 h-1 bg-accent rounded-full" />
              <div className="w-3 h-1 bg-accent rounded-full" />
              <div className="w-1 h-1 bg-accent rounded-full" />
            </div>
          </div>

          <div className="columns-1 sm:columns-2 lg:columns-3 gap-5 sm:gap-6">
            {skillCategories.map((category, index) => (
              <motion.div key={category.title}
                initial={{ opacity:0, y:20 }} whileInView={{ opacity:1, y:0 }}
                viewport={{ once:true }} transition={{ duration:0.4, delay:index * 0.08 }}
                className="bg-card/50 backdrop-blur-sm border border-border/50 rounded-2xl p-5 sm:p-6 hover:border-accent/40 transition-colors duration-300 shadow-sm hover:shadow-md hover:shadow-accent/5 break-inside-avoid mb-5 sm:mb-6">
                <h3 className="text-base sm:text-lg lg:text-xl font-bold text-primaryText mb-4">{category.title}</h3>
                <div className="flex flex-wrap gap-2 sm:gap-3">
                  {category.skills.map(skill => (
                    <span key={skill}
                      className="px-3 py-1 sm:px-4 sm:py-1.5 bg-secondary/80 border border-border/40 text-secondaryText text-xs sm:text-sm font-medium rounded-full hover:text-primaryText hover:bg-secondary transition-colors cursor-default">
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
