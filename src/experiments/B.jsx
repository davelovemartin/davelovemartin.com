import React from "react";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";

export default function B() {
  const circleRef = useRef();
  useEffect(() => {
    gsap.set(circleRef.current, { transformOrigin: "50% 50%" });
    gsap.to(circleRef.current, {
      y: 160,
      duration: 1,
      repeat: -1,
      yoyo: true,
      ease: "power1.out",
    });
    gsap.to(circleRef.current, {
      scaleX: 1.1,
      scaleY: 0.9,
      duration: 1,
      repeat: -1,
      yoyo: true,
      ease: "power4.in",
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
