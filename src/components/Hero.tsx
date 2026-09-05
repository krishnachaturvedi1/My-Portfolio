import { motion } from "framer-motion";
import { ArrowDown, FileText, Mail, MapPin, Sparkles, FolderGit2, GraduationCap, Award, ExternalLink, Code2 } from "lucide-react";
import { Button } from "./ui/button";

const quickStats = [
  {
    icon: FolderGit2,
    label: "Core Projects",
    value: "4+",
    subtext: "ML, NLP & Full-Stack",
  },
  {
    icon: GraduationCap,
    label: "B.Tech Aggregate",
    value: "78.27%",
    subtext: "CSE (Data Science)",
  },
  {
    icon: Award,
    label: "Internship & Training",
    value: "10-Wk",
    subtext: "Python Full-Stack & IBM AI",
  },
  {
    icon: Sparkles,
    label: "Honors & Awards",
    value: "Runner-Up",
    subtext: "Tech Yuva 10.0 & Hackathons",
  },
];

const Hero = () => {
  return (
    <section className="relative min-h-[92vh] flex items-center justify-center overflow-hidden pt-28 pb-16 md:pt-36 md:pb-24">
      {/* Background Subtle Gradient & Grid Accent */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -left-20 w-80 h-80 bg-primary/15 rounded-full blur-3xl animate-float" />
        <div
          className="absolute bottom-1/3 -right-20 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-float"
          style={{ animationDelay: "-3s" }}
        />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-primary/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Status Badges */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex flex-wrap items-center justify-center gap-2.5 mb-6"
          >
            <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-primary/10 text-primary text-xs sm:text-sm font-medium border border-primary/20 shadow-sm">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              4th Year B.Tech CSE (Data Science)
            </span>
            <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-muted/80 text-muted-foreground text-xs sm:text-sm font-medium border border-border">
              <MapPin className="w-3.5 h-3.5 text-primary" />
              Gorakhpur, U.P.
            </span>
          </motion.div>

          {/* Profile Photo / Avatar with subtle ring */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mb-6 flex justify-center"
          >
            <div className="relative group">
              <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-full p-1 bg-gradient-to-tr from-primary via-primary/50 to-emerald-500 shadow-xl">
                <img
                  src="/WhatsApp Image 2025-09-03 at 20.21.58_5adbba8f.jpg"
                  alt="Krishna Chaturvedi"
                  className="w-full h-full rounded-full object-cover bg-background"
                />
              </div>
              <div className="absolute -bottom-1 -right-1 bg-primary text-primary-foreground p-1.5 rounded-full shadow-lg">
                <Code2 className="w-4 h-4" />
              </div>
            </div>
          </motion.div>

          {/* Name */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight mb-4"
          >
            <span className="text-foreground">Krishna </span>
            <span className="gradient-text">Chaturvedi</span>
          </motion.h1>

          {/* Title */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg sm:text-xl md:text-2xl font-medium text-foreground/90 mb-4"
          >
            AI & Web Developer <span className="text-primary font-normal">•</span> Data Science Enthusiast
          </motion.p>

          {/* Tagline / Mission */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.25 }}
            className="text-sm sm:text-base md:text-lg text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed"
          >
            Building machine learning models, NLP pipelines, and robust full-stack web applications with Python, React, Flask, and Django.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-3.5 mb-14"
          >
            <Button
              size="lg"
              className="btn-primary group px-7 py-5 text-base font-semibold w-full sm:w-auto shadow-md"
              asChild
            >
              <a href="#projects">
                <FolderGit2 className="mr-2 h-4 w-4" />
                Explore Projects
              </a>
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="btn-outline px-7 py-5 text-base font-semibold w-full sm:w-auto"
              asChild
            >
              <a
                href="https://drive.google.com/file/d/1Lvn9M63wZ8Il1UURtbAupwCJLns_j5uk/view?usp=drive_link"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FileText className="mr-2 h-4 w-4" />
                View Resume
              </a>
            </Button>
            <Button
              variant="ghost"
              size="lg"
              className="px-6 py-5 text-base font-medium text-foreground/80 hover:text-foreground hover:bg-muted/80 w-full sm:w-auto"
              asChild
            >
              <a href="#contact">
                <Mail className="mr-2 h-4 w-4" />
                Get in Touch
              </a>
            </Button>
          </motion.div>

          {/* Quick Stats Grid */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 max-w-3xl mx-auto text-left"
          >
            {quickStats.map((stat, i) => (
              <div
                key={stat.label}
                className="glass-card rounded-xl p-4 border border-border/70 hover:border-primary/40 transition-all duration-300"
              >
                <div className="flex items-center gap-2 mb-2 text-primary">
                  <stat.icon className="w-4 h-4" />
                  <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                    {stat.label}
                  </span>
                </div>
                <div className="text-xl sm:text-2xl font-bold text-foreground">
                  {stat.value}
                </div>
                <div className="text-xs text-muted-foreground mt-0.5">
                  {stat.subtext}
                </div>
              </div>
            ))}
          </motion.div>

          {/* Scroll Indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="pt-12"
          >
            <motion.a
              href="#about"
              className="inline-flex flex-col items-center text-muted-foreground hover:text-primary transition-colors text-xs"
              animate={{ y: [0, 6, 0] }}
              transition={{ repeat: Infinity, duration: 2.2 }}
            >
              <span className="mb-1 font-medium">Scroll to explore</span>
              <ArrowDown className="h-4 w-4" />
            </motion.a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

