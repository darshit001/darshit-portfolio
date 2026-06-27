"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import {
  BrainCircuit,
  Terminal,
  TestTube2,
  Database,
  Cloud,
  Code2,
  ChevronRight,
  Sparkles,
} from "lucide-react";

const SKILL_CATEGORIES = [
  {
    id: "agentic",
    title: "Agentic AI & LLMs",
    icon: <BrainCircuit className="w-6 h-6" />,
    color: "from-amber-400 to-orange-500",
    bgGlow: "rgba(245,158,11,0.15)",
    borderColor: "border-amber-500/20",
    hoverBorder: "hover:border-amber-500/50",
    textColor: "text-amber-400",
    description:
      "Designing autonomous AI agents that reason, plan, and collaborate using cutting-edge frameworks.",
    skills: [
      { name: "LangChain", level: 95 },
      { name: "LangGraph", level: 90 },
      { name: "LlamaIndex", level: 85 },
      { name: "OpenAI API", level: 92 },
      { name: "RAG Architectures", level: 90 },
      { name: "Multi-Agent Systems", level: 88 },
      { name: "Llama / Mistral", level: 80 },
    ],
  },
  {
    id: "ml",
    title: "ML & Deep Learning",
    icon: <TestTube2 className="w-6 h-6" />,
    color: "from-violet-400 to-purple-500",
    bgGlow: "rgba(139,92,246,0.15)",
    borderColor: "border-violet-500/20",
    hoverBorder: "hover:border-violet-500/50",
    textColor: "text-violet-400",
    description:
      "Building and training neural networks for NLP, computer vision, and predictive analytics.",
    skills: [
      { name: "PyTorch", level: 88 },
      { name: "TensorFlow", level: 85 },
      { name: "Scikit-Learn", level: 90 },
      { name: "HuggingFace", level: 87 },
      { name: "Transformers", level: 85 },
      { name: "GPT / BERT", level: 83 },
    ],
  },
  {
    id: "backend",
    title: "Backend & APIs",
    icon: <Terminal className="w-6 h-6" />,
    color: "from-emerald-400 to-teal-500",
    bgGlow: "rgba(16,185,129,0.15)",
    borderColor: "border-emerald-500/20",
    hoverBorder: "hover:border-emerald-500/50",
    textColor: "text-emerald-400",
    description:
      "Crafting high-performance REST APIs and microservices for production-grade AI applications.",
    skills: [
      { name: "FastAPI", level: 95 },
      { name: "Django", level: 82 },
      { name: "Flask", level: 85 },
      { name: "Python", level: 95 },
      { name: "Node.js", level: 75 },
      { name: "WebSockets", level: 80 },
    ],
  },
  {
    id: "data",
    title: "Data & Databases",
    icon: <Database className="w-6 h-6" />,
    color: "from-cyan-400 to-blue-500",
    bgGlow: "rgba(6,182,212,0.15)",
    borderColor: "border-cyan-500/20",
    hoverBorder: "hover:border-cyan-500/50",
    textColor: "text-cyan-400",
    description:
      "Managing vector stores, relational databases, and data pipelines for AI-powered systems.",
    skills: [
      { name: "PostgreSQL", level: 88 },
      { name: "MongoDB", level: 82 },
      { name: "Qdrant", level: 90 },
      { name: "pgvector", level: 85 },
      { name: "Vector Databases", level: 90 },
      { name: "MySQL", level: 80 },
    ],
  },
  {
    id: "devops",
    title: "Cloud & MLOps",
    icon: <Cloud className="w-6 h-6" />,
    color: "from-rose-400 to-pink-500",
    bgGlow: "rgba(244,63,94,0.15)",
    borderColor: "border-rose-500/20",
    hoverBorder: "hover:border-rose-500/50",
    textColor: "text-rose-400",
    description:
      "Deploying and orchestrating ML models at scale with modern cloud infrastructure.",
    skills: [
      { name: "Docker", level: 85 },
      { name: "AWS (EC2/Lambda)", level: 80 },
      { name: "MLflow", level: 78 },
      { name: "Apache Airflow", level: 75 },
      { name: "AWS SageMaker", level: 72 },
      { name: "DVC", level: 70 },
    ],
  },
  {
    id: "dataeng",
    title: "Data Engineering",
    icon: <Code2 className="w-6 h-6" />,
    color: "from-sky-400 to-indigo-500",
    bgGlow: "rgba(56,189,248,0.15)",
    borderColor: "border-sky-500/20",
    hoverBorder: "hover:border-sky-500/50",
    textColor: "text-sky-400",
    description:
      "Building scalable ETL pipelines and distributed data processing systems.",
    skills: [
      { name: "Apache Spark", level: 80 },
      { name: "PySpark", level: 78 },
      { name: "NumPy", level: 92 },
      { name: "Pandas", level: 92 },
      { name: "ETL Pipelines", level: 82 },
      { name: "Apache Kafka", level: 72 },
    ],
  },
];

