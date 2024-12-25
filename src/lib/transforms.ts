import type { BlogPost, DevToArticle } from './types';

export function transformDevToArticle(article: DevToArticle): BlogPost {
  return {
    id: article.id.toString(),
    title: article.title,
    description: article.description,
    date: new Date(article.published_at).toLocaleDateString(),
    author: article.user.name,
    tags: article.tags.split(',').map(tag => tag.trim()),
    url: article.url,
    coverImage: article.cover_image || `https://picsum.photos/seed/${article.id}/800/400`
  };
}