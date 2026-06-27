"use client";
import React from "react";

import { motion, useScroll, useTransform } from "framer-motion";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { Briefcase, Network, Code2, BrainCircuit, Workflow, Bot, Mic } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

type ExperienceData = {
  role: string;
  company: string;
  duration: string;
  category: string;
  icon: React.ReactNode;
  description: string;
  highlights: string[];
  tech: string[];
};

const EXPERIENCE: ExperienceData[] = [
  {
    role: "AI Chatbot Development",
    company: "Freelance Client Projects",
    duration: "2024 – Present",
    category: "RAG Systems",
    icon: <BrainCircuit className="w-8 h-8 text-primary" />,
    description: "RAG-based conversational AI with retrieval-augmented generation for context-aware, accurate responses grounded in custom business data.",
    highlights: [
      "Custom RAG pipeline design",
      "Vector database integration",
      "Context-aware response generation",
      "Business data grounding",
      "Multi-turn conversation handling",
      "Production deployment"
    ],
    tech: ["LangChain", "LlamaIndex", "Qdrant", "OpenAI", "FastAPI", "Python"]
  },
  {
    role: "Agentic AI Systems",
    company: "Independent Research & Development",
    duration: "2024 – Present",
    category: "Multi-Agent AI",
    icon: <Workflow className="w-8 h-8 text-secondary" />,
    description: "Multi-agent orchestration with LangGraph — designing autonomous AI agents that reason, plan, and collaborate to solve complex, multi-step tasks.",
    highlights: [
      "Multi-agent orchestration",
      "Autonomous reasoning pipelines",
      "Task planning & decomposition",
      "Agent collaboration frameworks",
      "Tool-use integration",
      "State management systems"
    ],
    tech: ["LangGraph", "LangChain", "OpenAI", "Python", "FastAPI"]
  },
  {
    role: "API & Backend Development",
    company: "Freelance Client Projects",
    duration: "2023 – Present",
    category: "Backend Engineering",
    icon: <Code2 className="w-8 h-8 text-primary" />,
    description: "High-performance, production-ready REST APIs built with FastAPI to serve as robust backends for scalable AI applications.",
    highlights: [
      "REST API architecture",
      "Microservices design",
      "Database optimization",
      "Authentication & security",
      "Performance benchmarking",
      "CI/CD pipeline integration"
    ],
    tech: ["FastAPI", "Django", "Flask", "PostgreSQL", "Docker", "AWS"]
  },
  {
    role: "AI Voice Agent Development",
    company: "Independent Research & Development",
    duration: "2025 – Present",
    category: "Voice AI",
    icon: <Mic className="w-8 h-8 text-secondary" />,
    description: "Intelligent voice-based agents combining real-time speech recognition, LLM reasoning, and natural text-to-speech for seamless automated support.",
    highlights: [
      "Real-time speech recognition",
      "LLM-powered reasoning",
      "Natural text-to-speech",
      "Low-latency audio pipelines",
      "Streaming audio architecture",
      "Production voice agents"
    ],
    tech: ["Python", "Deepgram", "OpenAI", "PyAudio", "FastAPI", "WebSockets"]
  }
];

