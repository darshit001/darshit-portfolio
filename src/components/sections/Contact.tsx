"use client";

import { motion, AnimatePresence } from "framer-motion";
import {
  Mail,
  MessageSquare,
  ExternalLink,
  Send,
  CheckCircle2,
  Loader2,
  User,
  AtSign,
} from "lucide-react";
import { useForm, ValidationError } from "@formspree/react";

/* ─── SVG icon helpers ─────────────────────────────────────────────────── */
const GithubIcon = ({ className }: { className?: string }) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.02c3.1-.34 6.33-1.53 6.33-6.98 0-1.5-.5-2.8-1.4-3.8.1-.3.6-1.8-.1-3.8 0 0-1.1-.4-3.6 1.3a12.3 12.3 0 0 0-6.6 0C6.2 3.6 5.1 4 5.1 4c-.7 2-.2 3.5-.1 3.8-.9 1-1.4 2.3-1.4 3.8 0 5.4 3.2 6.6 6.3 7A4.8 4.8 0 0 0 9 18v4" />
  </svg>
);

const LinkedinIcon = ({ className }: { className?: string }) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect x="2" y="9" width="4" height="12" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

/* ─── Shared input styles ───────────────────────────────────────────────── */
const inputBase =
  "w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-600 outline-none transition-all duration-300 font-light text-sm focus:border-primary/60 focus:bg-primary/5 focus:shadow-[0_0_0_3px_rgba(218,165,32,0.08)]";

