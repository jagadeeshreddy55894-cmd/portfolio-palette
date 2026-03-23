import { motion } from "framer-motion";

const SectionHeader = ({ subtitle, title }: { subtitle: string; title: string }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-50px" }}
    transition={{ duration: 0.6, type: "spring" }}
    className="text-center mb-16"
  >
    <motion.p
      initial={{ opacity: 0, letterSpacing: "0em" }}
      whileInView={{ opacity: 1, letterSpacing: "0.3em" }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay: 0.2 }}
      className="text-glow-orange font-heading text-xs uppercase mb-3 font-semibold"
    >
      {subtitle}
    </motion.p>
    <motion.h2
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: 0.3, type: "spring" }}
      className="font-display text-4xl md:text-5xl gradient-text mb-4 font-bold italic"
    >
      {title}
    </motion.h2>
    <motion.div
      initial={{ width: 0 }}
      whileInView={{ width: 40 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: 0.5 }}
      className="section-divider"
    />
  </motion.div>
);

export default SectionHeader;
