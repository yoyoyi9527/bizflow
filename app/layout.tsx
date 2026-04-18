import "./globals.css";
import type { Metadata } from "next"; // 增加类型定义

export const metadata: Metadata = {
  title: "个人作品集 | Bizflow",
  description: "系统经验设计师作品展示",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="zh">
      {/* 这里的 antialiased 会让你的字体看起来和设计稿一样细腻 */}
      <body className="antialiased">{children}</body>
    </html>
  );
}
