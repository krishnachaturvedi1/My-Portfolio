import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Lightbulb, Users, BookOpen, BarChart3 } from "lucide-react";

const softSkills = [
  { icon: Lightbulb, name: "Problem-solving", description: "Analytical approach to complex challenges" },
  { icon: Users, name: "Team Collaboration", description: "Effective communication & teamwork" },
  { icon: BookOpen, name: "Continuous Learning", description: "Always exploring new technologies" },
  { icon: BarChart3, name: "Analytical Thinking", description: "Data-driven decision making" },
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
            <h2 className="section-heading">About Me</h2>
            <p className="section-subheading mx-auto">
              Get to know more about me and what drives my passion for technology
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* About Text */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="space-y-6"
            >
              <div className="glass-card rounded-2xl p-8">
                <p className="text-lg text-foreground/90 leading-relaxed mb-4">
                  I'm a <span className="text-primary font-semibold">3rd-year B.Tech CSE (Data Science)</span> student 
                  at Buddha Institute of Technology, passionate about leveraging technology to solve real-world problems.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  With a strong foundation in <span className="text-primary">Python, SQL, and Web Technologies</span>, 
                  I enjoy building data-driven applications that make a meaningful impact. My journey in tech has been 
                  fueled by curiosity and a desire to create solutions that are both intelligent and user-friendly.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  When I'm not coding, you'll find me exploring new frameworks, participating in tech competitions, 
                  or contributing to collaborative projects. I believe in continuous learning and pushing boundaries 
                  to achieve excellence.
                </p>
              </div>
            </motion.div>

            {/* Soft Skills Grid */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="grid grid-cols-2 gap-4"
            >
              {softSkills.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
                  className="skill-card text-center"
                >
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-primary/10 text-primary mb-4">
                    <skill.icon className="w-6 h-6" />
                  </div>
                  <h3 className="font-semibold text-foreground mb-2">{skill.name}</h3>
                  <p className="text-sm text-muted-foreground">{skill.description}</p>
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
