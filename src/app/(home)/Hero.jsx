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

        <div className="w-full md:w-1/2 flex flex-col justify-center md:ml-20 mx-1"
          // style={{backgroundImage: `url(${image_url})`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat'}}
        >
          <h1 className="text-3xl md:text-6xl font-bold font-mono text-blue-700  my-5 z-20">BizMate HR Solutions</h1>
          <h3 className="text-xl md:text-2xl font-medium mt-5 z-20">Connecting Talent with opportunity </h3>
          <h3 className="text-xl md:text-2xl font-medium z-20">Developing Robust HR Process</h3>
          <h3 className="text-xl md:text-2xl font-medium mb-5 z-20">Aligning HR with Business </h3>
          <p className="font-serif text-2xl max-w-[35rem] z-20">
            At Bizmate HR Solutions, we believe in the power of people. We understand that the success of any organization hinges on its ability to attract, develop, and retain top talent. That&apos;s where we come in - your trusted partner in navigating the ever-evolving landscape of Human Resources.
          </p>
          <div className="flex flex-col md:flex-row mt-20 z-20">
            <Link href="/contact">
            <HoverButton
              className={"mb-5"}
              hoverColor="#000"
            > 
              <p>Accelerate with Bizmate</p>
            </HoverButton>
            </Link>
            <Link href="/contact">
            <HoverButton isPrimary={false} hoverColor="#0f62fe" className={"hover:border-white hover:text-white"}
              onClick={() => {
                console.log("clicked")
                window.location.href = "/contact"
              }}
            >
              Contact Us Now
            </HoverButton>
            </Link>
            
          </div>
        </div>

        <div className="w-full mx-1 md:mx-0 md:w-1/2 max-h-screen flex items-center">
          <img className="w-full" src={image_url} alt="" />
        </div>
      </div>
    </section>
  );
}
