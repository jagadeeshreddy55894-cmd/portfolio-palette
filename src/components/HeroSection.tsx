import { motion, useScroll, useTransform } from "framer-motion";
import { Github, Linkedin, Mail, Download, ChevronDown } from "lucide-react";
import profileImg from "@/assets/profile-placeholder.png";
import { useRef } from "react";

const container = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.15, delayChildren: 0.4 } },
};
const item = {
  hidden: { opacity: 0, y: 25 },
  show: { opacity: 1, y: 0, transition: { type: "spring" as const, damping: 20, stiffness: 100 } },
};

// Animated background particles
const Particle = ({ delay, x, y, size }: { delay: number; x: string; y: string; size: number }) => (
  <motion.div
    className="absolute rounded-full bg-primary/20"
    style={{ left: x, top: y, width: size, height: size }}
    animate={{
      opacity: [0, 0.6, 0],
      scale: [0.5, 1.2, 0.5],
      y: [0, -30, 0],
    }}
    transition={{ duration: 4, repeat: Infinity, delay, ease: "easeInOut" }}
  />
);

const HeroSection = () => {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);

  return (
    <section ref={ref} className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Clean dark gradient background */}
      <div className="absolute inset-0 bg-background" />
      <motion.div className="absolute inset-0" style={{ y: bgY }}>
        {/* Subtle grid pattern */}
        <div className="absolute inset-0 opacity-[0.03]" style={{
          backgroundImage: `linear-gradient(hsl(var(--foreground)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--foreground)) 1px, transparent 1px)`,
          backgroundSize: '60px 60px'
        }} />
        {/* Radial glow behind content */}
        <div className="absolute top-1/2 left-1/3 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] rounded-full bg-glow-orange/[0.04] blur-[120px]" />
        <div className="absolute top-1/3 right-1/4 w-[500px] h-[500px] rounded-full bg-glow-purple/[0.03] blur-[100px]" />
        <div className="absolute bottom-1/4 left-1/2 w-[400px] h-[400px] rounded-full bg-glow-cyan/[0.02] blur-[100px]" />
      </motion.div>

      {/* Floating particles */}
      {[
        { delay: 0, x: "10%", y: "20%", size: 4 },
        { delay: 1.2, x: "25%", y: "70%", size: 3 },
        { delay: 0.5, x: "75%", y: "15%", size: 5 },
        { delay: 2, x: "85%", y: "60%", size: 3 },
        { delay: 0.8, x: "50%", y: "80%", size: 4 },
        { delay: 1.5, x: "15%", y: "50%", size: 3 },
        { delay: 2.5, x: "65%", y: "40%", size: 4 },
        { delay: 3, x: "90%", y: "30%", size: 3 },
      ].map((p, i) => (
        <Particle key={i} {...p} />
      ))}

      <motion.div style={{ opacity }} className="relative z-10 container mx-auto px-6 flex flex-col lg:flex-row items-center gap-16 pt-16">
        {/* Text content */}
        <motion.div variants={container} initial="hidden" animate="show" className="flex-1 text-center lg:text-left">
          {/* Status badge */}
          <motion.div variants={item} className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-glow-green/30 bg-glow-green/5 mb-6">
            <span className="w-2 h-2 rounded-full bg-glow-green animate-pulse" />
            <span className="text-glow-green text-xs font-heading font-medium tracking-wide">Open to Opportunities</span>
          </motion.div>

          <motion.p variants={item} className="text-primary font-heading text-sm tracking-[0.25em] uppercase mb-3 font-semibold">
            Machine Learning Engineer
          </motion.p>

          <motion.h1 variants={item} className="font-display text-5xl md:text-6xl lg:text-7xl mb-3 font-bold">
            <span className="text-foreground">Mallidi Gana</span>
            <br />
            <span className="gradient-text">Jagadeesh Reddy</span>
          </motion.h1>

          <motion.div variants={item} className="flex items-center gap-3 justify-center lg:justify-start mb-6">
            <div className="h-px w-12 bg-gradient-to-r from-primary to-transparent" />
            <p className="text-muted-foreground text-base max-w-md leading-relaxed">
              Building intelligent systems with Machine Learning — turning raw data into real-world impact through predictive models and smart automation.
            </p>
          </motion.div>

          {/* Trait cards */}
          <motion.div variants={item} className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-8">
            {[
              { icon: "⚡", title: "Fast Learner", desc: "Adapts quickly" },
              { icon: "🎯", title: "Detail Oriented", desc: "Precision-driven" },
              { icon: "🧠", title: "Problem Solver", desc: "Elegant solutions" },
              { icon: "🤝", title: "Team Player", desc: "Collaborative" },
            ].map((trait, i) => (
              <motion.div
                key={trait.title}
                whileHover={{ scale: 1.06, y: -4, boxShadow: "0 8px 30px hsl(var(--glow-orange) / 0.15)" }}
                whileTap={{ scale: 0.97 }}
                transition={{ type: "spring" as const, stiffness: 300 }}
                className="card-glow rounded-xl p-4 text-center relative overflow-hidden cursor-default group"
              >
                <div className="absolute top-1.5 left-1.5 glow-dot opacity-60 group-hover:opacity-100 transition-opacity" />
                <div className="absolute top-1.5 right-1.5 glow-dot opacity-60 group-hover:opacity-100 transition-opacity" />
                <div className="absolute bottom-1.5 left-1.5 glow-dot opacity-60 group-hover:opacity-100 transition-opacity" />
                <div className="absolute bottom-1.5 right-1.5 glow-dot opacity-60 group-hover:opacity-100 transition-opacity" />
                <motion.div
                  initial={{ scale: 0, rotate: -30 }}
                  animate={{ scale: 1, rotate: 0 }}
                  transition={{ delay: 1.2 + i * 0.12, type: "spring" as const, stiffness: 250 }}
                  className="text-2xl mb-2"
                >
                  {trait.icon}
                </motion.div>
                <p className="font-heading text-sm font-semibold text-foreground">{trait.title}</p>
                <p className="text-xs text-muted-foreground">{trait.desc}</p>
              </motion.div>
            ))}
          </motion.div>

          {/* CTA buttons */}
