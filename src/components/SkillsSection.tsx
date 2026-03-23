import { motion } from "framer-motion";
import SectionHeader from "./SectionHeader";
import { Brain, Code, Database, Wrench, Users } from "lucide-react";
import { ReactNode } from "react";

interface SkillCategory {
  label: string;
  icon: ReactNode;
  color: string;
  borderColor: string;
  glowColor: string;
  bgColor: string;
  skills: string[];
}

const skillCategories: SkillCategory[] = [
  {
    label: "Languages",
    icon: <Code className="w-5 h-5" />,
    color: "text-glow-orange",
    borderColor: "border-glow-orange/30",
    glowColor: "shadow-[0_0_20px_hsl(var(--glow-orange)/0.15)]",
    bgColor: "bg-glow-orange/5",
    skills: ["Python", "C++", "C", "Java"],
  },
  {
    label: "ML & AI",
    icon: <Brain className="w-5 h-5" />,
    color: "text-glow-purple",
    borderColor: "border-glow-purple/30",
    glowColor: "shadow-[0_0_20px_hsl(var(--glow-purple)/0.15)]",
    bgColor: "bg-glow-purple/5",
    skills: ["Pandas", "NumPy", "Scikit-learn", "TensorFlow", "Jupyter Notebook"],
  },
  {
    label: "Web Technologies",
    icon: <Code className="w-5 h-5" />,
    color: "text-glow-cyan",
    borderColor: "border-glow-cyan/30",
    glowColor: "shadow-[0_0_20px_hsl(var(--glow-cyan)/0.15)]",
    bgColor: "bg-glow-cyan/5",
    skills: ["HTML", "CSS"],
  },
  {
    label: "Tools & Platforms",
    icon: <Wrench className="w-5 h-5" />,
    color: "text-glow-green",
    borderColor: "border-glow-green/30",
    glowColor: "shadow-[0_0_20px_hsl(var(--glow-green)/0.15)]",
    bgColor: "bg-glow-green/5",
    skills: ["MySQL", "VS Code", "Git", "GitHub"],
  },
  {
    label: "Soft Skills",
    icon: <Users className="w-5 h-5" />,
    color: "text-glow-pink",
    borderColor: "border-glow-pink/30",
    glowColor: "shadow-[0_0_20px_hsl(var(--glow-pink)/0.15)]",
    bgColor: "bg-glow-pink/5",
    skills: ["Analytical Thinking", "Critical Thinking", "Team Collaboration", "Adaptability"],
  },
];

// Scrolling marquee of all skills
const allSkills = skillCategories.flatMap((c) => c.skills);
const marqueeSkills = [...allSkills, ...allSkills];

const SkillCard = ({ cat, index }: { cat: SkillCategory; index: number }) => (
  <motion.div
    initial={{ opacity: 0, y: 40, scale: 0.9 }}
    whileInView={{ opacity: 1, y: 0, scale: 1 }}
    viewport={{ once: true, margin: "-40px" }}
    transition={{ delay: index * 0.12, duration: 0.5, type: "spring" as const, stiffness: 120 }}
    whileHover={{ y: -6, scale: 1.02 }}
    className={`rounded-2xl border ${cat.borderColor} ${cat.bgColor} p-6 hover:${cat.glowColor} transition-all duration-300 group`}
  >
    {/* Header */}
    <div className="flex items-center gap-3 mb-5">
      <motion.div
        whileHover={{ rotate: 360 }}
        transition={{ duration: 0.5 }}
        className={`w-10 h-10 rounded-lg border ${cat.borderColor} ${cat.bgColor} flex items-center justify-center ${cat.color}`}
      >
        {cat.icon}
      </motion.div>
      <h3 className={`font-heading text-base font-bold ${cat.color}`}>{cat.label}</h3>
    </div>

    {/* Skills */}
    <div className="flex flex-wrap gap-2">
      {cat.skills.map((skill, i) => (
        <motion.div
          key={skill}
          initial={{ opacity: 0, x: -15 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.12 + 0.3 + i * 0.07, type: "spring" as const, stiffness: 150 }}
          whileHover={{ scale: 1.1, y: -2 }}
          className={`px-3 py-1.5 rounded-lg text-sm font-heading font-medium border ${cat.borderColor} text-foreground/90 bg-card/50 cursor-default transition-all hover:${cat.bgColor}`}
        >
          {skill}
        </motion.div>
      ))}
    </div>
  </motion.div>
);

const SkillsSection = () => {
  return (
    <section className="py-24 relative overflow-hidden" id="skills">
      {/* Subtle background accents */}
      <div className="absolute top-1/2 left-0 w-[400px] h-[400px] rounded-full bg-glow-purple/[0.03] blur-[120px]" />
      <div className="absolute top-1/3 right-0 w-[300px] h-[300px] rounded-full bg-glow-orange/[0.03] blur-[100px]" />

      <div className="container mx-auto px-6">
        <SectionHeader subtitle="What I Know" title="Technical Skills" />

        {/* Animated marquee */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="relative mb-16 overflow-hidden"
        >
          <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-background to-transparent z-10" />
          <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-background to-transparent z-10" />
          <div className="flex gap-4 animate-marquee whitespace-nowrap">
            {marqueeSkills.map((skill, i) => (
              <span
                key={`${skill}-${i}`}
                className="inline-block px-4 py-2 rounded-full border border-border/50 text-sm text-muted-foreground/60 font-heading"
              >
                {skill}
              </span>
            ))}
          </div>
        </motion.div>

        {/* Skill cards grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 max-w-5xl mx-auto">
          {skillCategories.map((cat, i) => (
            <SkillCard key={cat.label} cat={cat} index={i} />
          ))}

          {/* Extra decorative card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6, type: "spring" as const }}
            className="rounded-2xl border border-dashed border-border/50 p-6 flex flex-col items-center justify-center text-center"
          >
            <motion.span
              animate={{ rotate: [0, 10, -10, 0] }}
              transition={{ duration: 3, repeat: Infinity, repeatDelay: 2 }}
              className="text-3xl mb-3"
            >
              🚀
            </motion.span>
            <p className="text-sm font-heading text-muted-foreground">
              Always learning
            </p>
            <p className="text-xs text-muted-foreground/60 mt-1">
              Exploring new ML frameworks daily
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
