import React from "react";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";

export default function B() {
  const circleRef = useRef();
  useEffect(() => {
    const tl = gsap.timeline();
    gsap.set(circleRef.current, { transformOrigin: "50% 50%" });
    tl.to(circleRef.current, {
      y: 160,
      duration: 1,
      repeat: -1,
      yoyo: true,
      ease: "sine.in",
    });
    tl.to(
      circleRef.current,
      {
        scaleX: 1.2,
        scaleY: 0.8,
        duration: 0.1,
        repeat: -1,
        repeatDelay: 1.9,
        ease: "sine.in",
      },
      "-=0.1"
    );
    tl.to(circleRef.current, {
      scaleX: 1,
      scaleY: 1,
      duration: 0.1,
      repeat: -1,
      repeatDelay: 1.9,
      ease: "sine.in",
    });
  }, []);
  return (
    <svg width="200px" height="200px" viewBox="0 0 200 200">
      <circle
        ref={circleRef}
        cx="40"
        cy="20"
        r="20"
        style={{ fill: `var(--color-highlight)` }}
      />
    </svg>
  );
}
