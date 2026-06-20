"use client";

import { motion, AnimatePresence, useMotionValue, useSpring } from "framer-motion";
import { useState, useMemo } from "react";
import { Network, BrainCircuit, Terminal, TestTube2, Database, Cloud, LineChart, Code2 } from "lucide-react";

const SKILL_DOMAINS = [
  {
    id: "agentic",
    title: "Agentic AI & LLMs",
    icon: <BrainCircuit className="w-5 h-5 text-primary" />,
    color: "primary",
    nodes: ["LangChain", "LangGraph", "LlamaIndex", "OpenAI", "Llama", "RAG Architectures", "Multi-Agent Systems"],
    description: "Designing autonomous AI agents that reason, plan, and collaborate using LangChain and LangGraph.",
    position: "left"
  },
  {
    id: "ml",
    title: "ML & Deep Learning",
    icon: <TestTube2 className="w-5 h-5 text-secondary" />,
    color: "secondary",
    nodes: ["TensorFlow", "PyTorch", "Scikit-Learn", "HuggingFace", "Transformers", "BERT", "GPT"],
    description: "Building and training neural networks, fine-tuning models, and deploying ML pipelines.",
    position: "right"
  },
  {
    id: "backend",
    title: "Backend & APIs",
    icon: <Terminal className="w-5 h-5 text-primary" />,
    color: "primary",
    nodes: ["FastAPI", "Django", "Flask", "PySpark", "ETL Pipelines"],
    description: "High-performance REST APIs and scalable backend systems for AI applications.",
    position: "left"
  },
  {
    id: "mlops",
    title: "MLOps & Infrastructure",
    icon: <Cloud className="w-5 h-5 text-secondary" />,
    color: "secondary",
    nodes: ["MLflow", "DVC", "Docker", "AWS SageMaker", "Apache Airflow", "AWS EC2", "AWS Lambda"],
    description: "Orchestrating ML workflows, containerization, and cloud infrastructure.",
    position: "right"
  },
  {
    id: "databases",
    title: "Databases",
    icon: <Database className="w-5 h-5 text-primary" />,
    color: "primary",
    nodes: ["PostgreSQL", "MySQL", "MongoDB", "Qdrant", "pgvector", "Vector Databases"],
    description: "Relational, NoSQL, and vector database design for intelligent retrieval.",
    position: "left"
  },
  {
    id: "data",
    title: "Data Engineering",
    icon: <LineChart className="w-5 h-5 text-secondary" />,
    color: "secondary",
    nodes: ["Pandas", "NumPy", "Apache Spark", "Apache Kafka", "Hadoop", "ETL/ELT"],
    description: "Building data pipelines, stream processing, and large-scale analytics.",
    position: "right"
  },
];

// Map indices to visual radar chart positions
const getAngle = (i: number) => {
  switch (i) {
    case 0: return 240;
    case 1: return 300;
    case 2: return 180;
    case 3: return 0;
    case 4: return 120;
    case 5: return 60;
    default: return 0;
  }
};

const getLevel = (i: number) => [0.95, 0.90, 0.92, 0.85, 0.88, 0.82][i] || 0.8;

const SVG_SIZE = 1000;
const CENTER = SVG_SIZE / 2;
const RADIUS = 400;
const GRID_ANGLES = [0, 60, 120, 180, 240, 300];

const getPoint = (angle: number, radius: number) => {
  const rad = (angle * Math.PI) / 180;
  const x = Math.round((CENTER + radius * Math.cos(rad)) * 100) / 100;
  const y = Math.round((CENTER + radius * Math.sin(rad)) * 100) / 100;
  return `${x},${y}`;
};

