import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { CheckCircle, Users, Award, Clock, Smartphone, ArrowRight, Target, Sparkles } from "lucide-react"

export default function FeaturesPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="pt-32 pb-20 md:pt-40 md:pb-32 bg-gradient-to-b from-indigo-50 to-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <Badge className="mb-6 bg-indigo-100 text-indigo-800 hover:bg-indigo-200 py-1.5 px-4 text-sm font-medium rounded-full">
              Funcționalități
            </Badge>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-8 bg-gradient-to-r from-indigo-600 via-violet-600 to-fuchsia-600 bg-clip-text text-transparent">
              Toate instrumentele de care ai nevoie pentru succes
            </h1>
            <p className="text-xl text-gray-600 mb-10 max-w-3xl mx-auto">
              Descoperă funcționalitățile avansate care fac din GrileUBB platforma ideală pentru pregătirea examenului
              de admitere la Babeș-Bolyai.
            </p>
          </div>
        </div>
      </section>

      {/* Main Features Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center mb-24">
            <div>
              <Badge className="mb-4 bg-indigo-100 text-indigo-800 hover:bg-indigo-200 py-1 px-3 text-sm font-medium rounded-full">
                Bibliotecă de întrebări
              </Badge>
              <h2 className="text-3xl font-bold mb-6">Acces la sute de întrebări din examene anterioare</h2>
              <p className="text-lg text-gray-600 mb-8">
                Biblioteca noastră vastă include întrebări autentice din examene anterioare, organizate pe ani, materii
                și nivel de dificultate. Fiecare întrebare este însoțită de explicații detaliate și soluții pas cu pas.
              </p>
              <ul className="space-y-4 mb-8">
                <li className="flex items-start">
                  <div className="mt-1 bg-green-100 rounded-full p-1 mr-3">
                    <CheckCircle className="h-5 w-5 text-green-600" />
                  </div>
                  <span className="text-gray-700">Întrebări din ultimii 10 ani de examene</span>
                </li>
                <li className="flex items-start">
                  <div className="mt-1 bg-green-100 rounded-full p-1 mr-3">
                    <CheckCircle className="h-5 w-5 text-green-600" />
                  </div>
                  <span className="text-gray-700">Organizate pe categorii și nivel de dificultate</span>
                </li>
                <li className="flex items-start">
                  <div className="mt-1 bg-green-100 rounded-full p-1 mr-3">
                    <CheckCircle className="h-5 w-5 text-green-600" />
                  </div>
                  <span className="text-gray-700">Explicații detaliate pentru fiecare răspuns</span>
                </li>
                <li className="flex items-start">
                  <div className="mt-1 bg-green-100 rounded-full p-1 mr-3">
                    <CheckCircle className="h-5 w-5 text-green-600" />
                  </div>
                  <span className="text-gray-700">Actualizate constant cu noi întrebări</span>
                </li>
              </ul>
            </div>
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-indigo-600 to-fuchsia-600 rounded-2xl blur-xl opacity-10"></div>
              <div className="relative bg-white rounded-xl p-6 shadow-lg border border-gray-200">
                <Image
                  src="/placeholder.svg?height=400&width=500"
                  alt="Bibliotecă de întrebări"
                  width={500}
                  height={400}
                  className="rounded-lg"
                />
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center mb-24">
            <div className="order-2 md:order-1 relative">
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
            <div className="order-1 md:order-2">
              <Badge className="mb-4 bg-violet-100 text-violet-800 hover:bg-violet-200 py-1 px-3 text-sm font-medium rounded-full">
                Asistent AI
              </Badge>
              <h2 className="text-3xl font-bold mb-6">Indicii inteligente personalizate</h2>
              <p className="text-lg text-gray-600 mb-8">
                Asistentul nostru AI oferă indicii personalizate care te ghidează spre soluție fără a-ți dezvălui
                răspunsul. Acest lucru te ajută să înțelegi conceptele și să-ți dezvolți abilitățile de rezolvare a
                problemelor.
              </p>
              <ul className="space-y-4 mb-8">
                <li className="flex items-start">
                  <div className="mt-1 bg-green-100 rounded-full p-1 mr-3">
                    <CheckCircle className="h-5 w-5 text-green-600" />
                  </div>
                  <span className="text-gray-700">Indicii pas cu pas adaptate nivelului tău</span>
                </li>
                <li className="flex items-start">
                  <div className="mt-1 bg-green-100 rounded-full p-1 mr-3">
                    <CheckCircle className="h-5 w-5 text-green-600" />
                  </div>
                  <span className="text-gray-700">Explicații conceptuale, nu doar răspunsuri</span>
                </li>
                <li className="flex items-start">
                  <div className="mt-1 bg-green-100 rounded-full p-1 mr-3">
                    <CheckCircle className="h-5 w-5 text-green-600" />
                  </div>
                  <span className="text-gray-700">Disponibil 24/7 pentru asistență imediată</span>
                </li>
                <li className="flex items-start">
                  <div className="mt-1 bg-green-100 rounded-full p-1 mr-3">
                    <CheckCircle className="h-5 w-5 text-green-600" />
                  </div>
                  <span className="text-gray-700">Se adaptează la stilul tău de învățare</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center mb-24">
            <div>
              <Badge className="mb-4 bg-fuchsia-100 text-fuchsia-800 hover:bg-fuchsia-200 py-1 px-3 text-sm font-medium rounded-full">
                Analiză progres
              </Badge>
              <h2 className="text-3xl font-bold mb-6">Urmărește-ți evoluția cu statistici detaliate</h2>
              <p className="text-lg text-gray-600 mb-8">
                Tabloul de bord analitic îți oferă o imagine clară a progresului tău, evidențiind punctele forte și
                zonele care necesită îmbunătățire. Grafice intuitive și statistici detaliate te ajută să-ți optimizezi
                strategia de învățare.
              </p>
              <ul className="space-y-4 mb-8">
                <li className="flex items-start">
                  <div className="mt-1 bg-green-100 rounded-full p-1 mr-3">
                    <CheckCircle className="h-5 w-5 text-green-600" />
                  </div>
                  <span className="text-gray-700">Statistici detaliate pe categorii și subiecte</span>
                </li>
                <li className="flex items-start">
                  <div className="mt-1 bg-green-100 rounded-full p-1 mr-3">
                    <CheckCircle className="h-5 w-5 text-green-600" />
                  </div>
                  <span className="text-gray-700">Grafice de evoluție în timp</span>
                </li>
                <li className="flex items-start">
                  <div className="mt-1 bg-green-100 rounded-full p-1 mr-3">
                    <CheckCircle className="h-5 w-5 text-green-600" />
                  </div>
                  <span className="text-gray-700">Identificarea automată a zonelor problematice</span>
                </li>
                <li className="flex items-start">
                  <div className="mt-1 bg-green-100 rounded-full p-1 mr-3">
                    <CheckCircle className="h-5 w-5 text-green-600" />
                  </div>
                  <span className="text-gray-700">Recomandări personalizate pentru îmbunătățire</span>
                </li>
              </ul>
            </div>
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-indigo-600 to-fuchsia-600 rounded-2xl blur-xl opacity-10"></div>
              <div className="relative bg-white rounded-xl p-6 shadow-lg border border-gray-200">
                <Image
                  src="/placeholder.svg?height=400&width=500"
                  alt="Analiză progres"
                  width={500}
                  height={400}
                  className="rounded-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Additional Features Grid */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <Badge className="mb-4 bg-indigo-100 text-indigo-800 hover:bg-indigo-200 py-1 px-3 text-sm font-medium rounded-full">
              Mai multe funcționalități
            </Badge>
            <h2 className="text-4xl font-bold mb-6">Descoperă toate funcționalitățile</h2>
            <p className="text-xl text-gray-600">
              GrileUBB oferă o gamă completă de instrumente pentru a-ți maximiza șansele de succes la examenul de
              admitere.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mb-6">
                <Target className="h-6 w-6 text-indigo-600" />
              </div>
              <h3 className="text-xl font-bold mb-3">Teste practice</h3>
              <p className="text-gray-600">
                Simulează condiții reale de examen cu teste cronometrate care reflectă formatul și dificultatea
                examenului real.
              </p>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-violet-100 rounded-lg flex items-center justify-center mb-6">
                <Users className="h-6 w-6 text-violet-600" />
              </div>
              <h3 className="text-xl font-bold mb-3">Forum comunitate</h3>
              <p className="text-gray-600">
                Conectează-te cu alți studenți, discută probleme dificile și împărtășește strategii de învățare
                eficiente.
              </p>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-fuchsia-100 rounded-lg flex items-center justify-center mb-6">
                <Award className="h-6 w-6 text-fuchsia-600" />
              </div>
              <h3 className="text-xl font-bold mb-3">Gamificare</h3>
              <p className="text-gray-600">
                Menține-ți motivația cu un sistem de insigne, niveluri și streak-uri zilnice care transformă învățarea
                într-o experiență captivantă.
              </p>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-pink-100 rounded-lg flex items-center justify-center mb-6">
                <Clock className="h-6 w-6 text-pink-600" />
              </div>
              <h3 className="text-xl font-bold mb-3">Planuri de studiu</h3>
              <p className="text-gray-600">
                Urmează planuri de studiu personalizate care îți organizează materialul în sesiuni optimizate pentru
                retenție maximă.
              </p>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-rose-100 rounded-lg flex items-center justify-center mb-6">
                <Smartphone className="h-6 w-6 text-rose-600" />
              </div>
              <h3 className="text-xl font-bold mb-3">Acces mobil</h3>
              <p className="text-gray-600">
                Studiază oriunde și oricând cu aplicația noastră mobilă complet funcțională, disponibilă pentru iOS și
                Android.
              </p>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mb-6">
                <Sparkles className="h-6 w-6 text-indigo-600" />
              </div>
              <h3 className="text-xl font-bold mb-3">Moduri de învățare</h3>
              <p className="text-gray-600">
                Alege între diferite moduri de învățare, inclusiv flashcards, quiz-uri și exerciții practice pentru a
                varia experiența.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="relative max-w-5xl mx-auto rounded-2xl overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-indigo-600 via-violet-600 to-fuchsia-600"></div>
            <div className="absolute inset-0 bg-gradient-to-r from-indigo-600 via-violet-600 to-fuchsia-600 opacity-30 mix-blend-multiply"></div>
            <div className="relative p-12 md:p-16 text-center text-white">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">Gata să începi pregătirea?</h2>
              <p className="text-xl mb-10 max-w-2xl mx-auto">
                Înregistrează-te gratuit și descoperă toate funcționalitățile care te vor ajuta să reușești la examenul
                de admitere.
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
    </div>
  )
}

