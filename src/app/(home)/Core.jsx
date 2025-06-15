import { SmallCard } from "@/components/small-card"
import { Presentation, Scale , Handshake, HandPlatter, Users2, HeartPlus} from "lucide-react"

const coreValues = [
    {
        icon: <Scale className="w-8 h-8 text-accent" />,
        title: "Integrity",
        description:"We embrace and uphold the highest standards of personal and professional ethics, honesty and trust"
    },
    {
        icon: <HeartPlus className="w-8 h-8 text-accent" />,
        title: "Empowerment",
        description:"Our solutions are based not on the theories but with proven practical experience coupled with innovation which empowers Leaders & Managers at all levels to deliver excellence"
    },
    {
        icon: <HandPlatter className="w-8 h-8 text-accent" />,
        title: "Responsibility",
        description:"We are responsible to fulfill our commitments to colleagues and clients with clear understanding of the urgency and accountability inherent in those commitments"
    },
    
    {
        icon: <Handshake className="w-8 h-8 text-accent" />,
        title: "Respect",
        description:"We treat everyone with uncompromising respect, civility and fairness."
    },
    {
        icon: <Users2 className="w-8 h-8 text-accent" />,
        title: "Collaboration",
        description:"We work as a team and share knowledge for continuous improvement, learning and innovation."
    },
]

export function Core(){
    return (
        <section className="my-20">
        <div className="container mx-auto">
            <h2 className="text-2xl md:text-5xl sticky font-bold text-sky-950 mb-12 text-center">Our Core Values</h2>

            <div className="hidden md:flex w-full">
                <div className="w-[36%] h-[600px]">
                    <SmallCard icon={coreValues[0].icon} title={coreValues[0].title} description={coreValues[0].description} className={"h-1/2 mx-2 mb-3"} />
                    <SmallCard icon={coreValues[1].icon} title={coreValues[1].title} description={coreValues[1].description} className={"h-1/2 mx-2"} />
                </div>
                <SmallCard icon={coreValues[2].icon} title={coreValues[2].title} description={coreValues[2].description} className={"w-[28%] h-[612px] mx-2 mb-0 py-32"} />
                <div className="w-[36%] h-[600px]">
                    <SmallCard icon={coreValues[3].icon} title={coreValues[3].title} description={coreValues[3].description} className={"h-1/2 mx-2 mb-3"} />
                    <SmallCard icon={coreValues[4].icon} title={coreValues[4].title} description={coreValues[4].description} className={"h-1/2 mx-2"} />
                </div>
            </div>

            <div className="md:hidden w-full flex flex-col items-center justify-center">
                <SmallCard icon={coreValues[0].icon} title={coreValues[0].title} description={coreValues[0].description} className={"w-[90%] mx-2 mb-3"} />
                <SmallCard icon={coreValues[1].icon} title={coreValues[1].title} description={coreValues[1].description} className={"w-[90%] mx-2 mb-3"} />
                <SmallCard icon={coreValues[2].icon} title={coreValues[2].title} description={coreValues[2].description} className={"w-[90%] mx-2 mb-3"} />
                <SmallCard icon={coreValues[3].icon} title={coreValues[3].title} description={coreValues[3].description} className={"w-[90%] mx-2 mb-3"} />
                <SmallCard icon={coreValues[4].icon} title={coreValues[4].title} description={coreValues[4].description} className={"w-[90%] mx-2 mb-3"} />
            </div>
            
        </div>
        </section>
    )
}