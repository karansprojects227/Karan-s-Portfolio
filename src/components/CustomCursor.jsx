"use client";
import { useEffect, useRef } from "react";

export default function CustomCursor() {
  const cursorRef = useRef(null);

  useEffect(() => {
    let mouseX = 0,
      mouseY = 0;
    let cursorX = 0,
      cursorY = 0;
    let lastX = 0,
      lastY = 0;

    let idleTimeout;
    const cursor = cursorRef.current;

    const speedFactor = 0.12; // smoother follow
    const tiltFactor = 0.25;  // rotation intensity

    const handleMove = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;

      // Cursor show on move
      cursor.style.opacity = "1";

      clearTimeout(idleTimeout);
      idleTimeout = setTimeout(() => {
        cursor.style.opacity = "0"; // hide on stop
      }, 300);
    };

    const animate = () => {
      // smooth follow
      cursorX += (mouseX - cursorX) * speedFactor;
      cursorY += (mouseY - cursorY) * speedFactor;

      // calculate speed to tilt cursor
      const dx = cursorX - lastX;
      const dy = cursorY - lastY;
      lastX = cursorX;
      lastY = cursorY;

      const angle = Math.atan2(dy, dx) * (180 / Math.PI);

      cursor.style.transform = `
        translate(${cursorX}px, ${cursorY}px)
        rotate(${angle * tiltFactor}deg)
      `;

      requestAnimationFrame(animate);
    };

    window.addEventListener("mousemove", handleMove);
    animate();

    return () => window.removeEventListener("mousemove", handleMove);
  }, []);

  return (
    <div
      ref={cursorRef}
      className={`
        fixed w-8 h-8 rounded-xl pointer-events-none 
        -translate-x-1/2 -translate-y-1/2 
        bg-white/15 backdrop-blur-[8px]
        shadow-[0_0_20px_rgba(0,255,255,0.4),_0_0_35px_rgba(120,0,255,0.4)]
        transition-opacity duration-300
        z-[9999]
        opacity-0
      `}
    ></div>
  );
}
