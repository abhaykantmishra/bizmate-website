import StickyScroll from "@/components/sticky-scroll"
import { image_url } from "@/constant/image"

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
      <>
      {/* Mobile  */}
      <section className="md:hidden block my-20">
        <div className="container relative mx-auto">
          <h2 className="text-3xl sticky bottom-0 font-bold text-sky-950 mb-12 text-center">About Us</h2>
          <StickyScroll content={aboutContent} />
        </div>
      </section>

      {/* desktop  */}
      <section className='hidden md:block max-w-[1700px] relative my-20'>
            {/* <h1 className="md:text-3xl text-xl font-bold sticky top-40 h-[50%] text-center place-content-center">About Us</h1> */}
          <div className='relative grid grid-cols-2 px-8'>
            <div className='grid gap-2'>
              <figure className='sticky top-0 h-screen grid place-content-center'>
                <h1 className="mb-10 text-blue-500 font-bold md:text-4xl z-20">About Us</h1>
                <img
                  src={image_url}
                  alt="about images"
                  className='z-0 transition-all duration-300 w-96 h-96 align-bottom object-cover rounded-none'
                />
              </figure>
              <figure className='sticky top-0 h-screen grid place-content-center'>
                <img
                  src={image_url}
                  alt="about images"
                  className='transition-all mt-20 duration-300  w-96 h-96 align-bottom object-cover rounded-none'
                />
              </figure>
              <figure className='sticky top-0 h-screen grid place-content-center'>
                <img
                  src={image_url}
                  alt="about images"
                  className='transition-all mt-20 duration-300 w-96 h-96 align-bottom object-cover rounded-none'
                />
              </figure>
            </div>

            {/* text content  */}
            <div>

              <div className='top-0 h-screen grid place-content-center'>    
                <h1 className="text-xl font-bold underline text-blue-500 underline-blue-500 md:text-2xl text-start my-4 hover:card-hover-line z-20">
                  {aboutContent[0]?.title}
                </h1>
                <h1 className='md:text-xl text-base font-medium text-start tracking-tight leading-[120%]'>
                  {aboutContent[0]?.content}
                </h1>
              </div>
              <div className='top-0 h-screen grid place-content-center'>    
                <h1 className="text-xl font-bold underline text-blue-500 underline-blue-500 md:text-2xl text-start my-4 hover:card-hover-line z-20">
                  {aboutContent[1]?.title}
                </h1>
                <h1 className='md:text-xl text-base font-medium text-start tracking-tight leading-[120%]'>
                  {aboutContent[1]?.content}
                </h1>
              </div>
              <div className='top-0 h-screen grid place-content-center'>    
                <h1 className="text-xl font-bold underline text-blue-500 underline-blue-500 md:text-2xl text-start my-4 hover:card-hover-line z-20">
                  {aboutContent[2]?.title}
                </h1>
                <h1 className='md:text-xl text-base font-medium text-start tracking-tight leading-[120%]'>
                  {aboutContent[2]?.content}
                </h1>
              </div>
      
            </div>
          </div>
      </section>

      </>
    )
}