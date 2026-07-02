import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { FaGithub } from 'react-icons/fa';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

const projects = [
  {
    title: 'BookFair Stall Reservation System (Group project)',
    description: 'Built a full-stack book fair stall reservation system with interactive stall selection, JWT authentication, QR code ticket generation, email automation, payment processing, and double-booking prevention.',
    imageDark:  '/bookfair-dashboard.png',
    imageLight: '/bookfair-dashboard-light.png',
    techStack: ['React','Java','Spring Boot','Spring Security','JWT','MySQL','Hibernate','Tailwind CSS','Thymeleaf','ZXing','JavaMailSender'],
    github: 'https://github.com/Sathiyabalan29/BookFair.git',
  },
  {
    title: 'Employee Management System',
    description: 'Built a full-stack Employee Management System with role-based authentication, employee and department management, leave request workflows, payroll processing, and interactive HR analytics dashboards.',
    imageDark:  '/employee-dashboard.png',
    imageLight: '/employee-dashboard-light.png',
    techStack: ['React','Spring Boot','Spring Security','JWT','MySQL','Hibernate','Tailwind CSS','Recharts'],
    github: 'https://github.com/Jothini231/employee-management-system.git',
  },
  {
    title: 'Expense Tracker',
    description: 'A comprehensive personal finance application to track daily expenses, manage budgets, and visualize spending habits.',
    imageDark:  '/expense-dashboard.png',
    imageLight: '/expense-dashboard-light.png',
    techStack: ['React','Node.js','Express','MongoDB','Tailwind CSS','GitHub Actions'],
    github: 'https://github.com/Jothini231/expense-tracker.git',
  },
  {
    title: 'Spotify Clone',
    description: 'Built a responsive full-stack Spotify clone showcasing modern UI and core music streaming features using React, Vite, and Tailwind CSS.',
    imageDark:  '/spotify-dashboard.png',
    imageLight: '/spotify-dashboard.png',
    techStack: ['React','Tailwind CSS'],
    github: 'https://github.com/Jothini231/spotify-clone.git',
  },
];

const Projects = () => {
  const carouselRef = useRef(null);
  const { theme } = useTheme();

  const scroll = dir => {
    if (carouselRef.current) {
      const amt = dir === 'left' ? -carouselRef.current.offsetWidth : carouselRef.current.offsetWidth;
      carouselRef.current.scrollBy({ left: amt, behavior: 'smooth' });
    }
  };

  return (
    <section id="projects" className="py-12 sm:py-14 bg-background">
      <div className="container mx-auto px-5 sm:px-8 md:px-12">
        <motion.div initial={{ opacity:0, y:50 }} whileInView={{ opacity:1, y:0 }}
          viewport={{ once:true, margin:'-100px' }} transition={{ duration:0.6 }}>

          <div className="flex items-center gap-4 mb-8 md:mb-12 justify-center flex-col text-center">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-primaryText">
              Featured <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-accent">Projects</span>
            </h2>
            <div className="flex items-center gap-2 mt-3">
              <div className="w-12 h-1 bg-accent rounded-full" />
              <div className="w-3 h-1 bg-accent rounded-full" />
              <div className="w-1 h-1 bg-accent rounded-full" />
            </div>
          </div>

          <div className="relative group">
            {/* Arrow buttons — desktop only */}
            <button onClick={() => scroll('left')} aria-label="Previous projects"
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-6 z-10 bg-card p-2 sm:p-3 rounded-full shadow-xl border border-border text-primaryText hover:text-accent opacity-0 group-hover:opacity-100 transition-opacity hidden md:flex">
              <ChevronLeft size={22} />
            </button>
            <button onClick={() => scroll('right')} aria-label="Next projects"
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-6 z-10 bg-card p-2 sm:p-3 rounded-full shadow-xl border border-border text-primaryText hover:text-accent opacity-0 group-hover:opacity-100 transition-opacity hidden md:flex">
              <ChevronRight size={22} />
            </button>

            <div ref={carouselRef}
              className="flex overflow-x-auto gap-4 sm:gap-6 pb-6 pt-3 snap-x snap-mandatory"
              style={{ scrollbarWidth:'none', msOverflowStyle:'none' }}>
              {projects.map((project, index) => (
                <motion.div key={project.title}
                  initial={{ opacity:0, y:30 }} whileInView={{ opacity:1, y:0 }}
                  viewport={{ once:true }} transition={{ duration:0.5, delay:index * 0.15 }}
                  className="w-[85vw] sm:w-[70vw] md:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)] snap-start shrink-0 glass-card rounded-2xl overflow-hidden group/card hover:shadow-2xl hover:shadow-accent/10 transition-all duration-300 flex flex-col">

                  {/* Image */}
                  <div className="relative overflow-hidden h-40 sm:h-48 flex-shrink-0">
                    <div className="absolute inset-0 bg-accent/20 group-hover/card:opacity-0 transition-opacity duration-300 z-10" />
                    <img src={theme === 'dark' ? project.imageDark : project.imageLight}
                      alt={project.title}
                      className="w-full h-full object-cover transform group-hover/card:scale-110 transition-transform duration-500" />
                  </div>

                  {/* Content */}
                  <div className="p-4 sm:p-6 flex flex-col flex-grow text-left">
                    <h3 className="text-base sm:text-lg lg:text-xl font-bold text-primaryText mb-2 sm:mb-3 group-hover/card:text-accentHover transition-colors leading-snug">
                      {project.title}
                    </h3>
                    <p className="text-secondaryText text-xs sm:text-sm mb-4 flex-grow leading-relaxed">{project.description}</p>

                    <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-4">
                      {project.techStack.map(tech => (
                        <span key={tech} className="px-2 sm:px-3 py-0.5 sm:py-1 bg-background rounded-full text-xs font-medium text-accent border border-border">
                          {tech}
                        </span>
                      ))}
                    </div>

                    <div className="flex items-center gap-3 mt-auto">
                      <a href={project.github} target="_blank" rel="noreferrer"
                        className="text-primaryText hover:text-accentHover transition-colors flex items-center gap-1.5">
                        <FaGithub size={18} />
                        <span className="text-xs sm:text-sm font-medium">Code</span>
                      </a>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Mobile swipe hint */}
            <p className="text-center text-xs text-secondaryText mt-2 md:hidden">← Swipe to see more →</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
