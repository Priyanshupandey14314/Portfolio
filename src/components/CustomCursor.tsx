"use client";
import { useEffect, useRef } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const followerRef = useRef<HTMLDivElement>(null);
  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  const springX = useSpring(mouseX, { damping: 25, stiffness: 300, mass: 0.5 });
  const springY = useSpring(mouseY, { damping: 25, stiffness: 300, mass: 0.5 });

  const followerX = useSpring(mouseX, { damping: 35, stiffness: 150, mass: 0.8 });
  const followerY = useSpring(mouseY, { damping: 35, stiffness: 150, mass: 0.8 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };

    const handleMouseEnterLink = () => {
      cursorRef.current?.classList.add("scale-150");
      followerRef.current?.classList.add("scale-150", "opacity-80");
    };

    const handleMouseLeaveLink = () => {
      cursorRef.current?.classList.remove("scale-150");
      followerRef.current?.classList.remove("scale-150", "opacity-80");
    };

    document.addEventListener("mousemove", handleMouseMove);

    const interactables = document.querySelectorAll("a, button, [data-cursor]");
    interactables.forEach((el) => {
      el.addEventListener("mouseenter", handleMouseEnterLink);
      el.addEventListener("mouseleave", handleMouseLeaveLink);
    });

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, [mouseX, mouseY]);

  return (
    <>
      {/* Dot cursor */}
      <motion.div
        ref={cursorRef}
        className="custom-cursor w-3 h-3 rounded-full bg-white transition-transform duration-200"
        style={{
          x: springX,
          y: springY,
          translateX: "-50%",
          translateY: "-50%",
        }}
      />
      {/* Ring follower */}
      <motion.div
        ref={followerRef}
        className="custom-cursor w-8 h-8 rounded-full border border-violet-400 opacity-60 transition-all duration-200"
        style={{
          x: followerX,
          y: followerY,
          translateX: "-50%",
          translateY: "-50%",
        }}
      />
    </>
  );
}
