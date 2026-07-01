import React, { useEffect, useState, useRef, useCallback } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-scroll';
import profileImage from '../assets/profile.png';
import { useTheme } from '../context/ThemeContext';

/* ── Typewriter hook ── */
const useTypewriter = (words, speed = 80, pause = 1800) => {
  const [display, setDisplay] = useState('');
  const [wordIdx, setWordIdx] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = words[wordIdx % words.length];
    const timeout = setTimeout(() => {
      if (!deleting) {
        setDisplay(current.slice(0, display.length + 1));
        if (display.length + 1 === current.length) {
          setTimeout(() => setDeleting(true), pause);
        }
      } else {
        setDisplay(current.slice(0, display.length - 1));
        if (display.length === 0) {
          setDeleting(false);
          setWordIdx(i => i + 1);
        }
      }
    }, deleting ? speed / 2 : speed);
    return () => clearTimeout(timeout);
  }, [display, deleting, wordIdx, words, speed, pause]);

  return display;
};

/* ── Constellation Canvas ── */
const Constellation = ({ theme }) => {
  const canvasRef = useRef(null);
  const mouse = useRef({ x: -9999, y: -9999 });
  const animRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let dots = [];
    const DOT_COUNT = 80;
    const CONNECTION_DIST = 140;
    const MOUSE_DIST = 180;

    const isDark = theme === 'dark';
    const dotFill      = isDark ? 'rgba(59,130,246,0.75)' : 'rgba(59,100,220,0.3)';
    const lineFill     = (a) => isDark ? `rgba(59,130,246,${a * 0.35})` : `rgba(59,100,220,${a * 0.18})`;
    const mouseLineFill= (a) => isDark ? `rgba(96,165,250,${a * 0.6})`  : `rgba(59,100,220,${a * 0.32})`;

    const resize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };
    resize();
    window.addEventListener('resize', resize);

    /* Initialise dots */
    for (let i = 0; i < DOT_COUNT; i++) {
      dots.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.4,
        vy: (Math.random() - 0.5) * 0.4,
        r: Math.random() * 1.8 + 0.8,
      });
    }

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      /* Move dots */
      dots.forEach(d => {
        d.x += d.vx;
        d.y += d.vy;
        if (d.x < 0 || d.x > canvas.width)  d.vx *= -1;
        if (d.y < 0 || d.y > canvas.height) d.vy *= -1;
      });

      /* Draw connections */
      for (let i = 0; i < dots.length; i++) {
        for (let j = i + 1; j < dots.length; j++) {
          const dx = dots[i].x - dots[j].x;
          const dy = dots[i].y - dots[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < CONNECTION_DIST) {
            ctx.beginPath();
            ctx.moveTo(dots[i].x, dots[i].y);
            ctx.lineTo(dots[j].x, dots[j].y);
            ctx.strokeStyle = lineFill(1 - dist / CONNECTION_DIST);
            ctx.lineWidth = 0.8;
            ctx.stroke();
          }
        }

        /* Mouse connections */
        const mdx = dots[i].x - mouse.current.x;
        const mdy = dots[i].y - mouse.current.y;
        const mdist = Math.sqrt(mdx * mdx + mdy * mdy);
        if (mdist < MOUSE_DIST) {
          ctx.beginPath();
          ctx.moveTo(dots[i].x, dots[i].y);
          ctx.lineTo(mouse.current.x, mouse.current.y);
          ctx.strokeStyle = mouseLineFill(1 - mdist / MOUSE_DIST);
          ctx.lineWidth = 1;
          ctx.stroke();
        }
      }

      /* Draw dots */
      dots.forEach(d => {
        ctx.beginPath();
        ctx.arc(d.x, d.y, d.r, 0, Math.PI * 2);
        ctx.fillStyle = dotFill;
        ctx.fill();
      });

      animRef.current = requestAnimationFrame(draw);
    };

    draw();

    const onMouseMove = (e) => {
      const rect = canvas.getBoundingClientRect();
      mouse.current = { x: e.clientX - rect.left, y: e.clientY - rect.top };
    };
    const onMouseLeave = () => { mouse.current = { x: -9999, y: -9999 }; };

    canvas.addEventListener('mousemove', onMouseMove);
    canvas.addEventListener('mouseleave', onMouseLeave);

    return () => {
      cancelAnimationFrame(animRef.current);
      window.removeEventListener('resize', resize);
      canvas.removeEventListener('mousemove', onMouseMove);
      canvas.removeEventListener('mouseleave', onMouseLeave);
    };
  }, [theme]);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-auto z-0"
    />
  );
};

/* ── Grid dot background ── */
const GridBackground = () => (
  <div
    className="absolute inset-0 -z-10 opacity-[0.04] dark:opacity-[0.06]"
    style={{
      backgroundImage: 'radial-gradient(circle, rgb(59 130 246) 1px, transparent 1px)',
      backgroundSize: '32px 32px',
    }}
  />
);

