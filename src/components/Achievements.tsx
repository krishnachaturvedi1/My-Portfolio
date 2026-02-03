import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Trophy, Medal, Users2, Award } from "lucide-react";

const achievements = [
  {
    icon: Trophy,
    title: "Runner Up – Tech Yuva 10.0",
    description: "Secured Runner Up position with INCA project at Tech Yuva 10.0, a prestigious inter-college technical competition.",
    type: "Competition",
  },
  {
    icon: Medal,
    title: "2nd Position – Tech Wizard",
    description: "Achieved 2nd position in Tech Wizard C Programming competition, demonstrating strong programming fundamentals.",
    type: "Competition",
  },
  {
    icon: Users2,
    title: "IEEE Student Branch Member",
    description: "Active member of IEEE Student Branch, participated in ICICAT-2025 conference and networking events.",
    type: "Membership",
  },
];

const Achievements = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-20 md:py-32" ref={ref}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <h2 className="section-heading">Achievements & Activities</h2>
            <p className="section-subheading mx-auto">
              Recognition and involvement in the tech community
            </p>
          </motion.div>

          {/* Achievements Grid */}
          <div className="grid md:grid-cols-3 gap-6">
            {achievements.map((achievement, index) => (
              <motion.div
                key={achievement.title}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: 0.15 * index }}
                className="group relative"
              >
                <div className="glass-card rounded-2xl p-6 h-full transition-all duration-300 hover:border-primary/30">
                  {/* Glow Effect */}
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                  <div className="relative">
                    {/* Type Badge */}
                    <span className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold mb-4">
                      {achievement.type}
                    </span>

                    {/* Icon */}
                    <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300">
                      <achievement.icon className="w-7 h-7 text-primary" />
                    </div>

                    {/* Title */}
                    <h3 className="text-lg font-bold text-foreground mb-3">
                      {achievement.title}
                    </h3>

                    {/* Description */}
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {achievement.description}
                    </p>
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

export default Achievements;
