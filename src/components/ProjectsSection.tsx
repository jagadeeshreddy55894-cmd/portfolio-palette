import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import SectionHeader from "./SectionHeader";

const projects = [
  {
    title: "Pension Fraud Detection",
    subtitle: "Python, ML",
    period: "Aug 2025 – Nov 2025",
    description: "Developed a pension fraud detection system using Python and Pandas to identify suspicious multi-scheme enrollments and improve data reliability. Implemented automated logic to group beneficiaries and detect duplicate or anomalous pension claims across multiple schemes.",
    tech: ["Python", "Pandas", "NumPy", "Machine Learning"],
    link: "#",
    color: "card-glow",
  },
  {
    title: "File System Recovery Tool",
    subtitle: "Python",
    period: "Jan 2025 – May 2025",
    description: "Developed a Python-based utility simulating a custom file system with features such as file creation, deletion, reading, and backup/restore operations. Applied core OS concepts including block allocation and data recovery.",
    tech: ["Python", "Git", "File System Simulation"],
    link: "#",
    color: "card-glow-purple",
  },
];

const ProjectsSection = () => {
  return (
    <section className="py-24 relative" id="projects">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-glow-orange/30 to-transparent" />
      <div className="container mx-auto px-6">
        <SectionHeader subtitle="My Work" title="Projects" />

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50, rotateX: 10 }}
              whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2, duration: 0.7, type: "spring" }}
              whileHover={{ scale: 1.03, y: -5 }}
              className={`${project.color} rounded-2xl p-6 group transition-all duration-300`}
            >
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: "100%" }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.2 + 0.5, duration: 0.8 }}
                className="h-px bg-gradient-to-r from-glow-orange/50 to-transparent mb-4"
              />
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="font-heading text-xl font-bold text-foreground">{project.title}</h3>
                  <p className="text-glow-orange text-sm font-heading font-medium">{project.subtitle}</p>
                </div>
                <motion.span
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.2 + 0.3 }}
                  className="text-xs text-muted-foreground font-mono"
                >
                  {project.period}
                </motion.span>
              </div>
              <p className="text-muted-foreground text-sm leading-relaxed mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((t, ti) => (
                  <motion.span
                    key={t}
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.2 + 0.4 + ti * 0.1, type: "spring" }}
                    className="text-xs px-3 py-1 rounded-full border border-glow-cyan/30 text-glow-cyan"
                  >
                    {t}
                  </motion.span>
                ))}
              </div>
              <motion.a
                whileHover={{ x: 5 }}
                href={project.link}
                className="inline-flex items-center gap-1 text-sm text-primary hover:underline font-heading font-medium"
              >
                View Project <ExternalLink className="w-3 h-3" />
              </motion.a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
