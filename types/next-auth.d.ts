import { Subject } from '.';
import NextAuth from 'next-auth';
import { JWT } from 'next-auth/jwt';

declare module 'next-auth' {
  /**
   * Returned by `useSession`, `getSession` and received as a prop on the `SessionProvider` React Context
   */
  interface Session {
    user: {
      /** The user's unique identifier */
      id?: string;
      name?: string | null;
      email?: string | null;
      subject?: Subject;
      avatar?: string;
      joinedDate?: Date;
      streak?: number;
      level?: number;
    };
  }

  /**
   * The shape of the user object returned in the OAuth providers' `profile` callback,
   * or the second parameter of the `session` callback, when using a database.
   */
  interface User {
    /** The user's unique identifier */
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

declare module 'next-auth/jwt' {
  /** Returned by the `jwt` callback and `getToken`, when using JWT sessions */
  interface JWT {
    /** The user's unique identifier */
    id?: string;
    subject?: Subject;
    avatar?: string;
    joinedDate?: Date;
    streak?: number;
    level?: number;
  }
} 
