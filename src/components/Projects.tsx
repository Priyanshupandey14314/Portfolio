"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiGithub, FiExternalLink, FiCpu, FiAlertTriangle, FiCheckCircle } from "react-icons/fi";

type CaseStudy = {
  id: string;
  title: string;
  subtitle: string;
  technologies: string[];
  github: string;
  demo: string;
  problem: string;
  architecture: string;
  challenges: string;
  decisions: string;
  outcome: string;
};

const projects: CaseStudy[] = [
  {
    id: "smartride",
    title: "SmartRide",
    subtitle: "Real-Time Carpooling Platform",
    technologies: ["React", "Node.js", "Express", "MongoDB", "Socket.io", "Google Maps API"],
    github: "https://github.com/Priyanshupandey14314/SmartRide",
    demo: "#",
    problem: "Urban Indian commuters face heavy traffic and soaring single-occupancy travel costs. Existing apps lack dynamic route matching and fair, automatic fare-splitting, forcing commuters to coordinate rides manually.",
    architecture: "Client-server model using React for dynamic map rendering, Node.js/Express for core API routing, MongoDB for location-based spatial queries, and Socket.io for real-time tracking.",
    challenges: "Finding matching routes in real-time without overloading the database with continuous geolocation coordinate queries.",
    decisions: "Implemented spatial index lookups using MongoDB geo-queries. Created a pre-computed bounding box filter on active routes, matching commuters within grid coordinates and reducing average match search times from 4.2s to 120ms.",
    outcome: "Built a functional carpooling MVP that reduces average shared commute costs by up to 60% with dynamic, real-time coordinate matching.",
  },
  {
    id: "timetable-generator",
    title: "AI Timetable Generator",
    subtitle: "Genetic Algorithm Scheduling Engine",
    technologies: ["Java", "Spring Boot", "REST APIs", "Genetic Algorithms", "MySQL"],
    github: "https://github.com/Priyanshupandey14314/AI-Timetable-Generator",
    demo: "#",
    problem: "University course scheduling is an NP-hard problem. Balancing dozens of constraints — like room capacities, course overlaps, and professor availability — makes manual scheduling highly error-prone and slow.",
    architecture: "A custom genetic optimization engine built in Java. Chromosomes model complete schedule iterations, coupled with a Spring Boot REST API for configuring constraints and storing schedules.",
    challenges: "Preventing the genetic algorithm from converging early (getting stuck in local optima) which produced schedules with unresolved slot clashes.",
    decisions: "Developed a custom mutation operator that targets only genes violating hard constraints, combined with tournament selection and elitism. This stabilized convergence rates.",
    outcome: "Schedules are generated in under 15 seconds for a mock department of 200 students, resulting in 100% collision-free room and slot assignments (45% reliability improvement).",
  },
  {
    id: "webradar",
    title: "WebRadar",
    subtitle: "Web Intelligence & Crawling Platform",
    technologies: ["Python", "Playwright", "FastAPI", "React", "PostgreSQL"],
    github: "https://github.com/Priyanshupandey14314/WebRadar",
    demo: "#",
    problem: "Extracting structured data from modern JavaScript-rendered websites at scale requires complex headless browser instances that consume high amounts of memory and risk IP blocking.",
    architecture: "A distributed scraping worker pool powered by Playwright Python, managed by a FastAPI controller, writing back to a PostgreSQL data store.",
    challenges: "Memory leaks in persistent headless chromium instances, causing server resource exhaustion during long-running tasks.",
    decisions: "Switched to a stateless worker architecture where headless browser contexts are recycled every 50 extraction requests. Configured request headers and rotating proxies to prevent rate blocking.",
    outcome: "Reduced RAM usage by 75% during active crawls and sustained scraping speeds of 50+ pages/second, extracting cleaner datasets.",
  },
  {
    id: "stress-detector",
    title: "StressDetector AI Dashboard",
    subtitle: "Keystroke & Behavior Analysis Tool",
    technologies: ["TensorFlow", "Python", "FastAPI", "React", "Chart.js"],
    github: "https://github.com/Priyanshupandey14314/StressDetector",
    demo: "#",
    problem: "Traditional stress detection relies on wearable physiological trackers, which are intrusive and impractical for non-clinical workplace health-tech applications.",
    architecture: "An ML pipeline consuming keyboard typing dynamics (dwell times, flight times) and face expression vectors, classifying stress indices and streaming them to a React dashboard.",
    challenges: "Handling the rapid stream of typing events and video frame metadata without freezing the web dashboard UI.",
    decisions: "Created a sliding-window data buffer in React to batch state updates. Chart.js redraws are throttled to 500ms intervals, ensuring the web interface renders smoothly at 60fps.",
    outcome: "Achieved an ML classification accuracy of 87% under cross-validation testing, with a prediction latency of under 120ms.",
  },
];

