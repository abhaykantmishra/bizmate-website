import { ServiceTemplatePage } from "@/components/service-template-page";
import { image_url } from "@/constant/image";

const whatWeDo = [
    {
      icon:<img className="md:w-20 w-14 h-14 md:h-20 rounded-full" src={image_url} alt="" />,
      title:"Title 1 in service",
      description:  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quae."
    },
    {
            icon:<img className="md:w-20 w-14 h-14 md:h-20 rounded-full" src={image_url} alt="" />,

      title:"Title 1 in service",
      description:  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quae."
    },
    {
            icon:<img className="md:w-20 w-14 h-14 md:h-20 rounded-full" src={image_url} alt="" />,

      title:"Title 1 in service",
      description:  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quae."
    },
    {
            icon:<img className="md:w-20 w-14 h-14 md:h-20 rounded-full" src={image_url} alt="" />,

      title:"Title 1 in service",
      description:  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quae."
    }, 
    {
            icon:<img className="md:w-20 w-14 h-14 md:h-20 rounded-full" src={image_url} alt="" />,

      title:"Title 1 in service",
      description:  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quae."
    },  
]

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

export default function CustomizedSolutionPage(){
    return (
        <ServiceTemplatePage 
            serviceName={"HSE Services"}
            title={"Make your Operations safe and sustainable"}    
            description={["We believe that a safe and sustainable workplace is not just an option but a necessity.","We provide HSE services and ensure they become an integral part of the operational process"]}
            image={image_url}
            whatWeDo={whatWeDo}
            faqs={faqs}
        />
    )
}