"use client";

import { Card } from "@/components/ui/card";
import { image_url } from "@/constant/image";
import { BackgroundProvider } from "@/providers/background-provider"
import { useScroll, useTransform, motion, useInView } from 'motion/react';
import { useRef } from 'react';
import { WhyChooseUs } from "../(home)/WhyChooseUs";
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog';
import { useState } from "react";
import { X, Mail, Linkedin } from "lucide-react";
import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";
import { AboutUs } from "../(home)/AboutUs";


const content = [
  "Out of Sea of Sameness, Bizmate by virtue of decades of working experience in varied Industries & functions of its partners & consultants, lifts the Employees value proposition for organizational growth",
  "To be a respected Consultancy firm recognised by Our client as most trusted partner for delivering excellence by providing most suitable solutions for their business need.",
  "To be a solution provider to our client for their business related to its critical yet most complicated resource i.e Human Resource in its entire gamut and sphere be it related to policy, system or process under one umbrella."
]

const team = [
  {
    name: "Mr. Atul Trikha",
    title: "Founder",
    image: image_url,
    email: "example@email.com",
    linkedin:"https://linkedin.com",
    bio:"With a background in mechanical engineering and an illustrious career spanning over 35 years mostly with multinational giant, JCB, Mr. Atul Trikha brings a unique blend of technical expertise and visionary leadership. In 2022, driven by an entrepreneurial spirit, he embarked on a new journey and set up a new venture from scratch which has now commendable turnover of 15 crores, a testament to his strategic acumen and unwavering commitment to excellence. Mr. Tirkha’s expertise and relentless pursuit of innovation positions Bizmate HR Solutions at the forefront of industry evolution"
  },
  {
    name: "Dr.P Vigneswara llavarasan",
    title: "Advisor & Consultant",
    image: image_url,
    email: "example@email.com",
    linkedin:"https://linkedin.com",
    bio:"is Abdulaziz Alsagar Chair Professor at the Dept. of Management Studies, IIT, Delhi. He researches and teaches about the interaction of information and communication technologies (ICTs), society & and business. Dr. Ilavarasan is one of the top 2% cited scholars in the world in 2022 as per the Elsevier & Stanford study. He is a recipient of the Outstanding Young Faculty Fellowship Award at IIT Delhi. and Prof. M.N. Srinivas"
  },
  {
    name: "Prashant Prem",
    title: "Managing Partner",
    image: image_url,
    email: "example@email.com",
    linkedin:"https://linkedin.com",
    bio:"A distinguished C-Level HR professional and Strategic Business Leader, boasting over 35 years of comprehensive experience in Corporate HR. His passion lies in crafting and implementing transformative HR strategies, a proficiency honed through decades of success in strategic leadership roles. With the hands- on experience of leading the HR function he offers strategic insights and solutions for optimal human capital management in HR consulting"
  },
]

const testimonials =[
  {
    quote:
      "It was the best of times, it was the worst of times, it was the age of wisdom, it was the age of foolishness, it was the epoch of belief, it was the epoch of incredulity, it was the season of Light, it was the season of Darkness, it was the spring of hope, it was the winter of despair.",
    name: "Charles Dickens",
    title: "A Tale of Two Cities",
  },
  {
    quote:
      "To be, or not to be, that is the question: Whether 'tis nobler in the mind to suffer The slings and arrows of outrageous fortune, Or to take Arms against a Sea of troubles, And by opposing end them: to die, to sleep.",
    name: "William Shakespeare",
    title: "Hamlet",
  },
  {
    quote: "All that we see or seem is but a dream within a dream.",
    name: "Edgar Allan Poe",
    title: "A Dream Within a Dream",
  },
  {
    quote:
      "It is a truth universally acknowledged, that a single man in possession of a good fortune, must be in want of a wife.",
    name: "Jane Austen",
    title: "Pride and Prejudice",
  },
  {
    quote:
      "It was the best of times, it was the worst of times, it was the age of wisdom, it was the age of foolishness, it was the epoch of belief, it was the epoch of incredulity, it was the season of Light, it was the season of Darkness, it was the spring of hope, it was the winter of despair.",
    name: "Charles Dickens",
    title: "A Tale of Two Cities",
  },
  {
    quote:
      "It was the best of times, it was the worst of times, it was the age of wisdom, it was the age of foolishness, it was the epoch of belief, it was the epoch of incredulity, it was the season of Light, it was the season of Darkness, it was the spring of hope, it was the winter of despair.",
    name: "Charles Dickens",
    title: "A Tale of Two Cities",
  },
  {
    quote:
      "It was the best of times, it was the worst of times, it was the age of wisdom, it was the age of foolishness, it was the epoch of belief, it was the epoch of incredulity, it was the season of Light, it was the season of Darkness, it was the spring of hope, it was the winter of despair.",
    name: "Charles Dickens",
    title: "A Tale of Two Cities",
  },
  {
    quote:
      "It was the best of times, it was the worst of times, it was the age of wisdom, it was the age of foolishness, it was the epoch of belief, it was the epoch of incredulity, it was the season of Light, it was the season of Darkness, it was the spring of hope, it was the winter of despair.",
    name: "Charles Dickens",
    title: "A Tale of Two Cities",
  },
  {
    quote:
      "It was the best of times, it was the worst of times, it was the age of wisdom, it was the age of foolishness, it was the epoch of belief, it was the epoch of incredulity, it was the season of Light, it was the season of Darkness, it was the spring of hope, it was the winter of despair.",
    name: "Charles Dickens",
    title: "A Tale of Two Cities",
  },
]

