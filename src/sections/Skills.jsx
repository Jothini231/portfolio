import React from 'react';
import { motion } from 'framer-motion';
import { Lightbulb, Users, MessageSquare, Zap, Code2, Blocks, Wrench } from 'lucide-react';

const technicalSkills = [
  {
    category: 'Languages',
    icon: <Code2 size={28} />,
    skills: ['Java', 'JavaScript (ES6+)', 'C Programming', 'PHP', 'HTML5 & CSS3']
  },
  {
    category: 'Frameworks',
    icon: <Blocks size={28} />,
    skills: ['React.js', 'Spring Boot', 'Tailwind CSS']
  },
  {
    category: 'Tools & Databases',
    icon: <Wrench size={28} />,
    skills: ['MySQL', 'MongoDB', 'Git & GitHub', 'RESTful APIs']
  }
];

const softSkills = [
  { name: 'Problem Solving', icon: <Lightbulb size={32} />, description: 'Breaking down complex challenges into elegant, manageable solutions.' },
  { name: 'Teamwork', icon: <Users size={32} />, description: 'Collaborating seamlessly across diverse disciplines and backgrounds.' },
  { name: 'Communication', icon: <MessageSquare size={32} />, description: 'Articulating technical concepts clearly to both peers and stakeholders.' },
  { name: 'Adaptability', icon: <Zap size={32} />, description: 'Quickly learning and adopting new technologies to stay ahead of the curve.' },
];

const Skills = () => {
  return (
    <section id="skills" className="py-24 bg-background overflow-hidden relative">
      <div className="container mx-auto px-6 md:px-12 max-w-6xl">
        

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center gap-4 mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-primaryText">My Skills</h2>
            <div className="h-[1px] bg-border flex-grow"></div>
          </div>
        </motion.div>

        
        <div className="mb-24">
          <h3 className="text-2xl font-medium text-primaryText mb-8 text-center md:text-left">Technical Skills</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {technicalSkills.map((tech, index) => (
              <motion.div
                key={tech.category}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="group p-8 bg-card rounded-2xl border border-border hover:border-accent/50 transition-all duration-300 relative overflow-hidden shadow-lg"
              >
                <div className="absolute inset-0 bg-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-0"></div>
                
                <div className="relative z-10">
                  <div className="flex items-center gap-4 mb-6 pb-4 border-b border-border/50">
                    <div className="w-12 h-12 rounded-xl bg-background border border-border flex items-center justify-center text-accent group-hover:scale-110 group-hover:shadow-[0_0_15px_rgba(99,102,241,0.2)] transition-all duration-300">
                      {tech.icon}
                    </div>
                    <h4 className="text-xl font-bold text-primaryText">{tech.category}</h4>
                  </div>
                  
                  <ul className="space-y-4">
                    {tech.skills.map((skill, sIndex) => (
                      <li key={sIndex} className="flex items-center gap-3 text-secondaryText group-hover:text-primaryText transition-colors duration-300">
                        <div className="w-2 h-2 rounded-full bg-accent/50 group-hover:bg-accent transition-colors duration-300"></div>
                        <span className="font-medium">{skill}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        
        <div>
          <h3 className="text-2xl font-medium text-primaryText mb-8 text-center md:text-left">Soft Skills</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {softSkills.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="group p-8 bg-card rounded-2xl border border-border hover:border-accent/50 transition-all duration-300 relative overflow-hidden shadow-lg"
              >
                <div className="absolute inset-0 bg-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                <div className="relative z-10">
                  <div className="w-16 h-16 rounded-2xl bg-background border border-border flex items-center justify-center text-accent mb-6 group-hover:scale-110 group-hover:shadow-[0_0_20px_rgba(99,102,241,0.2)] transition-all duration-300">
                    {skill.icon}
                  </div>
                  
                  <h4 className="text-xl font-bold text-primaryText mb-3">{skill.name}</h4>
                  <p className="text-secondaryText text-sm leading-relaxed">
                    {skill.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default Skills;
