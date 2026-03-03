"use client";

import { motion } from "motion/react";
import { SkillCard } from "./SkillCard";

const skills = [
  {
    id: 1,
    icon: "/icons/html-icon.svg",
    title: "HTML",
    description: "Semantic, accessible markup for the web.",
  },
  {
    id: 2,
    icon: "/icons/js.png",
    title: "JavaScript",
    description: "Dynamic, event-driven scripting for the browser.",
  },
  {
    id: 3,
    icon: "/icons/typescript.svg",
    title: "TypeScript",
    description: "Typed JavaScript for scalable, maintainable code.",
  },
  {
    id: 4,
    icon: "/icons/lua.svg",
    title: "Lua",
    description: "Lightweight scripting for games and embedded systems.",
  },
  {
    id: 5,
    icon: "/icons/php.svg",
    title: "PHP",
    description: "Server-side scripting powering dynamic backends.",
  },
  {
    id: 6,
    icon: "/icons/laravel-2.svg",
    title: "Laravel",
    description: "Elegant PHP framework for building robust APIs.",
  },
];

const featuredSkill = {
  id: 7,
  icon: "/icons/love.svg",
  title: "Love2D",
  description: "2D game framework built on Lua — my creative playground.",
};

export const Skills = () => {
  return (
    <section className="relative min-h-screen bg-[#0e0e0e] px-6 py-20 overflow-hidden font-mono">

      {/* Grid background */}
      <div
        className="fixed inset-0 opacity-30 pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(#2a2a2a 1px, transparent 1px), linear-gradient(90deg, #2a2a2a 1px, transparent 1px)`,
          backgroundSize: "60px 60px",
        }}
      />

      <div className="relative z-10 max-w-5xl mx-auto">

        {/* Section label */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] as const }}
          className="flex items-center gap-3 mb-6 text-[11px] tracking-[0.2em] uppercase text-[#c8f04a]"
        >
          <span className="block w-8 h-px bg-[#c8f04a]" />
          Skills
        </motion.div>

        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] as const }}
          className="text-[clamp(40px,6vw,72px)] leading-none mb-12"
          style={{ fontFamily: "'DM Serif Display', serif" }}
        >
          My <em className="italic text-[#6b6760]">stack.</em>
        </motion.h1>

        {/* Main 6-card grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-[#2a2a2a]">
          {skills.map((skill, index) => (
            <SkillCard
              key={skill.id}
              index={index}
              icon={skill.icon}
              title={skill.title}
              description={skill.description}
            />
          ))}
        </div>

        {/* Love2D centered below */}
        <div className="bg-[#2a2a2a] mt-px">
          <div className="flex justify-center">
            <div className="w-full lg:w-1/3">
              <SkillCard
                key={featuredSkill.id}
                index={6}
                icon={featuredSkill.icon}
                title={featuredSkill.title}
                description={featuredSkill.description}
              />
            </div>
          </div>
        </div>

      </div>

      <style>{`@import url('https://fonts.googleapis.com/css2?family=DM+Serif+Display:ital@0;1&display=swap');`}</style>
    </section>
  );
};
