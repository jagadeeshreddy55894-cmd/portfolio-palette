import { motion } from "framer-motion";
import { Calendar, MapPin, ExternalLink } from "lucide-react";
import SectionHeader from "./SectionHeader";

const TrainingSection = () => {
  return (
    <section className="py-24 relative animated-gradient-bg" id="training">
      <div className="container mx-auto px-6">
        <SectionHeader subtitle="Hands-on Learning" title="Training" />

        <motion.div
          initial={{ opacity: 0, y: 50, scale: 0.95 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, type: "spring" }}
          whileHover={{ scale: 1.01 }}
          className="max-w-4xl mx-auto card-glow rounded-2xl p-8 flex flex-col md:flex-row gap-8 shimmer"
        >
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="md:w-1/3"
          >
            <h3 className="font-heading text-xl font-bold text-foreground mb-1">Data Structures & Algorithms</h3>
            <p className="text-glow-orange font-heading text-sm uppercase tracking-wider mb-4 font-semibold">Lovely Professional University</p>
            <div className="flex flex-col gap-2 text-sm text-muted-foreground">
              <motion.span whileHover={{ x: 5 }} className="flex items-center gap-2 transition-all"><Calendar className="w-4 h-4 text-glow-cyan" /> Jun 2025 – Jul 2025</motion.span>
              <motion.span whileHover={{ x: 5 }} className="flex items-center gap-2 transition-all"><MapPin className="w-4 h-4 text-glow-cyan" /> Jalandhar, Punjab</motion.span>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            className="md:w-2/3"
          >
            <p className="text-xs text-glow-orange font-heading uppercase tracking-wider mb-3 font-semibold">What I Did</p>
            <p className="text-muted-foreground text-sm leading-relaxed mb-4 italic">
              "Implemented core data structures including arrays, linked lists, stacks, queues, trees, heaps, and graphs. 
              Applied algorithmic techniques such as recursion, divide-and-conquer, greedy methods, and dynamic programming. 
              Developed a Hospital Management System with database integration and CRUD operations."
            </p>
            <div className="flex flex-wrap gap-2 mb-4">
              {["Arrays", "Linked Lists", "Trees", "Graphs", "Dynamic Programming", "Greedy"].map((t, i) => (
                <motion.span
                  key={t}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.6 + i * 0.08 }}
                  whileHover={{ scale: 1.1, y: -2 }}
                  className="text-xs px-3 py-1 rounded-full border border-glow-orange/30 text-glow-orange cursor-default"
                >
                  {t}
                </motion.span>
              ))}
            </div>
            <motion.a whileHover={{ x: 5 }} href="https://drive.google.com/file/d/1h4gTAS7GJ8DLfHSy5PALMLeaW2uAhW7C/view" className="inline-flex items-center gap-1 text-sm text-glow-cyan hover:underline font-heading font-medium">
              Certificate <ExternalLink className="w-3 h-3" />
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default TrainingSection;
