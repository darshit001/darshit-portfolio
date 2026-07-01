"use client";

import { motion } from "framer-motion";
import { ChevronDown, Volume2, VolumeX } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isMuted, setIsMuted] = useState(true);
  
  useEffect(() => {
    let mm = gsap.matchMedia();
    
    // Parallax effect on scroll only for desktop to prevent video lag on mobile
    mm.add("(min-width: 768px)", () => {
      if (containerRef.current) {
        gsap.to(".hero-video-wrapper", {
          yPercent: 30,
          ease: "none",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top top",
            end: "bottom top",
            scrub: true
          }
        });
      }
    });

    // Listen for the custom event from the LoadingScreen button click
    const handlePlayVideo = () => {
      if (videoRef.current) {
        videoRef.current.muted = false;
        setIsMuted(false);
        videoRef.current.currentTime = 0;
        videoRef.current.play().catch(() => {});
      }
    };
    
    window.addEventListener('play-hero-video', handlePlayVideo);
    
    return () => {
      mm.revert();
      window.removeEventListener('play-hero-video', handlePlayVideo);
    };
  }, []);

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
      
      if (isMuted) {
        videoRef.current.play().catch(e => console.error("Audio playback blocked:", e));
      }
    }
  };

  return (
    <section ref={containerRef} className="relative h-screen w-full flex items-end justify-center overflow-hidden pb-16 md:pb-32">
      {/* Background Video */}
      <div className="absolute inset-0 z-0 bg-midnight hero-video-wrapper transform-gpu">
        <video
          ref={videoRef}
          className="absolute inset-0 w-full h-full object-cover opacity-60 scale-105 transform-gpu will-change-transform"
          src="/video.mp4"
          muted={isMuted}
          playsInline
          preload="auto"
          disablePictureInPicture
        />
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-midnight via-midnight/40 to-transparent z-10 pointer-events-none" />
      </div>

      {/* Content */}
      <div className="relative z-20 flex flex-col items-center justify-end text-center px-4 max-w-4xl mx-auto w-full">
        <motion.h1
          initial={{ opacity: 0, scale: 0.9, filter: "blur(10px)" }}
          animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
          transition={{ duration: 1.2, delay: 0.8, ease: "easeOut" }}
          className="text-5xl md:text-7xl font-extrabold tracking-tighter mb-2 text-white drop-shadow-2xl"
        >
          DARSHIT <span className="text-gradient">RADADIYA</span>
        </motion.h1>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.2 }}
          className="text-lg md:text-2xl font-light text-gray-300 mb-3 tracking-wide"
        >
          AI Engineer <span className="text-primary px-2">|</span> Building Real-World AI Solutions 🤖
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.5 }}
          className="text-sm md:text-base font-mono text-gray-400 mb-6 tracking-widest"
        >
          <span className="text-primary">Agentic AI</span>
          <span className="text-gray-600 mx-2">•</span>
          <span className="text-primary">RAG</span>
          <span className="text-gray-600 mx-2">•</span>
          <span className="text-primary">LLMs</span>
          <span className="text-gray-600 mx-2">•</span>
          <span className="text-primary">Voice Agents</span>
          <span className="text-gray-600 mx-2">•</span>
          <span className="text-primary">Automation</span>
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.8 }}
          className="flex flex-col sm:flex-row flex-wrap justify-center gap-4 mt-2"
        >
          <a href="#projects" className="px-6 py-3 rounded-full bg-primary/10 border border-primary/50 text-primary hover:bg-primary hover:text-midnight transition-all duration-300 shadow-[0_0_15px_rgba(0,240,255,0.3)] hover:shadow-[0_0_30px_rgba(0,240,255,0.6)] font-medium tracking-wide text-sm text-center">
            View Projects
          </a>
          
          <a href="#contact" className="px-6 py-3 rounded-full glass border border-white/10 hover:border-secondary/50 hover:bg-secondary/10 transition-all duration-300 text-white font-medium tracking-wide text-sm text-center">
            Contact Me
          </a>

          <a
            href="/resume.pdf"
            download="Darshit_Radadiya_Resume.pdf"
            className="px-6 py-3 rounded-full bg-[#F5E6D3]/10 border border-[#F5E6D3]/30 text-[#F5E6D3] hover:bg-[#F5E6D3] hover:text-[#0a0a0a] transition-all duration-300 font-medium tracking-wide text-sm text-center flex items-center justify-center gap-2 shadow-[0_0_15px_rgba(245,230,211,0.1)] hover:shadow-[0_0_25px_rgba(245,230,211,0.3)]"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
              <polyline points="7 10 12 15 17 10"/>
              <line x1="12" y1="15" x2="12" y2="3"/>
            </svg>
            Download Resume
          </a>
        </motion.div>
      </div>

      {/* Sound Toggle */}
      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 2.5 }}
        onClick={toggleMute}
        className="absolute bottom-10 right-4 md:right-10 z-30 glass p-3 rounded-full border border-white/10 hover:border-primary/50 hover:text-primary transition-colors text-white shadow-[0_0_15px_rgba(255,255,255,0.05)]"
        aria-label="Toggle sound"
      >
        {isMuted ? <VolumeX className="w-5 h-5" /> : <Volume2 className="w-5 h-5 text-primary glow-primary" />}
      </motion.button>



      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 2.5 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center"
      >
        <span className="text-[10px] uppercase tracking-[0.3em] text-gray-500 mb-2 font-mono">Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
        >
          <ChevronDown className="text-primary opacity-70 w-5 h-5" />
        </motion.div>
      </motion.div>
    </section>
  );
}
