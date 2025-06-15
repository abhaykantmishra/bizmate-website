import { BackgroundProvider } from "@/providers/background-provider";
import { SmallCard } from "./small-card";
import { CTA } from "@/app/(home)/CTA";
import Faq from "./faq";
import Link from "next/link";
import { HoverButton } from "./hover-button";



export function ServiceTemplatePage({
    serviceName,
    title,
    description, // array
    image,
    whatWeDo, // array
    faqs, // array

}) {
    return (
        <BackgroundProvider>
            <div className="max-w-7xl">
            
            {/* service Name heading section  */}
            <div className="relative max-w-4xl md:mx-auto mx-2 my-10 md:my-20 z-20 py-4 rounded-full
                bg-gradient-to-br from-blue-300 to-violet-300
            ">
            <h1 className="text-xl md:text-5xl font-bold text-center mx-2">{serviceName}</h1>
            </div>

            {/* image & title,description */}

            <div className="relative rounded-md max-w-full md:max-w-7xl bg-blue-50 flex flex-col md:flex-row md:mx-auto my-10 mb-32">
                <div className="md:w-[40%] w-[90%] mx-auto ">
                    <figure className="md:max-h-[50vh] overflow-hidden mx-auto">
                    <img className="object-cover" src={image} alt={serviceName} />
                    </figure>
                </div>
                <div className="md:w-[60%] mx-2 my-auto">
                    {/* title  */}
                    <h1 className="text-xl md:text-3xl font-bold text-center text-blue-500">{title}</h1>
                    {/* description  */}
                    <div>
                        {
                            description.map((des, index) => (
                                <p key={index} className="font-bold my-4  text-sm md:text-lg">{des}</p>
                            ))
                        }
                    </div>

                    <div className="w-full flex justify-center mx-auto">
                    <Link className="w-full mx-auto" href="/contact">
                        <HoverButton
                        className={"mt-10 text-sm"}
                        hoverColor="#000"
                        > 
                        <p>Get in touch</p>
                        </HoverButton>
                    </Link>
                    </div>
                </div>
            </div>

            {/* what we do  */}

            <div className="mb-20 max-w-7xl">
                <h1 className="relative z-20 text-2xl md:text-5xl font-bold text-center">What We Do</h1>
                <div className="my-10 flex flex-col md:flex-wrap md:flex-row md:mx-auto justify-center items-center mb-32">
                {
                    whatWeDo.map((item, index) => (
                        <div key={index} className="max-w-[85%] md:max-w-[30%] max-h-fit md:my-4">
                        <SmallCard icon={item.icon} title={item.title} description={item.description} className={"md:w-[90%] md:mx-2 mb-3 md:text-sm text-xs"} />
                        </div>
                    ))
                }
                </div>
            </div>

            {/* Faq  */}
            <div className="mx-4">
                <Faq faqs={faqs} title={serviceName} />
            </div>


            {/* contact us  dialog */}
            <div className="mx-4 mb-20">
                <CTA />
            </div>

            </div>



        </BackgroundProvider>
    );
}