export default function Experience() {
  const containerRef = useRef<HTMLDivElement>(null);
  const timelineRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const yOffset = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);

  useEffect(() => {
    if (!containerRef.current || !timelineRef.current) return;

    gsap.fromTo(
      ".exp-timeline-line",
      { scaleY: 0 },
      {
        scaleY: 1,
        ease: "none",
        scrollTrigger: {
          trigger: timelineRef.current,
          start: "top center",
          end: "bottom center",
          scrub: 1,
        }
      }
    );
  }, []);

  return (
    <section ref={containerRef} className="py-20 md:py-32 px-4 md:px-6 w-full min-h-screen relative overflow-hidden bg-midnight">
      
      {/* Cinematic Animated Background */}
      <motion.div style={{ y: yOffset }} className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute top-1/4 right-0 w-[800px] h-[800px] bg-secondary/10 blur-[150px] rounded-full mix-blend-screen" />
        <div className="absolute bottom-1/4 left-1/4 w-[600px] h-[600px] bg-primary/10 blur-[120px] rounded-full mix-blend-screen" />
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCI+PHBhdGggZD0iTTAgMGg0MHY0MEgweiIgZmlsbD0ibm9uZSIvPjxwYXRoIGQ9Ik0wIDEwaDQwTTEwIDB2NDAiIHN0cm9rZT0icmdiYSgyNDUsMjMwLDIxMSwwLjAzKSIgc3Ryb2tlLXdpZHRoPSIxIiBmaWxsPSJub25lIi8+PC9zdmc+')] opacity-50" />
      </motion.div>

      <div className="max-w-6xl mx-auto relative z-10">
        
        {/* Header */}
        <div className="mb-20 md:mb-40 text-center relative">
          <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent blur-3xl -z-10" />
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-secondary font-mono text-sm tracking-widest uppercase mb-6 block">
              <Briefcase className="inline-block w-4 h-4 mr-2 mb-1" />
              What I Build
            </span>
            <h2 className="text-5xl md:text-7xl font-bold tracking-tight mb-8 text-white drop-shadow-2xl">
              My <span className="text-gradient">Experience</span>
            </h2>
            
          </motion.div>
        </div>

        {/* Vertical Engineering Timeline */}
        <div className="relative mb-20 md:mb-40">
          
          <div ref={timelineRef} className="relative pl-8 md:pl-16 border-l border-white/5 space-y-16 md:space-y-32">
            {/* Animated Connecting Timeline */}
            <div className="exp-timeline-line absolute left-0 top-0 bottom-0 w-[1px] bg-gradient-to-b from-primary via-secondary to-transparent origin-top z-0" />

            {EXPERIENCE.map((exp, idx) => (
              <motion.div
                key={exp.role + exp.company}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8 }}
                className="relative group z-10"
              >
                {/* Timeline Node */}
                <div className="absolute -left-[41px] md:-left-[73px] top-12 w-5 h-5 rounded-full bg-midnight border-2 border-primary group-hover:bg-primary group-hover:shadow-[0_0_15px_rgba(245,230,211,0.5)] transition-all duration-300 hidden md:block" />

                {/* Content Panel */}
                <div className="flex-1 glass p-6 md:p-8 lg:p-12 rounded-[2rem] border border-white/10 group-hover:border-white/20 transition-all duration-500 relative overflow-hidden w-full">
                  
                  {/* Holographic Overlays */}
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

                  <div className="relative z-10 flex flex-col xl:flex-row gap-12">
                    
                    {/* Left Info Column */}
                    <div className="flex-1">
                      <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 mb-8">
                        <div className="p-4 rounded-2xl bg-midnight/50 border border-white/10 group-hover:border-primary/30 transition-colors shrink-0">
                          {exp.icon}
                        </div>
                        <div>
                          <div className="flex flex-wrap items-center gap-3 mb-2">
                            <span className="text-xs font-mono text-primary uppercase tracking-widest px-3 py-1 bg-primary/10 border border-primary/20 rounded-full">
                              {exp.category}
                            </span>
                            <span className="text-xs font-mono text-gray-500 px-3 py-1 bg-white/5 border border-white/10 rounded-full">
                              {exp.duration}
                            </span>
                          </div>
                          <h3 className="text-3xl md:text-4xl font-bold text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-primary group-hover:to-secondary transition-all duration-300">
                            {exp.role}
                          </h3>
                          <p className="text-sm text-gray-500 font-mono mt-1">{exp.company}</p>
                        </div>
                      </div>
                      
                      <p className="text-gray-400 text-lg leading-relaxed mb-8 border-l-2 border-white/10 pl-4">
                        {exp.description}
                      </p>

                      <div>
                        <div className="flex items-center gap-2 text-sm font-mono text-gray-400 uppercase tracking-wider mb-4">
                          <Code2 className="w-4 h-4 text-primary" /> Tech Stack
                        </div>
                        <div className="flex flex-wrap gap-2">
                          {exp.tech.map((item, i) => (
                            <span key={i} className="text-xs font-mono px-3 py-1.5 rounded bg-midnight border border-white/10 text-gray-300 group-hover:border-primary/30 transition-colors cursor-default">
                              {item}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Right Highlights Column */}
                    <div className="flex-1 xl:max-w-md">
                      <div className="glass p-6 rounded-2xl border border-white/5 h-full relative overflow-hidden group/highlights">
                        <div className="absolute inset-0 bg-gradient-to-t from-midnight/80 to-transparent z-10 pointer-events-none" />
                        
                        <span className="text-sm font-mono text-gray-400 uppercase tracking-wider mb-6 block relative z-20 flex items-center gap-2">
                          <BrainCircuit className="w-4 h-4 text-secondary" /> Key Capabilities
                        </span>
                        
                        <div className="space-y-4 relative z-20 mb-8">
                          {exp.highlights.map((highlight, i) => (
                            <div key={i} className="flex items-start gap-3">
                              <div className="w-1.5 h-1.5 rounded-full bg-secondary group-hover/highlights:bg-primary transition-colors mt-2 shrink-0" />
                              <span className="text-sm text-gray-300 leading-relaxed">{highlight}</span>
                            </div>
                          ))}
                        </div>

                        {/* Animated Terminal Decoration */}
                        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-black/50 to-transparent flex items-end p-4 font-mono text-[10px] text-primary/30 opacity-50 z-0">
                          <motion.div
                            animate={{ opacity: [0.2, 0.8, 0.2] }}
                            transition={{ repeat: Infinity, duration: 3 }}
                          >
                            &gt; sys_log: tracking_progress...<br/>
                            &gt; state: optimized
                          </motion.div>
                        </div>
                      </div>
                    </div>

                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
