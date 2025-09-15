import { db } from './firebase';
import { collection, query, where, orderBy, getDocs, doc, getDoc, limit, Timestamp } from 'firebase/firestore';

// Firestore 연결 상태 확인 함수
function isFirestoreAvailable(): boolean {
  return !!(db && typeof db === 'object' && 'app' in db && db.app);
}

export interface Post {
  id: string;
  title: string;
  content: string;
  excerpt: string;
  blogId: string;
  category: string;
  tags: string[];
  status: 'draft' | 'published';
  createdAt: Timestamp;
  updatedAt: Timestamp;
  publishedAt: Timestamp | null;
  slug: string;
  author: string;
  seo: {
    metaTitle: string;
    metaDescription: string;
    keywords: string[];
    ogImage?: string | null;
  };
  stats: {
    views: number;
    likes: number;
    comments: number;
  };
}

const BLOG_ID = process.env.NEXT_PUBLIC_BLOG_ID || 'axi';

/**
 * 발행된 포스트 목록 가져오기
 */
export async function getPosts(maxResults?: number): Promise<Post[]> {
  try {
    // Firestore 연결 상태 확인
    if (!isFirestoreAvailable()) {
      console.log('🏗️ Firestore 연결 불가능, 빈 배열 반환');
      return [];
    }

    console.log('📖 포스트 목록 조회 시작, 블로그 ID:', BLOG_ID);
    
    // 블로그 ID 유효성 검사
    if (!BLOG_ID || BLOG_ID.trim() === '') {
      console.log('❌ 블로그 ID가 설정되지 않았습니다.');
      return [];
    }
    
    // 단순 쿼리로 시작 - 복합 인덱스 없이
    let q = query(
      collection(db, 'posts'),
      where('blogId', '==', BLOG_ID.trim()),
      where('status', '==', 'published')
    );

    // 제한이 있으면 추가
    if (maxResults && maxResults > 0) {
      q = query(q, limit(maxResults));
    }
    
    console.log('🔍 Firestore 쿼리 실행 중...');
    const querySnapshot = await getDocs(q);
    const posts: Post[] = [];
    
    if (querySnapshot.empty) {
      console.log('📄 조회된 포스트가 없습니다.');
      return [];
    }
    
    querySnapshot.forEach((docSnapshot) => {
      try {
        const data = docSnapshot.data();
        
        // 데이터 유효성 검사
        if (data && data.title && data.blogId === BLOG_ID.trim()) {
          posts.push({
            id: docSnapshot.id,
            ...data,
            // stats 기본값 보장
            stats: data.stats || {
              views: 0,
              likes: 0,
              comments: 0
            }
          } as Post);
        } else {
          console.warn('⚠️  유효하지 않은 포스트 데이터:', docSnapshot.id);
        }
      } catch (docError) {
        console.warn('⚠️  포스트 파싱 오류:', docSnapshot.id, docError);
      }
    });
    
    // 클라이언트 사이드에서 정렬 (publishedAt 기준 내림차순)
    posts.sort((a, b) => {
      if (!a.publishedAt || !b.publishedAt) return 0;
      return b.publishedAt.seconds - a.publishedAt.seconds;
    });
    
    console.log('✅ 포스트 목록 조회 완료:', posts.length, '개');
    return posts;
  } catch (error: any) {
    console.error('❌ 포스트 목록 조회 실패:', error);
    
    // 구체적인 오류 메시지
    if (error?.code === 'failed-precondition') {
      console.error('💡 인덱스가 아직 구축 중일 수 있습니다. 몇 분 후 다시 시도해주세요.');
    } else if (error?.code === 'permission-denied') {
      console.error('💡 Firestore 접근 권한이 없습니다. 보안 규칙을 확인해주세요.');
    } else if (error?.code === 'unavailable') {
      console.error('💡 Firestore 서비스에 일시적으로 접근할 수 없습니다.');
    }
    
    // 개발 환경에서는 빈 배열 반환, 프로덕션에서는 에러 throw
    if (process.env.NODE_ENV === 'development') {
      return [];
    }
    throw error;
  }
}

/**
 * 특정 포스트 가져오기 (ID로)
 */
