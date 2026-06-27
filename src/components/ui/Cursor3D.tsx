"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function Cursor3D() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const [isHovering, setIsHovering] = useState(false);
  const [isClicking, setIsClicking] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isTouchDevice, setIsTouchDevice] = useState(false);

  // Raw mouse position
  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  // Outer ring — slow, springy (creates the 3D lag)
  const ringX = useSpring(mouseX, { stiffness: 120, damping: 20, mass: 0.5 });
  const ringY = useSpring(mouseY, { stiffness: 120, damping: 20, mass: 0.5 });

  // Middle orb — medium lag
  const orbX = useSpring(mouseX, { stiffness: 250, damping: 22, mass: 0.4 });
  const orbY = useSpring(mouseY, { stiffness: 250, damping: 22, mass: 0.4 });

  // Inner dot — snappy, near-instant
  const dotX = useSpring(mouseX, { stiffness: 800, damping: 35 });
  const dotY = useSpring(mouseY, { stiffness: 800, damping: 35 });

  useEffect(() => {
    // Detect touch device — hide custom cursor
    if (window.matchMedia("(pointer: coarse)").matches) {
      setIsTouchDevice(true);
      return;
    }

    const onMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
      if (!isVisible) setIsVisible(true);
    };

    const onEnter = () => setIsVisible(true);
    const onLeave = () => setIsVisible(false);
    const onDown = () => setIsClicking(true);
    const onUp = () => setIsClicking(false);

    // Hoverable elements
    const addHoverListeners = () => {
      const targets = document.querySelectorAll(
        "a, button, [role='button'], input, textarea, select, label, [data-cursor-hover]"
      );
      targets.forEach((el) => {
        el.addEventListener("mouseenter", () => setIsHovering(true));
        el.addEventListener("mouseleave", () => setIsHovering(false));
      });
    };

    addHoverListeners();

    // Re-scan DOM for dynamically added elements
    const observer = new MutationObserver(addHoverListeners);
    observer.observe(document.body, { childList: true, subtree: true });

    window.addEventListener("mousemove", onMove);
    document.addEventListener("mouseenter", onEnter);
    document.addEventListener("mouseleave", onLeave);
    window.addEventListener("mousedown", onDown);
    window.addEventListener("mouseup", onUp);

    return () => {
      window.removeEventListener("mousemove", onMove);
      document.removeEventListener("mouseenter", onEnter);
      document.removeEventListener("mouseleave", onLeave);
      window.removeEventListener("mousedown", onDown);
      window.removeEventListener("mouseup", onUp);
      observer.disconnect();
    };
  }, [mouseX, mouseY, isVisible]);

  if (isTouchDevice) return null;

  const ringSize = isHovering ? 32 : isClicking ? 16 : 24;
  const orbSize = isHovering ? 8 : isClicking ? 4 : 6;
  const dotSize = isClicking ? 2 : 3;

  return (
    <>
      {/* Hide native cursor globally */}
      <style>{`* { cursor: none !important; }`}</style>

      {/* ── Outer Ring (slowest — deepest 3D layer) ─────────────── */}
      <motion.div
        style={{
          x: ringX,
          y: ringY,
          translateX: "-50%",
          translateY: "-50%",
          opacity: isVisible ? 1 : 0,
        }}
        animate={{
          width: ringSize,
          height: ringSize,
          borderColor: isHovering
            ? "rgba(245,230,211,0.9)"
            : "rgba(245,230,211,0.35)",
          boxShadow: isHovering
            ? "0 0 20px rgba(245,230,211,0.4), 0 0 60px rgba(245,230,211,0.15), inset 0 0 20px rgba(245,230,211,0.05)"
            : "0 0 10px rgba(245,230,211,0.15), inset 0 0 10px rgba(245,230,211,0.02)",
          rotate: isHovering ? 45 : 0,
        }}
        transition={{ width: { duration: 0.3 }, height: { duration: 0.3 }, rotate: { duration: 0.4 } }}
        className="fixed top-0 left-0 z-[9999] pointer-events-none rounded-full border-2 border-primary/40"
      />

      {/* ── Middle Orb (medium lag — mid 3D layer) ───────────────── */}
      <motion.div
        style={{
          x: orbX,
          y: orbY,
          translateX: "-50%",
          translateY: "-50%",
          opacity: isVisible ? 1 : 0,
        }}
        animate={{
          width: orbSize,
          height: orbSize,
          background: isHovering
            ? "radial-gradient(circle at 35% 35%, rgba(255,255,255,0.95), rgba(245,230,211,0.8) 60%, rgba(139,90,43,0.6))"
            : "radial-gradient(circle at 35% 35%, rgba(255,255,255,0.7), rgba(245,230,211,0.5) 60%, rgba(139,90,43,0.3))",
          boxShadow: isHovering
            ? "0 4px 20px rgba(245,230,211,0.6), 0 2px 8px rgba(0,0,0,0.4), inset -2px -2px 4px rgba(0,0,0,0.2), inset 2px 2px 4px rgba(255,255,255,0.4)"
            : "0 2px 12px rgba(245,230,211,0.3), 0 1px 4px rgba(0,0,0,0.3), inset -1px -1px 3px rgba(0,0,0,0.2), inset 1px 1px 3px rgba(255,255,255,0.3)",
        }}
        transition={{ width: { duration: 0.25 }, height: { duration: 0.25 } }}
        className="fixed top-0 left-0 z-[9999] pointer-events-none rounded-full"
      />

      {/* ── Inner Dot (fastest — top 3D layer) ───────────────────── */}
      <motion.div
        style={{
          x: dotX,
          y: dotY,
          translateX: "-50%",
          translateY: "-50%",
          opacity: isVisible ? 1 : 0,
        }}
        animate={{
          width: dotSize,
          height: dotSize,
          background: "rgba(255,255,255,0.95)",
          boxShadow: "0 0 6px rgba(255,255,255,0.8), 0 0 2px rgba(255,255,255,1)",
        }}
        transition={{ width: { duration: 0.15 }, height: { duration: 0.15 } }}
        className="fixed top-0 left-0 z-[10000] pointer-events-none rounded-full"
      />

      {/* ── Click burst effect ────────────────────────────────────── */}
      {isClicking && (
        <motion.div
          style={{
            x: dotX,
            y: dotY,
            translateX: "-50%",
            translateY: "-50%",
          }}
          initial={{ width: 0, height: 0, opacity: 0.8 }}
          animate={{ width: 40, height: 40, opacity: 0 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          className="fixed top-0 left-0 z-[9998] pointer-events-none rounded-full border border-primary/50"
        />
      )}
    </>
  );
}
