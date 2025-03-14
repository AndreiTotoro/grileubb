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
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { toast } from "sonner"
import type { Subject } from "@/types"

export default function Register() {
  const router = useRouter()
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")
  const [subject, setSubject] = useState<Subject>("math")
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState("")

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    setError("")

    // Simple validation
    if (!name || !email || !password || !confirmPassword) {
      toast.error("Te rugăm să completezi toate câmpurile")
      setError("Te rugăm să completezi toate câmpurile")
      setIsLoading(false)
      return
    }

    if (password !== confirmPassword) {
      toast.error("Parolele nu coincid")
      setError("Parolele nu coincid")
      setIsLoading(false)
      return
    }

    try {
      // Register the user
      const response = await fetch('/api/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name,
          email,
          password,
          subject,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'A apărut o eroare la înregistrare');
      }

      // Auto-login after successful registration
      const result = await signIn('credentials', {
        redirect: false,
        email,
        password,
      });

      if (result?.error) {
        console.error("Login after registration error:", result.error);
        toast.error(result.error || "Înregistrare reușită, dar a apărut o eroare la autentificare automată. Te rugăm să te autentifici manual.");
        setError(result.error || "Înregistrare reușită, dar a apărut o eroare la autentificare automată. Te rugăm să te autentifici manual.");
        router.push("/login");
        return;
      }

      // Success
      toast.success("Înregistrare reușită! Contul tău a fost creat cu succes!")
      router.push("/dashboard")
      router.refresh()
    } catch (error: any) {
      console.error("Registration error:", error)
      const errorMessage = error.message || "A apărut o eroare la înregistrare. Încearcă din nou."
      toast.error(errorMessage)
      setError(errorMessage)
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
          <h1 className="text-2xl font-bold">Creează un cont nou</h1>
          <p className="text-gray-600">Începe să te pregătești pentru examenul de admitere</p>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Înregistrare</CardTitle>
            <CardDescription>Completează datele pentru a crea un cont</CardDescription>
          </CardHeader>
          <form onSubmit={handleRegister}>
            <CardContent className="space-y-4">
              {error && (
                <div className="p-3 bg-red-50 border border-red-200 text-red-600 rounded-md text-sm">
                  {error}
                </div>
              )}
              <div className="space-y-2">
                <Label htmlFor="name">Nume complet</Label>
                <Input 
                  id="name" 
                  placeholder="Nume Prenume" 
                  value={name} 
                  onChange={(e) => setName(e.target.value)} 
                  disabled={isLoading}
                />
              </div>
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
                <Label htmlFor="password">Parolă</Label>
                <Input 
                  id="password" 
                  type="password" 
                  value={password} 
                  onChange={(e) => setPassword(e.target.value)} 
                  disabled={isLoading}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="confirmPassword">Confirmă parola</Label>
                <Input
                  id="confirmPassword"
                  type="password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  disabled={isLoading}
                />
              </div>
              <div className="space-y-2">
                <Label>Materie preferată</Label>
                <RadioGroup
                  defaultValue="math"
                  value={subject}
                  onValueChange={(value) => setSubject(value as Subject)}
                  className="flex space-x-4"
                  disabled={isLoading}
                >
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="math" id="math" />
                    <Label htmlFor="math">Matematică</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="informatics" id="informatics" />
                    <Label htmlFor="informatics">Informatică</Label>
                  </div>
                </RadioGroup>
              </div>
            </CardContent>
            <CardFooter className="flex flex-col">
              <Button
                type="submit"
                className="w-full bg-gradient-to-r from-indigo-600 to-violet-600 hover:from-indigo-700 hover:to-violet-700 text-white font-medium"
                disabled={isLoading}
              >
                {isLoading ? "Se procesează..." : "Creează cont"}
              </Button>
              <p className="text-center mt-4 text-sm text-gray-600">
                Ai deja cont?{" "}
                <Link href="/login" className="text-indigo-600 hover:underline">
                  Autentifică-te
                </Link>
              </p>
            </CardFooter>
          </form>
        </Card>
      </div>
    </div>
  )
}

