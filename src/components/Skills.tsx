import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Code2, Cpu, Globe, Wrench, Cloud, Palette } from "lucide-react";

const skillCategories = [
  {
    id: "languages",
    icon: Code2,
    title: "Programming Languages",
    description: "Core languages for software and data engineering",
    skills: ["Python", "JavaScript", "SQL", "HTML5", "CSS3"],
    color: "from-blue-500 to-indigo-600",
  },
  {
    id: "frameworks",
    icon: Globe,
    title: "Frameworks & Libraries",
    description: "Modern frameworks for web & machine learning",
    skills: ["Flask", "React.js", "Pandas", "NumPy", "Scikit-learn", "NLTK"],
    color: "from-emerald-500 to-teal-600",
  },
  {
    id: "ai-data",
    icon: Cpu,
    title: "AI & Data Engineering",
    description: "Data analysis, machine learning & automation",
    skills: ["Prompt Engineering", "Data Analysis", "Exploratory Data Analysis (EDA)", "MS Excel Automation", "NLP Preprocessing"],
    color: "from-purple-500 to-violet-600",
  },
  {
    id: "cloud-db",
    icon: Cloud,
    title: "Cloud & Databases",
    description: "Relational data stores & hosting environments",
    skills: ["PostgreSQL", "MySQL", "Vercel", "Render", "AWS S3"],
    color: "from-amber-500 to-orange-600",
  },
  {
    id: "tools",
    icon: Wrench,
    title: "Tools & Platforms",
    description: "Developer workflows & productive environments",
    skills: ["Git", "GitHub", "VS Code", "Antigravity", "Jupyter Notebook"],
    color: "from-cyan-500 to-blue-600",
  },
  {
    id: "design",
    icon: Palette,
    title: "Design & Presentation",
    description: "Visual documentation & presentation design",
    skills: ["Canva", "PowerPoint", "Technical Documentation"],
    color: "from-rose-500 to-pink-600",
  },
];

const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredCategories =
    activeCategory === "all"
      ? skillCategories
      : skillCategories.filter((c) => c.id === activeCategory);

  return (
    <section id="skills" className="py-20 md:py-32" ref={ref}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <span className="inline-block px-3.5 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold uppercase tracking-wider mb-3">
              Technical Arsenal
            </span>
            <h2 className="section-heading">Skills & Technologies</h2>
            <p className="section-subheading mx-auto">
              A balanced tech stack bridging modern web engineering, data science, and cloud deployment.
            </p>
          </motion.div>

          {/* Category Quick Filter */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="flex flex-wrap items-center justify-center gap-2 mb-10"
          >
            <button
              onClick={() => setActiveCategory("all")}
              className={`px-4 py-2 rounded-full text-xs sm:text-sm font-medium transition-all ${
                activeCategory === "all"
                  ? "bg-primary text-primary-foreground shadow-md"
                  : "bg-muted text-muted-foreground hover:text-foreground hover:bg-muted/80"
              }`}
            >
              All Skills ({skillCategories.reduce((acc, cat) => acc + cat.skills.length, 0)})
            </button>
            {skillCategories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-3.5 py-2 rounded-full text-xs sm:text-sm font-medium transition-all ${
                  activeCategory === cat.id
                    ? "bg-primary text-primary-foreground shadow-md"
                    : "bg-muted text-muted-foreground hover:text-foreground hover:bg-muted/80"
                }`}
              >
                {cat.title}
              </button>
            ))}
          </motion.div>

          {/* Skills Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredCategories.map((category, index) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.08 * index }}
                className="skill-card group flex flex-col justify-between border border-border/80 hover:border-primary/50"
              >
                <div>
                  {/* Icon & Title */}
                  <div className="flex items-center gap-3.5 mb-3">
                    <div className={`p-2.5 rounded-xl bg-gradient-to-br ${category.color} text-white shadow-md`}>
                      <category.icon className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="font-bold text-base sm:text-lg text-foreground">
                        {category.title}
                      </h3>
                      <p className="text-xs text-muted-foreground">{category.description}</p>
                    </div>
                  </div>

                  {/* Skills Tags */}
                  <div className="flex flex-wrap gap-2 mt-5">
                    {category.skills.map((skill) => (
                      <span
                        key={skill}
                        className="skill-badge text-xs sm:text-sm"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
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

