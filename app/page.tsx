import Link from "next/link";
import Navbar from "../components/Navbar";

export default function Page() {
  const projects = [
    {
      id: "bizflow",
      title: "BizFlow Studio",
      desc: "B端系统搭建平台"
    },
    {
      id: "dashboard",
      title: "Dashboard Kit",
      desc: "企业级后台模板"
    },
    {
      id: "landing",
      title: "Landing Kit",
      desc: "营销落地页系统"
    }
  ];

  return (
    <div>
      <Navbar />

      <div className="max-w-5xl mx-auto p-10">
        <h1 className="text-3xl font-bold mb-6">
          Product System
        </h1>

        <div className="grid gap-4">
          {projects.map(p => (
            <Link key={p.id} href={`/projects/${p.id}`}>
              <div className="bg-white p-5 rounded-xl shadow hover:shadow-lg transition">
                <div className="font-semibold">{p.title}</div>
                <div className="text-gray-500 text-sm">{p.desc}</div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}