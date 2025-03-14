"use client"

import Link from "next/link"
import { useState } from "react"
import { usePathname } from "next/navigation"
import { useSession, signOut } from "next-auth/react"
import { Button } from "@/components/ui/button"
import { Menu, X, Home, BookOpen, BarChart2, User, LogOut } from "lucide-react"
import { cn } from "@/lib/utils"
import { toast } from "sonner"

const navItems = [
  { name: "Dashboard", href: "/dashboard", icon: Home },
  { name: "Practice", href: "/practice", icon: BookOpen },
  { name: "Progress", href: "/progress", icon: BarChart2 },
  { name: "Profile", href: "/profile", icon: User },
]

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const pathname = usePathname()
  const { data: session, status } = useSession()
  
  const isLoading = status === "loading"
  const isAuthenticated = status === "authenticated"

  // Don't show navbar on landing page
  if (pathname === "/") return null

  const handleLogout = async () => {
    try {
      await signOut({ redirect: false })
      toast.success("Ai fost deconectat cu succes!")
      // Close mobile menu if open
      if (isOpen) setIsOpen(false)
    } catch (error) {
      console.error("Logout error:", error)
      toast.error("A apărut o eroare la deconectare")
    }
  }

  return (
    <>
      {/* Desktop Navbar */}
      <nav className="fixed top-0 left-0 right-0 h-16 bg-white border-b border-gray-200 z-50 px-4">
        <div className="h-full flex items-center justify-between">
          <div className="flex items-center">
            <Link href={isAuthenticated ? "/dashboard" : "/"} className="font-bold text-2xl tracking-tight mr-8">
              <span className="bg-gradient-to-r from-indigo-600 to-violet-600 bg-clip-text text-transparent">
                grile
              </span>
              <span className="bg-gradient-to-r from-violet-600 to-fuchsia-600 bg-clip-text text-transparent">ubb</span>
              <span className="text-gray-800">.com</span>
            </Link>

            {isAuthenticated && (
              <div className="hidden md:flex items-center space-x-1">
                {navItems.map((item) => {
                  const isActive = pathname === item.href
                  const Icon = item.icon

                  return (
                    <Link
                      key={item.href}
                      href={item.href}
                      className={cn(
                        "flex items-center px-3 py-2 rounded-md text-sm font-medium",
                        isActive
                          ? "bg-gray-100 text-indigo-600"
                          : "text-gray-700 hover:bg-gray-100 hover:text-indigo-600",
                      )}
                    >
                      <Icon className="h-4 w-4 mr-2" />
                      {item.name}
                    </Link>
                  )
                })}
              </div>
            )}
          </div>

          {isAuthenticated ? (
            <div className="hidden md:flex items-center">
              <Button variant="ghost" size="sm" className="text-gray-700" onClick={handleLogout}>
                <LogOut className="h-4 w-4 mr-2" />
                Logout
              </Button>
            </div>
          ) : (
            <div className="hidden md:flex items-center space-x-4">
              <Link href="/login">
                <Button variant="ghost" size="sm">
                  Login
                </Button>
              </Link>
              <Link href="/register">
                <Button
                  size="sm"
                  className="bg-gradient-to-r from-indigo-600 to-violet-600 hover:from-indigo-700 hover:to-violet-700 text-white"
                >
                  Register
                </Button>
              </Link>
            </div>
          )}

          {/* Mobile menu button */}
          <button className="md:hidden p-2 rounded-md text-gray-700 hover:bg-gray-100" onClick={() => setIsOpen(true)}>
            <Menu className="h-6 w-6" />
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      {isOpen && (
        <div className="fixed inset-0 z-50 bg-white md:hidden">
          <div className="flex justify-between items-center p-4 border-b">
            <Link href={isAuthenticated ? "/dashboard" : "/"} className="font-bold text-2xl tracking-tight">
              <span className="text-pink-500">grile</span>
              <span className="text-blue-500">ubb</span>
              <span className="text-black">.com</span>
            </Link>
            <button className="p-2 rounded-md text-gray-700 hover:bg-gray-100" onClick={() => setIsOpen(false)}>
              <X className="h-6 w-6" />
            </button>
          </div>

          {isAuthenticated ? (
            <div className="p-4">
              <div className="space-y-1">
                {navItems.map((item) => {
                  const isActive = pathname === item.href
                  const Icon = item.icon

                  return (
                    <Link
                      key={item.href}
                      href={item.href}
                      className={cn(
                        "flex items-center px-3 py-3 rounded-md text-base font-medium",
                        isActive
                          ? "bg-gray-100 text-indigo-600"
                          : "text-gray-700 hover:bg-gray-100 hover:text-indigo-600",
                      )}
                      onClick={() => setIsOpen(false)}
                    >
                      <Icon className="h-5 w-5 mr-3" />
                      {item.name}
                    </Link>
                  )
                })}

                <Button
                  variant="ghost"
                  className="w-full justify-start px-3 py-3 mt-4 text-base font-medium text-gray-700"
                  onClick={handleLogout}
                >
                  <LogOut className="h-5 w-5 mr-3" />
                  Logout
                </Button>
              </div>
            </div>
          ) : (
            <div className="p-4 space-y-4">
              <Link href="/login" onClick={() => setIsOpen(false)}>
                <Button variant="outline" className="w-full">
                  Login
                </Button>
              </Link>
              <Link href="/register" onClick={() => setIsOpen(false)}>
                <Button className="w-full bg-gradient-to-r from-indigo-600 to-violet-600 hover:from-indigo-700 hover:to-violet-700 text-white">
                  Register
                </Button>
              </Link>
            </div>
          )}
        </div>
      )}
    </>
  )
}

