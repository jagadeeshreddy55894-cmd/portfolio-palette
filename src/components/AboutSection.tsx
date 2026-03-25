import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";

const AboutSection = () => {
  return (
    <section className="py-24 relative overflow-hidden" id="about">
      {/* Background accents */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] rounded-full bg-glow-purple/[0.04] blur-[150px]" />
      <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] rounded-full bg-glow-orange/[0.04] blur-[120px]" />

      <div className="container mx-auto px-6 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, type: "spring" }}
          className="text-center mb-10"
        >
          <motion.p
            initial={{ opacity: 0, letterSpacing: "0em" }}
            whileInView={{ opacity: 1, letterSpacing: "0.3em" }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-glow-orange font-heading text-xs uppercase mb-3 font-semibold"
          >
            Introduction
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3, type: "spring" }}
            className="font-display text-4xl md:text-5xl gradient-text mb-4 font-bold italic"
          >
            About Me
          </motion.h2>
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: 40 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="section-divider"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.3, type: "spring", stiffness: 100 }}
          className="relative rounded-2xl border border-border/40 bg-card/40 backdrop-blur-sm p-8 md:p-12"
        >
          {/* Decorative corner accents */}
          <div className="absolute top-0 left-0 w-16 h-16 border-t-2 border-l-2 border-glow-orange/30 rounded-tl-2xl" />
          <div className="absolute bottom-0 right-0 w-16 h-16 border-b-2 border-r-2 border-glow-purple/30 rounded-br-2xl" />

          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5, type: "spring" }}
            className="flex justify-center mb-6"
          >
            <div className="w-12 h-12 rounded-full bg-glow-orange/10 border border-glow-orange/30 flex items-center justify-center">
              <Sparkles className="w-5 h-5 text-glow-orange" />
            </div>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="text-center text-lg md:text-xl leading-relaxed font-heading text-muted-foreground"
          >
            <span className="text-foreground font-semibold">Computer Science student</span>{" "}
            with a strong passion for{" "}
            <span className="text-glow-purple font-semibold">Machine Learning</span> and{" "}
            <span className="text-glow-cyan font-semibold">AI</span>, skilled in{" "}
            <span className="text-glow-orange font-semibold">Python</span>, data analysis, and
            predictive modeling. Experienced in building{" "}
            <span className="text-glow-green font-semibold">intelligent systems</span> and
            committed to leveraging technology to solve real-world problems with{" "}
            <span className="text-glow-pink font-semibold">impactful solutions</span>.
          </motion.p>

          {/* Animated bottom line */}
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="mt-8 h-px bg-gradient-to-r from-transparent via-glow-orange/40 to-transparent"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
