"use client";

import React, { useEffect, useState, useRef } from "react";
import { getAssetPath } from "@/lib/utils";

interface ParallaxBackgroundProps {
  backgroundImage: string;
  className?: string;
  children?: React.ReactNode;
  muted?: boolean; // For blur and transparency overlay
}

export function ParallaxBackground({
  backgroundImage,
  className = "",
  children,
  muted = false,
}: ParallaxBackgroundProps) {
  const [parallaxOffset, setParallaxOffset] = useState(0);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (sectionRef.current) {
        const sectionTop = sectionRef.current.offsetTop;
        const sectionHeight = sectionRef.current.offsetHeight;
        const scrollY = window.scrollY;
        const windowHeight = window.innerHeight;

        // Calculate relative scroll position within the section's viewport journey
        const relativeScroll = Math.max(0, scrollY - sectionTop + windowHeight);

        // Parallax offset (background moves slower)
        const offset = relativeScroll * 0.3;
        setParallaxOffset(offset);
      }
    };

    // Throttle scroll events for better performance
    let ticking = false;
    const throttledHandleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          handleScroll();
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", throttledHandleScroll);
    handleScroll(); // Initial calculation

    return () => window.removeEventListener("scroll", throttledHandleScroll);
  }, []);

  return (
    <section
      ref={sectionRef}
      className={`relative shadow-lg overflow-hidden ${className}`}
    >
      {/* Parallax Background */}
      <div
        className={`absolute inset-0 bg-cover bg-center bg-no-repeat will-change-transform blur-[3px]`}
        style={{
          backgroundImage: `url(${getAssetPath(backgroundImage)})`,
          transform: `translate3d(0, ${parallaxOffset}px, 0)`,
          // Smart background sizing - adjusts automatically based on parallax movement
          height: "130%", // Standard coverage that adapts to parallax movement
          top: "-60%", // Standard starting position
          // Muted effects for overlay sections
          ...(muted && {
            opacity: 0.5,
          }),
        }}
      />

      {/* Overlay for muted sections */}
      {muted && <div className="absolute inset-0 bg-forest-800/40" />}

      {/* Content */}
      {children}
    </section>
  );
}
