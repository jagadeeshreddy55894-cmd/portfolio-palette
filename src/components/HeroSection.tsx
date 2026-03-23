import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Phone, Download, ExternalLink } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";
import profileImg from "@/assets/profile-placeholder.png";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img src={heroBg} alt="" className="w-full h-full object-cover opacity-40" />
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/50 to-background" />
      </div>

      {/* Floating orbs */}
      <div className="absolute top-20 left-20 w-72 h-72 rounded-full bg-glow-orange/10 blur-3xl float-animation" />
      <div className="absolute bottom-20 right-20 w-96 h-96 rounded-full bg-glow-purple/10 blur-3xl float-animation" style={{ animationDelay: "1s" }} />
      <div className="absolute top-1/2 left-1/2 w-64 h-64 rounded-full bg-glow-cyan/5 blur-3xl float-animation" style={{ animationDelay: "2s" }} />

      <div className="relative z-10 container mx-auto px-6 flex flex-col lg:flex-row items-center gap-12">
        {/* Text */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex-1 text-center lg:text-left"
        >
          <p className="text-glow-orange font-heading text-sm tracking-[0.3em] uppercase mb-4">
            Machine Learning Engineer
          </p>
          <h1 className="font-display text-5xl md:text-7xl lg:text-8xl mb-4">
            <span className="gradient-text">Jagadeesh</span>
          </h1>
          <h2 className="font-heading text-2xl md:text-3xl text-foreground/80 mb-2">
            Mallidi Gana Jagadeesh Reddy
          </h2>
          <p className="text-muted-foreground text-lg max-w-lg mb-8 mx-auto lg:mx-0">
            Passionate about turning complex problems into clean, elegant solutions 
            using Machine Learning, Data Science & Full Stack Development.
          </p>

          {/* Trait cards */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-8">
            {[
              { icon: "⚡", title: "Fast Learner", desc: "Adapts quickly" },
              { icon: "🎯", title: "Detail Oriented", desc: "Pixel-perfect" },
              { icon: "🧠", title: "Problem Solver", desc: "Elegant solutions" },
              { icon: "🤝", title: "Team Player", desc: "Collaborative" },
            ].map((trait, i) => (
              <motion.div
                key={trait.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 + i * 0.1 }}
                className="card-glow rounded-xl p-4 text-center relative overflow-hidden group"
              >
                <div className="absolute top-1 left-1 glow-dot" />
                <div className="absolute top-1 right-1 glow-dot" />
                <div className="absolute bottom-1 left-1 glow-dot" />
                <div className="absolute bottom-1 right-1 glow-dot" />
                <div className="text-2xl mb-2">{trait.icon}</div>
                <p className="font-heading text-sm font-semibold text-foreground">{trait.title}</p>
                <p className="text-xs text-muted-foreground">{trait.desc}</p>
              </motion.div>
            ))}
          </div>

          {/* CTA buttons */}
          <div className="flex flex-wrap gap-4 justify-center lg:justify-start items-center">
            <a
              href="mailto:ganareddy874@gmail.com"
              className="inline-flex items-center gap-2 px-8 py-3 rounded-full bg-primary text-primary-foreground font-heading font-semibold hover:shadow-[0_0_30px_hsl(var(--glow-orange)/0.4)] transition-all"
            >
              <Download className="w-4 h-4" /> Download Resume
            </a>
            <a
              href="mailto:ganareddy874@gmail.com"
              className="inline-flex items-center gap-2 px-8 py-3 rounded-full border border-primary text-primary font-heading font-semibold hover:bg-primary/10 transition-all"
            >
              <Mail className="w-4 h-4" /> Contact Me
            </a>
            <a href="https://github.com/Jagadeeshreddy2006" target="_blank" rel="noopener noreferrer" className="p-3 rounded-full border border-border hover:border-glow-cyan hover:text-glow-cyan transition-all">
              <Github className="w-5 h-5" />
            </a>
            <a href="https://linkedin.com/in/jagadeeshreddy2006/" target="_blank" rel="noopener noreferrer" className="p-3 rounded-full border border-border hover:border-glow-blue hover:text-glow-blue transition-all">
              <Linkedin className="w-5 h-5" />
            </a>
          </div>
        </motion.div>

        {/* Profile image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="flex-shrink-0"
        >
          <div className="relative w-64 h-64 md:w-80 md:h-80">
            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-glow-orange via-glow-pink to-glow-purple p-1">
              <div className="w-full h-full rounded-full bg-card overflow-hidden">
                <img src={profileImg} alt="Jagadeesh" className="w-full h-full object-cover" />
              </div>
            </div>
            <div className="absolute -inset-4 rounded-full border border-glow-orange/20 animate-spin" style={{ animationDuration: "20s" }} />
            <div className="absolute -inset-8 rounded-full border border-glow-purple/10 animate-spin" style={{ animationDuration: "30s", animationDirection: "reverse" }} />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
