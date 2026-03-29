export interface LibrarySettings {
  maxLoanDurationDays: number;
  maxRenewalsAllowed: number;
  overdueFinePerDay: number;
  libraryHours: {
    open: string; // Opening time, e.g., '08:00'
    close: string; // Closing time, e.g., '18:00'
  };
  holidays: Date[]; // List of holidays when the library is closed
}

export interface Book {
  id: number;
  title: string;
  author: string;
  isbn: string;
  genre: string;
  publicationDate: Date;
  summary?: string;
  availableCopies: number;
  totalCopies: number;
  coverImageUrl?: string;
  publisher?: string;
  language?: string;
  pages?: number;
  reservedBy?: string[];
}

export interface BooksResponse {
  data: Book[];
  first: number;
  items: number;
  last: number;
  next: number;
  pages: number;
  prev: number;
}

export interface User {
  id: number;
  username: string;
  email: string;
  firstName: string;
  lastName: string;
  role: 'admin' | 'librarian' | 'member'; // User roles in the system
  membershipDate: Date;
  isActive: boolean;
  borrowedBooks?: Book[]; // Books currently borrowed by the user
  reservedBooks?: Book[]; // Books reserved by the user
  overdueBooks?: Book[]; // Books that are overdue
  finesDue?: number; // Amount of fines the user owes
}

export interface AuthData {
  token: string; // JWT or other token used for authentication
  user: User; // The authenticated user
  expiration: Date; // Token expiration date
  roles: string[]; // Roles assigned to the user
}

export interface Inventory {
  id: number; // Unique identifier for the inventory record
  book: Book; // The book associated with this inventory record
  totalCopies: number; // Total copies of the book owned by the library
  availableCopies: number; // Number of copies currently available for loan
  damagedCopies: number; // Number of copies that are damaged
  lostCopies: number; // Number of copies that are lost
  lastRestockedDate?: Date; // Date when the book was last restocked
  location: string; // Physical location of the book in the library (e.g., shelf number)
  status: 'in-stock' | 'out-of-stock' | 'discontinued'; // Current status of the book in inventory
  restockNeeded: boolean; // Flag indicating whether restocking is needed
  restockQuantity?: number; // Quantity needed to restock, if applicable
}

export interface Loan {
  id: number;
  book: Book;
  user: User;
  issueDate: Date;
  dueDate: Date;
  returnDate?: Date;
  status: 'borrowed' | 'overdue' | 'returned';
  fine?: number; // Fine amount if the book is returned late
}

export interface Reservation {
  id: number;
  book: Book;
  user: User;
  reservationDate: Date;
  status: 'pending' | 'fulfilled' | 'cancelled';
  fulfilledDate?: Date;
}

export interface ImageUrls {
  raw: string;
  full: string;
  regular: string;
  small: string;
  thumb: string;
  small_s3: string;
}

export interface Image {
  id: string;
  slug: string;
  alternative_slugs: {
    [key: string]: string;
  };
  created_at: string;
  updated_at: string;
  promoted_at: string | null;
  width: number;
  height: number;
  color: string;
  blur_hash: string;
  description: string | null;
  alt_description: string;
  breadcrumbs: any[]; // Assuming an array of any type. Adjust if you have specific type information.
  urls: {
    raw: string;
    full: string;
    regular: string;
    small: string;
    thumb: string;
    small_s3: string;
  };
  links: {
    self: string;
    html: string;
    download: string;
    download_location: string;
  };
  likes: number;
  liked_by_user: boolean;
  current_user_collections: any[]; // Assuming an array of any type. Adjust if you have specific type information.
  sponsorship: {
    impression_urls: string[];
    tagline: string;
    tagline_url: string;
    sponsor: {
      id: string;
      updated_at: string;
      username: string;
      name: string;
      first_name: string;
      last_name: string;
      twitter_username: string;
      portfolio_url: string;
      bio: string;
      location: string | null;
      links: {
        self: string;
        html: string;
        photos: string;
        likes: string;
        portfolio: string;
        following: string;
        followers: string;
      };
      profile_image: {
        small: string;
        medium: string;
        large: string;
      };
      instagram_username: string;
      total_collections: number;
      total_likes: number;
      total_photos: number;
      total_promoted_photos: number;
      total_illustrations: number;
      total_promoted_illustrations: number;
      accepted_tos: boolean;
      for_hire: boolean;
      social: {
        instagram_username: string;
        portfolio_url: string;
        twitter_username: string;
        paypal_email: string | null;
      };
    };
  };
  topic_submissions: any; // Adjust based on the actual structure of this object
  asset_type: string;
  user: {
    id: string;
    updated_at: string;
    username: string;
    name: string;
    first_name: string;
    last_name: string;
    twitter_username: string;
    portfolio_url: string;
    bio: string;
    location: string | null;
    links: {
      self: string;
      html: string;
      photos: string;
      likes: string;
      portfolio: string;
      following: string;
      followers: string;
    };
    profile_image: {
      small: string;
      medium: string;
      large: string;
    };
    instagram_username: string;
    total_collections: number;
    total_likes: number;
    total_photos: number;
    total_promoted_photos: number;
    total_illustrations: number;
    total_promoted_illustrations: number;
    accepted_tos: boolean;
    for_hire: boolean;
    social: {
      instagram_username: string;
      portfolio_url: string;
      twitter_username: string;
      paypal_email: string | null;
    };
  };
}
