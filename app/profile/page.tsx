"use client"

import Image from "next/image"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { User, Mail, Calendar, BookOpen, FlameIcon as Fire, Trophy, Edit } from "lucide-react"
import { mockUserProfile, mockUserProgress } from "@/data/mock-data"

export default function Profile() {
  const { name, email, avatar, joinedDate, subject, streak, level, badges } = mockUserProfile
  const { questionsAttempted, questionsCorrect } = mockUserProgress

  const accuracy = questionsAttempted > 0 ? Math.round((questionsCorrect / questionsAttempted) * 100) : 0

  // Calculate XP and next level
  const currentLevelXP = level * 100
  const nextLevelXP = (level + 1) * 100
  const currentXP = currentLevelXP + Math.floor(Math.random() * (nextLevelXP - currentLevelXP))
  const xpProgress = ((currentXP - currentLevelXP) / (nextLevelXP - currentLevelXP)) * 100

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2">Profilul Meu</h1>
        <p className="text-gray-600">Gestionează-ți contul și vezi-ți realizările</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        <div className="lg:col-span-1">
          <Card>
            <CardContent className="pt-6">
              <div className="flex flex-col items-center">
                <div className="relative mb-4">
                  <div className="w-24 h-24 rounded-full overflow-hidden">
                    <Image
                      src={avatar || "/placeholder.svg"}
                      alt={name}
                      width={96}
                      height={96}
                      className="object-cover"
                    />
                  </div>
                  <Button
                    size="icon"
                    variant="outline"
                    className="absolute bottom-0 right-0 rounded-full h-8 w-8 bg-white"
                  >
                    <Edit className="h-4 w-4" />
                  </Button>
                </div>
                <h2 className="text-xl font-bold mb-1">{name}</h2>
                <p className="text-gray-500 mb-4">Student</p>
                <div className="w-full space-y-4">
                  <div className="flex items-center">
                    <User className="h-5 w-5 text-gray-500 mr-3" />
                    <div>
                      <p className="text-sm text-gray-500">Nume</p>
                      <p className="font-medium">{name}</p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <Mail className="h-5 w-5 text-gray-500 mr-3" />
                    <div>
                      <p className="text-sm text-gray-500">Email</p>
                      <p className="font-medium">{email}</p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <Calendar className="h-5 w-5 text-gray-500 mr-3" />
                    <div>
                      <p className="text-sm text-gray-500">Membru din</p>
                      <p className="font-medium">{new Date(joinedDate).toLocaleDateString("ro-RO")}</p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <BookOpen className="h-5 w-5 text-gray-500 mr-3" />
                    <div>
                      <p className="text-sm text-gray-500">Materie Preferată</p>
                      <p className="font-medium">{subject === "math" ? "Matematică" : "Informatică"}</p>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
            <CardFooter className="flex justify-center pb-6">
              <Button variant="outline">Editează Profilul</Button>
            </CardFooter>
          </Card>
        </div>

        <div className="lg:col-span-3">
          <Tabs defaultValue="stats" className="mb-8">
            <TabsList className="grid grid-cols-3 mb-8">
              <TabsTrigger value="stats">Statistici</TabsTrigger>
              <TabsTrigger value="achievements">Realizări</TabsTrigger>
              <TabsTrigger value="settings">Setări</TabsTrigger>
            </TabsList>

            <TabsContent value="stats" className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-lg font-medium">Nivel</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <p className="text-3xl font-bold">Nivel {level}</p>
                        <Trophy className="h-8 w-8 text-yellow-500" />
                      </div>
                      <div className="space-y-1">
                        <div className="flex justify-between text-sm">
                          <span>{currentXP} XP</span>
                          <span>{nextLevelXP} XP</span>
                        </div>
                        <Progress value={xpProgress} className="h-2" />
                      </div>
                      <p className="text-sm text-gray-500">
                        Încă {nextLevelXP - currentXP} XP până la nivelul {level + 1}
                      </p>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-lg font-medium">Streak</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <p className="text-3xl font-bold">{streak} zile</p>
                        <Fire className="h-8 w-8 text-orange-500" />
                      </div>
                      <p className="text-sm text-gray-500">
                        Continuă să exersezi zilnic pentru a-ți menține streak-ul!
                      </p>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-lg font-medium">Precizie</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      <p className="text-3xl font-bold">{accuracy}%</p>
                      <Progress value={accuracy} className="h-2" />
                      <p className="text-sm text-gray-500">
                        {questionsCorrect} corecte din {questionsAttempted} întrebări
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </div>

              <Card>
                <CardHeader>
                  <CardTitle>Activitate Recentă</CardTitle>
                  <CardDescription>Ultimele tale sesiuni de practică</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {mockUserProgress.recentActivity.map((activity, index) => (
                      <div key={index} className="flex items-center p-3 bg-gray-50 rounded-lg">
                        <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center mr-4">
                          <Calendar className="h-5 w-5 text-gray-500" />
                        </div>
                        <div>
                          <p className="font-medium">{new Date(activity.date).toLocaleDateString("ro-RO")}</p>
                          <p className="text-sm text-gray-500">
                            Ai rezolvat {activity.questionsCorrect} din {activity.questionsAttempted} întrebări de{" "}
                            {activity.subject === "math" ? "Matematică" : "Informatică"}
                          </p>
                        </div>
                        <div className="ml-auto">
                          <Badge
                            className={
                              activity.questionsCorrect === activity.questionsAttempted
                                ? "bg-green-100 text-green-800"
                                : "bg-blue-100 text-blue-800"
                            }
                          >
                            {Math.round((activity.questionsCorrect / activity.questionsAttempted) * 100)}% precizie
                          </Badge>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="achievements" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Insigne</CardTitle>
                  <CardDescription>Realizările tale până acum</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {badges.map((badge) => (
                      <div key={badge.id} className="flex items-center p-4 bg-gray-50 rounded-lg">
                        <div className="text-3xl mr-4">{badge.icon}</div>
                        <div>
                          <p className="font-medium">{badge.name}</p>
                          <p className="text-sm text-gray-500">{badge.description}</p>
                        </div>
                      </div>
                    ))}

                    {/* Locked badges */}
                    <div className="flex items-center p-4 bg-gray-50 rounded-lg opacity-50">
                      <div className="text-3xl mr-4">🏆</div>
                      <div>
                        <p className="font-medium">Expert în Algoritmi</p>
                        <p className="text-sm text-gray-500">Rezolvă 30 de probleme de algoritmi</p>
                      </div>
                    </div>

                    <div className="flex items-center p-4 bg-gray-50 rounded-lg opacity-50">
                      <div className="text-3xl mr-4">⚡</div>
                      <div>
                        <p className="font-medium">Viteza Fulgerului</p>
                        <p className="text-sm text-gray-500">Rezolvă 10 probleme în mai puțin de 5 minute</p>
                      </div>
                    </div>

                    <div className="flex items-center p-4 bg-gray-50 rounded-lg opacity-50">
                      <div className="text-3xl mr-4">🔥</div>
                      <div>
                        <p className="font-medium">Streak de 30 zile</p>
                        <p className="text-sm text-gray-500">Practică 30 de zile consecutiv</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="settings" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Setări Cont</CardTitle>
                  <CardDescription>Gestionează preferințele contului tău</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                      <div>
                        <p className="font-medium">Notificări Email</p>
                        <p className="text-sm text-gray-500">Primește actualizări și sfaturi prin email</p>
                      </div>
                      <div className="flex items-center h-6 w-11 bg-pink-500 rounded-full p-1 cursor-pointer">
                        <div className="h-4 w-4 bg-white rounded-full transform translate-x-5"></div>
                      </div>
                    </div>

                    <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                      <div>
                        <p className="font-medium">Memento Zilnic</p>
                        <p className="text-sm text-gray-500">Primește un memento zilnic pentru a practica</p>
                      </div>
                      <div className="flex items-center h-6 w-11 bg-pink-500 rounded-full p-1 cursor-pointer">
                        <div className="h-4 w-4 bg-white rounded-full transform translate-x-5"></div>
                      </div>
                    </div>

                    <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                      <div>
                        <p className="font-medium">Mod Întunecat</p>
                        <p className="text-sm text-gray-500">Schimbă aspectul aplicației</p>
                      </div>
                      <div className="flex items-center h-6 w-11 bg-gray-300 rounded-full p-1 cursor-pointer">
                        <div className="h-4 w-4 bg-white rounded-full"></div>
                      </div>
                    </div>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button className="bg-pink-500 hover:bg-pink-600">Salvează Setările</Button>
                </CardFooter>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Schimbă Parola</CardTitle>
                  <CardDescription>Actualizează-ți parola pentru securitate</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Parola Actuală</label>
                      <input type="password" className="w-full p-2 border border-gray-300 rounded-md" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Parola Nouă</label>
                      <input type="password" className="w-full p-2 border border-gray-300 rounded-md" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Confirmă Parola Nouă</label>
                      <input type="password" className="w-full p-2 border border-gray-300 rounded-md" />
                    </div>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button className="bg-pink-500 hover:bg-pink-600">Schimbă Parola</Button>
                </CardFooter>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  )
}

