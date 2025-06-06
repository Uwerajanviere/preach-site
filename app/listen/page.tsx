import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image"
import { Play } from "lucide-react"
import { Navigation } from "@/components/navigation"

export default function ListenPage() {
  return (
    <div className="relative min-h-screen flex flex-col">
      {/* Background Image */}
      <div className="fixed inset-0 -z-10">
        <Image src="/images/sunrise.jpg" alt="Sunrise background" fill priority className="object-cover" />
        <div className="absolute inset-0 bg-black/50" />
      </div>

      {/* Navigation */}
      <Navigation />

      <div className="container mx-auto px-4 py-16 pt-28 relative z-10">
        <h1 className="text-4xl font-bold text-white mb-8">Watch</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[1, 2, 3, 4, 5, 6].map((item) => (
            <Card key={item} className="bg-black/40 backdrop-blur-sm border-white/10">
              <CardContent className="p-6">
                <div className="aspect-video relative mb-4 rounded-md overflow-hidden">
                  <Image
                    src={`/placeholder.svg?height=225&width=400&text=Sermon ${item}`}
                    alt={`Sermon thumbnail ${item}`}
                    width={400}
                    height={225}
                    className="object-cover"
                  />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">Sermon Title {item}</h3>
                <p className="text-white/70 mb-4">Preacher Name</p>
                <Button className="w-full bg-amber-400 hover:bg-amber-500 text-black">
                  <Play className="mr-2 h-4 w-4" /> Watch Now
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}