const FadeInOnScroll = ({ children, delay = 0, direction = "up" }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  
  const directionVariants = {
    up: { y: 50, opacity: 0 },
    down: { y: -50, opacity: 0 },
    left: { x: 50, opacity: 0 },
    right: { x: -50, opacity: 0 }
  };

  return (
    <motion.div
      ref={ref}
      initial={directionVariants[direction]}
      animate={isInView ? { x: 0, y: 0, opacity: 1 } : directionVariants[direction]}
      transition={{ duration: 0.6, delay, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
};


const BioCard = ({ member, bioContent }) => {
  const [open, setOpen] = useState(false);

  return (
    <FadeInOnScroll delay={0.2}>
      <motion.div 
        className="flex flex-col items-center max-w-sm mx-auto md:my-10 my-3"
        whileHover={{ y: -5 }}
        transition={{ duration: 0.3 }}
      >
        <Dialog open={open} onOpenChange={setOpen}>
          <DialogTrigger asChild>
            <motion.div 
              className="relative w-48 h-48 rounded-full overflow-hidden group cursor-pointer mb-4"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <img
                src={member.image}
                alt={member.name}
                className="w-full h-full object-cover transition-opacity duration-300 group-hover:opacity-30"
              />
              
              <div className="absolute inset-0 bg-black bg-opacity-60 flex items-center justify-center opacity-0 group-hover:opacity-80 transition-opacity duration-300">
                <span className="text-white text-lg font-semibold tracking-wider underline">
                  READ BIO
                </span>
              </div>
            </motion.div>
          </DialogTrigger>
          
          <DialogContent className="md:min-w-6xl w-full mx-auto md:mx-4 p-0 overflow-hidden">
            <button
              onClick={() => setOpen(false)}
              className="absolute right-4 top-4 z-10 p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
            >
              <X className="w-5 h-5 text-gray-600" />
            </button>
            
            <div className="flex flex-col md:flex-row">
              <div className="flex-shrink-0 md:p-8 bg-gray-50 flex flex-col items-center w-full md:w-[20%]">
                <div className="w-32 md:w-48 h-32 md:h-48 rounded-full overflow-hidden mb-1 md:mb-6">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                
                <h2 className="text-base md:text-2xl font-bold text-gray-900 mb-1 text-center">{member.name}</h2>
                <p className="text-gray-600 mb-2 text-center">{member.title}</p>
                
                <div className="flex space-x-3">
                  <a href="#" className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors">
                    <Mail className="w-5 h-5 text-gray-600" />
                  </a>
                  <a href="#" className="p-2 rounded-full bg-blue-600 hover:bg-blue-700 transition-colors">
                    <Linkedin className="w-5 h-5 text-white" />
                  </a>
                </div>
              </div>
              
              <div className="flex-1 p-8 max-h-[30rem] md:max-h-96 overflow-y-auto my-auto md:w-[80%]">
                <div className="prose prose-gray md:min-w-3xl text-sm md:text-lg">
                  {bioContent}
                </div>
              </div>
            </div>
          </DialogContent>
        </Dialog>
        
        <motion.h3 
          className="text-xl font-semibold text-gray-900 mb-1"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          {member.name}
        </motion.h3>
        <motion.p 
          className="text-gray-600 mb-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          {member.title}
        </motion.p>
        
        <motion.div 
          className="z-50 flex space-x-3"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
        >
          <a href="#" className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors">
            <Mail className="w-5 h-5 text-gray-600" />
          </a>
          <a href="#" className="p-2 rounded-full bg-blue-600 hover:bg-blue-700 transition-colors">
            <Linkedin className="w-5 h-5 text-white" />
          </a>
        </motion.div>
      </motion.div>
    </FadeInOnScroll>
  );
};


export default function AboutPage() {

    const handleMouseEnter = (item) => {
      console.log(item)
      showPopup(item)
    }

    const container = useRef();
    const { scrollYProgress } = useScroll({
      target: container,
      offset: ['start start', 'end end'],
    });

    const scale = useTransform(scrollYProgress, [0, 1], [1, 0.8]);

    return (
         <BackgroundProvider>

          <div className="md:max-w-7xl w-full">
            {/* Hero Desktop  */}
            <main ref={container} className=' hidden md:block relative w-full md:min-h-screen my-auto mx-auto'>
              {/* <div className="relative h-[200vh]"> */}
              <HeroSection id="about-us-hero" scrollYProgress={scrollYProgress} />
              <Section2 id="our-journy" scrollYProgress={scrollYProgress} />
              {/* </div> */}
            </main>

            {/* Hero Mobile  */}
            <main className='md:hidden block relative w-full mx-auto'>
                <motion.section
                   style={{ scale }}
                  className='sticky max-w-full md:max-w-7xl mx-auto md:my-10 font-semibold top-20 flex flex-col  text-black'
                >

                  <div className="mx-4 md:min-h-[60vh] flex flex-col md:flex-row items-center justify-center z-0 bg-blue-100 rounded-md overflow-y-hidden">
                    <div className="md:w-[40%] w-[90%] mx-auto my-2">
                      <figure className="overflow-hidden mx-auto my-auto">
                      <img className="object-cover" src="/assets/image13.jpeg" alt={"about"} />
                      </figure>
                    </div>

                    <div className="md:w-[60%] w-full">  
                      <h1 className="md:text-5xl text-2xl text-blue-500 mt-2 md:my-4 mx-2 md:font-bold font-semibold text-center md:text-left">
                        Building Careers.
                        Building Organisations.
                      </h1>
                      <p className="text-black py-4 px-2 text-thin tracking-tight text-xs md:text-base">
                        We are an HR Consultancy firm led by Mr. Atul Trikha having more than 30 years of experience of Industry and was inleadership role in a multinational company before donning thecap of <span className="text-blue-600 text-bold">“Entrepreneurship”</span>. Our advisors & consultants includemost experienced Industry veterans from various fields such as <span className="text-blue-600 text-bold">HR</span>, <span className="text-blue-600 text-bold">Research & Development</span>, <span className="text-blue-600 text-bold">Quality</span>, <span className="text-blue-600 text-bold">Marketing</span> etc.
                      </p>
                    </div>
                  </div>

                </motion.section>

                <BackgroundProvider>
                  <motion.section
                    style={{ scale }}
                    className="relative mx-4 md:w-screen pt-0 md:pt-40 md:mb-40"
                  >
                    <div className="relative mx-3 md:mx-0">
                      <div className="sticky top-0 max-w-7xl mx-auto text-xs">
                      <WhyChooseUs />
                      {/* <AboutLeftCard image={image_url} title={"Our journey"} description={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quae."} /> */}
                      </div>
                    </div>
                    
                  </motion.section>
                </BackgroundProvider>
            </main>
            

            {/* Idea Vision Mission section  */}
            <section className="">
              <AboutUs />
            </section>

            {/* Core Team  */}
            <section id="our-core-team mt-0 pt-32" >
              <div className="relative mb-0 max-w-[1600px] mx-auto my-auto z-20">
                <OurCoreTeam />
              </div>
            </section>

            {/* Testimonials  */}
            <section className="relative max-w-[24rem] md:max-w-6xl mx-auto w-full z-20 md:my-32" id="testimonials" >
              <div className="max-w-full md:max-w-7xl mx-auto z-20 mb-40">
                <h1 className="z-20 text-center md:text-5xl font-bold md:my-10">Testimonials</h1>
                <InfiniteMovingCards
                      items={testimonials}
                      direction="right"
                      speed="slow"
                />
              </div>
            </section>

            {/* Follow Us  */}
            {/* <section>

            </section> */}
          </div>
         </BackgroundProvider>
    )
}

const HeroSection = ({ scrollYProgress }) => {
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.8]);
  const rotate = useTransform(scrollYProgress, [0, 1], [0, -5]);
  return (
    <>
    <motion.section
      style={{ scale, rotate }}
      className='sticky max-w-full md:max-w-7xl mx-auto md:my-10 font-semibold top-20 h-screen flex flex-col  text-black'
    >

      <div className="mx-4 md:min-h-[60vh] flex flex-col md:flex-row items-center justify-center z-0 bg-blue-100 rounded-md overflow-y-hidden">
        <div className="md:w-[40%] w-[90%] mx-auto my-2">
          <figure className="overflow-hidden mx-auto my-auto">
          <img className="object-cover" src="/assets/image13.jpeg" alt={"about"} />
          </figure>
        </div>

        <div className="md:w-[60%] w-full">  
          <h1 className="md:text-5xl text-2xl text-blue-500 mt-2 md:my-4 mx-2 md:font-bold font-semibold text-center md:text-left">
            Building Careers.
            Building Organisations.
          </h1>
          <p className="text-black py-4 px-2 text-thin tracking-tight text-xs md:text-base">
            We are an HR Consultancy firm led by Mr. Atul Trikha having more than 30 years of experience of Industry and was inleadership role in a multinational company before donning thecap of <span className="text-blue-600 text-bold">“Entrepreneurship”</span>. Our advisors & consultants includemost experienced Industry veterans from various fields such as <span className="text-blue-600 text-bold">HR</span>, <span className="text-blue-600 text-bold">Research & Development</span>, <span className="text-blue-600 text-bold">Quality</span>, <span className="text-blue-600 text-bold">Marketing</span> etc.
          </p>
        </div>
      </div>

    </motion.section>
    </>

  );
};

const Section2 = ({ scrollYProgress }) => {
  const scale = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const rotate = useTransform(scrollYProgress, [0, 1], [5, 0]);
  return (
    <BackgroundProvider>
    <motion.section
      style={{ scale, rotate }}
      className="relative h-screen mx-4 md:w-screen top-10 pt-0 md:pt-40 md:mb-40 mb-[800px]"
    >
      <div className="relative mx-3 md:mx-0">
        <div className="sticky top-0 max-w-7xl mx-auto text-xs">
        <WhyChooseUs />
        {/* <AboutLeftCard image={image_url} title={"Our journey"} description={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quae."} /> */}
        </div>
      </div>
      
    </motion.section>
    </BackgroundProvider>
  );
};
 
export const AboutLeftCard = ({image, title, description}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.section 
      ref={ref}
      className="md:my-32 md:mb-10 my-32 bg-sky-200 py-4 rounded-md mx-4 md:mx-0"
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="max-w-[1600px] mx-auto flex flex-col justify-center">
        <div className="mx-2 md:mx-0 flex flex-col md:flex-row items-center z-20">
          <motion.div 
            className="relative md:w-[40%] flex flex-col justify-center items-center z-20"
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <figure className='grid place-content-center overflow-hidden'>
              <img
                src={image}
                alt="about images"
                className='transition-all duration-300 w-full h-full align-bottom object-cover rounded-none hover:scale-105'
              />
            </figure>         
          </motion.div>

          <motion.div 
            className="md:w-[60%] max-h-screen flex flex-col items-center justify-center"
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <h2 className="font-semibold text-2xl my-10 md:text-5xl text-blue-800 tracking-wide z-50"> {title} </h2>
            <p className="text-black py-4 px-2 text-thin tracking-tight text-xs md:text-base">
              {description}
            </p>
          </motion.div>
        </div>
      </div>
    </motion.section>
  )
}     

