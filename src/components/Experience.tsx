import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Award, Cloud, GraduationCap } from "lucide-react";

const experiences = [
  {
    icon: GraduationCap,
    title: "Fundamentals of Object-Oriented Programming",
    organization: "NPTEL – IIT Roorkee",
    date: "2024",
    description: "Completed with Elite Certificate achieving 69% score. Gained deep understanding of OOP concepts, design patterns, and best practices.",
    badge: "Elite Certificate",
  },
  {
    icon: Cloud,
    title: "Cloud Mastery Workshop",
    organization: "Hyper Cloud Digital Solutions",
    date: "2024",
    description: "Intensive workshop covering cloud computing fundamentals, deployment strategies, and modern cloud architecture practices.",
    badge: "Certified",
  },
];

const Experience = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="experience" className="py-20 md:py-32" ref={ref}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <h2 className="section-heading">Experience & Training</h2>
            <p className="section-subheading mx-auto">
              Certifications and courses that have shaped my expertise
            </p>
          </motion.div>

          {/* Timeline */}
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-border hidden md:block" />

            <div className="space-y-8">
              {experiences.map((exp, index) => (
                <motion.div
                  key={exp.title}
                  initial={{ opacity: 0, x: -30 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.2 * index }}
                  className="relative pl-0 md:pl-16"
                >
                  {/* Timeline Dot */}
                  <div className="absolute left-3 top-6 w-6 h-6 rounded-full bg-primary hidden md:flex items-center justify-center shadow-lg shadow-primary/30">
                    <div className="w-2 h-2 rounded-full bg-primary-foreground" />
                  </div>

                  <div className="glass-card rounded-2xl p-6 md:p-8">
                    <div className="flex flex-col md:flex-row md:items-start gap-4 md:gap-6">
                      {/* Icon */}
                      <div className="flex-shrink-0">
                        <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center">
                          <exp.icon className="w-7 h-7 text-primary" />
                        </div>
                      </div>

                      {/* Content */}
                      <div className="flex-1">
                        <div className="flex flex-wrap items-center gap-3 mb-2">
                          <h3 className="text-xl font-bold text-foreground">
                            {exp.title}
                          </h3>
                          <span className="px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold">
                            {exp.badge}
                          </span>
                        </div>
                        <p className="text-primary font-medium mb-2">
                          {exp.organization}
                        </p>
                        <p className="text-sm text-muted-foreground mb-3">
                          {exp.date}
                        </p>
                        <p className="text-muted-foreground leading-relaxed">
                          {exp.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
