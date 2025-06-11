import { HoverButton } from "@/components/hover-button"
import Link from "next/link"
export function CTA() {
    return (
        <section className="my-40">
            <div className="container mx-auto flex flex-col justify-center">
                <div className="bg-black shadow-2xl shadow-blue-700 p-3 rounded-xl z-50 px-10">
                    <h2 className="text-6xl text-white mt-10 font-bold">Take your next step</h2>
                    <p className="p-0 m-0 z-100 text-blue-500 font-semibold text-3xl mx-2 mt-2 mb-5">
                        Are you ready to skyrocket your business?
                    </p>
                    <Link className="my-2" href="/contact">
                        <HoverButton isPrimary={true} hoverColor="#fff" className={"hover:border-white hover:text-primary text-xl my-10"}>
                        Contact Us
                        </HoverButton>
                    </Link>
                </div>
            </div>
        </section>
    )
}