/* ── Stagger variants ── */
const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
};
const item = {
  hidden: { opacity: 0, y: 28 },
  show:   { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
};

/* ════════════════════════════════════════ */
const Hero = () => {
  const role = useTypewriter(['Full Stack Developer', 'Spring Boot Dev', 'Problem Solver']);
  const { theme } = useTheme();

  return (
    <section id="hero" className="min-h-screen flex items-center relative overflow-hidden pt-20">

      {/* Grid dot bg */}
      <GridBackground />

      {/* Constellation canvas */}
      <Constellation theme={theme} />

      {/* Animated blobs */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <motion.div
          className="absolute top-[-10%] left-[-10%] w-[32rem] h-[32rem] bg-accent/10 rounded-full filter blur-3xl"
          animate={{ x: [0, 40, 0], y: [0, 30, 0], scale: [1, 1.1, 1] }}
          transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className="absolute top-[20%] right-[-10%] w-[28rem] h-[28rem] bg-blue-500/10 rounded-full filter blur-3xl"
          animate={{ x: [0, -40, 0], y: [0, -30, 0], scale: [1, 1.08, 1] }}
          transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
        />
        <motion.div
          className="absolute bottom-[-20%] left-[20%] w-[30rem] h-[30rem] bg-cyan-500/10 rounded-full filter blur-3xl"
          animate={{ x: [0, 30, 0], y: [0, 40, 0], scale: [1, 1.06, 1] }}
          transition={{ duration: 14, repeat: Infinity, ease: 'easeInOut', delay: 4 }}
        />
      </div>

      <div className="container mx-auto px-8 md:px-12 grid grid-cols-1 md:grid-cols-2 gap-8 items-center relative z-10">

        {/* ── Left: text ── */}
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="space-y-6 md:ml-4 lg:ml-8 lg:pr-8"
        >
          {/* Badge */}
          <motion.div variants={item}>
            <motion.span
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-accent/40 bg-accent/10 text-accent text-sm font-medium"
              animate={{ boxShadow: ['0 0 0px rgba(59,130,246,0)', '0 0 14px rgba(59,130,246,0.35)', '0 0 0px rgba(59,130,246,0)'] }}
              transition={{ duration: 2.5, repeat: Infinity }}
            >
              <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
              Welcome to my portfolio
            </motion.span>
          </motion.div>

          {/* Name */}
          <motion.h1
            variants={item}
            className="text-4xl sm:text-5xl xl:text-6xl font-bold font-poppins text-primaryText leading-tight"
          >
            Hi, I'm
            <br />
            <motion.span
              className="whitespace-nowrap inline-block pt-2 text-transparent bg-clip-text bg-gradient-to-r from-accent via-blue-400 to-cyan-400"
              animate={{ backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'] }}
              transition={{ duration: 5, repeat: Infinity, ease: 'linear' }}
              style={{ backgroundSize: '200% 200%' }}
            >
              Jothini Sivanesan
            </motion.span>
          </motion.h1>

          {/* Typewriter role */}
          <motion.h2
            variants={item}
            className="text-2xl md:text-3xl font-medium text-secondaryText h-10 flex items-center"
          >
            <span>{role}</span>
            <motion.span
              className="ml-1 inline-block w-0.5 h-7 bg-accent rounded-full"
              animate={{ opacity: [1, 0] }}
              transition={{ duration: 0.6, repeat: Infinity, repeatType: 'reverse' }}
            />
          </motion.h2>

          {/* Description */}
          <motion.p variants={item} className="text-secondaryText max-w-lg text-lg leading-relaxed">
            I build modern, scalable, and exceptional digital experiences. Passionate about turning complex problems into elegant solutions.
          </motion.p>

          {/* CTA buttons */}
          <motion.div variants={item} className="flex flex-wrap gap-4 pt-2">
            <Link to="projects" smooth={true} offset={-80} duration={500}>
              <motion.button
                className="px-8 py-3 bg-accent text-white rounded-full font-medium cursor-pointer shadow-lg shadow-accent/30"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.97 }}
                animate={{ boxShadow: ['0 4px 24px rgba(59,130,246,0.3)', '0 4px 36px rgba(59,130,246,0.55)', '0 4px 24px rgba(59,130,246,0.3)'] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                View Projects
              </motion.button>
            </Link>
            <motion.a
              href="/cv.pdf"
              target="_blank"
              rel="noreferrer"
              className="px-8 py-3 bg-transparent border border-border text-primaryText rounded-full font-medium cursor-pointer"
              whileHover={{ scale: 1.05, borderColor: 'rgba(59,130,246,0.6)', color: 'rgb(59 130 246)' }}
              whileTap={{ scale: 0.97 }}
              transition={{ duration: 0.2 }}
            >
              Download CV
            </motion.a>
          </motion.div>
        </motion.div>

        {/* ── Right: profile ── */}
        <motion.div
          initial={{ opacity: 0, scale: 0.7 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.3, type: 'spring', stiffness: 80 }}
          className="relative flex justify-center items-center mt-10 md:mt-0"
        >
          {/* Outer glow pulse */}
          <motion.div
            className="absolute w-80 h-80 rounded-full bg-accent/10"
            animate={{ scale: [1, 1.18, 1], opacity: [0.4, 0.15, 0.4] }}
            transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut' }}
          />

          {/* Profile image */}
          <motion.div
            animate={{ y: [0, -14, 0] }}
            transition={{ repeat: Infinity, duration: 4.5, ease: 'easeInOut' }}
            className="relative w-64 h-64 md:w-80 md:h-80 group z-10"
          >
            <img
              src={profileImage}
              alt="Jothini Sivanesan"
              className="w-full h-full object-cover rounded-full border-2 border-accent/40 shadow-2xl shadow-accent/20 brightness-90 group-hover:brightness-100 group-hover:border-accent transition-all duration-500 group-hover:scale-[1.03]"
            />
          </motion.div>
        </motion.div>

      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-secondaryText text-xs z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
      >
        <span className="tracking-widest uppercase">Scroll</span>
        <motion.div
          className="w-0.5 h-8 bg-gradient-to-b from-accent to-transparent rounded-full"
          animate={{ scaleY: [0, 1, 0], originY: 0 }}
          transition={{ duration: 1.4, repeat: Infinity, ease: 'easeInOut' }}
        />
      </motion.div>

    </section>
  );
};

export default Hero;
