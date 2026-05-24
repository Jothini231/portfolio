import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const projects = [
  {
    title: "Employee Management System",
    description: "Developed an enterprise employee management system with role-based access control for handling employee records, leave, and payroll.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=600",
    techStack: ["React", "Spring Boot", "MySQL", "JWT" , "Tailwind CSS"],
    github: "https://github.com/Jothini231/employee-management-system.git",
    
  },
  {
    title: "Bookfair Reservation System",
    description: "Built a web system for book fair stall reservations with real-time availability and double-booking prevention using REST APIs.",
    image: "https://images.unsplash.com/photo-1507842217343-583bb7270b66?auto=format&fit=crop&q=80&w=600",
    techStack: ["React", "Java", "Spring Boot", "MYSQL","JWT","Tailwind CSS"],
    github: "https://github.com/Sathiyabalan29/BookFair.git",
    
  },
  {
    title: "Spotify Clone",
    description: "Built a responsive full-stack Spotify clone showcasing modern UI and core music streaming features using React, Vite, and Tailwind CSS.",
    image: "/spotify-clone.png",
    techStack: ["React", "Tailwind CSS"],
    github: "https://github.com/Jothini231/spotify-clone.git",
    
  }
];

const Projects = () => {
  return (
    <section id="projects" className="py-24 bg-secondary">
      <div className="container mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center gap-4 mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primaryText">Featured Projects</h2>
            <div className="h-[1px] bg-border flex-grow"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="glass-card rounded-2xl overflow-hidden group hover:shadow-2xl hover:shadow-accent/10 transition-all duration-300 flex flex-col"
              >
                <div className="relative overflow-hidden h-48">
                  <div className="absolute inset-0 bg-accent/20 group-hover:opacity-0 transition-opacity duration-300 z-10"></div>
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                
                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="text-2xl font-bold text-primaryText mb-3 group-hover:text-accent transition-colors">{project.title}</h3>
                  <p className="text-secondaryText mb-6 flex-grow">{project.description}</p>
                  
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.techStack.map(tech => (
                      <span key={tech} className="px-3 py-1 bg-background rounded-full text-xs font-medium text-accent border border-border">
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex items-center gap-4 mt-auto">
                    <a href={project.github} className="text-primaryText hover:text-accent transition-colors flex items-center gap-2">
                      <FaGithub size={20} />
                      <span className="text-sm font-medium">Code</span>
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
