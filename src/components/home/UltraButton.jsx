"use client";
import { useRef } from "react";

export default function UltraButton({ label, href, variant }) {
  const ref = useRef(null);

  const burst = () => {
    const box = ref.current;
    if (!box) return;

    const total = 18;

    for (let i = 0; i < total; i++) {
      const p = document.createElement("span");
      const size = Math.random() * 3 + 2;

      // ============================
      // 🎨 DIFFERENT STYLES PER BUTTON
      // ============================
      let particleClass = "";
      let particleColor = "";

      if (variant === "linkedin") {
        particleClass = "rounded-full blur-[1.5px]";
        particleColor = "bg-cyan-300";
      }
      if (variant === "github") {
        particleClass = "rounded-full blur-[2px]";
        particleColor = "bg-purple-500";
      }
      if (variant === "cv") {
        particleClass = "rounded-full blur-[1.5px]";
        particleColor = "bg-cyan-200";
      }

      p.className = `absolute ${particleClass} ${particleColor}`;
      p.style.width = `${size}px`;
      p.style.height = `${size}px`;
      p.style.left = "50%";
      p.style.top = "50%";
      p.style.transform = "translate(-50%, -50%)";
      box.appendChild(p);

      // Random direction
      const ang = Math.random() * Math.PI * 2;
      const dist = 30 + Math.random() * 40;
      const dx = Math.cos(ang) * dist;
      const dy = Math.sin(ang) * dist;
      const dz = (Math.random() - 0.5) * 60;

      p.animate(
        [
          { transform: `translate3d(-50%, -50%, 0) scale(1)`, opacity: 1 },
          { transform: `translate3d(${dx}px, ${dy}px, ${dz}px) scale(0.2)`, opacity: 0 },
        ],
        { duration: 750 + Math.random() * 300, easing: "ease-out" }
      );

      setTimeout(() => p.remove(), 1100);
    }
  };

  // ============================
  // 🎨 BUTTON THEMES
  // ============================

  const themes = {
    linkedin: `
      bg-gradient-to-r from-[#0A66C2] to-[#1A8FE3]
      text-white
      shadow-[0_0_18px_-4px_rgba(0,150,255,0.4)]
      hover:shadow-[0_0_25px_-3px_rgba(0,180,255,0.6)]
    `,
    github: `
      bg-gradient-to-r from-[#111] to-[#222]
      text-white
      shadow-[0_0_15px_-4px_rgba(150,0,255,0.25)]
      hover:shadow-[0_0_25px_-3px_rgba(170,0,255,0.45)]
    `,
    cv: `
      bg-gradient-to-r from-purple-500 to-cyan-400
      text-black
      shadow-[0_0_20px_-4px_rgba(0,255,255,0.35)]
      hover:shadow-[0_0_28px_-3px_rgba(0,255,255,0.55)]
    `,
  };

  return (
    <a
      href={href}
      onMouseEnter={burst}
      className={`
        relative px-7 py-3 rounded-2xl font-semibold
        transition-all duration-500
        hover:-translate-y-1 hover:scale-[1.10]
        overflow-hidden
        perspective-[900px]
        ${themes[variant]}
      `}
    >
      <div ref={ref} className="absolute inset-0 overflow-visible pointer-events-none" />
      <span className="relative z-20">{label}</span>
    </a>
  );
}
