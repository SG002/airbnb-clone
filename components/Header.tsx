'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Search, Globe, Menu, User } from 'lucide-react'
import { Button } from '@/components/ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'

export default function Header({ children }: { children: React.ReactNode }) {
  const [isScrolled, setIsScrolled] = useState(false)

  if (typeof window !== 'undefined') {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 10) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    })
  }

  return (
    <header
      className={`sticky top-0 z-50 bg-white transition-shadow duration-300 ease-in-out ${
        isScrolled ? 'shadow-md' : ''
      }`}
    >
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link href="/" className="flex items-center">
          <Image src="/airbnb-logo.png" alt="Airbnb" width={102} height={32} />
        </Link>
        {children}
        <div className="hidden md:flex items-center border rounded-full py-2 px-4 shadow-sm hover:shadow-md transition cursor-pointer">
          <div className="text-sm font-semibold px-3">Anywhere</div>
          <div className="border-l border-gray-300 h-6"></div>
          <div className="text-sm font-semibold px-3">Any week</div>
          <div className="border-l border-gray-300 h-6"></div>
          <div className="text-sm text-gray-600 px-3">Add guests</div>
          <div className="bg-primary text-white p-2 rounded-full">
            <Search className="h-4 w-4" />
          </div>
        </div>
        <div className="flex items-center space-x-4">
          <Button variant="ghost" className="hidden md:inline-flex">
            Airbnb your home
          </Button>
          <Button variant="ghost" size="icon">
            <Globe className="h-5 w-5" />
          </Button>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" size="icon" className="rounded-full">
                <Menu className="h-5 w-5" />
                <User className="h-5 w-5" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-56">
              <DropdownMenuItem>
                <Link href="/login">Log in</Link>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Link href="/signup">Sign up</Link>
              </DropdownMenuItem>
              <DropdownMenuItem>Airbnb your home</DropdownMenuItem>
              <DropdownMenuItem>Host an experience</DropdownMenuItem>
              <DropdownMenuItem>Help</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </header>
  )
}