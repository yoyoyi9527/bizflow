export default function ProjectCard({
  title,
  desc,
}: {
  title: string;
  desc: string;
}) {
  return (
    <div className="p-6 bg-white rounded-xl shadow hover:shadow-lg transition cursor-pointer">
      <h2 className="text-xl font-semibold mb-2">{title}</h2>
      <p className="text-gray-500 text-sm">{desc}</p>
      <div className="mt-4 text-blue-500 text-sm">View Project →</div>
    </div>
  );
}
