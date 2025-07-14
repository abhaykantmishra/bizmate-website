import { SmallCard } from "@/components/small-card"
import { image_url } from "@/constant/image"
import { Award, CheckCircle, GraduationCap, Repeat, Settings, ShieldCheck, Target, User, Workflow } from "lucide-react"
import { CoreCard } from "./Core"

const content = [
    {
        icon:<Award className="w-10 h-10" />,
        title: "Proven HR Leadership",
        description:"With over 35 years of industry experience, our founder brings deep insight, strategic thinking, and hands-on expertise to every engagement.",
        className: "bg-gradient-to-br from-yellow-100 via-yellow-50 to-white hover:from-yellow-200 hover:to-yellow-300"
    },
    {
        icon:<Target className="w-10 h-10 " />,
        title: "Outcome-Driven Solutions",
        description:"We co-create HR strategies that align with your business goals — measurable, scalable, and built for growth.",
        className: "bg-gradient-to-br from-blue-100 via-blue-50 to-white hover:from-blue-200 hover:to-blue-300"
    },
    {
        icon:<GraduationCap className="w-10 h-10 " />,
        title: "Trusted Coaching Credentials",
        description:"Led by an ICF PCC-certified coach, our leadership and transformation offerings bring global coaching standards to Indian workplaces.",
        className: "bg-gradient-to-br from-purple-100 via-purple-50 to-white hover:from-purple-200 hover:to-purple-300"
    },
    {
        icon:<Settings className="w-10 h-10 " />,
        title: "Tailored, Not Templated",
        description:`No cookie-cutter playbooks. Every solution is customized to your people, pace, and priorities.`,
        className: "bg-gradient-to-br from-green-100 via-green-50 to-white hover:from-green-200 hover:to-green-300"
    },
    {
        icon:<ShieldCheck className="w-10 h-10" />,
        title: "Compliance You Can Rely On",
        description:`Stay ahead of regulatory changes with clear, actionable compliance roadmaps — from labour codes to ESG-linked practices.`,
        className: "bg-gradient-to-br from-sky-100 via-sky-50 to-white hover:from-sky-200 hover:to-sky-300"
    },
    {
        icon:<Repeat className="w-10 h-10" />,
        title: "End-to-End People Partner",
        description:`From hiring to succession, culture to compliance — we're your single partner across the HR lifecycle.`,
        className: "bg-gradient-to-br from-pink-100 via-pink-50 to-white hover:from-pink-200 hover:to-pink-300"
    },
]

export function WhyChooseUs() {
    return (
        <section className="md:my-40 mb-0">

           <h2 className="text-2xl md:text-5xl sticky font-bold text-sky-950 text-center mt-40 mb-20">Why Choose BizMate</h2>

            <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 mx-4 md:mx-10 lg:mx-0">
                {
                    content.map((item, index) => {
                        return (
                            <CoreCard 
                                className={item.className + " mx-2 my-2"}
                                key={index}
                                icon={item.icon}
                                title={item.title}
                                description={item.description}
                            />
                        )
                    })
                }

            </div>
        </section>
    )
}