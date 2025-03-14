import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from "bcryptjs";
import connectToDatabase from "@/lib/mongodb";
import User from "@/models/User";
import { Subject } from "@/types";
import mongoose from "mongoose";

// Define the session and user types
declare module "next-auth" {
  interface Session {
    user: {
      id: string;
      subject?: Subject;
      avatar?: string;
      joinedDate?: Date;
      streak?: number;
      level?: number;
      name?: string | null;
      email?: string | null;
    }
  }

  interface User {
    id?: string;
    name?: string | null;
    email?: string | null;
    subject?: Subject;
    avatar?: string;
    joinedDate?: Date;
    streak?: number;
    level?: number;
  }
}

// Define a type for the MongoDB document with _id
interface MongoUser {
  _id: mongoose.Types.ObjectId;
  name: string;
  email: string;
  password: string;
  subject: Subject;
  avatar?: string;
  joinedDate: Date;
  streak?: number;
  level?: number;
}

export const { handlers, auth, signIn, signOut } = NextAuth({
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "text" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        try {
          if (!credentials || !credentials.email || !credentials.password) {
            throw new Error("Email and password are required");
          }

          await connectToDatabase();

          // Find user by email and include the password field
          const user = await User.findOne({ email: credentials.email }).select("+password") as unknown as MongoUser;

          if (!user) {
            throw new Error("No user found with this email");
          }

          // Ensure password is a string before comparing
          const userPassword = user.password ? user.password.toString() : "";
          
          // Check if password matches
          const isPasswordMatch = await bcrypt.compare(
            credentials.password.toString(),
            userPassword
          );

          if (!isPasswordMatch) {
            throw new Error("Invalid password");
          }

          // Return user without password
          return {
            id: user._id.toString(),
            name: user.name,
            email: user.email,
            subject: user.subject,
            avatar: user.avatar || "",
            joinedDate: user.joinedDate,
            streak: user.streak || 0,
            level: user.level || 1,
          };
        } catch (error) {
          console.error("Auth error:", error);
          return null;
        }
      },
    }),
  ],
  callbacks: {
    jwt({ token, user }) {
      if (user) {
        token.id = user.id;
        token.subject = user.subject;
        token.avatar = user.avatar;
        token.joinedDate = user.joinedDate;
        token.streak = user.streak;
        token.level = user.level;
      }
      return token;
    },
    session({ session, token }) {
      if (session.user) {
        session.user.id = token.id as string;
        session.user.subject = token.subject as Subject;
        session.user.avatar = token.avatar as string;
        session.user.joinedDate = token.joinedDate as Date;
        session.user.streak = token.streak as number;
        session.user.level = token.level as number;
      }
      return session;
    },
  },
  pages: {
    signIn: "/login",
    signOut: "/",
    error: "/login",
  },
  session: {
    strategy: "jwt",
    maxAge: 30 * 24 * 60 * 60, // 30 days
  },
  debug: process.env.NODE_ENV === "development",
  secret: process.env.NEXTAUTH_SECRET,
}); 