export async function getPostById(postId: string): Promise<Post | null> {
  try {
    // Firestore 연결 상태 확인
    if (!isFirestoreAvailable()) {
      console.log('🏗️ Firestore 연결 불가능, null 반환');
      return null;
    }

    console.log('📖 포스트 상세 조회 시작, ID:', postId);
    
    const docRef = doc(db, 'posts', postId);
    const docSnap = await getDoc(docRef);
    
    if (docSnap.exists()) {
      const data = docSnap.data();
      const post = {
        id: docSnap.id,
        ...data,
        // stats 기본값 보장
        stats: data.stats || {
          views: 0,
          likes: 0,
          comments: 0
        }
      } as Post;
      
      // 해당 블로그의 포스트인지 확인
      if (post.blogId === BLOG_ID && post.status === 'published') {
        console.log('✅ 포스트 상세 조회 완료:', post.title);
        return post;
      } else {
        console.log('❌ 접근 권한 없는 포스트:', post.blogId, post.status);
        return null;
      }
    }
    
    console.log('❌ 포스트를 찾을 수 없음:', postId);
    return null;
  } catch (error) {
    console.error('❌ 포스트 상세 조회 실패:', error);
    throw error;
  }
}

/**
 * 특정 포스트 가져오기 (슬러그로)
 */
export async function getPostBySlug(slug: string): Promise<Post | null> {
  try {
    // Firestore 연결 상태 확인
    if (!isFirestoreAvailable()) {
      console.log('🏗️ Firestore 연결 불가능, null 반환');
      return null;
    }

    console.log('📖 포스트 슬러그 조회 시작:', slug);
    
    const q = query(
      collection(db, 'posts'),
      where('blogId', '==', BLOG_ID),
      where('status', '==', 'published'),
      where('slug', '==', slug)
    );
    
    const querySnapshot = await getDocs(q);
    
    if (!querySnapshot.empty) {
      const doc = querySnapshot.docs[0];
      const data = doc.data();
      const post = {
        id: doc.id,
        ...data,
        // stats 기본값 보장
        stats: data.stats || {
          views: 0,
          likes: 0,
          comments: 0
        }
      } as Post;
      
      console.log('✅ 포스트 슬러그 조회 완료:', post.title);
      return post;
    }
    
    console.log('❌ 슬러그를 찾을 수 없음:', slug);
    return null;
  } catch (error) {
    console.error('❌ 포스트 슬러그 조회 실패:', error);
    throw error;
  }
}

/**
 * 카테고리별 포스트 가져오기
 */
export async function getPostsByCategory(category: string): Promise<Post[]> {
  try {
    // Firestore 연결 상태 확인
    if (!isFirestoreAvailable()) {
      console.log('🏗️ Firestore 연결 불가능, 빈 배열 반환');
      return [];
    }

    console.log('📖 카테고리별 포스트 조회 시작:', category);
    
    const q = query(
      collection(db, 'posts'),
      where('blogId', '==', BLOG_ID),
      where('status', '==', 'published'),
      where('category', '==', category)
    );
    
    const querySnapshot = await getDocs(q);
    const posts: Post[] = [];
    
    querySnapshot.forEach((doc) => {
      const data = doc.data();
      posts.push({
        id: doc.id,
        ...data,
        // stats 기본값 보장
        stats: data.stats || {
          views: 0,
          likes: 0,
          comments: 0
        }
      } as Post);
    });
    
    // 클라이언트 사이드에서 정렬 (publishedAt 기준 내림차순)
    posts.sort((a, b) => {
      if (!a.publishedAt || !b.publishedAt) return 0;
      return b.publishedAt.seconds - a.publishedAt.seconds;
    });
    
    console.log('✅ 카테고리별 포스트 조회 완료:', posts.length, '개');
    return posts;
  } catch (error) {
    console.error('❌ 카테고리별 포스트 조회 실패:', error);
    throw error;
  }
}

/**
 * 최근 포스트 가져오기
 */
export async function getRecentPosts(maxResults: number = 5): Promise<Post[]> {
  try {
    const posts = await getPosts(maxResults);
    return posts;
  } catch (error) {
    console.error('❌ 최근 포스트 조회 실패:', error);
    throw error;
  }
}