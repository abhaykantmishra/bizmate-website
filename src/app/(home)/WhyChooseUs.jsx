import { SmallCard } from "@/components/small-card"
import { image_url } from "@/constant/image"
import { Award, CheckCircle, GraduationCap, Repeat, Settings, ShieldCheck, Target, User, Workflow } from "lucide-react"
import { CoreCard } from "./Core"

const content = [
    {
        icon:<Award className="w-8 h-8 text-accent text-start" />,
        title: "Proven HR Leadership",
        description:"With over 35 years of industry experience, our founder brings deep insight, strategic thinking, and hands-on expertise to every engagement.",
        className: "bg-gradient-to-br from-rust-400 to-violet-500 border-white/10 hover:from-blue-600 hover:to-violet-700"

    },
    {
        icon:<Target className="w-8 h-8 text-accent" />,
        title: "Outcome-Driven Solutions",
        description:"We co-create HR strategies that align with your business goals — measurable, scalable, and built for growth."
    },
    {
        icon:<GraduationCap className="w-8 h-8 text-accent" />,
        title: "Trusted Coaching Credentials",
        description:"Led by an ICF PCC-certified coach, our leadership and transformation offerings bring global coaching standards to Indian workplaces."
    },
    {
        icon:<Settings className="w-8 h-8 text-accent" />,
        title: "Tailored, Not Templated",
        description:`No cookie-cutter playbooks. Every solution is customized to your people, pace, and priorities.`
    },
    {
        icon:<ShieldCheck className="w-8 h-8 text-accent" />,
        title: "Compliance You Can Rely On",
        description:`Stay ahead of regulatory changes with clear, actionable compliance roadmaps — from labour codes to ESG-linked practices.`
    },
    {
        icon:<Repeat className="w-8 h-8 text-accent" />,
        title: "End-to-End People Partner",
        description:`From hiring to succession, culture to compliance — we're your single partner across the HR lifecycle.`
    },
]

export function WhyChooseUs() {
    return (
        <section className="my-40">

           <h2 className="text-2xl md:text-5xl sticky font-bold text-sky-950 text-center mt-40 mb-20">Why Choose BizMate</h2>

            <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 mx-4 md:mx-10 lg:mx-0">
                {
                    content.map((item, index) => {
                        return (
                            <CoreCard 
                                className={"mx-2 my-2"}
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