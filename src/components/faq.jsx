"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "motion/react"
import { ChevronDown, Mail } from "lucide-react"
import { cn } from "@/lib/utils"
import Link from "next/link";

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

function FAQItem({ question, answer, index }) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.3,
        delay: index * 0.15,
        ease: "easeOut",
      }}
      className={cn(
        "group border-[1px] border-neutral-200 dark:border-gray-800/50 rounded-none",
        "transition-all duration-200 ease-in-out  mx-auto",
        isOpen
          ? "bg-linear-to-br from-white via-gray-50/50 to-white dark:from-white/5 dark:via-white/2 dark:to-white/5"
          : "hover:bg-blue-400 text-white  dark:hover:bg-white/[0.02]",
      )}
    >
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="w-full px-6 py-4 flex items-center justify-between gap-4"
      >
        <h3
          className={cn(
            "text-base font-medium transition-colors duration-200 text-left ",
            "text-gray-200 dark:text-gray-300 ",
            isOpen && "text-gray-900 dark:text-white ",
          )}
        >
          {question}
        </h3>
        <motion.div
          animate={{
            rotate: isOpen ? 180 : 0,
            scale: isOpen ? 1.1 : 1,
          }}
          transition={{
            duration: 0.3,
            ease: "easeInOut",
          }}
          className={cn(
            "p-0.5 rounded-full shrink-0",
            "transition-colors duration-200",
            isOpen ? "text-primary" : "text-gray-400 dark:text-gray-500",
          )}
        >
          <ChevronDown className="h-4 w-4" />
        </motion.div>
      </button>
      <AnimatePresence initial={false} className="">
        {isOpen && (
          <motion.div
          
            initial={{ height: 0, opacity: 0 }}
            animate={{
              height: "auto",
              width: "auto",
              opacity: 1,
              transition: {
                height: {
                  duration: 0.4,
                  ease: [0.04, 0.62, 0.23, 0.98],
                },
                opacity: {
                  duration: 0.25,
                  delay: 0.1,
                },
              },
            }}
            exit={{
              height: 0,
              opacity: 0,
              transition: {
                height: {
                  duration: 0.3,
                  ease: "easeInOut",
                },
                opacity: {
                  duration: 0.25,
                },
              },
            }}
          >
            <div className="px-6 pb-4 pt-2 ">
              <motion.p
                initial={{ y: -8, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -8, opacity: 0 }}
                transition={{
                  duration: 0.3,
                  ease: "easeOut",
                }}
                className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed"
              >
                {answer}
              </motion.p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}

function Faq( {title, faqs} ) {
  
  return (
    <section className="md:my-40 my-10">
        <div className="max-w-full mx-auto flex flex-col justify-center">
            <div className="flex md:flex-row  flex-col bg-black shadow-2xl shadow-blue-700 p-3 rounded-none md:rounded-lg z-20 md:px-10 mx-2">
                <div className=" px-4 mx-auto py-10">
                    <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="max-w-2xl mx-auto text-center mb-12"
                    >
                    <h2 className="text-2xl md:text-4xl font-semibold mb-3 bg-linear-to-r from-gray-900 via-gray-800 to-gray-900 dark:from-white dark:via-gray-100 dark:to-white bg-clip-text text-white">
                        Frequently Asked Questions
                    </h2>
                    <p className="text-sm md:text-base text-blue-500">Everything you need to know about {title}</p>
                    </motion.div>

                    <div className="max-w-2xl mx-auto space-y-2">
                    {faqs?.map((faq, index) => (
                        <FAQItem key={index} {...faq} index={index} />
                    ))}
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Faq
