"use client"

import { useSession } from "next-auth/react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Skeleton } from "@/components/ui/skeleton"
import { format } from "date-fns"

export default function Dashboard() {
  const { data: session, status } = useSession()
  const isLoading = status === "loading"

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Dashboard</h1>

      {isLoading ? (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Skeleton className="h-[200px] w-full rounded-lg" />
          <Skeleton className="h-[200px] w-full rounded-lg" />
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Profilul tău</CardTitle>
              <CardDescription>Informații despre contul tău</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <p className="text-sm font-medium text-gray-500">Nume</p>
                  <p className="text-lg font-medium">{session?.user.name}</p>
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-500">Email</p>
                  <p className="text-lg font-medium">{session?.user.email}</p>
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-500">Materie preferată</p>
                  <p className="text-lg font-medium capitalize">
                    {session?.user.subject === "math" ? "Matematică" : "Informatică"}
                  </p>
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-500">Membru din</p>
                  <p className="text-lg font-medium">
                    {session?.user.joinedDate
                      ? format(new Date(session.user.joinedDate), "dd MMMM yyyy")
                      : "N/A"}
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Statistici</CardTitle>
              <CardDescription>Progresul tău de învățare</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <p className="text-sm font-medium text-gray-500">Nivel</p>
                  <p className="text-lg font-medium">Nivel {session?.user.level || 1}</p>
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-500">Serie zilnică</p>
                  <p className="text-lg font-medium">{session?.user.streak || 0} zile</p>
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-500">Insigne</p>
                  <p className="text-lg font-medium">0 insigne obținute</p>
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-500">Grile rezolvate</p>
                  <p className="text-lg font-medium">0 grile</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      )}
    </div>
  )
}

