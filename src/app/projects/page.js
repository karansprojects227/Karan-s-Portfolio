import React from 'react'

export default function About() {

    return (
      <main className="relative bg-gray-900 min-h-screen text-white font-sans">
      
        {/* prject 001 */}
        <section
          id="project-1"
          className="min-h-screen flex flex-col justify-center items-center py-16 px-4 sm:py-0 sm:px-6 relative overflow-hidden bg-gradient-to-b from-black via-[#0a0a0a] to-black"
        >

          {/* Background Layers */}
          <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
            <div className="absolute w-[150%] h-[150%] top-[-20%] left-[-20%] bg-gradient-to-r from-[#00eaff0a] via-[#7b00ff15] to-[#00eaff0a] blur-[120px] opacity-60 animate-auroraWave"></div>
            <div className="absolute w-[140%] h-[140%] bottom-[-25%] right-[-25%] bg-gradient-to-tl from-[#7b00ff10] via-[#00eaff08] to-transparent blur-[100px] opacity-70 animate-auroraWaveSlow"></div>
            <div className="absolute w-[120%] h-[120%] bg-gradient-to-tr from-cyan-400/5 via-purple-400/3 to-transparent blur-[120px] rotate-[8deg]"></div>
            <div className="absolute w-[110%] h-[110%] bg-gradient-to-bl from-purple-400/6 via-cyan-400/2 to-transparent blur-[100px] rotate-[-6deg]"></div>
          </div>

          {/* Project Title */}
          <h2
            className="text-[12vw] sm:text-[9vw] md:text-[5vw] font-extrabold mb-6 sm:mb-8 text-center select-none"
            style={{
              fontFamily: "Poppins, Inter, sans-serif",
              color: "transparent",
              WebkitBackgroundClip: "text",
              backgroundImage:
                "linear-gradient(135deg, rgba(255,255,255,0.9), rgba(180,220,255,0.55), rgba(120,120,120,0.4), rgba(255,255,255,0.95))",
              WebkitTextStroke: "1.5px rgba(255,255,255,0.2)",
              textShadow:
                "0 0 28px rgba(200,220,255,0.25), 0 0 48px rgba(140,180,255,0.16), inset 0 0 30px rgba(255,255,255,0.22)",
              animation: "glassPulse 4s ease-in-out infinite",
            }}
          >
            CFO CRAFT 001
          </h2>
          
          {/* Project Card */}
          <div className="relative max-w-5xl w-full flex flex-col md:flex-row items-center gap-8">

            {/* Media */}
            <div className="w-full md:w-1/2 rounded-3xl overflow-hidden shadow-xl group bg-amber-400 mb-6 md:mb-0"
                 style={{
                   background: "linear-gradient(145deg, rgba(255,255,255,0.06), rgba(255,255,255,0.02))",
                   border: "1px solid rgba(255,255,255,0.08)",
                   backdropFilter: "blur(8px)",
                 }}
            >
              <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-all duration-500"
                   style={{
                     background: "radial-gradient(circle, rgba(255,255,255,0.2), transparent 60%)",
                     filter: "blur(25px)",
                   }}
              ></div>

              <img
                src="/cfocraft.png"
                alt="Project One Screenshot"
                className="w-full h-full object-cover rounded-3xl"
              />
            </div>
                 
            {/* Text */}
            <div className="flex-1 flex flex-col gap-4">
              <p className="text-gray-300 text-base sm:text-lg md:text-xl leading-relaxed">
                <span className="font-bold text-white/95">CFO CRAFT 001</span> is a consultancy services web, clean and 
                professional web application built using frontend and min backend fundamentals. Designed with a 
                <span className="text-cyan-400 font-semibold"> minimal, immersive UI</span> and 
                <span className="text-purple-400 font-semibold"> meaningful user experience</span>, focusing on clarity, simplicity, and smooth interactions.
              </p>
                 
              <ul className="list-disc list-inside text-gray-300 space-y-1 text-sm sm:text-base">
                <li>Clean and intuitive UI with professional layout</li>
                <li>Minimal animations for distraction-free experience</li>
                <li>Fully responsive design optimized for all screens</li>
                <li>Fast-loading, performance-focused architecture</li>
              </ul>
                 
              <p className="text-gray-400 text-sm mt-2">
                <span className="font-semibold text-white/90">Tech Stack:</span> HTML, CSS, JavaScript, PHP
              </p>
                 
              <a
                target="_blank"
                href="https://cfocraft.com/"
                className="mt-4 inline-block px-6 py-3 rounded-2xl border-2 border-cyan-400 text-cyan-400 font-semibold text-lg hover:bg-cyan-400/10 transition-all duration-300 text-center"
              >
                View Live
              </a>
            </div>
                 
          </div>
                 
          {/* Keyframes */}
          <style>{`
            @keyframes glassPulse {
              0% {
                text-shadow:
                  0 0 15px rgba(200,220,255,0.2),
                  0 0 28px rgba(170,200,255,0.12),
                  inset 0 0 18px rgba(255,255,255,0.1);
              }
              100% {
                text-shadow:
                  0 0 24px rgba(200,220,255,0.25),
                  0 0 38px rgba(170,200,255,0.18),
                  inset 0 0 26px rgba(255,255,255,0.25);
              }
            }
          
            @keyframes auroraWave {
              0% { transform: translateX(0) translateY(0) rotate(0deg); }
              50% { transform: translateX(40px) translateY(-30px) rotate(8deg); }
              100% { transform: translateX(0) translateY(0) rotate(0deg); }
            }
          
            @keyframes auroraWaveSlow {
              0% { transform: translateX(0) translateY(0) rotate(0deg); }
              50% { transform: translateX(-30px) translateY(20px) rotate(-6deg); }
              100% { transform: translateX(0) translateY(0) rotate(0deg); }
            }
          `}</style>

        </section>

        {/* prject 002 */}
        <section
          id="project-1"
          className="min-h-screen flex flex-col justify-center items-center pb-16 sm:pb-0 px-4 sm:px-6 relative overflow-hidden bg-gradient-to-b from-black via-[#0a0a0a] to-black"
        >

          {/* Background Layers */}
          <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
            <div className="absolute w-[150%] h-[150%] top-[-20%] left-[-20%] bg-gradient-to-r from-[#00eaff0a] via-[#7b00ff15] to-[#00eaff0a] blur-[120px] opacity-60 animate-auroraWave"></div>
            <div className="absolute w-[140%] h-[140%] bottom-[-25%] right-[-25%] bg-gradient-to-tl from-[#7b00ff10] via-[#00eaff08] to-transparent blur-[100px] opacity-70 animate-auroraWaveSlow"></div>
            <div className="absolute w-[120%] h-[120%] bg-gradient-to-tr from-cyan-400/5 via-purple-400/3 to-transparent blur-[120px] rotate-[8deg]"></div>
            <div className="absolute w-[110%] h-[110%] bg-gradient-to-bl from-purple-400/6 via-cyan-400/2 to-transparent blur-[100px] rotate-[-6deg]"></div>
          </div>

          {/* Project Title */}
          <h2
            className="text-[12vw] sm:text-[9vw] md:text-[5vw] font-extrabold mb-6 sm:mb-8 text-center select-none"
            style={{
              fontFamily: "Poppins, Inter, sans-serif",
              color: "transparent",
              WebkitBackgroundClip: "text",
              backgroundImage:
                "linear-gradient(135deg, rgba(255,255,255,0.9), rgba(180,220,255,0.55), rgba(120,120,120,0.4), rgba(255,255,255,0.95))",
              WebkitTextStroke: "1.5px rgba(255,255,255,0.2)",
              textShadow:
                "0 0 28px rgba(200,220,255,0.25), 0 0 48px rgba(140,180,255,0.16), inset 0 0 30px rgba(255,255,255,0.22)",
              animation: "glassPulse 4s ease-in-out infinite",
            }}
          >
            CFO Sales Dashboard 002
          </h2>
          
          {/* Project Card */}
          <div className="relative max-w-5xl w-full flex flex-col md:flex-row items-center gap-8">

            {/* Media */}
            <div className="w-full md:w-1/2 rounded-3xl overflow-hidden shadow-xl group bg-amber-400 mb-6 md:mb-0"
                 style={{
                   background: "linear-gradient(145deg, rgba(255,255,255,0.06), rgba(255,255,255,0.02))",
                   border: "1px solid rgba(255,255,255,0.08)",
                   backdropFilter: "blur(8px)",
                 }}
            >
              <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-all duration-500"
                   style={{
                     background: "radial-gradient(circle, rgba(255,255,255,0.2), transparent 60%)",
                     filter: "blur(25px)",
                   }}
              ></div>

              <img
                src="/sales-dashboard.png"
                alt="Project Screenshot"
                className="w-full h-full object-cover rounded-3xl"
              />
            </div>
                 
            {/* Text */}
            <div className="flex-1 flex flex-col gap-4">
              <p className="text-gray-300 text-base sm:text-lg md:text-xl leading-relaxed">
                <span className="font-bold text-white/95">CFO Sales Dashboard 002</span> is an
                enterprise-grade analytics platform built with a modern MERN architecture and
                optimized for real-world business scalability. It delivers a clean, minimal, and
                highly responsive <span className="text-cyan-400 font-semibold">UI/UX</span>,
                backed by a powerful backend engineered for accuracy, automation, and security.
              </p>
                 
              <ul className="list-disc list-inside text-gray-300 space-y-1 text-sm sm:text-base">
                <li>Auto-processed sales data with intelligent insights</li>
                <li>Role-based authentication with Google Login & JWT verification</li>
                <li>Interactive dashboards with charts, KPIs & real-time refresh</li>
                <li>Industry-standard folder structure with scalable API architecture</li>
                <li>Minimal UI, smooth animations & pixel-perfect responsiveness</li>
              </ul>
                 
              <p className="text-gray-400 text-sm mt-2">
                <span className="font-semibold text-white/90">Tech Stack:</span> Next.js, MongoDB, Node.js, Express, TailwindCSS, JWT, Google OAuth
              </p>
                 
              <a
                target="_blank"
                href="https://cfocraft.vercel.app/"
                className="mt-4 inline-block px-6 py-3 rounded-2xl border-2 border-cyan-400 text-cyan-400 font-semibold text-lg hover:bg-cyan-400/10 transition-all duration-300 text-center"
              >
                View Live
              </a>
            </div>
                 
          </div>
                 
          {/* Keyframes */}
          <style>{`
            @keyframes glassPulse {
              0% { text-shadow: 0 0 15px rgba(200,220,255,0.2),0 0 28px rgba(170,200,255,0.12),inset 0 0 18px rgba(255,255,255,0.1); }
              100% { text-shadow: 0 0 24px rgba(200,220,255,0.25),0 0 38px rgba(170,200,255,0.18),inset 0 0 26px rgba(255,255,255,0.25); }
            }
            @keyframes auroraWave {
              0% { transform: translateX(0) translateY(0) rotate(0deg); }
              50% { transform: translateX(40px) translateY(-30px) rotate(8deg); }
              100% { transform: translateX(0) translateY(0) rotate(0deg); }
            }
            @keyframes auroraWaveSlow {
              0% { transform: translateX(0) translateY(0) rotate(0deg); }
              50% { transform: translateX(-30px) translateY(20px) rotate(-6deg); }
              100% { transform: translateX(0) translateY(0) rotate(0deg); }
            }
          `}</style>

        </section>

        {/* prject 003 */}
        <section
          id="project-1"
          className="min-h-screen flex flex-col justify-center items-center px-4 sm:px-6 relative overflow-hidden bg-gradient-to-b from-black via-[#0a0a0a] to-black"
        >

          {/* Background Layers */}
          <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
            <div className="absolute w-[150%] h-[150%] top-[-20%] left-[-20%] bg-gradient-to-r from-[#00eaff0a] via-[#7b00ff15] to-[#00eaff0a] blur-[120px] opacity-60 animate-auroraWave"></div>
            <div className="absolute w-[140%] h-[140%] bottom-[-25%] right-[-25%] bg-gradient-to-tl from-[#7b00ff10] via-[#00eaff08] to-transparent blur-[100px] opacity-70 animate-auroraWaveSlow"></div>
            <div className="absolute w-[120%] h-[120%] bg-gradient-to-tr from-cyan-400/5 via-purple-400/3 to-transparent blur-[120px] rotate-[8deg]"></div>
            <div className="absolute w-[110%] h-[110%] bg-gradient-to-bl from-purple-400/6 via-cyan-400/2 to-transparent blur-[100px] rotate-[-6deg]"></div>
          </div>

          {/* Project Title */}
          <h2
            className="text-[12vw] sm:text-[9vw] md:text-[5vw] font-extrabold mb-6 sm:mb-8 text-center select-none"
            style={{
              fontFamily: "Poppins, Inter, sans-serif",
              color: "transparent",
              WebkitBackgroundClip: "text",
              backgroundImage:
                "linear-gradient(135deg, rgba(255,255,255,0.9), rgba(180,220,255,0.55), rgba(120,120,120,0.4), rgba(255,255,255,0.95))",
              WebkitTextStroke: "1.5px rgba(255,255,255,0.2)",
              textShadow:
                "0 0 28px rgba(200,220,255,0.25), 0 0 48px rgba(140,180,255,0.16), inset 0 0 30px rgba(255,255,255,0.22)",
              animation: "glassPulse 4s ease-in-out infinite",
            }}
          >
            Portfolio 003
          </h2>
          
          {/* Project Card */}
          <div className="relative max-w-5xl w-full flex flex-col md:flex-row items-center gap-8">

            {/* Media */}
            <div className="w-full md:w-1/2 rounded-3xl overflow-hidden shadow-xl group bg-amber-400 mb-6 md:mb-0"
                 style={{
                   background: "linear-gradient(145deg, rgba(255,255,255,0.06), rgba(255,255,255,0.02))",
                   border: "1px solid rgba(255,255,255,0.08)",
                   backdropFilter: "blur(8px)",
                 }}
            >
              <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-all duration-500"
                   style={{
                     background: "radial-gradient(circle, rgba(255,255,255,0.2), transparent 60%)",
                     filter: "blur(25px)",
                   }}
              ></div>

              <img
                src="/karan-portfolio.png"
                alt="Portfolio Screenshot"
                className="w-full h-full object-cover rounded-3xl"
              />
            </div>
                 
            {/* Text */}
            <div className="flex-1 flex flex-col gap-4">
              <p className="text-gray-300 text-base sm:text-lg md:text-xl leading-relaxed">
                <span className="font-bold text-white/95">Portfolio 003</span> is my personal
                digital identity — a fully crafted platform that represents who I am, what I build,
                and the level of experience I deliver. Designed with a minimal, immersive
                <span className="text-cyan-400 font-semibold"> UI/UX vision</span>, the portfolio
                highlights my journey, projects, creativity, and capability to solve
                <span className="text-purple-400 font-semibold"> real-world problems</span> with
                clean engineering and impactful design.
              </p>
                 
              <ul className="list-disc list-inside text-gray-300 space-y-1 text-sm sm:text-base">
                <li>Modern, client-focused UI/UX built with precision</li>
                <li>Smooth micro-interactions & minimal animations</li>
                <li>Experience, projects, timeline & vision showcased beautifully</li>
                <li>Fully responsive layout designed for all screens</li>
                <li>Clean structure with professional presentation</li>
              </ul>
                 
              <p className="text-gray-400 text-sm mt-2">
                <span className="font-semibold text-white/90">Tech Stack:</span> Next.js, TailwindCSS, Framer Motion
              </p>
                 
              <a
                target="_blank"
                href="#"
                className="mt-4 inline-block px-6 py-3 rounded-2xl border-2 border-cyan-400 text-cyan-400 font-semibold text-lg hover:bg-cyan-400/10 transition-all duration-300 text-center"
              >
                View Live
              </a>
            </div>
                 
          </div>
                 
          {/* Keyframes */}
          <style>{`
            @keyframes glassPulse {
              0% { text-shadow: 0 0 15px rgba(200,220,255,0.2),0 0 28px rgba(170,200,255,0.12),inset 0 0 18px rgba(255,255,255,0.1); }
              100% { text-shadow: 0 0 24px rgba(200,220,255,0.25),0 0 38px rgba(170,200,255,0.18),inset 0 0 26px rgba(255,255,255,0.25); }
            }
            @keyframes auroraWave {
              0% { transform: translateX(0) translateY(0) rotate(0deg); }
              50% { transform: translateX(40px) translateY(-30px) rotate(8deg); }
              100% { transform: translateX(0) translateY(0) rotate(0deg); }
            }
            @keyframes auroraWaveSlow {
              0% { transform: translateX(0) translateY(0) rotate(0deg); }
              50% { transform: translateX(-30px) translateY(20px) rotate(-6deg); }
              100% { transform: translateX(0) translateY(0) rotate(0deg); }
            }
          `}</style>

        </section>

        {/* IMMERSIVE FULLSCREEN PROJECT METRICS */}
        <section className="relative h-auto py-10 sm:py-0 sm:min-h-screen w-full flex flex-col items-center justify-center overflow-hidden bg-[#05060a] px-4 sm:px-10">

          {/* Floating Micro Particles */}
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute w-[6px] h-[6px] sm:w-[10px] sm:h-[10px] bg-white/50 rounded-full blur-[1.5px] sm:blur-[2px]"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                animation: `atomFloat ${3 + Math.random() * 4}s ease-in-out infinite`,
                animationDelay: `${Math.random() * 4}s`,
              }}
            ></div>
          ))}

          {/* Deep Nebula Gradient Field */}
          <div className="absolute inset-0 -z-10">
            <div className="absolute w-[160%] h-[160%] -top-52 -left-40 bg-gradient-to-br from-[#00eaff15] via-[#0077ff10] to-transparent blur-[150px] opacity-50 rotate-[12deg]"></div>
            <div className="absolute w-[150%] h-[150%] -bottom-52 -right-40 bg-gradient-to-tl from-[#c400ff18] via-[#6600ff10] to-transparent blur-[160px] opacity-40 rotate-[-14deg]"></div>
            <div className="absolute w-[180%] h-[180%] top-0 left-1/2 -translate-x-1/2 bg-gradient-to-b from-white/5 via-transparent to-transparent blur-[200px] opacity-25"></div>
          </div>
        
          {/* Floating Aurora Waves */}
          <div className="absolute inset-0 -z-[5] overflow-hidden">
            <div className="absolute w-[200%] h-[200%] -top-1/3 left-[-30%] bg-[radial-gradient(ellipse_at_center,_rgba(0,255,255,0.12),_transparent_60%)] animate-auroraShift"></div>
            <div className="absolute w-[180%] h-[180%] bottom-[-35%] right-[-25%] bg-[radial-gradient(circle,_rgba(150,0,255,0.10),_transparent_65%)] animate-auroraShiftAlt"></div>
          </div>
        
          {/* Floating Light Orbs */}
          {[...Array(6)].map((_, i) => (
            <div
              key={i}
              className="absolute w-20 sm:w-32 h-20 sm:h-32 rounded-full bg-white/30 blur-2xl sm:blur-3xl opacity-30 sm:opacity-40"
              style={{
                left: `${10 + i * 14}%`,
                top: `${10 + (i % 3) * 25}%`,
                animation: `floatY 9s ease-in-out ${i}s infinite`
              }}
            />
          ))}

          {/* Metrics Cards */}
          <div className="relative z-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 sm:gap-12 w-full max-w-7xl">
            {[
              { num: "12+", title: "Innovative Web Projects" },
              { num: "7+", title: "3D & Animated Experiences" },
              { num: "4K", title: "Ultra HD Design Experiments" },
            ].map((item, i) => (
              <div
                key={i}
                className="group relative backdrop-blur-2xl p-8 sm:p-12 rounded-3xl border border-white/10 bg-white/5 hover:bg-white/10 transition-all duration-700 shadow-[0_0_60px_-12px_rgba(0,200,255,0.4)] hover:shadow-[0_0_95px_-10px_rgba(0,200,255,0.8)]"
              >
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-gradient-to-b from-cyan-300/20 to-transparent transition-all duration-700 rounded-3xl"></div>
            
                <div className="relative z-10 text-center">
                  <h1 className="text-4xl sm:text-6xl md:text-7xl font-black text-transparent bg-clip-text bg-gradient-to-br from-cyan-300 to-blue-400 drop-shadow-xl transform group-hover:scale-105 sm:group-hover:scale-110 transition-all duration-700">
                    {item.num}
                  </h1>
                  <p className="mt-3 sm:mt-4 text-lg sm:text-xl md:text-2xl text-gray-200 tracking-wide group-hover:text-white transition-colors duration-500">
                    {item.title}
                  </p>
                </div>
              </div>
            ))}
          </div>
          
        </section>
          
      </main>
    );

}