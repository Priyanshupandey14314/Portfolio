"use client";
import { motion } from "framer-motion";
import { FiGithub, FiLinkedin, FiMail, FiHeart } from "react-icons/fi";
import { FiTwitter } from "react-icons/fi";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

const socials = [
  { icon: FiGithub, href: "https://github.com/Priyanshupandey14314", label: "GitHub" },
  { icon: FiLinkedin, href: "https://linkedin.com/in/priyanshu-pandey", label: "LinkedIn" },
  { icon: FiTwitter, href: "https://twitter.com/priyanshupandey", label: "Twitter" },
  { icon: FiMail, href: "mailto:priyanshu@example.com", label: "Email" },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-violet-500/10 pt-16 pb-8">
      <div className="section-wrapper">
        <div className="grid md:grid-cols-3 gap-10 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-violet-600 to-cyan-500 flex items-center justify-center text-white font-bold text-sm">
                P
              </div>
              <span className="font-bold text-lg text-white">
                Priyanshu<span className="text-violet-400">.</span>
              </span>
            </div>
            <p className="text-slate-500 text-sm leading-relaxed max-w-xs">
              Full Stack Developer &amp; BTech CSE student passionate about building scalable, elegant software.
            </p>
            <div className="flex items-center gap-3 mt-5">
              <span className="availability-badge text-xs">
                <span className="availability-dot" style={{ width: 6, height: 6 }} />
                Open to work
              </span>
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">Quick Links</h4>
            <ul className="space-y-2">
              {navLinks.map(({ label, href }) => (
                <li key={label}>
                  <a
                    href={href}
                    className="text-slate-500 hover:text-violet-400 transition-colors text-sm animated-underline"
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">Connect</h4>
            <div className="space-y-2 mb-5">
              <p className="text-slate-500 text-sm">priyanshu@example.com</p>
              <p className="text-slate-500 text-sm">India 🇮🇳</p>
            </div>
            <div className="flex gap-3">
              {socials.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="p-2.5 glass-card text-slate-500 hover:text-violet-400 hover:border-violet-500/30 transition-all duration-300 hover:-translate-y-1"
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/5 pt-8 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-slate-600 text-xs">
            © {year} Priyanshu Pandey. All rights reserved.
          </p>
          <p className="text-slate-600 text-xs flex items-center gap-1.5">
            Built with <FiHeart size={12} className="text-violet-400" /> using Next.js, Tailwind &amp; Framer Motion
          </p>
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="text-xs text-slate-600 hover:text-violet-400 transition-colors font-mono"
          >
            Back to top ↑
          </button>
        </div>
      </div>
    </footer>
  );
}
