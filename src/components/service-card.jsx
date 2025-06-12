import { HoverButton } from "./hover-button";
import { Card, CardTitle, CardContent, CardHeader, CardDescription, CardFooter } from "./ui/card";
import Link from "next/link";

export function ServiceCard ({title, description, image, url}) {
    return (
        <Card className={"rounded-none mx-5 my-0 p-0 md:m-0 shadow-xl shadow-purple-300 border-[3px] border-blue-400 z-20"}>
            <CardHeader className="">
                <div className="hidden md:block mx-auto my-auto ">
                    <img width={300} height={300} className="object-cover z-20 text-center" src={image} alt={title} />
                </div>
                <div className="md:hidden block mx-auto my-auto">
                    <img width={200} height={200} className="object-cover z-20 text-center" src={image} alt={title} />
                </div>
            </CardHeader>
            <CardContent className="relative bg-neutral-100 z-20 hover:bg-neutral-200 h-[300px] md:h-[400px]">
                <CardTitle className={"text-lg md:text-2xl font-bold text-center my-5 text-blue-600"}>{title}</CardTitle>
                <CardDescription className={"max-h-[100px] md:max-h-[200px] 2xl:max-h-[250px] overflow-y-hidden text-start text-black text-xs md:text-base my-5"}>
                    {description}   
                </CardDescription>
                <CardFooter className={"mx-auto mt-10 absolute bottom-0 left-0 mb-5"}>
                    <Link href={`${url}`}>
                    <HoverButton isPrimary={false}  className="hover:text-white">
                        Learn More
                    </HoverButton>
                    </Link>
                </CardFooter>
            </CardContent>
        </Card>
    )
}