function SkillBar({
  name,
  level,
  color,
  delay,
}: {
  name: string;
  level: number;
  color: string;
  delay: number;
}) {
  return (
    <div className="group/bar">
      <div className="flex items-center justify-between mb-1.5">
        <span className="text-xs font-mono text-gray-300 group-hover/bar:text-white transition-colors">
          {name}
        </span>
        <span className="text-[10px] font-mono text-gray-500 group-hover/bar:text-gray-300 transition-colors">
          {level}%
        </span>
      </div>
      <div className="h-1.5 rounded-full bg-white/5 overflow-hidden backdrop-blur-sm">
        <motion.div
          className={`h-full rounded-full bg-gradient-to-r ${color} relative`}
          initial={{ width: 0 }}
          whileInView={{ width: `${level}%` }}
          viewport={{ once: true }}
          transition={{
            duration: 1.2,
            delay: delay,
            ease: [0.25, 0.46, 0.45, 0.94],
          }}
        >
          {/* Shine effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent opacity-0 group-hover/bar:opacity-100 transition-opacity duration-500 animate-[shimmer_2s_ease-in-out_infinite]" />
        </motion.div>
      </div>
    </div>
  );
}

export default function Skills() {
  const [expandedCard, setExpandedCard] = useState<string | null>(null);

  return (
    <section className="py-20 md:py-28 px-4 md:px-6 w-full relative overflow-hidden bg-midnight">
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-primary/8 via-midnight to-midnight opacity-60 blur-[100px]" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.015)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.015)_1px,transparent_1px)] bg-[size:60px_60px] opacity-40" />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-secondary font-mono text-sm tracking-widest uppercase mb-4 flex items-center justify-center gap-2">
              <Sparkles className="w-4 h-4" /> Technical Arsenal
            </span>
            <h2 className="text-5xl md:text-7xl font-bold tracking-tight mb-4 text-white drop-shadow-2xl">
              Skill{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
                Matrix
              </span>
            </h2>
            <p className="text-gray-400 font-light text-lg max-w-2xl mx-auto">
              A deep stack of AI engineering tools and frameworks, battle-tested
              across production systems.
            </p>
          </motion.div>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {SKILL_CATEGORIES.map((category, idx) => {
            const isExpanded = expandedCard === category.id;

            return (
              <motion.div
                key={category.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                layout
                onClick={() =>
                  setExpandedCard(isExpanded ? null : category.id)
                }
                className={`relative rounded-2xl border ${category.borderColor} ${category.hoverBorder} 
                  bg-white/[0.02] backdrop-blur-xl cursor-pointer
                  transition-all duration-500 group overflow-hidden
                  hover:bg-white/[0.04] hover:shadow-2xl`}
                style={{
                  boxShadow: isExpanded
                    ? `0 0 40px ${category.bgGlow}, 0 0 80px ${category.bgGlow}`
                    : "none",
                }}
              >
                {/* Top gradient line */}
                <div
                  className={`absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r ${category.color} opacity-40 group-hover:opacity-80 transition-opacity duration-500`}
                />

                {/* Card Content */}
                <div className="p-6">
                  {/* Header row */}
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <div
                        className={`p-2.5 rounded-xl bg-gradient-to-br ${category.color} bg-opacity-10 backdrop-blur-sm 
                          shadow-lg transition-transform duration-300 group-hover:scale-110`}
                        style={{
                          background: `linear-gradient(135deg, ${category.bgGlow}, transparent)`,
                        }}
                      >
                        <div className={category.textColor}>
                          {category.icon}
                        </div>
                      </div>
                      <div>
                        <h3 className="text-base font-bold text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-gray-300 transition-all">
                          {category.title}
                        </h3>
                        <p className="text-[11px] text-gray-500 font-mono">
                          {category.skills.length} technologies
                        </p>
                      </div>
                    </div>
                    <motion.div
                      animate={{ rotate: isExpanded ? 90 : 0 }}
                      transition={{ duration: 0.3 }}
                      className="text-gray-600 group-hover:text-gray-400 transition-colors mt-1"
                    >
                      <ChevronRight className="w-4 h-4" />
                    </motion.div>
                  </div>

                  {/* Description */}
                  <p className="text-xs text-gray-500 leading-relaxed mb-5 line-clamp-2">
                    {category.description}
                  </p>

                  {/* Skill chips (collapsed view) */}
                  <AnimatePresence mode="wait">
                    {!isExpanded && (
                      <motion.div
                        key="chips"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="flex flex-wrap gap-1.5"
                      >
                        {category.skills.map((skill) => (
                          <span
                            key={skill.name}
                            className={`px-2.5 py-1 text-[10px] font-mono rounded-md
                              bg-white/[0.04] border border-white/[0.06] ${category.textColor}
                              hover:bg-white/[0.08] hover:border-white/[0.12] transition-all duration-200`}
                          >
                            {skill.name}
                          </span>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>

                  {/* Skill bars (expanded view) */}
                  <AnimatePresence mode="wait">
                    {isExpanded && (
                      <motion.div
                        key="bars"
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.4, ease: "easeInOut" }}
                        className="space-y-3 overflow-hidden"
                      >
                        {category.skills.map((skill, si) => (
                          <SkillBar
                            key={skill.name}
                            name={skill.name}
                            level={skill.level}
                            color={category.color}
                            delay={si * 0.08}
                          />
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                {/* Bottom glow on hover */}
                <div
                  className="absolute bottom-0 left-1/2 -translate-x-1/2 w-3/4 h-20 blur-3xl opacity-0 group-hover:opacity-30 transition-opacity duration-700 pointer-events-none"
                  style={{
                    background: `radial-gradient(ellipse, ${category.bgGlow}, transparent)`,
                  }}
                />
              </motion.div>
            );
          })}
        </div>

        {/* Bottom summary */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-12 text-center"
        >
          <div className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full bg-white/[0.03] border border-white/[0.06] backdrop-blur-sm">
            <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse shadow-[0_0_8px_rgba(52,211,153,0.6)]" />
            <span className="text-xs font-mono text-gray-400">
              {SKILL_CATEGORIES.reduce(
                (acc, cat) => acc + cat.skills.length,
                0
              )}{" "}
              technologies across {SKILL_CATEGORIES.length} domains
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
