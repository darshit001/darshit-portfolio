"use client";

import { motion } from "framer-motion";
import { Mail, MessageSquare, ExternalLink } from "lucide-react";

const GithubIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.02c3.1-.34 6.33-1.53 6.33-6.98 0-1.5-.5-2.8-1.4-3.8.1-.3.6-1.8-.1-3.8 0 0-1.1-.4-3.6 1.3a12.3 12.3 0 0 0-6.6 0C6.2 3.6 5.1 4 5.1 4c-.7 2-.2 3.5-.1 3.8-.9 1-1.4 2.3-1.4 3.8 0 5.4 3.2 6.6 6.3 7A4.8 4.8 0 0 0 9 18v4"></path>
  </svg>
);

const LinkedinIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
    <rect x="2" y="9" width="4" height="12"></rect>
    <circle cx="4" cy="4" r="2"></circle>
  </svg>
);

export default function Contact() {
  const socialLinks = [
    {
      name: "GitHub",
      url: "https://github.com/darshit001",
      icon: <GithubIcon className="w-6 h-6" />,
      handle: "darshit001",
      color: "hover:text-white hover:border-white/40 hover:bg-white/5",
      delay: 0.1
    },
    {
      name: "LinkedIn",
      url: "https://linkedin.com/in/darshit-radadiya-918975230/",
      icon: <LinkedinIcon className="w-6 h-6" />,
      handle: "darshit-radadiya",
      color: "hover:text-[#0A66C2] hover:border-[#0A66C2]/40 hover:bg-[#0A66C2]/5",
      delay: 0.2
    }
  ];

  return (
    <section className="py-20 md:py-32 px-4 md:px-6 w-full min-h-screen relative overflow-hidden bg-midnight flex flex-col justify-center">
      
      {/* Background Ambience */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-primary/10 via-midnight to-midnight opacity-50 blur-[120px]" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(245,230,211,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(245,230,211,0.02)_1px,transparent_1px)] bg-[size:50px_50px] opacity-30" />
      </div>

      <div className="max-w-6xl mx-auto w-full relative z-10">
        
        {/* Header */}
        <div className="mb-12 md:mb-20 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-primary font-mono text-sm tracking-widest uppercase mb-6 block flex items-center justify-center gap-2">
              <MessageSquare className="w-4 h-4" /> Initialize Connection
            </span>
            <h2 className="text-5xl md:text-7xl font-bold tracking-tight mb-6 text-white drop-shadow-2xl">
              Let&apos;s <span className="text-gradient">Collaborate</span>
            </h2>
            <p className="text-gray-400 font-light text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
              Open to AI/ML roles, consulting, and interesting collaborations. Let&apos;s build something remarkable together.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
          
          {/* Email Communication Panel (Takes up 3 columns) */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-3 glass p-6 md:p-10 lg:p-16 rounded-[3rem] border border-white/10 hover:border-primary/30 transition-all duration-500 relative overflow-hidden group flex flex-col justify-center"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
            
            <div className="relative z-10 flex flex-col h-full justify-center items-start">
              <div className="p-4 bg-midnight/80 rounded-2xl border border-white/5 mb-8">
                <Mail className="w-10 h-10 text-primary" />
              </div>
              
              <h3 className="text-3xl font-bold text-white mb-4">Direct Communication</h3>
              <p className="text-gray-400 leading-relaxed mb-10 max-w-md">
                For professional inquiries, project proposals, or networking. I typically respond within 24-48 hours.
              </p>
              
              <a 
                href="mailto:darshitradadiya01@gmail.com"
                className="w-full sm:w-auto px-5 py-4 md:px-8 md:py-5 rounded-2xl bg-white/5 border border-white/10 hover:border-primary/50 hover:bg-primary/10 transition-all duration-300 flex items-center justify-between gap-6 group/btn"
              >
                <div className="flex flex-col">
                  <span className="text-xs font-mono text-primary uppercase tracking-widest mb-1">Email Address</span>
                  <span className="text-lg font-medium text-white tracking-wide">darshitradadiya01@gmail.com</span>
                </div>
                <div className="w-10 h-10 rounded-full bg-midnight border border-white/10 flex items-center justify-center group-hover/btn:bg-primary group-hover/btn:border-primary transition-colors">
                  <ExternalLink className="w-4 h-4 text-gray-400 group-hover/btn:text-midnight transition-colors" />
                </div>
              </a>
            </div>
          </motion.div>

          {/* Social Links Network (Takes up 2 columns) */}
          <div className="lg:col-span-2 flex flex-col gap-4">
            {socialLinks.map((link) => (
              <motion.a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: link.delay }}
                className={`glass p-6 rounded-2xl border border-white/5 transition-all duration-300 flex items-center justify-between group ${link.color}`}
              >
                <div className="flex items-center gap-4">
                  <div className="text-gray-400 group-hover:text-inherit transition-colors">
                    {link.icon}
                  </div>
                  <div>
                    <h4 className="text-white font-medium text-lg">{link.name}</h4>
                    <span className="text-gray-500 font-mono text-sm">@{link.handle}</span>
                  </div>
                </div>
                <ExternalLink className="w-5 h-5 text-gray-500 opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
              </motion.a>
            ))}

            {/* Location Card */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="glass p-6 rounded-2xl border border-white/5 flex items-center gap-4"
            >
              <div className="text-gray-400">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                  <circle cx="12" cy="10" r="3"></circle>
                </svg>
              </div>
              <div>
                <h4 className="text-white font-medium text-lg">Location</h4>
                <span className="text-gray-500 font-mono text-sm">Ahmedabad, India</span>
              </div>
            </motion.div>
          </div>
          
        </div>

        {/* Footer Identifier */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.8 }}
          className="mt-32 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4"
        >
          <div className="text-gray-500 font-mono text-sm flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-primary glow-primary animate-pulse" />
            System Online
          </div>
          <div className="text-gray-600 text-sm">
            © {new Date().getFullYear()} Darshit Radadiya. Designed & Engineered with Precision.
          </div>
        </motion.div>

      </div>
    </section>
  );
}
