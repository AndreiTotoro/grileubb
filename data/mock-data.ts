import type { Question, UserProgress, ForumPost, UserProfile } from "@/types"

export const mockQuestions: Question[] = [
  {
    id: "1",
    text: "Care dintre următoarele expresii are valoarea 1?",
    subject: "math",
    year: 2022,
    options: [
      { id: "a", text: "sin²(x) + cos²(x)", isCorrect: true },
      { id: "b", text: "sin(x) + cos(x)", isCorrect: false },
      { id: "c", text: "tan(x) · cot(x)", isCorrect: true },
      { id: "d", text: "sec²(x) - tan²(x)", isCorrect: true },
    ],
    explanation:
      "Identitatea fundamentală sin²(x) + cos²(x) = 1 este valabilă pentru orice valoare reală x. De asemenea, tan(x) · cot(x) = sin(x)/cos(x) · cos(x)/sin(x) = 1 și sec²(x) - tan²(x) = 1/cos²(x) - sin²(x)/cos²(x) = (1 - sin²(x))/cos²(x) = cos²(x)/cos²(x) = 1.",
    difficulty: "medium",
    category: "Trigonometrie",
  },
  {
    id: "2",
    text: "Fie f: R → R, f(x) = x² - 3x + 2. Care este valoarea minimă a funcției f?",
    subject: "math",
    year: 2022,
    options: [
      { id: "a", text: "-2", isCorrect: false },
      { id: "b", text: "-1", isCorrect: false },
      { id: "c", text: "0", isCorrect: false },
      { id: "d", text: "-1/4", isCorrect: true },
    ],
    explanation:
      "Pentru a găsi valoarea minimă a funcției f(x) = x² - 3x + 2, calculăm derivata f'(x) = 2x - 3 și o egalam cu zero: 2x - 3 = 0 => x = 3/2. Verificăm că este un minim calculând f''(x) = 2 > 0. Valoarea minimă este f(3/2) = (3/2)² - 3(3/2) + 2 = 9/4 - 9/2 + 2 = 9/4 - 18/4 + 8/4 = (9 - 18 + 8)/4 = -1/4.",
    difficulty: "medium",
    category: "Calcul diferențial",
  },
  {
    id: "3",
    text: "Care este soluția ecuației |2x - 1| = 3?",
    subject: "math",
    year: 2021,
    options: [
      { id: "a", text: "x = -1 sau x = 2", isCorrect: true },
      { id: "b", text: "x = 1 sau x = -1", isCorrect: false },
      { id: "c", text: "x = 2 sau x = -2", isCorrect: false },
      { id: "d", text: "x = 1 sau x = 2", isCorrect: false },
    ],
    explanation:
      "Rezolvăm ecuația |2x - 1| = 3 considerând cele două cazuri:\n1) 2x - 1 ≥ 0 => 2x - 1 = 3 => 2x = 4 => x = 2\n2) 2x - 1 < 0 => -(2x - 1) = 3 => -2x + 1 = 3 => -2x = 2 => x = -1\nDeci soluțiile sunt x = -1 sau x = 2.",
    difficulty: "easy",
    category: "Ecuații",
  },
  {
    id: "4",
    text: "Care este rezultatul calculului lim(x→0) (sin(x)/x)?",
    subject: "math",
    year: 2021,
    options: [
      { id: "a", text: "0", isCorrect: false },
      { id: "b", text: "1", isCorrect: true },
      { id: "c", text: "Limita nu există", isCorrect: false },
      { id: "d", text: "∞", isCorrect: false },
    ],
    explanation:
      "Limita lim(x→0) (sin(x)/x) = 1 este o limită fundamentală în calcul. Acest rezultat poate fi demonstrat folosind diverse metode, inclusiv dezvoltarea în serie Taylor a funcției sin(x) în jurul lui x = 0.",
    difficulty: "medium",
    category: "Limite",
  },
  {
    id: "5",
    text: "Care dintre următoarele algoritmi are complexitatea O(n log n) în cazul mediu?",
    subject: "informatics",
    year: 2022,
    options: [
      { id: "a", text: "Bubble Sort", isCorrect: false },
      { id: "b", text: "Quick Sort", isCorrect: true },
      { id: "c", text: "Insertion Sort", isCorrect: false },
      { id: "d", text: "Selection Sort", isCorrect: false },
    ],
    explanation:
      "Quick Sort are complexitatea O(n log n) în cazul mediu și cel mai bun, dar O(n²) în cazul cel mai defavorabil. Bubble Sort, Insertion Sort și Selection Sort au toate complexitatea O(n²) în cazul mediu.",
    difficulty: "medium",
    category: "Algoritmi de sortare",
  },
  {
    id: "6",
    text: "Ce metodă se folosește pentru a traversa un arbore binar în ordine (inorder)?",
    subject: "informatics",
    year: 2021,
    options: [
      { id: "a", text: "Stânga, Rădăcină, Dreapta", isCorrect: true },
      { id: "b", text: "Rădăcină, Stânga, Dreapta", isCorrect: false },
      { id: "c", text: "Stânga, Dreapta, Rădăcină", isCorrect: false },
      { id: "d", text: "Dreapta, Rădăcină, Stânga", isCorrect: false },
    ],
    explanation:
      "Traversarea în ordine (inorder) a unui arbore binar vizitează mai întâi subarborele stâng, apoi rădăcina, și în final subarborele drept. Aceasta produce elementele în ordine crescătoare pentru un arbore binar de căutare.",
    difficulty: "easy",
    category: "Structuri de date",
  },
  {
    id: "7",
    text: "Care este rezultatul expresiei 5 & 3 în limbajul C++?",
    subject: "informatics",
    year: 2022,
    options: [
      { id: "a", text: "1", isCorrect: true },
      { id: "b", text: "7", isCorrect: false },
      { id: "c", text: "8", isCorrect: false },
      { id: "d", text: "15", isCorrect: false },
    ],
    explanation:
      "Operatorul & în C++ este operatorul AND pe biți. 5 în binar este 101, iar 3 în binar este 011. Aplicând AND pe biți: 101 & 011 = 001, care este 1 în zecimal.",
    difficulty: "easy",
    category: "Operatori",
  },
  {
    id: "8",
    text: "Care este complexitatea algoritmului de căutare binară?",
    subject: "informatics",
    year: 2021,
    options: [
      { id: "a", text: "O(n)", isCorrect: false },
      { id: "b", text: "O(n²)", isCorrect: false },
      { id: "c", text: "O(log n)", isCorrect: true },
      { id: "d", text: "O(n log n)", isCorrect: false },
    ],
    explanation:
      "Căutarea binară are complexitatea O(log n) deoarece la fiecare pas, algoritmul reduce spațiul de căutare la jumătate. Acest algoritm funcționează doar pe colecții sortate.",
    difficulty: "medium",
    category: "Algoritmi de căutare",
  },
]

