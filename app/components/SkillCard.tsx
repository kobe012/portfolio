"use client";

import { motion } from "motion/react";
import Image from "next/image";

interface SkillCardProps {
  icon: string;
  title: string;
  description: string;
  index?: number;
}

export const SkillCard = ({ icon, title, description, index = 0 }: SkillCardProps) => {
  return (
    <motion.div
      className="group relative flex flex-col items-center justify-center gap-4 p-10 bg-[#161616] border border-[#2a2a2a] rounded-none cursor-pointer overflow-hidden w-full"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] as const }}
      viewport={{ once: true, amount: 0.2 }}
      whileHover={{ borderColor: "#c8f04a", transition: { duration: 0.2, delay: 0 } }}
    >
      {/* Accent glow on hover */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
        style={{ background: "radial-gradient(ellipse 80% 60% at 50% 100%, rgba(200,240,74,0.06), transparent)" }}
      />

      <Image
        src={icon}
        alt={title}
        width={48}
        height={48}
        className="opacity-80 group-hover:opacity-100 transition-opacity duration-300"
      />
      <h2 className="text-[15px] font-medium tracking-wide text-[#f0ede6] font-mono">{title}</h2>
      <p className="text-[13px] text-[#6b6760] text-center font-mono leading-relaxed">{description}</p>
    </motion.div>
  );
};
