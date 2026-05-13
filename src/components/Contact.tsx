"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { FiSend, FiMail, FiGithub, FiLinkedin, FiTwitter, FiMapPin } from "react-icons/fi";

const socials = [
  { icon: FiGithub, label: "GitHub", href: "https://github.com/Priyanshupandey14314", handle: "@Priyanshupandey14314" },
  { icon: FiLinkedin, label: "LinkedIn", href: "https://linkedin.com/in/priyanshu-pandey", handle: "in/priyanshu-pandey" },
  { icon: FiTwitter, label: "Twitter / X", href: "https://twitter.com/priyanshupandey", handle: "@priyanshupandey" },
  { icon: FiMail, label: "Email", href: "mailto:priyanshu@example.com", handle: "priyanshu@example.com" },
];

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    // Simulate async send (replace with EmailJS / Formspree)
    await new Promise((res) => setTimeout(res, 1500));
    setStatus("success");
    setForm({ name: "", email: "", subject: "", message: "" });
  };

  return (
    <section id="contact" className="py-28 relative overflow-hidden">
      <div className="orb orb-violet w-96 h-96 bottom-[-100px] left-[-100px] opacity-20" />
      <div className="orb orb-cyan w-64 h-64 top-0 right-[-50px] opacity-15" />

      <div className="section-wrapper">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <p className="section-label">Get in touch</p>
          <h2 className="section-title">
            Let&apos;s <span className="gradient-text">Connect</span>
          </h2>
          <p className="text-slate-400 text-lg max-w-xl mx-auto mt-4">
            Whether you have an internship opportunity, a project idea, or just want to chat about tech — my inbox is always open.
          </p>
          <div className="mt-6 w-16 h-1 bg-gradient-to-r from-violet-500 to-cyan-500 rounded-full mx-auto" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left: Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="space-y-6"
          >
            {/* Location */}
            <div className="glass-card p-6 flex items-center gap-4">
              <div className="p-3 bg-violet-500/10 rounded-xl text-violet-400">
                <FiMapPin size={22} />
              </div>
              <div>
                <p className="text-slate-500 text-xs uppercase tracking-wider mb-0.5">Location</p>
                <p className="text-white font-medium">India 🇮🇳</p>
                <p className="text-slate-400 text-sm">Available for remote worldwide</p>
              </div>
            </div>

            {/* Availability */}
            <div className="glass-card p-6">
              <div className="flex items-center gap-3 mb-3">
                <span className="availability-badge">
                  <span className="availability-dot" />
                  Open for Opportunities
                </span>
              </div>
              <p className="text-slate-400 text-sm leading-relaxed">
                Currently seeking <span className="text-violet-300 font-medium">software engineering internships</span> and open to full-time roles at companies building impactful products.
              </p>
            </div>

            {/* Social links */}
            <div className="space-y-3">
              {socials.map(({ icon: Icon, label, href, handle }) => (
                <motion.a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ x: 6 }}
                  className="glass-card p-4 flex items-center gap-4 group block hover:border-violet-500/30 transition-all duration-300"
                >
                  <div className="p-2 bg-violet-500/10 rounded-lg text-violet-400 group-hover:scale-110 transition-transform duration-300">
                    <Icon size={18} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-white font-medium text-sm">{label}</p>
                    <p className="text-slate-500 text-xs truncate">{handle}</p>
                  </div>
                  <span className="text-slate-600 group-hover:text-violet-400 transition-colors text-lg">→</span>
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Right: Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="glass-card p-8">
              {status === "success" ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-10"
                >
                  <div className="text-6xl mb-4">🚀</div>
                  <h3 className="text-2xl font-bold text-white mb-2">Message Sent!</h3>
                  <p className="text-slate-400">
                    Thanks for reaching out! I&apos;ll get back to you within 24 hours.
                  </p>
                  <button
                    onClick={() => setStatus("idle")}
                    className="btn-secondary mt-6"
                  >
                    Send Another
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <h3 className="text-xl font-bold text-white mb-6">Send a Message</h3>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-slate-400 text-xs uppercase tracking-wider mb-2 block">Name</label>
                      <input
                        type="text"
                        name="name"
                        value={form.name}
                        onChange={handleChange}
                        required
                        placeholder="Your name"
                        className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-slate-600 focus:outline-none focus:border-violet-500/50 focus:ring-1 focus:ring-violet-500/30 transition-all duration-300 text-sm"
                      />
                    </div>
                    <div>
                      <label className="text-slate-400 text-xs uppercase tracking-wider mb-2 block">Email</label>
                      <input
                        type="email"
                        name="email"
                        value={form.email}
                        onChange={handleChange}
                        required
                        placeholder="your@email.com"
                        className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-slate-600 focus:outline-none focus:border-violet-500/50 focus:ring-1 focus:ring-violet-500/30 transition-all duration-300 text-sm"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="text-slate-400 text-xs uppercase tracking-wider mb-2 block">Subject</label>
                    <input
                      type="text"
                      name="subject"
                      value={form.subject}
                      onChange={handleChange}
                      required
                      placeholder="Internship opportunity / Project collaboration / ..."
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-slate-600 focus:outline-none focus:border-violet-500/50 focus:ring-1 focus:ring-violet-500/30 transition-all duration-300 text-sm"
                    />
                  </div>

                  <div>
                    <label className="text-slate-400 text-xs uppercase tracking-wider mb-2 block">Message</label>
                    <textarea
                      name="message"
                      value={form.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      placeholder="Tell me about the opportunity, project, or just say hi!"
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-slate-600 focus:outline-none focus:border-violet-500/50 focus:ring-1 focus:ring-violet-500/30 transition-all duration-300 text-sm resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={status === "loading"}
                    className="btn-primary w-full justify-center"
                  >
                    {status === "loading" ? (
                      <>
                        <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        Sending...
                      </>
                    ) : (
                      <>
                        Send Message <FiSend size={16} />
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
