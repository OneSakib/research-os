import Link from "next/link";
import { FileText, LayoutDashboard, Plus, Settings, History, LogOut, UserRound, X } from "lucide-react";
import { Logo } from "./Logo";

export default function Sidebar({ mobile = false }: { mobile?: boolean }) {
  return (
    <aside className={`${mobile ? "w-full" : "hidden md:flex w-[248px]"} shrink-0 flex-col border-r border-[#202733] bg-[#090c12]`}>
      <div className="flex h-16 items-center px-5">
        <Logo />
      </div>
      <div className="px-3">
        <Link href="/research/new" className="flex items-center justify-center gap-2 rounded-xl bg-white px-4 py-2.5 text-sm font-semibold text-black transition hover:bg-zinc-200">
          <Plus size={17} /> New research
        </Link>
      </div>
      <nav className="mt-5 space-y-1 px-3 text-sm">
        <Nav href="/dashboard" icon={<LayoutDashboard size={17}/>} label="Overview" />
        <Nav href="/research/new" icon={<SparkleIcon />} label="Research" />
        <Nav href="/reports/demo" icon={<FileText size={17}/>} label="Reports" />
        <Nav href="#" icon={<History size={17}/>} label="History" />
      </nav>
      <div className="mt-auto border-t border-[#202733] p-3">
        <div className="mb-2 rounded-xl bg-[#10151e] p-3">
          <div className="flex items-center justify-between text-xs">
            <span className="text-zinc-400">Monthly tokens</span>
            <span className="font-semibold">68%</span>
          </div>
          <div className="mt-2 h-1.5 overflow-hidden rounded-full bg-zinc-800">
            <div className="h-full w-[68%] rounded-full bg-gradient-to-r from-violet-500 to-indigo-500" />
          </div>
          <p className="mt-2 text-[11px] text-zinc-500">680K / 1M tokens</p>
        </div>
        <Nav href="#" icon={<Settings size={17}/>} label="Settings" />
        <Nav href="/login" icon={<LogOut size={17}/>} label="Sign out" />
      </div>
    </aside>
  );
}

function Nav({ href, icon, label }: { href: string; icon: React.ReactNode; label: string }) {
  return <Link href={href} className="flex items-center gap-3 rounded-lg px-3 py-2.5 text-zinc-400 hover:bg-[#111722] hover:text-white">{icon}<span>{label}</span></Link>;
}
function SparkleIcon() { return <span className="text-violet-400">✦</span>; }