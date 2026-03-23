import { motion } from "framer-motion";
import SectionHeader from "./SectionHeader";

const skillCategories = [
  {
    label: "Languages",
    color: "glow-orange",
    skills: ["Python", "C++", "C", "Java"],
  },
  {
    label: "ML & Data",
    color: "glow-purple",
    skills: ["Pandas", "NumPy", "Scikit-learn", "TensorFlow"],
  },
  {
    label: "Web & Frameworks",
    color: "glow-cyan",
    skills: ["HTML", "CSS", "React.js", "Node.js"],
  },
  {
    label: "Tools & Platforms",
    color: "glow-green",
    skills: ["MySQL", "VS Code", "Jupyter Notebook", "Git", "GitHub"],
  },
  {
    label: "Soft Skills",
    color: "glow-pink",
    skills: ["Analytical Thinking", "Critical Thinking", "Team Collaboration", "Adaptability"],
  },
];

const colorMap: Record<string, string> = {
  "glow-orange": "border-glow-orange/40 hover:border-glow-orange hover:shadow-[0_0_15px_hsl(var(--glow-orange)/0.3)]",
  "glow-purple": "border-glow-purple/40 hover:border-glow-purple hover:shadow-[0_0_15px_hsl(var(--glow-purple)/0.3)]",
  "glow-cyan": "border-glow-cyan/40 hover:border-glow-cyan hover:shadow-[0_0_15px_hsl(var(--glow-cyan)/0.3)]",
  "glow-green": "border-glow-green/40 hover:border-glow-green hover:shadow-[0_0_15px_hsl(var(--glow-green)/0.3)]",
  "glow-pink": "border-glow-pink/40 hover:border-glow-pink hover:shadow-[0_0_15px_hsl(var(--glow-pink)/0.3)]",
};

const labelColorMap: Record<string, string> = {
  "glow-orange": "text-glow-orange",
  "glow-purple": "text-glow-purple",
  "glow-cyan": "text-glow-cyan",
  "glow-green": "text-glow-green",
  "glow-pink": "text-glow-pink",
};

const SkillsSection = () => {
  return (
    <section className="py-24 relative" id="skills">
      <div className="container mx-auto px-6">
        <SectionHeader subtitle="What I Know" title="Technical Skills" />

        <div className="space-y-10 max-w-4xl mx-auto">
          {skillCategories.map((cat, catIdx) => (
            <motion.div
              key={cat.label}
              initial={{ opacity: 0, x: catIdx % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: catIdx * 0.1 }}
            >
              <h3 className={`font-heading text-sm font-semibold tracking-wider uppercase mb-4 ${labelColorMap[cat.color]}`}>
                {cat.label}
              </h3>
              <div className="flex flex-wrap gap-3">
                {cat.skills.map((skill, i) => (
                  <motion.span
                    key={skill}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: catIdx * 0.1 + i * 0.05 }}
                    className={`skill-badge ${colorMap[cat.color]}`}
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
