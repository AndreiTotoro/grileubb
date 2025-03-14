"use client"

import { useState, useEffect } from "react"
import { useSearchParams, useRouter } from "next/navigation"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Lightbulb, ChevronLeft, ChevronRight, Check, X, HelpCircle } from "lucide-react"
import { mockQuestions } from "@/data/mock-data"
import type { Question, Subject, Difficulty } from "@/types"
import { toast } from "sonner"

export default function Practice() {
  const searchParams = useSearchParams()
  const router = useRouter()

  const initialSubject = (searchParams.get("subject") as Subject) || "math"

  const [subject, setSubject] = useState<Subject>(initialSubject)
  const [difficulty, setDifficulty] = useState<Difficulty | "all">("all")
  const [year, setYear] = useState<number | "all">("all")
  const [category, setCategory] = useState<string | "all">("all")

  const [filteredQuestions, setFilteredQuestions] = useState<Question[]>([])
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0)
  const [selectedOption, setSelectedOption] = useState<string | null>(null)
  const [isAnswered, setIsAnswered] = useState(false)
  const [showHint, setShowHint] = useState(false)
  const [progress, setProgress] = useState(0)

  // Get unique years, categories from questions
  const years = Array.from(new Set(mockQuestions.map((q) => q.year))).sort((a, b) => b - a)
  const categories = Array.from(
    new Set(mockQuestions.filter((q) => q.subject === subject).map((q) => q.category)),
  ).sort()

  // Filter questions based on selected filters
  useEffect(() => {
    let filtered = mockQuestions.filter((q) => q.subject === subject)

    if (difficulty !== "all") {
      filtered = filtered.filter((q) => q.difficulty === difficulty)
    }

    if (year !== "all") {
      filtered = filtered.filter((q) => q.year === year)
    }

    if (category !== "all") {
      filtered = filtered.filter((q) => q.category === category)
    }

    setFilteredQuestions(filtered)
    setCurrentQuestionIndex(0)
    setSelectedOption(null)
    setIsAnswered(false)
    setShowHint(false)
    setProgress(0)
  }, [subject, difficulty, year, category])

  // Update progress when changing question
  useEffect(() => {
    if (filteredQuestions.length > 0) {
      setProgress(((currentQuestionIndex + 1) / filteredQuestions.length) * 100)
    }
  }, [currentQuestionIndex, filteredQuestions.length])

  // Handle subject change
  const handleSubjectChange = (value: Subject) => {
    setSubject(value)
    setCategory("all") // Reset category when subject changes
    router.push(`/practice?subject=${value}`, { scroll: false })
  }

  // Check answer
  const checkAnswer = () => {
    if (!selectedOption) return

    setIsAnswered(true)

    const currentQuestion = filteredQuestions[currentQuestionIndex]
    const isCorrect = currentQuestion.options.find((opt) => opt.id === selectedOption)?.isCorrect

    if (isCorrect) {
      toast.success("Răspuns corect! Felicitări! Ai ales răspunsul corect.")
    } else {
      toast.error("Răspuns greșit! Nu-ți face griji, poți încerca din nou sau vedea explicația.")
    }
  }

  // Go to next question
  const nextQuestion = () => {
    if (currentQuestionIndex < filteredQuestions.length - 1) {
      setCurrentQuestionIndex((prev) => prev + 1)
      setSelectedOption(null)
      setIsAnswered(false)
      setShowHint(false)
    }
  }

  // Go to previous question
  const prevQuestion = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex((prev) => prev - 1)
      setSelectedOption(null)
      setIsAnswered(false)
      setShowHint(false)
    }
  }

  // Show AI hint
  const showAIHint = () => {
    setShowHint(true)
    toast.info("Indiciu AI activat", {
      description: "Folosește indiciile pentru a înțelege mai bine problema.",
    })
  }

  // Current question
  const currentQuestion = filteredQuestions[currentQuestionIndex]

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
        <div>
          <h1 className="text-3xl font-bold mb-2">Practică</h1>
          <p className="text-gray-600">Rezolvă întrebări din examene anterioare</p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        <div className="lg:col-span-1">
          <Card>
            <CardHeader>
              <CardTitle>Filtre</CardTitle>
              <CardDescription>Personalizează-ți sesiunea de practică</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="subject">Materie</Label>
                <Tabs defaultValue={subject} onValueChange={(value) => handleSubjectChange(value as Subject)}>
                  <TabsList className="grid grid-cols-2">
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
                </Tabs>
              </div>

              <div className="space-y-2">
                <Label htmlFor="difficulty">Dificultate</Label>
                <Select value={difficulty} onValueChange={(value) => setDifficulty(value as Difficulty | "all")}>
                  <SelectTrigger>
                    <SelectValue placeholder="Toate" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">Toate</SelectItem>
                    <SelectItem value="easy">Ușor</SelectItem>
                    <SelectItem value="medium">Mediu</SelectItem>
                    <SelectItem value="hard">Dificil</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="year">An</Label>
                <Select
                  value={year.toString()}
                  onValueChange={(value) => setYear(value === "all" ? "all" : Number.parseInt(value))}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Toate" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">Toate</SelectItem>
                    {years.map((y) => (
                      <SelectItem key={y} value={y.toString()}>
                        {y}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="category">Categorie</Label>
                <Select value={category} onValueChange={(value) => setCategory(value)}>
                  <SelectTrigger>
                    <SelectValue placeholder="Toate" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">Toate</SelectItem>
                    {categories.map((c) => (
                      <SelectItem key={c} value={c}>
                        {c}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="lg:col-span-3">
          {filteredQuestions.length > 0 ? (
            <>
              <div className="mb-4">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm text-gray-500">
                    Întrebarea {currentQuestionIndex + 1} din {filteredQuestions.length}
                  </span>
                  <div className="flex space-x-2">
                    <Badge variant="outline" className="bg-gray-100">
                      {currentQuestion.subject === "math" ? "Matematică" : "Informatică"}
                    </Badge>
                    <Badge variant="outline" className="bg-gray-100">
                      {currentQuestion.year}
                    </Badge>
                    <Badge
                      variant="outline"
                      className={
                        currentQuestion.difficulty === "easy"
                          ? "bg-green-100 text-green-800"
                          : currentQuestion.difficulty === "medium"
                            ? "bg-yellow-100 text-yellow-800"
                            : "bg-red-100 text-red-800"
                      }
                    >
                      {currentQuestion.difficulty === "easy"
                        ? "Ușor"
                        : currentQuestion.difficulty === "medium"
                          ? "Mediu"
                          : "Dificil"}
                    </Badge>
                  </div>
                </div>
                <Progress value={progress} className="h-2" />
              </div>

              <Card className="mb-6">
                <CardHeader>
                  <CardTitle className="text-xl">{currentQuestion.text}</CardTitle>
                  <CardDescription>{currentQuestion.category}</CardDescription>
                </CardHeader>
                <CardContent>
                  <RadioGroup value={selectedOption || ""} onValueChange={setSelectedOption}>
                    <div className="space-y-4">
                      {currentQuestion.options.map((option) => (
                        <div
                          key={option.id}
                          className={`flex items-center space-x-2 p-3 rounded-md border ${
                            isAnswered && option.isCorrect
                              ? "bg-green-50 border-green-200"
                              : isAnswered && selectedOption === option.id && !option.isCorrect
                                ? "bg-red-50 border-red-200"
                                : "border-gray-200 hover:border-gray-300"
                          }`}
                        >
                          <RadioGroupItem value={option.id} id={option.id} disabled={isAnswered} />
                          <Label htmlFor={option.id} className="flex-1 cursor-pointer">
                            {option.text}
                          </Label>
                          {isAnswered && option.isCorrect && <Check className="h-5 w-5 text-green-500" />}
                          {isAnswered && selectedOption === option.id && !option.isCorrect && (
                            <X className="h-5 w-5 text-red-500" />
                          )}
                        </div>
                      ))}
                    </div>
                  </RadioGroup>
                </CardContent>
                <CardFooter className="flex justify-between">
                  <div className="flex space-x-2">
                    <Button variant="outline" onClick={prevQuestion} disabled={currentQuestionIndex === 0}>
                      <ChevronLeft className="h-4 w-4 mr-2" />
                      Anterior
                    </Button>
                    <Button
                      variant="outline"
                      onClick={nextQuestion}
                      disabled={currentQuestionIndex === filteredQuestions.length - 1}
                    >
                      Următor
                      <ChevronRight className="h-4 w-4 ml-2" />
                    </Button>
                  </div>
                  <div className="flex space-x-2">
                    {!isAnswered && (
                      <Button
                        variant="outline"
                        onClick={showAIHint}
                        className="text-indigo-600 border-indigo-200 hover:bg-indigo-50"
                      >
                        <Lightbulb className="h-4 w-4 mr-2" />
                        Indiciu AI
                      </Button>
                    )}
                    {!isAnswered && (
                      <Button
                        onClick={checkAnswer}
                        disabled={!selectedOption}
                        className="bg-gradient-to-r from-indigo-600 to-violet-600 hover:from-indigo-700 hover:to-violet-700 text-white"
                      >
                        Verifică
                      </Button>
                    )}
                  </div>
                </CardFooter>
              </Card>

              {(showHint || isAnswered) && (
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      {showHint && !isAnswered ? (
                        <>
                          <Lightbulb className="h-5 w-5 text-indigo-600 mr-2" />
                          Indiciu AI
                        </>
                      ) : (
                        <>
                          <HelpCircle className="h-5 w-5 text-green-500 mr-2" />
                          Explicație
                        </>
                      )}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    {showHint && !isAnswered ? (
                      <div className="space-y-4">
                        <p>Iată câteva indicii care te pot ajuta:</p>
                        <ul className="list-disc pl-5 space-y-2">
                          <li>
                            Analizează cu atenție fiecare opțiune și gândește-te la conceptele fundamentale implicate.
                          </li>
                          <li>
                            Pentru această întrebare, amintește-ți proprietățile specifice din{" "}
                            {currentQuestion.category}.
                          </li>
                          <li>Încearcă să elimini opțiunile care sunt evident incorecte.</li>
                        </ul>
                      </div>
                    ) : (
                      <div>
                        <p>{currentQuestion.explanation}</p>
                      </div>
                    )}
                  </CardContent>
                </Card>
              )}
            </>
          ) : (
            <Card>
              <CardContent className="flex flex-col items-center justify-center p-12">
                <div className="text-center mb-4">
                  <p className="text-xl font-medium mb-2">Nu am găsit întrebări care să corespundă filtrelor tale</p>
                  <p className="text-gray-500">Încearcă să modifici filtrele pentru a vedea mai multe întrebări</p>
                </div>
                <Button
                  onClick={() => {
                    setDifficulty("all")
                    setYear("all")
                    setCategory("all")
                  }}
                  className="bg-gradient-to-r from-indigo-600 to-violet-600 hover:from-indigo-700 hover:to-violet-700 text-white"
                >
                  Resetează filtrele
                </Button>
              </CardContent>
            </Card>
          )}
        </div>
      </div>
    </div>
  )
}

