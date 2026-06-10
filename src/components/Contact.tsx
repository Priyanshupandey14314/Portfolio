"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { FiSend, FiMail, FiGithub, FiLinkedin, FiMapPin, FiCheckCircle } from "react-icons/fi";

const socials = [
  { icon: FiGithub, label: "GitHub", href: "https://github.com/Priyanshupandey14314", handle: "github.com/Priyanshupandey14314" },
  { icon: FiLinkedin, label: "LinkedIn", href: "https://www.linkedin.com/in/priyanshu-pandey-604711251/", handle: "linkedin.com/in/priyanshu-pandey" },
  { icon: FiMail, label: "Email", href: "mailto:priyanshun14314@gmail.com", handle: "priyanshun14314@gmail.com" },
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
    await new Promise((res) => setTimeout(res, 1000));
    setStatus("success");
    setForm({ name: "", email: "", subject: "", message: "" });
  };

  return (
    <section id="contact" className="py-24 border-t border-zinc-900 bg-black">
      <div className="section-wrapper">
        {/* Section Header */}
        <div className="mb-16">
          <p className="font-mono text-xs uppercase tracking-widest text-zinc-500 mb-2">06 / Communications</p>
          <h2 className="text-3xl font-bold tracking-tight text-white font-sans">Get In Touch</h2>
          <p className="text-zinc-400 text-sm mt-2">Open to software engineering internships and collaboration opportunities.</p>
        </div>

        {/* Form & Info Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Block: Contact Info (5 columns) */}
          <div className="lg:col-span-5 space-y-8">
            {/* Status Info */}
            <div className="border border-zinc-850 bg-zinc-950 p-6 space-y-4">
              <div className="flex items-center gap-2">
                <span className="relative flex h-2 w-2">
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                </span>
                <span className="font-mono text-xs text-white uppercase tracking-wider font-semibold">Current Availability</span>
              </div>
              <p className="text-zinc-400 text-xs leading-relaxed">
                Actively looking for software engineering internships. Open to remote contracts or on-site roles. Based in India.
              </p>
              <div className="flex items-center gap-2 text-zinc-500 font-mono text-xs pt-2 border-t border-zinc-900">
                <FiMapPin size={12} />
                <span>India / Remote Worldwide</span>
              </div>
            </div>

            {/* Direct Links */}
            <div className="space-y-3">
              <span className="font-mono text-[10px] text-zinc-500 uppercase tracking-widest block mb-2">Direct Channels</span>
              {socials.map(({ icon: Icon, label, href, handle }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-4 border border-zinc-900 bg-zinc-950/20 hover:border-zinc-700 hover:bg-zinc-950/60 transition-all group cursor-pointer"
                >
                  <div className="flex items-center gap-3">
                    <Icon size={14} className="text-zinc-500 group-hover:text-white transition-colors" />
                    <div>
                      <div className="text-white font-sans text-xs font-semibold">{label}</div>
                      <div className="text-zinc-500 font-mono text-[10px] mt-0.5">{handle}</div>
                    </div>
                  </div>
                  <span className="text-zinc-600 group-hover:text-white transition-colors font-mono text-xs">→</span>
                </a>
              ))}
            </div>
          </div>

          {/* Right Block: Message Form (7 columns) */}
          <div className="lg:col-span-7 border border-zinc-800 bg-zinc-950 p-6 md:p-8">
            {status === "success" ? (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-center py-12 space-y-4"
              >
                <div className="flex justify-center">
                  <FiCheckCircle className="text-white" size={40} />
                </div>
                <h3 className="text-lg font-bold text-white font-sans">Message Transmitted</h3>
                <p className="text-zinc-400 text-xs max-w-sm mx-auto leading-relaxed">
                  Your message has been processed successfully. I will review the inquiry and respond within 24 hours.
                </p>
                <button
                  onClick={() => setStatus("idle")}
                  className="px-4 py-2 border border-zinc-800 bg-zinc-900 text-white font-mono text-xs hover:bg-zinc-850 transition-all cursor-pointer"
                >
                  Send New Message
                </button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="text-zinc-400 font-mono text-[10px] uppercase tracking-wider mb-1.5 block">Name</label>
                    <input
                      type="text"
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      required
                      placeholder="Your name"
                      className="w-full bg-black border border-zinc-850 px-4 py-2.5 text-white placeholder-zinc-700 focus:outline-none focus:border-white transition-all text-xs font-mono"
                    />
                  </div>
                  <div>
                    <label className="text-zinc-400 font-mono text-[10px] uppercase tracking-wider mb-1.5 block">Email</label>
                    <input
                      type="email"
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      required
                      placeholder="your@email.com"
                      className="w-full bg-black border border-zinc-850 px-4 py-2.5 text-white placeholder-zinc-700 focus:outline-none focus:border-white transition-all text-xs font-mono"
                    />
                  </div>
                </div>

                <div>
                  <label className="text-zinc-400 font-mono text-[10px] uppercase tracking-wider mb-1.5 block">Subject</label>
                  <input
                    type="text"
                    name="subject"
                    value={form.subject}
                    onChange={handleChange}
                    required
                    placeholder="Internship opportunities / Projects / Consultation"
                    className="w-full bg-black border border-zinc-850 px-4 py-2.5 text-white placeholder-zinc-700 focus:outline-none focus:border-white transition-all text-xs font-mono"
                  />
                </div>

                <div>
                  <label className="text-zinc-400 font-mono text-[10px] uppercase tracking-wider mb-1.5 block">Message</label>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    placeholder="Describe the opportunity, codebase scope, or role specifications..."
                    className="w-full bg-black border border-zinc-850 px-4 py-2.5 text-white placeholder-zinc-700 focus:outline-none focus:border-white transition-all text-xs font-mono resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={status === "loading"}
                  className="w-full flex items-center justify-center gap-2 py-3 bg-white text-black font-semibold text-xs hover:bg-zinc-200 transition-all cursor-pointer font-mono uppercase tracking-wider"
                >
                  {status === "loading" ? (
                    <>
                      <span className="w-3.5 h-3.5 border-2 border-black/30 border-t-black rounded-full animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      Send Message
                      <FiSend size={12} />
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
