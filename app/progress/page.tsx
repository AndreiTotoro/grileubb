"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Progress } from "@/components/ui/progress"
import { mockUserProgress } from "@/data/mock-data"
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
} from "recharts"
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"

export default function ProgressPage() {
  const { questionsAttempted, questionsCorrect, subjectProgress, recentActivity } = mockUserProgress

  const accuracy = questionsAttempted > 0 ? Math.round((questionsCorrect / questionsAttempted) * 100) : 0

  // Prepare data for charts
  const subjectData = [
    {
      name: "Matematică",
      correct: subjectProgress.math.questionsCorrect,
      incorrect: subjectProgress.math.questionsAttempted - subjectProgress.math.questionsCorrect,
    },
    {
      name: "Informatică",
      correct: subjectProgress.informatics.questionsCorrect,
      incorrect: subjectProgress.informatics.questionsAttempted - subjectProgress.informatics.questionsCorrect,
    },
  ]

  const activityData = recentActivity
    .map((activity) => ({
      date: new Date(activity.date).toLocaleDateString("ro-RO", { day: "2-digit", month: "short" }),
      correct: activity.questionsCorrect,
      incorrect: activity.questionsAttempted - activity.questionsCorrect,
    }))
    .reverse()

  const mathCategoryData = Object.entries(subjectProgress.math.categories).map(([category, data]) => ({
    name: category,
    value: data.questionsCorrect,
    total: data.questionsAttempted,
  }))

  const informaticsCategoryData = Object.entries(subjectProgress.informatics.categories).map(([category, data]) => ({
    name: category,
    value: data.questionsCorrect,
    total: data.questionsAttempted,
  }))

  const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042", "#8884D8"]

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2">Progresul Tău</h1>
        <p className="text-gray-600">Urmărește-ți evoluția și identifică punctele forte și slabe</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-lg font-medium">Întrebări Rezolvate</CardTitle>
          </CardHeader>
          <CardContent>
            <div>
              <p className="text-3xl font-bold">{questionsAttempted}</p>
              <p className="text-sm text-gray-500">Total întrebări încercate</p>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-lg font-medium">Răspunsuri Corecte</CardTitle>
          </CardHeader>
          <CardContent>
            <div>
              <p className="text-3xl font-bold">{questionsCorrect}</p>
              <p className="text-sm text-gray-500">Întrebări rezolvate corect</p>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-lg font-medium">Precizie Generală</CardTitle>
          </CardHeader>
          <CardContent>
            <div>
              <p className="text-3xl font-bold mb-2">{accuracy}%</p>
              <Progress value={accuracy} className="h-2" />
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
        <Card>
          <CardHeader>
            <CardTitle>Activitate Recentă</CardTitle>
            <CardDescription>Ultimele 5 zile de practică</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="h-80">
              <ChartContainer
                config={{
                  correct: {
                    label: "Corecte",
                    color: "hsl(var(--chart-1))",
                  },
                  incorrect: {
                    label: "Incorecte",
                    color: "hsl(var(--chart-2))",
                  },
                }}
              >
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={activityData} margin={{ top: 20, right: 30, left: 20, bottom: 20 }}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="date" />
                    <YAxis />
                    <ChartTooltip content={<ChartTooltipContent />} />
                    <Legend />
                    <Bar dataKey="correct" stackId="a" fill="var(--color-correct)" name="Corecte" />
                    <Bar dataKey="incorrect" stackId="a" fill="var(--color-incorrect)" name="Incorecte" />
                  </BarChart>
                </ResponsiveContainer>
              </ChartContainer>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Performanță pe Materii</CardTitle>
            <CardDescription>Comparație între Matematică și Informatică</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="h-80">
              <ChartContainer
                config={{
                  correct: {
                    label: "Corecte",
                    color: "hsl(var(--chart-1))",
                  },
                  incorrect: {
                    label: "Incorecte",
                    color: "hsl(var(--chart-2))",
                  },
                }}
              >
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={subjectData} margin={{ top: 20, right: 30, left: 20, bottom: 20 }}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <ChartTooltip content={<ChartTooltipContent />} />
                    <Legend />
                    <Bar dataKey="correct" stackId="a" fill="var(--color-correct)" name="Corecte" />
                    <Bar dataKey="incorrect" stackId="a" fill="var(--color-incorrect)" name="Incorecte" />
                  </BarChart>
                </ResponsiveContainer>
              </ChartContainer>
            </div>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="math" className="mb-8">
        <TabsList className="grid grid-cols-2 mb-8">
          <TabsTrigger value="math">Matematică</TabsTrigger>
          <TabsTrigger value="informatics">Informatică</TabsTrigger>
        </TabsList>

        <TabsContent value="math">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <CardTitle>Performanță pe Categorii</CardTitle>
                <CardDescription>Matematică</CardDescription>
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
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Distribuție pe Categorii</CardTitle>
                <CardDescription>Matematică</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-80">
                  <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                      <Pie
                        data={mathCategoryData}
                        cx="50%"
                        cy="50%"
                        labelLine={false}
                        outerRadius={80}
                        fill="#8884d8"
                        dataKey="value"
                        label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                      >
                        {mathCategoryData.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                        ))}
                      </Pie>
                      <Tooltip formatter={(value, name, props) => [`${value}/${props.payload.total}`, name]} />
                      <Legend />
                    </PieChart>
                  </ResponsiveContainer>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="informatics">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <CardTitle>Performanță pe Categorii</CardTitle>
                <CardDescription>Informatică</CardDescription>
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
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Distribuție pe Categorii</CardTitle>
                <CardDescription>Informatică</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-80">
                  <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                      <Pie
                        data={informaticsCategoryData}
                        cx="50%"
                        cy="50%"
                        labelLine={false}
                        outerRadius={80}
                        fill="#8884d8"
                        dataKey="value"
                        label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                      >
                        {informaticsCategoryData.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                        ))}
                      </Pie>
                      <Tooltip formatter={(value, name, props) => [`${value}/${props.payload.total}`, name]} />
                      <Legend />
                    </PieChart>
                  </ResponsiveContainer>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}

