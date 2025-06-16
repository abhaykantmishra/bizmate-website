"use client"

import { BackgroundProvider } from "@/providers/background-provider";
import { SmallCard } from "./small-card";
import { CTA } from "@/app/(home)/CTA";
import Faq from "./faq";
import Link from "next/link";
import { HoverButton } from "./hover-button";
import { motion, useInView } from 'motion/react';
import { useRef } from 'react';

// Reusable animation wrapper
const ScrollAnimatedDiv = ({ children, delay = 0, direction = "up" }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  
  const variants = {
    up: { y: 60, opacity: 0 },
    down: { y: -60, opacity: 0 },
    left: { x: 60, opacity: 0 },
    right: { x: -60, opacity: 0 }
  };

  return (
    <motion.div
      ref={ref}
      initial={variants[direction]}
      animate={isInView ? { x: 0, y: 0, opacity: 1 } : variants[direction]}
      transition={{ duration: 0.7, delay, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
};

export function ServiceTemplatePage({
    serviceName,
    title,
    description,
    image,
    whatWeDo,
    faqs,
}) {
    return (
        <BackgroundProvider>
            <div className="max-w-7xl">
            
            <ScrollAnimatedDiv>
                <div className="relative max-w-4xl md:mx-auto mx-2 my-10 md:my-20 z-20 py-4 rounded-full
                    bg-gradient-to-br from-blue-300 to-violet-300
                ">
                <h1 className="text-xl md:text-5xl font-bold text-center mx-2">{serviceName}</h1>
                </div>
            </ScrollAnimatedDiv>

            <ScrollAnimatedDiv delay={0.2}>
                <div className="relative rounded-md max-w-full md:max-w-7xl bg-blue-50 flex flex-col md:flex-row md:mx-auto my-10 mb-32">
                    <motion.div 
                        className="md:w-[40%] w-[90%] mx-auto"
                        whileHover={{ scale: 1.02 }}
                        transition={{ duration: 0.3 }}
                    >
                        <figure className="md:max-h-[50vh] overflow-hidden mx-auto">
                        <img className="object-cover transition-transform duration-300 hover:scale-105" src={image} alt={serviceName} />
                        </figure>
                    </motion.div>
                    <div className="md:w-[60%] mx-2 my-auto">
                        <motion.h1 
                            className="text-xl md:text-3xl font-bold text-center text-blue-500"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                            viewport={{ once: true }}
                        >
                            {title}
                        </motion.h1>
                        
                        <div>
                            {description.map((des, index) => (
                                <motion.p 
                                    key={index} 
                                    className="font-bold my-4 text-sm md:text-lg"
                                    initial={{ opacity: 0, x: 30 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 0.6, delay: index * 0.1 }}
                                    viewport={{ once: true }}
                                >
                                    {des}
                                </motion.p>
                            ))}
                        </div>

                        <motion.div 
                            className="w-full flex justify-center mx-auto"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.4 }}
                            viewport={{ once: true }}
                        >
                        <Link className="w-full mx-auto" href="/contact">
                            <HoverButton
                            className={"mt-10 text-sm"}
                            hoverColor="#000"
                            > 
                            <p>Get in touch</p>
                            </HoverButton>
                        </Link>
                        </motion.div>
                    </div>
                </div>
            </ScrollAnimatedDiv>

            <ScrollAnimatedDiv delay={0.1}>
                <div className="mb-20 max-w-7xl">
                    <h1 className="relative z-20 text-2xl md:text-5xl font-bold text-center">What We Do</h1>
                    <div className="my-10 flex flex-col md:flex-wrap md:flex-row md:mx-auto justify-center items-center mb-32">
                    {whatWeDo.map((item, index) => (
                        <motion.div 
                            key={index} 
                            className="max-w-[85%] md:max-w-[30%] max-h-fit md:my-4"
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            whileHover={{ y: -5 }}
                        >
                        <SmallCard 
                            icon={item.icon} 
                            title={item.title} 
                            description={item.description} 
                            className={"md:w-[90%] md:mx-2 mb-3 md:text-sm text-xs"} 
                        />
                        </motion.div>
                    ))}
                    </div>
                </div>
            </ScrollAnimatedDiv>

            <ScrollAnimatedDiv delay={0.2}>
                <div className="mx-4">
                    <Faq faqs={faqs} title={serviceName} />
                </div>
            </ScrollAnimatedDiv>

            <ScrollAnimatedDiv delay={0.1}>
                <div className="mx-4 mb-20">
                    <CTA />
                </div>
            </ScrollAnimatedDiv>

            </div>
        </BackgroundProvider>
    );
}