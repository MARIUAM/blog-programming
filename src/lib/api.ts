// Existing imports
import type { BlogPost, DevToArticle, Comment } from './types';
import { transformDevToArticle } from './transforms';

const DEV_TO_API_URL = 'https://dev.to/api/articles';

// Existing functions remain the same
export async function fetchBlogPosts(): Promise<BlogPost[]> {
  try {
    const response = await fetch(`${DEV_TO_API_URL}?tag=javascript&top=1`);
    if (!response.ok) {
      throw new Error('Failed to fetch blog posts');
    }
    const articles: DevToArticle[] = await response.json();
    return articles.map(transformDevToArticle);
  } catch (error) {
    console.error('Error fetching blog posts:', error);
    return [];
  }
}

export async function fetchPostsByCategory(category: string): Promise<BlogPost[]> {
  try {
    const response = await fetch(`${DEV_TO_API_URL}?tag=${category}&top=1`);
    if (!response.ok) {
      throw new Error(`Failed to fetch posts for category: ${category}`);
    }
    const articles: DevToArticle[] = await response.json();
    return articles.map(transformDevToArticle);
  } catch (error) {
    console.error(`Error fetching posts for category ${category}:`, error);
    return [];
  }
}

// New function to fetch a single blog post
export async function fetchBlogPost(id: string): Promise<BlogPost> {
  try {
    const response = await fetch(`${DEV_TO_API_URL}/${id}`);
    if (!response.ok) {
      throw new Error('Failed to fetch blog post');
    }
    const article: DevToArticle = await response.json();
    return transformDevToArticle(article);
  } catch (error) {
    console.error('Error fetching blog post:', error);
    throw error;
  }
}

// Mock comments data for development
const mockComments: Comment[] = [
  {
    id: '1',
    content: 'Great article! Very informative.',
    author: {
      id: 'user1',
      name: 'John Doe',
      avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=John'
    },
    createdAt: new Date(Date.now() - 3600000).toISOString(), // 1 hour ago
    updatedAt: new Date(Date.now() - 3600000).toISOString(),
    likes: 5,
    isAuthor: true
  },
  {
    id: '2',
    content: 'Thanks for sharing!',
    author: {
      id: 'user2',
      name: 'Jane Smith',
      avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Jane'
    },
    createdAt: new Date(Date.now() - 7200000).toISOString(), // 2 hours ago
    updatedAt: new Date(Date.now() - 7200000).toISOString(),
    likes: 3,
    isAuthor: false
  }
];

// Function to fetch comments for a post
export async function fetchComments(postId: string): Promise<Comment[]> {
  // In a real application, this would fetch from your API
  // For now, return mock data
  return mockComments;
}