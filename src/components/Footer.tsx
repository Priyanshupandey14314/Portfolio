"use client";
import { FiGithub, FiLinkedin, FiMail } from "react-icons/fi";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Metrics", href: "#metrics" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Blog", href: "#blog" },
  { label: "Contact", href: "#contact" },
];

const socials = [
  { icon: FiGithub, href: "https://github.com/Priyanshupandey14314", label: "GitHub" },
  { icon: FiLinkedin, href: "https://www.linkedin.com/in/priyanshu-pandey-604711251/", label: "LinkedIn" },
  { icon: FiMail, href: "mailto:priyanshun14314@gmail.com", label: "Email" },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-zinc-900 bg-black pt-16 pb-8">
      <div className="section-wrapper">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-12">
          {/* Brand */}
          <div className="space-y-4">
            <div className="font-mono text-sm tracking-tight text-white font-semibold">
              priyanshu.pandey<span className="text-zinc-500">()</span>
            </div>
            <p className="text-zinc-500 text-xs leading-relaxed max-w-xs">
              B.Tech CSE student specializing in systems architectures, Java, Spring Boot, and AI-powered optimization tools.
            </p>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="text-white font-mono text-xs uppercase tracking-wider mb-4 font-semibold">Navigation</h4>
            <ul className="grid grid-cols-2 gap-2">
              {navLinks.map(({ label, href }) => (
                <li key={label}>
                  <a
                    href={href}
                    className="text-zinc-500 hover:text-white transition-colors text-xs font-mono"
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Socials */}
          <div className="space-y-4">
            <h4 className="text-white font-mono text-xs uppercase tracking-wider font-semibold">Connect</h4>
            <p className="text-zinc-500 text-xs font-mono">priyanshun14314@gmail.com</p>
            <div className="flex gap-4">
              {socials.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="text-zinc-500 hover:text-white transition-colors"
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-zinc-900 pt-8 mt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-zinc-600 text-[10px] font-mono">
            &copy; {year} Priyanshu Pandey. All rights reserved.
          </p>
          <p className="text-zinc-600 text-[10px] font-mono">
            Next.js / Tailwind CSS / Framer Motion
          </p>
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="text-[10px] text-zinc-500 hover:text-white transition-colors font-mono cursor-pointer uppercase tracking-wider"
          >
            Back to top &uarr;
          </button>
        </div>
      </div>
    </footer>
  );
}
