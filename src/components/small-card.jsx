import { Card, CardContent } from "./ui/card"
import { cn } from "@/lib/utils"
export function SmallCard({icon, title, description, className}) {
    return (
        <Card className={cn("card-hover-line rounded-none bg-gradient-to-br from-blue-400 to-violet-500 border-white/10 hover:from-blue-600 hover:to-violet-700 transition-all cursor-pointer group hover:-translate-y-1",
            className
        )}>
              <CardContent className="p-6">
                <div className="flex flex-col items-center text-center gap-4">
                  {/* <Presentation className="w-8 h-8 text-purple-400" /> */}
                  {icon}
                  <h3 className="text-xl font-bold">{title}</h3>
                  <p className="text-accent text-md font-medium">{description}</p>
                </div>
              </CardContent>
        </Card>
    )
}