export const mockUserProgress: UserProgress = {
  questionsAttempted: 42,
  questionsCorrect: 35,
  subjectProgress: {
    math: {
      questionsAttempted: 25,
      questionsCorrect: 20,
      categories: {
        Trigonometrie: {
          questionsAttempted: 8,
          questionsCorrect: 7,
        },
        "Calcul diferențial": {
          questionsAttempted: 6,
          questionsCorrect: 4,
        },
        Ecuații: {
          questionsAttempted: 5,
          questionsCorrect: 4,
        },
        Limite: {
          questionsAttempted: 6,
          questionsCorrect: 5,
        },
      },
    },
    informatics: {
      questionsAttempted: 17,
      questionsCorrect: 15,
      categories: {
        "Algoritmi de sortare": {
          questionsAttempted: 5,
          questionsCorrect: 4,
        },
        "Structuri de date": {
          questionsAttempted: 4,
          questionsCorrect: 4,
        },
        Operatori: {
          questionsAttempted: 3,
          questionsCorrect: 3,
        },
        "Algoritmi de căutare": {
          questionsAttempted: 5,
          questionsCorrect: 4,
        },
      },
    },
  },
  recentActivity: [
    {
      date: "2023-03-10",
      questionsAttempted: 5,
      questionsCorrect: 4,
      subject: "math",
    },
    {
      date: "2023-03-09",
      questionsAttempted: 3,
      questionsCorrect: 3,
      subject: "informatics",
    },
    {
      date: "2023-03-08",
      questionsAttempted: 4,
      questionsCorrect: 3,
      subject: "math",
    },
    {
      date: "2023-03-07",
      questionsAttempted: 6,
      questionsCorrect: 5,
      subject: "informatics",
    },
    {
      date: "2023-03-06",
      questionsAttempted: 4,
      questionsCorrect: 3,
      subject: "math",
    },
  ],
}

