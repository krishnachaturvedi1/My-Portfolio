import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { ExternalLink, Github, Sparkles, CheckCircle2, ShieldCheck, Compass, MessageSquareCode, SearchCheck } from "lucide-react";
import { Button } from "./ui/button";

const projects = [
  {
    title: "SpamDetection – SMS Spam Classifier",
    subtitle: "NLP & Machine Learning Web Application",
    category: "ai-ml",
    period: "July 2026 – Present",
    description:
      "A Machine Learning-powered text classification web app developed to detect and filter spam SMS messages in real time with high accuracy.",
    bulletPoints: [
      "Developed an SMS Spam Classifier using Machine Learning to accurately classify spam and legitimate messages.",
      "Built a Flask-based web application with a clean, responsive UI for real-time spam prediction.",
      "Trained and evaluated the model on the SMS Spam Collection Dataset using NLP preprocessing techniques (tokenization, stopwords removal, TF-IDF vectorization).",
    ],
    techStack: [
      "Python",
      "Flask",
      "Scikit-learn",
      "Pandas",
      "NLTK",
      "HTML5",
      "CSS3",
      "JavaScript",
      "Jupyter Notebook",
    ],
    achievement: "High Accuracy NLP Pipeline",
    icon: MessageSquareCode,
    image: null,
    github: "https://github.com/krishnachaturvedi1",
    demo: null,
  },
  {
    title: "Lost & Found Guardian",
    subtitle: "AI-Powered Item Matching & Recovery System",
    category: "ai-ml",
    period: "July 2026 – Present",
    description:
      "An intelligent Lost & Found platform that connects finders and owners through advanced image and text analysis, reducing false claims.",
    bulletPoints: [
      "Developed an AI-powered Lost & Found platform that matches lost and found items using image and text analysis.",
      "Implemented AI-based confidence scoring, multi-tier verification, and real-time notifications to improve matching accuracy and reduce false claims.",
      "Designed a scalable, modern platform architecture with user rewards and premium features.",
    ],
    techStack: ["React 18", "React Router v6", "TailwindCSS 3", "JavaScript", "REST APIs"],
    achievement: "Confidence Scoring & AI Matching",
    icon: SearchCheck,
    image: null,
    github: "https://github.com/krishnachaturvedi1",
    demo: null,
  },
  {
    title: "INCA – Intelligent Campus Assistant",
    subtitle: "Unified Academic & Smart Campus Management Web App",
    category: "web",
    period: "Aug 2025 – Present",
    description:
      "A comprehensive campus web application enabling students and faculty to access timetables, notices, announcements, and campus resources from a unified dashboard.",
    bulletPoints: [
      "Delivered clean, responsive UI/UX optimized for both mobile and desktop users across campus.",
      "Engineered key modules: smart query support system, smart attendance tracker, and AI-Vision based Lost & Found feature.",
      "Runner-Up at Tech Yuva 10.0 competition, Buddha Institute of Technology.",
    ],
    techStack: ["HTML5", "CSS3", "JavaScript", "Python", "SQL", "Netlify"],
    achievement: "🏆 Runner-Up, Tech Yuva 10.0",
    icon: Compass,
    image: "/Screenshot 2026-02-04 115043.png",
    github: "https://github.com/krishnachaturvedi1/INCS--Intelligent-Campus-Assistant",
    demo: "https://incaweb.netlify.app/",
  },
  {
    title: "Find My Worker",
    subtitle: "Location-Based Worker Discovery Platform",
    category: "web",
    period: "Aug 2024 – Feb 2025",
    description:
      "A full-stack web platform connecting local customers with nearby skilled blue-collar workers using pin-code based location filtering.",
    bulletPoints: [
      "Built a full-stack platform connecting customers with nearby skilled workers using pin-code-based location filtering.",
      "Developed backend with Django: full CRUD operations, customer/worker data management, and relational database schema.",
      "Deployed on Vercel (frontend), Render PostgreSQL (database), and AWS S3 (static & media file storage).",
    ],
    techStack: ["Django", "HTML5", "CSS3", "PostgreSQL", "Render", "AWS S3", "Vercel"],
    achievement: "Full-Stack Cloud Architecture",
    icon: ShieldCheck,
    image: "/Screenshot 2026-02-05 092841.png",
    github: "https://github.com/krishnachaturvedi1/Find-My-Worker?tab=readme-ov-file",
    demo: "https://find-my-worker-fmy.vercel.app/",
  },
];

