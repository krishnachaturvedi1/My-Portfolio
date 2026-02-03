import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Code2, Database, Globe, Wrench, Server } from "lucide-react";

const skillCategories = [
  {
    icon: Code2,
    title: "Programming Languages",
    skills: ["C", "C++", "Python", "JavaScript", "SQL"],
    color: "from-blue-500 to-cyan-500",
  },
  {
    icon: Database,
    title: "Data & Analytics",
    skills: ["Pandas", "NumPy", "Excel", "Data Analysis"],
    color: "from-purple-500 to-pink-500",
  },
  {
    icon: Globe,
    title: "Web Development",
    skills: ["HTML", "CSS", "JavaScript", "Django"],
    color: "from-green-500 to-emerald-500",
  },
  {
    icon: Wrench,
    title: "Tools & Platforms",
    skills: ["Git", "GitHub", "VS Code", "Canva", "PowerPoint"],
    color: "from-orange-500 to-yellow-500",
  },
  {
    icon: Server,
    title: "Databases",
    skills: ["MySQL", "PostgreSQL"],
    color: "from-red-500 to-rose-500",
  },
];

const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="skills" className="py-20 md:py-32" ref={ref}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <h2 className="section-heading">Skills & Technologies</h2>
            <p className="section-subheading mx-auto">
              The tools and technologies I work with to bring ideas to life
            </p>
          </motion.div>

          {/* Skills Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skillCategories.map((category, index) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.1 * index }}
                className="skill-card group"
              >
                {/* Icon & Title */}
                <div className="flex items-center gap-4 mb-6">
                  <div className={`p-3 rounded-xl bg-gradient-to-br ${category.color} text-white shadow-lg`}>
                    <category.icon className="w-6 h-6" />
                  </div>
                  <h3 className="font-semibold text-lg text-foreground">
                    {category.title}
                  </h3>
                </div>

                {/* Skills Tags */}
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className="skill-badge"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
