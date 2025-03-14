import { redirect } from "next/navigation"
import LandingPage from "./landing-page"

export default function Home() {
  // In a real app, you would check if the user is logged in here
  const isLoggedIn = false

  // If logged in, redirect to dashboard
  if (isLoggedIn) {
    redirect("/dashboard")
  }

  // Otherwise, show the landing page
  return <LandingPage />
}

