"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import {
  CheckCircle,
  BookOpen,
  Brain,
  Users,
  Star,
  ArrowRight,
  Zap,
  BarChart2,
  MessageSquare,
  Award,
  Menu,
  X,
  Github,
  Twitter,
  Linkedin,
  Instagram,
  ThumbsUp,
} from "lucide-react"

export default function LandingPage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-md z-50 border-b border-gray-100">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center">
            <Link href="/" className="font-bold text-2xl tracking-tight">
              <span className="bg-gradient-to-r from-indigo-600 to-violet-600 bg-clip-text text-transparent">
                grile
              </span>
              <span className="bg-gradient-to-r from-violet-600 to-fuchsia-600 bg-clip-text text-transparent">ubb</span>
              <span className="text-gray-800">.com</span>
            </Link>
          </div>

          <nav className="hidden md:flex items-center space-x-8">
            <Link href="#features" className="text-gray-700 hover:text-indigo-600 font-medium transition">
              Features
            </Link>
            <Link href="#how-it-works" className="text-gray-700 hover:text-indigo-600 font-medium transition">
              How It Works
            </Link>
            <Link href="#pricing" className="text-gray-700 hover:text-indigo-600 font-medium transition">
              Pricing
            </Link>
          </nav>

          <div className="hidden md:flex items-center space-x-4">
            <Link href="/login">
              <Button variant="ghost" className="text-gray-700 hover:text-indigo-600 hover:bg-indigo-50">
                Login
              </Button>
            </Link>
            <Link href="/register">
              <Button className="bg-gradient-to-r from-indigo-600 to-violet-600 hover:from-indigo-700 hover:to-violet-700 text-white font-medium">
                Sign Up Free
              </Button>
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2 rounded-md text-gray-700 hover:bg-gray-100"
            onClick={() => setMobileMenuOpen(true)}
          >
            <Menu className="h-6 w-6" />
          </button>
        </div>
      </header>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 bg-white md:hidden">
          <div className="flex justify-between items-center p-4 border-b">
            <Link href="/" className="font-bold text-2xl tracking-tight">
              <span className="bg-gradient-to-r from-indigo-600 to-violet-600 bg-clip-text text-transparent">
                grile
              </span>
              <span className="bg-gradient-to-r from-violet-600 to-fuchsia-600 bg-clip-text text-transparent">ubb</span>
              <span className="text-gray-800">.com</span>
            </Link>
            <button className="p-2 rounded-md text-gray-700 hover:bg-gray-100" onClick={() => setMobileMenuOpen(false)}>
              <X className="h-6 w-6" />
            </button>
          </div>

          <nav className="flex flex-col p-4 space-y-4">
            <Link
              href="#features"
              className="text-gray-700 hover:text-indigo-600 font-medium py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              Features
            </Link>
            <Link
              href="#how-it-works"
              className="text-gray-700 hover:text-indigo-600 font-medium py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              How It Works
            </Link>
            <Link
              href="#pricing"
              className="text-gray-700 hover:text-indigo-600 font-medium py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              Pricing
            </Link>

            <div className="pt-4 space-y-4">
              <Link href="/login" onClick={() => setMobileMenuOpen(false)}>
                <Button variant="outline" className="w-full">
                  Login
                </Button>
              </Link>
              <Link href="/register" onClick={() => setMobileMenuOpen(false)}>
                <Button className="w-full bg-gradient-to-r from-indigo-600 to-violet-600">Sign Up Free</Button>
              </Link>
            </div>
          </nav>
        </div>
      )}

      {/* Hero Section */}
      <section className="pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <Badge className="mb-6 bg-indigo-100 text-indigo-800 hover:bg-indigo-200 py-1.5 px-4 text-sm font-medium rounded-full">
              Pregătire pentru admitere UBB
            </Badge>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-8 bg-gradient-to-r from-indigo-600 via-violet-600 to-fuchsia-600 bg-clip-text text-transparent">
              Admiterea la UBB, <br />
              simplificată cu AI
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-10 max-w-3xl mx-auto">
              Platforma modernă care te ajută să te pregătești pentru examenul de admitere la Babeș-Bolyai cu întrebări
              din anii trecuți, teste practice și indicii personalizate.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link href="/register">
                <Button className="bg-gradient-to-r from-indigo-600 to-violet-600 hover:from-indigo-700 hover:to-violet-700 text-white text-lg py-6 px-8 rounded-xl font-medium">
                  Începe gratuit
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Button
                variant="outline"
                className="border-2 border-gray-200 text-gray-700 hover:bg-gray-50 text-lg py-6 px-8 rounded-xl font-medium"
              >
                Află mai multe
              </Button>
            </div>
          </div>

          <div className="relative mx-auto max-w-5xl">
            <div className="absolute -inset-1 bg-gradient-to-r from-indigo-600 to-fuchsia-600 rounded-2xl blur-2xl opacity-20"></div>
            <div className="relative bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-200">
              <Image
                src="/placeholder.svg?height=600&width=1000"
                alt="GrileUBB Platform"
                width={1000}
                height={600}
                className="w-full h-auto"
              />
            </div>

            <div className="absolute -bottom-6 -right-6 bg-gradient-to-br from-indigo-600 to-violet-600 rounded-xl p-4 shadow-lg">
              <div className="flex items-center gap-3 text-white">
                <div className="bg-white/20 rounded-full p-2">
                  <Zap className="h-6 w-6" />
                </div>
                <div>
                  <p className="font-medium">Powered by AI</p>
                  <p className="text-sm opacity-80">Indicii inteligente</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <p className="text-4xl font-bold bg-gradient-to-r from-indigo-600 to-violet-600 bg-clip-text text-transparent mb-2">
                1000+
              </p>
              <p className="text-gray-600 font-medium">Întrebări din examene</p>
            </div>
            <div>
              <p className="text-4xl font-bold bg-gradient-to-r from-violet-600 to-fuchsia-600 bg-clip-text text-transparent mb-2">
                5000+
              </p>
              <p className="text-gray-600 font-medium">Studenți activi</p>
            </div>
            <div>
              <p className="text-4xl font-bold bg-gradient-to-r from-fuchsia-600 to-pink-600 bg-clip-text text-transparent mb-2">
                90%
              </p>
              <p className="text-gray-600 font-medium">Rată de succes</p>
            </div>
            <div>
              <p className="text-4xl font-bold bg-gradient-to-r from-pink-600 to-rose-600 bg-clip-text text-transparent mb-2">
                24/7
              </p>
              <p className="text-gray-600 font-medium">Suport AI</p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <Badge className="mb-4 bg-indigo-100 text-indigo-800 hover:bg-indigo-200 py-1 px-3 text-sm font-medium rounded-full">
              Funcționalități
            </Badge>
            <h2 className="text-4xl font-bold mb-6">Tot ce ai nevoie pentru a reuși</h2>
            <p className="text-xl text-gray-600">
              Platforma noastră oferă toate instrumentele necesare pentru a te pregăti eficient pentru examenul de
              admitere.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mb-6">
                <BookOpen className="h-6 w-6 text-indigo-600" />
              </div>
              <h3 className="text-xl font-bold mb-3">Bibliotecă vastă de întrebări</h3>
              <p className="text-gray-600">
                Accesează sute de întrebări din examene anterioare, organizate pe ani, materii și nivel de dificultate.
              </p>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-violet-100 rounded-lg flex items-center justify-center mb-6">
                <Brain className="h-6 w-6 text-violet-600" />
              </div>
              <h3 className="text-xl font-bold mb-3">Indicii AI</h3>
              <p className="text-gray-600">
                Primește îndrumări pas cu pas fără a-ți dezvălui răspunsul, ajutându-te să înveți mai eficient.
              </p>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-fuchsia-100 rounded-lg flex items-center justify-center mb-6">
                <CheckCircle className="h-6 w-6 text-fuchsia-600" />
              </div>
              <h3 className="text-xl font-bold mb-3">Teste practice</h3>
              <p className="text-gray-600">
                Simulează condiții reale de examen cu teste cronometrate și analize detaliate ale performanței.
              </p>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-rose-100 rounded-lg flex items-center justify-center mb-6">
                <BarChart2 className="h-6 w-6 text-rose-600" />
              </div>
              <h3 className="text-xl font-bold mb-3">Analiză progres</h3>
              <p className="text-gray-600">
                Urmărește-ți evoluția cu grafice intuitive și identifică zonele care necesită mai multă atenție.
              </p>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mb-6">
                <Award className="h-6 w-6 text-indigo-600" />
              </div>
              <h3 className="text-xl font-bold mb-3">Gamificare</h3>
              <p className="text-gray-600">
                Menține-ți motivația cu un sistem de insigne, niveluri și streak-uri zilnice.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <Badge className="mb-4 bg-indigo-100 text-indigo-800 hover:bg-indigo-200 py-1 px-3 text-sm font-medium rounded-full">
              Proces simplu
            </Badge>
            <h2 className="text-4xl font-bold mb-6">Cum funcționează</h2>
            <p className="text-xl text-gray-600">Începe să te pregătești pentru examen în doar câțiva pași simpli</p>
          </div>

          <div className="relative">
            <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-gray-200 -translate-y-1/2 hidden md:block"></div>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div className="relative bg-white rounded-xl p-8 shadow-sm border border-gray-100">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-gradient-to-r from-indigo-600 to-violet-600 flex items-center justify-center text-white font-bold z-10">
                  1
                </div>
                <div className="text-center pt-4">
                  <h3 className="text-xl font-bold mb-3">Creează cont</h3>
                  <p className="text-gray-600">
                    Înregistrează-te gratuit în câteva secunde și obține acces imediat la funcționalitățile de bază.
                  </p>
                </div>
              </div>

              <div className="relative bg-white rounded-xl p-8 shadow-sm border border-gray-100">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-gradient-to-r from-violet-600 to-fuchsia-600 flex items-center justify-center text-white font-bold z-10">
                  2
                </div>
                <div className="text-center pt-4">
                  <h3 className="text-xl font-bold mb-3">Alege materia</h3>
                  <p className="text-gray-600">
                    Selectează Matematică sau Informatică și personalizează-ți traseul de învățare.
                  </p>
                </div>
              </div>

              <div className="relative bg-white rounded-xl p-8 shadow-sm border border-gray-100">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-gradient-to-r from-fuchsia-600 to-pink-600 flex items-center justify-center text-white font-bold z-10">
                  3
                </div>
                <div className="text-center pt-4">
                  <h3 className="text-xl font-bold mb-3">Exersează</h3>
                  <p className="text-gray-600">
                    Rezolvă întrebări din examene anterioare cu ajutorul indiciilor AI atunci când ai nevoie.
                  </p>
                </div>
              </div>

              <div className="relative bg-white rounded-xl p-8 shadow-sm border border-gray-100">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-gradient-to-r from-pink-600 to-rose-600 flex items-center justify-center text-white font-bold z-10">
                  4
                </div>
                <div className="text-center pt-4">
                  <h3 className="text-xl font-bold mb-3">Urmărește progresul</h3>
                  <p className="text-gray-600">
                    Monitorizează-ți îmbunătățirea și concentrează-te pe zonele care necesită mai multă atenție.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* AI Feature Highlight */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1">
              <Badge className="mb-4 bg-indigo-100 text-indigo-800 hover:bg-indigo-200 py-1 px-3 text-sm font-medium rounded-full">
                Tehnologie avansată
              </Badge>
              <h2 className="text-4xl font-bold mb-6">Asistent de învățare bazat pe AI</h2>
              <p className="text-xl text-gray-600 mb-8">
                AI-ul nostru nu îți oferă doar răspunsuri — te ajută să înțelegi conceptele și să-ți dezvolți
                abilitățile de rezolvare a problemelor.
              </p>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <div className="mt-1 bg-green-100 rounded-full p-1 mr-3">
                    <CheckCircle className="h-5 w-5 text-green-600" />
                  </div>
                  <span className="text-gray-700">
                    Indicii pas cu pas care te ghidează fără a-ți dezvălui răspunsul
                  </span>
                </li>
                <li className="flex items-start">
                  <div className="mt-1 bg-green-100 rounded-full p-1 mr-3">
                    <CheckCircle className="h-5 w-5 text-green-600" />
                  </div>
                  <span className="text-gray-700">Traseu de învățare personalizat bazat pe performanța ta</span>
                </li>
                <li className="flex items-start">
                  <div className="mt-1 bg-green-100 rounded-full p-1 mr-3">
                    <CheckCircle className="h-5 w-5 text-green-600" />
                  </div>
                  <span className="text-gray-700">Explicații adaptate stilului tău de învățare</span>
                </li>
                <li className="flex items-start">
                  <div className="mt-1 bg-green-100 rounded-full p-1 mr-3">
                    <CheckCircle className="h-5 w-5 text-green-600" />
                  </div>
                  <span className="text-gray-700">Disponibil 24/7 ori de câte ori ai nevoie de asistență</span>
                </li>
              </ul>
              <div className="mt-10">
                <Link href="/register">
                  <Button className="bg-gradient-to-r from-indigo-600 to-violet-600 hover:from-indigo-700 hover:to-violet-700 text-white font-medium">
                    Încearcă indiciile AI acum
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </div>
            </div>

            <div className="order-1 lg:order-2 relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-indigo-600 to-fuchsia-600 rounded-2xl blur-xl opacity-10"></div>
              <div className="relative bg-white rounded-xl p-6 shadow-lg border border-gray-200">
                <div className="mb-4 pb-4 border-b border-gray-200">
                  <p className="font-bold">Întrebare:</p>
                  <p className="text-gray-700">Calculează derivata funcției f(x) = x³ + 2x² - 5x + 3</p>
                </div>
                <div className="mb-4">
                  <p className="font-bold text-indigo-600">Indiciu AI 1:</p>
                  <p className="text-gray-700">
                    Amintește-ți regula de derivare pentru polinoame: dacă f(x) = xⁿ, atunci f'(x) = n·xⁿ⁻¹
                  </p>
                </div>
                <div className="mb-4">
                  <p className="font-bold text-indigo-600">Indiciu AI 2:</p>
                  <p className="text-gray-700">Aplică regula pentru fiecare termen și adună rezultatele.</p>
                </div>
                <Button variant="outline" className="w-full border-indigo-200 text-indigo-600 hover:bg-indigo-50">
                  Obține următorul indiciu
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <Badge className="mb-4 bg-indigo-100 text-indigo-800 hover:bg-indigo-200 py-1 px-3 text-sm font-medium rounded-full">
              Prețuri transparente
            </Badge>
            <h2 className="text-4xl font-bold mb-6">Planuri simple</h2>
            <p className="text-xl text-gray-600">
              Alege planul care se potrivește nevoilor tale. Începe gratuit și fă upgrade oricând.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-200 hover:shadow-md transition-shadow">
              <h3 className="text-2xl font-bold mb-2">Gratuit</h3>
              <p className="text-4xl font-bold mb-6">0 Lei</p>
              <ul className="space-y-4 mb-8">
                <li className="flex items-start">
                  <div className="mt-1 bg-green-100 rounded-full p-1 mr-3">
                    <CheckCircle className="h-5 w-5 text-green-600" />
                  </div>
                  <span className="text-gray-700">Acces la examene anterioare</span>
                </li>
                <li className="flex items-start">
                  <div className="mt-1 bg-green-100 rounded-full p-1 mr-3">
                    <CheckCircle className="h-5 w-5 text-green-600" />
                  </div>
                  <span className="text-gray-700">10 întrebări de practică pe zi</span>
                </li>
                <li className="flex items-start">
                  <div className="mt-1 bg-green-100 rounded-full p-1 mr-3">
                    <CheckCircle className="h-5 w-5 text-green-600" />
                  </div>
                  <span className="text-gray-700">Urmărirea progresului de bază</span>
                </li>
              </ul>
              <Link href="/register">
                <Button
                  variant="outline"
                  className="w-full border-2 border-indigo-600 text-indigo-600 hover:bg-indigo-50 font-medium"
                >
                  Începe gratuit
                </Button>
              </Link>
            </div>

            <div className="bg-gradient-to-b from-white to-indigo-50 rounded-xl p-8 shadow-md border border-indigo-200 relative">
              <div className="absolute top-0 right-0 bg-gradient-to-r from-indigo-600 to-violet-600 text-white px-4 py-1 text-sm font-medium rounded-bl-lg rounded-tr-xl">
                RECOMANDAT
              </div>
              <h3 className="text-2xl font-bold mb-2">Premium</h3>
              <p className="text-4xl font-bold mb-6">
                49 Lei<span className="text-lg font-normal text-gray-500">/lună</span>
              </p>
              <ul className="space-y-4 mb-8">
                <li className="flex items-start">
                  <div className="mt-1 bg-green-100 rounded-full p-1 mr-3">
                    <CheckCircle className="h-5 w-5 text-green-600" />
                  </div>
                  <span className="text-gray-700">Urmărirea progresului de bază</span>
                </li>
              </ul>
              <Link href="/register">
                <Button className="w-full bg-gradient-to-r from-indigo-600 to-violet-600 hover:from-indigo-700 hover:to-violet-700 text-white font-medium">
                  Obține Premium
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <Badge className="mb-4 bg-indigo-100 text-indigo-800 hover:bg-indigo-200 py-1 px-3 text-sm font-medium rounded-full">
              Testimoniale
            </Badge>
            <h2 className="text-4xl font-bold mb-6">Poveștile de succes ale studenților</h2>
            <p className="text-xl text-gray-600">
              Descoperă cum GrileUBB a ajutat studenții să reușească la examenul de admitere
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <div className="flex items-center mb-6">
                <div className="w-14 h-14 bg-indigo-100 rounded-full overflow-hidden mr-4">
                  <Image
                    src="/placeholder.svg?height=56&width=56"
                    alt="Student"
                    width={56}
                    height={56}
                    className="object-cover"
                  />
                </div>
                <div>
                  <p className="font-bold">Andrei M.</p>
                  <p className="text-gray-500 text-sm">Student Informatică</p>
                  <div className="flex mt-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 text-yellow-400 fill-yellow-400" />
                    ))}
                  </div>
                </div>
              </div>
              <p className="text-gray-700 italic">
                "Datorită GrileUBB, am trecut examenul de admitere cu brio! Indiciile AI au fost incredibil de utile
                când m-am blocat la probleme."
              </p>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <div className="flex items-center mb-6">
                <div className="w-14 h-14 bg-violet-100 rounded-full overflow-hidden mr-4">
                  <Image
                    src="/placeholder.svg?height=56&width=56"
                    alt="Student"
                    width={56}
                    height={56}
                    className="object-cover"
                  />
                </div>
                <div>
                  <p className="font-bold">Maria D.</p>
                  <p className="text-gray-500 text-sm">Studentă Matematică</p>
                  <div className="flex mt-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 text-yellow-400 fill-yellow-400" />
                    ))}
                  </div>
                </div>
              </div>
              <p className="text-gray-700 italic">
                "Testele de practică au fost exact ca examenul real. M-am simțit foarte pregătită și încrezătoare în
                ziua examenului. Nu aș fi reușit fără această platformă!"
              </p>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <div className="flex items-center mb-6">
                <div className="w-14 h-14 bg-fuchsia-100 rounded-full overflow-hidden mr-4">
                  <Image
                    src="/placeholder.svg?height=56&width=56"
                    alt="Student"
                    width={56}
                    height={56}
                    className="object-cover"
                  />
                </div>
                <div>
                  <p className="font-bold">Mihai P.</p>
                  <p className="text-gray-500 text-sm">Student Informatică</p>
                  <div className="flex mt-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 text-yellow-400 fill-yellow-400" />
                    ))}
                  </div>
                </div>
              </div>
              <p className="text-gray-700 italic">
                "Indiciile AI au fost un game-changer. Primirea ajutorului personalizat și vederea
                diferitelor abordări pentru rezolvarea problemelor mi-au îmbunătățit abilitățile dramatic."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="relative max-w-5xl mx-auto rounded-2xl overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-indigo-600 via-violet-600 to-fuchsia-600"></div>
            <div className="absolute inset-0 bg-gradient-to-r from-indigo-600 via-violet-600 to-fuchsia-600 opacity-30 mix-blend-multiply"></div>
            <div className="relative p-12 md:p-16 text-center text-white">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">Ești pregătit să reușești la examenul UBB?</h2>
              <p className="text-xl mb-10 max-w-2xl mx-auto">
                Alătură-te miilor de studenți care și-au crescut deja șansele de succes cu GrileUBB
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Link href="/register">
                  <Button className="bg-white text-indigo-600 hover:bg-gray-100 text-lg py-6 px-8 rounded-xl font-medium">
                    Începe gratuit
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
              </div>
              <p className="mt-6 text-white/80">Fără card de credit. Anulează oricând.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white pt-16 pb-8">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
            <div>
              <Link href="/" className="inline-block font-bold text-2xl tracking-tight mb-6">
                <span className="text-indigo-400">grile</span>
                <span className="text-violet-400">ubb</span>
                <span className="text-gray-400">.com</span>
              </Link>
              <p className="text-gray-400 mb-6">
                Împuternicim următoarea generație de informaticieni și matematicieni din România.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <Github className="h-5 w-5" />
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <Twitter className="h-5 w-5" />
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <Linkedin className="h-5 w-5" />
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <Instagram className="h-5 w-5" />
                </a>
              </div>
            </div>

            <div>
              <h3 className="font-bold text-lg mb-4">Link-uri rapide</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="#features" className="text-gray-400 hover:text-white transition-colors">
                    Funcționalități
                  </Link>
                </li>
                <li>
                  <Link href="#how-it-works" className="text-gray-400 hover:text-white transition-colors">
                    Cum funcționează
                  </Link>
                </li>
                <li>
                  <Link href="#pricing" className="text-gray-400 hover:text-white transition-colors">
                    Prețuri
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-bold text-lg mb-4">Resurse</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors">
                    Blog
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors">
                    FAQ
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors">
                    Suport
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors">
                    Politica de confidențialitate
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-bold text-lg mb-4">Contact</h3>
              <ul className="space-y-2">
                <li className="text-gray-400">Email: contact@grileubb.com</li>
                <li className="text-gray-400">Cluj-Napoca, România</li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-8 text-center text-gray-500">
            <p>© {new Date().getFullYear()} GrileUBB. Toate drepturile rezervate.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

