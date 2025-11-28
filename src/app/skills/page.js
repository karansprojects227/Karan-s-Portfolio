"use client";

import React from 'react'

export default function About() {

  const skillsrates = [
    { 
      name: "Functional Dev",
      glow: "cyan",
      metric: "90%",
      color: "from-cyan-400 via-blue-400 to-purple-400",
      description: "Core programming, functional engineering, modular architecture.",
      icons: [
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg"
      ]
    },
    { 
      name: "Creative Dev",
      glow: "magenta",
      metric: "80%",
      color: "from-pink-400 via-purple-400 to-indigo-400",
      description: "React, Next.js, Framer Motion, 3D & scroll-triggered animations.",
      icons: [
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
        "https://static.cdnlogo.com/logos/g/31/gsap-greensock.svg"
      ]
    },
    { 
      name: "Full-Stack Dev",
      glow: "emerald",
      metric: "95%",
      color: "from-green-400 via-teal-400 to-blue-400",
      description: "HTML, CSS, JS, jQuery, Bootstrap, PHP backend, MySQL DB.",
      icons: [
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg"
      ]
    },
    { 
      name: "MERN Dev",
      glow: "pink",
      metric: "85%",
      color: "from-orange-400 via-red-400 to-pink-400",
      description: "MongoDB, Express, React, Node.js, API & real-time apps.",
      icons: [
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg"
      ]
    }
  ];

    return (
      <main className="relative bg-gray-900 min-h-screen text-white font-sans">
      
        {/* main skils 01 section */}
        <section
          id="functional-dev"
          className="min-h-screen flex flex-col justify-center py-16 sm:py-0 items-center px-6 relative overflow-hidden bg-gradient-to-b from-black via-[#0a0a0a] to-black"
        >
          {/* Ambient Layered Aurora Glow */}
          <div className="absolute inset-0 -z-20">
            <div className="absolute w-[160%] h-[160%] -top-48 -left-48 
                            bg-gradient-to-br from-cyan-500/15 via-blue-500/10 to-purple-500/15 
                            blur-[180px] animate-auroraWaveSlow"></div>
            <div className="absolute w-[150%] h-[150%] -bottom-48 -right-48 
                            bg-gradient-to-tl from-pink-500/15 via-orange-400/10 to-yellow-500/15 
                            blur-[150px] animate-auroraWaveSlow delay-1500"></div>
          </div>

          {/* Title */}
          <h2
            className="text-[11vw] sm:text-[6vw] font-extrabold mb-10 select-none tracking-tight"
            style={{
              fontFamily: "Poppins, Inter, sans-serif",
              color: "transparent",
              WebkitBackgroundClip: "text",
              backgroundImage:
                "linear-gradient(135deg, rgba(255,255,255,0.9), rgba(190,220,255,0.55), rgba(120,120,120,0.45), rgba(255,255,255,0.9))",
              WebkitTextStroke: "1.6px rgba(255,255,255,0.18)",
              textShadow: `
                0 0 18px rgba(200,220,255,0.20),
                0 0 34px rgba(140,170,255,0.14),
                inset 0 0 20px rgba(255,255,255,0.20)
              `,
              animation: "glassPulse 4s ease-in-out infinite",
            }}
          >
            Functional Dev #01
          </h2>
          
          {/* Frosted Glass Bubble Card */}
          <div className="relative w-full max-w-4xl rounded-3xl p-10 backdrop-blur-xl bg-white/5 border border-white/10 shadow-[0_0_80px_-10px_rgba(0,200,255,0.35)] hover:shadow-[0_0_110px_-5px_rgba(0,200,255,0.6)] transition-all duration-700 group">

            {/* Inner Hover Glow */}
            <div
              className="absolute inset-0 opacity-0 group-hover:opacity-100 rounded-3xl transition-all duration-700"
              style={{
                background: "radial-gradient(circle at center, rgba(0,200,255,0.25), transparent 65%)",
                filter: "blur(50px)",
              }}
            ></div>

            {/* Content */}
            <div className="relative z-10 flex flex-col gap-6">
              <h3 className="text-2xl sm:text-3xl font-semibold text-cyan-300 drop-shadow-md">
                Core Functional Development Skills
              </h3>
              <p className="text-gray-300 text-lg sm:text-xl leading-relaxed">
                Focused on <span className="text-white font-semibold">core programming fundamentals</span> and 
                <span className="text-cyan-400 font-semibold"> functional engineering</span>. 
                Building <span className="text-purple-400 font-semibold">clean, modular, high-performance applications</span> is the goal.
              </p>
              <ul className="list-disc list-inside text-gray-300 space-y-2">
                {[
                  "Programming Languages: JavaScript (ES6+), Python intermediate",
                  "Data Structures & Algorithms: Arrays, Trees, Sorting, Searching",
                  "Problem Solving: Logic building, functional decomposition",
                  "Functional Paradigm: Pure functions, immutability, higher-order functions",
                  "Testing & Debugging: Unit tests, error handling",
                  "Best Practices: Clean code, DRY principle, maintainable architecture",
                ].map((item, i) => (
                  <li key={i} className="relative group hover:text-cyan-300 transition-colors duration-500">
                    {item}
                    <span className="absolute left-0 top-1/2 w-2 h-2 bg-cyan-400 rounded-full opacity-0 group-hover:opacity-100 -translate-y-1/2 animate-pulse"></span>
                  </li>
                ))}
              </ul>
            </div>
              
            {/* Floating Tech Icons */}
            {[
              { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg", top: "-20px", left: "-20px" },
              { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg", bottom: "-20px", right: "-20px" },
              { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg", top: "10%", right: "10%" },
            ].map((icon, i) => (
              <div key={i} className={`absolute w-20 h-20 animate-floatXY group-hover:scale-110 transition-transform duration-700`} style={{ ...icon }}>
                <img src={icon.src} alt="Tech Icon" className="w-full h-full drop-shadow-[0_0_20px_rgba(0,255,255,0.5)]"/>
              </div>
            ))}
          </div>
        </section>

        {/* main skils 02 section */}
        <section
          id="creative-dev"
          className="min-h-screen flex flex-col justify-center pb-16 sm:pb-0 items-center px-6 relative overflow-hidden bg-gradient-to-b from-black via-[#0a0a0a] to-black"
        >
          {/* Ambient Layered Aurora Glow */}
          <div className="absolute inset-0 -z-20">
            <div className="absolute w-[160%] h-[160%] -top-48 -left-48 
                            bg-gradient-to-br from-cyan-500/15 via-blue-500/10 to-purple-500/15 
                            blur-[180px] animate-auroraWaveSlow"></div>
            <div className="absolute w-[150%] h-[150%] -bottom-48 -right-48 
                            bg-gradient-to-tl from-pink-500/15 via-orange-400/10 to-yellow-500/15 
                            blur-[150px] animate-auroraWaveSlow delay-1500"></div>
          </div>

          {/* Title */}
          <h2
            className="text-[11vw] sm:text-[6vw] font-extrabold mb-10 select-none tracking-tight"
            style={{
              fontFamily: "Poppins, Inter, sans-serif",
              color: "transparent",
              WebkitBackgroundClip: "text",
              backgroundImage:
                "linear-gradient(135deg, rgba(255,255,255,0.9), rgba(190,220,255,0.55), rgba(120,120,120,0.45), rgba(255,255,255,0.9))",
              WebkitTextStroke: "1.6px rgba(255,255,255,0.18)",
              textShadow: `
                0 0 18px rgba(200,220,255,0.20),
                0 0 34px rgba(140,170,255,0.14),
                inset 0 0 20px rgba(255,255,255,0.20)
              `,
              animation: "glassPulse 4s ease-in-out infinite",
            }}
          >
            Creative Dev #02
          </h2>
          
          {/* Frosted Glass Card */}
          <div className="relative w-full max-w-4xl rounded-3xl p-10 backdrop-blur-xl bg-white/5 border border-white/10 shadow-[0_0_80px_-10px_rgba(255,105,180,0.35)] hover:shadow-[0_0_110px_-5px_rgba(255,105,180,0.6)] transition-all duration-700 group">
          
            {/* Hover Glow */}
            <div
              className="absolute inset-0 opacity-0 group-hover:opacity-100 rounded-3xl transition-all duration-700"
              style={{
                background: "radial-gradient(circle at center, rgba(255,105,180,0.25), transparent 65%)",
                filter: "blur(50px)",
              }}
            ></div>

            {/* Content */}
            <div className="relative z-10 flex flex-col gap-6">
              <h3 className="text-2xl sm:text-3xl font-semibold text-pink-300 drop-shadow-md">
                Core Creative Development Skills
              </h3>
              <p className="text-gray-300 text-lg sm:text-xl leading-relaxed">
                Focused on <span className="text-white font-semibold">UI/UX design</span>, 
                <span className="text-pink-400 font-semibold"> animations</span>, 
                and <span className="text-purple-400 font-semibold">interactive experiences</span>. Creating immersive digital aesthetics is the goal.
              </p>
              <ul className="list-disc list-inside text-gray-300 space-y-2">
                {[
                  "React & Next.js: Modern component-based UI design",
                  "Framer Motion & GSAP ScrollTrigger: Smooth animations & scroll effects",
                  "3D & Interactive: Three.js, CSS 3D transforms, immersive UX",
                  "Text Animations: Letter splitting, gradient effects, dynamic typography",
                  "Performance Optimization: Lazy loading, animation batching, minimal re-renders",
                  "Creative UI/UX: Responsive, interactive, futuristic interfaces",
                ].map((item, i) => (
                  <li key={i} className="relative group hover:text-pink-300 transition-colors duration-500">
                    {item}
                    <span className="absolute left-0 top-1/2 w-2 h-2 bg-pink-400 rounded-full opacity-0 group-hover:opacity-100 -translate-y-1/2 animate-pulse"></span>
                  </li>
                ))}
              </ul>
            </div>
              
            {/* Floating Tech SVGs */}
            {[
              { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg", top: "-20px", left: "-20px" },
              { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg", bottom: "-20px", right: "-20px" },
              { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/threejs/threejs-original.svg", top: "10%", right: "10%" },
              { src: "https://static.cdnlogo.com/logos/g/31/gsap-greensock.svg", bottom: "15%", left: "15%" },
            ].map((icon, i) => (
              <div key={i} className="absolute w-20 h-20 animate-floatXY group-hover:scale-110 transition-transform duration-700" style={{ ...icon }}>
                <img src={icon.src} alt="Tech Icon" className="w-full h-full drop-shadow-[0_0_20px_rgba(255,182,193,0.5)]"/>
              </div>
            ))}
          </div>
        </section>

        {/* main skils 03 section */}
        <section
          id="full-stack-dev"
          className="min-h-screen flex flex-col pb-16 sm:pb-0 justify-center items-center px-6 relative overflow-hidden bg-gradient-to-b from-black via-[#0a0a0a] to-black"
        >
          {/* Ambient Layered Aurora Glow */}
          <div className="absolute inset-0 -z-20">
            <div className="absolute w-[160%] h-[160%] -top-48 -left-48 
                            bg-gradient-to-br from-cyan-500/15 via-blue-500/10 to-purple-500/15 
                            blur-[180px] animate-auroraWaveSlow"></div>
            <div className="absolute w-[150%] h-[150%] -bottom-48 -right-48 
                            bg-gradient-to-tl from-pink-500/15 via-orange-400/10 to-yellow-500/15 
                            blur-[150px] animate-auroraWaveSlow delay-1500"></div>
          </div>

          {/* Title */}
          <h2
            className="text-[11vw] sm:text-[6vw] font-extrabold mb-10 select-none tracking-tight"
            style={{
              fontFamily: "Poppins, Inter, sans-serif",
              color: "transparent",
              WebkitBackgroundClip: "text",
              backgroundImage:
                "linear-gradient(135deg, rgba(255,255,255,0.9), rgba(190,220,255,0.55), rgba(120,120,120,0.45), rgba(255,255,255,0.9))",
              WebkitTextStroke: "1.6px rgba(255,255,255,0.18)",
              textShadow: `
                0 0 18px rgba(200,220,255,0.20),
                0 0 34px rgba(140,170,255,0.14),
                inset 0 0 20px rgba(255,255,255,0.20)
              `,
              animation: "glassPulse 4s ease-in-out infinite",
            }}
          >
            Full Stack Dev #03
          </h2>
          
          {/* Frosted Glass Card */}
          <div className="relative w-full max-w-4xl rounded-3xl p-10 backdrop-blur-xl bg-white/5 border border-white/10 shadow-[0_0_80px_-10px_rgba(0,255,200,0.35)] hover:shadow-[0_0_110px_-5px_rgba(0,255,200,0.6)] transition-all duration-700 group">

            {/* Inner Hover Glow */}
            <div
              className="absolute inset-0 opacity-0 group-hover:opacity-100 rounded-3xl transition-all duration-700"
              style={{
                background: "radial-gradient(circle at center, rgba(0,255,200,0.25), transparent 65%)",
                filter: "blur(50px)",
              }}
            ></div>

            {/* Content */}
            <div className="relative z-10 flex flex-col gap-6">
              <h3 className="text-2xl sm:text-3xl font-semibold text-cyan-300 drop-shadow-md">
                Core Full Stack Development Skills
              </h3>
            
              <p className="text-gray-300 text-lg sm:text-xl leading-relaxed">
                Bridging <span className="text-white font-semibold">frontend and backend</span> with 
                <span className="text-cyan-400 font-semibold"> scalable architecture</span>. 
                Building <span className="text-green-400 font-semibold">robust, maintainable, high-performance applications</span> is the goal.
              </p>
            
              <ul className="list-disc list-inside text-gray-300 space-y-2">
                {[
                  "Frontend: HTML, CSS, JavaScript (ES6+), jQuery, Bootstrap 4 & 5",
                  "Backend: PHP, server-side logic, REST APIs",
                  "Database: MySQL, queries, schema design",
                  "AJAX & API Integration: Dynamic data fetching & JSON",
                  "Full-stack architecture: Frontend + Backend + Database integration",
                  "Best Practices: Clean code, maintainable, reusable components",
                ].map((item, i) => (
                  <li key={i} className="relative group hover:text-cyan-300 transition-colors duration-500">
                    {item}
                    <span className="absolute left-0 top-1/2 w-2 h-2 bg-cyan-400 rounded-full opacity-0 group-hover:opacity-100 -translate-y-1/2 animate-pulse"></span>
                  </li>
                ))}
              </ul>
            </div>
              
            {/* Floating Tech SVGs */}
            {[
                { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg", top: "-20px", left: "-20px" },
                { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg", bottom: "-20px", right: "-20px" },
                { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg", top: "10%", right: "10%" },
                { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg", bottom: "15%", left: "15%" },
                { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg", top: "20%", left: "30%" },
                { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg", top: "5%", left: "60%" },
                { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jquery/jquery-original.svg", bottom: "10%", right: "40%" },
              ].map((icon, i) => (
              <div key={i} className="absolute w-20 h-20 animate-floatXY group-hover:scale-110 transition-transform duration-700" style={{ ...icon }}>
                <img src={icon.src} alt="Tech Icon" className="w-full h-full drop-shadow-[0_0_20px_rgba(0,255,200,0.5)]" />
              </div>
            ))}
          </div>
          
          {/* Keyframes */}
          <style>{`
            @keyframes atomFloat {
              0% { transform: translateY(0px); opacity: 0.3; }
              50% { transform: translateY(-25px); opacity: 0.65; }
              100% { transform: translateY(0px); opacity: 0.3; }
            }
            @keyframes glassPulse {
              0% {
                text-shadow:
                  0 0 15px rgba(200,220,255,0.25),
                  0 0 28px rgba(170,200,255,0.16),
                  inset 0 0 18px rgba(255,255,255,0.15);
              }
              100% {
                text-shadow:
                  0 0 24px rgba(200,220,255,0.35),
                  0 0 38px rgba(170,200,255,0.22),
                  inset 0 0 26px rgba(255,255,255,0.25);
              }
            }
          
            @keyframes auroraWaveSlow {
              0% { transform: translateX(0) translateY(0) rotate(0deg); }
              50% { transform: translateX(50px) translateY(-30px) rotate(8deg); }
              100% { transform: translateX(0) translateY(0) rotate(0deg); }
            }
          
            @keyframes floatXY {
              0% { transform: translate(0,0) rotate(0deg); }
              25% { transform: translate(15px,-10px) rotate(15deg); }
              50% { transform: translate(0,15px) rotate(0deg); }
              75% { transform: translate(-10px,-10px) rotate(-10deg); }
              100% { transform: translate(0,0) rotate(0deg); }
            }
          `}</style>
          
        </section>

        {/* main skils 04 section */}
        <section
          id="mern-stack-dev"
          className="min-h-screen flex flex-col justify-center pb-16 sm:pb items-center px-6 relative overflow-hidden bg-gradient-to-b from-black via-[#0a0a0a] to-black"
        >
          
          {/* Ambient Layered Aurora Glow */}
          <div className="absolute inset-0 -z-20">
            <div className="absolute w-[160%] h-[160%] -top-48 -left-48 
                            bg-gradient-to-br from-cyan-500/15 via-blue-500/10 to-purple-500/15 
                            blur-[180px] animate-auroraWaveSlow"></div>
            <div className="absolute w-[150%] h-[150%] -bottom-48 -right-48 
                            bg-gradient-to-tl from-pink-500/15 via-orange-400/10 to-yellow-500/15 
                            blur-[150px] animate-auroraWaveSlow delay-1500"></div>
          </div>

          {/* Title */}
          <h2
            className="text-[11vw] sm:text-[6vw] font-extrabold mb-10 select-none tracking-tight"
            style={{
              fontFamily: "Poppins, Inter, sans-serif",
              color: "transparent",
              WebkitBackgroundClip: "text",
              backgroundImage:
                "linear-gradient(135deg, rgba(255,255,255,0.9), rgba(190,220,255,0.55), rgba(120,120,120,0.45), rgba(255,255,255,0.9))",
              WebkitTextStroke: "1.6px rgba(255,255,255,0.18)",
              textShadow: `
                0 0 18px rgba(200,220,255,0.20),
                0 0 34px rgba(140,170,255,0.14),
                inset 0 0 20px rgba(255,255,255,0.20)
              `,
              animation: "glassPulse 4s ease-in-out infinite",
            }}
          >
            MERN Stack Dev #04
          </h2>
          
          {/* Frosted Glass Bubble Card */}
          <div className="relative w-full max-w-4xl rounded-3xl p-10 backdrop-blur-xl bg-white/5 border border-white/10 shadow-[0_0_80px_-10px_rgba(255,127,80,0.35)] hover:shadow-[0_0_110px_-5px_rgba(255,127,80,0.6)] transition-all duration-700 group">
                  
            {/* Inner Hover Glow */}
            <div
              className="absolute inset-0 opacity-0 group-hover:opacity-100 rounded-3xl transition-all duration-700"
              style={{
                background: "radial-gradient(circle at center, rgba(255,127,80,0.25), transparent 65%)",
                filter: "blur(50px)",
              }}
            ></div>
        
            {/* Content */}
            <div className="relative z-10 flex flex-col gap-6">
              <h3 className="text-2xl sm:text-3xl font-semibold text-orange-300 drop-shadow-md">
                Core MERN Stack Skills
              </h3>
            
              <p className="text-gray-300 text-lg sm:text-xl leading-relaxed">
                Focused on <span className="text-white font-semibold">MongoDB, Express, React, Node</span> integration,
                <span className="text-orange-400 font-semibold"> full-stack application architecture</span>, 
                and <span className="text-yellow-400 font-semibold">deploying scalable, high-performance apps</span>.
              </p>
            
              {/* Skill List */}
              <ul className="list-disc list-inside text-gray-300 space-y-2">
                {[
                  "MongoDB: Schema design, aggregation, CRUD operations",
                  "Express.js: REST API creation, middleware, routing",
                  "React: Component-based UI, hooks, state management",
                  "Node.js: Server-side logic, asynchronous programming",
                  "Integration: Connecting frontend, backend & database",
                  "Deployment: Vercel, Netlify, Heroku, cloud basics",
                ].map((item, i) => (
                  <li key={i} className="relative group hover:text-orange-300 transition-colors duration-500">
                    {item}
                    <span className="absolute left-0 top-1/2 w-2 h-2 bg-orange-400 rounded-full opacity-0 group-hover:opacity-100 -translate-y-1/2 animate-pulse"></span>
                  </li>
                ))}
              </ul>
            </div>
              
            {/* Floating MERN Tech SVGs */}
            {[
              { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg", top: "-20px", left: "-20px" },
              { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg", bottom: "-20px", right: "-20px" },
              { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg", top: "10%", right: "10%" },
              { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg", bottom: "15%", left: "15%" },
            ].map((icon, i) => (
              <div key={i} className="absolute w-20 h-20 animate-floatXY group-hover:scale-110 transition-transform duration-700" style={{ ...icon }}>
                <img src={icon.src} alt="Tech Icon" className="w-full h-full drop-shadow-[0_0_20px_rgba(255,127,80,0.5)]" />
              </div>
            ))}
          </div>
          
          {/* Keyframes */}
          <style>{`
            @keyframes atomFloat {
              0% { transform: translateY(0px); opacity: 0.3; }
              50% { transform: translateY(-25px); opacity: 0.65; }
              100% { transform: translateY(0px); opacity: 0.3; }
            }
            @keyframes glassPulse {
              0% {
                text-shadow:
                  0 0 15px rgba(200,220,255,0.25),
                  0 0 28px rgba(170,200,255,0.16),
                  inset 0 0 18px rgba(255,255,255,0.15);
              }
              100% {
                text-shadow:
                  0 0 24px rgba(200,220,255,0.35),
                  0 0 38px rgba(170,200,255,0.22),
                  inset 0 0 26px rgba(255,255,255,0.25);
              }
            }
          
            @keyframes auroraWaveSlow {
              0% { transform: translateX(0) translateY(0) rotate(0deg); }
              50% { transform: translateX(50px) translateY(-30px) rotate(8deg); }
              100% { transform: translateX(0) translateY(0) rotate(0deg); }
            }
          
            @keyframes floatXY {
              0% { transform: translate(0,0) rotate(0deg); }
              25% { transform: translate(15px,-10px) rotate(15deg); }
              50% { transform: translate(0,15px) rotate(0deg); }
              75% { transform: translate(-10px,-10px) rotate(-10deg); }
              100% { transform: translate(0,0) rotate(0deg); }
            }
          `}</style>
                  
        </section>
          
        {/* ADVANCED IMMERSIVE FULLSCREEN SKILLS WITH MULTI-GLOW SYSTEM */}
        <section className="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-[#05060a] py-20">
                  
          {/* Particles */}
          {[...Array(30)].map((_, i) => (
            <div
              key={i}
              className="absolute w-[6px] sm:w-[8px] h-[6px] sm:h-[8px] bg-white/30 rounded-full blur-[2px]"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                animation: `particleFloat ${3 + Math.random() * 4}s ease-in-out infinite`,
                animationDelay: `${Math.random() * 4}s`,
              }}
            />
          ))}
        
          {/* Aurora Background */}
          <div className="absolute inset-0 -z-20">
            <div className="absolute w-[200%] h-[200%] -top-40 -left-40 sm:w-[170%] sm:h-[170%]
                            bg-gradient-to-br from-cyan-500/20 via-blue-400/10 to-purple-500/20
                            blur-[160px] opacity-40 animate-auroraWaveSlow"></div>
            <div className="absolute w-[190%] h-[190%] -bottom-40 -right-40 sm:w-[160%] sm:h-[160%]
                            bg-gradient-to-tl from-pink-500/20 via-orange-400/15 to-yellow-500/20
                            blur-[150px] opacity-35 animate-auroraWaveSlow delay-1200"></div>
          </div>
        
          {/* Glow Classes */}
          <style>
            {`
              .glow-cyan { --glow-shadow: 0 0 70px -10px rgba(0,255,255,0.45); --glow-hover: 0 0 120px -5px rgba(0,255,255,0.9); --glow-border: rgba(0,255,255,0.35); }
              .glow-magenta { --glow-shadow: 0 0 70px -10px rgba(255,0,200,0.45); --glow-hover: 0 0 120px -5px rgba(255,0,220,0.9); --glow-border: rgba(255,0,200,0.35); }
              .glow-emerald { --glow-shadow: 0 0 70px -10px rgba(0,255,150,0.45); --glow-hover: 0 0 120px -5px rgba(0,255,150,0.9); --glow-border: rgba(0,255,150,0.35); }
              .glow-gold { --glow-shadow: 0 0 70px -10px rgba(255,200,0,0.45); --glow-hover: 0 0 120px -5px rgba(255,200,0,0.95); --glow-border: rgba(255,200,0,0.45); }
              .glow-pink { --glow-shadow: 0 0 70px -10px rgba(255,30,190,0.45); --glow-hover: 0 0 120px -5px rgba(255,30,200,0.95); --glow-border: rgba(255,30,190,0.45); }
            `}
          </style>
            
          {/* Skills Grid */}
          <div className="relative z-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 sm:gap-12 max-w-7xl px-4 sm:px-6 w-full">
            
            {skillsrates.map((skill, i) => (
              <div key={i}
                className={`group relative bg-white/5 backdrop-blur-2xl border border-white/10 
                            p-6 sm:p-8 rounded-3xl transition-all duration-700 overflow-hidden 
                            glow-${skill.glow}`}
                style={{ boxShadow: "var(--glow-shadow)" }}
                onMouseEnter={(e) => e.currentTarget.style.boxShadow = "var(--glow-hover)"}
                onMouseLeave={(e) => e.currentTarget.style.boxShadow = "var(--glow-shadow)"}
              >
                
                {/* Glow Overlay */}
                <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-all duration-700"
                  style={{
                    background: `radial-gradient(circle, var(--glow-border), transparent 70%)`,
                    filter: "blur(40px)"
                  }}>
                </div>
                
                <div className="relative z-10 text-center flex flex-col gap-3">
                
                  {/* Progress Circle */}
                  <div className="relative w-20 h-20 sm:w-28 sm:h-28 mx-auto mb-3">
                    <svg className="w-full h-full rotate-[-90deg]">
                      <circle cx="50%" cy="50%" r="44%" stroke="rgba(255,255,255,0.1)" strokeWidth="6" fill="none" />
                      <circle cx="50%" cy="50%" r="44%" 
                        stroke={`url(#grad${i})`} strokeWidth="6" fill="none"
                        strokeDasharray="276"
                        strokeDashoffset={`${276 - (parseInt(skill.metric) / 100) * 276}`}
                        strokeLinecap="round"
                      />
                      <defs>
                        <linearGradient id={`grad${i}`} x1="0%" y1="0%" x2="100%" y2="100%">
                          <stop offset="0%" stopColor={skill.color.split(" ")[0].replace("from-", "#")} />
                          <stop offset="50%" stopColor={skill.color.split(" ")[1].replace("via-", "#")} />
                          <stop offset="100%" stopColor={skill.color.split(" ")[2].replace("to-", "#")} />
                        </linearGradient>
                      </defs>
                    </svg>
                
                    <div className="absolute inset-0 flex items-center justify-center">
                      <h1 className="text-xl sm:text-3xl font-black text-white">{skill.metric}</h1>
                    </div>
                  </div>
                
                  <p className="text-lg sm:text-xl text-gray-200 font-semibold">{skill.name}</p>
                
                  <p className="text-gray-400 text-xs sm:text-sm leading-relaxed px-2">
                    {skill.description}
                  </p>
                
                  {/* Orbit Icons */}
                  <div className="relative w-full h-12 sm:h-16 mt-2 flex justify-center items-center">
                    {skill.icons.map((icon, idx) => (
                      <img
                        key={idx}
                        src={icon}
                        alt={skill.name}
                        className={`w-8 h-8 sm:w-10 sm:h-10 absolute animate-orbit${idx}`}
                      />
                    ))}
                  </div>
                  
                </div>
              </div>
            ))}
        
          </div>
          
          {/* Keyframes */}
          <style>{`
            @keyframes particleFloat {
              0% { transform: translateY(0px); opacity: 0.3; }
              50% { transform: translateY(-20px); opacity: 0.6; }
              100% { transform: translateY(0px); opacity: 0.3; }
            }
            @keyframes auroraWaveSlow {
              0% { transform: translate(0,0) rotate(0deg); }
              50% { transform: translate(30px,-15px) rotate(5deg); }
              100% { transform: translate(0,0) rotate(0deg); }
            }
          
            /* Orbit animations scaled for mobile */
            @keyframes orbit0 {
              0% { transform: rotate(0deg) translateX(30px) rotate(0deg); }
              100% { transform: rotate(360deg) translateX(30px) rotate(-360deg); }
            }
            @keyframes orbit1 {
              0% { transform: rotate(120deg) translateX(30px) rotate(-120deg); }
              100% { transform: rotate(480deg) translateX(30px) rotate(-480deg); }
            }
            @keyframes orbit2 {
              0% { transform: rotate(240deg) translateX(30px) rotate(-240deg); }
              100% { transform: rotate(600deg) translateX(30px) rotate(-600deg); }
            }
          
            .animate-orbit0 { animation: orbit0 6s linear infinite; }
            .animate-orbit1 { animation: orbit1 6s linear infinite; }
            .animate-orbit2 { animation: orbit2 6s linear infinite; }
          `}</style>
        
        </section>

      </main>
    );

}