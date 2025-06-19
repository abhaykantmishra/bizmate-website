// ServiceCard.jsx
"use client"
import { HoverButton } from "./hover-button";
import { Card, CardTitle, CardContent, CardHeader, CardDescription, CardFooter } from "./ui/card";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

export function ServiceCard ({title, description, image, url}) {
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
                rootMargin: '0px 0px -50px 0px'
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
            className={`rounded-none mx-5 my-0 p-0 md:m-0 shadow-xl shadow-purple-300 border-[3px] border-blue-400 z-20 transition-all duration-700 ease-out ${
                isVisible 
                    ? 'opacity-100 translate-y-0' 
                    : 'opacity-0 translate-y-8'
            }`}
        >
            <CardHeader className="">
                <div className="hidden md:block mx-auto my-auto ">
                    <img 
                        width={300} 
                        height={300} 
                        className={`object-cover z-20 text-center transition-all duration-700 ease-out delay-200 ${
                            isVisible ? 'scale-100 opacity-100' : 'scale-95 opacity-0'
                        }`} 
                        src={image} 
                        alt={title} 
                    />
                </div>
                <div className="md:hidden block mx-auto my-auto">
                    <img 
                        width={200} 
                        height={200} 
                        className={`object-cover z-20 text-center transition-all duration-700 ease-out delay-200 ${
                            isVisible ? 'scale-100 opacity-100' : 'scale-95 opacity-0'
                        }`} 
                        src={image} 
                        alt={title} 
                    />
                </div>
            </CardHeader>
            <CardContent className="relative bg-neutral-100 z-20 hover:bg-neutral-200 h-[300px] md:h-[400px]">
                <CardTitle className={`text-lg md:text-2xl font-bold text-center my-5 text-blue-600 transition-all duration-700 ease-out delay-300 ${
                    isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                }`}>
                    {title}
                </CardTitle>
                <CardDescription className={`max-h-[100px] md:max-h-[180px] overflow-y-clip text-start text-black text-xs md:text-base my-5 transition-all duration-700 ease-out delay-400 ${
                    isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                }`}>
                    {description}   
                </CardDescription>
                <CardFooter className={`mx-auto mt-10 absolute bottom-0 left-0 mb-5 transition-all duration-700 ease-out delay-500 ${
                    isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                }`}>
                    <Link href={`${url}`}>
                        <HoverButton isPrimary={false} className="hover:text-white text-xs md:text-base pl-2 pr-0 py-1 md:py-2">
                            Learn More
                        </HoverButton>
                    </Link>
                </CardFooter>
            </CardContent>
        </Card>
    )
}
