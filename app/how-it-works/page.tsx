import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, CheckCircle, Brain, Lightbulb, Zap } from "lucide-react"

export default function HowItWorksPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="pt-32 pb-20 md:pt-40 md:pb-32 bg-gradient-to-b from-indigo-50 to-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <Badge className="mb-6 bg-indigo-100 text-indigo-800 hover:bg-indigo-200 py-1.5 px-4 text-sm font-medium rounded-full">
              Cum funcționează
            </Badge>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-8 bg-gradient-to-r from-indigo-600 via-violet-600 to-fuchsia-600 bg-clip-text text-transparent">
              Drumul tău spre succes la UBB
            </h1>
            <p className="text-xl text-gray-600 mb-10 max-w-3xl mx-auto">
              Descoperă cum GrileUBB te ghidează pas cu pas în pregătirea pentru examenul de admitere la Babeș-Bolyai.
            </p>
          </div>
        </div>
      </section>

      {/* Step by Step Process */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <Badge className="mb-4 bg-indigo-100 text-indigo-800 hover:bg-indigo-200 py-1 px-3 text-sm font-medium rounded-full">
              Proces simplu
            </Badge>
            <h2 className="text-4xl font-bold mb-6">Pașii tăi spre succes</h2>
            <p className="text-xl text-gray-600">
              Urmează acești pași simpli pentru a-ți maximiza șansele de reușită la examenul de admitere.
            </p>
          </div>

          <div className="relative">
            <div className="absolute top-0 bottom-0 left-1/2 w-0.5 bg-gray-200 -translate-x-1/2 hidden md:block"></div>

            <div className="space-y-24">
              {/* Step 1 */}
              <div className="relative">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-12 h-12 rounded-full bg-gradient-to-r from-indigo-600 to-violet-600 flex items-center justify-center text-white font-bold z-10 hidden md:flex">
                  1
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center">
                  <div className="md:text-right order-2 md:order-1">
                    <Badge className="mb-4 bg-indigo-100 text-indigo-800 hover:bg-indigo-200 py-1 px-3 text-sm font-medium rounded-full">
                      Pasul 1
                    </Badge>
                    <h3 className="text-2xl font-bold mb-4">Creează-ți contul</h3>
                    <p className="text-lg text-gray-600 mb-6">
                      Înregistrează-te gratuit în câteva secunde. Tot ce ai nevoie este o adresă de email și o parolă.
                      Nu este necesară verificarea cardului de credit.
                    </p>
                    <ul className="space-y-3 md:ml-auto md:mr-0">
                      <li className="flex items-start md:justify-end">
                        <span className="text-gray-700 md:order-2">Înregistrare rapidă în mai puțin de 1 minut</span>
                        <div className="mt-1 bg-green-100 rounded-full p-1 mr-3 md:mr-0 md:ml-3 md:order-1">
                          <CheckCircle className="h-4 w-4 text-green-600" />
                        </div>
                      </li>
                      <li className="flex items-start md:justify-end">
                        <span className="text-gray-700 md:order-2">Acces imediat la funcționalitățile de bază</span>
                        <div className="mt-1 bg-green-100 rounded-full p-1 mr-3 md:mr-0 md:ml-3 md:order-1">
                          <CheckCircle className="h-4 w-4 text-green-600" />
                        </div>
                      </li>
                      <li className="flex items-start md:justify-end">
                        <span className="text-gray-700 md:order-2">Fără obligații sau costuri ascunse</span>
                        <div className="mt-1 bg-green-100 rounded-full p-1 mr-3 md:mr-0 md:ml-3 md:order-1">
                          <CheckCircle className="h-4 w-4 text-green-600" />
                        </div>
                      </li>
                    </ul>
                  </div>
                  <div className="relative order-1 md:order-2">
                    <div className="absolute -inset-4 bg-gradient-to-r from-indigo-600 to-fuchsia-600 rounded-2xl blur-xl opacity-10"></div>
                    <div className="relative bg-white rounded-xl p-6 shadow-lg border border-gray-200">
                      <Image
                        src="/placeholder.svg?height=300&width=400"
                        alt="Creează cont"
                        width={400}
                        height={300}
                        className="rounded-lg"
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* Step 2 */}
              <div className="relative">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-12 h-12 rounded-full bg-gradient-to-r from-violet-600 to-fuchsia-600 flex items-center justify-center text-white font-bold z-10 hidden md:flex">
                  2
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center">
                  <div className="relative">
                    <div className="absolute -inset-4 bg-gradient-to-r from-indigo-600 to-fuchsia-600 rounded-2xl blur-xl opacity-10"></div>
                    <div className="relative bg-white rounded-xl p-6 shadow-lg border border-gray-200">
                      <Image
                        src="/placeholder.svg?height=300&width=400"
                        alt="Alege materia"
                        width={400}
                        height={300}
                        className="rounded-lg"
                      />
                    </div>
                  </div>
                  <div>
                    <Badge className="mb-4 bg-violet-100 text-violet-800 hover:bg-violet-200 py-1 px-3 text-sm font-medium rounded-full">
                      Pasul 2
                    </Badge>
                    <h3 className="text-2xl font-bold mb-4">Alege materia și personalizează experiența</h3>
                    <p className="text-lg text-gray-600 mb-6">
                      Selectează Matematică sau Informatică și personalizează-ți traseul de învățare în funcție de
                      nevoile și obiectivele tale.
                    </p>
                    <ul className="space-y-3">
                      <li className="flex items-start">
                        <div className="mt-1 bg-green-100 rounded-full p-1 mr-3">
                          <CheckCircle className="h-4 w-4 text-green-600" />
                        </div>
                        <span className="text-gray-700">Conținut specific pentru fiecare materie</span>
                      </li>
                      <li className="flex items-start">
                        <div className="mt-1 bg-green-100 rounded-full p-1 mr-3">
                          <CheckCircle className="h-4 w-4 text-green-600" />
                        </div>
                        <span className="text-gray-700">Evaluare inițială pentru a determina nivelul tău</span>
                      </li>
                      <li className="flex items-start">
                        <div className="mt-1 bg-green-100 rounded-full p-1 mr-3">
                          <CheckCircle className="h-4 w-4 text-green-600" />
                        </div>
                        <span className="text-gray-700">Recomandări personalizate de studiu</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Step 3 */}
              <div className="relative">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-12 h-12 rounded-full bg-gradient-to-r from-fuchsia-600 to-pink-600 flex items-center justify-center text-white font-bold z-10 hidden md:flex">
                  3
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center">
                  <div className="md:text-right order-2 md:order-1">
                    <Badge className="mb-4 bg-fuchsia-100 text-fuchsia-800 hover:bg-fuchsia-200 py-1 px-3 text-sm font-medium rounded-full">
                      Pasul 3
                    </Badge>
                    <h3 className="text-2xl font-bold mb-4">Exersează și învață</h3>
                    <p className="text-lg text-gray-600 mb-6">
                      Rezolvă întrebări din examene anterioare cu ajutorul indiciilor AI atunci când ai nevoie. Învață
                      din greșeli și consolidează-ți cunoștințele.
                    </p>
                    <ul className="space-y-3 md:ml-auto md:mr-0">
                      <li className="flex items-start md:justify-end">
                        <span className="text-gray-700 md:order-2">Practică zilnică cu întrebări relevante</span>
                        <div className="mt-1 bg-green-100 rounded-full p-1 mr-3 md:mr-0 md:ml-3 md:order-1">
                          <CheckCircle className="h-4 w-4 text-green-600" />
                        </div>
                      </li>
                      <li className="flex items-start md:justify-end">
                        <span className="text-gray-700 md:order-2">Indicii AI când te blochezi</span>
                        <div className="mt-1 bg-green-100 rounded-full p-1 mr-3 md:mr-0 md:ml-3 md:order-1">
                          <CheckCircle className="h-4 w-4 text-green-600" />
                        </div>
                      </li>
                      <li className="flex items-start md:justify-end">
                        <span className="text-gray-700 md:order-2">Explicații detaliate pentru fiecare răspuns</span>
                        <div className="mt-1 bg-green-100 rounded-full p-1 mr-3 md:mr-0 md:ml-3 md:order-1">
                          <CheckCircle className="h-4 w-4 text-green-600" />
                        </div>
                      </li>
                    </ul>
                  </div>
                  <div className="relative order-1 md:order-2">
                    <div className="absolute -inset-4 bg-gradient-to-r from-indigo-600 to-fuchsia-600 rounded-2xl blur-xl opacity-10"></div>
                    <div className="relative bg-white rounded-xl p-6 shadow-lg border border-gray-200">
                      <Image
                        src="/placeholder.svg?height=300&width=400"
                        alt="Exersează și învață"
                        width={400}
                        height={300}
                        className="rounded-lg"
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* Step 4 */}
              <div className="relative">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-12 h-12 rounded-full bg-gradient-to-r from-pink-600 to-rose-600 flex items-center justify-center text-white font-bold z-10 hidden md:flex">
                  4
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center">
                  <div className="relative">
                    <div className="absolute -inset-4 bg-gradient-to-r from-indigo-600 to-fuchsia-600 rounded-2xl blur-xl opacity-10"></div>
                    <div className="relative bg-white rounded-xl p-6 shadow-lg border border-gray-200">
                      <Image
                        src="/placeholder.svg?height=300&width=400"
                        alt="Urmărește progresul"
                        width={400}
                        height={300}
                        className="rounded-lg"
                      />
                    </div>
                  </div>
                  <div>
                    <Badge className="mb-4 bg-pink-100 text-pink-800 hover:bg-pink-200 py-1 px-3 text-sm font-medium rounded-full">
                      Pasul 4
                    </Badge>
                    <h3 className="text-2xl font-bold mb-4">Urmărește-ți progresul</h3>
                    <p className="text-lg text-gray-600 mb-6">
                      Monitorizează-ți îmbunătățirea cu ajutorul statisticilor detaliate și concentrează-te pe zonele
                      care necesită mai multă atenție.
                    </p>
                    <ul className="space-y-3">
                      <li className="flex items-start">
                        <div className="mt-1 bg-green-100 rounded-full p-1 mr-3">
                          <CheckCircle className="h-4 w-4 text-green-600" />
                        </div>
                        <span className="text-gray-700">Statistici detaliate pe categorii</span>
                      </li>
                      <li className="flex items-start">
                        <div className="mt-1 bg-green-100 rounded-full p-1 mr-3">
                          <CheckCircle className="h-4 w-4 text-green-600" />
                        </div>
                        <span className="text-gray-700">Identificarea automată a punctelor slabe</span>
                      </li>
                      <li className="flex items-start">
                        <div className="mt-1 bg-green-100 rounded-full p-1 mr-3">
                          <CheckCircle className="h-4 w-4 text-green-600" />
                        </div>
                        <span className="text-gray-700">Recomandări personalizate pentru îmbunătățire</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Step 5 */}
              <div className="relative">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-12 h-12 rounded-full bg-gradient-to-r from-indigo-600 to-violet-600 flex items-center justify-center text-white font-bold z-10 hidden md:flex">
                  5
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center">
                  <div className="md:text-right order-2 md:order-1">
                    <Badge className="mb-4 bg-indigo-100 text-indigo-800 hover:bg-indigo-200 py-1 px-3 text-sm font-medium rounded-full">
                      Pasul 5
                    </Badge>
                    <h3 className="text-2xl font-bold mb-4">Simulează examenul real</h3>
                    <p className="text-lg text-gray-600 mb-6">
                      Pregătește-te pentru ziua cea mare cu simulări de examen care reflectă formatul și dificultatea
                      examenului real.
                    </p>
                    <ul className="space-y-3 md:ml-auto md:mr-0">
                      <li className="flex items-start md:justify-end">
                        <span className="text-gray-700 md:order-2">Simulări complete de examen</span>
                        <div className="mt-1 bg-green-100 rounded-full p-1 mr-3 md:mr-0 md:ml-3 md:order-1">
                          <CheckCircle className="h-4 w-4 text-green-600" />
                        </div>
                      </li>
                      <li className="flex items-start md:justify-end">
                        <span className="text-gray-700 md:order-2">Cronometrare și condiții reale</span>
                        <div className="mt-1 bg-green-100 rounded-full p-1 mr-3 md:mr-0 md:ml-3 md:order-1">
                          <CheckCircle className="h-4 w-4 text-green-600" />
                        </div>
                      </li>
                      <li className="flex items-start md:justify-end">
                        <span className="text-gray-700 md:order-2">Feedback detaliat după fiecare simulare</span>
                        <div className="mt-1 bg-green-100 rounded-full p-1 mr-3 md:mr-0 md:ml-3 md:order-1">
                          <CheckCircle className="h-4 w-4 text-green-600" />
                        </div>
                      </li>
                    </ul>
                  </div>
                  <div className="relative order-1 md:order-2">
                    <div className="absolute -inset-4 bg-gradient-to-r from-indigo-600 to-fuchsia-600 rounded-2xl blur-xl opacity-10"></div>
                    <div className="relative bg-white rounded-xl p-6 shadow-lg border border-gray-200">
                      <Image
                        src="/placeholder.svg?height=300&width=400"
                        alt="Simulează examenul"
                        width={400}
                        height={300}
                        className="rounded-lg"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Learning Methodology */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <Badge className="mb-4 bg-indigo-100 text-indigo-800 hover:bg-indigo-200 py-1 px-3 text-sm font-medium rounded-full">
              Metodologia noastră
            </Badge>
            <h2 className="text-4xl font-bold mb-6">Bazat pe știința învățării</h2>
            <p className="text-xl text-gray-600">
              GrileUBB folosește tehnici dovedite științific pentru a maximiza retenția și înțelegerea.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mb-6">
                <Zap className="h-6 w-6 text-indigo-600" />
              </div>
              <h3 className="text-xl font-bold mb-3">Repetiție spațiată</h3>
              <p className="text-gray-600">
                Algoritmii noștri programează revizuirea materialului la intervale optimizate pentru a maximiza retenția
                pe termen lung.
              </p>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-violet-100 rounded-lg flex items-center justify-center mb-6">
                <Brain className="h-6 w-6 text-violet-600" />
              </div>
              <h3 className="text-xl font-bold mb-3">Învățare activă</h3>
              <p className="text-gray-600">
                Prin rezolvarea de probleme și testarea activă, consolidezi cunoștințele mult mai eficient decât prin
                simpla citire sau memorare.
              </p>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-fuchsia-100 rounded-lg flex items-center justify-center mb-6">
                <Lightbulb className="h-6 w-6 text-fuchsia-600" />
              </div>
              <h3 className="text-xl font-bold mb-3">Feedback imediat</h3>
              <p className="text-gray-600">
                Primești feedback instant pentru fiecare răspuns, ceea ce îți permite să corectezi greșelile și să
                consolidezi înțelegerea corectă.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <Badge className="mb-4 bg-indigo-100 text-indigo-800 hover:bg-indigo-200 py-1 px-3 text-sm font-medium rounded-full">
              Povești de succes
            </Badge>
            <h2 className="text-4xl font-bold mb-6">Cum au reușit alți studenți</h2>
            <p className="text-xl text-gray-600">
              Descoperă cum GrileUBB a ajutat studenții să-și îndeplinească visul de a intra la UBB.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-indigo-100 rounded-full overflow-hidden mr-4">
                  <Image
                    src="/placeholder.svg?height=64&width=64"
                    alt="Student"
                    width={64}
                    height={64}
                    className="object-cover"
                  />
                </div>
                <div>
                  <p className="font-bold text-lg">Andrei M.</p>
                  <p className="text-gray-500">Admis la Informatică, 2023</p>
                </div>
              </div>
              <p className="text-gray-700 italic mb-6">
                "Am început să folosesc GrileUBB cu 3 luni înainte de examen. Indiciile AI au fost salvatoare când m-am
                blocat la probleme. Am reușit să intru la Informatică cu o notă de 9.80!"
              </p>
              <div className="flex items-center">
                <div className="text-indigo-600 font-medium">Rezultat: 9.80/10</div>
                <div className="ml-auto flex space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <div key={i} className="w-2 h-8 bg-indigo-600 rounded-full opacity-80"></div>
                  ))}
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-violet-100 rounded-full overflow-hidden mr-4">
                  <Image
                    src="/placeholder.svg?height=64&width=64"
                    alt="Student"
                    width={64}
                    height={64}
                    className="object-cover"
                  />
                </div>
                <div>
                  <p className="font-bold text-lg">Maria D.</p>
                  <p className="text-gray-500">Admisă la Matematică, 2023</p>
                </div>
              </div>
              <p className="text-gray-700 italic mb-6">
                "Simulările de examen m-au ajutat enorm să-mi gestionez timpul și anxietatea. În ziua examenului, m-am
                simțit pregătită și încrezătoare. GrileUBB a făcut diferența pentru mine!"
              </p>
              <div className="flex items-center">
                <div className="text-indigo-600 font-medium">Rezultat: 9.65/10</div>
                <div className="ml-auto flex space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <div key={i} className="w-2 h-8 bg-indigo-600 rounded-full opacity-80"></div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <Badge className="mb-4 bg-indigo-100 text-indigo-800 hover:bg-indigo-200 py-1 px-3 text-sm font-medium rounded-full">
              Întrebări frecvente
            </Badge>
            <h2 className="text-4xl font-bold mb-6">Ai întrebări? Avem răspunsuri</h2>
            <p className="text-xl text-gray-600">
              Iată răspunsurile la cele mai frecvente întrebări despre cum funcționează GrileUBB.
            </p>
          </div>

          <div className="max-w-3xl mx-auto space-y-6">
            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
              <h3 className="text-xl font-bold mb-3">Cât timp ar trebui să aloc zilnic pentru pregătire?</h3>
              <p className="text-gray-600">
                Recomandăm minim 30-60 de minute zilnic pentru rezultate optime. Consistența este mai importantă decât
                sesiunile lungi și neregulate. Platforma noastră te ajută să-ți organizezi timpul eficient.
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
              <h3 className="text-xl font-bold mb-3">Cu cât timp înainte de examen ar trebui să încep?</h3>
              <p className="text-gray-600">
                Ideal, începe cu 3-6 luni înainte de examen pentru rezultate optime. Totuși, chiar și 1-2 luni de
                pregătire intensivă cu GrileUBB pot face o diferență semnificativă.
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
              <h3 className="text-xl font-bold mb-3">Cum mă ajută indiciile AI să învăț mai bine?</h3>
              <p className="text-gray-600">
                Indiciile AI sunt concepute pentru a te ghida spre soluție fără a-ți oferi răspunsul direct. Acest
                proces de descoperire ghidată consolidează înțelegerea și retenția pe termen lung, fiind superior
                simplei memorări a răspunsurilor.
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
              <h3 className="text-xl font-bold mb-3">Pot accesa platforma de pe dispozitivul mobil?</h3>
              <p className="text-gray-600">
                Da, GrileUBB este complet responsiv și funcționează perfect pe orice dispozitiv: desktop, tabletă sau
                smartphone. Avem și o aplicație dedicată pentru iOS și Android pentru o experiență optimizată.
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
              <h3 className="text-xl font-bold mb-3">Întrebările sunt actualizate în funcție de examenele recente?</h3>
              <p className="text-gray-600">
                Absolut! Actualizăm constant baza noastră de întrebări cu cele mai recente examene și ajustăm conținutul
                în funcție de feedback-ul studenților și schimbările din programa de examen.
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
              <h2 className="text-4xl md:text-5xl font-bold mb-6">Gata să începi călătoria?</h2>
              <p className="text-xl mb-10 max-w-2xl mx-auto">
                Înregistrează-te gratuit și fă primul pas spre succesul la examenul de admitere UBB.
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

