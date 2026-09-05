import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Trophy, Medal, Users2, Award, Zap, Activity, Presentation, Flag, Star } from "lucide-react";

const allAchievements = [
  // Competitions & Hackathons
  {
    category: "competitions",
    icon: Trophy,
    title: "Runner-Up, Tech Yuva 10.0",
    subtitle: "Smart Campus Web App (INCA)",
    date: "Oct 2025",
    type: "Competition",
    description:
      "Secured 2nd position at Tech Yuva 10.0 for designing and presenting INCA, a unified smart campus assistance system.",
    badge: "2nd Place / Runner-Up",
  },
  {
    category: "competitions",
    icon: Medal,
    title: "2nd Position – Tech Wizard",
    subtitle: "C Programming & Problem-Solving",
    date: "Oct 2024",
    type: "Coding Competition",
    description:
      "Achieved 2nd place in Tech Wizard C MCQ and coding competition, demonstrating core algorithmic and problem-solving strength.",
    badge: "2nd Position",
  },
  {
    category: "competitions",
    icon: Zap,
    title: "HackIndia Hackathon – Team Falcons",
    subtitle: "National Level Hackathon",
    date: "2025",
    type: "Hackathon",
    description:
      "Collaborated in a fast-paced development sprint building innovative solutions as part of Team Falcons in HackIndia 2025.",
    badge: "Team Falcons",
  },
  {
    category: "competitions",
    icon: Zap,
    title: "AKTU AI Tech Confluence Hackathon",
    subtitle: "State-Level AI Challenge",
    date: "2025",
    type: "Hackathon",
    description:
      "Participated in AKTU AI Tech Confluence Hackathon, tackling real-world problem statements with applied AI concepts.",
    badge: "AI Hackathon",
  },
  {
    category: "competitions",
    icon: Flag,
    title: "Tech Yuva 2024 Presentation",
    subtitle: "Project Showcase: Find My Worker",
    date: "2024",
    type: "Project Showcase",
    description:
      "Selected to showcase the Find My Worker platform connecting local customers with nearby skilled blue-collar workers.",
    badge: "Showcase Participant",
  },
  {
    category: "competitions",
    icon: Star,
    title: "Tata Crucible Quiz Competition",
    subtitle: "Prestigious National Business & Tech Quiz",
    date: "Participant",
    type: "Quiz",
    description:
      "Competed among top college teams in India in the prestigious Tata Crucible knowledge and technology challenge.",
    badge: "Participant",
  },

  // Academic Excellence
  {
    category: "academics",
    icon: Award,
    title: "Academic Merit Certificate – 78.67%",
    subtitle: "Session 2023–24",
    date: "2023 – 2024",
    type: "Academic Honor",
    description:
      "Awarded Academic Merit Certificate for exceptional academic standing with a 78.67% score during the academic year.",
    badge: "78.67% Score",
  },
  {
    category: "academics",
    icon: Award,
    title: "Academic Merit Certificate – 77.25%",
    subtitle: "Session 2024–25",
    date: "2024 – 2025",
    type: "Academic Honor",
    description:
      "Recognized for continued academic excellence in B.Tech CSE (Data Science) coursework with a 77.25% score.",
    badge: "77.25% Score",
  },

  // Leadership & Conferences
  {
    category: "leadership",
    icon: Users2,
    title: "IEEE Student Branch Member",
    subtitle: "College Chapter",
    date: "Jan 2025 – Dec 2025",
    type: "Leadership",
    description:
      "Active member contributing to technical workshops, developer collaborative initiatives, and hackathon organization.",
    badge: "Active Member",
  },
  {
    category: "leadership",
    icon: Flag,
    title: "Volunteer – ICICAT-2025",
    subtitle: "IEEE 3rd International Conference",
    date: "Dec 2025",
    type: "Conference Volunteer",
    description:
      "Supported technical sessions, keynote coordination, and event operations for the 3rd IEEE International Conference.",
    badge: "IEEE Conference",
  },
  {
    category: "leadership",
    icon: Presentation,
    title: "5th National Conference on RTSET-2025",
    subtitle: "IS, ML & Data Science Track",
    date: "Apr 2025",
    type: "National Conference",
    description:
      "Participated in national-level academic conference discussing recent trends in systems engineering and machine learning.",
    badge: "National Conference",
  },
  {
    category: "leadership",
    icon: Presentation,
    title: "IS ML & DS National Conference Presentation",
    subtitle: "INCA Project Presentation",
    date: "Mar – Apr 2026",
    type: "Project Presentation",
    description:
      "Selected to deliver project presentation on INCA architecture and features at the National Conference on IS, ML, and Data Science.",
    badge: "Speaker / Presenter",
  },

  // Sports
  {
    category: "sports",
    icon: Activity,
    title: "Zonal Level Basketball – Winner",
    subtitle: "Inter-College Tournament",
    date: "Oct 2025",
    type: "Sports",
    description:
      "Captained and played as key player to secure 1st place in the Zonal Level Basketball Championship.",
    badge: "🏆 Gold / Winner",
  },
  {
    category: "sports",
    icon: Activity,
    title: "Spardha Basketball – Winner",
    subtitle: "Annual Sports Meet",
    date: "Winner",
    type: "Sports",
    description:
      "Secured championship trophy at Spardha Basketball tournament displaying high athletic endurance and team synergy.",
    badge: "🏆 Winner",
  },
  {
    category: "sports",
    icon: Activity,
    title: "State Level Basketball – Participant",
    subtitle: "State Championship",
    date: "Nov 2025",
    type: "Sports",
    description:
      "Represented district/institution at the prestigious state-level basketball championship tournament.",
    badge: "State Level",
  },
];

