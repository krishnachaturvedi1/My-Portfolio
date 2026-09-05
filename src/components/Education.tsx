import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { GraduationCap, School, BookOpen, Award } from "lucide-react";

const education = [
  {
    icon: GraduationCap,
    degree: "B.Tech – Computer Science & Engineering (Data Science)",
    institution: "Buddha Institute of Technology, Gorakhpur",
    period: "2023 – Present",
    grade: "78.27% (Till 6th Semester)",
    description:
      "Specializing in Data Science with core focus on Machine Learning, Natural Language Processing, Full-Stack Web Development, Data Structures, and Database Management.",
    highlight: "Academic Merit Holder",
  },
  {
    icon: School,
    degree: "Intermediate (PCM) – CBSE",
    institution: "Air Force School, Gorakhpur",
    period: "2022 – 2023",
    grade: "67.33%",
    description:
      "Completed Senior Secondary Education under Central Board of Secondary Education with Physics, Chemistry, and Mathematics.",
    highlight: "Science Stream",
  },
  {
    icon: BookOpen,
    degree: "High School – CBSE",
    institution: "Divine Public School, Mohanapur",
    period: "2020 – 2021",
    grade: "92.6%",
    description:
      "Graduated with High Distinction across Mathematics, Science, and Computer Foundations under CBSE board.",
    highlight: "Distinction: 92.6%",
  },
];

const Education = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="education" className="py-20 md:py-32 bg-secondary/30" ref={ref}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <span className="inline-block px-3.5 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold uppercase tracking-wider mb-3">
              Academic Background
            </span>
            <h2 className="section-heading">Education</h2>
            <p className="section-subheading mx-auto">
              Formal academic milestones and foundation in computer science and data disciplines.
            </p>
          </motion.div>

          {/* Education Cards */}
          <div className="grid md:grid-cols-3 gap-6">
            {education.map((edu, index) => (
              <motion.div
                key={edu.degree}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.15 * index }}
                className="skill-card relative overflow-hidden group flex flex-col justify-between border border-border/80 hover:border-primary/50"
              >
                {/* Background Gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

                {/* Content */}
                <div className="relative">
                  {/* Top Bar with Icon & Badge */}
                  <div className="flex items-center justify-between gap-2 mb-4">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                      <edu.icon className="w-6 h-6" />
                    </div>
                    <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-primary/10 text-primary border border-primary/20">
                      {edu.highlight}
                    </span>
                  </div>

                  {/* Degree */}
                  <h3 className="text-lg font-bold text-foreground mb-1.5 leading-snug">
                    {edu.degree}
                  </h3>

                  {/* Institution */}
                  <p className="text-primary font-semibold text-sm mb-1">
                    {edu.institution}
                  </p>

                  {/* Period */}
                  <p className="text-xs text-muted-foreground mb-3">
                    {edu.period}
                  </p>

                  {/* Grade Badge */}
                  <div className="inline-block px-3 py-1 rounded-lg bg-background border border-border text-foreground font-bold text-sm mb-4 shadow-sm">
                    Score: {edu.grade}
                  </div>

                  {/* Description */}
                  <p className="text-muted-foreground text-xs sm:text-sm leading-relaxed">
                    {edu.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;

