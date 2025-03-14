"use client"

import { useState } from "react"
import Link from "next/link"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Progress } from "@/components/ui/progress"
import { BookOpen, BarChart2, Users, Trophy, ArrowRight, Calendar, FlameIcon as Fire } from "lucide-react"
import { mockUserProgress, mockUserProfile } from "@/data/mock-data"

export default function Dashboard() {
  const [activeTab, setActiveTab] = useState("overview")
  const { questionsAttempted, questionsCorrect, subjectProgress, recentActivity } = mockUserProgress
  const { name, streak, level, badges } = mockUserProfile

  const accuracy = questionsAttempted > 0 ? Math.round((questionsCorrect / questionsAttempted) * 100) : 0

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
        <div>
          <h1 className="text-3xl font-bold mb-2">Bună, {name}!</h1>
          <p className="text-gray-600">Continuă să exersezi pentru examenul de admitere</p>
        </div>
        <div className="mt-4 md:mt-0">
          <Link href="/practice">
            <Button className="bg-gradient-to-r from-indigo-600 to-violet-600 hover:from-indigo-700 hover:to-violet-700 text-white">
              Continuă Practica
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <Card className="overflow-hidden border-gray-200 hover:shadow-md transition-all">
          <CardHeader className="pb-2">
            <CardTitle className="text-lg font-medium">Streak Curent</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center">
              <Fire className="h-8 w-8 text-amber-500 mr-3" />
              <div>
                <p className="text-3xl font-bold">{streak} zile</p>
                <p className="text-sm text-gray-500">Continuă să exersezi zilnic!</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="overflow-hidden border-gray-200 hover:shadow-md transition-all">
          <CardHeader className="pb-2">
            <CardTitle className="text-lg font-medium">Nivel</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center">
              <Trophy className="h-8 w-8 text-indigo-500 mr-3" />
              <div>
                <p className="text-3xl font-bold">Nivel {level}</p>
                <p className="text-sm text-gray-500">Rezolvă mai multe pentru a avansa!</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="overflow-hidden border-gray-200 hover:shadow-md transition-all">
          <CardHeader className="pb-2">
            <CardTitle className="text-lg font-medium">Precizie Generală</CardTitle>
          </CardHeader>
          <CardContent>
            <div>
              <p className="text-3xl font-bold mb-2">{accuracy}%</p>
              <Progress value={accuracy} className="h-2 bg-gray-100">
                <div
                  className="h-full bg-gradient-to-r from-indigo-600 to-violet-600 rounded-full"
                  style={{ width: `${accuracy}%` }}
                />
              </Progress>
              <p className="text-sm text-gray-500 mt-2">
                {questionsCorrect} corecte din {questionsAttempted} întrebări
              </p>
            </div>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="overview" className="mb-8" onValueChange={setActiveTab}>
        <TabsList className="grid grid-cols-3 mb-8">
          <TabsTrigger
            value="overview"
            className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-indigo-600 data-[state=active]:to-violet-600 data-[state=active]:text-white"
          >
            Privire de Ansamblu
          </TabsTrigger>
          <TabsTrigger
            value="math"
            className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-indigo-600 data-[state=active]:to-violet-600 data-[state=active]:text-white"
          >
            Matematică
          </TabsTrigger>
          <TabsTrigger
            value="informatics"
            className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-indigo-600 data-[state=active]:to-violet-600 data-[state=active]:text-white"
          >
            Informatică
          </TabsTrigger>
        </TabsList>

        <TabsContent value="overview" className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Activitate Recentă</CardTitle>
                <CardDescription>Ultimele 5 zile de practică</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {recentActivity.map((activity, index) => (
                    <div key={index} className="flex items-center">
                      <div className="w-10 h-10 rounded-full flex items-center justify-center">
                        <Calendar className="h-5 w-5 text-gray-500" />
                      </div>
                      <div className="ml-4">
                        <p className="font-medium">{new Date(activity.date).toLocaleDateString("ro-RO")}</p>
                        <p className="text-sm text-gray-500">
                          {activity.questionsCorrect} corecte din {activity.questionsAttempted} întrebări (
                          {activity.subject === "math" ? "Matematică" : "Informatică"})
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Insigne Obținute</CardTitle>
                <CardDescription>Realizările tale până acum</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 gap-4">
                  {badges.map((badge) => (
                    <div key={badge.id} className="flex items-center p-3 bg-gray-50 rounded-lg">
                      <div className="text-2xl mr-3">{badge.icon}</div>
                      <div>
                        <p className="font-medium">{badge.name}</p>
                        <p className="text-sm text-gray-500">{badge.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
              <CardFooter>
                <Link href="/profile" className="text-blue-500 text-sm hover:underline">
                  Vezi toate insignele
                </Link>
              </CardFooter>
            </Card>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Link href="/practice" className="block">
              <Card className="h-full hover:border-indigo-500 hover:shadow-md transition-all">
                <CardContent className="flex flex-col items-center justify-center p-6">
                  <BookOpen className="h-12 w-12 text-indigo-500 mb-4" />
                  <CardTitle className="text-center mb-2">Practică</CardTitle>
                  <p className="text-center text-gray-500">Exersează cu întrebări din examene anterioare</p>
                </CardContent>
              </Card>
            </Link>

            <Link href="/progress" className="block">
              <Card className="h-full hover:border-violet-500 hover:shadow-md transition-all">
                <CardContent className="flex flex-col items-center justify-center p-6">
                  <BarChart2 className="h-12 w-12 text-violet-500 mb-4" />
                  <CardTitle className="text-center mb-2">Progres</CardTitle>
                  <p className="text-center text-gray-500">Urmărește-ți evoluția și identifică punctele slabe</p>
                </CardContent>
              </Card>
            </Link>

            <Link href="/community" className="block">
              <Card className="h-full hover:border-fuchsia-500 hover:shadow-md transition-all">
                <CardContent className="flex flex-col items-center justify-center p-6">
                  <Users className="h-12 w-12 text-fuchsia-500 mb-4" />
                  <CardTitle className="text-center mb-2">Comunitate</CardTitle>
                  <p className="text-center text-gray-500">Conectează-te cu alți studenți și discută probleme</p>
                </CardContent>
              </Card>
            </Link>
          </div>
        </TabsContent>

        <TabsContent value="math" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Progres Matematică</CardTitle>
              <CardDescription>Performanța ta pe categorii</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {Object.entries(subjectProgress.math.categories).map(([category, data]) => {
                  const categoryAccuracy =
                    data.questionsAttempted > 0
                      ? Math.round((data.questionsCorrect / data.questionsAttempted) * 100)
                      : 0

                  return (
                    <div key={category} className="space-y-2">
                      <div className="flex justify-between">
                        <p className="font-medium">{category}</p>
                        <p className="text-sm text-gray-500">
                          {data.questionsCorrect}/{data.questionsAttempted} ({categoryAccuracy}%)
                        </p>
                      </div>
                      <Progress value={categoryAccuracy} className="h-2" />
                    </div>
                  )
                })}
              </div>
            </CardContent>
            <CardFooter>
              <Link href="/practice?subject=math">
                <Button variant="outline" className="border-indigo-500 text-indigo-600 hover:bg-indigo-50">
                  Practică Matematică
                </Button>
              </Link>
            </CardFooter>
          </Card>
        </TabsContent>

        <TabsContent value="informatics" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Progres Informatică</CardTitle>
              <CardDescription>Performanța ta pe categorii</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {Object.entries(subjectProgress.informatics.categories).map(([category, data]) => {
                  const categoryAccuracy =
                    data.questionsAttempted > 0
                      ? Math.round((data.questionsCorrect / data.questionsAttempted) * 100)
                      : 0

                  return (
                    <div key={category} className="space-y-2">
                      <div className="flex justify-between">
                        <p className="font-medium">{category}</p>
                        <p className="text-sm text-gray-500">
                          {data.questionsCorrect}/{data.questionsAttempted} ({categoryAccuracy}%)
                        </p>
                      </div>
                      <Progress value={categoryAccuracy} className="h-2" />
                    </div>
                  )
                })}
              </div>
            </CardContent>
            <CardFooter>
              <Link href="/practice?subject=informatics">
                <Button variant="outline" className="border-indigo-500 text-indigo-600 hover:bg-indigo-50">
                  Practică Informatică
                </Button>
              </Link>
            </CardFooter>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}

