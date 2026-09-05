import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Briefcase, Award, Cloud, GraduationCap, Calendar, CheckCircle2 } from "lucide-react";

const experienceData = [
  {
    type: "Internship",
    icon: Briefcase,
    title: "Virtual Internship – Full Stack Development (Python)",
    organization: "EduSkills Foundation",
    period: "2026 (10 Weeks)",
    badge: "10-Week Industry Internship",
    description:
      "Completed a rigorous 10-week virtual internship focusing on full-stack Python development. Implemented backend architecture, relational database management, and responsive front-end integration.",
    highlights: [
      "Full-stack Python software design and web application workflows",
      "Hands-on database querying, RESTful architecture, and modular codebases",
    ],
    badgeColor: "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border-emerald-500/20",
  },
  {
    type: "Training & Certification",
    icon: Award,
    title: "IBM – PBEL (Project-Based Experiential Learning)",
    organization: "IBM",
    period: "June 2026 – July 2026",
    badge: "AI & EDA Certified",
    description:
      "Completed intensive 1-month IBM PBEL training in Artificial Intelligence with a dedicated focus on Exploratory Data Analysis (EDA), statistical modeling, and data preparation techniques.",
    highlights: [
      "Exploratory Data Analysis (EDA) using Pandas, NumPy, and Matplotlib",
      "Feature engineering, distribution analysis, and predictive model prep",
    ],
    badgeColor: "bg-blue-500/10 text-blue-600 dark:text-blue-400 border-blue-500/20",
  },
  {
    type: "Certification",
    icon: GraduationCap,
    title: "Fundamentals of Object-Oriented Programming",
    organization: "NPTEL – IIT Roorkee",
    period: "Jan 2025 – Apr 2025",
    badge: "Elite Certificate (69%)",
    description:
      "Awarded Elite Certificate by IIT Roorkee with a score of 69%. Mastered core principles of object-oriented design, encapsulation, polymorphism, inheritance, and clean code paradigms.",
    highlights: [
      "Object-Oriented Programming (OOP) design patterns and data abstraction",
      "Standard memory management and algorithmic thinking",
    ],
    badgeColor: "bg-purple-500/10 text-purple-600 dark:text-purple-400 border-purple-500/20",
  },
  {
    type: "Workshop",
    icon: Cloud,
    title: "Cloud Mastery Workshop",
    organization: "Hyper Cloud Digital Solutions",
    period: "Sep 2024",
    badge: "Cloud Certified",
    description:
      "3-day hands-on intensive workshop covering modern cloud computing fundamentals, cloud architecture, and practical web deployment strategies.",
    highlights: [
      "Cloud hosting infrastructure, compute services, and static assets",
      "Deployment pipelines and best practices for web platforms",
    ],
    badgeColor: "bg-amber-500/10 text-amber-600 dark:text-amber-400 border-amber-500/20",
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
            <span className="inline-block px-3.5 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold uppercase tracking-wider mb-3">
              Career & Training
            </span>
            <h2 className="section-heading">Internship & Certifications</h2>
            <p className="section-subheading mx-auto">
              Hands-on industry internship experience and professional certifications validating my technical expertise.
            </p>
          </motion.div>

          {/* Timeline Cards */}
          <div className="relative">
            {/* Vertical timeline line for md+ screens */}
            <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-border hidden md:block" />

            <div className="space-y-8">
              {experienceData.map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, x: -25 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.12 * index }}
                  className="relative pl-0 md:pl-16"
                >
                  {/* Timeline Dot */}
                  <div className="absolute left-3 top-6 w-6 h-6 rounded-full bg-primary hidden md:flex items-center justify-center shadow-lg shadow-primary/30">
                    <div className="w-2 h-2 rounded-full bg-primary-foreground" />
                  </div>

                  <div className="glass-card rounded-2xl p-6 md:p-8 border border-border/80 hover:border-primary/50 transition-all duration-300">
                    <div className="flex flex-col md:flex-row md:items-start gap-4 md:gap-6">
                      {/* Icon */}
                      <div className="shrink-0">
                        <div className="w-13 h-13 sm:w-14 sm:h-14 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                          <item.icon className="w-6 h-6 sm:w-7 sm:h-7" />
                        </div>
                      </div>

                      {/* Content */}
                      <div className="flex-1">
                        <div className="flex flex-wrap items-center justify-between gap-2 mb-1.5">
                          <span className="text-xs font-bold uppercase tracking-wider text-primary">
                            {item.type}
                          </span>
                          <span className={`px-2.5 py-0.5 rounded-full text-xs font-semibold border ${item.badgeColor}`}>
                            {item.badge}
                          </span>
                        </div>

                        <h3 className="text-lg sm:text-xl font-bold text-foreground mb-1">
                          {item.title}
                        </h3>

                        <div className="flex flex-wrap items-center gap-3 text-sm text-muted-foreground mb-3">
                          <span className="font-semibold text-foreground/90">{item.organization}</span>
                          <span>•</span>
                          <span className="flex items-center gap-1">
                            <Calendar className="w-3.5 h-3.5 text-primary" />
                            {item.period}
                          </span>
                        </div>

                        <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                          {item.description}
                        </p>

                        <div className="space-y-1.5 pt-2 border-t border-border/50">
                          {item.highlights.map((highlight, idx) => (
                            <div key={idx} className="flex items-start gap-2 text-xs sm:text-sm text-foreground/85">
                              <CheckCircle2 className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                              <span>{highlight}</span>
                            </div>
                          ))}
                        </div>
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

