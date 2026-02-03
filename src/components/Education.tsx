import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { GraduationCap, School, BookOpen } from "lucide-react";

const education = [
  {
    icon: GraduationCap,
    degree: "B.Tech CSE (Data Science)",
    institution: "Buddha Institute of Technology",
    period: "2022 – Present",
    grade: "CGPA: 77.92% (till 4th semester)",
    description: "Specializing in Data Science with focus on machine learning, data analytics, and software development.",
  },
  {
    icon: School,
    degree: "Intermediate (PCM)",
    institution: "Airforce School (CBSE)",
    period: "2020 – 2022",
    grade: "CBSE Board",
    description: "Completed higher secondary education with Physics, Chemistry, and Mathematics.",
  },
  {
    icon: BookOpen,
    degree: "High School",
    institution: "Divine Public School (CBSE)",
    period: "2020",
    grade: "CBSE Board",
    description: "Strong academic foundation with focus on science and mathematics.",
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
            <h2 className="section-heading">Education</h2>
            <p className="section-subheading mx-auto">
              My academic journey and qualifications
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
                className="skill-card relative overflow-hidden group"
              >
                {/* Background Gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                {/* Content */}
                <div className="relative">
                  {/* Icon */}
                  <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-5">
                    <edu.icon className="w-7 h-7 text-primary" />
                  </div>

                  {/* Degree */}
                  <h3 className="text-xl font-bold text-foreground mb-2">
                    {edu.degree}
                  </h3>

                  {/* Institution */}
                  <p className="text-primary font-medium mb-2">
                    {edu.institution}
                  </p>

                  {/* Period */}
                  <p className="text-sm text-muted-foreground mb-3">
                    {edu.period}
                  </p>

                  {/* Grade Badge */}
                  <div className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
                    {edu.grade}
                  </div>

                  {/* Description */}
                  <p className="text-muted-foreground text-sm leading-relaxed">
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
