"use client";
import { motion } from "framer-motion";
import { FiArrowRight, FiDownload, FiGithub, FiLinkedin, FiMail } from "react-icons/fi";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 12 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.16, 1, 0.3, 1] as [number, number, number, number],
    },
  },
};

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-24 pb-16 overflow-hidden bg-black grid-bg-lines">
      {/* Background radial highlight to add depth to grid lines */}
      <div className="absolute inset-0 bg-radial-gradient from-zinc-950/50 via-black to-black pointer-events-none" />

      <div className="section-wrapper relative z-10 w-full">
        {/* Core Layout Grid */}
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Block: Content */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="lg:col-span-7 flex flex-col gap-6"
          >
            {/* Availability Pill */}
            <motion.div variants={itemVariants} className="flex">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-zinc-800 bg-zinc-950 text-xs font-mono text-zinc-300">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                </span>
                B.Tech CSE — Distributed Systems & AI
              </div>
            </motion.div>

            {/* Headline */}
            <motion.h1
              variants={itemVariants}
              className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.1] font-sans"
            >
              Building scalable backend systems and intelligent software products.
            </motion.h1>

            {/* Subheadline */}
            <motion.p
              variants={itemVariants}
              className="text-zinc-400 text-lg md:text-xl font-normal leading-relaxed max-w-2xl"
            >
              B.Tech CSE student specializing in Java, Spring Boot, Distributed Systems, and AI-powered applications.
            </motion.p>

            {/* CTAs */}
            <motion.div variants={itemVariants} className="flex flex-wrap gap-4 mt-2">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 px-5 py-3 bg-white text-black font-semibold text-sm hover:bg-zinc-200 transition-all cursor-pointer font-mono"
              >
                View My Work
                <FiArrowRight size={16} />
              </a>
              <a
                href="/MyUpdatedRes.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-3 border border-zinc-800 bg-zinc-950 hover:bg-zinc-900 text-white font-semibold text-sm transition-all cursor-pointer font-mono"
              >
                Download Resume
                <FiDownload size={16} />
              </a>
            </motion.div>

            {/* Social Connection bar */}
            <motion.div
              variants={itemVariants}
              className="flex items-center gap-4 mt-6 pt-6 border-t border-zinc-900"
            >
              <a
                href="https://github.com/Priyanshupandey14314"
                target="_blank"
                rel="noopener noreferrer"
                className="text-zinc-400 hover:text-white transition-colors"
                aria-label="GitHub"
              >
                <FiGithub size={20} />
              </a>
              <a
                href="https://www.linkedin.com/in/priyanshu-pandey-604711251/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-zinc-400 hover:text-white transition-colors"
                aria-label="LinkedIn"
              >
                <FiLinkedin size={20} />
              </a>
              <a
                href="mailto:priyanshun14314@gmail.com"
                className="text-zinc-400 hover:text-white transition-colors"
                aria-label="Email"
              >
                <FiMail size={20} />
              </a>
              <span className="text-zinc-600 text-xs font-mono">/</span>
              <span className="text-zinc-500 text-xs font-mono">priyanshun14314@gmail.com</span>
            </motion.div>
          </motion.div>

          {/* Right Block: Technical Information Mockup */}
          <motion.div
            initial={{ opacity: 0, scale: 0.98, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 hidden lg:block"
          >
            <div className="border border-zinc-800 bg-zinc-950 p-6 font-mono text-xs text-zinc-400 shadow-2xl relative">
              {/* Card headers */}
              <div className="flex items-center justify-between pb-4 border-b border-zinc-900 mb-6">
                <div className="flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-zinc-800" />
                  <span className="w-2 h-2 rounded-full bg-zinc-800" />
                  <span className="w-2 h-2 rounded-full bg-zinc-800" />
                </div>
                <span className="text-[10px] text-zinc-600">system_stats.sh</span>
              </div>

              {/* Data listing */}
              <div className="space-y-4">
                <div>
                  <span className="text-zinc-600"># Current Architecture Focus</span>
                  <p className="text-zinc-100 font-semibold mt-1">Distributed Microservices, REST APIs, AI Inference</p>
                </div>
                <div>
                  <span className="text-zinc-600"># Core Systems Stack</span>
                  <p className="text-zinc-100 mt-1">Java / Spring Boot / PostgreSQL / Docker / AWS</p>
                </div>
                <div>
                  <span className="text-zinc-600"># Competitive Programming</span>
                  <div className="flex items-center gap-2 mt-1">
                    <span className="px-1.5 py-0.5 rounded bg-zinc-900 border border-zinc-800 text-zinc-100 text-[10px]">CodeChef 2★</span>
                    <span className="text-zinc-500">Active CP participant & problem solver</span>
                  </div>
                </div>
                <div>
                  <span className="text-zinc-600"># Key Capabilities</span>
                  <ul className="list-none space-y-1 mt-1.5 text-zinc-300">
                    <li className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-zinc-700" />
                      Multithreading & Concurrency
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-zinc-700" />
                      Genetic Scheduling Algorithms
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-zinc-700" />
                      Sentiment Analysis Dashboard
                    </li>
                  </ul>
                </div>
              </div>

              <div className="mt-8 pt-4 border-t border-zinc-900 flex justify-between items-center text-[10px] text-zinc-600">
                <span>STATUS: OK</span>
                <span>SECURE_SHELL v2.4</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