/* ─── Main component ───────────────────────────────────────────────────── */
export default function Contact() {
  // Formspree hook — mlgybvzk delivers to darshitradadiya01@gmail.com
  const [state, handleSubmit] = useForm("mlgybvzk");

  const socialLinks = [
    {
      name: "GitHub",
      url: "https://github.com/darshit001",
      icon: <GithubIcon className="w-6 h-6" />,
      handle: "darshit001",
      color: "hover:text-white hover:border-white/40 hover:bg-white/5",
      delay: 0.1,
    },
    {
      name: "LinkedIn",
      url: "https://linkedin.com/in/darshit-radadiya-918975230/",
      icon: <LinkedinIcon className="w-6 h-6" />,
      handle: "darshit-radadiya",
      color:
        "hover:text-[#0A66C2] hover:border-[#0A66C2]/40 hover:bg-[#0A66C2]/5",
      delay: 0.2,
    },
  ];

  return (
    <section className="py-20 md:py-28 px-4 md:px-6 w-full relative overflow-hidden bg-midnight flex flex-col justify-center">
      {/* Background Ambience */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-primary/10 via-midnight to-midnight opacity-50 blur-[120px]" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(245,230,211,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(245,230,211,0.02)_1px,transparent_1px)] bg-[size:50px_50px] opacity-30" />
      </div>

      <div className="max-w-6xl mx-auto w-full relative z-10">
        {/* ── Section Header ─────────────────────────────────────────── */}
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
              Open to AI/ML roles, consulting, and interesting collaborations.
              Let&apos;s build something remarkable together.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
          {/* ── Contact Form Panel (3 cols) ─────────────────────────── */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-3 glass p-6 md:p-10 rounded-[3rem] border border-white/10 hover:border-primary/30 transition-all duration-500 relative overflow-hidden group"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

            <div className="relative z-10">
              {/* Panel header */}
              <div className="flex items-center gap-4 mb-8">
                <div className="p-3 bg-midnight/80 rounded-2xl border border-white/5">
                  <Mail className="w-8 h-8 text-primary" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white">
                    Send a Message
                  </h3>
                  <p className="text-gray-500 text-sm mt-0.5">
                    I&apos;ll reply within 24–48 hours
                  </p>
                </div>
              </div>

              {/* ── Success screen ───────────────────────────────────── */}
              <AnimatePresence mode="wait">
                {state.succeeded ? (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    className="flex flex-col items-center justify-center py-16 gap-5 text-center"
                  >
                    <div className="w-20 h-20 rounded-full bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center">
                      <CheckCircle2 className="w-10 h-10 text-emerald-400" />
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-white mb-2">
                        Message Sent!
                      </h4>
                      <p className="text-gray-400 text-sm max-w-xs">
                        Thanks for reaching out. I&apos;ll get back to you as
                        soon as possible.
                      </p>
                    </div>
                  </motion.div>
                ) : (
                  /* ── Form ────────────────────────────────────────────── */
                  <motion.form
                    key="form"
                    onSubmit={handleSubmit}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="flex flex-col gap-5"
                  >
                    {/* Name + Email row */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {/* Name */}
                      <div>
                        <label
                          htmlFor="contact-name"
                          className="block text-xs font-mono text-primary uppercase tracking-widest mb-2"
                        >
                          Your Name
                        </label>
                        <div className="relative">
                          <User className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-600 pointer-events-none" />
                          <input
                            id="contact-name"
                            type="text"
                            name="name"
                            required
                            placeholder="Darshit Radadiya"
                            className={`${inputBase} pl-10`}
                          />
                        </div>
                        <ValidationError
                          field="name"
                          prefix="Name"
                          errors={state.errors}
                          className="text-red-400 text-xs mt-1"
                        />
                      </div>

                      {/* Email */}
                      <div>
                        <label
                          htmlFor="contact-email"
                          className="block text-xs font-mono text-primary uppercase tracking-widest mb-2"
                        >
                          Email Address
                        </label>
                        <div className="relative">
                          <AtSign className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-600 pointer-events-none" />
                          <input
                            id="contact-email"
                            type="email"
                            name="email"
                            required
                            placeholder="you@example.com"
                            className={`${inputBase} pl-10`}
                          />
                        </div>
                        <ValidationError
                          field="email"
                          prefix="Email"
                          errors={state.errors}
                          className="text-red-400 text-xs mt-1"
                        />
                      </div>
                    </div>


                    {/* Message */}
                    <div>
                      <label
                        htmlFor="contact-message"
                        className="block text-xs font-mono text-primary uppercase tracking-widest mb-2"
                      >
                        Message
                      </label>
                      <textarea
                        id="contact-message"
                        name="message"
                        required
                        rows={5}
                        placeholder="Tell me about your project, idea, or opportunity..."
                        className={`${inputBase} resize-none leading-relaxed`}
                      />
                      <ValidationError
                        field="message"
                        prefix="Message"
                        errors={state.errors}
                        className="text-red-400 text-xs mt-1"
                      />
                    </div>

                    {/* Global form-level errors (e.g. network) */}
                    <ValidationError
                      errors={state.errors}
                      className="text-red-400 text-sm bg-red-500/10 border border-red-500/30 rounded-xl px-4 py-3"
                    />

                    {/* Submit */}
                    <button
                      id="contact-submit"
                      type="submit"
                      disabled={state.submitting}
                      className="mt-1 flex items-center justify-center gap-3 w-full py-4 rounded-2xl bg-primary text-midnight font-semibold text-sm tracking-wide hover:bg-primary/90 active:scale-[0.98] transition-all duration-200 disabled:opacity-60 disabled:cursor-not-allowed shadow-[0_0_30px_rgba(218,165,32,0.2)]"
                    >
                      {state.submitting ? (
                        <>
                          <Loader2 className="w-4 h-4 animate-spin" />
                          Sending…
                        </>
                      ) : (
                        <>
                          <Send className="w-4 h-4" />
                          Send Message
                        </>
                      )}
                    </button>
                  </motion.form>
                )}
              </AnimatePresence>
            </div>
          </motion.div>

          {/* ── Right column — Social + Location + Direct email ─────── */}
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
                    <h4 className="text-white font-medium text-lg">
                      {link.name}
                    </h4>
                    <span className="text-gray-500 font-mono text-sm">
                      @{link.handle}
                    </span>
                  </div>
                </div>
                <ExternalLink className="w-5 h-5 text-gray-500 opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
              </motion.a>
            ))}

            {/* Location */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="glass p-6 rounded-2xl border border-white/5 flex items-center gap-4"
            >
              <div className="text-gray-400">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="w-6 h-6"
                >
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
              </div>
              <div>
                <h4 className="text-white font-medium text-lg">Location</h4>
                <span className="text-gray-500 font-mono text-sm">
                  Ahmedabad, India
                </span>
              </div>
            </motion.div>

            {/* Direct email quick-link */}
            <motion.a
              href="mailto:darshitradadiya01@gmail.com"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="glass p-6 rounded-2xl border border-white/5 hover:border-primary/40 hover:bg-primary/5 transition-all duration-300 flex items-center justify-between group"
            >
              <div className="flex items-center gap-4">
                <Mail className="w-6 h-6 text-gray-400 group-hover:text-primary transition-colors" />
                <div>
                  <h4 className="text-white font-medium text-base">
                    Direct Email
                  </h4>
                  <span className="text-gray-500 font-mono text-xs">
                    darshitradadiya01@gmail.com
                  </span>
                </div>
              </div>
              <ExternalLink className="w-4 h-4 text-gray-500 opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
            </motion.a>
          </div>
        </div>

        {/* ── Footer identifier ───────────────────────────────────────── */}
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
            © {new Date().getFullYear()} Darshit Radadiya. Designed &amp;
            Engineered with Precision.
          </div>
        </motion.div>
      </div>
    </section>
  );
}
