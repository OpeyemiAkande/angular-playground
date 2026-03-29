import { Book } from './book.interface';

export interface User {
  id: string;
  fullName: string;
  email: string;
  password: string;
  role: 'admin' | 'librarian' | 'member';
  [key: string]: string | 'admin' | 'librarian' | 'member';
}

export interface VerifiedUser {
  id: number;
  username: string;
  email: string;
  firstName: string;
  lastName: string;
  role?: 'admin' | 'librarian' | 'member';
  membershipDate?: Date;
  isActive: boolean;
  borrowedBooks?: Book[];
  reservedBooks?: Book[];
  overdueBooks?: Book[];
  finesDue?: number;
}
