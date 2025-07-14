"use client"
import { Card, CardContent } from "./ui/card"
import { cn } from "@/lib/utils"
import { useEffect, useRef, useState } from "react"

export function SmallCard({icon, title, description, className}) {
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
                "card-hover-line rounded-none bg-gradient-to-br from-blue-400 to-violet-500 border-white/10 hover:from-blue-600 hover:to-violet-700 transition-all cursor-pointer group hover:-translate-y-1 duration-700 ease-out",
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
                    <h3 className={`md:text-xl text-base font-bold transition-all duration-700 ease-out delay-300 ${
                        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'
                    }`}>
                        {title}
                    </h3>
                    <p className={`text-accent font-medium transition-all duration-700 ease-out delay-400 ${
                        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'
                    }`}>
                        {description}
                    </p>
                </div>
            </CardContent>
        </Card>
    )
}
