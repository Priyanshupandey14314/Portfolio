"use client";
import { motion } from "framer-motion";
import { FiBriefcase, FiGlobe, FiBook } from "react-icons/fi";

const experiences = [
  {
    type: "Internship",
    title: "Software Engineering Intern",
    company: "Startups & Tech Teams",
    period: "2025 - Present",
    description: "Developed and optimized backend server modules, streamlined API routing pipelines, and worked on deployment packaging. Reduced service latency and integrated internal utilities.",
    tags: ["Java", "Spring Boot", "REST APIs", "PostgreSQL", "Docker"],
    icon: FiBriefcase,
  },
  {
    type: "Freelance",
    title: "Freelance Developer",
    company: "Client Solutions",
    period: "2023 - 2025",
    description: "Engineered robust full-stack systems and automated crawlers for clients. Handled end-to-end delivery including client alignment, database schema design, and production deployment.",
    tags: ["React", "FastAPI", "Playwright", "MySQL", "Tailwind CSS"],
    icon: FiGlobe,
  },
  {
    type: "Academic",
    title: "Academic Systems & AI Projects",
    company: "B.Tech CSE Research",
    period: "2022 - Present",
    description: "Developed and published algorithmic optimization systems (Genetic Algorithms) and predictive AI models (StressDetector). Built distributed microservice codebases for academic evaluations.",
    tags: ["Distributed Systems", "Machine Learning", "Algorithms", "Java", "Python"],
    icon: FiBook,
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-24 border-t border-zinc-900 bg-black">
      <div className="section-wrapper">
        {/* Section Header */}
        <div className="mb-16">
          <p className="font-mono text-xs uppercase tracking-widest text-zinc-500 mb-2">04 / Biography</p>
          <h2 className="text-3xl font-bold tracking-tight text-white font-sans">Professional Experience</h2>
          <p className="text-zinc-400 text-sm mt-2">A timeline of internships, independent client work, and core academic research.</p>
        </div>

        {/* Timeline Stack */}
        <div className="flex flex-col border border-zinc-800 bg-zinc-950">
          {experiences.map((exp, i) => (
            <motion.div
              key={exp.title}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className={`p-6 md:p-8 flex flex-col md:flex-row md:items-start justify-between gap-6 ${
                i < experiences.length - 1 ? "border-b border-zinc-800" : ""
              } hover:bg-zinc-900/30 transition-all duration-300`}
            >
              {/* Left Column: Icon + Type & Period */}
              <div className="flex items-start gap-4 md:w-1/4">
                <div className="p-2 border border-zinc-800 bg-black text-zinc-400">
                  <exp.icon size={16} />
                </div>
                <div>
                  <span className="font-mono text-[10px] text-zinc-500 uppercase tracking-widest block">
                    {exp.type}
                  </span>
                  <span className="font-mono text-xs text-white font-semibold mt-1 block">
                    {exp.period}
                  </span>
                </div>
              </div>

              {/* Right Column: Title, Company, Description & Tags */}
              <div className="flex-1 space-y-4">
                <div>
                  <h3 className="text-lg font-bold text-white font-sans">
                    {exp.title}
                  </h3>
                  <p className="text-zinc-500 text-xs mt-0.5">
                    {exp.company}
                  </p>
                </div>

                <p className="text-zinc-400 text-xs leading-relaxed max-w-3xl">
                  {exp.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-1.5 pt-2">
                  {exp.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-1.5 py-0.5 border border-zinc-900 bg-black font-mono text-[9px] text-zinc-500"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
