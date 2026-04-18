import Link from "next/link";
import Navbar from "../components/Navbar";

const projects = [
  {
    id: "bizflow",
    title: "BizFlow Studio",
    desc: "B端系统快速搭建平台｜设计驱动低代码生成器",
    tags: ["B2B", "Low-code", "System Builder"],
  },
  {
    id: "dashboard",
    title: "Dashboard Kit",
    desc: "企业级后台系统模板｜数据可视化 + 管理系统UI",
    tags: ["Admin", "Analytics", "Enterprise UI"],
  },
  {
    id: "landing",
    title: "Landing Kit",
    desc: "高转化营销落地页系统｜SaaS产品官网模板",
    tags: ["Marketing", "SaaS", "Conversion"],
  },
];

export default function Page() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />

      <div className="max-w-6xl mx-auto px-6 py-12">
        <h1 className="text-4xl font-bold mb-2">
          Design → Code Product System
        </h1>

        <p className="text-gray-500 mb-10">
          B端设计系统 + vibe coding 产品化展示平台
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {projects.map((p) => (
            <Link key={p.id} href={`/projects/${p.id}`}>
              <div className="p-6 bg-white rounded-xl shadow hover:shadow-lg transition cursor-pointer">
                <h2 className="text-xl font-semibold mb-2">
                  {p.title}
                </h2>

                <p className="text-gray-600 text-sm mb-4">
                  {p.desc}
                </p>

                <div className="flex flex-wrap gap-2">
                  {p.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs bg-gray-100 px-2 py-1 rounded border"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="mt-4 text-blue-600 text-sm">
                  Open Project →
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
