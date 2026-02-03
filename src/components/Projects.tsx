import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { ExternalLink, Github, Calendar, Users, Sparkles } from "lucide-react";
import { Button } from "./ui/button";

const projects = [
  {
    title: "INCA – Intelligent Campus Assistant",
    description:
      "A smart web-based campus assistant that centralizes academic information, notices, and resources for students and faculty. Features an intuitive interface for easy access to campus-related data.",
    features: ["Timetable View", "Announcements", "Basic Query Support", "Responsive UI"],
    techStack: ["HTML", "CSS", "JavaScript", "Python", "SQL"],
    achievement: "Runner Up – Tech Yuva 10.0",
    image: "/placeholder.svg",
    github: "#",
    demo: "#",
  },
  {
    title: "Find My Worker",
    description:
      "A platform that connects customers with skilled workers based on location. Built with a focus on usability and scalability, featuring pincode-based worker filtering for localized service discovery.",
    features: [
      "Frontend with Vanilla HTML & CSS",
      "Backend using Django with CRUD operations",
      "Pincode-based worker filtering",
      "Cloud deployment ready",
    ],
    techStack: ["Django", "PostgreSQL", "AWS S3", "Render", "Vercel"],
    image: "/placeholder.svg",
    github: "#",
    demo: "#",
  },
];

const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="projects" className="py-20 md:py-32 bg-secondary/30" ref={ref}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <h2 className="section-heading">Featured Projects</h2>
            <p className="section-subheading mx-auto">
              Showcasing my best work and real-world problem-solving
            </p>
          </motion.div>

          {/* Projects */}
          <div className="space-y-12">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.2 * index }}
                className="project-card"
              >
                <div className="grid lg:grid-cols-5 gap-0">
                  {/* Project Image */}
                  <div className="lg:col-span-2 relative bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center p-8 lg:p-12">
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,hsl(var(--primary)/0.1),transparent_70%)]" />
                    <motion.div
                      whileHover={{ scale: 1.05, rotate: 2 }}
                      transition={{ duration: 0.3 }}
                      className="relative z-10"
                    >
                      <div className="w-full max-w-[280px] aspect-video bg-card rounded-xl shadow-2xl border border-border overflow-hidden">
                        <div className="h-6 bg-muted flex items-center gap-1.5 px-3 border-b border-border">
                          <div className="w-2.5 h-2.5 rounded-full bg-destructive/60" />
                          <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/60" />
                          <div className="w-2.5 h-2.5 rounded-full bg-green-500/60" />
                        </div>
                        <div className="p-4 space-y-2">
                          <div className="h-3 bg-muted rounded w-3/4" />
                          <div className="h-3 bg-muted rounded w-1/2" />
                          <div className="h-8 bg-primary/20 rounded mt-4" />
                        </div>
                      </div>
                    </motion.div>
                  </div>

                  {/* Project Details */}
                  <div className="lg:col-span-3 p-6 lg:p-10 flex flex-col">
                    {/* Achievement Badge */}
                    {project.achievement && (
                      <div className="flex items-center gap-2 mb-4">
                        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium border border-primary/20">
                          <Sparkles className="w-3.5 h-3.5" />
                          {project.achievement}
                        </span>
                      </div>
                    )}

                    <h3 className="text-2xl font-bold text-foreground mb-3">
                      {project.title}
                    </h3>

                    <p className="text-muted-foreground mb-6 leading-relaxed">
                      {project.description}
                    </p>

                    {/* Features */}
                    <div className="mb-6">
                      <h4 className="text-sm font-semibold text-foreground mb-3 flex items-center gap-2">
                        <Users className="w-4 h-4 text-primary" />
                        Key Features
                      </h4>
                      <ul className="grid grid-cols-2 gap-2">
                        {project.features.map((feature) => (
                          <li
                            key={feature}
                            className="text-sm text-muted-foreground flex items-center gap-2"
                          >
                            <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Tech Stack */}
                    <div className="mb-8">
                      <h4 className="text-sm font-semibold text-foreground mb-3">
                        Tech Stack
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {project.techStack.map((tech) => (
                          <span
                            key={tech}
                            className="skill-badge"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Links */}
                    <div className="flex gap-3 mt-auto">
                      <Button variant="outline" size="sm" asChild>
                        <a href={project.github} target="_blank" rel="noopener noreferrer">
                          <Github className="mr-2 h-4 w-4" />
                          GitHub
                        </a>
                      </Button>
                      <Button size="sm" className="btn-primary" asChild>
                        <a href={project.demo} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="mr-2 h-4 w-4" />
                          Live Demo
                        </a>
                      </Button>
                    </div>
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
