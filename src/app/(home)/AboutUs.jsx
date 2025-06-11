import StickyScroll from "@/components/sticky-scroll"

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

export function AboutUs() {
    return (
        <section className="py-20 bg-sky-50">
        <div className="container">
          <h2 className="text-3xl sticky font-bold text-sky-950 mb-12 text-center">About Us</h2>
          <StickyScroll content={aboutContent} />
        </div>
      </section>
    )
}