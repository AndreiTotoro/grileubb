import mongoose from 'mongoose';
import { Subject } from '@/types';

export interface IUser extends mongoose.Document {
  name: string;
  email: string;
  password: string;
  subject: Subject;
  avatar?: string;
  joinedDate: Date;
  streak?: number;
  level?: number;
  badges?: Array<{
    id: string;
    name: string;
    description: string;
    icon: string;
  }>;
}

const UserSchema = new mongoose.Schema<IUser>(
  {
    name: {
      type: String,
      required: [true, 'Please provide a name'],
      maxlength: [60, 'Name cannot be more than 60 characters'],
    },
    email: {
      type: String,
      required: [true, 'Please provide an email'],
      unique: true,
      match: [
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
        'Please provide a valid email',
      ],
    },
    password: {
      type: String,
      required: [true, 'Please provide a password'],
      minlength: [6, 'Password must be at least 6 characters'],
      select: false, // Don't return password by default
    },
    subject: {
      type: String,
      enum: ['math', 'informatics'],
      required: [true, 'Please specify a subject'],
    },
    avatar: {
      type: String,
      default: '',
    },
    joinedDate: {
      type: Date,
      default: Date.now,
    },
    streak: {
      type: Number,
      default: 0,
    },
    level: {
      type: Number,
      default: 1,
    },
    badges: [
      {
        id: String,
        name: String,
        description: String,
        icon: String,
      },
    ],
  },
  { timestamps: true }
);

// Safely check if the model exists before trying to access it
const User = mongoose.models && mongoose.models.User 
  ? mongoose.models.User as mongoose.Model<IUser>
  : mongoose.model<IUser>('User', UserSchema);

export default User; 