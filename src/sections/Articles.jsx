import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, ChevronLeft, ChevronRight } from 'lucide-react';

const STATIC_ARTICLES = [
  {
    title: 'From One Block to Many Pieces: A Simple Guide to Monolithic and Microservices Architecture',
    pubDate: '2026-06-28',
    link: 'https://medium.com/@jothini231/from-one-block-to-many-pieces-a-simple-guide-to-monolithic-and-microservices-architecture-ae5a27eb177f',
    thumbnail: 'https://cdn-images-1.medium.com/max/1024/1*7KnuizMa4kwTreC5YrXrHQ.jpeg',
    categories: ['Architecture', 'Backend'],
  },
  {
    title: 'Why Password Hashing and Salt Matter in Authentication',
    pubDate: '2026-06-06',
    link: 'https://medium.com/@jothini231/why-password-hashing-and-salt-matter-in-authentication-934f3f1956d6',
    thumbnail: 'https://cdn-images-1.medium.com/max/1024/1*xiBAGexhAQxbiH8xSkVoDA.png',
    categories: ['Security', 'Backend'],
  },
  {
    title: '5 Design Patterns Every Java Developer Must Know',
    pubDate: '2026-05-07',
    link: 'https://medium.com/@jothini231/5-design-patterns-every-java-developer-must-know-6267f7624fb5',
    thumbnail: 'https://cdn-images-1.medium.com/max/1024/1*XeY8_BKlKUohQuhfhtLkNw.png',
    categories: ['Java', 'Design Patterns'],
  },
  {
    title: 'SOLID Principles in Java Explained with Real-World Examples',
    pubDate: '2026-05-01',
    link: 'https://medium.com/@jothini231/solid-principles-in-java-explained-with-real-world-examples-581c1759bbe0',
    thumbnail: 'https://cdn-images-1.medium.com/max/1024/1*PdHbMwTMwKnfElddzFxIlA.png',
    categories: ['Java', 'Architecture'],
  },
  {
    title: 'React Hooks: How They Work (Beginner-Friendly Guide)',
    pubDate: '2026-04-25',
    link: 'https://medium.com/@jothini231/react-hooks-how-they-work-beginner-friendly-guide-9413dd6b6a5b',
    thumbnail: 'https://cdn-images-1.medium.com/max/1024/1*zZ8ksbFhuO-FFsZOtU4ojQ.png',
    categories: ['React', 'Frontend'],
  },
  {
    title: 'Understanding Software Licenses',
    pubDate: '2025-05-27',
    link: 'https://medium.com/@jothini231/understanding-software-licenses-dcef2849c994',
    thumbnail: 'https://cdn-images-1.medium.com/max/640/1*2IylwleOiSvQiTmUdrHepA.webp',
    categories: ['Software Engineering', 'General'],
  }
];

const Articles = () => {
  const carouselRef = useRef(null);

  const scroll = (direction) => {
    if (carouselRef.current) {
      const { current } = carouselRef;
      const scrollAmount = direction === 'left' ? -current.offsetWidth : current.offsetWidth;
      current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };
  
  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'short', day: 'numeric' };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  return (
    <section id="articles" className="py-24 bg-secondary">
      <div className="container mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center gap-4 mb-12 justify-center flex-col text-center">
            <h2 className="text-3xl md:text-5xl font-bold text-primaryText">
              Latest <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-accent">Articles</span>
            </h2>
            <div className="flex items-center gap-2 mt-4">
              <div className="w-12 h-1 bg-accent rounded-full"></div>
              <div className="w-3 h-1 bg-accent rounded-full"></div>
              <div className="w-1 h-1 bg-accent rounded-full"></div>
            </div>
          </div>

          <div className="relative group">
            <button 
              onClick={() => scroll('left')}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-6 z-10 bg-card p-3 rounded-full shadow-xl border border-border text-primaryText hover:text-accent opacity-0 group-hover:opacity-100 transition-opacity hidden md:flex"
              aria-label="Previous articles"
            >
              <ChevronLeft size={24} />
            </button>
            
            <button 
              onClick={() => scroll('right')}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-6 z-10 bg-card p-3 rounded-full shadow-xl border border-border text-primaryText hover:text-accent opacity-0 group-hover:opacity-100 transition-opacity hidden md:flex"
              aria-label="Next articles"
            >
              <ChevronRight size={24} />
            </button>

            <div 
              ref={carouselRef}
              className="flex overflow-x-auto gap-6 pb-8 pt-4 snap-x snap-mandatory scrollbar-hide"
              style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
            >
              {STATIC_ARTICLES.map((article, index) => (
                <motion.a
                  key={index}
                  href={article.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="w-full md:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)] snap-start shrink-0 group/card bg-card rounded-2xl overflow-hidden border border-border hover:border-accentHover/50 transition-all duration-300 flex flex-col hover:shadow-lg hover:shadow-accent/10 hover:-translate-y-2"
                >
                  <div className="relative h-48 overflow-hidden bg-secondary flex-shrink-0">
                    <img 
                      src={article.thumbnail} 
                      alt={article.title} 
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover transition-transform duration-500 group-hover/card:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover/card:opacity-100 transition-opacity duration-300"></div>
                  </div>
                  
                  <div className="p-6 flex flex-col flex-grow w-full text-left">
                    <div className="flex justify-between items-center mb-3">
                      <span className="text-xs font-medium text-accent bg-accent/10 px-3 py-1 rounded-full">
                        {article.categories[0]}
                      </span>
                      <span className="text-xs text-secondaryText whitespace-nowrap ml-2">
                        {formatDate(article.pubDate)}
                      </span>
                    </div>
                    
                    <h3 className="text-xl font-bold text-primaryText mb-3 group-hover/card:text-accentHover transition-colors">
                      {article.title}
                    </h3>
                    
                    <div className="mt-auto pt-4 flex items-center text-secondaryText group-hover/card:text-primaryText transition-colors">
                      <span className="text-sm font-medium">Read on Medium</span>
                      <ExternalLink size={16} className="ml-2" />
                    </div>
                  </div>
                </motion.a>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Articles;
