import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Lightbulb, Users, MessageSquare, Zap, Clock, Code2, Layers, Wrench } from 'lucide-react';
import { FaReact, FaHtml5, FaCss3Alt, FaNodeJs, FaJava, FaPhp, FaGithub, FaFigma } from 'react-icons/fa';
import { SiTailwindcss, SiJavascript, SiSpringboot, SiExpress, SiMysql, SiMongodb, SiPostman, SiCanva } from 'react-icons/si';

const technicalSkills = [
  {
    category: 'Frontend',
    items: [
      { name: 'React.js', icon: <FaReact />, level: 90 },
      { name: 'Tailwind CSS', icon: <SiTailwindcss />, level: 85 },
      { name: 'JavaScript', icon: <SiJavascript />, level: 85 },
      { name: 'HTML5', icon: <FaHtml5 />, level: 95 },
      { name: 'CSS3', icon: <FaCss3Alt />, level: 90 },
    ]
  },
  {
    category: 'Backend',
    items: [
      { name: 'Java', icon: <FaJava />, level: 85 },
      { name: 'Spring Boot', icon: <SiSpringboot />, level: 80 },
      { name: 'Node.js', icon: <FaNodeJs />, level: 75 },
      { name: 'Express.js', icon: <SiExpress />, level: 75 },
      { name: 'PHP', icon: <FaPhp />, level: 70 },
      { name: 'C', icon: <Code2 />, level: 65 },
    ]
  },
  {
    category: 'Database',
    items: [
      { name: 'MySQL', icon: <SiMysql />, level: 85 },
      { name: 'MongoDB', icon: <SiMongodb />, level: 80 },
    ]
  },
  {
    category: 'Tools',
    items: [
      { name: 'Git & GitHub', icon: <FaGithub />, level: 85 },
      { name: 'Postman', icon: <SiPostman />, level: 80 },
      { name: 'Figma', icon: <FaFigma />, level: 75 },
      { name: 'Canva', icon: <SiCanva />, level: 85 },
    ]
  }
];

const softSkills = [
  { name: 'Problem Solving', icon: <Lightbulb size={20} /> },
  { name: 'Team Collaboration', icon: <Users size={20} /> },
  { name: 'Communication Skills', icon: <MessageSquare size={20} /> },
  { name: 'Time Management', icon: <Clock size={20} /> },
  { name: 'Adaptability', icon: <Zap size={20} /> },
];

const Skills = () => {
  const [activeTab, setActiveTab] = useState('technical');

  return (
    <section id="skills" className="py-24 bg-background overflow-hidden relative">
      <div className="container mx-auto px-6 md:px-12 max-w-5xl">
        
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center gap-4 mb-10 justify-center flex-col text-center">
            <h2 className="text-3xl md:text-5xl font-bold text-primaryText">My Skills</h2>
            <div className="w-24 h-1 bg-accent rounded-full mt-4"></div>
          </div>
          
          <div className="flex justify-center mb-16">
            <div className="inline-flex bg-card border border-border rounded-full p-1 shadow-sm">
              <button
                onClick={() => setActiveTab('technical')}
                className={`px-6 md:px-8 py-3 rounded-full text-sm font-medium transition-all duration-300 ${activeTab === 'technical' ? 'bg-accent text-white shadow-md' : 'text-secondaryText hover:text-primaryText'}`}
              >
                Technical Skills
              </button>
              <button
                onClick={() => setActiveTab('soft')}
                className={`px-6 md:px-8 py-3 rounded-full text-sm font-medium transition-all duration-300 ${activeTab === 'soft' ? 'bg-accent text-white shadow-md' : 'text-secondaryText hover:text-primaryText'}`}
              >
                Soft Skills
              </button>
            </div>
          </div>
        </motion.div>

        <div className="min-h-[400px]">
          <AnimatePresence mode="wait">
            {activeTab === 'technical' && (
              <motion.div
                key="technical"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                className="space-y-12"
              >
                {technicalSkills.map((group) => (
                  <div key={group.category} className="space-y-6">
                    <h3 className="text-2xl font-bold text-primaryText text-center md:text-left border-b border-border pb-2">
                      {group.category}
                    </h3>
                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
                      {group.items.map((skill) => (
                        <div 
                          key={skill.name} 
                          className="group relative p-6 bg-card border border-border rounded-2xl flex flex-col items-center justify-center gap-4 hover:border-accent/50 hover:shadow-[0_0_20px_rgba(0,212,255,0.15)] transition-all duration-300 cursor-default overflow-hidden"
                        >
                          {/* Animated background glow on hover */}
                          <div className="absolute inset-0 bg-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-0"></div>
                          
                          <div className="text-5xl text-secondaryText group-hover:text-accent transition-colors duration-300 z-10">
                            {skill.icon}
                          </div>
                          
                          <div className="w-full flex flex-col items-center z-10">
                            <span className="font-medium text-primaryText text-sm text-center mb-1 group-hover:-translate-y-1 transition-transform duration-300">{skill.name}</span>
                            
                            {/* Progress bar container (revealed on hover) */}
                            <div className="w-full h-1.5 bg-background rounded-full overflow-hidden mt-1 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0">
                               <motion.div 
                                 initial={{ width: 0 }}
                                 whileInView={{ width: `${skill.level}%` }}
                                 transition={{ duration: 1, delay: 0.1 }}
                                 className="h-full bg-gradient-to-r from-blue-400 to-accent"
                               />
                            </div>
                            <span className="text-[10px] text-accent font-bold opacity-0 group-hover:opacity-100 transition-opacity duration-300 mt-1 absolute bottom-1 right-2">
                              {skill.level}%
                            </span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </motion.div>
            )}

            {activeTab === 'soft' && (
              <motion.div
                key="soft"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                className="flex flex-wrap justify-center gap-4 pt-4 max-w-3xl mx-auto"
              >
                {softSkills.map((skill) => (
                  <div
                    key={skill.name}
                    className="flex items-center gap-3 px-6 py-4 bg-card border border-border rounded-full hover:border-accent/50 hover:shadow-[0_0_15px_rgba(0,212,255,0.1)] transition-all duration-300 group cursor-default"
                  >
                    <div className="text-accent group-hover:scale-110 transition-transform duration-300">
                      {skill.icon}
                    </div>
                    <span className="font-medium text-primaryText group-hover:text-accent transition-colors duration-300">
                      {skill.name}
                    </span>
                  </div>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
};

export default Skills;
