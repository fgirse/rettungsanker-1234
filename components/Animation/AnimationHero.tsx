"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import Image from "next/image";
import LogoNeu from "../../public/LogoNeu.png";

export default function AnimatedLogo() {
  const logoRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    // Set initial state to invisible
    gsap.set([logoRef.current, textRef.current], {
      opacity: 0,
      y: -30,
    });

    // Create timeline for sequential animations
    const tl = gsap.timeline();

    // Animate logo first
    tl.to(logoRef.current, {
      opacity: 1,
      y: 0,
      duration: 1.2,
      ease: "power2.in",
    });

    // Then animate text
    tl.to(
      textRef.current,
      {
        opacity: 1,
        y: 0,
        duration: 1.2,
        ease: "power2.in",
      },
      "-=0.6", // Start 0.6s before previous animation ends
    );
  }, []);

  return (
    <div className="flex flex-col items-center ">
      <div ref={logoRef} className="relative w-64 h-64 lg:hidden">
        <Image
          src={LogoNeu}
          alt="Rettungsanker Logo"
          fill
          className="object-contain"
          priority
        />
      </div>
      <div className="flex flex-col justify-center items-start">
        <h1
          ref={textRef}
          className="relative top-[25vh] text-amber-50 headingE text-shadow-lg text-[40vw] md:text-[25vw] lg:text-[30vw] lg:-top-10 text-center tracking-wide"
        >
          die
        </h1>
        <h1
          ref={textRef}
          className="relative top-[15vh] headingA text-shadow-lg text-[13vw] md:top-[20vh] md:text-7xl lg:-top-[28vh] lg:text-[10vw] text-red-700 text-center"
        >
          kiezkeipe
        </h1>
      </div>
    </div>
  );
}
