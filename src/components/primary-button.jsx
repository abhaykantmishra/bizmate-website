import { Button } from "./ui/button" 
import { cn } from "@/lib/utils";
import { ArrowRight, Arrow } from "lucide-react";


export function PrimaryButton ({  hoverColor="", isArrow=false, children, className, ...props }) {
    return (
        <button
            className={cn("bg-primary text-primary-foreground hover:bg-primary/80 rounded-none p-[3px] mx-1 hover:cursor-pointer transition-colors ease-linear duration-1000 group-hover:bg-gradient-to-r from-primary to-white",
                hoverColor && `hover:bg-[${hoverColor}]`
            )}
            {...props}
        >
         <div className={cn(
                "text-primary-foreground text-xl rounded-none p-1 border-1 border-white flex flex-row items-center group transition-colors ease-linear duration-1000 group-hover:bg-gradient-to-r from-primary to-white",
                className,
                hoverColor && `group-hover:bg-[${hoverColor}]`
        )}>
            <>
            {children}
            <ArrowRight className="mx-2 h-5 w-6 group-hover:translate-x-1 transition-transform" />
            </>
        </div>  
        <span
            className="absolute inset-0 w-full h-full bg-primary transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-out"
        /> 
        </button>
    )

}