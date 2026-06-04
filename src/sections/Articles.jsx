import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';

const STATIC_ARTICLES = [
  {
    title: '5 Design Patterns Every Java Developer Must Know',
    pubDate: '2024-01-10',
    link: 'https://medium.com/@jothini231/5-design-patterns-every-java-developer-must-know-6267f7624fb5',
    thumbnail: '/design-patterns.png',
    categories: ['Java', 'Design Patterns'],
  },
  {
    title: 'SOLID Principles in Java Explained with Real-World Examples',
    pubDate: '2024-02-15',
    link: 'https://medium.com/@jothini231/solid-principles-in-java-explained-with-real-world-examples-581c1759bbe0',
    thumbnail: '/solid-principles.png',
    categories: ['Java', 'Architecture'],
  },
  {
    title: 'React Hooks: How They Work — Beginner-Friendly Guide',
    pubDate: '2024-03-22',
    link: 'https://medium.com/@jothini231/react-hooks-how-they-work-beginner-friendly-guide-9413dd6b6a5b',
    thumbnail: '/react-hooks.png',
    categories: ['React', 'Frontend'],
  }
];

const Articles = () => {
  
  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'short', day: 'numeric' };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  return (
    <section id="articles" className="py-24 bg-background">
      <div className="container mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center gap-4 mb-12 justify-center flex-col text-center">
            <h2 className="text-3xl md:text-5xl font-bold text-primaryText">Latest Articles</h2>
            <div className="w-24 h-1 bg-accent rounded-full mt-4"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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
                className="group bg-card rounded-2xl overflow-hidden border border-border hover:border-accentHover/50 transition-all duration-300 flex flex-col h-full hover:shadow-lg hover:shadow-accent/10 hover:-translate-y-2"
              >
                <div className="relative h-48 overflow-hidden bg-secondary flex-shrink-0">
                  <img 
                    src={article.thumbnail} 
                    alt={article.title} 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                
                <div className="p-6 flex flex-col flex-grow">
                  <div className="flex justify-between items-center mb-3">
                    <span className="text-xs font-medium text-accent bg-accent/10 px-3 py-1 rounded-full">
                      {article.categories[0]}
                    </span>
                    <span className="text-xs text-secondaryText whitespace-nowrap ml-2">
                      {formatDate(article.pubDate)}
                    </span>
                  </div>
                  
                  <h3 className="text-xl font-bold text-primaryText mb-3 line-clamp-2 group-hover:text-accentHover transition-colors">
                    {article.title}
                  </h3>
                  
                  <div className="mt-auto pt-4 flex items-center text-secondaryText group-hover:text-primaryText transition-colors">
                    <span className="text-sm font-medium">Read on Medium</span>
                    <ExternalLink size={16} className="ml-2" />
                  </div>
                </div>
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Articles;
