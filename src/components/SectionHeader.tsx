import { motion } from "framer-motion";

const SectionHeader = ({ subtitle, title }: { subtitle: string; title: string }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    className="text-center mb-16"
  >
    <p className="text-glow-orange font-heading text-xs tracking-[0.3em] uppercase mb-3">{subtitle}</p>
    <h2 className="font-display text-4xl md:text-5xl gradient-text mb-4">{title}</h2>
    <div className="section-divider" />
  </motion.div>
);

export default SectionHeader;
