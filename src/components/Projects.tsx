"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiGithub, FiExternalLink, FiX, FiStar } from "react-icons/fi";

type Project = {
  id: number;
  title: string;
  subtitle: string;
  description: string;
  longDesc: string;
  tags: string[];
  github: string;
  demo: string;
  gradient: string;
  featured: boolean;
  emoji: string;
  metrics: { label: string; value: string }[];
  features: string[];
};

const projects: Project[] = [
  {
    id: 1,
    title: "DogsLand",
    subtitle: "Dog Adoption & Community Platform",
    description:
      "A full-stack platform connecting dog lovers with adoptable dogs. Features listings, breeder profiles, and a community hub.",
    longDesc:
      "DogsLand is a comprehensive dog adoption and community platform built to connect potential dog owners with breeders and rescue organizations. It features robust filtering, real-time WhatsApp integration, a shop for pet products, and an engaging blog — all wrapped in a premium, conversion-focused UI.",
    tags: ["React", "Tailwind", "Framer Motion", "Node.js", "Firebase"],
    github: "https://github.com/Priyanshupandey14314",
    demo: "#",
    gradient: "from-orange-600 via-amber-500 to-yellow-400",
    featured: true,
    emoji: "🐾",
    metrics: [
      { label: "Response Time", value: "<200ms" },
      { label: "Mobile Score", value: "96/100" },
      { label: "Components", value: "30+" },
    ],
    features: [
      "Premium dog adoption listings with filters",
      "WhatsApp & call inquiry integration",
      "Pet products e-commerce shop",
      "Community blog & FAQ",
      "Fully responsive, animated UI",
    ],
  },
  {
    id: 2,
    title: "AI Stress Detector",
    subtitle: "Real-Time Stress Analysis Dashboard",
    description:
      "An AI-powered dashboard that analyzes user input patterns and physiological signals to detect stress levels in real time.",
    longDesc:
      "An intelligent dashboard that leverages machine learning to analyze text sentiment, keyboard patterns, and user behavior to provide real-time stress level assessments. Built for health-tech applications with a clean, data-rich UI.",
    tags: ["Python", "TensorFlow", "React", "FastAPI", "Chart.js"],
    github: "https://github.com/Priyanshupandey14314",
    demo: "#",
    gradient: "from-violet-600 via-purple-600 to-pink-500",
    featured: true,
    emoji: "🧠",
    metrics: [
      { label: "Accuracy", value: "87%" },
      { label: "Latency", value: "~120ms" },
      { label: "Data Points", value: "10K+" },
    ],
    features: [
      "Real-time stress level classification",
      "Interactive charts & visualization",
      "NLP-based sentiment analysis",
      "REST API with FastAPI backend",
      "Exportable stress reports",
    ],
  },
  {
    id: 3,
    title: "Carpooling System",
    subtitle: "Smart Mobility Platform for India",
    description:
      "A cost-effective carpooling platform designed for Indian commuters with smart route matching and split-fare calculations.",
    longDesc:
      "A scalable carpooling web application addressing urban mobility challenges in India. Features intelligent route matching, dynamic fare splitting, user ratings, and real-time ride tracking — reducing commute costs by up to 60%.",
    tags: ["React", "Node.js", "MongoDB", "Google Maps API", "Socket.io"],
    github: "https://github.com/Priyanshupandey14314",
    demo: "#",
    gradient: "from-green-600 via-emerald-500 to-teal-400",
    featured: false,
    emoji: "🚗",
    metrics: [
      { label: "Cost Reduction", value: "~60%" },
      { label: "Route Accuracy", value: "94%" },
      { label: "Real-time", value: "✓" },
    ],
    features: [
      "Smart route matching algorithm",
      "Dynamic fare splitting",
      "Real-time ride tracking via Socket.io",
      "User reviews and ratings",
      "Payment integration ready",
    ],
  },
  {
    id: 4,
    title: "WebRadar",
    subtitle: "Advanced Web Scraper & Data Extractor",
    description:
      "A powerful web scraping tool with a clean dashboard to extract, filter, and export structured data from any website.",
    longDesc:
      "WebRadar is a developer-focused web scraping platform that lets you extract structured data from any URL using configurable selectors. Features a real-time dashboard, CSV/JSON export, scheduling, and a clean API for automation.",
    tags: ["Python", "Playwright", "FastAPI", "React", "PostgreSQL"],
    github: "https://github.com/Priyanshupandey14314",
    demo: "#",
    gradient: "from-blue-600 via-cyan-500 to-sky-400",
    featured: false,
    emoji: "🕵️",
    metrics: [
      { label: "Pages/sec", value: "50+" },
      { label: "Data Formats", value: "CSV/JSON" },
      { label: "Uptime", value: "99.5%" },
    ],
    features: [
      "JavaScript-rendered page scraping with Playwright",
      "Custom CSS selector targeting",
      "Scheduled scraping jobs",
      "Export to CSV, JSON, Excel",
      "REST API for integrations",
    ],
  },
  {
    id: 5,
    title: "Coding Tools Hub",
    subtitle: "Developer Productivity Suite",
    description:
      "An all-in-one toolkit for developers — code formatter, JSON validator, regex tester, color picker, and more.",
    longDesc:
      "A comprehensive collection of developer productivity tools in a single, fast web app. No sign-up required. Instantly format code, validate JSON, test regex patterns, convert colors, and generate boilerplate — all in-browser.",
    tags: ["React", "Next.js", "Tailwind CSS", "TypeScript", "Monaco Editor"],
    github: "https://github.com/Priyanshupandey14314",
    demo: "#",
    gradient: "from-rose-600 via-pink-500 to-fuchsia-500",
    featured: false,
    emoji: "🛠️",
    metrics: [
      { label: "Tools", value: "20+" },
      { label: "Load Time", value: "<1s" },
      { label: "Zero Backend", value: "✓" },
    ],
    features: [
      "Code formatter (10+ languages)",
      "JSON validator & prettifier",
      "Regex tester with live match highlighting",
      "Base64 / URL encoder-decoder",
      "Color picker & palette generator",
    ],
  },
  {
    id: 6,
    title: "YT Playlist Downloader",
    subtitle: "YouTube Playlist Batch Downloader",
    description:
      "A clean, fast desktop-style app to download entire YouTube playlists in various formats and resolutions.",
    longDesc:
      "A streamlined YouTube playlist downloader built with a Python backend and a clean web frontend. Supports batch downloading, format selection (MP3/MP4), resolution options, and a download queue with real-time progress tracking.",
    tags: ["Python", "yt-dlp", "FastAPI", "React", "ffmpeg"],
    github: "https://github.com/Priyanshupandey14314",
    demo: "#",
    gradient: "from-red-600 via-rose-500 to-pink-400",
    featured: false,
    emoji: "📹",
    metrics: [
      { label: "Formats", value: "MP3/MP4" },
      { label: "Speed", value: "Max bandwidth" },
      { label: "Queue Support", value: "✓" },
    ],
    features: [
      "Full playlist batch downloading",
      "Format selection: MP3, MP4, WebM",
      "Resolution options: 360p to 4K",
      "Real-time progress tracking",
      "Download queue management",
    ],
  },
];