export const mockForumPosts: ForumPost[] = [
  {
    id: "1",
    title: "Ajutor cu problema de trigonometrie din 2022",
    content:
      "Bună tuturor! Am dificultăți cu rezolvarea problemei 7 din examenul de matematică din 2022. Este vorba despre identitățile trigonometrice. Poate cineva să explice cum se rezolvă?",
    author: {
      id: "101",
      name: "Alex Popescu",
      avatar: "/placeholder.svg?height=40&width=40",
    },
    createdAt: "2023-03-09T14:23:00Z",
    replies: 12,
    likes: 5,
    tags: ["matematică", "trigonometrie", "examen 2022"],
  },
  {
    id: "2",
    title: "Grup de studiu pentru informatică",
    content:
      "Salut! Caut colegi pentru un grup de studiu pentru examenul de informatică. Putem să ne întâlnim online de două ori pe săptămână. Cine este interesat?",
    author: {
      id: "102",
      name: "Maria Dumitrescu",
      avatar: "/placeholder.svg?height=40&width=40",
    },
    createdAt: "2023-03-08T10:15:00Z",
    replies: 8,
    likes: 15,
    tags: ["informatică", "grup de studiu", "online"],
  },
  {
    id: "3",
    title: "Sfaturi pentru gestionarea timpului în examen",
    content:
      "Mereu rămân fără timp la testele de practică. Aveți sfaturi despre cum să gestionez mai bine timpul în timpul examenului? Cât timp ar trebui să aloc pentru fiecare întrebare?",
    author: {
      id: "103",
      name: "Radu Constantinescu",
      avatar: "/placeholder.svg?height=40&width=40",
    },
    createdAt: "2023-03-07T16:45:00Z",
    replies: 24,
    likes: 32,
    tags: ["sfaturi", "gestionarea timpului", "examen"],
  },
  {
    id: "4",
    title: "Resurse pentru algoritmi de sortare",
    content:
      "Căutați resurse bune pentru a înțelege algoritmii de sortare? Am găsit câteva tutoriale excelente și vreau să le împărtășesc cu voi.",
    author: {
      id: "104",
      name: "Elena Marinescu",
      avatar: "/placeholder.svg?height=40&width=40",
    },
    createdAt: "2023-03-06T09:30:00Z",
    replies: 6,
    likes: 18,
    tags: ["informatică", "algoritmi", "resurse"],
  },
  {
    id: "5",
    title: "Cum să rezolvi probleme de limite rapid",
    content:
      "Am descoperit o metodă care mă ajută să rezolv problemele de limite mult mai rapid. Vreți să o împărtășesc?",
    author: {
      id: "105",
      name: "Mihai Popa",
      avatar: "/placeholder.svg?height=40&width=40",
    },
    createdAt: "2023-03-05T13:20:00Z",
    replies: 15,
    likes: 27,
    tags: ["matematică", "limite", "tehnici"],
  },
]

export const mockUserProfile: UserProfile = {
  id: "1001",
  name: "Ana Ionescu",
  email: "ana.ionescu@example.com",
  avatar: "/placeholder.svg?height=100&width=100",
  joinedDate: "2023-01-15",
  subject: "math",
  streak: 7,
  level: 4,
  badges: [
    {
      id: "b1",
      name: "Începător Ambițios",
      description: "A rezolvat primele 10 probleme",
      icon: "🌟",
    },
    {
      id: "b2",
      name: "Maestru al Trigonometriei",
      description: "A rezolvat corect 20 de probleme de trigonometrie",
      icon: "📐",
    },
    {
      id: "b3",
      name: "Streak de 7 zile",
      description: "A practicat 7 zile consecutiv",
      icon: "🔥",
    },
  ],
}

