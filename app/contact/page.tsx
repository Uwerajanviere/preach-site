"use client";

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Facebook, Instagram, Mail, MapPin, Phone } from "lucide-react"
import { Navigation } from "@/components/navigation"

export default function ContactPage() {
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
        <div className="max-w-5xl mx-auto">
          <h1 className="text-4xl font-bold text-white mb-8 text-center">Contact Us</h1>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Contact Form */}
            <div className="bg-black/40 backdrop-blur-sm p-8 rounded-xl">
              <h2 className="text-2xl font-bold text-white mb-6">Send us a message</h2>

              <form action="https://formspree.io/f/mdkgqvaq" method="POST" className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label htmlFor="first-name" className="text-white">
                      First Name
                    </label>
                    <Input id="first-name" name="firstName" className="bg-white/10 border-white/20 text-white" />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="last-name" className="text-white">
                      Last Name
                    </label>
                    <Input id="last-name" name="lastName" className="bg-white/10 border-white/20 text-white" />
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="email" className="text-white">
                    Email
                  </label>
                  <Input id="email" type="email" name="email" className="bg-white/10 border-white/20 text-white" />
                </div>

                <div className="space-y-2">
                  <label htmlFor="subject" className="text-white">
                    Subject
                  </label>
                  <Input id="subject" name="subject" className="bg-white/10 border-white/20 text-white" />
                </div>

                <div className="space-y-2">
                  <label htmlFor="message" className="text-white">
                    Message
                  </label>
                  <Textarea id="message" rows={5} name="message" className="bg-white/10 border-white/20 text-white resize-none" />
                </div>

                <Button type="submit" className="w-full bg-amber-500 hover:bg-amber-600 text-black">
                  Send Message
                </Button>
              </form>
            </div>

            {/* Contact Information */}
            <div className="bg-black/40 backdrop-blur-sm p-8 rounded-xl">
              <h2 className="text-2xl font-bold text-white mb-6">Get in touch</h2>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <MapPin className="text-amber-400 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-medium text-white">Our Address</h3>
                    <p className="text-white/80">
                    KN 5 Rd, Plot 12, Remera
                      <br />
                      Gasabo District, Kigali, Rwanda
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Phone className="text-amber-400 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-medium text-white">Phone</h3>
                    <p className="text-white/80">(250) 788354235
</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Mail className="text-amber-400 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-medium text-white">Email</h3>
                    <p className="text-white/80"> martin.ntirushwa.martin@gmail.com</p>
                  </div>
                </div>

                <div className="pt-6 border-t border-white/20">
                  <h3 className="font-medium text-white mb-4">Follow Us</h3>
                  <div className="flex gap-4">
                    <a
                      href="https://facebook.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-white rounded-full p-2 hover:bg-white/90 transition"
                    >
                      <Facebook className="h-5 w-5 text-amber-600" />
                      <span className="sr-only">Facebook</span>
                    </a>
                    <a
                      href="https://instagram.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-white rounded-full p-2 hover:bg-white/90 transition"
                    >
                      <Instagram className="h-5 w-5 text-amber-600" />
                      <span className="sr-only">Instagram</span>
                    </a>
                  </div>
                </div>

                <div className="pt-6 border-t border-white/20">
                  <h3 className="font-medium text-white mb-4">Hours</h3>
                  <p className="text-white/80">
                    Monday - Friday: 9am - 5pm
                    <br />
                    Saturday - Sunday: Closed
                  </p>
                </div>

                {/* Prayer Requests */}
                <div className="pt-6 border-t border-white/20">
                  <h3 className="font-medium text-white mb-4">Prayer Requests</h3>
                  <p className="text-white/80">
                    We would be honored to pray for you. Please submit
                    your prayer requests through our contact form or email
                    us directly.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
