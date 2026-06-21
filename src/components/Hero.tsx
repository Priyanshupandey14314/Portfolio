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

            {/* Profile Header & Headline */}
            <motion.div variants={itemVariants} className="flex flex-col sm:flex-row sm:items-center gap-6 mt-2">
              <div className="relative shrink-0 group">
                {/* Sleek rotating gradient/glow border */}
                <div className="absolute -inset-0.5 bg-gradient-to-r from-emerald-500 via-sky-500 to-purple-500 rounded-full blur opacity-40 group-hover:opacity-75 transition duration-500" />
                <img
                  src="/profile.png"
                  alt="Priyanshu Pandey"
                  className="relative w-28 h-28 md:w-32 md:h-32 rounded-full object-cover border-2 border-zinc-800 bg-zinc-900 shadow-2xl"
                />
              </div>
              <div className="flex flex-col justify-center">
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-tight font-sans">
                  Priyanshu Pandey
                </h1>
                <p className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-sky-400 to-purple-400 font-mono text-sm md:text-base font-semibold mt-1.5 uppercase tracking-wider">
                  Software Engineer & Architect
                </p>
                <div className="flex flex-wrap gap-2 mt-3">
                  <span className="text-[10px] bg-zinc-900 border border-zinc-800 px-2 py-0.5 text-zinc-400 font-mono rounded">JAVA / SPRING BOOT</span>
                  <span className="text-[10px] bg-zinc-900 border border-zinc-800 px-2 py-0.5 text-zinc-400 font-mono rounded">DISTRIBUTED SYSTEMS</span>
                  <span className="text-[10px] bg-zinc-900 border border-zinc-800 px-2 py-0.5 text-zinc-400 font-mono rounded">AI INTEGRATION</span>
                </div>
              </div>
            </motion.div>

            {/* Adjusted Professional Bottom Text / Summary */}
            <motion.p
              variants={itemVariants}
              className="text-zinc-400 text-base md:text-lg font-normal leading-relaxed max-w-2xl border-l border-zinc-800 pl-4 mt-2"
            >
              Designing and building high-performance, scalable backend systems and intelligent automation. B.Tech CSE student specializing in Java development, Spring Boot microservices, containerized deployments, and AI integrations.
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
            <div className="border border-zinc-800 bg-zinc-950 p-6 font-mono text-xs text-zinc-400 shadow-2xl relative hover:border-zinc-700 transition-all duration-300 group">
              {/* Subtle top color gradient bar to represent coding colors */}
              <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-emerald-500 via-sky-500 to-purple-500 opacity-50 group-hover:opacity-100 transition-opacity duration-300" />
              
              {/* Card headers */}
              <div className="flex items-center justify-between pb-4 border-b border-zinc-900 mb-6">
                <div className="flex items-center gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-red-500/80 hover:bg-red-500 transition-colors" />
                  <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/80 hover:bg-yellow-500 transition-colors" />
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80 hover:bg-emerald-500 transition-colors" />
                </div>
                <span className="text-[10px] text-zinc-500 font-semibold tracking-wider">system_stats.sh</span>
              </div>

              {/* Shell Prompt simulated session */}
              <div className="flex items-center gap-2 text-[11px] mb-6 pb-4 border-b border-zinc-900/50">
                <span className="text-emerald-400">priyanshu</span>
                <span className="text-zinc-600">@</span>
                <span className="text-sky-400">portfolio</span>
                <span className="text-zinc-500">:</span>
                <span className="text-purple-400">~</span>
                <span className="text-zinc-600">$</span>
                <span className="text-zinc-200 font-semibold">./system_stats.sh --all</span>
              </div>

              {/* Data listing (styled like a configuration file with syntax highlighting) */}
              <div className="space-y-5">
                <div>
                  <div className="text-zinc-500 mb-1"># Current Architecture Focus</div>
                  <div className="flex flex-wrap items-center">
                    <span className="text-sky-400">FOCUS</span>
                    <span className="text-pink-500 mx-1.5">=</span>
                    <span className="text-amber-300">"Distributed Microservices, REST APIs, AI Inference"</span>
                  </div>
                </div>

                <div>
                  <div className="text-zinc-500 mb-1"># Core Systems Stack</div>
                  <div className="flex flex-wrap items-center">
                    <span className="text-sky-400">STACK</span>
                    <span className="text-pink-500 mx-1.5">=</span>
                    <span className="text-yellow-500">[</span>
                    <span className="text-amber-300">"Java"</span><span className="text-zinc-500">, </span>
                    <span className="text-amber-300">"Spring Boot"</span><span className="text-zinc-500">, </span>
                    <span className="text-amber-300">"PostgreSQL"</span><span className="text-zinc-500">, </span>
                    <span className="text-amber-300">"Docker"</span><span className="text-zinc-500">, </span>
                    <span className="text-amber-300">"AWS"</span>
                    <span className="text-yellow-500">]</span>
                  </div>
                </div>

                <div>
                  <div className="text-zinc-500 mb-1"># Competitive Programming</div>
                  <div className="flex flex-wrap items-center gap-x-2 gap-y-1">
                    <span className="text-sky-400">CODECHEF_RATING</span>
                    <span className="text-pink-500">=</span>
                    <span className="px-1.5 py-0.5 rounded bg-zinc-900 border border-zinc-800 text-amber-400 text-[10px] font-bold">2★</span>
                    <span className="text-zinc-500"># Active solver & participant</span>
                  </div>
                </div>

                <div>
                  <div className="text-zinc-500 mb-1"># Key Capabilities</div>
                  <div className="space-y-1.5 pl-2 border-l border-zinc-900">
                    <div className="flex flex-wrap items-center">
                      <span className="text-purple-400">CAP_CONCURRENCY</span>
                      <span className="text-pink-500 mx-1.5">=</span>
                      <span className="text-amber-300">"Multithreading & Concurrency"</span>
                    </div>
                    <div className="flex flex-wrap items-center">
                      <span className="text-purple-400">CAP_ALGORITHMS</span>
                      <span className="text-pink-500 mx-1.5">=</span>
                      <span className="text-amber-300">"Genetic Scheduling Algorithms"</span>
                    </div>
                    <div className="flex flex-wrap items-center">
                      <span className="text-purple-400">CAP_AI_DASHBOARD</span>
                      <span className="text-pink-500 mx-1.5">=</span>
                      <span className="text-amber-300">"Sentiment Analysis Dashboard"</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Status and SSH footer */}
              <div className="mt-8 pt-4 border-t border-zinc-900 flex justify-between items-center text-[10px] text-zinc-500">
                <span className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                  <span>STATUS: ACTIVE_DAEMON</span>
                </span>
                <span>SECURE_SHELL v2.4</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
