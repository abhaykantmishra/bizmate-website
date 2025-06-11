import { ServiceCard } from "@/components/service-card";
import { Card } from "@/components/ui/card";
import { image_url } from "@/constant/image";

const services = [
  {
    title: "service 1",
    description:" Lorem ipsum dolor sit, amet consectetur adipisicing elit. Culpa deserunt, rem, voluptatibus necessitatibus repudiandae eligendi repellat voluptatem atque autem perspiciatis soluta officia repellendus officiis minima praesentium quas quo velit. Natus?",
    image: image_url
  },
  {
    title: "service 2",
    description:" Lorem ipsum dolor sit, amet consectetur adipisicing elit. Culpa deserunt, rem, voluptatibus necessitatibus repudiandae eligendi repellat voluptatem atque autem perspiciatis soluta officia repellendus officiis minima praesentium quas quo velit. Natus?",
    image: image_url
  },
  {
    title: "service 3",
    description:" Lorem ipsum dolor sit, amet consectetur adipisicing elit. Culpa deserunt, rem, voluptatibus necessitatibus repudiandae eligendi repellat voluptatem atque autem perspiciatis soluta officia repellendus officiis minima praesentium quas quo velit. Natus?",
    image: image_url
  },
  {
    title: "service 4",
    description:" Lorem ipsum dolor sit, amet consectetur adipisicing elit. Culpa deserunt, rem, voluptatibus necessitatibus repudiandae eligendi repellat voluptatem atque autem perspiciatis soluta officia repellendus officiis minima praesentium quas quo velit. Natus?",
    image: image_url
  },
  {
    title: "service 5",
    description:" Lorem ipsum dolor sit, amet consectetur adipisicing elit. Culpa deserunt, rem, voluptatibus necessitatibus repudiandae eligendi repellat voluptatem atque autem perspiciatis soluta officia repellendus officiis minima praesentium quas quo velit. Natus?",
    image: image_url
  },
  {
    title: "service 6",
    description:" Lorem ipsum dolor sit, amet consectetur adipisicing elit. Culpa deserunt, rem, voluptatibus necessitatibus repudiandae eligendi repellat voluptatem atque autem perspiciatis soluta officia repellendus officiis minima praesentium quas quo velit. Natus?",
    image: image_url
  }
]

export function Services() {
    return (
        <section className="my-20">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-sky-950 mb-12 text-center z-100">Our Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8  z-50">
            {
              services.map((item, index) => (
                <ServiceCard key={index} title={item.title} description={item.description} image={item.image} />
              ))
            }
          </div>
          
        </div>
      </section>
    )
}