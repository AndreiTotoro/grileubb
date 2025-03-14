import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import {
  ArrowRight,
  MessageSquare,
  ThumbsUp,
  Users,
  Calendar,
  CheckCircle,
  Lightbulb,
  Award,
  Heart,
} from "lucide-react"

export default function CommunityPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="pt-32 pb-20 md:pt-40 md:pb-32 bg-gradient-to-b from-indigo-50 to-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <Badge className="mb-6 bg-indigo-100 text-indigo-800 hover:bg-indigo-200 py-1.5 px-4 text-sm font-medium rounded-full">
              Comunitate
            </Badge>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-8 bg-gradient-to-r from-indigo-600 via-violet-600 to-fuchsia-600 bg-clip-text text-transparent">
              Învață și crește alături de colegi
            </h1>
            <p className="text-xl text-gray-600 mb-10 max-w-3xl mx-auto">
              Alătură-te comunității GrileUBB pentru a împărtăși cunoștințe, a pune întrebări și a te conecta cu alți
              studenți care se pregătesc pentru examenul de admitere.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link href="/register">
                <Button className="bg-gradient-to-r from-indigo-600 to-violet-600 hover:from-indigo-700 hover:to-violet-700 text-white text-lg py-6 px-8 rounded-xl font-medium">
                  Alătură-te comunității
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Community Stats */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <p className="text-4xl font-bold bg-gradient-to-r from-indigo-600 to-violet-600 bg-clip-text text-transparent mb-2">
                5,234+
              </p>
              <p className="text-gray-600 font-medium">Membri activi</p>
            </div>
            <div>
              <p className="text-4xl font-bold bg-gradient-to-r from-violet-600 to-fuchsia-600 bg-clip-text text-transparent mb-2">
                1,876+
              </p>
              <p className="text-gray-600 font-medium">Discuții</p>
            </div>
            <div>
              <p className="text-4xl font-bold bg-gradient-to-r from-fuchsia-600 to-pink-600 bg-clip-text text-transparent mb-2">
                12,450+
              </p>
              <p className="text-gray-600 font-medium">Răspunsuri</p>
            </div>
            <div>
              <p className="text-4xl font-bold bg-gradient-to-r from-pink-600 to-rose-600 bg-clip-text text-transparent mb-2">
                98%
              </p>
              <p className="text-gray-600 font-medium">Întrebări rezolvate</p>
            </div>
          </div>
        </div>
      </section>

      {/* Community Features */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <Badge className="mb-4 bg-indigo-100 text-indigo-800 hover:bg-indigo-200 py-1 px-3 text-sm font-medium rounded-full">
              Funcționalități
            </Badge>
            <h2 className="text-4xl font-bold mb-6">Ce oferă comunitatea noastră</h2>
            <p className="text-xl text-gray-600">
              Descoperă toate modalitățile prin care comunitatea GrileUBB te poate ajuta să reușești.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mb-6">
                <MessageSquare className="h-6 w-6 text-indigo-600" />
              </div>
              <h3 className="text-xl font-bold mb-3">Forum de discuții</h3>
              <p className="text-gray-600">
                Pune întrebări, primește răspunsuri și participă la discuții despre subiecte relevante pentru examenul
                de admitere.
              </p>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-violet-100 rounded-lg flex items-center justify-center mb-6">
                <Users className="h-6 w-6 text-violet-600" />
              </div>
              <h3 className="text-xl font-bold mb-3">Grupuri de studiu</h3>
              <p className="text-gray-600">
                Formează sau alătură-te grupurilor de studiu pentru a învăța împreună cu alți studenți care au aceleași
                obiective.
              </p>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-fuchsia-100 rounded-lg flex items-center justify-center mb-6">
                <Lightbulb className="h-6 w-6 text-fuchsia-600" />
              </div>
              <h3 className="text-xl font-bold mb-3">Resurse partajate</h3>
              <p className="text-gray-600">
                Accesează și contribuie la o bibliotecă de resurse create de comunitate, inclusiv notițe, rezumate și
                sfaturi.
              </p>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-pink-100 rounded-lg flex items-center justify-center mb-6">
                <Calendar className="h-6 w-6 text-pink-600" />
              </div>
              <h3 className="text-xl font-bold mb-3">Evenimente virtuale</h3>
              <p className="text-gray-600">
                Participă la sesiuni de întrebări și răspunsuri, webinarii și alte evenimente online organizate de
                comunitate.
              </p>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-rose-100 rounded-lg flex items-center justify-center mb-6">
                <Award className="h-6 w-6 text-rose-600" />
              </div>
              <h3 className="text-xl font-bold mb-3">Sistem de reputație</h3>
              <p className="text-gray-600">
                Câștigă puncte și insigne pentru contribuțiile tale valoroase și ajută-i pe alții să identifice experții
                în diferite domenii.
              </p>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mb-6">
                <Heart className="h-6 w-6 text-indigo-600" />
              </div>
              <h3 className="text-xl font-bold mb-3">Suport motivațional</h3>
              <p className="text-gray-600">
                Găsește încurajare și motivație într-o comunitate care înțelege provocările pregătirii pentru examen.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Recent Discussions */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <Badge className="mb-4 bg-indigo-100 text-indigo-800 hover:bg-indigo-200 py-1 px-3 text-sm font-medium rounded-full">
              Discuții recente
            </Badge>
            <h2 className="text-4xl font-bold mb-6">Ce se discută în comunitate</h2>
            <p className="text-xl text-gray-600">
              Iată câteva dintre cele mai active discuții din comunitatea noastră.
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-6">
            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <div className="flex items-start">
                <div className="w-10 h-10 bg-indigo-100 rounded-full overflow-hidden mr-4 flex-shrink-0">
                  <Image
                    src="/placeholder.svg?height=40&width=40"
                    alt="User"
                    width={40}
                    height={40}
                    className="object-cover"
                  />
                </div>
                <div className="flex-1">
                  <div className="flex items-center mb-1">
                    <p className="font-bold mr-2">Alex N.</p>
                    <p className="text-gray-500 text-sm">acum 2 ore</p>
                  </div>
                  <p className="font-medium mb-2">Ajutor cu problema de combinatorică din examenul 2022</p>
                  <p className="text-gray-700 mb-4">
                    Am dificultăți cu întrebarea 7 din examenul de matematică din 2022. Este vorba despre combinatorică.
                    Poate cineva să explice cum se abordează?
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <Badge variant="outline" className="bg-gray-100">
                      matematică
                    </Badge>
                    <Badge variant="outline" className="bg-gray-100">
                      combinatorică
                    </Badge>
                    <Badge variant="outline" className="bg-gray-100">
                      examen 2022
                    </Badge>
                  </div>
                  <div className="flex items-center text-sm text-gray-500">
                    <MessageSquare className="h-4 w-4 mr-1" />
                    <span className="mr-4">12 răspunsuri</span>
                    <ThumbsUp className="h-4 w-4 mr-1" />
                    <span>5 aprecieri</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <div className="flex items-start">
                <div className="w-10 h-10 bg-violet-100 rounded-full overflow-hidden mr-4 flex-shrink-0">
                  <Image
                    src="/placeholder.svg?height=40&width=40"
                    alt="User"
                    width={40}
                    height={40}
                    className="object-cover"
                  />
                </div>
                <div className="flex-1">
                  <div className="flex items-center mb-1">
                    <p className="font-bold mr-2">Elena M.</p>
                    <p className="text-gray-500 text-sm">acum 1 zi</p>
                  </div>
                  <p className="font-medium mb-2">Grup de studiu pentru informatică</p>
                  <p className="text-gray-700 mb-4">
                    Caut colegi pentru un grup de studiu pentru examenul de informatică. Putem să ne întâlnim online de
                    două ori pe săptămână. Cine este interesat?
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <Badge variant="outline" className="bg-gray-100">
                      informatică
                    </Badge>
                    <Badge variant="outline" className="bg-gray-100">
                      grup de studiu
                    </Badge>
                    <Badge variant="outline" className="bg-gray-100">
                      online
                    </Badge>
                  </div>
                  <div className="flex items-center text-sm text-gray-500">
                    <MessageSquare className="h-4 w-4 mr-1" />
                    <span className="mr-4">8 răspunsuri</span>
                    <ThumbsUp className="h-4 w-4 mr-1" />
                    <span>15 aprecieri</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <div className="flex items-start">
                <div className="w-10 h-10 bg-fuchsia-100 rounded-full overflow-hidden mr-4 flex-shrink-0">
                  <Image
                    src="/placeholder.svg?height=40&width=40"
                    alt="User"
                    width={40}
                    height={40}
                    className="object-cover"
                  />
                </div>
                <div className="flex-1">
                  <div className="flex items-center mb-1">
                    <p className="font-bold mr-2">Radu C.</p>
                    <p className="text-gray-500 text-sm">acum 3 zile</p>
                  </div>
                  <p className="font-medium mb-2">Sfaturi pentru gestionarea timpului în examen</p>
                  <p className="text-gray-700 mb-4">
                    Mereu rămân fără timp la testele de practică. Aveți sfaturi despre cum să gestionez mai bine timpul
                    în timpul examenului? Cât timp ar trebui să aloc pentru fiecare întrebare?
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <Badge variant="outline" className="bg-gray-100">
                      sfaturi
                    </Badge>
                    <Badge variant="outline" className="bg-gray-100">
                      gestionarea timpului
                    </Badge>
                    <Badge variant="outline" className="bg-gray-100">
                      examen
                    </Badge>
                  </div>
                  <div className="flex items-center text-sm text-gray-500">
                    <MessageSquare className="h-4 w-4 mr-1" />
                    <span className="mr-4">24 răspunsuri</span>
                    <ThumbsUp className="h-4 w-4 mr-1" />
                    <span>32 aprecieri</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center mt-10">
            <Link href="/register">
              <Button className="bg-gradient-to-r from-indigo-600 to-violet-600 hover:from-indigo-700 hover:to-violet-700 text-white font-medium">
                Vezi toate discuțiile
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Community Guidelines */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <Badge className="mb-4 bg-indigo-100 text-indigo-800 hover:bg-indigo-200 py-1 px-3 text-sm font-medium rounded-full">
              Reguli
            </Badge>
            <h2 className="text-4xl font-bold mb-6">Regulile comunității noastre</h2>
            <p className="text-xl text-gray-600">
              Pentru a menține un mediu pozitiv și constructiv, te rugăm să respecți aceste reguli simple.
            </p>
          </div>

          <div className="max-w-3xl mx-auto space-y-6">
            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
              <div className="flex items-start">
                <div className="mt-1 bg-green-100 rounded-full p-1 mr-3">
                  <CheckCircle className="h-5 w-5 text-green-600" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Respect reciproc</h3>
                  <p className="text-gray-600">
                    Tratează toți membrii comunității cu respect și bunăvoință. Nu sunt tolerate atacurile personale,
                    hărțuirea sau comportamentul ofensator.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
              <div className="flex items-start">
                <div className="mt-1 bg-green-100 rounded-full p-1 mr-3">
                  <CheckCircle className="h-5 w-5 text-green-600" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Contribuții valoroase</h3>
                  <p className="text-gray-600">
                    Străduiește-te să adaugi valoare în discuții. Întrebările și răspunsurile ar trebui să fie clare,
                    relevante și bine formulate.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
              <div className="flex items-start">
                <div className="mt-1 bg-green-100 rounded-full p-1 mr-3">
                  <CheckCircle className="h-5 w-5 text-green-600" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Onestitate academică</h3>
                  <p className="text-gray-600">
                    Comunitatea încurajează învățarea și înțelegerea, nu copiatul. Nu solicita sau oferi răspunsuri
                    pentru teme sau examene active.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
              <div className="flex items-start">
                <div className="mt-1 bg-green-100 rounded-full p-1 mr-3">
                  <CheckCircle className="h-5 w-5 text-green-600" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Confidențialitate</h3>
                  <p className="text-gray-600">
                    Respectă confidențialitatea celorlalți membri. Nu distribui informații personale fără permisiune
                    explicită.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <Badge className="mb-4 bg-indigo-100 text-indigo-800 hover:bg-indigo-200 py-1 px-3 text-sm font-medium rounded-full">
              Testimoniale
            </Badge>
            <h2 className="text-4xl font-bold mb-6">Ce spun membrii comunității</h2>
            <p className="text-xl text-gray-600">
              Descoperă cum comunitatea GrileUBB a ajutat alți studenți în pregătirea lor.
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
                </div>
              </div>
              <p className="text-gray-700 italic">
                "Comunitatea GrileUBB a fost esențială pentru succesul meu. Când m-am blocat la probleme dificile, am
                primit ajutor rapid și explicații clare de la colegi mai experimentați."
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
                </div>
              </div>
              <p className="text-gray-700 italic">
                "Grupul de studiu pe care l-am format prin intermediul platformei a fost incredibil de motivant. Ne-am
                împins reciproc să ne depășim limitele și am învățat mult mai eficient împreună."
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
                </div>
              </div>
              <p className="text-gray-700 italic">
                "Resursele partajate de comunitate au fost o adevărată comoară. Am găsit notițe, rezumate și sfaturi
                care m-au ajutat să înțeleg concepte complexe mult mai ușor."
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
              <h2 className="text-4xl md:text-5xl font-bold mb-6">Gata să te alături comunității?</h2>
              <p className="text-xl mb-10 max-w-2xl mx-auto">
                Înregistrează-te gratuit și conectează-te cu alți studenți care se pregătesc pentru examenul de admitere
                la UBB.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Link href="/register">
                  <Button className="bg-white text-indigo-600 hover:bg-gray-100 text-lg py-6 px-8 rounded-xl font-medium">
                    Alătură-te acum
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
              </div>
              <p className="mt-6 text-white/80">Împreună suntem mai puternici!</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

