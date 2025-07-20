"use client"

import React, { useState, useEffect, useRef } from "react";
import { cn } from "@/lib/utils";
import { ContactForm } from "@/components/contact-us";
import Faq from "@/components/faq";
import { CTABookDemo } from "@/components/cta-demo";
import { BackgroundProvider } from "@/providers/background-provider";

export const faqs = [
  {
    question: "What services does Bizmate HR Solutions offer?",
    answer: "Bizmate offers a range of HR consulting services including Strategic HR Advisory, Leadership Development Programs, Executive Coaching, Recruitment Solutions (specializing in Non-IT industries), Culture & Engagement Consulting, and customized HR interventions."
  },
  {
    question: "Who leads Bizmate HR Solutions?",
    answer: "Bizmate is led by Mr. Prashant Prem, Managing Partner & Lead Consultant, with over 30 years of HR leadership experience. He is also a certified ICF-PCC coach, blending strategic HR insight with coaching excellence."
  },
  {
    question: "What makes Bizmate different from other HR consultancies?",
    answer: "Our edge lies in combining deep industry experience with global coaching credentials. We offer strategic yet practical HR solutions tailored to your context, with a strong focus on leadership and cultural transformation."
  },
  {
    question: "Do you offer executive coaching?",
    answer: "Yes. We offer personalized one-on-one and group executive coaching aligned with ICF standards to support leadership growth, mindset shifts, and performance enhancement."
  },
  {
    question: "What industries do you specialize in for recruitment?",
    answer: "Bizmate focuses on Non-IT recruitment, serving sectors such as manufacturing, pharmaceuticals, food processing, FMCG, hospitality, and textiles."
  },
  {
    question: "Do you offer training and leadership development programs?",
    answer: "Yes. We design and deliver customized leadership development journeys for organizations, tailored to different leadership levels and aligned with your business strategy."
  },
  {
    question: "Do you work with both startups and large organizations?",
    answer: "Yes. Bizmate works with a wide range of clients—from early-stage startups to mid-sized firms and large enterprises—delivering scalable HR solutions suited to their maturity level."
  },
  {
    question: "Can Bizmate help set up HR systems for growing businesses?",
    answer: "Absolutely. We support growing businesses and promoter-driven companies in establishing HR structures, policies, SOPs, performance management, and culture-building processes."
  },
  {
    question: "Are your services available virtually or only in person?",
    answer: "We offer both virtual and in-person services, depending on your preferences and location. Many of our coaching and consulting services are effectively delivered online."
  },
  {
    question: "How can I get started with Bizmate?",
    answer: "You can visit our Contact page or click on “Accelerate with Bizmate” to schedule a consultation. We’ll assess your needs and recommend a customized approach."
  },
  {
    question: "Does Bizmate offer support with labour law compliance?",
    answer: "Yes. We provide complete support in statutory compliance, including registrations, audits, policy alignment, record maintenance, and updates on applicable central and state labour laws."
  },
  {
    question: "What labour laws should our company be aware of?",
    answer: "Key laws include the Shops & Establishment Act, Factories Act, EPF & ESI Acts, Payment of Wages Act, POSH Act, Gratuity Act, and CLRA Act, among others. We help identify relevant laws based on your business size and model."
  },
  {
    question: "Do you conduct HR compliance audits?",
    answer: "Yes. We conduct comprehensive HR and labour law audits, reviewing your HR processes, registers, documentation, and policies to ensure full compliance and risk mitigation."
  },
  {
    question: "Can Bizmate assist in labour inspections or responding to official notices?",
    answer: "Yes. We offer end-to-end assistance in handling labour inspections, preparing documentation, and replying to statutory notices from authorities."
  },
  {
    question: "Is compliance necessary for small businesses and startups too?",
    answer: "Absolutely. Compliance is critical from the start. Bizmate helps small businesses meet essential legal requirements cost-effectively and responsibly, building a compliant and trustworthy foundation."
  }
];



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