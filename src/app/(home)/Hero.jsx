"use client";

import { motion } from "motion/react";
import { HeroHighlight, Highlight } from "@/components/ui/hero-highlight";
import { useEffect, useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Rocket, Users, Calendar, BookOpen, ChevronRight, ArrowRight, Presentation, Trophy, Store, UserPlus, Edit, Users2 } from 'lucide-react'

import { cn } from "@/lib/utils";
import React from "react";
import { PrimaryButton } from "@/components/primary-button";
import {image_url} from "@/constant/image"
import { HoverButton } from "@/components/hover-button";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";
import TypewriterLoop from "@/components/ui/typewriter-loop";


const tagline = "Connecting Top Talent & Business Goals"


export function Hero() {

  const [position, setPosition] = useState({ x: 0, y: 0 })
  
  useEffect(() => {
    const handleMouseMove = (e) => {
        setPosition({ x: e.clientX, y: e.clientY })
    }
  
    window.addEventListener('mousemove', handleMouseMove)
  
    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
    }
  }, [])

  return (
    <section className="min-h-screen ">
    {/* <div
        className={cn(
          "absolute inset-0",
          "[background-size:40px_40px]",
          "[background-image:linear-gradient(to_right,#e4e4e7_1px,transparent_1px),linear-gradient(to_bottom,#e4e4e7_1px,transparent_1px)]",
          "dark:[background-image:linear-gradient(to_right,#262626_1px,transparent_1px),linear-gradient(to_bottom,#262626_1px,transparent_1px)]",
        )}
      /> */}
      {/* <div 
          className="absolute bg-blue-500 rounded-full blur-3xl opacity-50 w-64 h-64 transition-all duration-300 ease-out"
          style={{
            left: `${position.x}px`,
            top: `${position.y}px`,
            transform: 'translate(-50%, -50%)',
          }}
      /> */}
      {/* Radial gradient for the container to give a faded look */}
      {/* <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_50%,black)] dark:bg-black"></div> */}

      <div className="max-w-[1700px] mx-auto my-auto flex flex-col md:flex-row">

        <div className="max-w-full md:w-1/2 flex flex-col justify-center md:ml-20 mx-1"
          // style={{backgroundImage: `url(${image_url})`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat'}}
        >
          <div className="my-5 z-20">
          <h1 className="text-3xl md:text-5xl font-bold text-blue-800">Bizmate HR Solutions</h1>
          <TextGenerateEffect className={"text-teal-500 text-2xl font-medium italic"} words={tagline} />
          </div>

          <div className="z-20 my-0 md:my-5 tracking-wide">
            <h3>
            <TypewriterLoop className={"md:text-3xl font-serif font-semibold text-blue-500 text-xl"} 
              strings={
                [ "Connecting Talent with opportunity...", 
                  "Developing Robust HR Process...", 
                  "Aligning HR with Business..."
                ]} 
            />
            </h3>
          </div>

          {/* <h3 className="text-base md:text-2xl font-medium mt-5 z-20">Connecting Talent with opportunity </h3>
          <h3 className="text-base md:text-2xl font-medium z-20">Developing Robust HR Process</h3>
          <h3 className="text-base md:text-2xl font-medium mb-5 z-20">Aligning HR with Business </h3> */}
          
          {/* <h3 className="text-xl z-20 my-5">
            <span className="text-blue-500 font-bold">"Connecting"</span> Talent with opportunity * <span className="text-blue-500 font-bold">"Developing"</span> Robust HR Process *  <span className="text-blue-500 font-bold">"Aligning"</span> HR with Business
          </h3> */}

          <p className="font-serif text-base md:text-2xl md:tracking-tight max-w-[35rem] z-20">
            At BizMate HR Solutions, we combine deep domain expertise with global coaching credentials to deliver people strategies that scale. With over three decades of leadership in HR, our founder—a certified ICF PCC coach—has helped organizations unlock the full potential of their teams.
          </p>
          <p className="font-serif text-base md:text-2xl md:tracking-tight max-w-[35rem] z-20 my-2">  
            <span className="text-blue-500">Our mission?</span> To be your strategic HR partner, empowering you to adapt and thrive in today&apos;s rapidly evolving world of work.
          </p>
          <div className="flex flex-col md:flex-row mt-20 z-20">
            <Link href="/#demo">
            <HoverButton
              className={"text-lg font-semibold mb-5 bg-orange-600"}
              hoverColor="#0f62fe"
            > 
              <p>Accelerate with Bizmate</p>
            </HoverButton>
            </Link>
            <Link href="/contact">
            <HoverButton  
              className={"text-lg font-semibold mb-5 bg-[#0f62fe] hover:text-blue-500"}
              hoverColor="#fff"
              onClick={() => {
                console.log("clicked")
                window.location.href = "/"
              }}
            >
              Contact Us Now
            </HoverButton>
            </Link>
            
          </div>
        </div>

        <div className="max-w-full mx-1 md:mx-0 md:max-w-1/2 max-h-screen flex items-center">
          <img className="w-full bg-transparent" src="/assets/image4.jpeg" alt="hero" />
        </div>
      </div>
    </section>
  );
}
