"use client";

import Image from "next/image";
import { motion } from "motion/react";

const fadeUp = (delay: number) => ({
  initial: { opacity: 0, y: 16 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] as const },
});

const stack = ["Laravel", "Next.js", "Vue", "TypeScript", "Lua"];

export const Hero = () => {
  return (
    <section className="relative min-h-screen bg-[#0e0e0e] text-[#f0ede6] flex items-center justify-center px-6 py-20 overflow-hidden font-mono">

      {/* Grid background */}
      <div
        className="fixed inset-0 opacity-30 pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(#2a2a2a 1px, transparent 1px), linear-gradient(90deg, #2a2a2a 1px, transparent 1px)`,
          backgroundSize: "60px 60px",
        }}
      />

      {/* Glow blobs */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-[60%] h-[50%] rounded-full bg-[#c8f04a]/3 blur-3xl" />
        <div className="absolute bottom-0 left-0 w-[40%] h-[40%] rounded-full bg-[#f04a7a]/3 blur-3xl" />
      </div>

      <div className="relative z-10 w-full max-w-5xl flex flex-col-reverse md:flex-row items-center justify-between gap-16">

        {/* Left — Text */}
        <div className="flex-1">

          {/* Label */}
          <motion.div
            {...fadeUp(0)}
            className="flex items-center gap-3 mb-6 text-[11px] tracking-[0.2em] uppercase text-[#c8f04a]"
          >
            <span className="block w-8 h-px bg-[#c8f04a]" />
            Full-stack Developer
          </motion.div>

          {/* Name */}
          <motion.h1
            {...fadeUp(0.12)}
            className="leading-none mb-4"
            style={{ fontFamily: "'DM Serif Display', serif", fontSize: "clamp(42px,7vw,80px)" }}
          >
            Vince Kobe
            <br />
            <em className="text-[#6b6760] italic">San Juan.</em>
          </motion.h1>

          {/* Divider */}
          <motion.div
            initial={{ opacity: 0, scaleX: 0.4 }}
            animate={{ opacity: 1, scaleX: 1 }}
            transition={{ duration: 0.7, delay: 0.24, ease: [0.22, 1, 0.36, 1] as const }}
            style={{ transformOrigin: "left" }}
            className="w-full h-px bg-[#2a2a2a] my-8"
          />

          {/* Tagline */}
          <motion.p
            {...fadeUp(0.36)}
            className="text-[15px] leading-[1.8] text-[#b8b4ad] max-w-md mb-8"
          >
            I build clean, functional web experiences and ship
            products people enjoy using. Let&apos;s work together.
          </motion.p>

          {/* Stack pills */}
          <motion.div
            {...fadeUp(0.44)}
            className="flex flex-wrap gap-2 mb-10"
          >
            {stack.map((s) => (
              <span
                key={s}
                className="text-[11px] tracking-[0.08em] px-3 py-1 border border-[#2a2a2a] bg-[#161616] text-[#6b6760] uppercase"
              >
                {s}
              </span>
            ))}
          </motion.div>

          {/* CTAs */}
          <motion.div {...fadeUp(0.52)} className="flex items-center gap-6">
            <a
              href="/resume.pdf"
              className="text-[12px] tracking-widest uppercase bg-[#c8f04a] text-[#0e0e0e] font-medium px-6 py-3 transition-opacity hover:opacity-80"
            >
              Resume
            </a>
            <a
              href="mailto:hello@you.dev"
              className="text-[12px] tracking-widest uppercase text-[#f0ede6] border-b border-[#f0ede6] pb-0.5 transition-colors hover:text-[#c8f04a] hover:border-[#c8f04a]"
            >
              Email me →
            </a>
          </motion.div>

        </div>

        {/* Right — Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] as const }}
          className="relative shrink-0"
        >
          {/* Accent rings */}
          <div className="absolute inset-0 rounded-full border border-[#c8f04a]/20 scale-110" />
          <div className="absolute inset-0 rounded-full border border-[#c8f04a]/10 scale-125" />

          <Image
            src="/profile.jpg"
            alt="Vince Kobe San Juan"
            width={340}
            height={340}
            className="rounded-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
            style={{ boxShadow: "0 0 60px rgba(200,240,74,0.06)" }}
          />
        </motion.div>

      </div>

      {/* DM Serif Display font */}
      <style>{`@import url('https://fonts.googleapis.com/css2?family=DM+Serif+Display:ital@0;1&display=swap');`}</style>
    </section>
  );
};

export default Hero;
