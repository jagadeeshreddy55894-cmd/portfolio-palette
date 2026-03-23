import { motion, useScroll, useTransform } from "framer-motion";
import { Github, Linkedin, Mail, Download } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";
import profileImg from "@/assets/profile-placeholder.png";
import { useRef } from "react";

const container = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.12, delayChildren: 0.3 } },
};
const item = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { type: "spring" as const, damping: 15 } },
};

const HeroSection = () => {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <section ref={ref} className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Parallax Background */}
      <motion.div className="absolute inset-0" style={{ y: bgY }}>
        <img src={heroBg} alt="" className="w-full h-full object-cover opacity-40" />
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/50 to-background" />
      </motion.div>

      {/* Floating orbs */}
      {[
        { pos: "top-20 left-20", size: "w-72 h-72", color: "bg-glow-orange/10", delay: "0s" },
        { pos: "bottom-20 right-20", size: "w-96 h-96", color: "bg-glow-purple/10", delay: "1s" },
        { pos: "top-1/2 left-1/2", size: "w-64 h-64", color: "bg-glow-cyan/5", delay: "2s" },
        { pos: "top-40 right-40", size: "w-48 h-48", color: "bg-glow-pink/5", delay: "1.5s" },
      ].map((orb, i) => (
        <div key={i} className={`absolute ${orb.pos} ${orb.size} rounded-full ${orb.color} blur-3xl float-animation`} style={{ animationDelay: orb.delay }} />
      ))}

      <motion.div style={{ y: textY, opacity }} className="relative z-10 container mx-auto px-6 flex flex-col lg:flex-row items-center gap-12">
        {/* Text */}
        <motion.div variants={container} initial="hidden" animate="show" className="flex-1 text-center lg:text-left">
          <motion.p variants={item} className="text-glow-orange font-heading text-sm tracking-[0.3em] uppercase mb-4 font-semibold">
            Machine Learning Engineer
          </motion.p>
          <motion.h1 variants={item} className="font-display text-5xl md:text-7xl lg:text-8xl mb-4 font-bold italic">
            <span className="gradient-text">Jagadeesh</span>
          </motion.h1>
          <motion.h2 variants={item} className="font-heading text-xl md:text-2xl text-foreground/80 mb-2 font-light tracking-wide">
            Mallidi Gana Jagadeesh Reddy
          </motion.h2>
          <motion.p variants={item} className="text-muted-foreground text-base max-w-lg mb-8 mx-auto lg:mx-0 leading-relaxed">
            Passionate about building intelligent systems with Machine Learning — 
            from fraud detection to neural networks, turning data into impact.
          </motion.p>

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
                whileHover={{ scale: 1.08, rotateZ: 1 }}
                whileTap={{ scale: 0.95 }}
                className="card-glow rounded-xl p-4 text-center relative overflow-hidden group cursor-default shimmer"
              >
                <div className="absolute top-1 left-1 glow-dot" />
                <div className="absolute top-1 right-1 glow-dot" />
                <div className="absolute bottom-1 left-1 glow-dot" />
                <div className="absolute bottom-1 right-1 glow-dot" />
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 1 + i * 0.15, type: "spring", stiffness: 200 }}
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
            <motion.a
              whileHover={{ scale: 1.05, boxShadow: "0 0 30px hsl(35 100% 55% / 0.4)" }}
              whileTap={{ scale: 0.95 }}
              href="mailto:ganareddy874@gmail.com"
              className="inline-flex items-center gap-2 px-8 py-3 rounded-full bg-primary text-primary-foreground font-heading font-semibold transition-all"
            >
              <Download className="w-4 h-4" /> Download Resume
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="mailto:ganareddy874@gmail.com"
              className="inline-flex items-center gap-2 px-8 py-3 rounded-full border border-primary text-primary font-heading font-semibold hover:bg-primary/10 transition-all"
            >
              <Mail className="w-4 h-4" /> Contact Me
            </motion.a>
            {[
              { href: "https://github.com/Jagadeeshreddy2006", icon: Github, hoverColor: "hover:border-glow-cyan hover:text-glow-cyan" },
              { href: "https://linkedin.com/in/jagadeeshreddy2006/", icon: Linkedin, hoverColor: "hover:border-glow-blue hover:text-glow-blue" },
            ].map((social) => (
              <motion.a
                key={social.href}
                whileHover={{ scale: 1.15, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`p-3 rounded-full border border-border ${social.hoverColor} transition-all`}
              >
                <social.icon className="w-5 h-5" />
              </motion.a>
            ))}
          </motion.div>
        </motion.div>

        {/* Profile image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.5, rotate: -10 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 1, delay: 0.5, type: "spring", stiffness: 100 }}
          className="flex-shrink-0"
        >
          <motion.div
            animate={{ y: [0, -12, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="relative w-64 h-64 md:w-80 md:h-80"
          >
            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-glow-orange via-glow-pink to-glow-purple p-1 pulse-glow">
              <div className="w-full h-full rounded-full bg-card overflow-hidden">
                <img src={profileImg} alt="Jagadeesh" className="w-full h-full object-cover" />
              </div>
            </div>
            <div className="absolute -inset-4 rounded-full border border-glow-orange/20 animate-spin" style={{ animationDuration: "20s" }} />
            <div className="absolute -inset-8 rounded-full border border-glow-purple/10 animate-spin" style={{ animationDuration: "30s", animationDirection: "reverse" }} />
            <div className="absolute -inset-12 rounded-full border border-glow-cyan/5 animate-spin" style={{ animationDuration: "40s" }} />
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 1.5, repeat: Infinity }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-muted-foreground"
      >
        <span className="text-xs font-heading tracking-widest uppercase">Scroll</span>
        <div className="w-5 h-8 rounded-full border border-muted-foreground/30 flex items-start justify-center p-1">
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-1.5 h-1.5 rounded-full bg-primary"
          />
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
