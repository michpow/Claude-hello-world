"use client";

import { useCallback, useEffect, useRef, useState } from "react";

interface Label {
  text: string;
  x: number;
  y: number;
  highlight?: boolean;
}

const labels: Label[] = [
  { text: "ideas", x: 80, y: 32 },
  { text: "feedback", x: 235, y: 185 },
  { text: "trade-offs", x: 430, y: 32 },
  { text: "priorities", x: 640, y: 165 },
  { text: "shipped", x: 1040, y: 85, highlight: true },
];

// SVG path: wild oscillations on the left, gradually calming to a straight line
const pathD = [
  "M 0 100",
  "C 25 20, 75 180, 100 100",
  "C 125 30, 175 170, 200 100",
  "C 230 45, 275 155, 300 100",
  "C 330 50, 375 150, 400 100",
  "C 425 58, 475 142, 500 100",
  "C 530 65, 575 135, 600 100",
  "C 630 72, 675 128, 700 100",
  "C 730 80, 775 120, 800 100",
  "C 835 88, 865 112, 900 100",
  "C 935 94, 965 106, 1000 100",
  "L 1200 100",
].join(" ");

export default function ComplexityToClarity() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const pathRef = useRef<SVGPathElement>(null);
  const animationRef = useRef<number>(0);
  const [isVisible, setIsVisible] = useState(false);
  const [progress, setProgress] = useState(0);

  const playAnimation = useCallback(() => {
    const path = pathRef.current;
    if (!path) return;

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    const pathLength = path.getTotalLength();

    // Cancel any in-progress animation
    if (animationRef.current) {
      cancelAnimationFrame(animationRef.current);
    }

    if (prefersReducedMotion) {
      path.style.strokeDasharray = "none";
      path.style.transition = "none";
      requestAnimationFrame(() => {
        setProgress(1);
      });
      return;
    }

    // Reset the path visually
    path.style.transition = "none";
    path.style.strokeDasharray = `${pathLength}`;
    path.style.strokeDashoffset = `${pathLength}`;

    // Batch state reset and start animation via rAF
    requestAnimationFrame(() => {
      setProgress(0);

      requestAnimationFrame(() => {
        path.style.transition = "stroke-dashoffset 2.5s ease-out";
        path.style.strokeDashoffset = "0";

        const duration = 2500;
        const start = performance.now();
        const animate = (now: number) => {
          const elapsed = now - start;
          const p = Math.min(elapsed / duration, 1);
          setProgress(p);
          if (p < 1) {
            animationRef.current = requestAnimationFrame(animate);
          }
        };
        animationRef.current = requestAnimationFrame(animate);
      });
    });
  }, []);

  // Trigger on scroll into view
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  // Auto-play on first visibility
  useEffect(() => {
    if (isVisible) {
      playAnimation();
    }
  }, [isVisible, playAnimation]);

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, []);

  return (
    <section ref={sectionRef} className="overflow-hidden py-12 md:py-16">
      <div className="mx-auto max-w-5xl px-6">
        <p className="mb-4 text-center text-xs font-medium tracking-widest text-gray uppercase">
          The path from idea to impact
        </p>
        <svg
          viewBox="0 0 1200 210"
          className="w-full cursor-pointer"
          preserveAspectRatio="xMidYMid meet"
          role="img"
          aria-label="Animated line from squiggly to straight, representing the journey from messy ideas to shipped product. Click to replay."
          onClick={playAnimation}
        >
          <path
            ref={pathRef}
            d={pathD}
            fill="none"
            stroke="#EC4899"
            strokeWidth="3"
            strokeLinecap="round"
          />
          {labels.map((label, i) => {
            const threshold = (i + 0.5) / labels.length;
            return (
              <text
                key={label.text}
                x={label.x}
                y={label.y}
                fill={label.highlight ? "var(--color-pink-dark)" : "var(--color-gray)"}
                fontSize="17"
                fontFamily="Inter, sans-serif"
                fontWeight={label.highlight ? "600" : "500"}
                style={{
                  opacity: progress >= threshold ? 1 : 0,
                  transition: "opacity 0.6s ease-in",
                }}
              >
                {label.text}
              </text>
            );
          })}
        </svg>
      </div>
    </section>
  );
}
