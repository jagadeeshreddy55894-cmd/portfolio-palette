import { motion } from "framer-motion";
import { ExternalLink, Award, Trophy } from "lucide-react";
import SectionHeader from "./SectionHeader";

const certificates = [
  {
    title: "Introduction to Large Language Models",
    provider: "NPTEL",
    period: "Jan 2025 – Apr 2025",
    color: "card-glow-cyan",
  },
  {
    title: "Responsive Web Design Certification",
    provider: "FreeCodeCamp",
    period: "Aug 2023 – Nov 2023",
    color: "card-glow-purple",
  },
];

const achievements = [
  {
    title: "Technical Project Development",
    date: "Jan 2025",
    desc: "Built and deployed multiple projects in Machine Learning and System Design, demonstrating practical implementation skills.",
    icon: "🚀",
  },
  {
    title: "LeetCode",
    date: "Aug 2024",
    desc: "Solved 50+ problems focusing on data structures and algorithms, strengthening problem-solving and logical thinking skills.",
    icon: "💡",
  },
];

const CertificatesSection = () => {
  return (
    <section className="py-24 relative" id="certificates">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-glow-cyan/30 to-transparent" />
      <div className="container mx-auto px-6">
        <SectionHeader subtitle="Recognition" title="Certificates & Achievements" />

        {/* Certificates */}
        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto mb-16">
          {certificates.map((cert, i) => (
            <motion.div
              key={cert.title}
              initial={{ opacity: 0, y: 40, rotateY: 15 }}
              whileInView={{ opacity: 1, y: 0, rotateY: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2, duration: 0.6, type: "spring" }}
              whileHover={{ scale: 1.05, y: -8 }}
              className={`${cert.color} rounded-2xl p-6 transition-all cursor-default`}
            >
              <motion.div
                initial={{ rotate: -20, scale: 0 }}
                whileInView={{ rotate: 0, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.2 + 0.3, type: "spring", stiffness: 200 }}
              >
                <Award className="w-8 h-8 text-glow-orange mb-3" />
              </motion.div>
              <h3 className="font-heading text-lg font-bold text-foreground mb-1">{cert.title}</h3>
              <p className="text-glow-orange text-sm font-heading font-medium mb-2">{cert.provider}</p>
              <p className="text-xs text-muted-foreground font-mono mb-3">{cert.period}</p>
              <motion.a whileHover={{ x: 5 }} href="https://drive.google.com/file/d/1h6qGJiPVtp7NLq71jbH-pGovypbZUQaL/view" className="inline-flex items-center gap-1 text-sm text-glow-cyan hover:underline font-heading font-medium">
                View Certificate <ExternalLink className="w-3 h-3" />
              </motion.a>
            </motion.div>
          ))}
        </div>

        {/* Achievements */}
        <motion.h3
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="font-display text-3xl gradient-text text-center mb-8 font-bold italic"
        >
          Achievements
        </motion.h3>
        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {achievements.map((ach, i) => (
            <motion.div
              key={ach.title}
              initial={{ opacity: 0, x: i === 0 ? -40 : 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, type: "spring" }}
              whileHover={{ scale: 1.03 }}
              className="card-glow rounded-2xl p-6"
            >
              <div className="flex justify-between items-start mb-2">
                <div className="flex items-center gap-3">
                  <motion.span
                    animate={{ rotate: [0, 10, -10, 0] }}
                    transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
                    className="text-2xl"
                  >
                    {ach.icon}
                  </motion.span>
                  <h4 className="font-heading font-bold text-foreground">{ach.title}</h4>
                </div>
                <span className="text-xs text-glow-orange font-mono">{ach.date}</span>
              </div>
              <p className="text-sm text-muted-foreground">{ach.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CertificatesSection;
