import Link from "next/link"
import { Facebook, Instagram, Youtube } from "lucide-react"

export function Footer() {
  return (
    <footer className="relative z-10 mt-auto">
      <div className="bg-orange-900 py-12 px-4">
        <div className="container mx-auto">
          {/* Logo */}
          <div className="flex justify-center mb-8">
            <Link href="/" className="text-4xl font-bold text-amber-400">
              Matthew 28:18-19
            </Link>
          </div>

          {/* Navigation */}
          <div className="flex flex-wrap justify-center gap-x-8 gap-y-4 mb-10 text-amber-400">
            <Link href="/#latest-sermons" className="hover:underline">
              WATCH
            </Link>
            <span className="hidden md:inline text-amber-400/50">|</span>
            <Link href="/about" className="hover:underline">
              ABOUT
            </Link>
            <span className="hidden md:inline text-amber-400/50">|</span>
            <Link href="/contact" className="hover:underline">
              CONTACT US
            </Link>
            <span className="hidden md:inline text-amber-400/50">|</span>
            <Link href="/privacy" className="hover:underline">
              PRIVACY POLICY
            </Link>
          </div>

          {/* Social Media */}
          <div className="flex justify-center gap-4 mb-10">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white rounded-full p-3 hover:opacity-90 transition"
            >
              <Facebook className="h-6 w-6 text-orange-900" />
              <span className="sr-only">Facebook</span>
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white rounded-full p-3 hover:opacity-90 transition"
            >
              <Instagram className="h-6 w-6 text-orange-900" />
              <span className="sr-only">Instagram</span>
            </a>
            <a
              href="https://youtube.com"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white rounded-full p-3 hover:opacity-90 transition"
            >
              <Youtube className="h-6 w-6 text-orange-900" />
              <span className="sr-only">YouTube</span>
            </a>
          </div>

          {/* Copyright */}
          <div className="text-center text-amber-400/80 text-sm px-4">
            <p>
              © {new Date().getFullYear()} Atlantic Gateway Communications, Inc. Atlantic Gateway Communications, Inc.
              serves and ministers to people globally through its ministries – MARTIN, Sermons, Teachings &
              Messages.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
