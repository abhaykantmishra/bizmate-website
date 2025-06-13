import { SmallCard } from "@/components/small-card"
import { image_url } from "@/constant/image"
import { CheckCircle, User } from "lucide-react"

const content = [
    {
        icon:<User className="w-8 h-8 text-accent text-start" />,
        title: "Proven Results",
        description:"Our track record speaks for itself, as we';ve helped countless businesses find exceptional talent and achieve their hiring goals. With deep knowledge across various industries, we';re well-equipped to understand your sector';s unique Hr needs."
    },
    {
        icon:<User className="w-8 h-8 text-accent" />,
        title: "Industry Experties",
        description:"To ensure that you get sound, practical advice,all of our human resource consultants are seasoned proffesionals with years of hands-on experience as practitioners and business managers. Each consultant has expertise grounded in the studied discipline and best practices of human resources acquired within multiple industries, a comprehensive generalist background, and specific expertise in selected areas."
    },
    {
        icon:<User className="w-8 h-8 text-accent" />,
        title: "Personalised Services",
        description:"You will receive the human resource expertise you need, the credibility your employees want, and the service you deserve. You benefit by having the ability to leverage this extensive experience to help make the most of your working relationship. Further, by channeling this expertise into our consultancy services, we offer a range of workable solutions based on real industry experience."
    },
    {
        icon:<User className="w-8 h-8 text-accent" />,
        title: "Confidentiality",
        description:`Our approach is to tailer solutions to meet each individual client's objectives and surpaas expectations.`
    },
]

export function WhyChooseUs() {
    return (
        <section className="md:my-32 md:mb-10 my-32 bg-sky-200 py-4 rounded-md">
            <div className="max-w-[1700px] mx-auto flex flex-col justify-center">
                <div className="mx-2 md:mx-0 flex flex-col md:flex-row items-center z-20">
                    
                    
                    <div className="relative md:w-[40%] min-h-[100%] flex flex-col justify-center items-center z-20">
                        {/* bg image  */}
                        <div
                            className="hidden md:block w-full h-full absolute inset-0 bg-cover bg-center opacity-25"
                            style={{ backgroundImage: `url(${image_url})` }}
                        ></div>
                        {/* text  */}
                        <div className="w-full h-full">
                            <h2 className=" font-semibold text-2xl my-10 md:text-6xl text-blue-800 tracking-wide z-50"> Why Choose Bizmate </h2>
                        </div>
                    </div>
                
                    <div className="md:w-[60%] max-h-screen flex flex-col items-center justify-center">
                        <div className="flex flex-row items-center my-5 text-xs md:text-base md:font-semibold">
                            <img className="z-0 rounded-full p-0 m-0"  width={100} height={100} src={image_url} />
                            <p className="z-20">
                            {content[0].description}
                            </p>
                        </div>

                        <div className="flex flex-row items-center my-2 md:my-5 text-xs md:text-base md:font-semibold">
                            <img className="z-0 rounded-full p-0 m-0"  width={100} height={100} src={image_url} />
                            <p className="z-20">
                            {content[1].description}
                            </p>
                        </div>
                        <div className="flex flex-row items-center my-2 md:my-5 text-xs md:text-base md:font-semibold">
                            <img className="z-0 rounded-full p-0 m-0"  width={100} height={100} src={image_url} />
                            <p className="z-20">
                            {content[2].description}
                            </p>
                        </div>
                        {/* <div className="flex flex-row items-center  my-5 text-xl font-semibold">
                            <img  width={100} height={100} src={image_url} />
                            <p className="z-20">
                            {content[3].description}
                            </p>
                        </div> */}
                    </div>

                </div>

                <div className="mx-2 md:mx-0 bg-blue-500 p-3 rounded-sm z-20 md:text-2xltext-lg text-blue-700 text-center my-5 flex flex-row items-center">
                    {/* <CheckCircle className="text-green-600" /> */}
                    <img className="rounded-full hidden md:block" width={100} height={100} src={image_url} />
                    <img className="rounded-full block md:hidden" width={50} height={50} src={image_url} />
                    <p className="px-2 m-0 z-100 text-xs md:text-2xl text-white">
                    {content[3].description}
                    </p>
                </div>
            </div>
            
        </section>
    )
}