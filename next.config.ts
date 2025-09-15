import type { NextConfig } from "next";
import path from "node:path";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
      {
        protocol: 'http',
        hostname: '**',
      },
    ],
  },
  // Vercel 환경에서는 outputFileTracingRoot 제거
  ...(process.env.VERCEL_ENV ? {} : {
    outputFileTracingRoot: path.resolve(__dirname, '../../'),
  }),
  // Vercel 환경에서는 turbopack 설정 제거
  ...(process.env.VERCEL_ENV ? {} : {
    turbopack: {
      rules: {
        "*.{jsx,tsx}": {
          loaders: [path.resolve(__dirname, 'src/visual-edits/component-tagger-loader.js')]
        }
      }
    }
  }),
  // 정적 내보내기 최적화
  trailingSlash: false,
  generateBuildId: async () => {
    return 'build-' + Date.now();
  },
};

export default nextConfig;
