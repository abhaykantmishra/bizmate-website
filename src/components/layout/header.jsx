'use client'

import { Geist, Geist_Mono } from "next/font/google"
import * as React from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu, X } from 'lucide-react'
import { Button } from "@/components/ui/button"
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetTitle,
} from "@/components/ui/sheet"

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const navigation = [
//   { name: 'NETWORK', href: '/network' },
  { name: 'Home', href: '/' },
  { name: 'Services', href: '#' },
  { name: 'About-us', href: '/about' },
  // { name: 'EDITORIAL CORNER', href: '/editorial' },
//   { name: 'INITIATIVES', href: '/initiatives' },
  { name: 'Contact', href: '/contact' },
  { name: 'Blog', href: '/blog' },

]

export function Header() {
  const [isOpen, setIsOpen] = React.useState(false)

  return (
    <header className={`h-20 sticky top-0 z-50 w-full border-b border-white/10 bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60`}>
      <nav className="flex h-14 items-center px-4 max-w-[1600px] mx-auto">
        <Link href="/" className="mr-4 flex items-center space-x-2">
          <Image
            // src="/logo.png"
            src="/globe.svg"
            alt="Logo"
            width={32}
            height={32}
            className="rounded-lg"
          />
          <span className="hidden text-lg font-bold sm:inline-block">
            BizMate HR Solutions
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex md:flex-1 md:justify-end md:gap-5">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="font-medium text-black transition-colors hover:text-blue-700"
            >
              {item.name}
            </Link>
          ))}
        </div>

        {/* Mobile Navigation */}
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild className="md:hidden">
            <Button
              variant="ghost"
              className="ml-auto h-8 w-8 px-0 text-white hover:bg-white/10"
            >
              <Menu className="h-4 w-4" />
              <span className="sr-only">Toggle menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent
            side="right"
            className="w-[85vw] max-w-xs border-white/10 bg-black/95 backdrop-blur px-0 pt-0"
          >
            <div className="flex h-14 items-center border-b border-white/10 px-4">
              <SheetTitle className="sr-only">Navigation Menu</SheetTitle>
              <Link href="/" className="flex items-center space-x-2" onClick={() => setIsOpen(false)}>
                <Image
                  src="/e-cell-logo.png"
                  alt="E-Cell Logo"
                  width={40}
                  height={40}
                  className="rounded-lg"
                />
                <span className="text-sm font-bold">BizMate HR Solutions</span>
              </Link>
            </div>
            <nav className="flex flex-col px-4">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className="border-b border-white/10 py-5 text-base font-medium text-white/70 transition-colors hover:text-white"
                >
                  {item.name}
                </Link>
              ))}
            </nav>
          </SheetContent>
        </Sheet>
      </nav>
    </header>
  )
}
