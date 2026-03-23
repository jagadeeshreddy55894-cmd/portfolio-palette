import { motion } from "framer-motion";
import { MapPin, Calendar, Award } from "lucide-react";
import SectionHeader from "./SectionHeader";

const education = [
  {
    degree: "B.Tech in Computer Science & Engineering",
    institution: "Lovely Professional University",
    location: "Jalandhar, Punjab, India",
    period: "Aug 2023 – Present",
    badge: "Currently Enrolled",
    badgeColor: "bg-glow-green/20 text-glow-green border-glow-green/30",
    description: "Current CGPA: 7.01. Focusing on Machine Learning, Data Science and Full Stack Development.",
    year: "2023 – Present",
  },
  {
    degree: "Intermediate — MPC Stream",
    institution: "Sri Chaitanya Junior College",
    location: "Vijayawada, Andhra Pradesh",
    period: "Jul 2021 – Mar 2023",
    badge: "95% Score",
    badgeColor: "bg-glow-orange/20 text-glow-orange border-glow-orange/30",
    description: "Achieved 95% in Mathematics, Physics and Chemistry stream. Strong foundation in analytical and problem-solving thinking.",
    year: "2021 – 2023",
  },
  {
    degree: "Matriculation — SSC",
    institution: "St. Claret High School",
    location: "Nalgonda, Andhra Pradesh",
    period: "Mar 2021",
    badge: "90% Score",
    badgeColor: "bg-glow-purple/20 text-glow-purple border-glow-purple/30",
    description: "Graduated with 90% percentage. Demonstrated exceptional academic discipline and consistency.",
    year: "2021",
  },
];

const EducationSection = () => {
  return (
    <section className="py-24 relative" id="education">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-glow-purple/30 to-transparent" />
      <div className="container mx-auto px-6">
        <SectionHeader subtitle="Academic Background" title="Education" />

        <div className="max-w-3xl mx-auto relative">
          {/* Timeline line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-glow-orange via-glow-purple to-glow-cyan" />

          {education.map((edu, i) => (
            <motion.div
              key={edu.degree}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2 }}
              className={`relative flex flex-col md:flex-row gap-6 mb-12 ${i % 2 === 0 ? 'md:flex-row-reverse' : ''}`}
            >
              {/* Timeline dot */}
              <div className="absolute left-8 md:left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-primary shadow-[0_0_12px_hsl(var(--glow-orange)/0.6)] z-10" />

              {/* Year label */}
              <div className={`hidden md:flex items-center justify-center flex-1 ${i % 2 === 0 ? 'text-right pr-8' : 'text-left pl-8'}`}>
                <span className="text-glow-orange font-display text-lg">{edu.year}</span>
              </div>

              {/* Card */}
              <div className="flex-1 ml-16 md:ml-0 card-glow rounded-2xl p-6">
                <div className="flex justify-between items-start flex-wrap gap-2 mb-2">
                  <h3 className="font-heading text-lg font-bold text-foreground">{edu.degree}</h3>
                  <span className={`text-xs px-3 py-1 rounded-full border font-heading ${edu.badgeColor}`}>
                    <Award className="w-3 h-3 inline mr-1" />{edu.badge}
                  </span>
                </div>
                <p className="text-glow-orange font-heading text-sm mb-2">{edu.institution}</p>
                <div className="flex flex-wrap gap-4 text-xs text-muted-foreground mb-3">
                  <span className="flex items-center gap-1"><MapPin className="w-3 h-3" />{edu.location}</span>
                  <span className="flex items-center gap-1"><Calendar className="w-3 h-3" />{edu.period}</span>
                </div>
                <p className="text-sm text-muted-foreground">{edu.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
