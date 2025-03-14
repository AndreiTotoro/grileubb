"use client"

import type React from "react"

import Link from "next/link"
import { useState } from "react"
import { useRouter } from "next/navigation"
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

  const handleRegister = (e: React.FormEvent) => {
    e.preventDefault()

    // Simple validation
    if (!name || !email || !password || !confirmPassword) {
      toast.error("Te rugăm să completezi toate câmpurile")
      return
    }

    if (password !== confirmPassword) {
      toast.error("Parolele nu coincid")
      return
    }

    // Simulate registration (in a real app, this would call an API)
    toast.success("Înregistrare reușită! Contul tău a fost creat cu succes!")

    // Redirect to dashboard
    router.push("/dashboard")
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
              <div className="space-y-2">
                <Label htmlFor="name">Nume complet</Label>
                <Input id="name" placeholder="Nume Prenume" value={name} onChange={(e) => setName(e.target.value)} />
              </div>
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
                <Label htmlFor="password">Parolă</Label>
                <Input id="password" type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
              </div>
              <div className="space-y-2">
                <Label htmlFor="confirmPassword">Confirmă parola</Label>
                <Input
                  id="confirmPassword"
                  type="password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                />
              </div>
              <div className="space-y-2">
                <Label>Materie preferată</Label>
                <RadioGroup
                  defaultValue="math"
                  value={subject}
                  onValueChange={(value) => setSubject(value as Subject)}
                  className="flex space-x-4"
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
              >
                Creează cont
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