const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [filter, setFilter] = useState("all");

  const filteredProjects =
    filter === "all"
      ? projects
      : projects.filter((p) => (filter === "ai" ? p.category === "ai-ml" : p.category === "web"));

  return (
    <section id="projects" className="py-20 md:py-32 bg-secondary/30" ref={ref}>
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
              Portfolio of Work
            </span>
            <h2 className="section-heading">Featured Projects</h2>
            <p className="section-subheading mx-auto">
              Real-world software systems combining machine learning models, modern web frameworks, and robust backends.
            </p>
          </motion.div>

          {/* Filter Pills */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="flex items-center justify-center gap-2 mb-12"
          >
            <button
              onClick={() => setFilter("all")}
              className={`px-4 py-2 rounded-full text-xs sm:text-sm font-medium transition-all ${
                filter === "all"
                  ? "bg-primary text-primary-foreground shadow-md"
                  : "bg-muted text-muted-foreground hover:text-foreground hover:bg-muted/80"
              }`}
            >
              All Projects ({projects.length})
            </button>
            <button
              onClick={() => setFilter("ai")}
              className={`px-4 py-2 rounded-full text-xs sm:text-sm font-medium transition-all ${
                filter === "ai"
                  ? "bg-primary text-primary-foreground shadow-md"
                  : "bg-muted text-muted-foreground hover:text-foreground hover:bg-muted/80"
              }`}
            >
              AI & Machine Learning
            </button>
            <button
              onClick={() => setFilter("web")}
              className={`px-4 py-2 rounded-full text-xs sm:text-sm font-medium transition-all ${
                filter === "web"
                  ? "bg-primary text-primary-foreground shadow-md"
                  : "bg-muted text-muted-foreground hover:text-foreground hover:bg-muted/80"
              }`}
            >
              Full-Stack Web
            </button>
          </motion.div>

          {/* Projects Grid */}
          <div className="grid lg:grid-cols-2 gap-8">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.1 * index }}
                className="project-card flex flex-col justify-between border border-border/80 hover:border-primary/50"
              >
                <div>
                  {/* Visual Preview / Header Banner */}
                  <div className="relative p-6 bg-gradient-to-br from-primary/10 via-background to-secondary border-b border-border/60">
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex items-center gap-3">
                        <div className="p-2.5 rounded-xl bg-primary/15 text-primary">
                          <project.icon className="w-5 h-5" />
                        </div>
                        <div>
                          <span className="text-xs font-semibold text-primary uppercase tracking-wider">
                            {project.period}
                          </span>
                          <h3 className="text-xl font-bold text-foreground">
                            {project.title}
                          </h3>
                        </div>
                      </div>

                      {project.achievement && (
                        <span className="shrink-0 inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-medium border border-primary/20">
                          <Sparkles className="w-3 h-3 text-primary" />
                          {project.achievement}
                        </span>
                      )}
                    </div>

                    {/* Screenshot thumbnail if available */}
                    {project.image && (
                      <div className="mt-4 rounded-lg overflow-hidden border border-border/70 shadow-sm max-h-44 bg-muted">
                        <img
                          src={project.image}
                          alt={project.title}
                          className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                        />
                      </div>
                    )}
                  </div>

                  {/* Body Content */}
                  <div className="p-6">
                    <p className="text-sm sm:text-base text-foreground/90 mb-4 leading-relaxed font-medium">
                      {project.description}
                    </p>

                    {/* Key Bullets */}
                    <div className="space-y-2 mb-6">
                      {project.bulletPoints.map((bullet, i) => (
                        <div key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-muted-foreground">
                          <CheckCircle2 className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                          <span>{bullet}</span>
                        </div>
                      ))}
                    </div>

                    {/* Tech Stack Pills */}
                    <div className="flex flex-wrap gap-1.5 mb-6">
                      {project.techStack.map((tech) => (
                        <span
                          key={tech}
                          className="skill-badge text-xs py-1 px-2.5"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Footer Action Links */}
                <div className="px-6 pb-6 pt-2 border-t border-border/40 flex items-center justify-between gap-3">
                  <div className="flex gap-3">
                    {project.github && (
                      <Button variant="outline" size="sm" className="btn-outline h-9 px-3.5 text-xs font-medium" asChild>
                        <a href={project.github} target="_blank" rel="noopener noreferrer">
                          <Github className="mr-1.5 h-3.5 w-3.5" />
                          Code Repository
                        </a>
                      </Button>
                    )}
                    {project.demo && (
                      <Button size="sm" className="btn-primary h-9 px-3.5 text-xs font-medium" asChild>
                        <a href={project.demo} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="mr-1.5 h-3.5 w-3.5" />
                          Live Demo
                        </a>
                      </Button>
                    )}
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

export default Projects;

