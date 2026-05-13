"use client";
import { motion } from "framer-motion";
import { FiAward, FiCode, FiGlobe, FiGitMerge } from "react-icons/fi";

const experiences = [
  {
    type: "hackathon",
    title: "Hackathon Participant",
    org: "Multiple National-Level Hackathons",
    period: "2023 – Present",
    desc: "Competed in 5+ hackathons, building rapid MVPs under tight constraints. Developed AI and full-stack prototypes that received recognition.",
    icon: "🏆",
    tags: ["Team Collaboration", "Rapid Prototyping", "AI", "Full Stack"],
    color: "from-yellow-600 to-orange-500",
  },
  {
    type: "freelance",
    title: "Freelance Developer",
    org: "Client Projects & Startups",
    period: "2023 – Present",
    desc: "Built and delivered production-ready web applications for clients including the DogsLand platform. Handled requirements, design, development, and deployment end-to-end.",
    icon: "💼",
    tags: ["React", "Next.js", "Node.js", "Firebase", "Client Communication"],
    color: "from-violet-600 to-blue-500",
  },
  {
    type: "open-source",
    title: "Open Source Contributor",
    org: "GitHub Projects",
    period: "2024 – Present",
    desc: "Active contributor on GitHub with multiple self-initiated and collaborative projects. Exploring contributions to developer tooling and web infrastructure.",
    icon: "🔓",
    tags: ["Git", "GitHub", "Collaboration", "Code Review"],
    color: "from-green-600 to-emerald-500",
  },
  {
    type: "learning",
    title: "Self-Driven Learning",
    org: "Coursera, Udemy, YouTube, Docs",
    period: "2022 – Present",
    desc: "Invested 1,000+ hours into self-learning: data structures, system design, cloud computing, AI/ML, and modern web frameworks. Believer in building > watching.",
    icon: "📚",
    tags: ["DSA", "System Design", "Cloud", "AI/ML", "Continuous Learning"],
    color: "from-cyan-600 to-sky-500",
  },
  {
    type: "certification",
    title: "Certifications & Courses",
    org: "Google, Meta, Coursera, Udemy",
    period: "2023 – Present",
    desc: "Completed certifications in web development, Python, data science, and cloud fundamentals. Continuously upskilling to match industry standards.",
    icon: "🎖️",
    tags: ["Web Dev", "Python", "Data Science", "Cloud Fundamentals"],
    color: "from-pink-600 to-rose-500",
  },
];

const achievementCards = [
  {
    icon: FiAward,
    value: "5+",
    label: "Hackathons",
    sub: "participated & placed",
    color: "violet",
  },
  {
    icon: FiCode,
    value: "10+",
    label: "Projects",
    sub: "shipped to production",
    color: "cyan",
  },
  {
    icon: FiGlobe,
    value: "15+",
    label: "Technologies",
    sub: "actively used",
    color: "blue",
  },
  {
    icon: FiGitMerge,
    value: "100+",
    label: "Commits",
    sub: "on GitHub this year",
    color: "emerald",
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-28 relative overflow-hidden">
      <div className="orb orb-blue w-80 h-80 top-0 left-[-80px] opacity-15" />

      <div className="section-wrapper">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <p className="section-label">My background</p>
          <h2 className="section-title">
            Experience &amp; <span className="gradient-text">Journey</span>
          </h2>
          <div className="mt-4 w-16 h-1 bg-gradient-to-r from-violet-500 to-cyan-500 rounded-full" />
        </motion.div>

        {/* Achievement cards bento grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16"
        >
          {achievementCards.map(({ icon: Icon, value, label, sub, color }, i) => (
            <motion.div
              key={label}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 + 0.2 }}
              whileHover={{ y: -6, scale: 1.02 }}
              className="glass-card p-5 text-center group cursor-default"
            >
              <div className={`inline-flex p-3 rounded-xl bg-${color}-500/10 text-${color}-400 mb-3 group-hover:scale-110 transition-transform duration-300`}>
                <Icon size={22} />
              </div>
              <div className="text-3xl font-black gradient-text">{value}</div>
              <div className="text-white font-semibold text-sm mt-1">{label}</div>
              <div className="text-slate-500 text-xs mt-0.5">{sub}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Center line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-violet-500 via-cyan-500 to-transparent -translate-x-1/2 hidden md:block" />
          <div className="absolute left-4 top-0 bottom-0 w-px bg-gradient-to-b from-violet-500 via-cyan-500 to-transparent md:hidden" />

          <div className="space-y-8 md:space-y-12">
            {experiences.map((exp, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className={`relative flex gap-6 md:gap-0 ${
                  i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                {/* Timeline dot */}
                <div className="absolute left-4 md:left-1/2 top-6 -translate-x-1/2 z-10 hidden md:block">
                  <motion.div
                    whileInView={{ scale: [0, 1.3, 1] }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: i * 0.1 }}
                    className="w-4 h-4 rounded-full bg-gradient-to-br from-violet-500 to-cyan-500 shadow-lg shadow-violet-500/50"
                  />
                </div>
                <div className="absolute left-4 top-6 -translate-x-1/2 z-10 md:hidden">
                  <div className="w-3 h-3 rounded-full bg-gradient-to-br from-violet-500 to-cyan-500" />
                </div>

                {/* Card */}
                <div
                  className={`ml-10 md:ml-0 md:w-[46%] ${
                    i % 2 === 0 ? "md:mr-[8%]" : "md:ml-[8%]"
                  }`}
                >
                  <motion.div
                    whileHover={{ y: -4 }}
                    className="glass-card p-6 hover:border-violet-500/30 transition-all duration-300"
                  >
                    <div className={`h-1 rounded-full bg-gradient-to-r ${exp.color} mb-4`} />
                    <div className="flex items-start gap-3 mb-3">
                      <span className="text-2xl">{exp.icon}</span>
                      <div>
                        <h3 className="font-bold text-white">{exp.title}</h3>
                        <p className="text-slate-400 text-sm">{exp.org}</p>
                      </div>
                    </div>
                    <span className="inline-block text-xs font-mono text-violet-400 bg-violet-500/10 px-2 py-1 rounded-full mb-3">
                      {exp.period}
                    </span>
                    <p className="text-slate-400 text-sm leading-relaxed mb-4">
                      {exp.desc}
                    </p>
                    <div className="flex flex-wrap gap-1.5">
                      {exp.tags.map((tag) => (
                        <span key={tag} className="text-xs px-2 py-0.5 rounded-full bg-white/5 text-slate-400 border border-white/5">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* GitHub Stats section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mt-20 glass-card p-8"
        >
          <h3 className="text-xl font-bold text-white mb-6 text-center">
            GitHub Activity
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="text-center">
              <img
                src="https://github-readme-stats.vercel.app/api?username=Priyanshupandey14314&show_icons=true&theme=tokyonight&hide_border=true&bg_color=0d0d2b&title_color=8b5cf6&icon_color=06b6d4&text_color=94a3b8"
                alt="GitHub Stats"
                className="rounded-xl w-full"
                loading="lazy"
              />
            </div>
            <div className="text-center">
              <img
                src="https://github-readme-streak-stats.herokuapp.com/?user=Priyanshupandey14314&theme=tokyonight&hide_border=true&background=0d0d2b&stroke=8b5cf6&ring=06b6d4&fire=8b5cf6&currStreakLabel=94a3b8"
                alt="GitHub Streak"
                className="rounded-xl w-full"
                loading="lazy"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
