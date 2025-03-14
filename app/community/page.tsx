"use client"

import { useState } from "react"
import Image from "next/image"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Search, MessageSquare, ThumbsUp, Users, Calendar } from "lucide-react"
import { mockForumPosts } from "@/data/mock-data"

export default function Community() {
  const [searchQuery, setSearchQuery] = useState("")
  const [activeTab, setActiveTab] = useState("all")

  // Filter posts based on search query and active tab
  const filteredPosts = mockForumPosts.filter((post) => {
    const matchesSearch =
      searchQuery === "" ||
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.content.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.tags.some((tag) => tag.toLowerCase().includes(searchQuery.toLowerCase()))

    const matchesTab =
      activeTab === "all" ||
      (activeTab === "math" && post.tags.includes("matematică")) ||
      (activeTab === "informatics" && post.tags.includes("informatică"))

    return matchesSearch && matchesTab
  })

  // Format date
  const formatDate = (dateString: string) => {
    const date = new Date(dateString)
    const now = new Date()
    const diffTime = Math.abs(now.getTime() - date.getTime())
    const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24))

    if (diffDays === 0) {
      return "Astăzi"
    } else if (diffDays === 1) {
      return "Ieri"
    } else if (diffDays < 7) {
      return `Acum ${diffDays} zile`
    } else {
      return date.toLocaleDateString("ro-RO", { day: "2-digit", month: "short", year: "numeric" })
    }
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
        <div>
          <h1 className="text-3xl font-bold mb-2">Comunitate</h1>
          <p className="text-gray-600">Conectează-te cu alți studenți și discută probleme</p>
        </div>
        <div className="mt-4 md:mt-0">
          <Button className="bg-pink-500 hover:bg-pink-600">Postare Nouă</Button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        <div className="lg:col-span-1 space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Caută</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="relative">
                <Search className="absolute left-2 top-2.5 h-4 w-4 text-gray-500" />
                <Input
                  placeholder="Caută în discuții..."
                  className="pl-8"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Categorii Populare</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                <Badge className="bg-blue-100 text-blue-800 hover:bg-blue-200 cursor-pointer">matematică</Badge>
                <Badge className="bg-green-100 text-green-800 hover:bg-green-200 cursor-pointer">informatică</Badge>
                <Badge className="bg-purple-100 text-purple-800 hover:bg-purple-200 cursor-pointer">
                  trigonometrie
                </Badge>
                <Badge className="bg-yellow-100 text-yellow-800 hover:bg-yellow-200 cursor-pointer">algoritmi</Badge>
                <Badge className="bg-pink-100 text-pink-800 hover:bg-pink-200 cursor-pointer">examen 2022</Badge>
                <Badge className="bg-orange-100 text-orange-800 hover:bg-orange-200 cursor-pointer">
                  grup de studiu
                </Badge>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Statistici Comunitate</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center">
                  <Users className="h-5 w-5 text-gray-500 mr-2" />
                  <div>
                    <p className="font-medium">5,234</p>
                    <p className="text-sm text-gray-500">Membri</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <MessageSquare className="h-5 w-5 text-gray-500 mr-2" />
                  <div>
                    <p className="font-medium">1,876</p>
                    <p className="text-sm text-gray-500">Discuții</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <Calendar className="h-5 w-5 text-gray-500 mr-2" />
                  <div>
                    <p className="font-medium">243</p>
                    <p className="text-sm text-gray-500">Activi astăzi</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="lg:col-span-3">
          <Tabs defaultValue="all" className="mb-6" onValueChange={setActiveTab}>
            <TabsList className="grid grid-cols-3">
              <TabsTrigger value="all">Toate</TabsTrigger>
              <TabsTrigger value="math">Matematică</TabsTrigger>
              <TabsTrigger value="informatics">Informatică</TabsTrigger>
            </TabsList>
          </Tabs>

          {filteredPosts.length > 0 ? (
            <div className="space-y-4">
              {filteredPosts.map((post) => (
                <Card key={post.id} className="hover:border-gray-300 transition-colors">
                  <CardContent className="p-6">
                    <div className="flex items-start">
                      <div className="w-10 h-10 rounded-full overflow-hidden mr-4 flex-shrink-0">
                        <Image
                          src={post.author.avatar || "/placeholder.svg"}
                          alt={post.author.name}
                          width={40}
                          height={40}
                          className="object-cover"
                        />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-1">
                          <div className="flex items-center">
                            <p className="font-bold mr-2">{post.author.name}</p>
                            <p className="text-sm text-gray-500">{formatDate(post.createdAt)}</p>
                          </div>
                        </div>
                        <h3 className="text-lg font-medium mb-2">{post.title}</h3>
                        <p className="text-gray-700 mb-4 line-clamp-2">{post.content}</p>
                        <div className="flex flex-wrap gap-2 mb-4">
                          {post.tags.map((tag, index) => (
                            <Badge key={index} variant="outline" className="bg-gray-100">
                              {tag}
                            </Badge>
                          ))}
                        </div>
                        <div className="flex items-center text-sm text-gray-500">
                          <div className="flex items-center mr-4">
                            <MessageSquare className="h-4 w-4 mr-1" />
                            <span>{post.replies} răspunsuri</span>
                          </div>
                          <div className="flex items-center">
                            <ThumbsUp className="h-4 w-4 mr-1" />
                            <span>{post.likes} aprecieri</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          ) : (
            <Card>
              <CardContent className="flex flex-col items-center justify-center p-12">
                <div className="text-center mb-4">
                  <p className="text-xl font-medium mb-2">Nu am găsit discuții care să corespundă căutării tale</p>
                  <p className="text-gray-500">
                    Încearcă să modifici termenii de căutare sau să selectezi altă categorie
                  </p>
                </div>
                <Button
                  onClick={() => {
                    setSearchQuery("")
                    setActiveTab("all")
                  }}
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

