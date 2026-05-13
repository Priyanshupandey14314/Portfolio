"use client";
import { useEffect, useRef, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";
import {
  FiArrowDown,
  FiGithub,
  FiLinkedin,
  FiMail,
  FiExternalLink,
  FiDownload,
} from "react-icons/fi";
import {
  SiReact,
  SiNextdotjs,
  SiPython,
  SiJavascript,
  SiNodedotjs,
  SiTypescript,
  SiMongodb,
  SiDocker,
  SiTailwindcss,
  SiGit,
} from "react-icons/si";
import { FaJava } from "react-icons/fa";

const roles = [
  "Full Stack Developer",
  "Software Engineer",
  "React Developer",
  "AI & Backend Enthusiast",
  "Problem Solver",
];

const floatingIcons = [
  { Icon: SiReact, color: "#61DAFB", size: 28, x: "10%", y: "20%", delay: 0 },
  { Icon: SiNextdotjs, color: "#ffffff", size: 24, x: "85%", y: "15%", delay: 0.5 },
  { Icon: SiPython, color: "#3776AB", size: 26, x: "90%", y: "60%", delay: 1 },
  { Icon: SiJavascript, color: "#F7DF1E", size: 22, x: "8%", y: "70%", delay: 1.5 },
  { Icon: SiNodedotjs, color: "#339933", size: 26, x: "75%", y: "80%", delay: 0.8 },
  { Icon: SiTypescript, color: "#3178C6", size: 22, x: "20%", y: "85%", delay: 1.2 },
  { Icon: SiMongodb, color: "#47A248", size: 24, x: "88%", y: "40%", delay: 0.3 },
  { Icon: SiDocker, color: "#2496ED", size: 22, x: "5%", y: "45%", delay: 1.8 },
  { Icon: SiTailwindcss, color: "#06B6D4", size: 24, x: "65%", y: "10%", delay: 0.6 },
  { Icon: SiGit, color: "#F05032", size: 20, x: "30%", y: "10%", delay: 2 },
  { Icon: FaJava, color: "#ED8B00", size: 26, x: "50%", y: "88%", delay: 1.4 },
];

const codeLines = [
  "const priyanshu = {",
  '  role: "Full Stack Developer",',
  '  passion: ["AI", "Scale", "Design"],',
  "  building: true,",
  "  openTo: 'Internships',",
  "};",
];

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [codeVisible, setCodeVisible] = useState(0);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const spotlightX = useSpring(mouseX, { damping: 30, stiffness: 100 });
  const spotlightY = useSpring(mouseY, { damping: 30, stiffness: 100 });

  // Typing effect
  useEffect(() => {
    const currentRole = roles[roleIndex];
    const speed = isDeleting ? 40 : 80;
    const timeout = setTimeout(() => {
      if (!isDeleting) {
        if (displayText.length < currentRole.length) {
          setDisplayText(currentRole.slice(0, displayText.length + 1));
        } else {
          setTimeout(() => setIsDeleting(true), 1800);
        }
      } else {
        if (displayText.length > 0) {
          setDisplayText(displayText.slice(0, -1));
        } else {
          setIsDeleting(false);
          setRoleIndex((prev) => (prev + 1) % roles.length);
        }
      }
    }, speed);
    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, roleIndex]);

  // Code lines reveal
  useEffect(() => {
    const timer = setInterval(() => {
      setCodeVisible((prev) => (prev < codeLines.length ? prev + 1 : prev));
    }, 300);
    return () => clearInterval(timer);
  }, []);

  // Mouse spotlight
  useEffect(() => {
    const handleMouse = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };
    window.addEventListener("mousemove", handleMouse);
    return () => window.removeEventListener("mousemove", handleMouse);
  }, [mouseX, mouseY]);

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden grid-bg">
      {/* Background orbs */}
      <div className="orb orb-purple w-96 h-96 top-[-100px] left-[-100px] animate-rotate-slow" style={{ animationDuration: '25s' }} />
      <div className="orb orb-blue w-80 h-80 bottom-[-50px] right-[-50px]" style={{ animationDuration: '20s' }} />
      <div className="orb orb-cyan w-64 h-64 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-30" />

      {/* Mouse spotlight */}
      <motion.div
        className="spotlight pointer-events-none z-0"
        style={{ x: spotlightX, y: spotlightY }}
      />

      {/* Floating tech icons */}
      {floatingIcons.map(({ Icon, color, size, x, y, delay }, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 0.4, scale: 1 }}
          transition={{ delay: delay + 1, duration: 0.5 }}
          className="absolute hidden lg:flex items-center justify-center p-3 glass-card"
          style={{
            left: x,
            top: y,
            animationDelay: `${delay}s`,
          }}
        >
          <motion.div
            animate={{ y: [0, -8, 0], rotate: [0, 5, 0] }}
            transition={{
              duration: 4 + delay,
              repeat: Infinity,
              ease: "easeInOut",
              delay: delay,
            }}
          >
            <Icon size={size} color={color} />
          </motion.div>
        </motion.div>
      ))}

      {/* Main content */}
      <div className="section-wrapper relative z-10 py-32 w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: Text content */}
          <div>
            {/* Availability badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="mb-6"
            >
              <span className="availability-badge">
                <span className="availability-dot" />
                Open for Internships &amp; Opportunities
              </span>
            </motion.div>

            {/* Greeting */}
            <motion.p
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="text-slate-400 font-mono text-sm mb-3 tracking-widest uppercase"
            >
              Hello World 👋, I am
            </motion.p>

            {/* Name */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="text-5xl md:text-7xl font-black tracking-tight text-white mb-4 leading-none"
            >
              Priyanshu
              <span className="block gradient-text text-glow">Pandey</span>
            </motion.h1>

            {/* Typing role */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="text-xl md:text-2xl font-semibold text-slate-300 mb-6 h-8 flex items-center gap-2"
            >
              <span className="text-violet-400">&gt;</span>
              <span className="font-mono">{displayText}</span>
              <span className="w-0.5 h-6 bg-violet-400 animate-blink" />
            </motion.div>

            {/* Tagline */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.6 }}
              className="text-slate-400 text-lg max-w-lg leading-relaxed mb-10"
            >
              BTech CSE student building{" "}
              <span className="text-violet-300 font-medium">scalable software</span>,{" "}
              exploring{" "}
              <span className="text-cyan-300 font-medium">AI systems</span>, and
              crafting{" "}
              <span className="text-blue-300 font-medium">elegant user experiences</span>{" "}
              that ship.
            </motion.p>

            {/* CTA buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.6 }}
              className="flex flex-wrap gap-3 mb-10"
            >
              <a href="#projects" className="btn-primary">
                View Projects <FiExternalLink size={16} />
              </a>
              <a
                href="/resume.pdf"
                download
                className="btn-secondary"
              >
                Download Resume <FiDownload size={16} />
              </a>
              <a href="#contact" className="btn-secondary">
                Contact Me <FiMail size={16} />
              </a>
            </motion.div>

            {/* Social links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9, duration: 0.6 }}
              className="flex items-center gap-4"
            >
              {[
                {
                  icon: FiGithub,
                  href: "https://github.com/Priyanshupandey14314",
                  label: "GitHub",
                },
                {
                  icon: FiLinkedin,
                  href: "https://linkedin.com/in/priyanshu-pandey",
                  label: "LinkedIn",
                },
                {
                  icon: FiMail,
                  href: "mailto:priyanshu@example.com",
                  label: "Email",
                },
              ].map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="p-2.5 glass-card text-slate-400 hover:text-white hover:border-violet-400/40 transition-all duration-300 hover:-translate-y-1"
                >
                  <Icon size={18} />
                </a>
              ))}
              <div className="w-px h-6 bg-slate-700 mx-1" />
              <span className="text-slate-500 text-sm font-mono">
                available for hire
              </span>
            </motion.div>
          </div>

          {/* Right: Code snippet card */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="hidden lg:block"
          >
            <div className="glass-card p-6 font-mono text-sm glow-purple relative overflow-hidden">
              {/* Window bar */}
              <div className="flex items-center gap-2 mb-4 pb-4 border-b border-violet-500/10">
                <div className="w-3 h-3 rounded-full bg-red-500/80" />
                <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                <div className="w-3 h-3 rounded-full bg-green-500/80" />
                <span className="ml-2 text-slate-500 text-xs">portfolio.ts</span>
              </div>

              {/* Code lines */}
              <div className="space-y-1.5 text-sm">
                {codeLines.map((line, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{
                      opacity: i < codeVisible ? 1 : 0,
                      x: i < codeVisible ? 0 : -10,
                    }}
                    transition={{ duration: 0.3 }}
                    className="flex gap-4"
                  >
                    <span className="text-slate-600 select-none w-4 text-right">{i + 1}</span>
                    <span
                      className={
                        line.includes('"') || line.includes("'")
                          ? "text-green-400"
                          : line.includes("const") || line.includes("true")
                            ? "text-violet-400"
                            : line.includes("[")
                              ? "text-cyan-400"
                              : "text-slate-300"
                      }
                    >
                      {line}
                    </span>
                  </motion.div>
                ))}
                {codeVisible >= codeLines.length && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="flex gap-4 mt-2"
                  >
                    <span className="text-slate-600 select-none w-4 text-right">7</span>
                    <span className="text-cyan-400 animate-pulse text-xs mt-1">
                      // Ready to build something amazing? 🚀
                    </span>
                  </motion.div>
                )}
              </div>

              {/* Decorative glow */}
              <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-violet-600/10 rounded-full blur-3xl" />
            </div>

            {/* Stats row */}
            <div className="grid grid-cols-3 gap-3 mt-4">
              {[
                { value: "10+", label: "Projects Built" },
                { value: "5+", label: "Technologies" },
                { value: "∞", label: "Lines of Code" },
              ].map(({ value, label }) => (
                <div key={label} className="glass-card p-4 text-center">
                  <div className="text-2xl font-black gradient-text">{value}</div>
                  <div className="text-xs text-slate-500 mt-1">{label}</div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 scroll-indicator"
        >
          <span className="text-slate-500 text-xs tracking-widest uppercase font-mono">Scroll</span>
          <FiArrowDown className="text-violet-400" size={18} />
        </motion.div>
      </div>
    </section>
  );
}
