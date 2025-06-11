import { ArrowRight } from 'lucide-react';
import React from 'react';
import { cn } from '@/lib/utils';

export function HoverButton ({
    children, className,hoverColor="", isPrimary=true, onClick,...props
}) {
    const bgColor = isPrimary ? 'bg-primary' : 'bg-transparent';
    const transitionColor = isPrimary ? `${hoverColor !== "" ? `bg-[${hoverColor}]` : 'bg-primary'}` : `${hoverColor !== "" ? `bg-[${hoverColor}]` : 'bg-primary'}`;
    const textColor = isPrimary ? 'text-white' : 'text-primary';
    const textHoverColor = isPrimary ? ` ${hoverColor !== "" ? `text-[${hoverColor}]` : 'text-primary'} ` :  'text-white' 

  return (
    <>
    <button className={cn(`relative overflow-hidden px-6 py-3 font-medium ${bgColor} ${textColor} border ${!isPrimary ? "border-primary" : "border-white"}   group mx-1`,
      className,
      onClick={onClick},
      {...props}
    )}>
      <span className={`relative flex flex-row items-center z-10 transition-colors duration-300 group-hover:${textHoverColor} `}>
        <span>{children}</span>
        <ArrowRight className="mx-3 h-5 w-6 group-hover:translate-x-1 transition-transform" />
      </span>
      <span
        style={{
            backgroundColor: hoverColor
        }}
        className={`absolute inset-0 w-full h-full bg-primary group-hover:${isPrimary ? "border-primary" : "border-white"} transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-out`}
      />
    </button>
            </>
  );
};