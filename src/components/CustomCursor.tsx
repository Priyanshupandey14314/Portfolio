"use client";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";

export default function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (window.matchMedia("(pointer: coarse)").matches) return; // skip on touch devices

    const dot = dotRef.current;
    const ring = ringRef.current;
    if (!dot || !ring) return;

    let mouseX = 0;
    let mouseY = 0;

    // Immediately snap the dot to the mouse with GSAP's quickSetter for zero-lag
    const setDotX = gsap.quickSetter(dot, "x", "px");
    const setDotY = gsap.quickSetter(dot, "y", "px");

    // Ring follows with a slight lag via gsap.to
    const onMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;

      // Dot is instant — no lag
      setDotX(mouseX);
      setDotY(mouseY);

      // Ring lags behind for the nice trail effect
      gsap.to(ring, {
        x: mouseX,
        y: mouseY,
        duration: 0.18,
        ease: "power2.out",
        overwrite: true,
      });
    };

    // Scale up on interactive elements
    const onEnter = () => {
      gsap.to(dot, { scale: 2.5, duration: 0.25, ease: "power2.out" });
      gsap.to(ring, { scale: 1.8, opacity: 0.9, duration: 0.25, ease: "power2.out" });
    };
    const onLeave = () => {
      gsap.to(dot, { scale: 1, duration: 0.25, ease: "power2.out" });
      gsap.to(ring, { scale: 1, opacity: 0.6, duration: 0.25, ease: "power2.out" });
    };

    window.addEventListener("mousemove", onMove, { passive: true });

    const addListeners = () => {
      const targets = document.querySelectorAll("a, button, [data-cursor]");
      targets.forEach((el) => {
        el.addEventListener("mouseenter", onEnter);
        el.addEventListener("mouseleave", onLeave);
      });
    };

    addListeners();

    // Re-add whenever DOM changes (e.g. modal opens)
    const observer = new MutationObserver(addListeners);
    observer.observe(document.body, { childList: true, subtree: true });

    return () => {
      window.removeEventListener("mousemove", onMove);
      observer.disconnect();
    };
  }, []);

  return (
    <>
      {/* Main dot — instant response */}
      <div
        ref={dotRef}
        aria-hidden="true"
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: 10,
          height: 10,
          borderRadius: "50%",
          background: "white",
          pointerEvents: "none",
          zIndex: 9999,
          transform: "translate(-50%, -50%)",
          willChange: "transform",
        }}
      />
      {/* Trailing ring */}
      <div
        ref={ringRef}
        aria-hidden="true"
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: 36,
          height: 36,
          borderRadius: "50%",
          border: "1.5px solid rgba(139, 92, 246, 0.7)",
          pointerEvents: "none",
          zIndex: 9998,
          transform: "translate(-50%, -50%)",
          willChange: "transform",
          opacity: 0.6,
        }}
      />
    </>
  );
}
