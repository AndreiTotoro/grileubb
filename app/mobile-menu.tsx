"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"

export default function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="md:hidden">
      <Button variant="ghost" size="icon" onClick={() => setIsOpen(true)} aria-label="Open menu">
        <Menu className="h-6 w-6" />
      </Button>

      {isOpen && (
        <div className="fixed inset-0 bg-white z-50 flex flex-col">
          <div className="flex justify-between items-center p-4 border-b">
            <div className="font-bold text-2xl tracking-tight">
              <span className="text-pink-500">grile</span>
              <span className="text-blue-500">ubb</span>
              <span className="text-black">.com</span>
            </div>
            <Button variant="ghost" size="icon" onClick={() => setIsOpen(false)} aria-label="Close menu">
              <X className="h-6 w-6" />
            </Button>
          </div>
          <nav className="flex flex-col p-4 space-y-4">
            <Link
              href="#features"
              className="text-gray-700 hover:text-pink-500 font-medium py-2"
              onClick={() => setIsOpen(false)}
            >
              Features
            </Link>
            <Link
              href="#how-it-works"
              className="text-gray-700 hover:text-pink-500 font-medium py-2"
              onClick={() => setIsOpen(false)}
            >
              How It Works
            </Link>
            <Link
              href="#pricing"
              className="text-gray-700 hover:text-pink-500 font-medium py-2"
              onClick={() => setIsOpen(false)}
            >
              Pricing
            </Link>
            <Link
              href="#community"
              className="text-gray-700 hover:text-pink-500 font-medium py-2"
              onClick={() => setIsOpen(false)}
            >
              Community
            </Link>
            <Button
              className="bg-blue-500 hover:bg-blue-600 text-white font-bold mt-4"
              onClick={() => setIsOpen(false)}
            >
              Sign Up Free
            </Button>
          </nav>
        </div>
      )}
    </div>
  )
}

