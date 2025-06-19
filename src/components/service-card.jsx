// ServiceCard.jsx
"use client"
import { HoverButton } from "./hover-button";
import { Card, CardTitle, CardContent, CardHeader, CardDescription, CardFooter } from "./ui/card";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogClose } from "./ui/dialog";
import { useEffect, useRef, useState } from "react";
import { X, Mail,Linkedin } from "lucide-react";

export function ServiceCard ({title, description, image, url}) {
    const [isVisible, setIsVisible] = useState(false);
    const [modalOpen, setModalOpen] = useState(false);
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
        <>
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
                        className={`h-[300px] object-cover z-20 text-center transition-all duration-700 ease-out delay-200 ${
                            isVisible ? 'scale-100 opacity-100' : 'scale-95 opacity-0'
                        }`} 
                        src={image} 
                        alt={title} 
                    />
                </div>
                <div className="md:hidden block mx-auto my-auto">
                    <img 
                        className={`h-[200px] object-cover z-20 text-center transition-all duration-700 ease-out delay-200 ${
                            isVisible ? 'scale-100 opacity-100' : 'scale-95 opacity-0'
                        }`} 
                        src={image} 
                        alt={title} 
                    />
                </div>
            </CardHeader>
            <CardContent className="relative bg-neutral-100 z-20 hover:bg-neutral-200 h-[230px] md:h-[300px]">
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
                    <div onClick={() => setModalOpen(true)} className="m-0 p-0">
                    <HoverButton
                        isPrimary={false}
                        className="hover:text-white text-xs md:text-base pl-2 pr-0 py-1 md:py-2"
                        
                    >
                        Learn More
                    </HoverButton>
                    </div>
                </CardFooter>
            </CardContent>
        </Card>
        <Dialog open={modalOpen} onOpenChange={setModalOpen}>
            <DialogContent className="md:min-w-6xl w-full mx-auto md:mx-4 p-0 overflow-hidden">
                <button
                    onClick={() => setModalOpen(false)}
                    className="absolute right-4 top-4 z-10 p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
                >
                    <X className="w-5 h-5 text-gray-600" />
                </button>
                
                <div className="flex flex-col md:flex-row">
                <div className="flex-shrink-0 md:p-8 bg-gray-50 flex flex-col items-center w-full md:w-[30%]">
                    <div className="overflow-x-hidden mb-1 md:mb-6 mx-auto my-auto">
                    <img
                        src={image}
                        alt={title}
                        className="max-h-[300px] md:max-h-fit object-cover"
                    />
                    </div>
                    
                </div>

                
                
                <div className="flex-1 p-8 max-h-[30rem] md:max-h-96 overflow-y-auto my-auto md:w-[80%]">
                    <h2 className="text-base md:text-2xl font-bold text-gray-900 mb-1 text-center">{title}</h2>
                    <p className="text-gray-600 mb-2 text-center">{title}</p>
                    <div className="overflow-y-auto prose prose-gray text-sm md:text-base">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorum vero, expedita ipsum dolores aliquid illum officiis vel. Vel perferendis ea suscipit, quae eos temporibus similique id inventore. Quia, nisi temporibus.
                    Exercitationem excepturi porro deleniti. Consequatur eveniet, maxime dolor suscipit ducimus et! Vitae necessitatibus quas doloribus. Unde sint, enim vel cumque, nisi itaque qui officia ratione velit saepe distinctio animi ea?
                    Iste nobis tenetur aspernatur quaerat, maiores eveniet ab vel, hic sed quis inventore velit excepturi animi soluta repellendus illo porro ut tempore eos placeat magnam ipsa sequi debitis. Harum, minus.
                    Perferendis ipsam maiores magni obcaecati! Molestias ullam dolorem repellat ea impedit enim in iste, qui possimus repudiandae! Tempora eum expedita voluptatibus, molestias sapiente odio ipsum, rem, doloribus necessitatibus minima placeat.
                    Fugiat recusandae quasi amet obcaecati perferendis quos neque. Dicta facere aperiam sint id laboriosam. Deleniti facere, sit, cupiditate maiores, labore quam perspiciatis libero ea sequi quis rem. Sit, fuga ad.
                    </div>
                </div>
                </div>
            </DialogContent>
        </Dialog>
        </>
    )
}
