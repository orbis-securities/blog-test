import { MetadataRoute } from 'next'
import { getPosts } from '@/lib/posts'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://yourdomain.com'

  // Vercel 빌드 환경에서는 기본 페이지들만 포함
  if (process.env.VERCEL_ENV && !process.env.NEXT_RUNTIME) {
    return [
      {
        url: baseUrl,
        lastModified: new Date(),
        changeFrequency: 'daily',
        priority: 1,
      },
      {
        url: `${baseUrl}/about`,
        lastModified: new Date(),
        changeFrequency: 'monthly',
        priority: 0.8,
      },
      {
        url: `${baseUrl}/trading-strategies`,
        lastModified: new Date(),
        changeFrequency: 'weekly',
        priority: 0.9,
      }
    ]
  }

  try {
    const posts = await getPosts()
    const postUrls = posts.map((post) => ({
      url: `${baseUrl}/posts/${post.id}`,
      lastModified: post.updatedAt?.toDate?.() || new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.8,
    }))

    return [
      {
        url: baseUrl,
        lastModified: new Date(),
        changeFrequency: 'daily',
        priority: 1,
      },
      ...postUrls,
    ]
  } catch (error) {
    console.error('Sitemap 생성 오류:', error);
    // 오류 시 기본 페이지만 반환
    return [
      {
        url: baseUrl,
        lastModified: new Date(),
        changeFrequency: 'daily',
        priority: 1,
      }
    ]
  }
}