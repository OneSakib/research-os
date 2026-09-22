import Sidebar from "./Sidebar";
import Topbar from "./Topbar";

export default function AppShell({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen bg-[#07090d]">
      <Sidebar />
      <div className="min-w-0 flex-1">
        <Topbar />
        <main className="min-w-0">{children}</main>
      </div>
    </div>
  );
}