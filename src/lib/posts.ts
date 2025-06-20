import matter from 'gray-matter';

export interface Post {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  coverImage: string;
  content: string;
  readingTime: number;
}

// Vite feature to import all markdown files
const postModules = import.meta.glob('/content/posts/**/*.{md,mdx}', { as: 'raw', eager: true });

function calculateReadingTime(content: string): number {
  const wordsPerMinute = 200;
  const wordCount = content.split(/\s+/).length;
  return Math.ceil(wordCount / wordsPerMinute);
}

export const getAllPosts = (): Post[] => {
  const posts: Post[] = Object.entries(postModules).map(([path, rawContent]) => {
    const slug = path.split('/').pop()?.replace(/\.(md|mdx)$/, '') ?? '';
    const { data, content } = matter(rawContent);
    const readingTime = calculateReadingTime(content);

    return {
      slug,
      title: data.title || 'Untitled',
      date: data.date || new Date().toISOString(),
      excerpt: data.excerpt || '',
      coverImage: data.coverImage || '',
      content,
      readingTime,
    };
  });

  // Sort posts by date in descending order
  return posts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
};

export const getPostBySlug = (slug: string): Post | undefined => {
  return getAllPosts().find(post => post.slug === slug);
}; 