const Achievements = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [activeTab, setActiveTab] = useState("all");

  const filteredAchievements =
    activeTab === "all"
      ? allAchievements
      : allAchievements.filter((a) => a.category === activeTab);

  return (
    <section id="achievements" className="py-20 md:py-32" ref={ref}>
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
              Recognition & Engagement
            </span>
            <h2 className="section-heading">Achievements & Activities</h2>
            <p className="section-subheading mx-auto">
              Hackathons, academic merit, leadership roles, and sports championships that reflect dedication and teamwork.
            </p>
          </motion.div>

          {/* Category Tabs */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="flex flex-wrap items-center justify-center gap-2 mb-10"
          >
            <button
              onClick={() => setActiveTab("all")}
              className={`px-4 py-2 rounded-full text-xs sm:text-sm font-medium transition-all ${
                activeTab === "all"
                  ? "bg-primary text-primary-foreground shadow-md"
                  : "bg-muted text-muted-foreground hover:text-foreground hover:bg-muted/80"
              }`}
            >
              All ({allAchievements.length})
            </button>
            <button
              onClick={() => setActiveTab("competitions")}
              className={`px-3.5 py-2 rounded-full text-xs sm:text-sm font-medium transition-all ${
                activeTab === "competitions"
                  ? "bg-primary text-primary-foreground shadow-md"
                  : "bg-muted text-muted-foreground hover:text-foreground hover:bg-muted/80"
              }`}
            >
              Hackathons & Contests
            </button>
            <button
              onClick={() => setActiveTab("academics")}
              className={`px-3.5 py-2 rounded-full text-xs sm:text-sm font-medium transition-all ${
                activeTab === "academics"
                  ? "bg-primary text-primary-foreground shadow-md"
                  : "bg-muted text-muted-foreground hover:text-foreground hover:bg-muted/80"
              }`}
            >
              Academic Merit
            </button>
            <button
              onClick={() => setActiveTab("leadership")}
              className={`px-3.5 py-2 rounded-full text-xs sm:text-sm font-medium transition-all ${
                activeTab === "leadership"
                  ? "bg-primary text-primary-foreground shadow-md"
                  : "bg-muted text-muted-foreground hover:text-foreground hover:bg-muted/80"
              }`}
            >
              Conferences & IEEE
            </button>
            <button
              onClick={() => setActiveTab("sports")}
              className={`px-3.5 py-2 rounded-full text-xs sm:text-sm font-medium transition-all ${
                activeTab === "sports"
                  ? "bg-primary text-primary-foreground shadow-md"
                  : "bg-muted text-muted-foreground hover:text-foreground hover:bg-muted/80"
              }`}
            >
              Sports & Basketball
            </button>
          </motion.div>

          {/* Achievements Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredAchievements.map((achievement, index) => (
              <motion.div
                key={achievement.title}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.4, delay: 0.05 * index }}
                className="group relative"
              >
                <div className="glass-card rounded-2xl p-6 h-full flex flex-col justify-between border border-border/80 hover:border-primary/50 transition-all duration-300">
                  <div>
                    {/* Top Row */}
                    <div className="flex items-center justify-between gap-2 mb-4">
                      <div className="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center text-primary group-hover:scale-105 transition-transform duration-300">
                        <achievement.icon className="w-5 h-5" />
                      </div>
                      <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-primary/10 text-primary border border-primary/20">
                        {achievement.badge}
                      </span>
                    </div>

                    {/* Title */}
                    <h3 className="text-base sm:text-lg font-bold text-foreground mb-1">
                      {achievement.title}
                    </h3>
                    <p className="text-xs font-medium text-primary mb-2.5">
                      {achievement.subtitle} {achievement.date ? `• ${achievement.date}` : ""}
                    </p>

                    {/* Description */}
                    <p className="text-muted-foreground text-xs sm:text-sm leading-relaxed">
                      {achievement.description}
                    </p>
                  </div>

                  <div className="mt-4 pt-3 border-t border-border/40 text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                    {achievement.type}
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

