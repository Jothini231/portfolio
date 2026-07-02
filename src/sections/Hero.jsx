import React, { useEffect, useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-scroll';
import profileImage from '../assets/profile.png';
import { useTheme } from '../context/ThemeContext';

/* ── Cycle-once typewriter ── */
const useCycleOnce = (words, typeSpeed = 80, deleteSpeed = 45, pause = 800) => {
  const [display, setDisplay]   = useState('');
  const [wordIdx, setWordIdx]   = useState(0);
  const [deleting, setDeleting] = useState(false);
  const isLast = wordIdx === words.length - 1;
  const done   = isLast && !deleting && display === words[wordIdx];

  useEffect(() => {
    if (done) return;
    const word = words[wordIdx];
    if (!deleting) {
      if (display.length < word.length) {
        const t = setTimeout(() => setDisplay(word.slice(0, display.length + 1)), typeSpeed);
        return () => clearTimeout(t);
      } else if (!isLast) {
        const t = setTimeout(() => setDeleting(true), pause);
        return () => clearTimeout(t);
      }
    } else {
      if (display.length > 0) {
        const t = setTimeout(() => setDisplay(d => d.slice(0, -1)), deleteSpeed);
        return () => clearTimeout(t);
      } else {
        setDeleting(false);
        setWordIdx(i => i + 1);
      }
    }
  }, [display, deleting, wordIdx, done, isLast, words, typeSpeed, deleteSpeed, pause]);

  return { display, done };
};

/* ── Constellation Canvas ── */
const Constellation = ({ theme }) => {
  const canvasRef = useRef(null);
  const mouse     = useRef({ x: -9999, y: -9999 });
  const animRef   = useRef(null);
  const themeRef  = useRef(theme);
  useEffect(() => { themeRef.current = theme; }, [theme]);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx    = canvas.getContext('2d');
    const N = 80, CDIST = 140, MDIST = 180;

    const resize = () => { canvas.width = canvas.offsetWidth; canvas.height = canvas.offsetHeight; };
    resize();
    window.addEventListener('resize', resize);

    const dots = Array.from({ length: N }, () => ({
      x: Math.random() * canvas.width,  y: Math.random() * canvas.height,
      vx: (Math.random() - 0.5) * 0.4, vy: (Math.random() - 0.5) * 0.4,
      r: Math.random() * 1.8 + 0.8,
    }));

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      const dark = themeRef.current === 'dark';
      const dotFill  = dark ? 'rgba(59,130,246,0.75)' : 'rgba(59,100,220,0.3)';
      const line     = a => dark ? `rgba(59,130,246,${a*0.35})` : `rgba(59,100,220,${a*0.18})`;
      const mLine    = a => dark ? `rgba(96,165,250,${a*0.6})`  : `rgba(59,100,220,${a*0.32})`;

      dots.forEach(d => {
        d.x += d.vx; d.y += d.vy;
        if (d.x < 0 || d.x > canvas.width)  d.vx *= -1;
        if (d.y < 0 || d.y > canvas.height) d.vy *= -1;
      });

      for (let i = 0; i < dots.length; i++) {
        for (let j = i+1; j < dots.length; j++) {
          const dx = dots[i].x-dots[j].x, dy = dots[i].y-dots[j].y;
          const dist = Math.sqrt(dx*dx+dy*dy);
          if (dist < CDIST) { ctx.beginPath(); ctx.moveTo(dots[i].x,dots[i].y); ctx.lineTo(dots[j].x,dots[j].y); ctx.strokeStyle=line(1-dist/CDIST); ctx.lineWidth=0.8; ctx.stroke(); }
        }
        const mdx=dots[i].x-mouse.current.x, mdy=dots[i].y-mouse.current.y;
        const md=Math.sqrt(mdx*mdx+mdy*mdy);
        if (md < MDIST) { ctx.beginPath(); ctx.moveTo(dots[i].x,dots[i].y); ctx.lineTo(mouse.current.x,mouse.current.y); ctx.strokeStyle=mLine(1-md/MDIST); ctx.lineWidth=1; ctx.stroke(); }
      }
      dots.forEach(d => { ctx.beginPath(); ctx.arc(d.x,d.y,d.r,0,Math.PI*2); ctx.fillStyle=dotFill; ctx.fill(); });
      animRef.current = requestAnimationFrame(draw);
    };
    draw();

    const onMove  = e => { const r=canvas.getBoundingClientRect(); mouse.current={x:e.clientX-r.left,y:e.clientY-r.top}; };
    const onLeave = () => { mouse.current={x:-9999,y:-9999}; };
    canvas.addEventListener('mousemove', onMove);
    canvas.addEventListener('mouseleave', onLeave);
    return () => { cancelAnimationFrame(animRef.current); window.removeEventListener('resize',resize); canvas.removeEventListener('mousemove',onMove); canvas.removeEventListener('mouseleave',onLeave); };
  }, []);

  return <canvas ref={canvasRef} className="absolute inset-0 w-full h-full pointer-events-auto z-0" />;
};

