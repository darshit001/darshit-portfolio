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
          className="text-lg md:text-2xl font-light text-gray-300 mb-6 tracking-wide"
        >
          AI Engineer <span className="text-primary px-2">|</span> Agentic AI Specialist <span className="text-primary px-2">|</span> Backend Developer
        </motion.h2>

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

      {/* Floating Social Icons */}
      <motion.a 
        href="https://linkedin.com/in/darshit-radadiya-918975230/"
        target="_blank" rel="noopener noreferrer"
        initial={{ top: "20%", left: "15%" }}
        animate={{ 
          x: ["0vw", "30vw", "10vw", "-10vw", "0vw"],
          y: ["0vh", "20vh", "-30vh", "10vh", "0vh"],
          rotate: [0, 10, -5, 8, 0]
        }}
        transition={{ repeat: Infinity, duration: 45, ease: "linear" }}
        className="absolute z-30 w-12 h-12 md:w-16 md:h-16 rounded-full bg-white/5 backdrop-blur-md border border-white/10 flex items-center justify-center hover:bg-white/20 hover:scale-110 transition-all shadow-[0_0_20px_rgba(10,102,194,0.4)]"
        aria-label="LinkedIn"
      >
        <svg viewBox="0 0 24 24" className="w-6 h-6 md:w-8 md:h-8 fill-[#0A66C2]">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
        </svg>
      </motion.a>

      <motion.a 
        href="https://github.com/darshit001"
        target="_blank" rel="noopener noreferrer"
        initial={{ top: "60%", right: "15%" }}
        animate={{ 
          x: ["0vw", "-30vw", "-10vw", "10vw", "0vw"],
          y: ["0vh", "-25vh", "20vh", "-10vh", "0vh"],
          rotate: [0, -15, 10, -5, 0]
        }}
        transition={{ repeat: Infinity, duration: 50, ease: "linear" }}
        className="absolute z-30 w-12 h-12 md:w-16 md:h-16 rounded-full bg-white/5 backdrop-blur-md border border-white/10 flex items-center justify-center hover:bg-white/20 hover:scale-110 transition-all shadow-[0_0_20px_rgba(255,255,255,0.15)]"
        aria-label="GitHub"
      >
        <svg viewBox="0 0 24 24" className="w-6 h-6 md:w-8 md:h-8 fill-white">
          <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
        </svg>
      </motion.a>

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
