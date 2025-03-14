import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { CheckCircle, X } from "lucide-react"

export default function PricingPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="pt-32 pb-20 md:pt-40 md:pb-32 bg-gradient-to-b from-indigo-50 to-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <Badge className="mb-6 bg-indigo-100 text-indigo-800 hover:bg-indigo-200 py-1.5 px-4 text-sm font-medium rounded-full">
              Prețuri
            </Badge>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-8 bg-gradient-to-r from-indigo-600 via-violet-600 to-fuchsia-600 bg-clip-text text-transparent">
              Planuri simple și transparente
            </h1>
            <p className="text-xl text-gray-600 mb-10 max-w-3xl mx-auto">
              Alege planul care se potrivește nevoilor tale. Începe gratuit și fă upgrade doar când ai nevoie de
              funcționalități avansate.
            </p>
          </div>
        </div>
      </section>

      {/* Pricing Plans */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Free Plan */}
            <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-200 hover:shadow-md transition-shadow">
              <div className="mb-6">
                <h3 className="text-2xl font-bold mb-2">Gratuit</h3>
                <p className="text-gray-600">Perfect pentru a începe</p>
              </div>
              <div className="mb-6">
                <p className="text-4xl font-bold">0 Lei</p>
                <p className="text-gray-500">Pentru totdeauna</p>
              </div>
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
                <li className="flex items-start">
                  <div className="mt-1 bg-green-100 rounded-full p-1 mr-3">
                    <CheckCircle className="h-5 w-5 text-green-600" />
                  </div>
                  <span className="text-gray-700">Acces la forumul comunității</span>
                </li>
                <li className="flex items-start">
                  <div className="mt-1 bg-red-100 rounded-full p-1 mr-3">
                    <X className="h-5 w-5 text-red-600" />
                  </div>
                  <span className="text-gray-400">Indicii și soluții bazate pe AI</span>
                </li>
                <li className="flex items-start">
                  <div className="mt-1 bg-red-100 rounded-full p-1 mr-3">
                    <X className="h-5 w-5 text-red-600" />
                  </div>
                  <span className="text-gray-400">Analize și statistici avansate</span>
                </li>
                <li className="flex items-start">
                  <div className="mt-1 bg-red-100 rounded-full p-1 mr-3">
                    <X className="h-5 w-5 text-red-600" />
                  </div>
                  <span className="text-gray-400">Planuri de studiu personalizate</span>
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

            {/* Premium Plan */}
            <div className="bg-gradient-to-b from-white to-indigo-50 rounded-xl p-8 shadow-md border border-indigo-200 relative lg:scale-105 z-10">
              <div className="absolute top-0 right-0 bg-gradient-to-r from-indigo-600 to-violet-600 text-white px-4 py-1 text-sm font-medium rounded-bl-lg rounded-tr-xl">
                RECOMANDAT
              </div>
              <div className="mb-6">
                <h3 className="text-2xl font-bold mb-2">Premium</h3>
                <p className="text-gray-600">Pentru pregătire serioasă</p>
              </div>
              <div className="mb-6">
                <p className="text-4xl font-bold">
                  49 Lei<span className="text-lg font-normal text-gray-500">/lună</span>
                </p>
                <p className="text-gray-500">Anulează oricând</p>
              </div>
              <ul className="space-y-4 mb-8">
                <li className="flex items-start">
                  <div className="mt-1 bg-green-100 rounded-full p-1 mr-3">
                    <CheckCircle className="h-5 w-5 text-green-600" />
                  </div>
                  <span className="text-gray-700">Tot ce include planul Gratuit</span>
                </li>
                <li className="flex items-start">
                  <div className="mt-1 bg-green-100 rounded-full p-1 mr-3">
                    <CheckCircle className="h-5 w-5 text-green-600" />
                  </div>
                  <span className="text-gray-700">Întrebări de practică nelimitate</span>
                </li>
                <li className="flex items-start">
                  <div className="mt-1 bg-green-100 rounded-full p-1 mr-3">
                    <CheckCircle className="h-5 w-5 text-green-600" />
                  </div>
                  <span className="text-gray-700">Indicii și soluții bazate pe AI</span>
                </li>
                <li className="flex items-start">
                  <div className="mt-1 bg-green-100 rounded-full p-1 mr-3">
                    <CheckCircle className="h-5 w-5 text-green-600" />
                  </div>
                  <span className="text-gray-700">Analize și statistici avansate</span>
                </li>
                <li className="flex items-start">
                  <div className="mt-1 bg-green-100 rounded-full p-1 mr-3">
                    <CheckCircle className="h-5 w-5 text-green-600" />
                  </div>
                  <span className="text-gray-700">Planuri de studiu personalizate</span>
                </li>
                <li className="flex items-start">
                  <div className="mt-1 bg-green-100 rounded-full p-1 mr-3">
                    <CheckCircle className="h-5 w-5 text-green-600" />
                  </div>
                  <span className="text-gray-700">Simulări de examen cu feedback detaliat</span>
                </li>
              </ul>
              <Link href="/register">
                <Button className="w-full bg-gradient-to-r from-indigo-600 to-violet-600 hover:from-indigo-700 hover:to-violet-700 text-white font-medium">
                  Obține Premium
                </Button>
              </Link>
            </div>

            {/* Annual Plan */}
            <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-200 hover:shadow-md transition-shadow">
              <div className="mb-6">
                <h3 className="text-2xl font-bold mb-2">Anual</h3>
                <p className="text-gray-600">Economisește 33%</p>
              </div>
              <div className="mb-6">
                <p className="text-4xl font-bold">
                  399 Lei<span className="text-lg font-normal text-gray-500">/an</span>
                </p>
                <p className="text-gray-500">Echivalent cu 33 Lei/lună</p>
              </div>
              <ul className="space-y-4 mb-8">
                <li className="flex items-start">
                  <div className="mt-1 bg-green-100 rounded-full p-1 mr-3">
                    <CheckCircle className="h-5 w-5 text-green-600" />
                  </div>
                  <span className="text-gray-700">Toate funcționalitățile Premium</span>
                </li>
                <li className="flex items-start">
                  <div className="mt-1 bg-green-100 rounded-full p-1 mr-3">
                    <CheckCircle className="h-5 w-5 text-green-600" />
                  </div>
                  <span className="text-gray-700">Economisești 33% față de plata lunară</span>
                </li>
                <li className="flex items-start">
                  <div className="mt-1 bg-green-100 rounded-full p-1 mr-3">
                    <CheckCircle className="h-5 w-5 text-green-600" />
                  </div>
                  <span className="text-gray-700">Acces prioritar la noile funcționalități</span>
                </li>
                <li className="flex items-start">
                  <div className="mt-1 bg-green-100 rounded-full p-1 mr-3">
                    <CheckCircle className="h-5 w-5 text-green-600" />
                  </div>
                  <span className="text-gray-700">Suport dedicat prin email</span>
                </li>
              </ul>
              <Link href="/register">
                <Button
                  variant="outline"
                  className="w-full border-2 border-indigo-600 text-indigo-600 hover:bg-indigo-50 font-medium"
                >
                  Economisește cu planul anual
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Feature Comparison */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <Badge className="mb-4 bg-indigo-100 text-indigo-800 hover:bg-indigo-200 py-1 px-3 text-sm font-medium rounded-full">
              Comparație
            </Badge>
            <h2 className="text-4xl font-bold mb-6">Compară planurile în detaliu</h2>
            <p className="text-xl text-gray-600">
              Vezi exact ce funcționalități sunt incluse în fiecare plan pentru a face cea mai bună alegere.
            </p>
          </div>

          <div className="max-w-5xl mx-auto overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr>
                  <th className="text-left p-4 bg-white border-b-2 border-gray-200"></th>
                  <th className="p-4 bg-white border-b-2 border-gray-200 text-center">
                    <span className="text-lg font-bold">Gratuit</span>
                  </th>
                  <th className="p-4 bg-indigo-50 border-b-2 border-indigo-200 text-center">
                    <span className="text-lg font-bold text-indigo-600">Premium</span>
                  </th>
                  <th className="p-4 bg-white border-b-2 border-gray-200 text-center">
                    <span className="text-lg font-bold">Anual</span>
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="p-4 bg-white border-b border-gray-200 font-medium">Preț</td>
                  <td className="p-4 bg-white border-b border-gray-200 text-center">0 Lei</td>
                  <td className="p-4 bg-indigo-50 border-b border-indigo-200 text-center font-medium">49 Lei/lună</td>
                  <td className="p-4 bg-white border-b border-gray-200 text-center">399 Lei/an</td>
                </tr>
                <tr>
                  <td className="p-4 bg-white border-b border-gray-200 font-medium">Întrebări zilnice</td>
                  <td className="p-4 bg-white border-b border-gray-200 text-center">10</td>
                  <td className="p-4 bg-indigo-50 border-b border-indigo-200 text-center font-medium">Nelimitate</td>
                  <td className="p-4 bg-white border-b border-gray-200 text-center">Nelimitate</td>
                </tr>
                <tr>
                  <td className="p-4 bg-white border-b border-gray-200 font-medium">Acces la examene anterioare</td>
                  <td className="p-4 bg-white border-b border-gray-200 text-center">
                    <CheckCircle className="h-5 w-5 text-green-600 mx-auto" />
                  </td>
                  <td className="p-4 bg-indigo-50 border-b border-indigo-200 text-center">
                    <CheckCircle className="h-5 w-5 text-green-600 mx-auto" />
                  </td>
                  <td className="p-4 bg-white border-b border-gray-200 text-center">
                    <CheckCircle className="h-5 w-5 text-green-600 mx-auto" />
                  </td>
                </tr>
                <tr>
                  <td className="p-4 bg-white border-b border-gray-200 font-medium">Indicii AI</td>
                  <td className="p-4 bg-white border-b border-gray-200 text-center">
                    <X className="h-5 w-5 text-red-600 mx-auto" />
                  </td>
                  <td className="p-4 bg-indigo-50 border-b border-indigo-200 text-center">
                    <CheckCircle className="h-5 w-5 text-green-600 mx-auto" />
                  </td>
                  <td className="p-4 bg-white border-b border-gray-200 text-center">
                    <CheckCircle className="h-5 w-5 text-green-600 mx-auto" />
                  </td>
                </tr>
                <tr>
                  <td className="p-4 bg-white border-b border-gray-200 font-medium">Statistici avansate</td>
                  <td className="p-4 bg-white border-b border-gray-200 text-center">
                    <X className="h-5 w-5 text-red-600 mx-auto" />
                  </td>
                  <td className="p-4 bg-indigo-50 border-b border-indigo-200 text-center">
                    <CheckCircle className="h-5 w-5 text-green-600 mx-auto" />
                  </td>
                  <td className="p-4 bg-white border-b border-gray-200 text-center">
                    <CheckCircle className="h-5 w-5 text-green-600 mx-auto" />
                  </td>
                </tr>
                <tr>
                  <td className="p-4 bg-white border-b border-gray-200 font-medium">Planuri de studiu personalizate</td>
                  <td className="p-4 bg-white border-b border-gray-200 text-center">
                    <X className="h-5 w-5 text-red-600 mx-auto" />
                  </td>
                  <td className="p-4 bg-indigo-50 border-b border-indigo-200 text-center">
                    <CheckCircle className="h-5 w-5 text-green-600 mx-auto" />
                  </td>
                  <td className="p-4 bg-white border-b border-gray-200 text-center">
                    <CheckCircle className="h-5 w-5 text-green-600 mx-auto" />
                  </td>
                </tr>
                <tr>
                  <td className="p-4 bg-white border-b border-gray-200 font-medium">Simulări de examen</td>
                  <td className="p-4 bg-white border-b border-gray-200 text-center">
                    <X className="h-5 w-5 text-red-600 mx-auto" />
                  </td>
                  <td className="p-4 bg-indigo-50 border-b border-indigo-200 text-center">
                    <CheckCircle className="h-5 w-5 text-green-600 mx-auto" />
                  </td>
                  <td className="p-4 bg-white border-b border-gray-200 text-center">
                    <CheckCircle className="h-5 w-5 text-green-600 mx-auto" />
                  </td>
                </tr>
                <tr>
                  <td className="p-4 bg-white border-b border-gray-200 font-medium">Acces la forum</td>
                  <td className="p-4 bg-white border-b border-gray-200 text-center">
                    <CheckCircle className="h-5 w-5 text-green-600 mx-auto" />
                  </td>
                  <td className="p-4 bg-indigo-50 border-b border-indigo-200 text-center">
                    <CheckCircle className="h-5 w-5 text-green-600 mx-auto" />
                  </td>
                  <td className="p-4 bg-white border-b border-gray-200 text-center">
                    <CheckCircle className="h-5 w-5 text-green-600 mx-auto" />
                  </td>
                </tr>
                <tr>
                  <td className="p-4 bg-white border-b border-gray-200 font-medium">Suport dedicat</td>
                  <td className="p-4 bg-white border-b border-gray-200 text-center">
                    <X className="h-5 w-5 text-red-600 mx-auto" />
                  </td>
                  <td className="p-4 bg-indigo-50 border-b border-indigo-200 text-center">
                    <X className="h-5 w-5 text-red-600 mx-auto" />
                  </td>
                  <td className="p-4 bg-white border-b border-gray-200 text-center">
                    <CheckCircle className="h-5 w-5 text-green-600 mx-auto" />
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <Badge className="mb-4 bg-indigo-100 text-indigo-800 hover:bg-indigo-200 py-1 px-3 text-sm font-medium rounded-full">
              Întrebări frecvente
            </Badge>
            <h2 className="text-4xl font-bold mb-6">Întrebări despre prețuri</h2>
            <p className="text-xl text-gray-600">
              Răspunsuri la cele mai frecvente întrebări despre planurile noastre.
            </p>
          </div>

          <div className="max-w-3xl mx-auto space-y-6">
            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
              <h3 className="text-xl font-bold mb-3">Pot să schimb planul în orice moment?</h3>
              <p className="text-gray-600">
                Da, poți face upgrade sau downgrade la planul tău în orice moment. Dacă faci upgrade, vei plăti doar
                diferența proporțională pentru perioada rămasă. Dacă faci downgrade, vei primi credit pentru perioada
                rămasă.
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
              <h3 className="text-xl font-bold mb-3">Există o garanție de returnare a banilor?</h3>
              <p className="text-gray-600">
                Da, oferim o garanție de returnare a banilor de 14 zile pentru toate planurile plătite. Dacă nu ești
                mulțumit din orice motiv, îți vom rambursa integral suma plătită.
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
              <h3 className="text-xl font-bold mb-3">Ce metode de plată acceptați?</h3>
              <p className="text-gray-600">
                Acceptăm plăți prin card de credit/debit (Visa, Mastercard), PayPal și transfer bancar. Toate plățile
                sunt procesate securizat prin furnizori de încredere.
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
              <h3 className="text-xl font-bold mb-3">Pot anula abonamentul oricând?</h3>
              <p className="text-gray-600">
                Absolut! Poți anula abonamentul în orice moment din contul tău. După anulare, vei avea în continuare
                acces la funcționalitățile premium până la sfârșitul perioadei plătite.
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
              <h3 className="text-xl font-bold mb-3">Există reduceri pentru studenți?</h3>
              <p className="text-gray-600">
                Da, oferim o reducere de 20% pentru studenți. Pentru a beneficia de această reducere, trebuie să ne
                trimiți o copie a legitimației tale de student la adresa support@grileubb.com.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="relative max-w-5xl mx-auto rounded-2xl overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-indigo-600 via-violet-600 to-fuchsia-600"></div>
            <div className="absolute inset-0 bg-gradient-to-r from-indigo-600 via-violet-600 to-fuchsia-600 opacity-30 mix-blend-multiply"></div>
            <div className="relative p-12 md:p-16 text-center text-white">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">Încă ai întrebări?</h2>
              <p className="text-xl mb-10 max-w-2xl mx-auto">
                Echipa noastră este aici pentru a te ajuta. Contactează-ne și îți vom răspunde în cel mai scurt timp.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Button className="bg-white text-indigo-600 hover:bg-gray-100 text-lg py-6 px-8 rounded-xl font-medium">
                  Contactează-ne
                </Button>
              </div>
              <p className="mt-6 text-white/80">Sau încearcă gratuit și descoperă singur</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

