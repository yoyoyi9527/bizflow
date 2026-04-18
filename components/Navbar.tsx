import Link from "next/link";

export default function Navbar() {
  return (
    <div className="border-b bg-white px-6 py-4 flex gap-6">
      <Link href="/" className="font-bold">
        BizFlow Studio
      </Link>

      <Link href="/projects/bizflow">BizFlow</Link>
      <Link href="/projects/dashboard">Dashboard</Link>
      <Link href="/projects/landing">Landing</Link>
    </div>
  );
}