function ProjectModal({ project, onClose }: { project: Project; onClose: () => void }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
      onClick={onClose}
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.9, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.9, y: 20 }}
        transition={{ type: "spring", stiffness: 300, damping: 25 }}
        onClick={(e) => e.stopPropagation()}
        className="glass-card max-w-2xl w-full max-h-[90vh] overflow-y-auto p-8 relative"
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 text-slate-400 hover:text-white hover:bg-white/10 rounded-lg transition-all"
        >
          <FiX size={20} />
        </button>

        <div className={`h-2 rounded-full bg-gradient-to-r ${project.gradient} mb-6`} />

        <div className="flex items-start gap-4 mb-6">
          <span className="text-4xl">{project.emoji}</span>
          <div>
            <h3 className="text-2xl font-bold text-white">{project.title}</h3>
            <p className="text-slate-400">{project.subtitle}</p>
          </div>
        </div>

        <p className="text-slate-300 leading-relaxed mb-6">{project.longDesc}</p>

        {/* Metrics */}
        <div className="grid grid-cols-3 gap-3 mb-6">
          {project.metrics.map((m) => (
            <div key={m.label} className="bg-white/5 rounded-xl p-3 text-center">
              <div className="text-lg font-bold gradient-text">{m.value}</div>
              <div className="text-slate-500 text-xs mt-1">{m.label}</div>
            </div>
          ))}
        </div>

        {/* Features */}
        <div className="mb-6">
          <h4 className="text-sm font-semibold text-slate-300 uppercase tracking-wider mb-3">Key Features</h4>
          <ul className="space-y-2">
            {project.features.map((f) => (
              <li key={f} className="flex items-center gap-2 text-slate-400 text-sm">
                <span className="w-1.5 h-1.5 rounded-full bg-violet-400 flex-shrink-0" />
                {f}
              </li>
            ))}
          </ul>
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-6">
          {project.tags.map((tag) => (
            <span key={tag} className="badge bg-violet-500/10 text-violet-300 border border-violet-500/20 text-xs">
              {tag}
            </span>
          ))}
        </div>

        {/* CTAs */}
        <div className="flex gap-3">
          <a href={project.github} target="_blank" rel="noopener noreferrer" className="btn-secondary flex-1 justify-center">
            <FiGithub size={16} /> GitHub
          </a>
          <a href={project.demo} target="_blank" rel="noopener noreferrer" className="btn-primary flex-1 justify-center">
            Live Demo <FiExternalLink size={16} />
          </a>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default function Projects() {
  const [selected, setSelected] = useState<Project | null>(null);
  const featured = projects.filter((p) => p.featured);
  const rest = projects.filter((p) => !p.featured);

  return (
    <section id="projects" className="py-28 relative overflow-hidden">
      <div className="orb orb-purple w-96 h-96 top-1/2 right-[-150px] opacity-15" />

      <div className="section-wrapper">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <p className="section-label">What I have built</p>
          <h2 className="section-title">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <div className="mt-4 w-16 h-1 bg-gradient-to-r from-violet-500 to-cyan-500 rounded-full" />
        </motion.div>

        {/* Featured projects */}
        <div className="grid md:grid-cols-2 gap-6 mb-8">
          {featured.map((project, i) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              whileHover={{ y: -6 }}
              className="glass-card overflow-hidden group cursor-pointer"
              onClick={() => setSelected(project)}
            >
              {/* Gradient banner */}
              <div className={`h-48 bg-gradient-to-br ${project.gradient} relative flex items-center justify-center`}>
                <span className="text-8xl opacity-30 group-hover:scale-110 transition-transform duration-500">
                  {project.emoji}
                </span>
                <div className="absolute top-4 left-4">
                  <span className="badge bg-white/10 text-white border border-white/20 text-xs backdrop-blur-sm">
                    <FiStar size={10} /> Featured
                  </span>
                </div>
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-all duration-300" />
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-1 group-hover:text-violet-300 transition-colors">
                  {project.title}
                </h3>
                <p className="text-slate-500 text-sm mb-3">{project.subtitle}</p>
                <p className="text-slate-400 text-sm leading-relaxed mb-4">{project.description}</p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.slice(0, 4).map((tag) => (
                    <span key={tag} className="badge bg-violet-500/10 text-violet-300 border border-violet-500/15 text-xs">
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex items-center justify-between">
                  <button className="text-violet-400 text-sm font-medium hover:text-violet-300 transition-colors">
                    View Case Study →
                  </button>
                  <div className="flex gap-2">
                    <a href={project.github} onClick={(e) => e.stopPropagation()} target="_blank" rel="noopener noreferrer"
                      className="p-2 glass-card text-slate-400 hover:text-white transition-colors">
                      <FiGithub size={15} />
                    </a>
                    <a href={project.demo} onClick={(e) => e.stopPropagation()} target="_blank" rel="noopener noreferrer"
                      className="p-2 glass-card text-slate-400 hover:text-white transition-colors">
                      <FiExternalLink size={15} />
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Other projects grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {rest.map((project, i) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              whileHover={{ y: -5, scale: 1.02 }}
              className="glass-card p-5 cursor-pointer group"
              onClick={() => setSelected(project)}
            >
              <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${project.gradient} flex items-center justify-center text-xl mb-4`}>
                {project.emoji}
              </div>
              <h3 className="font-bold text-white mb-1 group-hover:text-violet-300 transition-colors">
                {project.title}
              </h3>
              <p className="text-slate-500 text-xs mb-3 line-clamp-2">{project.description}</p>
              <div className="flex flex-wrap gap-1 mb-4">
                {project.tags.slice(0, 3).map((tag) => (
                  <span key={tag} className="text-xs px-2 py-0.5 rounded-full bg-white/5 text-slate-400">{tag}</span>
                ))}
              </div>
              <div className="flex gap-2">
                <a href={project.github} onClick={(e) => e.stopPropagation()} target="_blank" rel="noopener noreferrer"
                  className="p-1.5 text-slate-500 hover:text-white transition-colors">
                  <FiGithub size={14} />
                </a>
                <a href={project.demo} onClick={(e) => e.stopPropagation()} target="_blank" rel="noopener noreferrer"
                  className="p-1.5 text-slate-500 hover:text-white transition-colors">
                  <FiExternalLink size={14} />
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        {/* GitHub CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mt-12 text-center"
        >
          <a
            href="https://github.com/Priyanshupandey14314"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary inline-flex"
          >
            <FiGithub size={18} /> View All on GitHub
          </a>
        </motion.div>
      </div>

      {/* Project modal */}
      <AnimatePresence>
        {selected && (
          <ProjectModal project={selected} onClose={() => setSelected(null)} />
        )}
      </AnimatePresence>
    </section>
  );
}
