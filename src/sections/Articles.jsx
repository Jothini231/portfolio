import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, ChevronLeft, ChevronRight } from 'lucide-react';

const STATIC_ARTICLES = [
  {
    title: 'Understanding Event-Driven Architecture: What It Is, Why It Matters, and How It Works',
    pubDate: '2026-07-04',
    link: 'https://medium.com/@jothini231/understanding-event-driven-architecture-what-it-is-why-it-matters-and-how-it-works-93245d52957d',
    thumbnail: 'https://cdn-images-1.medium.com/max/1024/1*D_E26JZVj8ZB_NYNBlAzxg.png',
    categories: ['Architecture', 'Backend'],
  },
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
  },
];

const Articles = () => {
  const carouselRef = useRef(null);

  const scroll = dir => {
    if (carouselRef.current) {
      const amt = dir === 'left' ? -carouselRef.current.offsetWidth : carouselRef.current.offsetWidth;
      carouselRef.current.scrollBy({ left: amt, behavior: 'smooth' });
    }
  };

  const fmt = d => new Date(d).toLocaleDateString(undefined, { year:'numeric', month:'short', day:'numeric' });

  return (
    <section id="articles" className="py-12 sm:py-14 bg-secondary">
      <div className="container mx-auto px-5 sm:px-8 md:px-12">
        <motion.div initial={{ opacity:0, y:50 }} whileInView={{ opacity:1, y:0 }}
          viewport={{ once:true, margin:'-100px' }} transition={{ duration:0.6 }}>

          <div className="flex items-center gap-4 mb-8 md:mb-12 justify-center flex-col text-center">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-primaryText">
              Latest <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-accent">Articles</span>
            </h2>
            <div className="flex items-center gap-2 mt-3">
              <div className="w-12 h-1 bg-accent rounded-full" />
              <div className="w-3 h-1 bg-accent rounded-full" />
              <div className="w-1 h-1 bg-accent rounded-full" />
            </div>
          </div>

          <div className="relative group">
            <button onClick={() => scroll('left')} aria-label="Previous articles"
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-6 z-10 bg-card p-2 sm:p-3 rounded-full shadow-xl border border-border text-primaryText hover:text-accent opacity-0 group-hover:opacity-100 transition-opacity hidden md:flex">
              <ChevronLeft size={22} />
            </button>
            <button onClick={() => scroll('right')} aria-label="Next articles"
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-6 z-10 bg-card p-2 sm:p-3 rounded-full shadow-xl border border-border text-primaryText hover:text-accent opacity-0 group-hover:opacity-100 transition-opacity hidden md:flex">
              <ChevronRight size={22} />
            </button>

            <div ref={carouselRef}
              className="flex overflow-x-auto gap-4 sm:gap-6 pb-6 pt-3 snap-x snap-mandatory"
              style={{ scrollbarWidth:'none', msOverflowStyle:'none' }}>
              {STATIC_ARTICLES.map((article, index) => (
                <motion.a key={index} href={article.link} target="_blank" rel="noopener noreferrer"
                  initial={{ opacity:0, y:30 }} whileInView={{ opacity:1, y:0 }}
                  viewport={{ once:true }} transition={{ duration:0.5, delay:index * 0.08 }}
                  className="w-[85vw] sm:w-[70vw] md:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)] snap-start shrink-0 group/card bg-card rounded-2xl overflow-hidden border border-border hover:border-blue-500/40 hover:shadow-xl hover:shadow-blue-500/5 hover:-translate-y-1 transition-all duration-300 flex flex-col">

                  <div className="relative h-40 sm:h-48 overflow-hidden bg-secondary flex-shrink-0 border-b border-border/30">
                    <img src={article.thumbnail} alt={article.title} referrerPolicy="no-referrer"
                      className="w-full h-full object-cover transition-transform duration-500 group-hover/card:scale-105" />
                  </div>

                  <div className="p-5 sm:p-6 flex flex-col flex-grow text-left">
                    <div className="flex justify-between items-center mb-3 sm:mb-4 gap-2">
                      <span className="text-[10px] sm:text-xs font-medium border border-border text-secondaryText px-2.5 py-0.5 rounded-full shrink-0 group-hover/card:border-blue-500/30 group-hover/card:text-blue-400 transition-colors duration-200">
                        {article.categories[0]}
                      </span>
                      <span className="text-xs text-secondaryText whitespace-nowrap">{fmt(article.pubDate)}</span>
                    </div>
                    <h3 className="text-sm sm:text-base font-semibold text-primaryText mb-4 leading-snug">
                      {article.title}
                    </h3>
                    
                    <div className="mt-auto pt-4 border-t border-border/50 flex items-center text-xs font-medium text-secondaryText group-hover/card:text-accent transition-colors duration-200">
                      Read on Medium
                      <ExternalLink size={13} className="ml-1.5" />
                    </div>
                  </div>
                </motion.a>
              ))}
            </div>

            <p className="text-center text-xs text-secondaryText mt-2 md:hidden">← Swipe to see more →</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Articles;