<motion.div variants={item} className="flex flex-wrap gap-4 justify-center lg:justify-start items-center">
  {/* BUTTON 1: Download CV */}
  <motion.a
    whileHover={{ scale: 1.04 }}
    whileTap={{ scale: 0.97 }}
    href="/resume.pdf"
    download="Jagadeesh_Reddy_CV.pdf"
    className="inline-flex items-center gap-2 px-8 py-3 rounded-full bg-primary text-primary-foreground font-heading font-semibold text-sm hover:shadow-[0_0_25px_hsl(var(--glow-orange)/0.35)] transition-shadow"
  >
    <Download className="w-4 h-4" /> Download CV
  </motion.a>

  {/* BUTTON 2: Contact Me */}
  <motion.a
    whileHover={{ scale: 1.04 }}
    whileTap={{ scale: 0.97 }}
    href="#contact"
    className="inline-flex items-center gap-2 px-8 py-3 rounded-full border border-primary/50 text-foreground font-heading font-semibold text-sm hover:bg-primary/10 transition-colors"
  >
    Contact Me
  </motion.a>
            {[
              { href: "https://github.com/Jagadeeshreddy2006", icon: Github, hc: "hover:border-glow-cyan hover:text-glow-cyan hover:shadow-[0_0_15px_hsl(var(--glow-cyan)/0.2)]" },
              { href: "https://linkedin.com/in/jagadeeshreddy2006/", icon: Linkedin, hc: "hover:border-glow-blue hover:text-glow-blue hover:shadow-[0_0_15px_hsl(var(--glow-blue)/0.2)]" },
            ].map((s) => (
              <motion.a
                key={s.href}
                whileHover={{ scale: 1.12, rotate: 5 }}
                whileTap={{ scale: 0.92 }}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`p-3 rounded-full border border-border transition-all ${s.hc}`}
              >
                <s.icon className="w-5 h-5" />
              </motion.a>
            ))}
          </motion.div>
        </motion.div>

        {/* Profile image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.7 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.6, type: "spring" as const, stiffness: 80 }}
          className="flex-shrink-0 hidden lg:block"
        >
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            className="relative w-72 h-72"
          >
            {/* Outer rotating gradient ring */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
              className="absolute -inset-3 rounded-full"
              style={{ background: "conic-gradient(from 0deg, hsl(var(--glow-orange)), hsl(var(--glow-purple)), hsl(var(--glow-cyan)), hsl(var(--glow-pink)), hsl(var(--glow-orange)))", opacity: 0.3 }}
            />
            <div className="absolute -inset-3 rounded-full bg-background/80 backdrop-blur-sm" style={{ margin: 2 }} />
            
            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-glow-orange/80 via-glow-pink/60 to-glow-purple/80 p-[2px]">
              <div className="w-full h-full rounded-full bg-card overflow-hidden">
                <img src={profileImg} alt="Jagadeesh" className="w-full h-full object-cover" />
              </div>
            </div>

            {/* Orbit dots */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
              className="absolute -inset-6"
            >
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-glow-orange shadow-[0_0_8px_hsl(var(--glow-orange))]" />
            </motion.div>
            <motion.div
              animate={{ rotate: -360 }}
              transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
              className="absolute -inset-10"
            >
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-glow-cyan shadow-[0_0_6px_hsl(var(--glow-cyan))]" />
            </motion.div>
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="flex flex-col items-center gap-1 text-muted-foreground/50"
        >
          <span className="text-[10px] font-heading tracking-[0.3em] uppercase">Scroll</span>
          <ChevronDown className="w-4 h-4" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
