export type Subject = "math" | "informatics"

export type Difficulty = "easy" | "medium" | "hard"

export type Question = {
  id: string
  text: string
  subject: Subject
  year: number
  options: {
    id: string
    text: string
    isCorrect: boolean
  }[]
  explanation?: string
  difficulty: Difficulty
  category: string
}

export type UserProgress = {
  questionsAttempted: number
  questionsCorrect: number
  subjectProgress: {
    [key in Subject]: {
      questionsAttempted: number
      questionsCorrect: number
      categories: {
        [key: string]: {
          questionsAttempted: number
          questionsCorrect: number
        }
      }
    }
  }
  recentActivity: {
    date: string
    questionsAttempted: number
    questionsCorrect: number
    subject: Subject
  }[]
}

export type ForumPost = {
  id: string
  title: string
  content: string
  author: {
    id: string
    name: string
    avatar: string
  }
  createdAt: string
  replies: number
  likes: number
  tags: string[]
}

export type UserProfile = {
  id: string
  name: string
  email: string
  avatar: string
  joinedDate: string
  subject: Subject
  streak: number
  level: number
  badges: {
    id: string
    name: string
    description: string
    icon: string
  }[]
}

