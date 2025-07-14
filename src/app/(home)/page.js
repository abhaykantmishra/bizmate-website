"use client"

import Image from "next/image";
import React, { useState, useEffect, useRef } from "react";
import { cn } from "@/lib/utils";
import { motion, useInView } from 'motion/react';

import { Hero } from "./Hero";
import {AboutUs} from "./AboutUs";
import {Services} from "./Services";
import { Core } from "./Core";
import { WhyChooseUs } from "./WhyChooseUs";
import { Experience } from "./Experience";
import { CTA } from "./CTA";
import { BackgroundProvider } from "@/providers/background-provider";
import { CTABookDemo } from "@/components/cta-demo";

// Animated section wrapper
const AnimatedSection = ({ children, delay = 0, direction = "up" }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  
  const variants = {
    up: { y: 50, opacity: 0 },
    down: { y: -50, opacity: 0 },
    left: { x: 50, opacity: 0 },
    right: { x: -50, opacity: 0 }
  };

  return (
    <motion.div
      ref={ref}
      initial={variants[direction]}
      animate={isInView ? { x: 0, y: 0, opacity: 1 } : variants[direction]}
      transition={{ duration: 0.8, delay, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
};

export default function Home() {
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
      updatePosition(lastMouse.current.x, lastMouse.current.y);
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("scroll", handleScroll, true);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("scroll", handleScroll, true);
    };
  }, []);
  
  return (
    <BackgroundProvider className="w-full md:max-w-7xl mx-auto">
        <div className="w-full md:max-w-7xl mx-auto" id="hero" >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Hero />
          </motion.div>
          
          <div className="max-w-7xl mx-auto mb-60">
            <AnimatedSection id="services" delay={0.2}>
              <Services />  
            </AnimatedSection>
            
            <AnimatedSection  id="about" delay={0.1} direction="left">
              <AboutUs />
            </AnimatedSection>
            
            <AnimatedSection id="core" delay={0.2} direction="right">
              <Core />
            </AnimatedSection>
            
            <AnimatedSection id="why-bizmate" delay={0.1}>
              <WhyChooseUs />
            </AnimatedSection>
            
            <AnimatedSection id="experience" delay={0.2} direction="left">
              <Experience />
            </AnimatedSection>

            <AnimatedSection id="cta1" delay={0.2}>
              <CTABookDemo />
            </AnimatedSection>

            <AnimatedSection id="cta1" delay={0.1}>
              <CTA />
            </AnimatedSection>
            
          </div>
        </div>
    </BackgroundProvider>
  );
}