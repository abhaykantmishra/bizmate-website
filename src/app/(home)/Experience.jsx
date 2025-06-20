import { CountUp } from "@/components/count-up";
import { Separator } from "@/components/ui/separator";
import { image_url } from "@/constant/image";

export function Experience(){
    return (
        <section className="my-20">
            <div className="container mx-auto flex flex-col justify-center z-20">
                <h2 className="text-2xl md:text-5xl font-bold text-center z-20 my-20">Our Experience</h2>

                <div className="w-full flex md:flex-row flex-col">
                    <div className="md:w-1/2">
                        <img src={"/assets/experience.jpeg"} alt="experience" />
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
                <div id="count" className="flex md:flex-row flex-col z-20 mx-4 bg-neutral-100 shadow-2xl p-2 rounded-md my-10">
                    <div className="md:w-[30%] card-hover-line z-20 px-10 mx-0 py-8 md:py-0 flex flex-col items-center justify-center hover:bg-white">
                        <p className="font-bold text-lg md:text-4xl text-blue-600 p-0 m-0">Our Stats</p>
                        <p className="font-bold text-lg md:text-4xl text-blue-600 p-0 m-0">of Success</p>
                    </div>
                    {/* <Separator orientation="vertical" className="text-black z-20" /> */}
                    <div className="md:w-[70%] grid grid-cols-2 md:grid-cols-3 ">
                        <div className="z-20 px-4 md:px-10 py-4 md:py-10 border-1 border-blue-700 m-1 hover:bg-white">
                            <div className="text-2xl md:text-4xl font-bold text-blue-500">
                                <CountUp start={0} end={30} duration={1000} decimals={0} easing="easeOut" />+ yrs
                            </div>
                            <div className="text-black text-sm md:text-xl">HR Experience</div>
                        </div>
                        <div className="z-20 px-4 md:px-10 py-4 md:py-10 border-1 border-blue-700 m-1 hover:bg-white">
                            <div className="text-2xl md:text-4xl font-bold text-blue-500">
                                <CountUp start={0} end={2000} duration={1000} decimals={0} easing="easeOut" />+
                            </div>
                            <div className="text-black text-sm md:text-xl">Client count</div>
                        </div>
                        <div className="z-20 px-4 md:px-10 py-4 md:py-10 border-1 border-blue-700 m-1 hover:bg-white">
                            <div className="text-2xl md:text-4xl font-bold text-blue-500">
                                <CountUp start={0} end={40} duration={1000} decimals={0} easing="easeOut" />+
                            </div>
                            <div className="text-black text-sm md:text-xl">Industries</div>
                        </div>
                        <div className="z-20 px-4 md:px-10 py-4 md:py-10 border-1 border-blue-700 m-1 hover:bg-white">
                            <div className="text-2xl md:text-4xl font-bold text-blue-500">
                                <CountUp start={0} end={3000} duration={1000} decimals={0} easing="easeOut" />+
                            </div>
                            <div className="text-black text-sm md:text-xl">Hires</div>
                        </div>
                        <div className="z-20 px-4 md:px-10 py-4 md:py-10 border-1 border-blue-700 m-1 hover:bg-white">
                            <div className="text-2xl md:text-4xl font-bold text-blue-500">
                                <CountUp start={0} end={95} duration={1000} decimals={0} easing="easeOut" />%
                            </div>
                            <div className="text-black text-sm md:text-xl">Retention rate</div>
                        </div>
                        <div className="z-20 px-4 md:px-10 py-4 md:py-10 border-1 border-blue-700 m-1 hover:bg-white">
                            <div className="text-2xl md:text-4xl font-bold text-blue-500">
                                <CountUp start={0} end={87} duration={1000} decimals={0} easing="easeOut" />+
                            </div>
                            <div className="text-black text-sm md:text-xl">Coaching sessions</div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}