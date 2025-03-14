import type React from "react"
import "./globals.css"
import { Inter } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"
import Navbar from "@/components/navbar"
import { SonnerProvider } from "@/components/sonner-provider"
import AuthProvider from "@/components/providers/auth-provider"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "GrileUBB - Ace Your Babeș-Bolyai Admission Exam",
  description:
    "Practice for the Babeș-Bolyai University admission exam with past questions and AI-powered hints.",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <AuthProvider>
          <ThemeProvider attribute="class" defaultTheme="light">
            <Navbar />
            <main className="min-h-screen pt-16">{children}</main>
            <SonnerProvider />
          </ThemeProvider>
        </AuthProvider>
      </body>
    </html>
  )
}



import './globals.css'