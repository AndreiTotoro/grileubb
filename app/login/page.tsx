"use client"

import type React from "react"

import Link from "next/link"
import { useState } from "react"
import { useRouter } from "next/navigation"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { toast } from "sonner"

export default function Login() {
  const router = useRouter()
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault()

    // Simple validation
    if (!email || !password) {
      toast.error("Te rugăm să completezi toate câmpurile")
      return
    }

    // Simulate login (in a real app, this would call an API)
    toast.success("Autentificare reușită! Bine ai revenit!")

    // Redirect to dashboard
    router.push("/dashboard")
  }

  // Rest of the component remains the same
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-50">
      <div className="w-full max-w-md p-4">
        <div className="text-center mb-8">
          <Link href="/" className="inline-block">
            <div className="font-bold text-3xl tracking-tight mb-4">
              <span className="bg-gradient-to-r from-indigo-600 to-violet-600 bg-clip-text text-transparent">
                grile
              </span>
              <span className="bg-gradient-to-r from-violet-600 to-fuchsia-600 bg-clip-text text-transparent">ubb</span>
              <span className="text-gray-800">.com</span>
            </div>
          </Link>
          <h1 className="text-2xl font-bold">Bine ai revenit!</h1>
          <p className="text-gray-600">Autentifică-te pentru a continua</p>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Autentificare</CardTitle>
            <CardDescription>Introdu datele tale de autentificare</CardDescription>
          </CardHeader>
          <form onSubmit={handleLogin}>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="nume@exemplu.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <Label htmlFor="password">Parolă</Label>
                  <Link href="/forgot-password" className="text-sm text-indigo-600 hover:underline">
                    Ai uitat parola?
                  </Link>
                </div>
                <Input id="password" type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
              </div>
            </CardContent>
            <CardFooter className="flex flex-col">
              <Button
                type="submit"
                className="w-full bg-gradient-to-r from-indigo-600 to-violet-600 hover:from-indigo-700 hover:to-violet-700 text-white font-medium"
              >
                Autentificare
              </Button>
              <p className="text-center mt-4 text-sm text-gray-600">
                Nu ai cont?{" "}
                <Link href="/register" className="text-indigo-600 hover:underline">
                  Înregistrează-te
                </Link>
              </p>
            </CardFooter>
          </form>
        </Card>
      </div>
    </div>
  )
}

