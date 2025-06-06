import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Navigation } from "@/components/navigation"

export default function AboutPage() {
  return (
    <div className="relative min-h-screen flex flex-col">
      {/* Background Image */}
      <div className="fixed inset-0 -z-10">
        <Image src="/images/sunrise.jpg" alt="Sunrise background" fill priority className="object-cover" />
        <div className="absolute inset-0 bg-black/50" />
      </div>

      {/* Navigation */}
      <Navigation />

      <main className="flex-1 container mx-auto px-4 py-16 pt-28 relative z-10">
        <div className="max-w-3xl mx-auto bg-black/40 backdrop-blur-sm p-8 rounded-xl">
          <h1 className="text-4xl font-bold text-white mb-8">About Preach</h1>

          <div className="prose prose-invert max-w-none">
            <p className="text-white/90 text-lg mb-6">
              Preach is dedicated to providing uplifting and inspiring sermon videos to listeners around the world. Our
              mission is to create a space where people can connect with God through the preached word, regardless of where they
              are.
            </p>

            <h2 className="text-2xl font-bold text-white mt-8 mb-4">Our Mission</h2>
            <p className="text-white/90 mb-6">
              To provide high-quality sermon videos that inspire, uplift, and connect people with God. We believe in
              the power of the preached word to transform lives and bring people closer to their faith.
            </p>

            <h2 className="text-2xl font-bold text-white mt-8 mb-4">Our Story</h2>
            <p className="text-white/90 mb-6">
              Founded in 2010, Preach began as a small project with a big vision: to make sermons accessible to
              everyone, everywhere. What started as a simple streaming service has grown into a global community of
              believers united by their love for God and His word.
            </p>
            <p className="text-white/90 mb-6">
              Today, we offer a diverse range of sermon styles, from contemporary teachings to traditional messages,
              and inspiring talks. Our platform serves listeners in over 150 countries, providing a
              continuous stream of sermon videos 24/7.
            </p>

            <h2 className="text-2xl font-bold text-white mt-8 mb-4">Our Team</h2>
            <p className="text-white/90 mb-6">
              Our dedicated team consists of preachers, theologians, and technical experts who are
              passionate about creating the best sermon video experience possible. We work with talented speakers and
              ministries from around the world to bring you fresh and inspiring content.
            </p>

            <h2 className="text-2xl font-bold text-white mt-8 mb-4">Our Values</h2>
            <ul className="list-disc pl-6 text-white/90 mb-6 space-y-2">
              <li>Excellence in preaching</li>
              <li>Accessibility for all</li>
              <li>Community and connection</li>
              <li>Innovation in ministry</li>
              <li>Integrity in all we do</li>
            </ul>

            <div className="mt-10 flex justify-center">
              <Link href="/contact">
                <Button className="bg-amber-500 hover:bg-amber-600 text-black">Contact Us</Button>
              </Link>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
