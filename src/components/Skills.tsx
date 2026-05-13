"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  SiReact, SiNextdotjs, SiTailwindcss, SiJavascript, SiTypescript, SiHtml5,
  SiNodedotjs, SiPython, SiDjango, SiSpringboot, SiDotnet,
  SiMongodb, SiMysql, SiPostgresql, SiFirebase, SiRedis,
  SiGit, SiGithub, SiDocker, SiLinux, SiPostman, SiVercel,
  SiTensorflow, SiScikitlearn,
} from "react-icons/si";
import { FaJava, FaAws } from "react-icons/fa";

type Skill = { name: string; icon: React.ElementType; color: string; level: number };
type Category = {
  id: string;
  label: string;
  emoji: string;
  skills: Skill[];
};

const categories: Category[] = [
  {
    id: "frontend",
    label: "Frontend",
    emoji: "🎨",
    skills: [
      { name: "React", icon: SiReact, color: "#61DAFB", level: 90 },
      { name: "Next.js", icon: SiNextdotjs, color: "#ffffff", level: 85 },
      { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E", level: 90 },
      { name: "TypeScript", icon: SiTypescript, color: "#3178C6", level: 75 },
      { name: "Tailwind CSS", icon: SiTailwindcss, color: "#06B6D4", level: 92 },
      { name: "HTML5", icon: SiHtml5, color: "#E34F26", level: 95 },
      { name: "CSS3", icon: SiHtml5, color: "#1572B6", level: 90 },
    ],
  },
  {
    id: "backend",
    label: "Backend",
    emoji: "⚙️",
    skills: [
      { name: "Node.js", icon: SiNodedotjs, color: "#339933", level: 80 },
      { name: "Python", icon: SiPython, color: "#3776AB", level: 85 },
      { name: "Django", icon: SiDjango, color: "#092E20", level: 70 },
      { name: "Spring Boot", icon: SiSpringboot, color: "#6DB33F", level: 65 },
      { name: "Express.js", icon: SiNodedotjs, color: "#ffffff", level: 78 },
      { name: ".NET / C#", icon: SiDotnet, color: "#512BD4", level: 65 },
    ],
  },
  {
    id: "languages",
    label: "Languages",
    emoji: "💻",
    skills: [
      { name: "Java", icon: FaJava, color: "#ED8B00", level: 88 },
      { name: "Python", icon: SiPython, color: "#3776AB", level: 85 },
      { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E", level: 90 },
      { name: "TypeScript", icon: SiTypescript, color: "#3178C6", level: 75 },
    ],
  },
  {
    id: "databases",
    label: "Databases",
    emoji: "🗄️",
    skills: [
      { name: "MongoDB", icon: SiMongodb, color: "#47A248", level: 82 },
      { name: "MySQL", icon: SiMysql, color: "#4479A1", level: 80 },
      { name: "PostgreSQL", icon: SiPostgresql, color: "#336791", level: 72 },
      { name: "Firebase", icon: SiFirebase, color: "#FFCA28", level: 78 },
      { name: "Redis", icon: SiRedis, color: "#DC382D", level: 60 },
    ],
  },
  {
    id: "tools",
    label: "Tools & DevOps",
    emoji: "🛠️",
    skills: [
      { name: "Git", icon: SiGit, color: "#F05032", level: 90 },
      { name: "GitHub", icon: SiGithub, color: "#ffffff", level: 90 },
      { name: "Docker", icon: SiDocker, color: "#2496ED", level: 65 },
      { name: "Linux", icon: SiLinux, color: "#FCC624", level: 72 },
      { name: "Postman", icon: SiPostman, color: "#FF6C37", level: 88 },
      { name: "Vercel", icon: SiVercel, color: "#ffffff", level: 85 },
      { name: "VS Code", icon: SiVercel, color: "#007ACC", level: 95 },
      { name: "AWS", icon: FaAws, color: "#FF9900", level: 55 },
    ],
  },
  {
    id: "ai",
    label: "AI / ML",
    emoji: "🤖",
    skills: [
      { name: "TensorFlow", icon: SiTensorflow, color: "#FF6F00", level: 65 },
      { name: "Scikit-learn", icon: SiScikitlearn, color: "#F7931E", level: 70 },
      { name: "Python", icon: SiPython, color: "#3776AB", level: 85 },
    ],
  },
];

function SkillCard({ skill }: { skill: Skill }) {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      whileHover={{ y: -6, scale: 1.03 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      className="glass-card p-4 cursor-default group"
    >
      <div className="flex items-center gap-3 mb-3">
        <div
          className="p-2 rounded-lg"
          style={{ backgroundColor: `${skill.color}15` }}
        >
          <skill.icon size={20} color={skill.color} />
        </div>
        <span className="text-slate-200 font-medium text-sm">{skill.name}</span>
      </div>
      <div className="h-1 bg-slate-800 rounded-full overflow-hidden">
        <motion.div
          className="skill-bar-fill"
          initial={{ width: 0 }}
          animate={{ width: hovered ? `${skill.level}%` : `${skill.level * 0.7}%` }}
          whileInView={{ width: `${skill.level}%` }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: "easeOut" }}
        />
      </div>
      <div className="flex justify-between mt-1.5">
        <span className="text-slate-600 text-xs">Proficiency</span>
        <span className="text-violet-400 text-xs font-mono">{skill.level}%</span>
      </div>
    </motion.div>
  );
}

export default function Skills() {
  const [active, setActive] = useState("frontend");
  const activeCategory = categories.find((c) => c.id === active)!;

  return (
    <section id="skills" className="py-28 relative overflow-hidden">
      <div className="orb orb-cyan w-72 h-72 bottom-0 left-[-50px] opacity-15" />

      <div className="section-wrapper">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="mb-14"
        >
          <p className="section-label">What I work with</p>
          <h2 className="section-title">
            My <span className="gradient-text">Tech Stack</span>
          </h2>
          <div className="mt-4 w-16 h-1 bg-gradient-to-r from-violet-500 to-cyan-500 rounded-full" />
        </motion.div>

        {/* Category tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex flex-wrap gap-2 mb-10"
        >
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActive(cat.id)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 flex items-center gap-2 ${
                active === cat.id
                  ? "bg-violet-600 text-white shadow-lg shadow-violet-500/30"
                  : "glass-card text-slate-400 hover:text-white hover:border-violet-500/30"
              }`}
            >
              <span>{cat.emoji}</span>
              {cat.label}
            </button>
          ))}
        </motion.div>

        {/* Skills grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.35 }}
            className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4"
          >
            {activeCategory.skills.map((skill, i) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: i * 0.07 }}
              >
                <SkillCard skill={skill} />
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Bottom note */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="text-center text-slate-500 text-sm mt-12 font-mono"
        >
          + always learning something new 🚀
        </motion.p>
      </div>
    </section>
  );
}
