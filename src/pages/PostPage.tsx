import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { getPostBySlug, Post } from '@/lib/posts';
import { remark } from 'remark';
import html from 'remark-html';
import { Button } from '@/components/ui/button';
import ReadingProgressBar from '@/components/ReadingProgressBar';

const PostPage = () => {
  const { slug } = useParams<{ slug: string }>();
  const [post, setPost] = useState<Post | null>(null);
  const [content, setContent] = useState('');

  useEffect(() => {
    if (slug) {
      const foundPost = getPostBySlug(slug);
      if (foundPost) {
        setPost(foundPost);
        remark()
          .use(html)
          .process(foundPost.content)
          .then((processedContent) => {
            setContent(processedContent.toString());
          });
      }
    }
  }, [slug]);

  if (!post) {
    return <div>Post not found</div>;
  }
  
  const formattedDate = new Date(post.date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.title,
    description: post.excerpt,
    image: `https://www.yourdomain.com${post.coverImage}`,
    author: {
      '@type': 'Person',
      name: 'Techpreneur Joe',
    },
    publisher: {
      '@type': 'Organization',
      name: 'Techpreneur Joe',
      logo: {
        '@type': 'ImageObject',
        url: 'https://www.yourdomain.com/logo.png',
      }
    },
    datePublished: post.date,
    dateModified: post.date,
  };

  return (
    <>
      <Helmet>
        <title>{`${post.title} | Techpreneur Joe`}</title>
        <meta name="description" content={post.excerpt} />
        <link rel="canonical" href={`https://www.yourdomain.com/posts/${post.slug}`} />
        <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
      </Helmet>
      <ReadingProgressBar />
      <div className="py-20 lg:py-32">
        <article className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-[75ch]">
          <header className="mb-12 text-center">
            <h1 className="text-4xl lg:text-5xl font-bold mb-4 text-white">{post.title}</h1>
            <div className="text-foreground/60">
              <span>Published on {formattedDate}</span>
              <span className="mx-2">&bull;</span>
              <span>{post.readingTime} min read</span>
            </div>
          </header>
          <div
            className="prose prose-invert max-w-none font-serif"
            dangerouslySetInnerHTML={{ __html: content }}
          />
          <div className="mt-16 text-center">
            <Button asChild>
              <Link to="/posts">Back to all posts</Link>
            </Button>
          </div>
        </article>
      </div>
    </>
  );
};

export default PostPage; 