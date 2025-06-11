import { HoverButton } from "./hover-button";
import { Card, CardTitle, CardContent, CardHeader, CardDescription, CardFooter } from "./ui/card";
import Link from "next/link";

export function ServiceCard ({title, description, image, url}) {
    return (
        <Card className={"rounded-none p-0 m-0 shadow-xl shadow-purple-300"}>
            <CardHeader className="">
                <div>
                    <img className="" src={image} alt={title} />
                </div>
            </CardHeader>
            <CardContent className="bg-gray-200 z-20 hover:bg-gray-300">
                <CardTitle className={"text-2xl font-bold text-center my-5"}>{title}</CardTitle>
                <CardDescription className={"text-start text-black text-base my-5"}>
                    {description}   
                </CardDescription>
                <CardFooter className={"mx-auto my-10"}>
                    <Link href={`/services/${url}`}>
                    <HoverButton isPrimary={false}  className="hover:text-white">
                        Learn More
                    </HoverButton>
                    </Link>
                </CardFooter>
            </CardContent>
        </Card>
    )
}