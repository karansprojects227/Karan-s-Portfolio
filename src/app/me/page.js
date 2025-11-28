import React from 'react'
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

export default function About() {

  const origins = [
    {
      year: "2021",
      title: "10th Board Completion",
      desc: "Completed 10th from R.J.k High School, Begusarai, Bihar with strong interest in technology and problem solving.",
    },
    {
      year: "2023",
      title: "Early Tech Exploration",
      desc: "Started exploring HTML, CSS, JavaScript, and real-world tech problems with creativity and innovation.",
    },
    {
      year: "2025",
      title: "12th Board Completion",
      desc: "Completed 12th (Commerce) from N.N.S Sigha High School, Mansurchak, Begusarai, with a growing passion for web development.",
    },
    {
      year: "2025",
      title: "Full-Stack Web Development Completed",
      desc: "Completed full-stack web development course in September 2025, focusing on MERN stack and modern scalable applications.",
    },
    {
      year: "2025",
      title: "Software Engineering Internship",
      desc: "Internship at CFO Craft from June 2025 to December 2025, building real-world dashboards and automation tools.",
    },
    {
      year: "2026",
      title: "First Software Job",
      desc: "Joined your first tech company (XYZ) in January 2026 to gain industry-level software engineering experience.",
    },
    {
      year: "2026",
      title: "BCA Admission",
      desc: "Joined BCA in June 2026 at Amrita Vishwa Vidyapeetham to strengthen CS fundamentals and aim for top placements.",
    },
    {
      year: "2027",
      title: "Advanced Full-Stack Developer",
      desc: "Mastered MERN, started building animated + 3D + 4K-ready websites, and began cross-platform app development learning.",
    },
    {
      year: "2028",
      title: "Leadership Growth",
      desc: "Moved into team lead roles, improving innovation skills, precision, and high-level project vision.",
    },
    {
      year: "2029",
      title: "MBA in Information Technology",
      desc: "Started MBA-IT to gain leadership, management, and CTO-level strategic decision-making capabilities.",
    },
    {
      year: "2029",
      title: "Entry Into Top MNC",
      desc: "Joined your target company (Meta / Google / Apple) as a Software Engineer to progress towards Senior Engineer → Manager roles.",
    },
    {
      year: "2032",
      title: "Senior Engineering Leadership",
      desc: "Entered senior engineering leadership roles, building strong technical vision for future innovations.",
    },
    {
      year: "2034",
      title: "CTO / COO Track",
      desc: "Prepared for CTO/COO roles by developing large-scale problem-solving frameworks, smart city projects, and advanced systems.",
    },
    {
      year: "2036",
      title: "CTO Position Achieved",
      desc: "Reached CTO role, focusing on AI, Smart Cities, Brain-Computer Interface systems, and large-scale futuristic innovations.",
    },
    {
      year: "2039",
      title: "CEO Roadmap",
      desc: "Began shaping CEO-level leadership mindset with deep innovation, futuristic thinking, and global-scale solutions.",
    },
    {
      year: "2040",
      title: "CEO Milestone",
      desc: "Achieved CEO position, driving world-changing innovations with AI, BCI, and smart technology.",
    },
  ];

  const philosophys = [
    { 
      title: "Innovation", 
      desc: "Continuously creating unique concepts, futuristic designs, and solving real-world tech problems with original ideas." 
    },
    { 
      title: "Leadership", 
      desc: "Making smart decisions, guiding teams, and bringing clarity with a strong strategic approach towards long-term success." 
    },
    { 
      title: "Technical Excellence", 
      desc: "Mastering full-stack, AI, 4K web, and advanced systems with accuracy and a strong problem-solving mindset." 
    }
  ];

  const roadmaps = [
    {
      year: "2026",
      title: "First Software Job",
      desc: "Joined your first tech company (XYZ) in January 2026 to gain industry-level software engineering experience.",
    },
    {
      year: "2026",
      title: "BCA Admission",
      desc: "Joined BCA in June 2026 at Amrita Vishwa Vidyapeetham to strengthen CS fundamentals and aim for top placements.",
    },
    {
      year: "2027",
      title: "Advanced Full-Stack Developer",
      desc: "Mastered MERN, started building animated + 3D + 4K-ready websites, and began cross-platform app development learning.",
    },
    {
      year: "2028",
      title: "Leadership Growth",
      desc: "Moved into team lead roles, improving innovation skills, precision, and high-level project vision.",
    },
    {
      year: "2029",
      title: "MBA in Information Technology",
      desc: "Started MBA-IT to gain leadership, management, and CTO-level strategic decision-making capabilities.",
    },
    {
      year: "2029",
      title: "Entry Into Top MNC",
      desc: "Joined your target company (Meta / Google / Apple) as a Software Engineer to progress towards Senior Engineer → Manager roles.",
    },
    {
      year: "2032",
      title: "Senior Engineering Leadership",
      desc: "Entered senior engineering leadership roles, building strong technical vision for future innovations.",
    },
    {
      year: "2034",
      title: "CTO / COO Track",
      desc: "Prepared for CTO/COO roles by developing large-scale problem-solving frameworks, smart city projects, and advanced systems.",
    },
    {
      year: "2036",
      title: "CTO Position Achieved",
      desc: "Reached CTO role, focusing on AI, Smart Cities, Brain-Computer Interface systems, and large-scale futuristic innovations.",
    },
    {
      year: "2039",
      title: "CEO Roadmap",
      desc: "Began shaping CEO-level leadership mindset with deep innovation, futuristic thinking, and global-scale solutions.",
    },
    {
      year: "2040",
      title: "CEO Milestone",
      desc: "Achieved CEO position, driving world-changing innovations with AI, BCI, and smart technology.",
    },
  ];

    return (
      <main className="relative bg-gray-900 min-h-screen text-white font-sans">
      
        {/* main me section */}
        <section
          id="me"
          className="min-h-screen flex flex-col justify-center items-center text-center px-4 sm:px-6 relative overflow-hidden bg-gradient-to-b from-[#0a0a0a] via-[#111] to-black"
        >
          {/* Cinematic Aura Layers */}
          <div className="absolute inset-0 -z-10">
            <div className="absolute w-[150%] h-[150%] sm:w-[120%] sm:h-[120%] bg-gradient-to-tr from-cyan-400/5 via-purple-400/3 to-transparent blur-[100px] sm:blur-[120px] rotate-[10deg]"></div>
            <div className="absolute w-[130%] h-[130%] sm:w-[110%] sm:h-[110%] bg-gradient-to-bl from-purple-400/6 via-cyan-400/2 to-transparent blur-[80px] sm:blur-[100px] rotate-[-6deg]"></div>
          </div>

          {/* Ultra-Glass Holographic Title */}
          <h2
            className="text-[12vw] sm:text-[8vw] md:text-[6vw] lg:text-[4vw] font-extrabold select-none relative z-10 cursor-default leading-tight"
            style={{
              fontFamily: "Poppins, Inter, sans-serif",
              color: "transparent",
              WebkitBackgroundClip: "text",
              backgroundImage:
                "linear-gradient(135deg, rgba(255,255,255,0.9) 0%, rgba(180,220,255,0.55) 50%, rgba(120,120,120,0.4) 75%, rgba(255,255,255,0.95) 100%)",
              WebkitTextStroke: "1.5px rgba(255,255,255,0.2)",
              textShadow: `
                0 0 20px rgba(200,220,255,0.25),
                0 0 36px rgba(140,180,255,0.16),
                inset 0 0 24px rgba(255,255,255,0.22)
              `,
              filter:
                "drop-shadow(0 0 20px rgba(255,255,255,0.15)) drop-shadow(0 0 10px rgba(150,200,255,0.18))",
            }}
          >
            ABOUT ME
          </h2>
          
          {/* Layered Paragraph Card */}
          <div className="relative z-10 max-w-3xl mt-4 sm:mt-6 px-2 sm:px-0">
            <div className="absolute -top-6 -left-4 sm:-top-8 sm:-left-6 w-[90%] h-[90%] rounded-[36px] bg-gradient-to-tr from-cyan-400/6 to-purple-400/3 blur-[50px] sm:blur-[60px] rotate-[4deg]"></div>
            <div className="absolute -bottom-6 -right-4 sm:-bottom-8 sm:-right-6 w-[80%] h-[80%] rounded-[28px] bg-gradient-to-tr from-purple-400/5 to-cyan-400/6 blur-[40px] sm:blur-[50px] rotate-[-3deg]"></div>
          
            <p
              className={`${cinzel.className} relative text-[4.5vw] sm:text-[3vw] md:text-[1.5vw] lg:text-[1.2vw] font-medium leading-relaxed`}
              style={{
                color: "rgba(220,220,220,0.88)",
                textShadow: "0 0 14px rgba(255,255,255,0.1)",
                backdropFilter: "blur(3px)",
              }}
            >
              I am <span className="font-bold text-white/95">Karan Kumar</span>,  
              a Full-Stack Developer with a vision for creating ultra-modern digital experiences.  
              I combine <span className="text-cyan-400 font-semibold">clarity</span>, <span className="text-purple-400 font-semibold">creativity</span>, and <span className="text-white/80 font-semibold">precision</span> to craft interfaces that are <span className="text-cyan-300/80 font-medium">intuitive</span>, <span className="text-purple-300/80 font-medium">immersive</span>, and <span className="text-white/70 font-medium">visually stunning</span>.  
              Every project I build tells a story of innovation and futuristic thinking.
            </p>
          </div>
            
          {/* Holographic Interactive Glow Rings */}
          <div className="absolute inset-0 rounded-[40px] pointer-events-none overflow-hidden">
            {[...Array(3)].map((_, i) => (
              <div
                key={i}
                className={`absolute inset-0 rounded-[40px] border border-transparent ring-monium-${i}`}
                style={{
                  background: `conic-gradient(from ${i*120}deg, rgba(0,255,255,${0.08 + i*0.05}), rgba(255,192,203,${0.05 + i*0.03}), rgba(0,255,255,${0.08 + i*0.05}))`,
                  maskImage: "radial-gradient(circle, rgba(0,0,0,1) 75%, rgba(0,0,0,0) 100%)",
                }}
              ></div>
            ))}

            {[...Array(8)].map((_, i) => (
              <div
                key={i}
                className="absolute w-1.5 h-1.5 rounded-full bg-white/30 blur-sm animate-moniumSpark"
                style={{
                  top: `${5 + i*10}%`,
                  left: `${10 + i*12}%`,
                  animationDelay: `${Math.random()*4}s`,
                  animationDuration: `${3 + Math.random()*2}s`,
                }}
              ></div>
            ))}
          </div>
          
          <style>{`
            @keyframes rotateMonium {
              0% { transform: rotate(0deg) scale(1) skew(0deg,0deg); }
              25% { transform: rotate(90deg) scale(1.02) skew(0.5deg,-0.5deg); }
              50% { transform: rotate(180deg) scale(0.98) skew(-0.5deg,0.3deg); }
              75% { transform: rotate(270deg) scale(1.01) skew(0.3deg,0.5deg); }
              100% { transform: rotate(360deg) scale(1) skew(0deg,0deg); }
            }
            @keyframes moniumSpark {
              0% { transform: translate(0,0) scale(0.6); opacity: 0; }
              50% { transform: translate(calc(-3px + 6px*var(--i)), -6px) scale(1.1); opacity: 0.6; }
              100% { transform: translate(0,0) scale(0.6); opacity: 0; }
            }
            .ring-monium-0 { animation: rotateMonium 30s linear infinite; }
            .ring-monium-1 { animation: rotateMonium 35s linear reverse infinite; }
            .ring-monium-2 { animation: rotateMonium 40s linear infinite; }
            .animate-moniumSpark { animation: moniumSpark 5s ease-in-out infinite; }
          `}</style>
        </section>

        {/* origin story */}
        <section
          id="origin-story"
          className="min-h-screen flex flex-col justify-center items-center px-4 sm:px-6 relative overflow-hidden bg-gradient-to-b from-[#0a0a0a] via-[#111] to-black"
        >
          {/* Cinematic Aura Background Layers */}
          <div className="absolute inset-0 -z-10">
            <div className="absolute w-[150%] h-[150%] sm:w-[130%] sm:h-[130%] bg-gradient-to-tr from-cyan-400/5 via-purple-400/3 to-transparent blur-[100px] sm:blur-[140px] rotate-[15deg]"></div>
            <div className="absolute w-[140%] h-[140%] sm:w-[120%] sm:h-[120%] bg-gradient-to-bl from-purple-400/6 via-cyan-400/2 to-transparent blur-[90px] sm:blur-[120px] rotate-[-10deg]"></div>
          </div>

          {/* Section Title */}
          <h2
            className="text-[12vw] sm:text-[9vw] md:text-[6vw] lg:text-[4vw] font-extrabold mb-8 sm:mb-12 select-none relative z-10 cursor-default leading-tight"
            style={{
              fontFamily: "Poppins, Inter, sans-serif",
              color: "transparent",
              WebkitBackgroundClip: "text",
              backgroundImage:
                "linear-gradient(135deg, rgba(255,255,255,0.9) 0%, rgba(180,220,255,0.55) 50%, rgba(120,120,120,0.4) 75%, rgba(255,255,255,0.95) 100%)",
              WebkitTextStroke: "1.5px rgba(255,255,255,0.2)",
              textShadow: `0 0 20px rgba(200,220,255,0.25),
                           0 0 36px rgba(140,180,255,0.16),
                           inset 0 0 24px rgba(255,255,255,0.22)`,
            }}
          >
            ORIGIN STORY
          </h2>
          
          {/* Timeline Container - Horizontal Scroll */}
          <div className="relative z-10 w-full max-w-5xl flex flex-col sm:flex-row overflow-y-auto sm:overflow-x-auto gap-4 sm:gap-8 py-4 px-2">
            {origins.map((origin, i) => (
              <div key={i} className="relative flex-shrink-0 flex flex-col items-center group w-full sm:w-72 mb-4 sm:mb-0">
                {/* Floating Glow Dot */}
                <div className="absolute -top-3 sm:-top-4 w-3 h-3 sm:w-4 sm:h-4 rounded-full bg-cyan-400/50 blur-[3px] sm:blur-[4px] animate-[glowPulse_2s_ease-in-out_infinite]"></div>

                {/* Card */}
                <div className="relative bg-gray-900/40 backdrop-blur-md rounded-3xl p-5 sm:p-6 w-full border border-cyan-500/20 shadow-lg hover:scale-[1.08] hover:shadow-[0_0_55px_-2px_rgba(0,220,255,0.7)] transition-all duration-500">
                  <h3 className={`${cinzel.className} text-base sm:text-lg text-cyan-400`}>{origin.title}</h3>
                  <p className="text-gray-300 mt-1 sm:mt-2 text-xs sm:text-sm">{origin.desc}</p>
                  <span className={`${dancing.className} absolute -top-3 sm:-top-4 right-3 sm:right-4 text-cyan-200/50 text-xs sm:text-sm`}>{origin.year}</span>
                </div>
              </div>
            ))}
          </div>
          
          {/* Keyframes */}
          <style>{`
            @keyframes glowPulse {
              0%, 100% { transform: scale(0.8); opacity: 0.3; }
              50% { transform: scale(1.2); opacity: 0.8; }
            }
            /* Scrollbar for Webkit */
            .scrollbar-thin::-webkit-scrollbar { height: 6px; }
            .scrollbar-thin::-webkit-scrollbar-track { background: rgba(255,255,255,0.05); }
            .scrollbar-thin::-webkit-scrollbar-thumb { background: rgba(0,255,255,0.3); border-radius: 10px; }
          `}</style>
        </section>

        {/* Mission & Philosophy */}
        <section
          id="mission"
          className="min-h-screen flex flex-col justify-center items-center px-4 sm:px-6 relative overflow-hidden bg-gradient-to-b from-[#0a0a0a] via-[#111] to-black"
        >
          {/* Cinematic Aura Background */}
          <div className="absolute inset-0 -z-10">
            <div className="absolute w-[150%] h-[150%] sm:w-[120%] sm:h-[120%] bg-gradient-to-tr from-cyan-400/5 via-purple-400/3 to-transparent blur-[120px] sm:blur-[140px] rotate-[12deg]"></div>
            <div className="absolute w-[140%] h-[140%] sm:w-[110%] sm:h-[110%] bg-gradient-to-bl from-purple-400/6 via-cyan-400/2 to-transparent blur-[100px] sm:blur-[120px] rotate-[-8deg]"></div>
          </div>
                  
          {/* Section Title */}
          <h2
            className="text-[12vw] sm:text-[9vw] md:text-[6vw] lg:text-[4vw] font-extrabold mb-8 sm:mb-12 select-none relative z-10 cursor-default leading-tight text-center"
            style={{
              fontFamily: "Poppins, Inter, sans-serif",
              color: "transparent",
              WebkitBackgroundClip: "text",
              backgroundImage: "linear-gradient(135deg, rgba(255,255,255,0.9) 0%, rgba(180,220,255,0.55) 50%, rgba(120,120,120,0.4) 75%, rgba(255,255,255,0.95) 100%)",
              WebkitTextStroke: "1.5px rgba(255,255,255,0.2)",
              textShadow: "0 0 20px rgba(200,220,255,0.25),0 0 36px rgba(140,180,255,0.16), inset 0 0 24px rgba(255,255,255,0.22)"
            }}
          >
            VISION & PHILOSOPHY
          </h2>
          
          {/* Core Principles Cards */}
          <div className="relative z-10 flex flex-col sm:flex-col md:flex-row justify-center items-center gap-4 sm:gap-6 md:gap-8">
            {philosophys.map((item, i) => (
              <div key={i}
                className="relative group w-60 h-72 sm:w-64 sm:h-76 md:w-72 md:h-80 bg-gray-900/30 backdrop-blur-md rounded-3xl p-5 sm:p-6 border border-cyan-500/20 shadow-lg transition-transform duration-500 hover:scale-105"
                style={{ perspective: "1200px" }}
              >
                {/* 3D Tilt Layer */}
                <div className="w-full h-full rounded-3xl flex flex-col justify-center items-center transform transition-transform duration-500 group-hover:rotate-y-[10deg] group-hover:rotate-x-[5deg]">
                  <h3 className={`${cinzel.className} text-xl sm:text-2xl text-cyan-400 mb-2 sm:mb-3 text-center`}>{item.title}</h3>
                  <p className="text-gray-300 text-xs sm:text-sm text-center">{item.desc}</p>
            
                  {/* Glow effect */}
                  <div className="absolute inset-0 rounded-3xl bg-cyan-400/5 opacity-0 group-hover:opacity-40 animate-[pulseGlow_3s_ease-in-out_infinite] pointer-events-none"></div>
                </div>
              </div>
            ))}
          </div>
          
          {/* Keyframes */}
          <style>{`
            @keyframes pulseGlow {
              0%, 100% { opacity: 0.1; }
              50% { opacity: 0.4; }
            }
          `}</style>
        </section>

        {/* future roadmap */}
        <section
          id="roadmap"
          className="min-h-screen flex flex-col justify-center items-center py-6 px-4 sm:px-6 relative overflow-hidden bg-gradient-to-b from-[#0a0a0a] via-[#111] to-black"
        >
          {/* Cinematic Aura Background */}
          <div className="absolute inset-0 -z-10">
            <div className="absolute w-[150%] h-[150%] sm:w-[140%] sm:h-[140%] bg-gradient-to-tr from-cyan-400/5 via-purple-400/3 to-transparent blur-[140px] sm:blur-[160px] rotate-[15deg]"></div>
            <div className="absolute w-[140%] h-[140%] sm:w-[130%] sm:h-[130%] bg-gradient-to-bl from-purple-400/6 via-cyan-400/2 to-transparent blur-[120px] sm:blur-[140px] rotate-[-10deg]"></div>
          </div>

          {/* Section Title */}
          <h2
            className="text-[12vw] sm:text-[9vw] md:text-[6vw] lg:text-[4vw] font-extrabold mb-8 sm:mb-12 select-none relative z-10 cursor-default text-center"
            style={{
              fontFamily: "Poppins, Inter, sans-serif",
              color: "transparent",
              WebkitBackgroundClip: "text",
              backgroundImage: "linear-gradient(135deg, rgba(255,255,255,0.9) 0%, rgba(180,220,255,0.55) 50%, rgba(120,120,120,0.4) 75%, rgba(255,255,255,0.95) 100%)",
              WebkitTextStroke: "1.5px rgba(255,255,255,0.2)",
              textShadow: "0 0 20px rgba(200,220,255,0.25),0 0 36px rgba(140,180,255,0.16), inset 0 0 24px rgba(255,255,255,0.22)"
            }}
          >
            ROADMAP
          </h2>
          
          <div className="relative w-full">
            {/* Gradient fade on left/right */}
            <div className="absolute left-0 top-0 h-full w-12 sm:w-16 bg-gradient-to-r from-black/90 to-transparent pointer-events-none z-20"></div>
            <div className="absolute right-0 top-0 h-full w-12 sm:w-16 bg-gradient-to-l from-black/90 to-transparent pointer-events-none z-20"></div>
          
            {/* Timeline Container */}
            <div className="flex flex-col sm:flex-row gap-6 sm:gap-12 py-10 px-2 sm:px-16 overflow-y-auto sm:overflow-x-auto scrollbar-thin scrollbar-thumb-cyan-400/50 scrollbar-track-gray-900/20 scroll-smooth">
              {roadmaps.map((item, i) => (
                <div
                  key={i}
                  className="relative group flex-none w-full sm:w-64 md:w-72 h-72 sm:h-76 md:h-80 bg-gray-900/30 backdrop-blur-md rounded-3xl p-5 sm:p-6 border border-cyan-500/20 shadow-lg transition-transform duration-500 hover:scale-105 mb-4 sm:mb-0"
                >
                  {/* Milestone Glow */}
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-cyan-400/50 shadow-[0_0_15px_rgba(0,255,255,0.5)] sm:shadow-[0_0_20px_rgba(0,255,255,0.5)] animate-pulse"></div>
              
                  {/* Timeline Text */}
                  <h3 className={`${dancing.className} text-xl sm:text-2xl text-white mb-1 sm:mb-2`}>{item.year}</h3>
                  <h4 className={`${cinzel.className} text-lg sm:text-xl text-cyan-400 mb-1 sm:mb-2`}>{item.title}</h4>
                  <p className="text-gray-300 text-xs sm:text-sm">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
            
          {/* Keyframes */}
          <style>{`
            @keyframes pulse {
              0%,100% { transform: scale(1); opacity: 0.4; }
              50% { transform: scale(1.2); opacity: 0.8; }
            }
            .animate-pulse { animation: pulse 2s ease-in-out infinite; }
          
            /* Scrollbar for Webkit */
            .scrollbar-thin::-webkit-scrollbar { height: 6px; }
            .scrollbar-thin::-webkit-scrollbar-track { background: rgba(255,255,255,0.05); }
            .scrollbar-thin::-webkit-scrollbar-thumb { background: rgba(0,255,255,0.3); border-radius: 10px; }
          
            /* Snap support */
            .snap-x { scroll-snap-type: x mandatory; }
            .snap-center { scroll-snap-align: center; }
          
            /* Smooth scroll */
            .scroll-smooth { scroll-behavior: smooth; }
          `}</style>
        </section>

        {/* hobby & skills & achievement  */}
        <section
          id="personal"
          className="min-h-screen flex flex-col justify-center items-center text-center px-4 sm:px-6 relative overflow-hidden bg-gradient-to-b from-black via-[#111] to-[#0a0a0a]"
        >
          {/* Cinematic Aura Background */}
          <div className="absolute inset-0 -z-10">
            <div className="absolute w-[120%] h-[120%] bg-gradient-to-tr from-purple-400/5 via-cyan-400/3 to-transparent blur-[120px] rotate-[8deg]"></div>
            <div className="absolute w-[110%] h-[110%] bg-gradient-to-bl from-cyan-400/6 via-purple-400/2 to-transparent blur-[100px] rotate-[-6deg]"></div>
          </div>

          {/* Section Title */}
          <h2
            className="text-[12vw] sm:text-[9vw] md:text-[5vw] font-extrabold mb-8 sm:mb-12 select-none relative z-10 cursor-default"
            style={{
              fontFamily: "Poppins, Inter, sans-serif",
              color: "transparent",
              WebkitBackgroundClip: "text",
              backgroundImage: "linear-gradient(135deg, rgba(255,255,255,0.9) 0%, rgba(180,220,255,0.55) 50%, rgba(120,120,120,0.4) 75%, rgba(255,255,255,0.95) 100%)",
              WebkitTextStroke: "1.5px rgba(255,255,255,0.2)",
              textShadow: "0 0 20px rgba(200,220,255,0.25), 0 0 36px rgba(140,180,255,0.16), inset 0 0 24px rgba(255,255,255,0.22)"
            }}
          >
            PERSONAL HOBBY
          </h2>
          
          {/* Cards Container */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 max-w-6xl z-10">
            {[ 
              { title: "Music", desc: "Listening to ambient music.", icon: "🎵" },
              { title: "Rare Skill: Rapid Coding", desc: "Can implement complex algorithms at lightning speed.", icon: "⚡" },
              { title: "Creative Thinking", desc: "Generating unique solutions to real-world problems.", icon: "💡" },
              { title: "3D Web Design", desc: "Creating mind-blowing 3D websites & animations.", icon: "🖥️" },
              { title: "AI Experiments", desc: "Building futuristic AI tools & utilities.", icon: "🤖" },
              { title: "Gaming", desc: "I enjoy immersive AAA games and strategic challenges.", icon: "🎮" },
            ].map((item, i) => (
              <div key={i} className="group relative bg-gray-900/30 backdrop-blur-md rounded-3xl p-5 sm:p-6 border border-cyan-500/20 shadow-lg hover:scale-105 hover:rotate-1 transition-transform duration-500">
                <div className="text-3xl sm:text-4xl mb-3 sm:mb-4">{item.icon}</div>
                <h4 className={`${cinzel.className} text-lg sm:text-xl text-cyan-400 mb-1 sm:mb-2`}>{item.title}</h4>
                <p className="text-gray-300 text-xs sm:text-sm">{item.desc}</p>
            
                {/* Hover glow effect */}
                <div className="absolute inset-0 rounded-3xl bg-cyan-400/10 opacity-0 group-hover:opacity-70 transition-opacity duration-300 pointer-events-none"></div>
              </div>
            ))}
          </div>

          <style>{`
            @keyframes funFloat {
              0% { transform: translateY(0px) scale(0.7); opacity: 0.2; }
              50% { transform: translateY(-10px) scale(1.1); opacity: 0.6; }
              100% { transform: translateY(0px) scale(0.7); opacity: 0.2; }
            }
          `}</style>
        </section>

      </main>
    );

}