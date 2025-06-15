import { ServiceCard } from "@/components/service-card";
import { Card } from "@/components/ui/card";
import { image_url } from "@/constant/image";

const services = [
  {
    title: "Recruitment Solutions",
    description:"We are your trusted partner in finding top talent for your organization. Our comprehensive range of recruitment solutions is designed to meet your unique hiring needs, helping you build a high-performing team",
    image: image_url,
    url:"/services/recruitment"
  },
  {
    title: "Staffing Solutions",
    description:"Equipped with in depth knowledge of labour legislation and its compliance supported by experienced backend team we provide staffing solutions to take care of entire lifecycle of associate team members, where client has its management and control while being away from the hassle of day-to-day management administrative aspect payroll and legal aspects.",
    image: image_url,
    url:"/services/staffing"
  },
  {
    title: "Talent Management Solution",
    description:"Our Talent Management Solution Services are designed to help you attract, develop, and retain the best talent in your industry.We have got Training Program to suit each requirement- Technical, Behaviour, management, and Leadership. Our training solutions are tailor-made to train & develop human resources to meet organizational immediate or long-term or strategic goals.",
    image: image_url,
    url:"/services/talent-management"
  },
  {
    title: "HR Consulting Services",
    description:"Our HR consultants are here to advise and support you in all aspects of human resources, ensuring compliance, efficiency, and employee satisfaction",
    image: image_url,
    url:"/services/hr-consultancy"
  },
  {
    title: "HSE Services",
    description:"We believe that a safe and sustainable workplace is not just an option but a necessity. We provide HSE services and ensure they become an integral part of the operational process.",
    image: image_url,
    url:"/services/hse"
  },
  {
    title: "Customized Solutions",
    description:"Your business is unique, and your talent needs are too. We work closely with you to develop tailored solutions that address your specific challenges and objectives",
    image: image_url,
    url:"/services/customized-solutions"
  }
]

export function Services() {
    return (
        <section className="my-20 relative">
        <div className="container mx-auto">
          <h2 className="text-2xl md:text-5xl font-bold text-sky-950 mb-12 text-center z-20">Our Services</h2>
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