'use client'

import { Geist, Geist_Mono } from "next/font/google"
import * as React from "react"
import Link from "next/link"
import Image from "next/image"
import { ChevronDown, ChevronUp, Menu, X } from 'lucide-react'
import { Button } from "@/components/ui/button"
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetTitle,
} from "@/components/ui/sheet"
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem } from "../ui/dropdown-menu"
import { useRouter } from "next/navigation"


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
  { name: 'Blog', href: '/#' },
]

const services = [
  { name: 'Recruitment Solution & Services', href: '/services/recruitment' },
  { name: 'Staffing Solutions & Services', href: '/services/staffing' },
  { name: 'Talent Management Solutions & Services', href: '/services/talent-management' },
  { name: 'HR Consultancy Services', href: '/services/hr-consultancy' },
  { name: 'HSE Services', href: '/services/hse' },
  { name: 'Customized Solutions', href: '/services/customized-solutions' },

]

export function Header() {
  const [isOpen, setIsOpen] = React.useState(false)
  const [isHovered, setIsHovered] = React.useState(false)
  const [dropdownOpen, setDropdownOpen] = React.useState(false)
  const [mobileDropdownOpen, setMobileDropdownOpen] = React.useState(false)

  const router = useRouter();

  const handleMouseEnter = () => {
    setIsHovered(true);
    setDropdownOpen(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setDropdownOpen(false);
  };

  const toggleDropdownInMobile = () => {
    setDropdownOpen(!mobileDropdownOpen);
    // setIsHovered(!isHovered);
  }

  return (
    <header className={`h-12 md:h-20 sticky top-0 z-50 w-full border-b border-white/10 bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60`}>
      <nav className="flex h-10 md:h-14 items-center px-4 max-w-[1600px] mx-auto">
        <Link href="/" className="mr-4 flex items-center space-x-2">
          <Image
            // src="/logo.png"
            src="/globe.svg"
            alt="Logo"
            width={32}
            height={32}
            className="rounded-lg"
          />
          <span className="text-sm  md:text-lg font-bold sm:inline-block">
            BizMate HR Solutions
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex md:flex-1 md:justify-end md:gap-5 w-full">
          {navigation.map((item) => {
            if(item.name === 'Services') {
              return (
                <div key={item.name} >
                <DropdownMenu  open={dropdownOpen} onOpenChange={setDropdownOpen}>
                  <div
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                    className="relative"
                  >
                    <DropdownMenuTrigger asChild>
                      <span className="font-medium text-black transition-colors hover:text-blue-700 cursor-pointer flex items-center">
                        {item.name}
                        <span className="ml-2 transition-all duration-1000">
                          {isHovered ? (
                            <ChevronUp className="h-4 w-4" />
                          ) : (
                            <ChevronDown className="h-4 w-4" />
                          )}
                        </span>
                      </span>
                    </DropdownMenuTrigger>
                    
                    <DropdownMenuContent 
                      side="bottom" 
                      align="start"
                      className="w-full bg-blue-200 rounded-none transition-all duration-500"
                    >
                      {
                        services.map((service, idx) => (
                           <DropdownMenuItem key={idx} className={"rounded-none px-2 hover:bg-white"}>
                            <Link href={service.href} className="font-medium text-black transition-colors hover:text-blue-700">
                              {service.name}
                            </Link>
                          </DropdownMenuItem>
                        ))
                      }
                    </DropdownMenuContent>
                  </div>
                </DropdownMenu>
                </div>

              )
            }
            else{
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className="font-medium text-black transition-colors hover:text-blue-700"
                >
                  {item.name}
                </Link>
              )
            }
          })}
        </div>

        {/* Mobile Navigation */}
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild className="md:hidden">
            <Button
              variant="ghost"
              className="ml-auto h-8 w-8 px-0 text-black hover:bg-white/10"
            >
              <Menu className="h-4 w-4" />
              <span className="sr-only">Toggle menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent
            side="right"
            className="w-[85vw] max-w-xs border-white/ bg-white/90 backdrop-blur px-0 pt-0"
          >
            <div className="flex h-14 items-center border-b border-white/10 px-4">
              <SheetTitle className="sr-only">Navigation Menu</SheetTitle>
              <Link href="/" className="flex items-center space-x-1 text-sm" onClick={() => setIsOpen(false)}>
                <Image
                  src="/globe.svg"
                  alt="bizmate logo"
                  width={40}
                  height={40}
                  className="rounded-lg"
                />
                <span className="text-sm font-bold">BizMate HR Solutions</span>
              </Link>
            </div>
            <nav className="flex flex-col px-4">
              {navigation.map((item) => {
            if(item.name === 'Services') {
              return (
                <div key={item.name} >
                <DropdownMenu onClick={toggleDropdownInMobile} open={mobileDropdownOpen} onOpenChange={setMobileDropdownOpen}>
                  <div
                    // onMouseEnter={handleMouseEnter}
                    // onMouseLeave={handleMouseLeave}
                    className="relative"
                  >
                    <DropdownMenuTrigger asChild>
                      <span className="font-medium text-black transition-colors hover:text-blue-700 cursor-pointer flex items-center">
                        {item.name}
                        <span className="ml-2 transition-all duration-1000">
                          {mobileDropdownOpen ? (
                            <ChevronUp className="h-4 w-4" />
                          ) : (
                            <ChevronDown className="h-4 w-4" />
                          )}
                        </span>
                      </span>
                    </DropdownMenuTrigger>
                    
                    <DropdownMenuContent 
                      side="bottom" 
                      align="start"
                      className="bg-blue-200 rounded-none transition-all duration-500"
                    >
                      {
                        services.map((service, idx) => (
                           <DropdownMenuItem onClick={() => {setIsOpen(false); setMobileDropdownOpen(false)}} key={idx} className={"rounded-none px-2 hover:bg-white"}>
                            <Link  key={idx} href={service.href} className="font-medium text-xs text-black transition-colors hover:text-blue-700">
                              {service.name}
                            </Link>
                          </DropdownMenuItem>
                        ))
                      }
                    </DropdownMenuContent>
                  </div>
                </DropdownMenu>
                </div>

              )
            }
            else{
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className="font-medium text-black transition-colors hover:text-blue-700"
                >
                  {item.name}
                </Link>
              )
            }
          })}
            </nav>
          </SheetContent>
        </Sheet>
      </nav>
    </header>
  )
}
