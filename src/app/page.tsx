import { Metadata } from 'next';
import Layout from "@/components/Layout";
import BlogList from "@/components/BlogList";
import Sidebar from "@/components/Sidebar";

// 동적 렌더링 강제로 빌드 시 Firestore 접근 방지
export const dynamic = 'force-dynamic';

export const metadata: Metadata = {
  title: 'MMT Blog - 전문가의 통찰과 분석',
  description: '금융, 투자, 경제에 대한 전문가의 깊이 있는 분석과 통찰을 제공하는 MMT Blog입니다.',
  keywords: 'MMT, 금융, 투자, 경제, 블로그, 분석, 통찰',
  openGraph: {
    title: 'MMT Blog - 전문가의 통찰과 분석',
    description: '금융, 투자, 경제에 대한 전문가의 깊이 있는 분석과 통찰을 제공하는 MMT Blog입니다.',
    type: 'website',
    locale: 'ko_KR',
    siteName: 'MMT Blog',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'MMT Blog - 전문가의 통찰과 분석',
    description: '금융, 투자, 경제에 대한 전문가의 깊이 있는 분석과 통찰을 제공하는 MMT Blog입니다.',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
    other: {
      'naver-site-verification': 'your-naver-verification-code',
    },
  },
};

export default function HomePage() {
  return (
    <Layout>
      <div className="container max-w-6xl mx-auto px-6 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Main Content Area - 8 columns on large screens */}
          <main className="lg:col-span-8">
            <BlogList className="w-full" />
          </main>

          {/* Sidebar - 4 columns on large screens, stacked below on mobile */}
          <aside className="lg:col-span-4">
            <div className="lg:sticky lg:top-8">
              <Sidebar />
            </div>
          </aside>
        </div>
      </div>
    </Layout>
  );
}