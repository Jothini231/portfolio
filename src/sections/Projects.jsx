import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { FaGithub } from 'react-icons/fa';
import { ChevronLeft, ChevronRight, Users, User, ExternalLink } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

const projects = [
  {
    title: 'Student Project Showcase Portal',
    description: 'A full-stack, role-based platform to showcase student computing projects and automate approvals.',
    type: 'Group Project',
    imageDark: '/project-showcase.png',
    imageLight: '/project-showcase.png',
    features: [
      'Multi-Role Dashboards for Students, Recruiters & Lecturers',
      'Real-Time Activity Feed via Server-Sent Events (SSE)',
      'Rich project discoverability with category filters & tag search',
      'Resilient DB with automatic failover to in-memory backup',
    ],
    techStack: ['React 19', 'Node.js', 'Express.js', 'MongoDB', 'Tailwind CSS', 'JWT Auth'],
    github: 'https://github.com/Devani-Karthikeyan/Project-Showcase-Portal.git',
    demo: 'https://project-showcase-portal-nine.vercel.app/',
  },
  {
    title: 'SpendWise',
    description: 'A personal finance application to track expenses and visualize financial habits with advanced AI capabilities.',
    type: 'Individual Project',
    imageDark: '/expense-dashboard.png',
    imageLight: '/expense-dashboard.png',
    features: [
      'Secure JWT & Google OAuth authentication',
      'Google Gemini 2.5 Flash AI scans receipts & extracts expense details',
      'Cloudinary-based image uploads',
      'Interactive expense visualizations with Recharts',
      'Excel export for offline record-keeping',
    ],
    techStack: ['React 19', 'Vite', 'Tailwind CSS', 'Recharts', 'Node.js', 'Express.js', 'MongoDB', 'JWT', 'Google Gemini AI', 'Cloudinary', 'Nodemailer'],
    github: 'https://github.com/Jothini231/expense-tracker.git',
    demo: 'https://expense-tracker-dusky-five-wplwv9ra9b.vercel.app/',
  },
  {
    title: 'BookFair Stall Reservation System',
    description: 'A comprehensive full-stack book fair stall reservation platform designed to streamline event management.',
    type: 'Group Project',
    imageDark: '/bookfair-dashboard.png',
    imageLight: '/bookfair-dashboard.png',
    features: [
      'Interactive stall selection',
      'QR code ticket generation',
      'Automated email & payment processing',
      'Double-booking prevention',
    ],
    techStack: ['React', 'Java', 'Spring Boot', 'Spring Security', 'JWT', 'MySQL', 'Hibernate', 'Tailwind CSS', 'Thymeleaf', 'ZXing', 'JavaMailSender'],
    github: 'https://github.com/Sathiyabalan29/BookFair.git',
  },
  {
    title: 'Employee Management System',
    description: 'A centralized enterprise application for streamlining HR processes and employee management.',
    type: 'Individual Project',
    imageDark: '/employee-dashboard.png',
    imageLight: '/employee-dashboard.png',
    objectFit: 'object-contain',
    features: [
      'Role-based authentication',
      'Employee & department management',
      'Leave request workflows & payroll',
      'Interactive analytics dashboards',
    ],
    techStack: ['React', 'Spring Boot', 'Spring Security', 'JWT', 'MySQL', 'Hibernate', 'Tailwind CSS', 'Recharts'],
    github: 'https://github.com/Jothini231/employee-management-system.git',
  },
  {
    title: 'Spotify Clone',
    description: 'A responsive full-stack Spotify clone showcasing modern UI and core music streaming functionality.',
    type: 'Individual Project',
    imageDark: '/spotify-dashboard.png',
    imageLight: '/spotify-dashboard.png',
    features: [
      'Core music streaming features',
      'Modern and responsive UI',
      'Seamless playback controls',
    ],
    techStack: ['React', 'Tailwind CSS'],
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
    <section id="projects" className="py-16 sm:py-20 bg-background">
      <div className="container mx-auto px-5 sm:px-8 md:px-12">
        <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }} transition={{ duration: 0.6 }}>

          {/* Section Header */}
          <div className="mb-10 md:mb-14 text-center">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-primaryText">
              Featured <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-accent">Projects</span>
            </h2>
            <div className="flex items-center justify-center gap-2 mt-3">
              <div className="w-12 h-1 bg-accent rounded-full" />
              <div className="w-3 h-1 bg-accent rounded-full" />
              <div className="w-1 h-1 bg-accent rounded-full" />
            </div>
          </div>

          <div className="relative group">
            {/* Arrow buttons */}
            <button onClick={() => scroll('left')} aria-label="Previous projects"
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-6 z-10 bg-card p-2 sm:p-3 rounded-full shadow-lg border border-border text-secondaryText hover:text-accent opacity-0 group-hover:opacity-100 transition-all hidden md:flex">
              <ChevronLeft size={20} />
            </button>
            <button onClick={() => scroll('right')} aria-label="Next projects"
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-6 z-10 bg-card p-2 sm:p-3 rounded-full shadow-lg border border-border text-secondaryText hover:text-accent opacity-0 group-hover:opacity-100 transition-all hidden md:flex">
              <ChevronRight size={20} />
            </button>

            <div ref={carouselRef}
              className="flex overflow-x-auto gap-5 sm:gap-6 pb-6 pt-2 snap-x snap-mandatory"
              style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>

              {projects.map((project, index) => {
                const Icon = project.icon;
                return (
                  <motion.div key={project.title}
                    initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }} transition={{ duration: 0.45, delay: index * 0.12 }}
                    className="w-[88vw] sm:w-[72vw] md:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)] snap-start shrink-0 flex flex-col group/card
                      bg-card border border-border rounded-2xl overflow-hidden
                      hover:border-blue-500/40 hover:shadow-xl hover:shadow-blue-500/5
                      hover:-translate-y-1 transition-all duration-300">

                    {/* Banner: gradient (no image) or screenshot */}
                    {project.imageDark ? (
                      <div className="relative h-48 sm:h-56 flex-shrink-0 overflow-hidden bg-secondary">
                        <img
                          src={theme === 'dark' ? project.imageDark : project.imageLight}
                          alt={project.title}
                          className={`w-full h-full pointer-events-none ${project.objectFit || 'object-cover'} group-hover/card:scale-105 transition-transform duration-500`}
                        />
                        <span className="absolute top-3 right-3 flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[10px] sm:text-xs font-semibold bg-background/90 backdrop-blur-sm border border-border text-primaryText shadow-sm">
                          {project.type === 'Group Project' ? <Users size={11} /> : <User size={11} />}
                          {project.type}
                        </span>
                      </div>
                    ) : (
                      <div className={`relative h-48 sm:h-56 flex-shrink-0 bg-gradient-to-br ${project.gradient} flex flex-col items-center justify-center gap-3 overflow-hidden`}>
                        <div className="absolute -top-6 -right-6 w-32 h-32 rounded-full bg-white/5" />
                        <div className="absolute -bottom-8 -left-4 w-28 h-28 rounded-full bg-white/5" />
                        <div className="absolute top-2 left-2 w-12 h-12 rounded-full bg-white/5" />
                        <div className="relative z-10 p-4 rounded-2xl bg-white/15 backdrop-blur-sm border border-white/20 shadow-lg
                          group-hover/card:scale-110 group-hover/card:bg-white/20 transition-all duration-300">
                          <Icon size={30} className="text-white" strokeWidth={1.6} />
                        </div>
                        <span className="relative z-10 flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] sm:text-xs font-semibold bg-black/25 backdrop-blur-sm border border-white/20 text-white shadow-sm">
                          {project.type === 'Group Project' ? <Users size={11} /> : <User size={11} />}
                          {project.type}
                        </span>
                      </div>
                    )}

                    {/* Card Content */}
                    <div className="p-5 sm:p-6 flex flex-col flex-grow">

                      {/* Title */}
                      <h3 className="text-sm sm:text-base font-semibold text-primaryText mb-2 leading-snug group-hover/card:text-accent transition-colors duration-200">
                        {project.title}
                      </h3>

                      {/* Description */}
                      <p className="text-secondaryText text-xs sm:text-sm leading-relaxed mb-4">
                        {project.description}
                      </p>

                      {/* Features */}
                      <ul className="space-y-1.5 mb-5 flex-grow">
                        {project.features.map((feature, i) => (
                          <li key={i} className="flex items-start gap-2 text-secondaryText text-xs">
                            <span className="mt-0.5 w-1.5 h-1.5 rounded-full bg-accent shrink-0" />
                            {feature}
                          </li>
                        ))}
                      </ul>

                      {/* Tech Tags */}
                      <div className="flex flex-wrap gap-1.5 mb-5">
                        {project.techStack.map(tech => (
                          <span key={tech}
                            className="px-2.5 py-0.5 rounded-full text-[10px] sm:text-xs font-medium border border-border text-secondaryText
                              hover:border-blue-500 hover:text-blue-400 hover:bg-blue-500/10 transition-all duration-200 cursor-default">
                            {tech}
                          </span>
                        ))}
                      </div>

                      {/* Footer */}
                      <div className="pt-4 border-t border-border/50 flex items-center justify-between gap-4">
                        <a href={project.github} target="_blank" rel="noreferrer"
                          className="inline-flex items-center gap-2 text-xs font-medium text-secondaryText hover:text-accent transition-colors duration-200">
                          <FaGithub size={15} />
                          GitHub
                        </a>
                        {project.demo && (
                          <a href={project.demo} target="_blank" rel="noreferrer"
                            className="inline-flex items-center gap-1.5 text-xs font-medium text-blue-400 hover:text-blue-300 transition-colors duration-200">
                            <ExternalLink size={13} />
                            Live Demo
                          </a>
                        )}
                      </div>
                    </div>
                  </motion.div>
                );
              })}
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
