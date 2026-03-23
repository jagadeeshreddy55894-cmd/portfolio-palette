import { motion } from "framer-motion";
import { Calendar, MapPin, ExternalLink } from "lucide-react";
import SectionHeader from "./SectionHeader";

const TrainingSection = () => {
  return (
    <section className="py-24 relative animated-gradient-bg" id="training">
      <div className="container mx-auto px-6">
        <SectionHeader subtitle="Hands-on Learning" title="Training" />

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto card-glow rounded-2xl p-8 flex flex-col md:flex-row gap-8"
        >
          <div className="md:w-1/3">
            <h3 className="font-heading text-xl font-bold text-foreground mb-1">Data Structures & Algorithms</h3>
            <p className="text-glow-orange font-heading text-sm uppercase tracking-wider mb-4">Lovely Professional University</p>
            <div className="flex flex-col gap-2 text-sm text-muted-foreground">
              <span className="flex items-center gap-2"><Calendar className="w-4 h-4 text-glow-cyan" /> Jun 2025 – Jul 2025</span>
              <span className="flex items-center gap-2"><MapPin className="w-4 h-4 text-glow-cyan" /> Jalandhar, Punjab</span>
            </div>
          </div>
          <div className="md:w-2/3">
            <p className="text-xs text-glow-orange font-heading uppercase tracking-wider mb-3">What I Did</p>
            <p className="text-muted-foreground text-sm leading-relaxed mb-4 italic">
              "Implemented core data structures including arrays, linked lists, stacks, queues, trees, heaps, and graphs. 
              Applied algorithmic techniques such as recursion, divide-and-conquer, greedy methods, and dynamic programming. 
              Analyzed time and space complexity to optimize performance and scalability. 
              Developed a Hospital Management System with database integration and CRUD operations."
            </p>
            <div className="flex flex-wrap gap-2 mb-4">
              {["Arrays", "Linked Lists", "Trees", "Graphs", "Dynamic Programming", "Greedy"].map((t) => (
                <span key={t} className="text-xs px-3 py-1 rounded-full border border-glow-orange/30 text-glow-orange">{t}</span>
              ))}
            </div>
            <a href="#" className="inline-flex items-center gap-1 text-sm text-glow-cyan hover:underline font-heading">
              Certificate <ExternalLink className="w-3 h-3" />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TrainingSection;
