"use client";

import { Post } from '@/lib/posts';

interface StructuredDataProps {
  post: Post;
}

export default function StructuredData({ post }: StructuredDataProps) {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://yourdomain.com';
  
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": post.title,
    "description": post.excerpt,
    "image": post.seo.ogImage ? [post.seo.ogImage] : [],
    "datePublished": post.publishedAt?.toDate?.()?.toISOString(),
    "dateModified": post.updatedAt?.toDate?.()?.toISOString(),
    "author": {
      "@type": "Person",
      "name": post.author
    },
    "publisher": {
      "@type": "Organization",
      "name": "MMT Blog",
      "logo": {
        "@type": "ImageObject",
        "url": `${baseUrl}/logo.png`
      }
    },
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": `${baseUrl}/posts/${post.id}`
    },
    "articleSection": post.categories[0] || '미분류',
    "keywords": post.tags.join(', '),
    "wordCount": post.content.replace(/<[^>]*>/g, '').split(/\s+/).length,
    "url": `${baseUrl}/posts/${post.id}`,
    "isAccessibleForFree": true,
    "inLanguage": "ko-KR",
    "articleBody": post.content.replace(/<[^>]*>/g, '').substring(0, 200) + '...'
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
}