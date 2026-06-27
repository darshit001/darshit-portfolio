"use client";

import { motion } from "framer-motion";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { GraduationCap, Network, BrainCircuit, Blocks } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const EDUCATION = [
  {
    id: "btech",
    institution: "LJ University, Ahmedabad",
    degree: "B.E. in Computer Engineering",
    year: "2021 – 2025",
    category: "Higher Education",
    icon: <Network className="w-8 h-8 text-primary" />,
    narrative: "The transformation into an AI engineer focused on scalable intelligent systems, agentic AI, and advanced backend engineering.",
    focus: [
      "Agentic AI Systems",
      "RAG Architectures",
      "Large Language Models",
      "Backend Development",
      "Machine Learning",
      "Deep Learning",
      "Data Engineering",
      "MLOps & Infrastructure"
    ],
    involvement: ["AI Projects", "Open Source", "Hackathons", "Backend Engineering", "Research"]
  }
];


export default function Education() {
  const containerRef = useRef<HTMLDivElement>(null);
  const timelineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current || !timelineRef.current) return;

    gsap.fromTo(
      ".edu-timeline-line",
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
    <section ref={containerRef} className="py-20 md:py-28 px-4 md:px-6 w-full relative overflow-hidden bg-midnight">
      
      {/* Background Cinematic Particles */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/10 via-midnight to-midnight opacity-50 blur-3xl" />
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCI+CiAgPHBhdGggZD0iTTAgMGg0MHY0MEgweiIgZmlsbD0ibm9uZSIvPgogIDxwYXRoIGQ9Ik0wIDEwaDQwTTEwIDB2NDAiIHN0cm9rZT0icmdiYSgyNTUsMjU1LDI1NSwwLjAyKSIgc3Ryb2tlLXdpZHRoPSIxIiBmaWxsPSJub25lIi8+Cjwvc3ZnPg==')] opacity-30" />
      </div>

      <div className="max-w-5xl mx-auto relative z-10">
        
        {/* Header */}
        <div className="mb-12 md:mb-16 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-secondary font-mono text-sm tracking-widest uppercase mb-6 block">
              <GraduationCap className="inline-block w-4 h-4 mr-2 mb-1" />
              Academic Background
            </span>
            <h2 className="text-5xl md:text-7xl font-bold tracking-tight mb-8 text-white drop-shadow-2xl">
              Education <span className="text-gradient">Journey</span>
            </h2>
            <p className="text-gray-400 font-light text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
              Computer Engineering graduate from LJ University, Ahmedabad — focused on building intelligent AI systems and scalable backend architectures.
            </p>
          </motion.div>
        </div>

        {/* Education Journey Timeline */}
        <div className="relative mb-8 md:mb-12">
          
          <div ref={timelineRef} className="relative pl-8 md:pl-16 border-l border-white/5 space-y-12 md:space-y-24">
            {/* Animated Connecting Timeline */}
            <div className="edu-timeline-line absolute left-0 top-0 bottom-0 w-[1px] bg-gradient-to-b from-primary via-secondary to-transparent origin-top z-0" />

            {EDUCATION.map((edu, idx) => (
              <motion.div
                key={edu.id}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8 }}
                className="relative group z-10"
              >
                {/* Timeline Node */}
                <div className="absolute -left-[41px] md:-left-[73px] top-12 w-5 h-5 rounded-full bg-midnight border-2 border-primary group-hover:bg-primary group-hover:shadow-[0_0_15px_rgba(245,230,211,0.5)] transition-all duration-300 hidden md:block" />

                {/* Content Panel */}
                <div className="flex-1 glass p-6 md:p-8 lg:p-12 rounded-[2rem] border border-white/10 group-hover:border-white/20 transition-all duration-500 relative overflow-hidden">
                  
                  {/* Hover Glow */}
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                  
                  <div className="relative z-10">
                    <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 mb-6">
                      <div className="p-4 rounded-2xl bg-midnight/50 border border-white/10 group-hover:border-primary/30 transition-colors shrink-0">
                        {edu.icon}
                      </div>
                      <div>
                        <span className="text-xs font-mono text-gray-500 uppercase tracking-widest mb-2 block">
                          {edu.category}
                        </span>
                        <h3 className="text-3xl md:text-4xl font-bold text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-primary group-hover:to-secondary transition-all duration-300">
                          {edu.institution}
                        </h3>
                      </div>
                    </div>
                    <h4 className="text-lg md:text-xl text-primary font-medium mb-6 flex flex-col md:flex-row md:items-center gap-2 md:gap-4">
                      <span>{edu.degree}</span>
                      {edu.year && (
                        <span className="text-sm font-mono text-gray-400 bg-white/5 px-3 py-1 rounded-full border border-white/10 w-fit">
                          {edu.year}
                        </span>
                      )}
                    </h4>
                    
                    <p className="text-gray-400 text-lg leading-relaxed mb-8 border-l-2 border-white/10 pl-4">
                      &quot;{edu.narrative}&quot;
                    </p>

                    <div className="space-y-6">
                      {/* Focus Areas */}
                      <div>
                        <div className="flex items-center gap-2 text-sm font-mono text-gray-400 uppercase tracking-wider mb-4">
                          <BrainCircuit className="w-4 h-4 text-secondary" /> Key Focus & Expertise
                        </div>
                        <div className="flex flex-wrap gap-2">
                          {edu.focus.map((item, i) => (
                            <span key={i} className="text-xs font-mono px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-gray-300">
                              {item}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Involvement */}
                      {edu.involvement.length > 0 && (
                        <div className="pt-4 border-t border-white/5">
                          <div className="flex items-center gap-2 text-sm font-mono text-gray-400 uppercase tracking-wider mb-4">
                            <Blocks className="w-4 h-4 text-primary" /> Active Involvement
                          </div>
                          <div className="flex flex-wrap gap-2">
                            {edu.involvement.map((item, i) => (
                              <span key={i} className="text-xs font-mono px-3 py-1.5 rounded bg-primary/10 border border-primary/20 text-primary">
                                {item}
                              </span>
                            ))}
                          </div>
                        </div>
                      )}
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
