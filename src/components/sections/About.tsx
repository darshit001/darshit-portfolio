"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Fingerprint, Activity } from "lucide-react";

export default function About() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const opacityFade = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

  return (
    <section ref={containerRef} className="py-20 md:py-32 px-4 md:px-6 w-full min-h-screen relative overflow-hidden bg-midnight">
      
      {/* Immersive Holographic Environment */}
      <motion.div 
        style={{ y: backgroundY, opacity: opacityFade }} 
        className="absolute inset-0 pointer-events-none z-0"
      >
        <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-primary/10 blur-[150px] rounded-full mix-blend-screen" />
        <div className="absolute bottom-1/3 right-1/4 w-[500px] h-[500px] bg-secondary/10 blur-[120px] rounded-full mix-blend-screen" />
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCI+PHBhdGggZD0iTTAgMGg0MHY0MEgweiIgZmlsbD0ibm9uZSIvPjxwYXRoIGQ9Ik0wIDEwaDQwTTEwIDB2NDAiIHN0cm9rZT0icmdiYSgyNDUsMjMwLDIxMSwwLjAzKSIgc3Ryb2tlLXdpZHRoPSIxIiBmaWxsPSJub25lIi8+PC9zdmc+')] opacity-40" />
      </motion.div>

      <div className="max-w-6xl mx-auto relative z-10">
        
        {/* Header */}
        <div className="mb-20 md:mb-32 text-center">
          <motion.div
            initial={{ opacity: 0, filter: "blur(10px)" }}
            whileInView={{ opacity: 1, filter: "blur(0px)" }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            <span className="text-secondary font-mono text-sm tracking-widest uppercase mb-6 block flex items-center justify-center gap-2">
              <Fingerprint className="w-4 h-4" /> Digital Identity
            </span>
          
          </motion.div>
        </div>

        {/* HUD Identity Interface (Introduction) */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass p-6 md:p-10 lg:p-16 rounded-[3rem] border border-white/10 relative overflow-hidden mb-20 md:mb-32 group"
        >
          <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-primary/50 to-transparent opacity-50" />
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
          
          <div className="flex flex-col lg:flex-row gap-12 items-center lg:items-start relative z-10">
            {/* Identity Column */}
            <div className="flex-1 text-center lg:text-left">
              <div className="text-xs font-mono text-primary uppercase tracking-widest mb-4 inline-block px-3 py-1 bg-primary/10 border border-primary/20 rounded-full">
                About Me
              </div>
              
              <p className="text-gray-400 text-lg leading-relaxed max-w-2xl mx-auto lg:mx-0">
                I&apos;m an AI Engineer and Computer Engineering graduate from LJ University, Ahmedabad. I specialize in building
                intelligent, scalable AI applications using LangChain, LangGraph, RAG pipelines, and agentic systems.
                <br></br>
                I focus on backend development, multi-agent orchestration, and large language model integration — turning complex
                concepts into clean, functional digital products.
                <br></br>
                With expertise spanning from MLOps infrastructure to voice agent development, I build end-to-end AI solutions
                that are production-ready, performant, and impactful.
           </p> </div>
            
            {/* HUD Stats/Focus Column */}
            <div className="w-full lg:w-72 glass p-6 rounded-2xl border border-white/5 relative overflow-hidden shrink-0">
              <div className="absolute inset-0 bg-gradient-to-b from-midnight/80 to-transparent pointer-events-none" />
              <div className="relative z-10 space-y-4">
                <span className="text-xs font-mono text-gray-500 uppercase tracking-widest block mb-6">Core Focus</span>
                {[
                  "Agentic AI Systems",
                  "RAG Architectures",
                  "LangChain & LangGraph",
                  "Multi-Agent Orchestration",
                  "LLM Integration",
                  "Backend Development",
                  "MLOps & Infrastructure",
                  "Voice AI Agents"
                ].map((item, i) => (
                  <div key={item} className="flex items-center gap-3 text-sm font-mono text-gray-300">
                    <Activity className="w-3 h-3 text-secondary" /> {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

  

        {/* Section 3: Multidimensional Mindset */}
        <div className="mb-20 md:mb-32 relative">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCI+PHJlY3Qgd2lkdGg9IjIwIiBoZWlnaHQ9IjIwIiBmaWxsPSJyZ2JhKDI1NSwyNTUsMjU1LDAuMDMpIi8+PHJlY3QgeD0iMjAiIHk9IjIwIiB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIGZpbGw9InJnYmEoMjU1LDI1NSwyNTUsMC4wMykiLz48L3N2Zz4=')] opacity-50 z-0 mask-image:radial-gradient(circle,black,transparent)" />
          
          
        </div>

      </div>
    </section>
  );
}
