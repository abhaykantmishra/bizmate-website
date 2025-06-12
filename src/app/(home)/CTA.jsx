import { HoverButton } from "@/components/hover-button"
import Link from "next/link"
export function CTA() {
    return (
        <section className="mt-20 mb-48 md:mt-40 md:mb-40">
            <div className="container mx-auto flex flex-col justify-center">
                <div className="bg-black shadow-2xl shadow-blue-700 md:p-3 rounded-xl z-20 px-4 p-2 md:px-10 mx-3 md:mx-0 ">
                    <h2 className="text-2xl md:text-5xl text-white mt-10 font-bold">Take your next step</h2>
                    <p className="p-0 m-0 z-100 text-blue-500 font-semibold text-lg md:text-2xl md:mx-2 mt-2 mb-5">
                        Are you ready to skyrocket your business?
                    </p>
                    <Link className="my-2" href="/contact">
                        <HoverButton isPrimary={true} hoverColor="#fff" className={"hover:border-white hover:text-primary text-xs md:text-sm py-2 md:py-[11px] my-10"}>
                        Contact Us
                        </HoverButton>
                    </Link>
                </div>
            </div>
        </section>
    )
}