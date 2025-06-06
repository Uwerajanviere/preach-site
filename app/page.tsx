import Image from "next/image"
import { Play, Volume2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Navigation } from "@/components/navigation"
import { VideoSection } from "@/components/video-section"
import Link from 'next/link'

export default function Home() {
  const videoLimit = 3; // Define the number of videos to display on the homepage

  return (
    <div className="relative min-h-screen flex flex-col">
      {/* Background Image */}
      <div className="fixed inset-0 -z-10">
        <Image src="/images/sunrise.jpg" alt="Sunrise background" fill priority className="object-cover" />
        <div className="absolute inset-0 bg-black/30" />
      </div>

      {/* Navigation */}
      <Navigation />

      {/* Hero Section */}
      <main className="flex-1 flex flex-col pt-20">
        <section className="flex items-center justify-center text-center px-4 py-24 md:py-32 lg:py-40">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-6">
              Go therefore and make disciples of all nations.
            </h1>
            <p className="text-xl text-white/90 mb-8">MATTHEW 28:19</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="#latest-sermons">
                <Button className="bg-amber-400 text-black hover:bg-amber-500 flex items-center gap-2 w-full sm:w-auto">
                  <Play className="h-5 w-5" />
                  Start Watching
                </Button>
              </a>
              <Link href="/collections">
                <Button variant="outline" className="border-amber-400 text-amber-400 hover:bg-amber-400/20 w-full sm:w-auto">
                  Browse Sermons
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Sermons Section */}
        <section id="latest-sermons" className="py-16 md:py-24 bg-black/50 backdrop-blur-sm">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">Latest Sermons</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <VideoSection category="Faith" limit={videoLimit} />
              <VideoSection category="Grace" limit={videoLimit} />
              <VideoSection category="Love" limit={videoLimit} />
              <VideoSection category="Hope" limit={videoLimit} />
              <VideoSection category="Salvation" limit={videoLimit} />
              <VideoSection category="Prayer" limit={videoLimit} />
            </div>
          </div>
        </section>

        {/* Spiritual Resources Section */}
        <section className="py-16 md:py-24 bg-black/40 backdrop-blur-sm">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">Spiritual Resources</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Daily Prayer */}
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                <h3 className="text-2xl font-semibold text-white mb-4">Daily Prayer</h3>
                <p className="text-white/80">Begin each day with a heart full of gratitude and faith. Morning prayers set the tone for a day filled with God's presence and guidance.</p>
              </div>

              {/* Bible Study */}
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                <h3 className="text-2xl font-semibold text-white mb-4">Bible Study</h3>
                <p className="text-white/80">Explore the depths of God's word through our comprehensive study materials. Discover timeless wisdom and divine guidance in scripture.</p>
              </div>

              {/* Worship Music */}
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                <h3 className="text-2xl font-semibold text-white mb-4">Worship Music</h3>
                <p className="text-white/80">Experience the power of worship through our curated collection of hymns and contemporary Christian music that uplifts the soul.</p>
              </div>

              {/* Prayer Requests */}
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                <h3 className="text-2xl font-semibold text-white mb-4">Prayer Requests</h3>
                <p className="text-white/80">Our community stands together in faith, lifting up prayers for those in need. Share your journey and find strength in collective prayer.</p>
              </div>

              {/* Devotionals */}
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                <h3 className="text-2xl font-semibold text-white mb-4">Daily Devotionals</h3>
                <p className="text-white/80">Nourish your spirit with daily reflections and meditations. Each devotional is crafted to inspire and strengthen your walk with God.</p>
              </div>

              {/* Community */}
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                <h3 className="text-2xl font-semibold text-white mb-4">Join Community</h3>
                <p className="text-white/80">Be part of a welcoming community of believers. Together, we grow in faith, share in fellowship, and support one another in our spiritual journey.</p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
