import React, { useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { GraphicBackground } from "@components/GraphicBackground";

export const BouncingBallGsap = () => {
  const circleRef = useRef();
  const container = useRef();

  useGSAP(
    () => {
      const tl = gsap.timeline();
      gsap.set(circleRef.current, { transformOrigin: "50% 50%" });
      tl.to(circleRef.current, {
        y: 82.5,
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
    },
    { scope: container }
  );
  return (
    <GraphicBackground>
      <svg ref={container}>
        <defs>
          <radialGradient id="gradient" cx="0.5" cy="0.5" fx="0.25" fy="0.25">
            <stop offset="0%" stopColor="#ffad33" />
            <stop offset="100%" stopColor="#e68a00" />
          </radialGradient>
        </defs>
        <circle ref={circleRef} cx="38" cy="10" r="10" fill="url(#gradient)" />
      </svg>
    </GraphicBackground>
  );
};
