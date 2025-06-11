'use client'

import { useEffect, useRef, useState, useCallback } from 'react'

function useInView(ref) {
    const [isInView, setIsInView] = useState(false)
  
    useEffect(() => {
      const observer = new IntersectionObserver(
        ([entry]) => setIsInView(entry.isIntersecting),
        { threshold: 0.1 }
      )
  
      if (ref.current) {
        observer.observe(ref.current)
      }
  
      return () => {
        observer.disconnect()
      }
    }, [])
  
    return isInView
  }

const easeOutQuad = (t)  => t * (2 - t)

export function CountUp({
  end,
  start = 0,
  duration = 2000,
  decimals = 0,
  easing = 'easeOut'
}) {
  const [count, setCount] = useState(start)
  const requestRef = useRef()
  const startTimeRef = useRef()
  const endRef = useRef(end)
  const elementRef = useRef(null)
  const isInView = useInView(elementRef)

  const animate = useCallback((timestamp) => {
    if (!startTimeRef.current) {
      startTimeRef.current = timestamp
    }

    const runtime = timestamp - startTimeRef.current
    const relativeProgress = runtime / duration

    if (relativeProgress < 1) {
      let easedProgress = relativeProgress
      if (easing === 'easeOut') {
        easedProgress = easeOutQuad(relativeProgress)
      }

      const currentCount = start + (endRef.current - start) * easedProgress
      setCount(Number(currentCount.toFixed(decimals)))
      requestRef.current = requestAnimationFrame(animate)
    } else {
      setCount(endRef.current)
    }
  }, [start, duration, decimals, easing])

  useEffect(() => {
    endRef.current = end
    startTimeRef.current = undefined
    if (requestRef.current) {
      cancelAnimationFrame(requestRef.current)
    }
    requestRef.current = requestAnimationFrame(animate)

    return () => {
      if (requestRef.current) {
        cancelAnimationFrame(requestRef.current)
      }
    }
  }, [end, animate, isInView])

  return <span ref={elementRef}>{count.toLocaleString()}</span>
}
