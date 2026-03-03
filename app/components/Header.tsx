"use client";

import Link from "next/link";
import { motion } from "motion/react";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export const Header = () => {
  return (
    <motion.header
      initial={{ opacity: 0, y: -16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] as const }}
      className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-8 py-5 bg-[#0e0e0e]/80 backdrop-blur-md border-b border-[#2a2a2a] font-mono"
    >
      {/* Logo / Name */}
      <Link
        href="/"
        className="text-[13px] tracking-[0.15em] uppercase text-[#f0ede6] hover:text-[#c8f04a] transition-colors duration-200"
      >
        Kobe<span className="text-[#c8f04a]">.</span>
      </Link>

      {/* Nav links */}
      <nav className="hidden sm:flex items-center gap-8">
        {navLinks.map((link) => (
          <Link
            key={link.label}
            href={link.href}
            className="text-[12px] tracking-[0.12em] uppercase text-[#6b6760] hover:text-[#f0ede6] transition-colors duration-200"
          >
            {link.label}
          </Link>
        ))}
      </nav>

      {/* CTA */}
      <a
        href="mailto:hello@you.dev"
        className="hidden sm:block text-[12px] tracking-widest uppercase text-[#f0ede6] border-b border-[#f0ede6] pb-0.5 hover:text-[#c8f04a] hover:border-[#c8f04a] transition-colors duration-200"
      >
        Get in touch →
      </a>
    </motion.header>
  );
};