export default function Projects() {
  const [activeTab, setActiveTab] = useState<string>("smartride");
  const activeProj = projects.find((p) => p.id === activeTab)!;

  return (
    <section id="projects" className="py-24 border-t border-zinc-900 bg-black">
      <div className="section-wrapper">
        {/* Section Header */}
        <div className="mb-16">
          <p className="font-mono text-xs uppercase tracking-widest text-zinc-500 mb-2">02 / Portfolio</p>
          <h2 className="text-3xl font-bold tracking-tight text-white font-sans">Case Studies</h2>
          <p className="text-zinc-400 text-sm mt-2">Detailed architectural and engineering breakdowns of key products.</p>
        </div>

        {/* Tab Selector */}
        <div className="flex flex-wrap border-b border-zinc-800 mb-8">
          {projects.map((proj, i) => (
            <button
              key={proj.id}
              onClick={() => setActiveTab(proj.id)}
              className={`px-4 py-3 font-mono text-xs uppercase border-b-2 tracking-wider transition-all duration-200 cursor-pointer ${
                activeTab === proj.id
                  ? "border-white text-white font-bold"
                  : "border-transparent text-zinc-500 hover:text-zinc-300"
              }`}
            >
              0{i + 1} / {proj.title}
            </button>
          ))}
        </div>

        {/* Interactive Case Study Content */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 5 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -5 }}
            transition={{ duration: 0.3 }}
            className="grid grid-cols-1 lg:grid-cols-12 gap-8 border border-zinc-800 bg-zinc-950 p-6 md:p-8"
          >
            {/* Left Block - Title and Stack (4 columns) */}
            <div className="lg:col-span-4 flex flex-col justify-between border-b lg:border-b-0 lg:border-r border-zinc-900 pb-6 lg:pb-0 lg:pr-8">
              <div>
                <span className="font-mono text-[10px] text-zinc-500 uppercase tracking-widest">Featured Case Study</span>
                <h3 className="text-2xl font-extrabold text-white font-sans mt-1">{activeProj.title}</h3>
                <p className="text-zinc-400 text-sm mt-1">{activeProj.subtitle}</p>

                {/* Tech Stack Pills */}
                <div className="flex flex-wrap gap-1.5 mt-6">
                  {activeProj.technologies.map((t) => (
                    <span
                      key={t}
                      className="px-2 py-0.5 border border-zinc-800 bg-black font-mono text-[10px] text-zinc-400"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              {/* CTAs */}
              <div className="flex gap-4 mt-8 lg:mt-0 pt-6 border-t border-zinc-900">
                <a
                  href={activeProj.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 font-mono text-xs text-zinc-400 hover:text-white transition-colors cursor-pointer"
                >
                  <FiGithub size={14} />
                  Source Code
                </a>
                <a
                  href={activeProj.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 font-mono text-xs text-zinc-400 hover:text-white transition-colors cursor-pointer"
                >
                  <FiExternalLink size={14} />
                  Live Preview
                </a>
              </div>
            </div>

            {/* Right Block - Deep Dive (8 columns) */}
            <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
              {/* Problem */}
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-zinc-300 font-semibold font-mono text-xs uppercase tracking-wider">
                  <span className="w-1.5 h-1.5 bg-zinc-600 rounded-full" />
                  Problem Statement
                </div>
                <p className="text-zinc-400 text-xs leading-relaxed">{activeProj.problem}</p>
              </div>

              {/* Architecture */}
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-zinc-300 font-semibold font-mono text-xs uppercase tracking-wider">
                  <FiCpu className="text-zinc-500" size={13} />
                  System Architecture
                </div>
                <p className="text-zinc-400 text-xs leading-relaxed">{activeProj.architecture}</p>
              </div>

              {/* Challenges */}
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-zinc-300 font-semibold font-mono text-xs uppercase tracking-wider">
                  <FiAlertTriangle className="text-zinc-500" size={13} />
                  Technical Challenges
                </div>
                <p className="text-zinc-400 text-xs leading-relaxed">{activeProj.challenges}</p>
              </div>

              {/* Engineering Decisions */}
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-zinc-300 font-semibold font-mono text-xs uppercase tracking-wider">
                  <span className="w-1.5 h-1.5 bg-zinc-600 rounded-full" />
                  Engineering Decisions
                </div>
                <p className="text-zinc-400 text-xs leading-relaxed">{activeProj.decisions}</p>
              </div>

              {/* Outcome */}
              <div className="md:col-span-2 space-y-2 border-t border-zinc-900 pt-6">
                <div className="flex items-center gap-2 text-zinc-200 font-semibold font-mono text-xs uppercase tracking-wider">
                  <FiCheckCircle className="text-emerald-500" size={13} />
                  Quantitative Outcome
                </div>
                <p className="text-zinc-400 text-xs leading-relaxed">{activeProj.outcome}</p>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
