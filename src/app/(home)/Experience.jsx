import { CountUp } from "@/components/count-up";
import { Separator } from "@/components/ui/separator";
import { image_url } from "@/constant/image";

export function Experience(){
    return (
        <section className="my-20">
            <div className="container mx-auto flex flex-col justify-center z-20">
                <h2 className="text-4xl font-bold text-center z-20">Experience</h2>

                <div className="w-full flex md:flex-row flex-col">
                    <div className="hidden md:block w-1/2">
                        <img src={image_url} alt="experience" />
                    </div>
                    <div 
                        // style={{backgroundImage: `url(${image_url})`, backgroundSize: "cover", opacity: 0.5}} 
                        className="w-full md:w-1/2 z-20 flex flex-col items-center justify-center my-5 md:my-0"
                    >
                    <p className="text-sm md:text-2xl z-20 md:mx-0 mx-2">
                        At Bizmate, we pride ourselves on our extensive experience in the world of recruitment. With years of dedicated service, our team has honed its expertise in connecting top-tier talent with exceptional opportunities. Our success stories range across industries, from startups to established enterprises, reflecting our commitment to delivering tailored solutions and contributing to the growth of businesses and careers alike
                    </p>
                    </div>
                </div>

                {/* Count up section */}
                <div id="count" className="w-full grid grid-cols-2 md:flex md:flex-row z-20  bg-neutral-100 rounded-md mb-10">
                    <div className="card-hover-line md:w-[30%] z-20 px-10 mx-3 md:mx-0 flex flex-col items-center justify-center bg-neutral-50">
                        <p className="font-bold text-lg md:text-4xl text-blue-600 p-0 m-0">Our Stats</p>
                        <p className="hidden md:block font-bold text-2xl md:text-4xl text-blue-600">of Success</p>
                    </div>
                    {/* <Separator orientation="vertical" className="text-black z-20" /> */}
                    <div className="md:w-[20%] z-20 mx-4 md:mx-10 my-4 md:my-10">
                        <div className="text-2xl md:text-5xl font-bold text-purple-500">
                            <CountUp start={0} end={90} duration={1000} decimals={0} easing="easeOut" />%
                        </div>
                        <div className="text-black text-sm md:text-xl">No of placements</div>
                    </div>
                    <div className="md:w-[20%] z-20 mx-4 md:mx-10 my-4 md:my-10">
                        <div className="text-2xl md:text-5xl font-bold text-purple-500">
                            <CountUp start={0} end={95} duration={1000} decimals={0} easing="easeOut" />%
                        </div>
                        <div className="text-black text-sm md:text-xl">Client satisfaction</div>
                    </div>
                    <div className="md:w-[20%] z-20 mx-4 md:mx-10 my-4 md:my-10">
                        <div className="text-2xl md:text-5xl font-bold text-purple-500">
                            <CountUp start={0} end={87} duration={1000} decimals={0} easing="easeOut" />%
                        </div>
                        <div className="text-black text-sm md:text-xl">Industry Specialization</div>
                    </div>
                </div>
            </div>
        </section>
    )
}