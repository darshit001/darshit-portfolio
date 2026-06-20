"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function LoadingScreen({ onComplete }: { onComplete: () => void }) {
  const [progress, setProgress] = useState(0);
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setIsReady(true);
          return 100;
        }
        return prev + Math.floor(Math.random() * 15) + 2;
      });
    }, 100);
    
    return () => clearInterval(interval);
  }, []);

  const handleLaunch = () => {
    if (isReady) {
      window.dispatchEvent(new CustomEvent('play-hero-video'));
      onComplete();
    }
  };

  return (
    <motion.div
      className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-midnight text-text overflow-hidden"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, scale: 1.05, filter: "blur(20px)" }}
      transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
    >
      {/* Dynamic Background Noise/Grid */}
      <div className="absolute inset-0 opacity-20 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:40px_40px]" />
      
      <div className="relative flex flex-col items-center z-10">
        {/* Liquid floating circles */}
        <motion.div 
          className="absolute inset-0 w-40 h-40 border-[2px] border-primary/50 bg-gradient-to-br from-primary/20 to-secondary/20 backdrop-blur-md mix-blend-screen shadow-[0_0_50px_rgba(255,42,133,0.4)]"
          animate={{ 
            rotate: 360, 
            borderRadius: ["60% 40% 30% 70% / 60% 30% 70% 40%", "30% 60% 70% 40% / 50% 60% 30% 60%", "60% 40% 30% 70% / 60% 30% 70% 40%"] 
          }}
          transition={{ 
            rotate: { repeat: Infinity, duration: 8, ease: "linear" }, 
            borderRadius: { repeat: Infinity, duration: 4, ease: "easeInOut" } 
          }}
        />
        <motion.div 
          className="absolute inset-0 w-40 h-40 border-[2px] border-secondary/50 bg-gradient-to-tr from-secondary/10 to-primary/10 backdrop-blur-md mix-blend-screen shadow-[0_0_30px_rgba(255,126,179,0.3)]"
          animate={{ 
            rotate: -360, 
            borderRadius: ["40% 60% 70% 30% / 40% 50% 60% 50%", "60% 40% 30% 70% / 50% 60% 30% 60%", "40% 60% 70% 30% / 40% 50% 60% 50%"] 
          }}
          transition={{ 
            rotate: { repeat: Infinity, duration: 10, ease: "linear" }, 
            borderRadius: { repeat: Infinity, duration: 5, ease: "easeInOut" } 
          }}
        />
        
        <div className="w-40 h-40 flex items-center justify-center relative z-10">
          <motion.div 
            className="text-5xl font-extrabold tracking-tighter flex items-center drop-shadow-2xl"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            D<span className="text-primary">R</span>
          </motion.div>
        </div>
      </div>

      <div className="mt-16 flex flex-col items-center w-72 z-10">
        <div className="flex justify-between w-full mb-3 text-xs font-mono uppercase tracking-[0.2em]">
          <span className="text-gray-500">System Boot</span>
          <span className="text-primary">v1.0.4</span>
        </div>
        
        {/* Complex Progress Bar */}
        <div className="w-full h-[2px] bg-gray-800 relative overflow-hidden">
          <motion.div 
            className="absolute top-0 left-0 h-full bg-primary glow-primary"
            initial={{ width: "0%" }}
            animate={{ width: `${Math.min(progress, 100)}%` }}
            transition={{ type: "tween", ease: "linear", duration: 0.2 }}
          />
        </div>
        
        <div className="mt-4 flex justify-between w-full items-center">
          <div className="text-[10px] font-mono text-gray-500 uppercase tracking-widest h-10 w-64 flex items-center">
            {progress < 30 && "Loading Core Modules..."}
            {progress >= 30 && progress < 70 && "Initializing Neural Net..."}
            {progress >= 70 && progress < 100 && "Establishing UI Overlay..."}
            {progress >= 100 && (
              <motion.button 
                onClick={handleLaunch}
                className="px-8 py-2.5 border border-primary text-primary hover:bg-primary hover:text-midnight transition-colors duration-300 font-bold tracking-[0.3em] uppercase text-xs glow-primary cursor-pointer rounded-sm"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
              >
                ENTER SYSTEM
              </motion.button>
            )}
          </div>
          <div className="text-sm font-mono text-white tracking-widest">
            {Math.min(progress, 100)}%
          </div>
        </div>
      </div>
    </motion.div>
  );
}
