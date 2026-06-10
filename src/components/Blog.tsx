"use client";
import { motion } from "framer-motion";
import { FiArrowUpRight } from "react-icons/fi";

const posts = [
  {
    title: "Designing a Genetic Algorithm for Multi-Constraint Scheduling",
    excerpt: "Exploring how chromosome representations and custom crossover operators can solve NP-hard timetable allocation problems in universities.",
    date: "May 2026",
    readTime: "8 min read",
    tag: "algorithms",
    link: "#",
  },
  {
    title: "Optimizing Java Microservices Latency with Spring Boot",
    excerpt: "Practical guide to thread pool tuning, JVM garbage collection settings, and connection pooling for sub-100ms API response times.",
    date: "Mar 2026",
    readTime: "6 min read",
    tag: "backend",
    link: "#",
  },
  {
    title: "Real-Time Stress Detection: Merging AI with Web Dashboards",
    excerpt: "Building a low-latency pipeline to process keyboard typing dynamics and physiological data streams using FastAPI and TensorFlow.",
    date: "Jan 2026",
    readTime: "5 min read",
    tag: "machine-learning",
    link: "#",
  },
];

export default function Blog() {
  return (
    <section id="blog" className="py-24 border-t border-zinc-900 bg-black">
      <div className="section-wrapper">
        {/* Section Header */}
        <div className="mb-16">
          <p className="font-mono text-xs uppercase tracking-widest text-zinc-500 mb-2">04 / Publications</p>
          <h2 className="text-3xl font-bold tracking-tight text-white font-sans">Technical Insights</h2>
          <p className="text-zinc-400 text-sm mt-2">Writing about distributed architectures, algorithmic solutions, and full-stack software design.</p>
        </div>

        {/* Article list */}
        <div className="flex flex-col">
          {posts.map((post, i) => (
            <motion.a
              key={post.title}
              href={post.link}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="group flex flex-col md:flex-row md:items-center justify-between py-8 border-b border-zinc-900 hover:border-zinc-700 transition-colors"
            >
              {/* Left Column: Metadata */}
              <div className="flex items-center gap-4 mb-4 md:mb-0 md:w-1/4">
                <span className="font-mono text-[11px] text-zinc-500 uppercase tracking-wider">{post.date}</span>
                <span className="w-1.5 h-1.5 rounded-full bg-zinc-800" />
                <span className="font-mono text-[11px] text-zinc-500 uppercase">{post.readTime}</span>
              </div>

              {/* Middle Column: Title & Description */}
              <div className="flex-1 md:pr-12">
                <div className="flex items-center gap-2 mb-1">
                  <span className="px-1.5 py-0.5 rounded border border-zinc-800 bg-zinc-950 font-mono text-[10px] text-zinc-400 uppercase">
                    {post.tag}
                  </span>
                </div>
                <h3 className="text-lg font-bold text-white group-hover:text-zinc-300 transition-colors font-sans leading-snug">
                  {post.title}
                </h3>
                <p className="text-zinc-500 text-sm mt-2 leading-relaxed max-w-3xl">
                  {post.excerpt}
                </p>
              </div>

              {/* Right Column: Link Indicator */}
              <div className="mt-4 md:mt-0 flex items-center gap-2 font-mono text-xs text-zinc-500 group-hover:text-white transition-colors">
                <span>Read article</span>
                <FiArrowUpRight size={14} className="transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
