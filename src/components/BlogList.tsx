"use client";

import { useState, useEffect } from "react";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Skeleton } from "@/components/ui/skeleton";
import { SearchX, CalendarDays, User, Tag, Eye } from "lucide-react";
import { toast } from "sonner";
import Image from "next/image";
import Link from "next/link";
import { getPosts, Post } from "@/lib/posts";

// 날짜 포맷 함수
function formatDate(timestamp: any): string {
  if (!timestamp) return '';
  
  let date;
  if (timestamp.toDate) {
    // Firestore Timestamp
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

// OG 이미지나 콘텐츠에서 첫 번째 이미지 추출
function getPostImage(post: Post): string | null {
  // 1. SEO OG 이미지 확인
  if (post.seo?.ogImage) {
    return post.seo.ogImage;
  }
  
  // 2. 콘텐츠에서 첫 번째 이미지 찾기
  const imgMatch = post.content.match(/<img[^>]+src="([^">]+)"/);
  if (imgMatch && imgMatch[1]) {
    return imgMatch[1];
  }
  
  return null;
}

interface BlogListProps {
  className?: string;
}

export default function BlogList({ className = "" }: BlogListProps) {
  const [posts, setPosts] = useState<Post[]>([]);
  const [filteredPosts, setFilteredPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");

  // Firestore에서 포스트 데이터 가져오기
  useEffect(() => {
    async function fetchPosts() {
      try {
        console.log('📖 포스트 목록 로드 시작...');
        const postsData = await getPosts();
        setPosts(postsData);
        setFilteredPosts(postsData);
        console.log('✅ 포스트 목록 로드 완료:', postsData.length, '개');
      } catch (error) {
        console.error('❌ 포스트 로드 실패:', error);
        toast.error('포스트를 불러오는데 실패했습니다.');
      } finally {
        setLoading(false);
      }
    }

    fetchPosts();
  }, []);

  // 검색 필터링
  useEffect(() => {
    if (!searchTerm.trim()) {
      setFilteredPosts(posts);
      return;
    }

    const filtered = posts.filter(post =>
      post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.categories.some(cat => cat.toLowerCase().includes(searchTerm.toLowerCase())) ||
      post.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()))
    );

    setFilteredPosts(filtered);
  }, [searchTerm, posts]);

  if (loading) {
    return (
      <div className={`space-y-6 ${className}`}>
        <div className="flex justify-between items-center">
          <h2 className="text-2xl font-bold">최신 포스트</h2>
          <Skeleton className="w-64 h-10" />
        </div>
        
        <div className="grid gap-6">
          {Array.from({ length: 5 }).map((_, i) => (
            <div key={i} className="border rounded-lg p-6">
              <div className="flex gap-4">
                <Skeleton className="w-32 h-24 rounded-lg flex-shrink-0" />
                <div className="flex-1 space-y-2">
                  <Skeleton className="w-3/4 h-6" />
                  <Skeleton className="w-full h-4" />
                  <Skeleton className="w-full h-4" />
                  <div className="flex gap-2">
                    <Skeleton className="w-16 h-6 rounded-full" />
                    <Skeleton className="w-20 h-6 rounded-full" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className={`space-y-6 ${className}`}>
      {/* 헤더와 검색 */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <h2 className="text-2xl font-bold">
          최신 포스트 ({filteredPosts.length})
        </h2>
        
        <div className="relative w-full sm:w-64">
          <Input
            type="text"
            placeholder="포스트 검색..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-4 pr-4"
          />
          {searchTerm && (
            <button
              onClick={() => setSearchTerm("")}
              className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
            >
              <SearchX className="w-4 h-4" />
            </button>
          )}
        </div>
      </div>

      {/* 포스트 목록 */}
      {filteredPosts.length === 0 ? (
        <div className="text-center py-12 text-gray-500">
          {searchTerm ? (
            <>
              <SearchX className="w-12 h-12 mx-auto mb-4 text-gray-300" />
              <p>'{searchTerm}'에 대한 검색 결과가 없습니다.</p>
            </>
          ) : (
            <>
              <div className="w-12 h-12 mx-auto mb-4 text-gray-300">📝</div>
              <p>아직 발행된 포스트가 없습니다.</p>
            </>
          )}
        </div>
      ) : (
        <div className="grid gap-6">
          {filteredPosts.map((post) => {
            const postImage = getPostImage(post);
            
            return (
              <article key={post.id} className="border rounded-lg p-6 hover:shadow-md transition-shadow">
                <Link href={`/posts/${post.id}`} className="block">
                  <div className="flex gap-4">
                    {/* 이미지 */}
                    {postImage && (
                      <div className="w-32 h-24 flex-shrink-0 relative rounded-lg overflow-hidden">
                        <Image
                          src={postImage}
                          alt={post.title}
                          fill
                          className="object-cover"
                          onError={(e) => {
                            // 이미지 로드 실패 시 숨기기
                            (e.target as HTMLElement).style.display = 'none';
                          }}
                        />
                      </div>
                    )}
                    
                    {/* 콘텐츠 */}
                    <div className="flex-1 space-y-2">
                      <h3 className="text-xl font-semibold line-clamp-2 hover:text-blue-600">
                        {post.title}
                      </h3>
                      
                      <p className="text-gray-600 line-clamp-2">
                        {post.excerpt}
                      </p>
                      
                      {/* 메타 정보 */}
                      <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500">
                        <div className="flex items-center gap-1">
                          <User className="w-4 h-4" />
                          {post.author}
                        </div>
                        
                        <div className="flex items-center gap-1">
                          <CalendarDays className="w-4 h-4" />
                          {formatDate(post.publishedAt)}
                        </div>
                        
                        <div className="flex items-center gap-1">
                          <Eye className="w-4 h-4" />
                          {post.stats?.views || 0} 조회
                        </div>
                      </div>
                      
                      {/* 카테고리와 태그 */}
                      <div className="flex flex-wrap gap-2">
                        <Badge variant="secondary" className="text-xs">
                          {post.categories[0] || '미분류'}
                        </Badge>
                        
                        {post.tags.slice(0, 3).map((tag) => (
                          <Badge key={tag} variant="outline" className="text-xs">
                            <Tag className="w-3 h-3 mr-1" />
                            {tag}
                          </Badge>
                        ))}
                        
                        {post.tags.length > 3 && (
                          <Badge variant="outline" className="text-xs">
                            +{post.tags.length - 3}
                          </Badge>
                        )}
                      </div>
                    </div>
                  </div>
                </Link>
              </article>
            );
          })}
        </div>
      )}
    </div>
  );
}