import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { BrainCircuit, Layers, CloudUpload, Trophy, CheckCircle2 } from "lucide-react";

const engineeringPillars = [
  {
    icon: BrainCircuit,
    title: "AI & Machine Learning",
    description:
      "Developing NLP pipelines, spam classifiers, and computer vision systems using Scikit-Learn, NLTK, Pandas, and Python.",
  },
  {
    icon: Layers,
    title: "Full-Stack Development",
    description:
      "Architecting responsive, high-performance web applications using React.js, TailwindCSS, Flask, Django, and PostgreSQL.",
  },
  {
    icon: CloudUpload,
    title: "Cloud & Deployment",
    description:
      "Deploying scalable web services and databases using Vercel, Render, AWS S3, and Git CI/CD workflows.",
  },
  {
    icon: Trophy,
    title: "Leadership & Athletics",
    description:
      "IEEE Student Branch member, national conference presenter, and Zonal/Spardha Basketball winner.",
  },
];

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-20 md:py-32 bg-secondary/30" ref={ref}>
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
              Background & Focus
            </span>
            <h2 className="section-heading">About Me</h2>
            <p className="section-subheading mx-auto">
              Driven by curiosity, practical problem-solving, and building impactful software solutions.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-start">
            {/* About Text */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="lg:col-span-6 space-y-6"
            >
              <div className="glass-card rounded-2xl p-6 sm:p-8 space-y-4 border border-border/80">
                <h3 className="text-xl font-bold text-foreground flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-primary" />
                  Engineering Journey & Vision
                </h3>
                <p className="text-base text-foreground/90 leading-relaxed">
                  I am a <span className="text-primary font-semibold">4th-year B.Tech Computer Science & Engineering (Data Science)</span> student at Buddha Institute of Technology, Gorakhpur, holding a <span className="font-semibold text-foreground">78.27% academic aggregate</span> (till 6th semester).
                </p>
                <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                  My technical focus spans full-stack web engineering and applied machine learning. From training NLP classification models on text data to creating production-ready platforms with Django, Flask, and React, I love translating complex requirements into elegant, efficient systems.
                </p>
                <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                  Beyond software development, I actively participate in hackathons, present at national technical conferences (RTSET-2025, IS ML & DS), contribute to the IEEE student chapter, and compete in state & zonal basketball championships.
                </p>

                <div className="pt-2 border-t border-border/50 grid grid-cols-2 gap-3 text-xs sm:text-sm">
                  <div className="flex items-center gap-2 text-foreground/80">
                    <CheckCircle2 className="w-4 h-4 text-primary shrink-0" />
                    <span>Python & Full-Stack</span>
                  </div>
                  <div className="flex items-center gap-2 text-foreground/80">
                    <CheckCircle2 className="w-4 h-4 text-primary shrink-0" />
                    <span>NLP & Machine Learning</span>
                  </div>
                  <div className="flex items-center gap-2 text-foreground/80">
                    <CheckCircle2 className="w-4 h-4 text-primary shrink-0" />
                    <span>Database & Cloud</span>
                  </div>
                  <div className="flex items-center gap-2 text-foreground/80">
                    <CheckCircle2 className="w-4 h-4 text-primary shrink-0" />
                    <span>Clean Architecture</span>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Core Pillars Grid */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="lg:col-span-6 grid sm:grid-cols-2 gap-4"
            >
              {engineeringPillars.map((pillar, index) => (
                <motion.div
                  key={pillar.title}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.4, delay: 0.35 + index * 0.1 }}
                  className="skill-card p-5 sm:p-6 hover:border-primary/50 flex flex-col justify-between"
                >
                  <div>
                    <div className="inline-flex items-center justify-center w-11 h-11 rounded-xl bg-primary/10 text-primary mb-4">
                      <pillar.icon className="w-5 h-5" />
                    </div>
                    <h4 className="font-semibold text-foreground text-base mb-2">{pillar.title}</h4>
                    <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">{pillar.description}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

