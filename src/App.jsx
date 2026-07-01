import React from 'react';
import Navbar from './sections/Navbar';
import Hero from './sections/Hero';
import About from './sections/About';
import Skills from './sections/Skills';
import Achievements from './sections/Achievements';
import Projects from './sections/Projects';
import Articles from './sections/Articles';
import Contact from './sections/Contact';
import Footer from './sections/Footer';
import { ThemeProvider } from './context/ThemeContext';

function App() {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-background text-primaryText selection:bg-accent selection:text-white transition-colors duration-300">
        <Navbar />
        <main>
          <Hero />
          <About />
          <Skills />
          <Achievements />
          <Projects />
          <Articles />
          <Contact />
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;
