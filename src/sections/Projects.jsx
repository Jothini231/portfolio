import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const projects = [
  {
    title: "BookFair Stall Reservation System (Group project)",
    description: "Built a full-stack book fair stall reservation system with interactive stall selection, JWT authentication, QR code ticket generation, email automation, payment processing, and double-booking prevention.",
    image:"https://images.unsplash.com/photo-1507842217343-583bb7270b66?auto=format&fit=crop&q=80&w=600",
    techStack: ["React","Java","Spring Boot","Spring Security","JWT","MySQL","Hibernate","Tailwind CSS","Thymeleaf","ZXing","JavaMailSender"],
    github: "https://github.com/Sathiyabalan29/BookFair.git",
    
  },
  {
    title: "Employee Management System",
    description: "Built a full-stack Employee Management System with role-based authentication, employee and department management, leave request workflows, payroll processing, and interactive HR analytics dashboards.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=600",
    techStack: ["React","Spring Boot","Spring Security", "JWT","MySQL","Hibernate","Tailwind CSS","Recharts"],
    github: "https://github.com/Jothini231/employee-management-system.git",
    
  },
  {
    title: "Expense Tracker",
    description: "A comprehensive personal finance application to track daily expenses, manage budgets, and visualize spending habits.",
    image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&q=80&w=600",
    techStack: ["React", "Node.js", "Express", "MongoDB", "Tailwind CSS", "GitHub Actions"],
    github: "https://github.com/Jothini231/expense-tracker.git",
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
          <div className="flex items-center gap-4 mb-12 justify-center flex-col text-center">
            <h2 className="text-3xl md:text-5xl font-bold text-primaryText">Featured Projects</h2>
            <div className="w-24 h-1 bg-accent rounded-full mt-4"></div>
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
                  <h3 className="text-2xl font-bold text-primaryText mb-3 group-hover:text-accentHover transition-colors">{project.title}</h3>
                  <p className="text-secondaryText mb-6 flex-grow">{project.description}</p>
                  
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.techStack.map(tech => (
                      <span key={tech} className="px-3 py-1 bg-background rounded-full text-xs font-medium text-accent border border-border">
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex items-center gap-4 mt-auto">
                    <a href={project.github} className="text-primaryText hover:text-accentHover transition-colors flex items-center gap-2">
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
