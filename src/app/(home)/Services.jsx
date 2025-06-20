import { ServiceCard } from "@/components/service-card";
import { Card } from "@/components/ui/card";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";
import { image_url } from "@/constant/image";

const services = [
  {
    title: "Strategic HR Advisory",
    description:"Align your HR strategy with business goals through audits, policy frameworks, and scalable solutions tailored to your organization's maturity.",
    image: "/assets/image10.jpeg",
    url:"/services/recruitment"
  },
  {
    title: "Leadership Development Programs",
    description:"Build next-gen leaders through experiential learning, behavioral assessments, and coaching-led programs grounded in globally recognized methodologies.",
    image: "/assets/image11.jpeg",
    url:"/services/recruitment"
  },
  {
    title: "Executive Coaching",
    description:"1:1 coaching for CXOs, founders, and HR leaders to enhance clarity, influence, and resilience. Led by an ICF PCC-certified coach with deep industry insight.",
    image: "/assets/image12.jpeg",
    url:"/services/recruitment"
  },
  {
    title: "Recruitment Solutions",
    description:"Find the right people, faster. We use structured hiring methods and deep market mapping to ensure your talent pipeline is future-proof.",
    image: "/assets/image7.jpeg",
    url:"/services/recruitment"
  },
  {
    title: "Staffing Solutions",
    description:"Scale quickly with flexible staffing — contract, temp-to-perm, or turnkey project hires — without compromising on talent quality.",
    image: "/assets/image1.jpeg",
    url:"/services/staffing"
  },
  {
    title: "Talent Management",
    description:"Identify, develop, and retain top performers with performance frameworks, potential mapping, and succession planning designed for long-term growth.",
    image: "/assets/image9.jpeg",
    url:"/services/talent-management"
  },
  {
    title: "Culture & Engagement Consulting",
    description:"Create a culture of inclusion, performance, and purpose. Our diagnostics and interventions turn values into visible behaviors.",
    image: "/assets/image8.jpeg",
    url:"/services/hr-consultancy"
  },
  {
    title: "HSE Services",
    description:"Drive a safety-first culture with tailored Health, Safety & Environment consulting — from risk audits to training rollouts and compliance tools.",
    image: "/assets/hse.jpeg",
    url:"/services/hse"
  },
  {
    title: "Customized Solutions",
    description:"Whether you're scaling fast or going lean, we design flexible, plug-and-play HR solutions to match your pace and priorities.",
    image: "/assets/customized.jpeg",
    url:"/services/customized-solutions"
  }
]

export function Services() {
    return (
        <section className="my-20 relative" id="services">
        <div className="container mx-auto">
      
          <h2 className="text-2xl md:text-5xl font-bold text-sky-950 text-center z-20">Our Expertise</h2>
          <div className="flex flex-col gap-1 mt-6 mb-4 w-full mx-auto">
            <p className={"font-serif font-semibold tracking-normal text-teal-500 text-lg text-center md:text-3xl" }> From recruitment to leadership coaching,</p>
            <p className={"font-serif font-semibold tracking-normal text-teal-500 text-lg text-center md:text-3xl" }> We design HR solutions that grow with you</p>
          </div>

          <div className="w-full h-0 bg-sky-950 z-20 mt-2 mb-12 md:mb-20" />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mx-4 md:mx-0 z-20">
            {
              services.map((item, index) => (
                <ServiceCard key={index} 
                  title={item.title} 
                  description={item.description} 
                  image={item.image} 
                  url={item.url}
                />
              ))
            }
          </div>
          
        </div>
      </section>
    )
}