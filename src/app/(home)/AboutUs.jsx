import StickyScroll from "@/components/sticky-scroll"
import { image_url } from "@/constant/image"
import { AboutLeftCard } from "../about/page"
import { AboutRightCard } from "../about/page"

const aboutContent = [
    {
      title: "Who We Are",
      content:
        "BizMate HR Solutions is a leading provider of comprehensive human resources services designed to help businesses optimize their workforce management. With years of experience in the industry, we've helped hundreds of organizations transform their HR operations.",
    },
    {
      title: "Our Mission",
      content:
        "Our mission is to empower businesses with innovative HR solutions that drive growth, enhance employee satisfaction, and ensure compliance with evolving regulations.",
    },
    {
      title: "Our Vision",
      content:
        "To be the most trusted partner for businesses seeking to excel through effective human resource management and strategic workforce planning.",
    },
]

const content = [
  "Out of Sea of Sameness, Bizmate by virtue of decades of working experience in varied Industries & functions of its partners & consultants, lifts the Employees value proposition for organizational growth",
  "To be a respected Consultancy firm recognised by Our client as most trusted partner for delivering excellence by providing most suitable solutions for their business need.",
  "To be a solution provider to our client for their business related to its critical yet most complicated resource i.e Human Resource in its entire gamut and sphere be it related to policy, system or process under one umbrella."
]

export function AboutUs() {
    return (



      <section id="idea-vision-mission mb-96 mx-5 md:mx-0 ">

        <h1 className="sticky top-14 md:top-20 z-0 text-center text-xl md:text-5xl ">About Us</h1>

        <div className="sticky top-22 md:top-44 max-w-[1600px] md:mx-auto mt-32">
          <AboutLeftCard image={image_url} title={"Our Idea"} description={content[0]} />
        </div>
        <div className="sticky top-22 md:top-44 max-w-[1600px] md:mx-auto">
          <AboutRightCard image={image_url} title={"Our Vision"} description={content[1]} />
        </div>
        <div className="sticky top-22 md:top-44 max-w-[1600px] md:mx-auto mb-32">
          <AboutLeftCard image={image_url} title={"Our Mission"} description={content[2]} />
        </div>           
      </section>

    )
}