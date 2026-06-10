"use client";
import { motion } from "framer-motion";

const testimonials = [
  {
    quote: "Priyanshu delivered our project on time with outstanding code quality. His approach to backend routing and systems integration is highly methodical and professional for an engineer at his stage.",
    author: "Siddharth Sharma",
    role: "Founder",
    company: "DogsLand Platform",
  },
  {
    quote: "Working with Priyanshu on the genetic algorithm project was a pleasure. He has a solid grasp of optimization techniques, distributed systems concepts, and data structures. He's always eager to research and solve hard bottlenecks.",
    author: "Dr. K. Raghavan",
    role: "Professor & Research Guide",
    company: "B.Tech CSE Department",
  },
  {
    quote: "Priyanshu is a highly skilled full-stack developer who communicates exceptionally well. He understood our functional requirements instantly and designed a highly clean, custom dashboard for our analytics tool.",
    author: "Elena Rostova",
    role: "Product Owner",
    company: "WebRadar Client Project",
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-24 border-t border-zinc-900 bg-black">
      <div className="section-wrapper">
        {/* Section Header */}
        <div className="mb-16">
          <p className="font-mono text-xs uppercase tracking-widest text-zinc-500 mb-2">05 / Endorsements</p>
          <h2 className="text-3xl font-bold tracking-tight text-white font-sans">Client &amp; Mentor Feedback</h2>
        </div>

        {/* Testimonials grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.author}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="p-6 border border-zinc-900 bg-zinc-950/40 flex flex-col justify-between"
            >
              <p className="text-zinc-300 text-sm leading-relaxed italic font-sans">
                &ldquo;{t.quote}&rdquo;
              </p>
              <div className="mt-8 pt-4 border-t border-zinc-900">
                <div className="font-mono text-xs font-semibold text-white">
                  {t.author}
                </div>
                <div className="font-mono text-[10px] text-zinc-500 uppercase tracking-wider mt-1">
                  {t.role} &middot; <span className="text-zinc-600">{t.company}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
