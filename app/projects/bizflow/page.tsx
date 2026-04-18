import Navbar from "../../../components/Navbar";

export default function Page() {
  return (
    <div>
      <Navbar />

      <div className="flex">
        <aside className="w-64 bg-white border-r min-h-screen p-4">
          <div className="font-bold mb-4">BizFlow</div>
          <div className="space-y-2 text-sm">
            <div>Dashboard</div>
            <div>Projects</div>
            <div>Templates</div>
          </div>
        </aside>

        <main className="p-8 flex-1">
          <h1 className="text-2xl font-bold mb-6">
            BizFlow Dashboard
          </h1>

          <div className="grid grid-cols-3 gap-4">
            <div className="bg-white p-4 shadow rounded-xl">
              Projects: 12
            </div>
            <div className="bg-white p-4 shadow rounded-xl">
              Users: 48
            </div>
            <div className="bg-white p-4 shadow rounded-xl">
              Deploys: 21
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}