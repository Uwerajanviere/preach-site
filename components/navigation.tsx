"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { MobileMenu } from "@/app/mobile-menu"
import { useEffect, useState } from "react"
import Image from "next/image"

export function Navigation() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled)
      }
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    handleScroll()

    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [scrolled])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "bg-black/80 backdrop-blur-md shadow-md" : "bg-transparent"}`}
    >
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="text-3xl font-bold text-amber-400">
              <span className="">Matthew 28:18-19</span>
            </Link>
          </div>

          {/* Navigation Links - Centered */}
          <nav className="hidden md:flex items-center justify-center flex-1 px-8">
            <div className="flex items-center space-x-12">
              <Link href="/#latest-sermons" className="text-white hover:text-white/80 transition">
                Watch
              </Link>
              <Link href="/about" className="text-white hover:text-white/80 transition">
                About
              </Link>
              <Link href="/contact" className="text-white hover:text-white/80 transition">
                Contact Us
              </Link>
            </div>
          </nav>

          {/* Action Buttons */}
          <div className="flex items-center gap-4">
            <Link href="/#latest-sermons">
              <Button
                variant="outline"
                className="hidden md:flex border-amber-400 text-amber-400 hover:bg-amber-400/20 hover:text-amber-400"
              >
                Watch Live
              </Button>
            </Link>
            <form action="https://www.paypal.com/donate" method="post" target="_top" className="hidden md:flex">
              <input type="hidden" name="hosted_button_id" value="Z4UPJDXNDFCQJ" />
              <input 
                type="image" 
                src="https://www.paypalobjects.com/en_US/i/btn/btn_donateCC_LG.gif" 
                name="submit" 
                title="PayPal - The safer, easier way to pay online!" 
                alt="Donate with PayPal button" 
                className="cursor-pointer"
              />
              <Image 
                src="https://www.paypal.com/en_RW/i/scr/pixel.gif" 
                alt="" 
                width={1} 
                height={1} 
              />
            </form>
            <MobileMenu />
          </div>
        </div>
      </div>
    </header>
  )
}
