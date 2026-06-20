"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import clsx from "clsx";

const NAV_ITEMS = [
  "Home", "About", "Experience", "Projects", "Education", "Skills", "Contact"
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("Home");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      const sections = NAV_ITEMS.map(item => item.toLowerCase());
      for (const section of sections.reverse()) {
        const element = document.getElementById(section);
        if (element && window.scrollY >= element.offsetTop - 200) {
          setActiveSection(section.charAt(0).toUpperCase() + section.slice(1));
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      window.scrollTo({ top: element.offsetTop - 80, behavior: "smooth" });
    }
    if (mobileMenuOpen) setMobileMenuOpen(false);
  };

  return (
    <>
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 2.5 }}
        className="fixed top-0 left-0 right-0 z-50 flex items-center justify-center px-4 py-3"
      >
        {/* Desktop pill navbar */}
        <div
          className={clsx(
            "hidden lg:flex items-center gap-1 px-3 py-2 rounded-full border transition-all duration-500",
            isScrolled
              ? "bg-black/60 backdrop-blur-2xl border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.6)]"
              : "bg-black/30 backdrop-blur-xl border-white/5"
          )}
        >
          {NAV_ITEMS.map((item) => {
            const isActive = activeSection === item;
            return (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                onClick={(e) => handleNavClick(e, item.toLowerCase())}
                className={clsx(
                  "relative px-4 py-1.5 rounded-full text-[10px] font-mono uppercase tracking-widest transition-all duration-300",
                  isActive
                    ? "text-[#0a0a0a]"
                    : "text-gray-400 hover:text-white"
                )}
              >
                {/* Active pill background */}
                {isActive && (
                  <motion.span
                    layoutId="nav-pill"
                    className="absolute inset-0 rounded-full bg-gradient-to-b from-[#F5E6D3] to-[#C8A882]"
                    style={{ zIndex: -1 }}
                    transition={{ type: "spring", bounce: 0.25, duration: 0.5 }}
                  />
                )}
                <span className="relative z-10">{item}</span>
              </a>
            );
          })}
        </div>

        {/* Mobile: logo + hamburger row */}
        <div className="lg:hidden flex items-center justify-between w-full px-2">
          <span className="text-white font-mono text-xs tracking-widest uppercase opacity-60">DR</span>
          <button
            className="text-white p-2 rounded-full border border-white/10 bg-black/40 backdrop-blur-xl"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </motion.nav>

      {/* Mobile fullscreen menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-40 bg-black/90 backdrop-blur-2xl flex flex-col items-center justify-center gap-2"
          >
            {NAV_ITEMS.map((item, i) => (
              <motion.a
                key={item}
                href={`#${item.toLowerCase()}`}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.05 }}
                onClick={(e) => handleNavClick(e, item.toLowerCase())}
                className={clsx(
                  "px-8 py-3 text-lg font-mono uppercase tracking-widest rounded-full border transition-all duration-300",
                  activeSection === item
                    ? "text-[#0a0a0a] bg-gradient-to-b from-[#F5E6D3] to-[#C8A882] border-transparent"
                    : "text-gray-400 border-white/10 hover:text-white hover:border-white/20"
                )}
              >
                {item}
              </motion.a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