export const AboutRightCard = ({image, title, description}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.section 
      ref={ref}
      className="md:my-32 md:mb-10 my-32 bg-sky-200 py-4 rounded-md mx-4 md:mx-0"
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="max-w-[1600px] mx-auto flex flex-col justify-center">
        <div className="mx-2 md:mx-0 flex flex-col md:flex-row items-center z-20">
          <motion.div 
            className="md:w-[60%] max-h-screen flex flex-col items-center justify-center"
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h2 className="font-semibold text-2xl my-10 md:text-5xl text-blue-800 tracking-wide z-50"> {title} </h2>
            <p className="text-black py-4 px-2 text-thin tracking-tight text-xs md:text-base">
              {description}
            </p>
          </motion.div>

          <motion.div 
            className="relative md:w-[40%] flex flex-col justify-center items-center z-20"
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <figure className='grid place-content-center overflow-hidden'>
              <img
                src={image}
                alt="about images"
                className='transition-all duration-300 w-full h-full align-bottom object-cover rounded-none hover:scale-105'
              />
            </figure>         
          </motion.div>
        </div>
      </div>
    </motion.section>
  )
} 

const OurCoreTeam = () => {
  return (
    <section className="z-20">
      <FadeInOnScroll>
        <h1 className="text-3xl font-bold md:text-5xl text-center z-50">Our Core Team</h1>
      </FadeInOnScroll>
      <div className="grid grid-col-1 md:grid-cols-3 max-w-6xl mx-auto my-4 md:my-20">
        {team.map((member, index) => (
          <BioCard 
            key={index} 
            member={member} 
            bioContent={member.bio}
          />
        ))}
      </div>
    </section>
  )
}