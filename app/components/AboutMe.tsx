"use client";

import { motion } from "motion/react";

const fadeUp = (delay: number) => ({
  initial: { opacity: 0, y: 16 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] as const },
});

export const AboutMe = () => {
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

      <div className="relative z-10 w-full max-w-3xl">

        {/* Label */}
        <motion.div
          {...fadeUp(0)}
          className="flex items-center gap-3 mb-6 text-[11px] tracking-[0.2em] uppercase text-[#c8f04a]"
        >
          <span className="block w-8 h-px bg-[#c8f04a]" />
          About me
        </motion.div>

        {/* Headline */}
        <motion.h1
          {...fadeUp(0.12)}
          className="text-[clamp(48px,8vw,88px)] leading-none mb-2"
          style={{ fontFamily: "'DM Serif Display', serif" }}
        >
          Full-stack
          <br />
          <em className="text-[#6b6760] italic">developer.</em>
        </motion.h1>

        {/* Divider */}
        <motion.div
          initial={{ opacity: 0, scaleX: 0.4 }}
          whileInView={{ opacity: 1, scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.24, ease: [0.22, 1, 0.36, 1] as const }}
          style={{ transformOrigin: "left" }}
          className="w-full h-px bg-[#2a2a2a] my-10"
        />

        {/* Bio */}
        <motion.p
          {...fadeUp(0.36)}
          className="text-[15px] leading-[1.8] text-[#b8b4ad] max-w-xl"
        >
          I build things across the full stack — backends with{" "}
          <span className="text-[#c8f04a] font-medium">Laravel</span> &{" "}
          <span className="text-[#c8f04a] font-medium">PHP</span>, and frontends with{" "}
          <span className="text-[#c8f04a] font-medium">Vue</span>,{" "}
          <span className="text-[#c8f04a] font-medium">Next.js</span>,{" "}
          <span className="text-[#c8f04a] font-medium">TypeScript</span> and{" "}
          <span className="text-[#c8f04a] font-medium">JavaScript</span>.{" "}
          I care about writing clean, maintainable code that solves real problems.
          <br /><br />
          When I&apos;m not shipping web apps, I&apos;m making games with{" "}
          <span className="text-[#c8f04a] font-medium">Lua</span> &{" "}
          <span className="text-[#c8f04a] font-medium">Love2D</span> — it&apos;s
          what keeps my love for coding alive and pushes me to think differently
          about how people interact with software.
        </motion.p>

        {/* Bottom row */}
        <motion.div
          {...fadeUp(0.48)}
          className="mt-14 flex items-center justify-between flex-wrap gap-5"
        >
          <div className="flex items-center gap-2.5 text-[12px] tracking-wide text-[#6b6760]">
            <span className="w-1.75 h-1.75 rounded-full bg-[#c8f04a] animate-pulse" />
            Available for new projects
          </div>
          <a
            href="mailto:vksanjuannn@gmail.com"
            className="text-[12px] tracking-widest uppercase text-[#f0ede6] border-b border-[#f0ede6] pb-0.5 transition-colors hover:text-[#c8f04a] hover:border-[#c8f04a]"
          >
            Get in touch →
          </a>
        </motion.div>

      </div>

      {/* DM Serif Display font */}
      <style>{`@import url('https://fonts.googleapis.com/css2?family=DM+Serif+Display:ital@0;1&display=swap');`}</style>
    </section>
  );
};

export default AboutMe;
