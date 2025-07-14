"use client"

import React, { useState, useEffect, useRef } from "react";
import { cn } from "@/lib/utils";
import { ContactForm } from "@/components/contact-us";
import Faq from "@/components/faq";
import { CTABookDemo } from "@/components/cta-demo";
import { BackgroundProvider } from "@/providers/background-provider";

const faqs = [
    {
      question: "What makes your platform unique?",
      answer:
        "Our platform stands out through its intuitive design, powerful automation capabilities, and seamless integration options. We've focused on creating a user experience that combines simplicity with advanced features.",
    },
    {
      question: "How does the pricing structure work?",
      answer:
        "We offer flexible, transparent pricing tiers designed to scale with your needs. Each tier includes a core set of features, with additional capabilities as you move up. All plans start with a 14-day free trial.",
    },
    {
      question: "What kind of support do you offer?",
      answer:
        "We provide comprehensive support through multiple channels. This includes 24/7 live chat, detailed documentation, video tutorials, and dedicated account managers for enterprise clients.",
    },
    {
      question: "How can I get started?",
      answer:
        "You can get started by signing up for a free trial. Once you've signed up, you'll have access to our platform's full range of features. You can also contact our support team for assistance.",
    },
]

export default function ContactPage() {
    const [position, setPosition] = useState({ x: 0, y: 0 })
    const [isPageVisible, setIsPageVisible] = useState(false);
    const [isFaqVisible, setIsFaqVisible] = useState(false);
    
    const lastMouse = useRef({ x: 0, y: 0 });
    const containerRef = useRef(null);
    const pageRef = useRef(null);
    const faqRef = useRef(null);
    
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

    // Intersection Observer for page animation
    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsPageVisible(true);
                    observer.unobserve(entry.target);
                }
            },
            {
                threshold: 0.1,
                rootMargin: '0px 0px -50px 0px'
            }
        );

        if (pageRef.current) {
            observer.observe(pageRef.current);
        }

        return () => observer.disconnect();
    }, []);

    // Intersection Observer for FAQ section
    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsFaqVisible(true);
                    observer.unobserve(entry.target);
                }
            },
            {
                threshold: 0.1,
                rootMargin: '0px 0px -100px 0px'
            }
        );

        if (faqRef.current) {
            observer.observe(faqRef.current);
        }

        return () => observer.disconnect();
    }, []);

    return (
        <BackgroundProvider>
            <div 
                ref={pageRef}
                className={`w-full mb-40 transition-all duration-700 ease-out ${
                    isPageVisible 
                        ? 'opacity-100 translate-y-0' 
                        : 'opacity-0 translate-y-4'
                }`}
            >
                {/* ContactForm component already has its own animations */}
                <div className={`transition-all duration-600 ease-out delay-100 md:mx-0 ${
                    isPageVisible ? 'opacity-100' : 'opacity-0'
                }`}>
                    <ContactForm />
                </div>

                {/* Animated CTABookDemo section */}
                <div className={`max-w-6xl md:mx-10 md:mt-72 transition-all duration-700 ease-out delay-150 ${
                    isPageVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                }`}>
                    <CTABookDemo className1={"max-w-6xl mx-0 md:mx-15"} className2="rounded-none text-purple-500" />
                </div>
                
                {/* FAQ Section with animation */}
                <div 
                    ref={faqRef}
                    className={`max-w-6xl mx-auto transition-all duration-600 ease-out ${
                        isFaqVisible 
                            ? 'opacity-100 translate-y-0' 
                            : 'opacity-0 translate-y-6'
                    }`}
                >
                    <div className={`md:mx-6 transition-all duration-500 ease-out delay-150 ${
                        isFaqVisible 
                            ? 'opacity-100 translate-y-0' 
                            : 'opacity-0 translate-y-3'
                    }`}>
                        <Faq faqs={faqs} title={"Platform"} />
                    </div>
                </div>
            </div>
        </BackgroundProvider>
    )
}