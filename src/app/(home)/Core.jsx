"use client"

import { SmallCard } from "@/components/small-card"
import { Presentation, Scale , Handshake, HandPlatter, Users2, HeartPlus, Fingerprint, LucideArrowsUpFromLine, Medal, HeartIcon} from "lucide-react"

import { Card, CardContent } from "@/components/ui/card"
import { cn } from "@/lib/utils"
import { useEffect, useRef, useState } from "react"

// Assign a unique pastel/gradient/hover bg for each core value
const coreValues = [
    {
        icon: <Scale className="w-10 h-10" />,
        title: "Integrity",
        tagline:"We do what's right — always.",
        description:"We embrace and uphold the highest standards of personal and professional ethics, honesty and trust",
        bg: "bg-gradient-to-br from-blue-100 via-blue-50 to-white hover:from-blue-200 hover:to-blue-300"
    },
    {
        icon: <HeartPlus className="w-10 h-10" />,
        title: "Empathy",
        tagline:"People before process. Listening drives our solutions.",
        description:"Our solutions are based not on the theories but with proven practical experience coupled with innovation which empowers Leaders & Managers at all levels to deliver excellence",
        bg: "bg-gradient-to-br from-pink-100 via-pink-50 to-white hover:from-pink-200 hover:to-pink-300"
    },
    {
        icon: <Medal className="w-10 h-10" />,
        title: "Excellence",
        tagline:"We hold ourselves to high standards in everything we do.",
        description:"We are responsible to fulfill our commitments to colleagues and clients with clear understanding of the urgency and accountability inherent in those commitments",
        bg: "bg-gradient-to-br from-yellow-100 via-yellow-50 to-white hover:from-yellow-200 hover:to-yellow-300"
    },
    {
        icon: <Handshake className="w-10 h-10" />,
        title: "Collaboration",
        tagline:"We grow through partnerships — with clients and each other.",
        description:"We work as a team and share knowledge for continuous improvement, learning and innovation.",
        bg: "bg-gradient-to-br from-green-100 via-green-50 to-white hover:from-green-200 hover:to-green-300"
    },
    {
        icon: <LucideArrowsUpFromLine className="w-10 h-10" />,
        title: "Adaptability",
        tagline:"The world changes fast. So do we — with purpose.",
        description:"We treat everyone with uncompromising respect, civility and fairness.",
        bg: "bg-gradient-to-br from-purple-100 via-purple-50 to-white hover:from-purple-200 hover:to-purple-300"
    },
    {
        icon: <Fingerprint className="w-10 h-10" />,
        title: "Confidentiality",
        tagline:"We honor trust. Your data, culture, and people are protected.",
        description:"We work as a team and share knowledge for continuous improvement, learning and innovation.",
        bg: "bg-gradient-to-br from-gray-100 via-gray-50 to-white hover:from-gray-200 hover:to-gray-300"
    },
]

export function Core(){
    return (
        <section className="my-40">
        <div className="container mx-auto">
            <h2 className="text-2xl md:text-5xl sticky font-bold text-sky-950 text-center mt-40 mb-20">Our Core Values</h2>

            <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 my-40">
                {coreValues.map((val, idx) => (
                    <CoreCard
                        key={val.title}
                        icon={val.icon}
                        title={val.title}
                        description={val.tagline}
                        className={cn("mx-2 mb-3 text-base", val.bg)}
                    />
                ))}
            </div>
        </div>
        </section>
    )
}

export function CoreCard({icon, title, description, className}) {
    const [isVisible, setIsVisible] = useState(false);
    const cardRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.unobserve(entry.target);
                }
            },
            {
                threshold: 0.1,
                rootMargin: '0px 0px -30px 0px'
            }
        );

        if (cardRef.current) {
            observer.observe(cardRef.current);
        }

        return () => observer.disconnect();
    }, []);

    return (
        <Card 
            ref={cardRef}
            className={cn(
                "card-hover-line rounded-none border-white/10 transition-all shadow-2xl shadow-blue-400 cursor-pointer group hover:-translate-y-1 duration-700 ease-out",
                isVisible 
                    ? 'opacity-100 translate-y-0 scale-100' 
                    : 'opacity-0 translate-y-6 scale-95',
                className
            )}
        >
            <CardContent className="p-6">
                <div className="flex flex-col items-center text-center gap-4">
                    <div className={`transition-all duration-700 ease-out delay-200 ${
                        isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-75'
                    }`}>
                        {icon}
                    </div>
                    <h3 className={`md:text-2xl text-base font-bold transition-all duration-700 ease-out delay-300 ${
                        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'
                    }`}>
                        {title}
                    </h3>
                    <p className={`font-medium transition-all duration-700 ease-out delay-400 ${
                        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'
                    }`}>
                        {description}
                    </p>
                </div>
            </CardContent>
        </Card>
    )
}
