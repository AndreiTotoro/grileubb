"use client"

import type React from "react"

import Link from "next/link"
import { useState } from "react"
import { useRouter } from "next/navigation"
import { signIn } from "next-auth/react"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { toast } from "sonner"

export default function Login() {
  const router = useRouter()
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState("")

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    setError("")

    // Simple validation
    if (!email || !password) {
      toast.error("Te rugăm să completezi toate câmpurile")
      setError("Te rugăm să completezi toate câmpurile")
      setIsLoading(false)
      return
    }

    try {
      const result = await signIn("credentials", {
        redirect: false,
        email,
        password,
      })

      if (result?.error) {
        console.error("Login error:", result.error)
        toast.error(result.error || "A apărut o eroare la autentificare")
        setError(result.error || "A apărut o eroare la autentificare")
        setIsLoading(false)
        return
      }

      // Success
      toast.success("Autentificare reușită! Bine ai revenit!")
      router.push("/dashboard")
      router.refresh()
    } catch (error) {
      console.error("Login error:", error)
      toast.error("A apărut o eroare la autentificare. Încearcă din nou.")
      setError("A apărut o eroare la autentificare. Încearcă din nou.")
      setIsLoading(false)
    } finally {
      setIsLoading(false)
    }
  }

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
              {error && (
                <div className="p-3 bg-red-50 border border-red-200 text-red-600 rounded-md text-sm">
                  {error}
                </div>
              )}
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="nume@exemplu.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  disabled={isLoading}
                />
              </div>
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <Label htmlFor="password">Parolă</Label>
                  <Link href="/forgot-password" className="text-sm text-indigo-600 hover:underline">
                    Ai uitat parola?
                  </Link>
                </div>
                <Input 
                  id="password" 
                  type="password" 
                  value={password} 
                  onChange={(e) => setPassword(e.target.value)} 
                  disabled={isLoading}
                />
              </div>
            </CardContent>
            <CardFooter className="flex flex-col">
              <Button
                type="submit"
                className="w-full bg-gradient-to-r from-indigo-600 to-violet-600 hover:from-indigo-700 hover:to-violet-700 text-white font-medium"
                disabled={isLoading}
              >
                {isLoading ? "Se procesează..." : "Autentificare"}
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

