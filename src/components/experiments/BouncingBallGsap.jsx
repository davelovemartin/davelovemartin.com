import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";

const BouncingBallGsap = () => {
  const circleRef = useRef();
  const shadowRef = useRef();

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
    gsap.set(shadowRef.current, { transformOrigin: "50% 50%" });
    const shadowTl = gsap.timeline();
    shadowTl.to(shadowRef.current, {
      scaleX: 2,
      duration: 1,
      repeat: -1,
      yoyo: true,
      ease: "sine.in",
    });
  }, []);
  return (
    <svg width="192px" height="192px" viewBox="0 0 200 200">
      <defs>
        <radialGradient id="gradient" cx="0.5" cy="0.5" fx="0.25" fy="0.25">
          <stop offset="0%" stopColor="var(--color-highlight)" />
          <stop offset="100%" stopColor="var(--color-highlight-shadow)" />
        </radialGradient>
        <radialGradient id="shadow">
          <stop offset="0%" stopColor="#888888DD" />
          <stop offset="100%" stopColor="white" />
        </radialGradient>
      </defs>
      <circle
        ref={shadowRef}
        cx="40"
        cy="780"
        r="10"
        fill="url(#shadow)"
        transform="scale(1, 0.25)"
      />
      <circle ref={circleRef} cx="40" cy="20" r="20" fill="url(#gradient)" />
    </svg>
  );
};

export default BouncingBallGsap;
