"use client";
import { motion } from "framer-motion";
import { FiCpu, FiLayout, FiDatabase, FiCloud, FiActivity } from "react-icons/fi";

const capabilities = [
  {
    icon: FiCpu,
    title: "Backend Engineering",
    description: "Architecting high-throughput core systems, multi-threaded operations, and distributed services.",
    skills: ["Java", "Spring Boot", "REST APIs", "Microservices"],
  },
  {
    icon: FiLayout,
    title: "Frontend Development",
    description: "Developing highly responsive interface systems, batch UI state loops, and fluid layouts.",
    skills: ["React", "JavaScript", "HTML", "CSS"],
  },
  {
    icon: FiDatabase,
    title: "Database Engineering",
    description: "Designing structured schemas, query optimizations, and geospatial indexing structures.",
    skills: ["MySQL", "PostgreSQL"],
  },
  {
    icon: FiCloud,
    title: "Cloud & DevOps",
    description: "Managing code deployment lifecycles, virtual environments, and containerised microservices.",
    skills: ["Git", "GitHub", "Deployment"],
  },
  {
    icon: FiActivity,
    title: "AI & Problem Solving",
    description: "Applying combinatorial optimization algorithms and training neural networks for predictive dashboards.",
    skills: ["Machine Learning", "Genetic Algorithms", "DSA"],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-24 border-t border-zinc-900 bg-black">
      <div className="section-wrapper">
        {/* Section Header */}
        <div className="mb-16">
          <p className="font-mono text-xs uppercase tracking-widest text-zinc-500 mb-2">03 / Competence</p>
          <h2 className="text-3xl font-bold tracking-tight text-white font-sans">Engineering Expertise</h2>
          <p className="text-zinc-400 text-sm mt-2">Restructured capabilities mapped to technical domains and toolchains.</p>
        </div>

        {/* Capabilities Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
          {capabilities.map((cap, i) => (
            <motion.div
              key={cap.title}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="p-6 border border-zinc-900 bg-zinc-950/40 hover:border-zinc-700 transition-colors flex flex-col justify-between"
            >
              <div>
                {/* Capability Header */}
                <div className="flex items-center gap-2 text-white font-semibold font-sans text-sm mb-4">
                  <cap.icon size={16} className="text-zinc-400" />
                  <h4>{cap.title}</h4>
                </div>

                <p className="text-zinc-400 text-xs leading-relaxed">
                  {cap.description}
                </p>
              </div>

              {/* Skills Tags */}
              <div className="flex flex-wrap gap-1.5 mt-8 pt-4 border-t border-zinc-900">
                {cap.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-1.5 py-0.5 border border-zinc-800 bg-zinc-950 font-mono text-[9px] text-zinc-400"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
