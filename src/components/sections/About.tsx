"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Fingerprint, Activity, Cpu, Layers, GitBranch, Users } from "lucide-react";

const STATS = [
  { value: "2+", label: "Years Building AI", icon: <Cpu className="w-5 h-5" /> },
  { value: "10+", label: "Projects Shipped", icon: <Layers className="w-5 h-5" /> },
  { value: "15+", label: "Tools & Frameworks", icon: <GitBranch className="w-5 h-5" /> },
  { value: "5+", label: "Clients Served", icon: <Users className="w-5 h-5" /> },
];

export default function About() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const opacityFade = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

  return (
    <section
      ref={containerRef}
      className="py-20 md:py-32 px-4 md:px-6 w-full min-h-screen relative overflow-hidden bg-midnight"
    >
      {/* Holographic Background */}
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
        <div className="mb-16 md:mb-24 text-center">
          <motion.div
            initial={{ opacity: 0, filter: "blur(10px)" }}
            whileInView={{ opacity: 1, filter: "blur(0px)" }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            <span className="text-secondary font-mono text-sm tracking-widest uppercase mb-6 block flex items-center justify-center gap-2">
              <Fingerprint className="w-4 h-4" /> Digital Identity
            </span>
            <h2 className="text-5xl md:text-7xl font-bold tracking-tight mb-6 text-white drop-shadow-2xl">
              Who <span className="text-gradient">I Am</span>
            </h2>
            <p className="text-gray-400 font-light text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
              An AI engineer passionate about building intelligent systems that solve real-world problems at scale.
            </p>
          </motion.div>
        </div>

        {/* Identity Panel */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass p-6 md:p-10 lg:p-16 rounded-[3rem] border border-white/10 relative overflow-hidden mb-12 md:mb-16 group"
        >
          <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-primary/50 to-transparent opacity-50" />
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

          <div className="flex flex-col lg:flex-row gap-12 items-center lg:items-start relative z-10">

            {/* Avatar */}
            <div className="shrink-0 flex flex-col items-center gap-4">
              <div className="relative">
                {/* Glowing ring */}
                <div className="absolute -inset-1 rounded-full bg-gradient-to-tr from-primary via-secondary to-primary opacity-60 blur-sm animate-[spin_6s_linear_infinite]" />
                <div className="relative w-36 h-36 md:w-44 md:h-44 rounded-full border-2 border-primary/30 overflow-hidden bg-midnight flex items-center justify-center">
                  {/* Initials avatar fallback */}
                  <div className="w-full h-full bg-gradient-to-br from-primary/20 via-midnight to-secondary/20 flex items-center justify-center">
                    <span className="text-4xl md:text-5xl font-extrabold text-white/90 tracking-tighter select-none">
                      DR
                    </span>
                  </div>
                </div>
                {/* Online dot */}
                <div className="absolute bottom-2 right-2 w-4 h-4 rounded-full bg-emerald-400 border-2 border-midnight shadow-[0_0_8px_rgba(52,211,153,0.8)]" />
              </div>
              <div className="text-center">
                <p className="text-white font-semibold text-base">Darshit Radadiya</p>
                <p className="text-primary font-mono text-xs tracking-widest">AI Engineer</p>
              </div>
            </div>

            {/* Bio Text */}
            <div className="flex-1 text-center lg:text-left">
              <div className="text-xs font-mono text-primary uppercase tracking-widest mb-4 inline-block px-3 py-1 bg-primary/10 border border-primary/20 rounded-full">
                About Me
              </div>

              <p className="text-gray-300 text-lg leading-relaxed max-w-2xl mx-auto lg:mx-0 mb-6">
                I&apos;m an <span className="text-primary font-medium">AI Engineer</span> and Computer Engineering
                graduate from LJ University, Ahmedabad. I specialize in building intelligent, scalable AI applications
                using <span className="text-primary font-medium">LangChain, LangGraph, RAG pipelines,</span> and
                agentic systems.
              </p>
              <p className="text-gray-400 text-base leading-relaxed max-w-2xl mx-auto lg:mx-0 mb-6">
                I focus on backend development, multi-agent orchestration, and large language model integration —
                turning complex concepts into clean, functional digital products.
              </p>
              <p className="text-gray-400 text-base leading-relaxed max-w-2xl mx-auto lg:mx-0">
                With expertise spanning from MLOps infrastructure to voice agent development, I build end-to-end AI
                solutions that are production-ready, performant, and impactful.
              </p>
            </div>

            {/* Core Focus */}
            <div className="w-full lg:w-64 glass p-6 rounded-2xl border border-white/5 relative overflow-hidden shrink-0">
              <div className="absolute inset-0 bg-gradient-to-b from-midnight/80 to-transparent pointer-events-none" />
              <div className="relative z-10 space-y-3">
                <span className="text-xs font-mono text-gray-500 uppercase tracking-widest block mb-4">Core Focus</span>
                {[
                  "Agentic AI Systems",
                  "RAG Architectures",
                  "LangChain & LangGraph",
                  "Multi-Agent Orchestration",
                  "LLM Integration",
                  "Backend Development",
                  "MLOps & Infrastructure",
                  "Voice AI Agents",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-3 text-sm font-mono text-gray-300">
                    <Activity className="w-3 h-3 text-secondary shrink-0" /> {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {STATS.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="glass p-6 rounded-2xl border border-white/5 hover:border-primary/30 transition-all duration-300 group text-center"
            >
              <div className="flex items-center justify-center mb-3 text-primary group-hover:scale-110 transition-transform duration-300">
                {stat.icon}
              </div>
              <div className="text-3xl md:text-4xl font-extrabold text-white mb-1 tracking-tight">
                {stat.value}
              </div>
              <div className="text-gray-500 font-mono text-xs uppercase tracking-widest">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
