"use client";

import { useRouter } from "next/navigation"; // note: next/navigation for App Router
import React from "react";
import { Dancing_Script , Cinzel , Permanent_Marker , Playwrite_CZ } from 'next/font/google';

// fonts for different text
const dancing = Dancing_Script({
  weight: ["400", "500", "600"],
  subsets: ["latin"],
});

const cinzel = Cinzel({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
});

const permanent = Permanent_Marker({
  weight: "400",
  subsets: ["latin"],
});

export default function Home() {

  // contants variables
  const router = useRouter();

  const goToProjects = () => {
    router.push("/projects");
  };

  const goToContact = () => {
    router.push("/contact");
  };

  const milestones = [
    { 
      year: "April 2021", 
      title: "Completed 10th Grade", 
      description: "Passed 10th from R.J.K High School, Begusarai, Bihar." 
    },
    { 
      year: "March 2025", 
      title: "Completed 12th Grade", 
      description: "Passed 12th in Commerce from N.N. Sinha High School in Mansurchak, Begusarai." 
    },
    { 
      year: "Sep 2025", 
      title: "Web Dev Course", 
      description: "Completed Web Development course (22 Sep 2025) with A grade, gaining full-stack skills." 
    },
    { 
      year: "July 2025 - Dec 2025", 
      title: "Internship at CFO CRAFT", 
      description: "6 months hands-on experience with industry-level architecture, finance-related web applications, and innovative solutions." 
    },
  ];

  const differences = [
    { 
      icon: "★", 
      title: "Practical Full-Stack Expertise", 
      desc: "Hands-on experience building 3D & animated websites with React, Node.js, Tailwind, and advanced web technologies." 
    },
    { 
      icon: "★", 
      title: "Real-World Problem Solver", 
      desc: "Focused on identifying real-world tech problems and creating efficient, creative web & app solutions." 
    },
    { 
      icon: "★", 
      title: "Futuristic UI/UX", 
      desc: "Designing ultra-modern, interactive interfaces with 4K-ready and immersive experiences." 
    },
  ];

  const projects = [
    {
      img: "/cfocraft.png",
      alt: "CFO CRAFT",
      title: "CFO CRAFT Internship Project",
      desc: "Worked on industry-level web applications, understanding architecture, backend integrations, and finance-focused solutions."
    },
    {
      img: "/sales-dashboard.png",
      alt: "Sales Dashboard",
      title: "CFO CRAFT Sales Dashboard",
      desc: "Developed a real-time sales analytics dashboard with interactive charts, KPI tracking, and data-driven insights for business decisions."
    },
    {
      img: "/karan-portfolio.png",
      alt: "Portfolio",
      title: "Personal Portfolio Project",
      desc: "Built a futuristic 3D & animated portfolio website showcasing personal projects, innovative UI/UX, and 4K-ready design elements."
    },
  ];

  return (
    <main className="relative bg-gray-900 min-h-screen text-white font-sans">
      
      {/* hero main section */}
      <section
        id="hero"
        className="min-h-screen flex flex-col justify-center items-center text-center px-4 py-12 md:py-5 relative overflow-hidden bg-gradient-to-b from-black via-[#050505] to-black"
      >
        {/* Micro Floating Atoms */}
        {[...Array(11)].map((_, i) => (
          <div
            key={i}
            className="absolute w-[6px] h-[6px] sm:w-[8px] sm:h-[8px] bg-white/40 rounded-full blur-[1.5px]"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animation: `atomFloat ${3 + Math.random() * 4}s ease-in-out infinite`,
              animationDelay: `${Math.random() * 4}s`,
            }}
          ></div>
        ))}

        {/* Profile Hologram */}
        <div className="relative w-36 h-36 sm:w-56 sm:h-56 md:w-72 md:h-72 group mb-4 perspective-[1200px]">
          {/* Outer Liquid Holo Edge */}
          <div className="absolute inset-0 rounded-[36%_64%_46%_54%/58%_42%_58%_42%]
                          bg-gradient-to-br from-[#00f0ff]/25 via-[#7b5bff]/20 to-[#00eaff]/15
                          shadow-[0_0_35px_rgba(0,255,255,0.35)]
                          transition-all duration-700
                          group-hover:shadow-[0_0_70px_rgba(0,255,255,0.7)]
                          overflow-hidden">
            {/* Morphing hologram gradient */}
            <div className="absolute inset-0 animate-[holoMorph_8s_linear_infinite] bg-[conic-gradient(from_0deg,_#00eaff,_#7b5bff,_#00eaff)] opacity-25 blur-[20px] rounded-full"></div>
          </div>
      
          {/* Inner Image Mask */}
          <div className="absolute inset-[5px] sm:inset-[6px] rounded-[38%_62%_48%_52%/55%_45%_60%_40%]
                          bg-black/20 backdrop-blur-xl shadow-inner shadow-cyan-400/25
                          group-hover:shadow-inner group-hover:shadow-cyan-300/50
                          transition-all duration-700">
            <img
              src="/karan-portfolio.png"
              alt=""
              className="w-full h-full object-cover rounded-[38%_62%_48%_52%/55%_45%_60%_40%]
                         transition-all duration-[900ms] group-hover:scale-[1.1] group-hover:rotate-[1.5deg]"
            />
          </div>
      
          {/* Micro Floating Plasma Shards on Hover */}
          <div className="absolute inset-0 pointer-events-none">
            {[...Array(8)].map((_, i) => (
              <div key={i} className="absolute w-1 h-1 sm:w-1.5 sm:h-1.5 bg-cyan-400 rounded-full opacity-0 group-hover:opacity-80
                                      animate-[shardFloat_4s_linear_infinite]"
                   style={{
                     top: `${Math.random()*100}%`,
                     left: `${Math.random()*100}%`,
                     animationDelay: `${Math.random()*4}s`
                   }}></div>
            ))}
          </div>
          
          {/* Edge Neon Ring */}
          <div className="absolute inset-0 rounded-[38%_62%_48%_52%/55%_45%_60%_40%]
                          ring-0 ring-cyan-400/0 group-hover:ring-[5px] sm:group-hover:ring-[6px] group-hover:ring-cyan-400/50
                          transition-all duration-700"></div>
        </div>
          
        {/* Name */}
        <h1
          className="text-[10vw] sm:text-[7vw] md:text-[6vw] font-black tracking-tight leading-none select-none"
          style={{
            fontFamily: "Poppins, Inter, sans-serif",
            color: "transparent",
            WebkitBackgroundClip: "text",
            backgroundImage:
              "linear-gradient(135deg, rgba(255,255,255,0.9) 0%, rgba(180,220,255,0.7) 40%, rgba(140,140,140,0.4) 70%, rgba(255,255,255,0.9) 100%)",
            WebkitTextStroke: "1.8px rgba(255,255,255,0.2)",
            textShadow: `
              0 0 12px rgba(200,220,255,0.18),
              0 0 25px rgba(170,200,255,0.12),
              inset 0 0 18px rgba(255,255,255,0.25)
            `,
            filter: "drop-shadow(0 0 20px rgba(255,255,255,0.08)) drop-shadow(0 0 6px rgba(120,120,255,0.15))",
            backdropFilter: "blur(2px)",
            animation: "glassPulse 5s ease-in-out infinite",
            lineHeight: "0.9",
          }}
        >
          KARAN KUMAR
        </h1>
        
        {/* Subtitle */}
        <p
          className="mt-2 text-[5vw] sm:text-[3vw] md:text-[2.1vw] font-bold select-none uppercase"
          style={{
            fontFamily: "Inter, Poppins, sans-serif",
            backgroundImage: "linear-gradient(90deg, #f5f5f5 0%, #c7c7c7 45%, #dfdfdf 80%)",
            color: "transparent",
            WebkitBackgroundClip: "text",
            WebkitTextStroke: "1.5px rgba(255,255,255,0.22)",
            textShadow: "0 0 18px rgba(255,255,255,0.25)",
            letterSpacing: "1px",
            lineHeight: "1",
          }}
        >
          Full-Stack Developer & Digital Vision Architect
        </p>
        
        {/* Description */}
        <p
          className={`${cinzel.className} mt-2 max-w-xl sm:max-w-2xl text-sm sm:text-lg md:text-xl text-gray-400 leading-6`}
        >
          Designing ultra-modern interfaces powered by clean engineering, precision aesthetics, and immersive digital craft.
        </p>
        
        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 mt-6">
          <button
            onClick={goToProjects}
            className="px-10 sm:px-12 py-3 sm:py-4 rounded-xl text-black font-bold tracking-wide shadow-xl transition-all duration-300 hover:scale-105"
            style={{ background: "linear-gradient(90deg, #ffffff 0%, #ececec 50%, #ffffff 100%)", fontFamily: "Inter, Poppins, sans-serif" }}
          >
            View My Work
          </button>
          <button
            onClick={goToContact}
            className="px-10 sm:px-12 py-3 sm:py-4 rounded-xl border border-gray-500 text-gray-200 font-bold tracking-wide transition-all duration-300 hover:scale-105"
            style={{ fontFamily: "Inter, sans-serif" }}
          >
            Contact Me
          </button>
        </div>
        
        {/* Keyframes */}
        <style>{`
          @keyframes atomFloat {
            0% { transform: translateY(0px); opacity: 0.3; }
            50% { transform: translateY(-15px); opacity: 0.6; }
            100% { transform: translateY(0px); opacity: 0.3; }
          }
        
          @keyframes glassPulse {
            0% {
              text-shadow:
                0 0 12px rgba(200,220,255,0.15),
                0 0 25px rgba(170,200,255,0.1),
                inset 0 0 15px rgba(255,255,255,0.1);
            }
            100% {
              text-shadow:
                0 0 18px rgba(200,220,255,0.22),
                0 0 32px rgba(170,200,255,0.18),
                inset 0 0 22px rgba(255,255,255,0.22);
            }
          }
        
          @keyframes holoMorph {
            0% { transform: rotate(0deg); }
            50% { transform: rotate(180deg) scale(1.05); }
            100% { transform: rotate(360deg); }
          }
        
          @keyframes shardFloat {
            0% { transform: translateY(0px) scale(0.8); opacity: 0.2; }
            50% { transform: translateY(-15px) scale(1.2); opacity: 1; }
            100% { transform: translateY(0px) scale(0.8); opacity: 0.2; }
          }
        `}</style>
      </section>

      {/* past and current timeline */}
      <section
        id="timeline"
        className="min-h-screen flex flex-col justify-start items-center text-center px-4 py-4 relative overflow-hidden bg-gradient-to-b from-[#050505] via-[#0a0a0a] to-black"
      >
        {/* Micro Floating Atoms */}
        {[...Array(11)].map((_, i) => (
          <div
            key={i}
            className="absolute w-[8px] h-[8px] bg-white/40 rounded-full blur-[1.5px]"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animation: `atomFloat ${3 + Math.random() * 4}s ease-in-out infinite`,
              animationDelay: `${Math.random() * 4}s`,
            }}
          ></div>
        ))}
      
        {/* Title */}
        <h2
          className="text-[6vw] sm:text-4xl md:text-[4vw] font-black tracking-tight leading-tight select-none"
          style={{
            fontFamily: "Poppins, Inter, sans-serif",
            color: "transparent",
            WebkitBackgroundClip: "text",
            backgroundImage:
              "linear-gradient(135deg, rgba(255,255,255,0.9) 0%, rgba(180,220,255,0.7) 40%, rgba(140,140,140,0.4) 70%, rgba(255,255,255,0.9) 100%)",
            WebkitTextStroke: "1.5px rgba(255,255,255,0.18)",
            textShadow: `
              0 0 12px rgba(200,220,255,0.18),
              0 0 28px rgba(170,200,255,0.12),
              inset 0 0 20px rgba(255,255,255,0.22)
            `,
            animation: "glassPulse 5s ease-in-out infinite",
          }}
        >
          My Past and Now...
        </h2>
        
        {/* Timeline Cards */}
        <div className="flex flex-col md:flex-row justify-center items-center gap-8 mt-10 flex-wrap w-full px-4">
          {milestones.map((milestone, i) => (
            <div
              key={i}
              className="flex flex-col bg-gray-900/40 backdrop-blur-md rounded-3xl p-6 w-full max-w-[300px] border border-cyan-500/20 shadow-lg hover:scale-105 transition-all duration-500"
            >
              <span className="text-lg font-bold mb-1 text-white">{milestone.year}</span>
              <h3 className="text-md text-cyan-400 font-semibold">{milestone.title}</h3>
              <p className="text-gray-300 mt-2 text-sm leading-relaxed">{milestone.description}</p>
            </div>
          ))}
        </div>
        
        <style>{`
          @keyframes atomFloat {
            0% { transform: translateY(0px); opacity: 0.3; }
            50% { transform: translateY(-20px); opacity: 0.6; }
            100% { transform: translateY(0px); opacity: 0.3; }
          }
        
          @keyframes glassPulse {
            0% {
              text-shadow:
                0 0 12px rgba(200,220,255,0.15),
                0 0 20px rgba(170,200,255,0.1),
                inset 0 0 15px rgba(255,255,255,0.1);
            }
            100% {
              text-shadow:
                0 0 18px rgba(200,220,255,0.22),
                0 0 32px rgba(170,200,255,0.18),
                inset 0 0 22px rgba(255,255,255,0.22);
            }
          }
        `}</style>
      </section>

      {/* what make me different */}
      <section
        id="different"
        className="min-h-screen flex flex-col justify-center items-center text-center px-4 py-12 md:py-20 relative overflow-hidden bg-gradient-to-b from-black via-[#050505] to-black"
      >

        {/* Micro Floating Atoms */}
        {[...Array(11)].map((_, i) => (
          <div
            key={i}
            className="absolute w-[6px] h-[6px] sm:w-[8px] sm:h-[8px] bg-white/40 rounded-full blur-[1.5px]"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animation: `atomFloat ${3 + Math.random() * 4}s ease-in-out infinite`,
              animationDelay: `${Math.random() * 4}s`,
            }}
          ></div>
        ))}

        {/* Section Title */}
        <h2
          className="text-[6vw] sm:text-[5vw] md:text-[4.5vw] font-black tracking-tight leading-snug select-none"
          style={{
            fontFamily: "Poppins, Inter, sans-serif",
            color: "transparent",
            WebkitBackgroundClip: "text",
            backgroundImage:
              "linear-gradient(135deg, rgba(255,255,255,0.9) 0%, rgba(180,220,255,0.7) 40%, rgba(140,140,140,0.4) 70%, rgba(255,255,255,0.9) 100%)",
            WebkitTextStroke: "1.8px rgba(255,255,255,0.2)",
            textShadow: `
              0 0 12px rgba(200,220,255,0.18),
              0 0 25px rgba(170,200,255,0.12),
              inset 0 0 18px rgba(255,255,255,0.25)
            `,
            filter: "drop-shadow(0 0 20px rgba(255,255,255,0.08)) drop-shadow(0 0 6px rgba(120,120,255,0.15))",
            backdropFilter: "blur(2px)",
            animation: "glassPulse 5s ease-in-out infinite",
            lineHeight: "1.2",
          }}
        >
          What Makes Me Different?
        </h2>
        
        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 mt-8 md:mt-10 w-full max-w-6xl">
          {differences.map((skill, i) => (
            <div
              key={i}
              className="flex flex-col items-center bg-gray-900/30 backdrop-blur-md rounded-3xl p-4 sm:p-6 border border-purple-500/20 shadow-lg hover:scale-105 transition-all duration-500"
            >
              <div className="w-14 h-14 sm:w-16 sm:h-16 mb-3 sm:mb-4 bg-cyan-400/30 rounded-full flex items-center justify-center shadow-lg">
                <span className="text-xl sm:text-2xl font-bold text-white">{skill.icon}</span>
              </div>
              <h3 className={`${cinzel.className} text-base sm:text-lg text-white mb-1 sm:mb-2`}>{skill.title}</h3>
              <p className="text-gray-300 text-xs sm:text-sm">{skill.desc}</p>
            </div>
          ))}
        </div>
        
        {/* Keyframes */}
        <style>{`
          @keyframes atomFloat {
            0% { transform: translateY(0px); opacity: 0.3; }
            50% { transform: translateY(-15px); opacity: 0.6; }
            100% { transform: translateY(0px); opacity: 0.3; }
          }
        
          @keyframes glassPulse {
            0% {
              text-shadow:
                0 0 12px rgba(200,220,255,0.15),
                0 0 25px rgba(170,200,255,0.1),
                inset 0 0 15px rgba(255,255,255,0.1);
            }
            100% {
              text-shadow:
                0 0 18px rgba(200,220,255,0.22),
                0 0 32px rgba(170,200,255,0.18),
                inset 0 0 22px rgba(255,255,255,0.22);
            }
          }
        `}</style>
      </section>

      {/* projects */}
      <section
        id="projects-preview"
        className="min-h-screen flex flex-col justify-center items-center text-center px-4 py-12 md:py-20 relative overflow-hidden bg-gradient-to-b from-black via-[#050505] to-black"
      >

        {/* Micro Floating Atoms */}
        {[...Array(11)].map((_, i) => (
          <div
            key={i}
            className="absolute w-[6px] h-[6px] sm:w-[8px] sm:h-[8px] bg-white/40 rounded-full blur-[1.5px]"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animation: `atomFloat ${3 + Math.random() * 4}s ease-in-out infinite`,
              animationDelay: `${Math.random() * 4}s`,
            }}
          ></div>
        ))}

        {/* Cinematic Edge Gradient */}
        <div className="absolute inset-0 bg-[linear-gradient(90deg,transparent,rgba(0,200,255,0.04),transparent)]"></div>
      
        {/* ================= TITLE ================= */}
        <h2
          className="text-[7vw] sm:text-[6vw] md:text-[4.5vw] font-black tracking-tight leading-snug select-none"
          style={{
            fontFamily: "Poppins, Inter, sans-serif",
            color: "transparent",
            WebkitBackgroundClip: "text",
            backgroundImage:
              "linear-gradient(135deg, rgba(255,255,255,0.9) 0%, rgba(180,220,255,0.7) 40%, rgba(140,140,140,0.4) 70%, rgba(255,255,255,0.9) 100%)",
            WebkitTextStroke: "1.8px rgba(255,255,255,0.2)",
            textShadow: `
              0 0 12px rgba(200,220,255,0.18),
              0 0 25px rgba(170,200,255,0.12),
              inset 0 0 18px rgba(255,255,255,0.25)
            `,
            filter: "drop-shadow(0 0 20px rgba(255,255,255,0.08)) drop-shadow(0 0 6px rgba(120,120,255,0.15))",
            backdropFilter: "blur(2px)",
            animation: "glassPulse 5s ease-in-out infinite",
            lineHeight: "1.2",
          }}
        >
          Featured Projects
        </h2>
        
        {/* ================= PROJECT CARDS ================= */}
        <div className="flex flex-col sm:flex-row sm:flex-wrap justify-center gap-6 sm:gap-8 mt-10 relative z-20">
          {projects.map((project, i) => (
            <div
              key={i}
              className="
                relative flex flex-col rounded-3xl p-4 sm:p-6 w-full sm:w-[45%] md:w-80
                bg-gray-950/60 backdrop-blur-xl border border-white/10
                shadow-[0_0_25px_rgba(0,0,0,0.5)]
                hover:shadow-[0_0_50px_rgba(0,200,255,0.25)]
                hover:border-cyan-300/40
                transition-all duration-500 hover:-translate-y-1 hover:scale-[1.02]
              "
            >
              {/* Subtle inner shine */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent rounded-3xl pointer-events-none"></div>
          
              <img
                src={project.img}
                alt={project.alt}
                className="rounded-2xl mb-4 shadow-[0_0_20px_rgba(255,255,255,0.08)]"
              />

              <h3 className={`${cinzel.className} text-base sm:text-lg text-cyan-300`}>{project.title}</h3>
          
              <p className="text-gray-300 mt-1 sm:mt-2 text-xs sm:text-sm">{project.desc}</p>
            </div>
          ))}
        </div>
        
        {/* Keyframes */}
        <style>{`
          @keyframes atomFloat {
            0% { transform: translateY(0px); opacity: 0.3; }
            50% { transform: translateY(-15px); opacity: 0.6; }
            100% { transform: translateY(0px); opacity: 0.3; }
          }
        
          @keyframes glassPulse {
            0% {
              text-shadow:
                0 0 12px rgba(200,220,255,0.15),
                0 0 25px rgba(170,200,255,0.1),
                inset 0 0 15px rgba(255,255,255,0.1);
            }
            100% {
              text-shadow:
                0 0 18px rgba(200,220,255,0.22),
                0 0 32px rgba(170,200,255,0.18),
                inset 0 0 22px rgba(255,255,255,0.22);
            }
          }
        `}</style>

      </section>

      {/* skills in shorts */}
      <section
        id="skills"
        className="min-h-screen flex flex-col justify-center items-center px-4 py-12 relative overflow-hidden bg-gradient-to-b from-black via-[#0a0a0a] to-black"
      >
        {/* Floating Micro Particles */}
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-[6px] h-[6px] sm:w-[8px] sm:h-[8px] bg-white/40 rounded-full blur-[1.5px]"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animation: `atomFloat ${3 + Math.random() * 4}s ease-in-out infinite`,
              animationDelay: `${Math.random() * 4}s`,
            }}
          ></div>
        ))}
      
        {/* Heading — Titanium Frosted Text */}
        <h2
          className="text-[12vw] sm:text-[8vw] md:text-[6vw] font-extrabold mb-8 sm:mb-10 select-none tracking-tight text-center"
          style={{
            fontFamily: "Poppins, Inter, sans-serif",
            color: "transparent",
            WebkitBackgroundClip: "text",
            backgroundImage:
              "linear-gradient(135deg, rgba(255,255,255,0.9), rgba(190,220,255,0.55), rgba(120,120,120,0.45), rgba(255,255,255,0.9))",
            WebkitTextStroke: "1.6px rgba(255,255,255,0.18)",
            textShadow: `
              0 0 15px rgba(200,220,255,0.18),
              0 0 28px rgba(170,200,255,0.12),
              inset 0 0 20px rgba(255,255,255,0.2)
            `,
            animation: "glassPulse 4s ease-in-out infinite",
          }}
        >
          SKILLS
        </h2>
        
        {/* Subtext */}
        <p
          className={`${cinzel.className} text-gray-300 text-base sm:text-lg md:text-xl mb-8 sm:mb-12 text-center max-w-xl sm:max-w-2xl leading-relaxed`}
          style={{ textShadow: "0 0 8px rgba(255,255,255,0.12)" }}
        >
          A powerful toolkit crafted to engineer modern, high-performance,
          futuristic digital experiences.
        </p>
        
        {/* Skill Chips — Realistic Frosted Glass Bubbles */}
        <div className="flex flex-wrap justify-center gap-4 sm:gap-6 max-w-full md:max-w-4xl relative z-10">
          {[
            { label: "#Functional Dev", href: "/skills/#functional-dev" },
            { label: "#Creative Dev", href: "/skills/#creative-dev" },
            { label: "#Full Stack Dev", href: "/skills/#full-stack-dev" },
            { label: "#MERN Dev", href: "/skills/#mern-stack-dev" },
          ].map((skill) => (
            <a
              key={skill.label}
              href={skill.href}
              className="px-6 sm:px-8 py-3 sm:py-4 rounded-full relative group text-sm sm:text-lg font-medium tracking-wide select-none cursor-pointer hover:scale-105 transition-transform duration-500"
              style={{
                background: "rgba(255,255,255,0.08)",
                border: "1px solid rgba(255,255,255,0.2)",
                backdropFilter: "blur(12px)",
                boxShadow: "inset 0 0 8px rgba(255,255,255,0.15), 0 3px 10px rgba(255,255,255,0.05)",
              }}
            >
              <span
                className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-500"
                style={{
                  background:
                    "radial-gradient(circle at 30% 30%, rgba(255,255,255,0.25), transparent 70%)",
                  filter: "blur(10px)",
                }}
              ></span>
      
              <span
                className={`${cinzel.className} relative`}
                style={{
                  backgroundImage: "linear-gradient(90deg, #ffffff, #e0e0e0, #cfcfcf)",
                  WebkitBackgroundClip: "text",
                  color: "transparent",
                  WebkitTextStroke: "0.5px rgba(255,255,255,0.3)",
                  textShadow: "0 0 2px rgba(255,255,255,0.2)",
                }}
              >
                {skill.label}
              </span>
            </a>
          ))}
        </div>
        
        {/* Keyframes */}
        <style>{`
          @keyframes atomFloat {
            0% { transform: translateY(0px); opacity: 0.3; }
            50% { transform: translateY(-15px); opacity: 0.6; }
            100% { transform: translateY(0px); opacity: 0.3; }
          }
        
          @keyframes glassPulse {
            0% {
              text-shadow:
                0 0 12px rgba(200,220,255,0.2),
                0 0 24px rgba(170,200,255,0.12),
                inset 0 0 15px rgba(255,255,255,0.1);
            }
            100% {
              text-shadow:
                0 0 20px rgba(200,220,255,0.25),
                0 0 32px rgba(170,200,255,0.18),
                inset 0 0 20px rgba(255,255,255,0.25);
            }
          }
        `}</style>
      </section>

    </main>
  );
}
