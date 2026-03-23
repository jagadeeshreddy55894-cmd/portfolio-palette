import { motion } from "framer-motion";
import { ExternalLink, Award } from "lucide-react";
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
  },
  {
    title: "LeetCode",
    date: "Aug 2024",
    desc: "Solved 50+ problems focusing on data structures and algorithms, strengthening problem-solving and logical thinking skills.",
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
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className={`${cert.color} rounded-2xl p-6 hover:scale-[1.02] transition-transform`}
            >
              <Award className="w-8 h-8 text-glow-orange mb-3" />
              <h3 className="font-heading text-lg font-bold text-foreground mb-1">{cert.title}</h3>
              <p className="text-glow-orange text-sm font-heading mb-2">{cert.provider}</p>
              <p className="text-xs text-muted-foreground mb-3">{cert.period}</p>
              <a href="#" className="inline-flex items-center gap-1 text-sm text-glow-cyan hover:underline font-heading">
                View Certificate <ExternalLink className="w-3 h-3" />
              </a>
            </motion.div>
          ))}
        </div>

        {/* Achievements */}
        <div className="max-w-4xl mx-auto">
          <h3 className="font-display text-3xl gradient-text text-center mb-8">Achievements</h3>
          <div className="grid md:grid-cols-2 gap-6">
            {achievements.map((ach, i) => (
              <motion.div
                key={ach.title}
                initial={{ opacity: 0, x: i === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="card-glow rounded-2xl p-6"
              >
                <div className="flex justify-between items-start mb-2">
                  <h4 className="font-heading font-bold text-foreground">{ach.title}</h4>
                  <span className="text-xs text-glow-orange font-heading">{ach.date}</span>
                </div>
                <p className="text-sm text-muted-foreground">{ach.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CertificatesSection;
