"use client";
import { motion } from "framer-motion";

const metrics = [
  {
    value: "2★",
    label: "CodeChef Rating",
    detail: "Competed in multiple rated contests, solving complex algorithmic problems.",
  },
  {
    value: "10+",
    label: "Full-Stack Projects",
    detail: "Built from scratch, ranging from AI applications to distributed real-time platforms.",
  },
  {
    value: "Internship",
    label: "Professional Exp",
    detail: "Engineered and deployed production features, adhering to enterprise design principles.",
  },
  {
    value: "Client Ready",
    label: "Delivered Products",
    detail: "Consulted and built custom tools for clients, achieving 100% project delivery rate.",
  },
  {
    value: "500+",
    label: "Problems Solved",
    detail: "Strong foundations in Data Structures and Algorithms across CodeChef & LeetCode.",
  },
];

export default function Metrics() {
  return (
    <section id="metrics" className="py-24 border-t border-zinc-900 bg-black">
      <div className="section-wrapper">
        {/* Section Header */}
        <div className="mb-12">
          <p className="font-mono text-xs uppercase tracking-widest text-zinc-500 mb-2">01 / Performance Indicators</p>
          <h2 className="text-3xl font-bold tracking-tight text-white font-sans">Engineering Impact</h2>
        </div>

        {/* Bento/Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 border border-zinc-800 bg-zinc-950">
          {metrics.map((m, i) => (
            <motion.div
              key={m.label}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className={`p-6 flex flex-col justify-between min-h-[180px] border-b border-zinc-800 lg:border-b-0 ${
                i < metrics.length - 1 ? "lg:border-r border-zinc-800" : ""
              } hover:bg-zinc-900/40 transition-all duration-300`}
            >
              <div>
                <div className="font-mono text-3xl font-extrabold text-white tracking-tight">
                  {m.value}
                </div>
                <div className="font-mono text-[11px] font-semibold text-zinc-400 uppercase tracking-wider mt-1.5">
                  {m.label}
                </div>
              </div>
              <p className="text-zinc-500 text-xs leading-relaxed mt-6">
                {m.detail}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
