// Add these types to your existing types.ts file

export interface Comment {
  id: string;
  content: string;
  author: {
    id: string;
    name: string;
    avatar: string;
  };
  createdAt: string;
  updatedAt: string;
  likes: number;
  parentId?: string;
  isAuthor: boolean;
}

export interface User {
  id: string;
  name: string;
  email: string;
  avatar: string;
}