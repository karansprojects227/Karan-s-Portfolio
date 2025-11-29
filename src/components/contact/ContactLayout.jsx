"use client";

import React from 'react'
import { FaGithub, FaLinkedin , FaEnvelope } from "react-icons/fa";
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

    return (
      <main className="relative bg-gray-900 min-h-screen text-white font-sans">

        {/* contact main section */}
        <section
          id="contact"
          className="min-h-screen w-full px-4 sm:px-6 py-12 sm:py-8 flex flex-col justify-center items-center relative bg-gradient-to-b from-[#020202] via-[#05060a] to-[#0a0a0a] overflow-hidden"
        >
          {/* Dark Nebula BG Layers */}
          <div className="absolute inset-0 pointer-events-none">
            
            {/* Floating Glow Clouds */}
            <div className="absolute -top-10 -left-10 w-[50vw] h-[50vw] sm:w-[40vw] sm:h-[40vw] bg-purple-600/20 blur-[120px] animate-pulse"></div>
            <div className="absolute top-20 right-0 w-[45vw] h-[45vw] sm:w-[35vw] sm:h-[35vw] bg-cyan-400/20 blur-[120px] animate-pulse delay-500"></div>
            
            {/* Subtle holographic wave */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent animate-[wave_15s_linear_infinite] opacity-15 sm:opacity-20"></div>
            
            {/* Micro Stars */}
            {[...Array(30)].map((_, i) => (
              <div
                key={i}
                className="absolute w-[3px] h-[3px] sm:w-[4px] sm:h-[4px] bg-white/30 rounded-full blur-[1px] animate-[twinkle_3s_ease-in-out_infinite]"
                style={{
                  top: `${Math.random() * 100}%`,
                  left: `${Math.random() * 100}%`,
                  animationDelay: `${i * 0.15}s`
                }}
              ></div>
            ))}
          </div>
          
          {/* Main Grid */}
          <div className="w-full max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-10 sm:gap-12 items-start relative z-10">
          
            {/* LEFT PANEL */}
            <div className="flex flex-col justify-start gap-4 sm:gap-6">
              <p className={`${dancing.className} text-5xl sm:text-6xl tracking-wide text-white animate-fadeIn font-semibold leading-tight drop-shadow-xl select-none`}>
                Nice to{" "}
                <span className="bg-gradient-to-br from-cyan-400 to-purple-500 bg-clip-text text-transparent drop-shadow-[0_0_20px_rgba(56,189,248,0.65)] animate-waveText">
                  meet —
                </span>
              </p>
          
              <p className={`${cinzel.className} text-gray-300 text-base sm:text-lg max-w-full sm:max-w-lg leading-relaxed animate-fadeIn delay-200`}>
                Located in Mumbai — Open for collaboration on{" "}
                <span className="bg-gradient-to-br from-cyan-400 to-purple-500 bg-clip-text text-transparent font-semibold">visionary apps</span>,{" "}
                <span className="bg-gradient-to-br from-cyan-400 to-purple-500 bg-clip-text text-transparent font-semibold">immersive web experiences</span>, and{" "}
                <span className="bg-gradient-to-br from-cyan-400 to-purple-500 bg-clip-text text-transparent font-semibold">innovative builds</span>.
              </p>
          
              <p className={`${cinzel.className} text-gray-300 text-base sm:text-lg leading-relaxed animate-fadeIn delay-400`}>
                Let’s build something{" "}
                <span className="bg-gradient-to-br from-cyan-400 to-purple-500 bg-clip-text text-transparent font-semibold">meaningful</span>.
              </p>
          
              {/* SOCIAL ICONS */}
              <div className="flex gap-4 sm:gap-6 mt-3">
                {[
                  { name: "LinkedIn", icon: <FaLinkedin size={24} />, link: "https://www.linkedin.com/in/karan-kumar-9b84a8345/", hover: "hover:bg-blue-600" },
                  { name: "GitHub", icon: <FaGithub size={24} />, link: "https://github.com/karansprojects227", hover: "hover:bg-gray-800" },
                  { name: "Email", icon: <FaEnvelope size={24} />, link: "mailto:karan@example.com", hover: "hover:bg-red-600" }
                ].map(item => (
                  <a
                    key={item.name}
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`text-white p-2 sm:p-3 rounded-full transition-all duration-300 ${item.hover} hover:text-white hover:scale-110 hover:shadow-xl bg-white/10`}
                  >
                    {item.icon}
                  </a>
                ))}
              </div>
              
              {/* Resume Link */}
              <a
                href="/Karan_Kumar_Resume.pdf"
                download
                className="hover-playwrite inline-block w-fit text-gray-300 text-base sm:text-lg underline underline-offset-4 hover:text-white transition-all font-[Poppins] animate-fadeIn delay-600"
              >
                View My Resume
              </a>
              
              {/* copy right */}
              <p className="text-gray-500 text-sm tracking-wide font-[Inter] mt-6 sm:mt-8 hidden sm:block">
                © {new Date().getFullYear()} Karan Kumar — All Rights Reserved.
              </p>
            </div>
              
            {/* RIGHT PANEL – FORM */}
            <form className="relative bg-white/10 border border-white/20 rounded-2xl p-4 sm:p-8 w-full sm:w-auto flex flex-col gap-4 sm:gap-6 backdrop-blur-xl shadow-[0_0_40px_rgba(255,255,255,0.08)] animate-fadeIn">
              <h3 className={`${dancing.className} text-2xl sm:text-3xl font-semibold mb-2 text-white`}>
                <span className="bg-gradient-to-br from-cyan-400 to-purple-500 bg-clip-text text-transparent drop-shadow-lg animate-waveText">
                  Connect
                </span>
              </h3>
              
              <input type="text" placeholder="Your Name" className={`${dancing.className} p-3 sm:p-4 rounded-lg bg-white/20 border border-white/30 text-white placeholder:text-white/40 outline-none transition-all`} />
              <input type="email" placeholder="Your Email" className={`${dancing.className} p-3 sm:p-4 rounded-lg bg-white/20 border border-white/30 text-white placeholder:text-white/40 outline-none transition-all`} />
              <textarea rows="4" placeholder="Your Message" className={`${dancing.className} resize-none p-3 sm:p-4 rounded-lg bg-white/20 border border-white/30 text-white placeholder:text-white/40 outline-none transition-all`} />
              
              <button type="submit" className={`${permanent.className} px-4 sm:px-6 py-2 sm:py-3 text-white rounded-lg bg-white/20 hover:bg-white/30 border border-white/30 transition-all tracking-wide text-base sm:text-xl`}>
                Send Message
              </button>
            </form>

            {/* copy right */}
            <div className="relative w-full block sm:hidden">
              <p className="text-gray-500 text-xs font-[Inter] absolute w-full -bottom-8 text-center left-1/2 transform -translate-x-1/2 whitespace-nowrap">
                © {new Date().getFullYear()} Karan Kumar — All Rights Reserved.
              </p>
            </div>
              
          </div>
              
          {/* ANIMATIONS */}
          <style jsx>{`
            @keyframes wave {
              0% { transform: translateX(0) translateY(0); }
              50% { transform: translateX(15px) translateY(8px); }
              100% { transform: translateX(0) translateY(0); }
            }
            @keyframes twinkle {
              0%, 100% { opacity: .3; }
              50% { opacity: 1; }
            }
            @keyframes fadeIn {
              0% { opacity: 0; transform: translateY(20px); }
              100% { opacity: 1; transform: translateY(0); }
            }
            @keyframes waveText {
              0%, 100% { transform: translateY(0); }
              50% { transform: translateY(-5px); }
            }
          `}</style>
        </section>

      </main>
    );

}
