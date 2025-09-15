"use client";

import { useState, useEffect } from 'react';
import { notFound, useParams } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { getPostById, Post } from '@/lib/posts';
import { CalendarDays, User, Tag, ArrowLeft, Eye, Heart } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Skeleton } from '@/components/ui/skeleton';
import Layout from '@/components/Layout';
import StructuredData from '@/components/StructuredData';

// 날짜 포맷 함수
function formatDate(timestamp: any): string {
  if (!timestamp) return '';
  
  let date;
  if (timestamp.toDate) {
    date = timestamp.toDate();
  } else if (timestamp instanceof Date) {
    date = timestamp;
  } else {
    date = new Date(timestamp);
  }
  
  return date.toLocaleDateString('ko-KR', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });
}

export default function PostPage() {
  const params = useParams();
  const id = params?.id as string;
  const [post, setPost] = useState<Post | null>(null);
  const [loading, setLoading] = useState(true);
  const [notFoundError, setNotFoundError] = useState(false);

  useEffect(() => {
    if (!id) return;

    async function fetchPost() {
      try {
        console.log('📖 포스트 상세 로드 시작, ID:', id);
        const postData = await getPostById(id);
        
        if (!postData) {
          console.log('❌ 포스트를 찾을 수 없음:', id);
          setNotFoundError(true);
        } else {
          console.log('✅ 포스트 상세 로드 완료:', postData.title);
          setPost(postData);
        }
      } catch (error) {
        console.error('❌ 포스트 로드 실패:', error);
        setNotFoundError(true);
      } finally {
        setLoading(false);
      }
    }

    fetchPost();
  }, [id]);

  if (notFoundError) {
    notFound();
  }

  if (loading) {
    return (
      <Layout>
        <div className="container max-w-4xl mx-auto px-6 py-8">
          {/* 뒤로가기 버튼 스켈레톤 */}
          <div className="mb-6">
            <Skeleton className="w-40 h-6" />
          </div>

          <article className="bg-white rounded-lg border p-8">
            {/* 헤더 스켈레톤 */}
            <header className="mb-8">
              <div className="mb-4">
                <Skeleton className="w-20 h-6 rounded-full" />
              </div>
              <Skeleton className="w-full h-12 mb-4" />
              <div className="flex flex-wrap items-center gap-6 mb-4">
                <Skeleton className="w-24 h-4" />
                <Skeleton className="w-32 h-4" />
                <Skeleton className="w-20 h-4" />
              </div>
              <div className="flex gap-2">
                <Skeleton className="w-16 h-6 rounded-full" />
                <Skeleton className="w-20 h-6 rounded-full" />
                <Skeleton className="w-18 h-6 rounded-full" />
              </div>
            </header>

            {/* 이미지 스켈레톤 */}
            <div className="mb-8">
              <Skeleton className="w-full h-96 rounded-lg" />
            </div>

            {/* 콘텐츠 스켈레톤 */}
            <div className="space-y-4">
              <Skeleton className="w-full h-4" />
              <Skeleton className="w-full h-4" />
              <Skeleton className="w-3/4 h-4" />
              <Skeleton className="w-full h-4" />
              <Skeleton className="w-5/6 h-4" />
            </div>
          </article>
        </div>
      </Layout>
    );
  }

  if (!post) {
    return null;
  }

  return (
    <Layout>
      <StructuredData post={post} />
      <div className="container max-w-4xl mx-auto px-6 py-8">
        {/* 뒤로가기 버튼 */}
        <div className="mb-6">
          <Link 
            href="/" 
            className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-800 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            목록으로 돌아가기
          </Link>
        </div>

        <article className="bg-white rounded-lg border p-8">
          {/* 헤더 */}
          <header className="mb-8">
            {/* 카테고리 */}
            <div className="mb-4">
              <Badge variant="secondary" className="text-sm">
                {post.category}
              </Badge>
            </div>

            {/* 제목 */}
            <h1 className="text-4xl font-bold mb-4 leading-tight">
              {post.title}
            </h1>

            {/* 메타 정보 */}
            <div className="flex flex-wrap items-center gap-6 text-gray-600 text-sm">
              <div className="flex items-center gap-2">
                <User className="w-4 h-4" />
                <span>{post.author}</span>
              </div>
              
              <div className="flex items-center gap-2">
                <CalendarDays className="w-4 h-4" />
                <span>{formatDate(post.publishedAt)}</span>
              </div>
              
              <div className="flex items-center gap-2">
                <Eye className="w-4 h-4" />
                <span>{post.stats.views} 조회</span>
              </div>
              
              <div className="flex items-center gap-2">
                <Heart className="w-4 h-4" />
                <span>{post.stats.likes} 좋아요</span>
              </div>
            </div>

            {/* 태그 */}
            {post.tags.length > 0 && (
              <div className="flex flex-wrap gap-2 mt-4">
                {post.tags.map((tag) => (
                  <Badge key={tag} variant="outline" className="text-xs">
                    <Tag className="w-3 h-3 mr-1" />
                    {tag}
                  </Badge>
                ))}
              </div>
            )}
          </header>

          {/* 대표 이미지 */}
          {post.seo.ogImage && (
            <div className="mb-8">
              <div className="relative w-full h-96 rounded-lg overflow-hidden">
                <Image
                  src={post.seo.ogImage}
                  alt={post.title}
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          )}

          {/* 콘텐츠 */}
          <div 
            className="prose prose-lg max-w-none prose-img:rounded-lg prose-img:shadow-md prose-a:text-blue-600 prose-a:no-underline hover:prose-a:underline"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />

          {/* 푸터 */}
          <footer className="mt-12 pt-8 border-t border-gray-200">
            <div className="flex justify-between items-center">
              <div className="text-sm text-gray-500">
                마지막 수정: {formatDate(post.updatedAt)}
              </div>
              
              <div className="flex items-center gap-4">
                <button className="flex items-center gap-2 px-4 py-2 text-gray-600 hover:text-red-600 transition-colors">
                  <Heart className="w-4 h-4" />
                  좋아요 ({post.stats.likes})
                </button>
              </div>
            </div>
          </footer>
        </article>
      </div>
    </Layout>
  );
}