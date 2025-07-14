"use client"

import { useRef, useState, useEffect } from "react"
import Image from "next/image"
import { useInView } from "react-intersection-observer"
import { image_url } from "@/constant/image"


export default function StickyScroll({ content }) {
  const containerRef = useRef(null)
  const [activeIndex, setActiveIndex] = useState(0)

  // Create refs for each content item
  const sectionRefs = useRef(
    content.map(() => ({
      ref: null,
      inView: false,
    })),
  )

  const { ref: inViewRefs, inView } = useInView({
    threshold: 0.5,
    triggerOnce: false,
  })

  useEffect(() => {
    sectionRefs.current = content.map((_, index) => {
      return {
        ref: sectionRefs.current[index]?.ref || null,
        inView: false,
      }
    })
  }, [content])

  // Update active index based on which section is in view
  useEffect(() => {
    const newActiveIndex = sectionRefs.current.findIndex(({ inView }) => inView)
    if (newActiveIndex !== -1) {
      setActiveIndex(newActiveIndex)
    }
  }, [sectionRefs.current.map(({ inView }) => inView)])

  return (
    <div className="relative" ref={containerRef}>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="space-y-6 md:space-y-24 py-2 md:py-8 mx-4 md:mx-0">
          {content.map((item, index) => (
            <div
              key={index}
              ref={(el) => {
                sectionRefs.current[index].ref = el
                if (index === 0) {
                  inViewRefs(el)
                }
              }}
              className="min-h-[30vh]"
            >
              <h3 className="text-xl md:text-4xl font-bold text-sky-900 my-10">{item.title}</h3>
              <p className="text-sky-700 text-lg md:text-2xl">{item.content}</p>
            </div>
          ))}
        </div>
        <div className="relative hidden md:block">
          <div className="sticky top-24">
            <div className="relative h-[60vh] w-full">
              <img
                src={`${image_url}`}
                alt="About BizMate HR Solutions"
                // fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-sky-100/30 to-white/30" />
            </div>
            <div className="mt-4 bg-sky-100 p-4">
              <h4 className="font-bold text-sky-900">{content[activeIndex].title}</h4>
              <p className="text-sm text-sky-700 mt-2">{content[activeIndex].content.substring(0, 100)}...</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
