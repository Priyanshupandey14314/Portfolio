"use client";
import { motion } from "framer-motion";
import { FiCode, FiCpu, FiDatabase, FiZap } from "react-icons/fi";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

const stats = [
  { value: "2+", label: "Years Learning", icon: "🎓" },
  { value: "10+", label: "Projects Built", icon: "🚀" },
  { value: "15+", label: "Technologies", icon: "⚡" },
  { value: "5+", label: "Hackathons", icon: "🏆" },
];

const timeline = [
  {
    year: "2022",
    title: "Started BTech CSE",
    desc: "Began my engineering journey. Fell in love with programming through Java and DSA.",
    icon: "🎓",
    color: "violet",
  },
  {
    year: "2023",
    title: "Dived into Web Dev",
    desc: "Built first full-stack projects using React, Node.js, and MongoDB. Discovered the power of the web.",
    icon: "💻",
    color: "blue",
  },
  {
    year: "2024",
    title: "Explored AI & Systems",
    desc: "Integrated machine learning into web apps. Built AI stress detectors, scrapers, and more.",
    icon: "🤖",
    color: "cyan",
  },
  {
    year: "2025",
    title: "Building at Scale",
    desc: "Focused on system design, cloud deployment, and producing startup-quality software products.",
    icon: "🔥",
    color: "purple",
  },
];

const interests = [
  { icon: FiCode, label: "Full Stack Engineering", color: "violet" },
  { icon: FiCpu, label: "AI & Machine Learning", color: "cyan" },
  { icon: FiDatabase, label: "System Design", color: "blue" },
  { icon: FiZap, label: "Performance & Scale", color: "purple" },
];

export default function About() {
  return (
    <section id="about" className="py-28 relative overflow-hidden">
      <div className="orb orb-purple w-80 h-80 top-0 right-[-100px] opacity-20" />

      <div className="section-wrapper">
        {/* Section header */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <p className="section-label">Get to know me</p>
          <h2 className="section-title">
            About{" "}
            <span className="gradient-text">Me</span>
          </h2>
          <div className="mt-4 w-16 h-1 bg-gradient-to-r from-violet-500 to-cyan-500 rounded-full" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left: Bio + interests */}
          <div>
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="space-y-5 text-slate-300 text-[1.05rem] leading-relaxed mb-10"
            >
              <p>
                Hey! I am <span className="text-white font-semibold">Priyanshu Pandey</span>, a passionate{" "}
                <span className="text-violet-400 font-medium">BTech CSE student</span> who loves
                turning complex problems into elegant, scalable software solutions.
              </p>
              <p>
                My engineering philosophy is simple: <span className="text-cyan-400 font-medium">build fast, build smart, build for scale</span>. Whether it&apos;s crafting a seamless React frontend, architecting a robust backend API, or training a machine learning model — I bring the same obsessive attention to detail.
              </p>
              <p>
                I&apos;m deeply interested in <span className="text-blue-400 font-medium">AI-powered applications</span>, system design, and the intersection of performance and user experience. Currently on the hunt for software engineering internships where I can contribute, learn, and grow.
              </p>
            </motion.div>

            {/* Interests */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="grid grid-cols-1 sm:grid-cols-2 gap-3"
            >
              {interests.map(({ icon: Icon, label, color }, i) => (
                <motion.div
                  key={label}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 * i + 0.3 }}
                  whileHover={{ scale: 1.03 }}
                  className="glass-card p-4 flex items-center gap-3 group cursor-default"
                >
                  <div className={`p-2 rounded-lg bg-${color}-500/10 text-${color}-400 group-hover:scale-110 transition-transform duration-300`}>
                    <Icon size={18} />
                  </div>
                  <span className="text-slate-300 font-medium text-sm">{label}</span>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Right: Stats + Timeline */}
          <div className="space-y-8">
            {/* Stats bento grid */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="grid grid-cols-2 gap-3"
            >
              {stats.map(({ value, label, icon }, i) => (
                <motion.div
                  key={label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 * i + 0.3 }}
                  whileHover={{ scale: 1.04, y: -4 }}
                  className="glass-card p-5 flex flex-col items-center text-center cursor-default"
                >
                  <span className="text-3xl mb-2">{icon}</span>
                  <div className="text-3xl font-black gradient-text">{value}</div>
                  <div className="text-slate-500 text-xs mt-1">{label}</div>
                </motion.div>
              ))}
            </motion.div>

            {/* Timeline */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <h3 className="text-lg font-bold text-white mb-6 flex items-center gap-2">
                <span className="w-6 h-0.5 bg-gradient-to-r from-violet-500 to-cyan-500 rounded-full" />
                My Journey
              </h3>
              <div className="relative pl-6">
                <div className="timeline-line absolute left-0 top-0 bottom-0" />
                <div className="space-y-6">
                  {timeline.map((item, i) => (
                    <motion.div
                      key={item.year}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.1 + 0.2 }}
                      className="relative"
                    >
                      <div className="timeline-dot absolute -left-9 top-1.5" />
                      <div className="glass-card p-4 hover:border-violet-500/30 transition-all duration-300 hover:-translate-y-1">
                        <div className="flex items-center gap-2 mb-1">
                          <span className="text-lg">{item.icon}</span>
                          <span className="text-xs font-mono text-violet-400 bg-violet-500/10 px-2 py-0.5 rounded-full">
                            {item.year}
                          </span>
                        </div>
                        <h4 className="text-white font-semibold mb-1">{item.title}</h4>
                        <p className="text-slate-400 text-sm leading-relaxed">{item.desc}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
