"use client";
import { useEffect } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function ScrollProgress() {
  const scaleX = useMotionValue(0);
  const smoothScaleX = useSpring(scaleX, { damping: 30, stiffness: 200 });

  useEffect(() => {
    const updateProgress = () => {
      const scrollY = window.scrollY;
      const docHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      const progress = docHeight > 0 ? scrollY / docHeight : 0;
      scaleX.set(progress);
    };

    window.addEventListener("scroll", updateProgress, { passive: true });
    return () => window.removeEventListener("scroll", updateProgress);
  }, [scaleX]);

  return (
    <motion.div
      className="scroll-progress"
      style={{ scaleX: smoothScaleX }}
    />
  );
}
