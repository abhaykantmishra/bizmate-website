import { HoverButton } from "./hover-button";
import { Card, CardTitle, CardContent, CardHeader, CardDescription, CardFooter } from "./ui/card";
import Link from "next/link";

export function ServiceCard ({title, description, image, url}) {
    return (
        <Card className={"rounded-none p-0 m-0 shadow-xl shadow-purple-300"}>
            <CardHeader className="">
                <div className="mx-auto my-auto z-20">
                    <img width={300} height={300} className="object-cover z-20 text-center" src={image} alt={title} />
                </div>
            </CardHeader>
            <CardContent className="relative bg-neutral-100 z-20 hover:bg-neutral-200 h-[400px]">
                <CardTitle className={"text-2xl font-bold text-center my-5 text-blue-600"}>{title}</CardTitle>
                <CardDescription className={"text-start text-black text-base my-5"}>
                    {description}   
                </CardDescription>
                <CardFooter className={"mx-auto my-10 absolute bottom-0 left-0 mb-5"}>
                    <Link href={`${url}`}>
                    <HoverButton isPrimary={false}  className="hover:text-white ">
                        Learn More
                    </HoverButton>
                    </Link>
                </CardFooter>
            </CardContent>
        </Card>
    )
}