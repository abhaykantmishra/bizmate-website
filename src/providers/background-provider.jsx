"use client"

import React, { useState, useRef, useEffect } from "react";
import { cn } from "@/lib/utils";
import { AboutUs } from "@/app/(home)/AboutUs";
import { Core } from "@/app/(home)/Core";
import { CTA } from "@/app/(home)/CTA";
import { Experience } from "@/app/(home)/Experience";
import { Hero } from "@/app/(home)/Hero";
import { Services } from "@/app/(home)/Services";
import { WhyChooseUs } from "@/app/(home)/WhyChooseUs";

export function BackgroundProvider({children}){

    const [position, setPosition] = useState({ x: 0, y: 0 })
  const lastMouse = useRef({ x: 0, y: 0 });
  const containerRef = useRef(null);
  
  useEffect(() => {
    const updatePosition = (clientX, clientY) => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      setPosition({
        x: clientX - rect.left,
        y: clientY - rect.top,
      });
    };

    const handleMouseMove = (e) => {
      lastMouse.current = { x: e.clientX, y: e.clientY };
      updatePosition(e.clientX, e.clientY);
    };

    const handleScroll = () => {
      // Use last known mouse position
      updatePosition(lastMouse.current.x, lastMouse.current.y);
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("scroll", handleScroll, true); // true = capture phase, catches scrolls on all ancestors

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("scroll", handleScroll, true);
    };
  }, []);

    return (
        <main className="flex h-full mx-auto flex-col">
      <div 
        ref={containerRef}
        className="relative flex h-full w-full items-center justify-center bg-white dark:bg-black">
        <div
            className={cn(
              "absolute inset-0",
              "[background-size:40px_40px]",
              "[background-image:linear-gradient(to_right,#e4e4e7_1px,transparent_1px),linear-gradient(to_bottom,#e4e4e7_1px,transparent_1px)]",
              "dark:[background-image:linear-gradient(to_right,#262626_1px,transparent_1px),linear-gradient(to_bottom,#262626_1px,transparent_1px)]",
            )}
        />
        {/* Blurred circle following the mouse */}
        <div 
            className="hidden md:block absolute bg-blue-500 rounded-full blur-3xl opacity-50 w-50 h-50 transition-all duration-300 ease-out"
            style={{
              left: `${position.x}px`,
              top: `${position.y}px`,
              transform: 'translate(-50%, -50%)',
            }}
        />
        {/* Radial gradient for the container to give a faded look */}
        <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_50%,black)] dark:bg-black"></div>
        
        <div>
          {children}
        </div>
      </div>
    </main>
    )

}