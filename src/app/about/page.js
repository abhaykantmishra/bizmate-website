import { BackgroundProvider } from "@/providers/background-provider"
import { Hero } from "../(home)/Hero"
import { AboutUs } from "../(home)/AboutUs"
import { Core } from "../(home)/Core"
import { cn } from "@/lib/utils"

export default function AboutPage() {
    return (
         <BackgroundProvider>
            <div
                        className={cn(
                          "absolute inset-0",
                          "[background-size:40px_40px]",
                          "[background-image:linear-gradient(to_right,#e4e4e7_1px,transparent_1px),linear-gradient(to_bottom,#e4e4e7_1px,transparent_1px)]",
                          "dark:[background-image:linear-gradient(to_right,#262626_1px,transparent_1px),linear-gradient(to_bottom,#262626_1px,transparent_1px)]",
                        )}
            />
            {/* <div className="min-h-screen mx-auto my-auto z-20"> */}
                <Hero />
                <AboutUs />
                <Core />
            {/* </div> */}
         </BackgroundProvider>
    )
}