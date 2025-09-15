import type { Metadata } from "next";
import "./globals.css";
import ErrorReporter from "@/components/ErrorReporter";

export const metadata: Metadata = {
  title: {
    template: '%s | MMT Blog',
    default: 'MMT Blog - 전문가의 통찰과 분석',
  },
  description: '금융, 투자, 경제에 대한 전문가의 깊이 있는 분석과 통찰을 제공하는 MMT Blog입니다.',
  keywords: 'MMT, 금융, 투자, 경제, 블로그, 분석, 통찰, FX, 외환',
  authors: [{ name: 'MMT Blog Team' }],
  creator: 'MMT Blog',
  publisher: 'MMT Blog',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://localhost:3000'),
  openGraph: {
    type: 'website',
    locale: 'ko_KR',
    siteName: 'MMT Blog',
  },
  twitter: {
    card: 'summary_large_image',
    creator: '@mmtblog',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body className="antialiased">
        <ErrorReporter />
        {children}
      </body>
    </html>
  );
}
