// next.config.ts
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // 🟢 Unsplash 이미지 도메인 허용 설정
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "via.placeholder.com", // 이것도 가끔 쓰니까 추가
      },
    ],
  },
};

export default nextConfig;