/* ── Grid bg ── */
const GridBackground = () => (
  <div className="absolute inset-0 -z-10 opacity-[0.04] dark:opacity-[0.06]"
    style={{ backgroundImage:'radial-gradient(circle, rgb(59 130 246) 1px, transparent 1px)', backgroundSize:'32px 32px' }} />
);

/* ── Scroll indicator ── */
const ScrollIndicator = ({ className = '' }) => (
  <motion.div className={`flex flex-col items-center gap-2 text-secondaryText text-xs z-10 ${className}`}
    initial={{ opacity:0 }} animate={{ opacity:1 }} transition={{ delay:2 }}>
    <span className="tracking-widest uppercase">Scroll</span>
    <motion.div className="w-0.5 h-8 bg-gradient-to-b from-accent to-transparent rounded-full"
      animate={{ scaleY:[0,1,0], originY:0 }} transition={{ duration:1.4, repeat:Infinity, ease:'easeInOut' }} />
  </motion.div>
);

/* ── Stagger variants ── */
const container = { hidden:{}, show:{ transition:{ staggerChildren:0.12 } } };
const item = { hidden:{ opacity:0, y:28 }, show:{ opacity:1, y:0, transition:{ duration:0.6, ease:[0.22,1,0.36,1] } } };

/* ══════════════════════════════════════════════════ */
const Hero = () => {
  const { theme } = useTheme();
  const ROLES = ['Full Stack Developer', 'Spring Boot Dev', 'Software Engineering Undergraduate'];
  const { display, done } = useCycleOnce(ROLES);

  return (
    <section id="hero" className="min-h-screen flex items-center relative overflow-hidden pt-20 pb-10">

      <GridBackground />
      <Constellation theme={theme} />

      {/* Blobs */}
      <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
        <motion.div className="absolute top-[-10%] left-[-10%] w-64 sm:w-[32rem] h-64 sm:h-[32rem] bg-accent/10 rounded-full filter blur-3xl"
          animate={{ x:[0,40,0], y:[0,30,0], scale:[1,1.1,1] }} transition={{ duration:10, repeat:Infinity, ease:'easeInOut' }} />
        <motion.div className="absolute top-[20%] right-[-10%] w-56 sm:w-[28rem] h-56 sm:h-[28rem] bg-blue-500/10 rounded-full filter blur-3xl"
          animate={{ x:[0,-40,0], y:[0,-30,0], scale:[1,1.08,1] }} transition={{ duration:12, repeat:Infinity, ease:'easeInOut', delay:2 }} />
        <motion.div className="absolute bottom-[-20%] left-[20%] w-60 sm:w-[30rem] h-60 sm:h-[30rem] bg-cyan-500/10 rounded-full filter blur-3xl"
          animate={{ x:[0,30,0], y:[0,40,0], scale:[1,1.06,1] }} transition={{ duration:14, repeat:Infinity, ease:'easeInOut', delay:4 }} />
      </div>

      <div className="container mx-auto px-5 sm:px-8 md:px-12 grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-0 items-center relative z-10 w-full">

        {/* ── Left: text ── */}
        <motion.div variants={container} initial="hidden" animate="show"
          className="space-y-4 sm:space-y-5 text-center md:text-left order-1 md:order-1">

          {/* Badge */}
          <motion.div variants={item} className="flex justify-center md:justify-start">
            <motion.span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-accent/40 bg-accent/10 text-accent text-sm font-medium"
              animate={{ boxShadow:['0 0 0px rgba(59,130,246,0)','0 0 14px rgba(59,130,246,0.35)','0 0 0px rgba(59,130,246,0)'] }}
              transition={{ duration:2.5, repeat:Infinity }}>
              <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
              Welcome to my portfolio
            </motion.span>
          </motion.div>

          {/* Name */}
          <motion.h1 variants={item} className="font-bold font-poppins text-primaryText leading-tight">
            <span className="text-3xl sm:text-4xl md:text-4xl lg:text-5xl xl:text-6xl">Hi, I'm</span>
            <br />
            <motion.span className="whitespace-nowrap text-2xl sm:text-3xl md:text-3xl lg:text-4xl xl:text-5xl inline-block pt-1 text-transparent bg-clip-text bg-gradient-to-r from-accent via-blue-400 to-cyan-400"
              animate={{ backgroundPosition:['0% 50%','100% 50%','0% 50%'] }}
              transition={{ duration:5, repeat:Infinity, ease:'linear' }}
              style={{ backgroundSize:'200% 200%' }}>
              Jothini Sivanesan
            </motion.span>
          </motion.h1>

          {/* Typewriter */}
          <motion.h2 variants={item} className="text-base sm:text-lg md:text-xl lg:text-2xl font-medium text-secondaryText flex items-center justify-center md:justify-start min-h-[2rem]">
            <span>{display}</span>
            {!done && (
              <motion.span className="ml-1 inline-block w-0.5 h-5 bg-accent rounded-full"
                animate={{ opacity:[1,0] }} transition={{ duration:0.5, repeat:Infinity, repeatType:'reverse' }} />
            )}
          </motion.h2>

          {/* Description */}
          <motion.p variants={item} className="text-secondaryText text-sm sm:text-base lg:text-lg leading-relaxed max-w-lg mx-auto md:mx-0">
            I build modern, scalable, and exceptional digital experiences. Passionate about turning complex problems into elegant solutions.
          </motion.p>

          {/* CTAs */}
          <motion.div variants={item} className="flex flex-col sm:flex-row gap-3 pt-1 items-center md:items-start justify-center md:justify-start">
            <Link to="projects" smooth={true} offset={-80} duration={500} className="w-full sm:w-auto">
              <motion.button className="w-full sm:w-auto px-8 py-3 bg-accent text-white rounded-full font-semibold cursor-pointer shadow-lg shadow-accent/30 text-sm sm:text-base"
                whileHover={{ scale:1.05 }} whileTap={{ scale:0.97 }}
                animate={{ boxShadow:['0 4px 24px rgba(59,130,246,0.3)','0 4px 36px rgba(59,130,246,0.55)','0 4px 24px rgba(59,130,246,0.3)'] }}
                transition={{ duration:2, repeat:Infinity }}>
                View Projects
              </motion.button>
            </Link>
            <motion.a href="/cv.pdf" target="_blank" rel="noreferrer"
              className="w-full sm:w-auto px-8 py-3 bg-transparent border-2 border-border text-gray-900 dark:text-primaryText rounded-full font-semibold cursor-pointer text-center text-sm sm:text-base"
              whileHover={{ scale:1.05, borderColor:'rgba(59,130,246,0.6)', color:'rgb(59 130 246)' }}
              whileTap={{ scale:0.97 }} transition={{ duration:0.2 }}>
              Download CV
            </motion.a>
          </motion.div>
        </motion.div>

        {/* ── Right: profile ── */}
        <motion.div initial={{ opacity:0, scale:0.7 }} animate={{ opacity:1, scale:1 }}
          transition={{ duration:0.9, delay:0.3, type:'spring', stiffness:80 }}
          className="relative flex flex-col justify-center items-center order-2 md:order-2">

          {/* Glow ring */}
          <motion.div className="absolute w-52 h-52 sm:w-72 sm:h-72 md:w-80 md:h-80 rounded-full bg-accent/10"
            animate={{ scale:[1,1.18,1], opacity:[0.4,0.15,0.4] }}
            transition={{ duration:3.5, repeat:Infinity, ease:'easeInOut' }} />

          {/* Image */}
          <motion.div animate={{ y:[0,-14,0] }} transition={{ repeat:Infinity, duration:4.5, ease:'easeInOut' }}
            className="relative w-40 h-40 xs:w-48 xs:h-48 sm:w-60 sm:h-60 md:w-72 md:h-72 lg:w-80 lg:h-80 group z-10">
            <img src={profileImage} alt="Jothini Sivanesan"
              className="w-full h-full object-cover rounded-full border-2 border-accent/40 shadow-2xl shadow-accent/20 brightness-90 group-hover:brightness-100 group-hover:border-accent transition-all duration-500 group-hover:scale-[1.03]" />
          </motion.div>

          {/* Scroll — mobile only, below image */}
          <ScrollIndicator className="flex md:hidden mt-6" />
        </motion.div>
      </div>

      {/* Scroll — desktop only, absolute bottom */}
      <ScrollIndicator className="hidden md:flex absolute bottom-8 left-1/2 -translate-x-1/2" />

    </section>
  );
};

export default Hero;