export default function Skills() {
  const [activeDomain, setActiveDomain] = useState<string | null>(null);
  
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springX = useSpring(mouseX, { stiffness: 500, damping: 30 });
  const springY = useSpring(mouseY, { stiffness: 500, damping: 30 });

  const handleMouseMove = (e: React.MouseEvent) => {
    mouseX.set(e.clientX);
    mouseY.set(e.clientY);
  };

  const ORBS = useMemo(() => {
    let seed = 12345;
    const random = () => {
      const x = Math.sin(seed++) * 10000;
      return x - Math.floor(x);
    };

    const allNodes: { node: string; domainId: string; color: string }[] = [];
    SKILL_DOMAINS.forEach(domain => {
      domain.nodes.forEach(node => {
        allNodes.push({ node, domainId: domain.id, color: domain.color });
      });
    });

    const total = allNodes.length;

    return allNodes.map((item, i) => {
      // Evenly distribute orbs around a ring — equal angle spacing (0 to 2*PI)
      const angle = (i / total) * Math.PI * 2;
      // Stagger radius in 3 levels: 37%, 40.5%, 44% from center
      const radiusPercent = 37 + (i % 3) * 3.5;
      const x = Math.round((50 + radiusPercent * Math.cos(angle)) * 100) / 100;
      const y = Math.round((50 + radiusPercent * Math.sin(angle)) * 100) / 100;

      return {
        id: `${item.domainId}-${i}`,
        name: item.node,
        domainId: item.domainId,
        color: item.color,
        x,
        y,
        duration: Math.round((12 + random() * 10) * 100) / 100,
        delay: Math.round((random() * -12) * 100) / 100,
      };
    });
  }, []);


  const gridPolygons = [0.2, 0.4, 0.6, 0.8, 1.0].map(level => {
    return GRID_ANGLES.map(angle => getPoint(angle, RADIUS * level)).join(" ");
  });

  const dataPoints = useMemo(() => {
    const points = SKILL_DOMAINS.map((d, i) => ({
      angle: getAngle(i),
      level: getLevel(i)
    })).sort((a, b) => a.angle - b.angle);
    
    return points.map(p => getPoint(p.angle, RADIUS * p.level)).join(" ");
  }, []);

  const activeDomainData = SKILL_DOMAINS.find(d => d.id === activeDomain);

  return (
    <section 
      onMouseMove={handleMouseMove}
      className="pt-28 pb-16 md:pt-36 md:pb-24 w-full min-h-[100dvh] relative overflow-hidden bg-midnight flex flex-col items-center justify-start cursor-crosshair"
    >
      
      {/* Immersive Holographic Background */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[150vw] h-[150vw] max-w-[1500px] max-h-[1500px] bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-primary/10 via-midnight to-midnight opacity-60 blur-[120px]" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:40px_40px] opacity-30" />
      </div>

      {/* Header */}
      <div className="relative z-20 w-full max-w-4xl mx-auto px-6 text-center mb-8 pointer-events-none">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <span className="text-secondary font-mono text-sm tracking-widest uppercase mb-4 flex items-center justify-center gap-2">
            <Network className="w-4 h-4" /> Systems Overview
          </span>
          <h2 className="text-4xl md:text-6xl font-bold tracking-tight mb-4 text-white drop-shadow-2xl">
            Skill <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Matrix</span>
          </h2>
        </motion.div>
      </div>

      {/* Outer container: full-width for orbs, centered radar inside */}
      <div className="relative w-full flex items-center justify-center z-10 mx-auto" style={{ maxWidth: '900px', aspectRatio: '1' }}>
        
        {/* Floating Skill Orbs — absolutely positioned relative to this outer container */}
        <div className="absolute inset-0 pointer-events-none z-20">
          {ORBS.map((orb) => (
            <div
              key={orb.id}
              className="absolute"
              style={{
                left: `${orb.x}%`,
                top: `${orb.y}%`,
              }}
            >
              <motion.div
                className={`flex items-center justify-center px-2.5 py-1 rounded-full backdrop-blur-md border border-white/10 shadow-lg
                  ${orb.color === 'primary' ? 'bg-primary/10 text-primary shadow-primary/20' : 'bg-secondary/10 text-secondary shadow-secondary/20'}
                  ${activeDomain && activeDomain !== orb.domainId ? 'opacity-20 scale-90' : 'opacity-80 scale-100'} transition-all duration-500`}
                style={{ x: "-50%", y: "-50%" }}
                animate={{
                  y: ["-50%", "calc(-50% - 10px)", "-50%"],
                }}
                transition={{
                  y: { duration: orb.duration, repeat: Infinity, ease: "easeInOut", delay: orb.delay },
                }}
              >
                <span className="text-[9px] md:text-[10px] font-mono tracking-wider whitespace-nowrap drop-shadow-md">
                  {orb.name}
                </span>
              </motion.div>
            </div>
          ))}
        </div>

        {/* Hero Radar Chart — 65% of outer container, centered; orbs live in the 35%-50% ring */}
        <motion.div 
          initial={{ scale: 0.8, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, type: "spring", bounce: 0.2 }}
          className="relative aspect-square"
          style={{ width: '65%' }}
        >
          <div className="absolute inset-0 bg-primary/10 rounded-full blur-[100px] pointer-events-none" />
          
          <svg viewBox={`0 0 ${SVG_SIZE} ${SVG_SIZE}`} className="w-full h-full drop-shadow-[0_0_30px_rgba(245,230,211,0.15)] overflow-visible">
            <defs>
              <linearGradient id="heroPolygonGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="rgba(245,230,211,0.4)" />
                <stop offset="50%" stopColor="rgba(245,230,211,0.1)" />
                <stop offset="100%" stopColor="rgba(139,90,43,0.4)" />
              </linearGradient>
              <filter id="heroGlow">
                <feGaussianBlur stdDeviation="15" result="coloredBlur"/>
                <feMerge>
                  <feMergeNode in="coloredBlur"/>
                  <feMergeNode in="SourceGraphic"/>
                </feMerge>
              </filter>
            </defs>

            {gridPolygons.map((points, i) => (
              <polygon
                key={i}
                points={points}
                fill="none"
                stroke="rgba(255,255,255,0.08)"
                strokeWidth={i === 4 ? "3" : "1"}
                className="transition-all duration-1000"
              />
            ))}

            {GRID_ANGLES.map(angle => (
              <line
                key={angle}
                x1={CENTER}
                y1={CENTER}
                x2={Math.round((CENTER + RADIUS * Math.cos(angle * Math.PI / 180)) * 100) / 100}
                y2={Math.round((CENTER + RADIUS * Math.sin(angle * Math.PI / 180)) * 100) / 100}
                stroke="rgba(255,255,255,0.15)"
                strokeWidth="2"
                strokeDasharray="5 5"
              />
            ))}

            <motion.polygon
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.5, ease: "easeOut", delay: 0.2 }}
              style={{ transformOrigin: 'center' }}
              points={dataPoints}
              fill="url(#heroPolygonGrad)"
              stroke="rgba(245,230,211,0.8)"
              strokeWidth="4"
              filter="url(#heroGlow)"
              className="drop-shadow-[0_0_20px_rgba(245,230,211,0.5)] cursor-crosshair hover:fill-primary/20 transition-colors duration-500"
            />

            {SKILL_DOMAINS.map((domain, i) => {
              const angle = getAngle(i);
              const level = getLevel(i);
              const [x, y] = getPoint(angle, RADIUS * level).split(",");
              const isActive = activeDomain === domain.id;
              const isOtherActive = activeDomain && activeDomain !== domain.id;
              
              return (
                <g 
                  key={`vertex-${domain.id}`}
                  onMouseEnter={() => setActiveDomain(domain.id)}
                  onMouseLeave={() => setActiveDomain(null)}
                  className="cursor-pointer group/vertex"
                >
                  <circle cx={x} cy={y} r="80" fill="transparent" />
                  
                  <motion.circle
                    cx={x}
                    cy={y}
                    r={isActive ? 25 : 0}
                    fill="none"
                    stroke={domain.color === 'primary' ? 'rgba(245,230,211,0.8)' : 'rgba(139,90,43,0.8)'}
                    strokeWidth="3"
                    className="transition-all duration-300 pointer-events-none"
                    animate={isActive ? { scale: [1, 1.2, 1], opacity: [0.8, 0, 0.8] } : {}}
                    transition={{ repeat: Infinity, duration: 1.5 }}
                  />
                  
                  <circle
                    cx={x}
                    cy={y}
                    r={isActive ? 12 : 8}
                    fill={domain.color === 'primary' ? '#F5E6D3' : '#8B5A2B'}
                    className={`transition-all duration-300 pointer-events-none ${isActive ? 'drop-shadow-[0_0_15px_rgba(255,255,255,1)]' : 'drop-shadow-lg'} ${isOtherActive ? 'opacity-30' : 'opacity-100'}`}
                  />
                </g>
              );
            })}
          </svg>

          {/* Center Hub */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none">
            <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-black/80 border-2 border-primary/50 flex items-center justify-center backdrop-blur-xl shadow-[0_0_50px_rgba(245,230,211,0.3)]">
              <Network className="w-6 h-6 md:w-8 md:h-8 text-primary animate-pulse" />
              <div className="absolute inset-[-10px] rounded-full border border-primary/30 border-dashed animate-[spin_10s_linear_infinite]" />
              <div className="absolute inset-[-20px] rounded-full border border-secondary/30 border-dashed animate-[spin_15s_linear_infinite_reverse]" />
            </div>
          </div>
        </motion.div>
      </div>

      {/* Mobile Sticky Detail Card */}
      <AnimatePresence>
        {activeDomainData && (
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
            className="md:hidden fixed bottom-6 left-4 right-4 z-50 pointer-events-none"
          >
            <div className={`glass w-full p-5 rounded-2xl border bg-black/90 backdrop-blur-3xl shadow-[0_20px_40px_rgba(0,0,0,0.8)]
              ${activeDomainData.color === 'primary' ? 'border-primary/50 shadow-primary/20' : 'border-secondary/50 shadow-secondary/20'}`}
            >
              <div className="flex items-center gap-3 mb-3">
                <div className={`p-2 rounded-lg bg-white/5 border ${activeDomainData.color === 'primary' ? 'border-primary/30 text-primary' : 'border-secondary/30 text-secondary'}`}>
                  {activeDomainData.icon}
                </div>
                <h4 className="text-lg font-bold text-white leading-tight">
                  {activeDomainData.title}
                </h4>
              </div>
              <p className="text-xs text-gray-400 leading-relaxed mb-4">
                {activeDomainData.description}
              </p>
              <div className="flex flex-wrap gap-1.5">
                {activeDomainData.nodes.map(node => (
                  <span 
                    key={node}
                    className={`px-2 py-0.5 rounded text-[10px] font-mono border 
                      ${activeDomainData.color === 'primary' ? 'bg-primary/10 border-primary/30 text-primary' : 'bg-secondary/10 border-secondary/30 text-secondary'}`}
                  >
                    {node}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Desktop Floating HUD Tooltip */}
      <AnimatePresence>
        {activeDomainData && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.2 }}
            style={{ x: springX, y: springY }}
            className="hidden md:block fixed top-0 left-0 z-50 pointer-events-none ml-6 mt-6"
          >
            <div className={`glass w-80 p-5 rounded-2xl border bg-black/80 backdrop-blur-2xl shadow-[0_20px_40px_rgba(0,0,0,0.8)]
              ${activeDomainData.color === 'primary' ? 'border-primary/50 shadow-primary/20' : 'border-secondary/50 shadow-secondary/20'}`}
            >
              <div className="flex items-center gap-3 mb-3">
                <div className={`p-2 rounded-lg bg-white/5 border ${activeDomainData.color === 'primary' ? 'border-primary/30 text-primary' : 'border-secondary/30 text-secondary'}`}>
                  {activeDomainData.icon}
                </div>
                <h4 className="text-lg font-bold text-white leading-tight">
                  {activeDomainData.title}
                </h4>
              </div>
              <p className="text-xs text-gray-400 leading-relaxed mb-4">
                {activeDomainData.description}
              </p>
              <div className="flex flex-wrap gap-1.5">
                {activeDomainData.nodes.map(node => (
                  <span 
                    key={node}
                    className={`px-2 py-0.5 rounded text-[10px] font-mono border 
                      ${activeDomainData.color === 'primary' ? 'bg-primary/10 border-primary/30 text-primary' : 'bg-secondary/10 border-secondary/30 text-secondary'}`}
                  >
                    {node}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

    </section>
  );
}
