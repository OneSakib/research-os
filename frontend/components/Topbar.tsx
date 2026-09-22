import { Bell, Menu, UserRound } from "lucide-react";
import { Logo } from "./Logo";

export default function Topbar() {
  return (
    <header className="flex h-16 items-center justify-between border-b border-[#202733] bg-[#080b10]/80 px-4 backdrop-blur md:px-6">
      <div className="md:hidden"><Logo compact /></div>
      <div className="hidden md:block">
        <p className="text-xs text-zinc-500">Workspace</p>
        <p className="text-sm font-medium">Personal Research Lab</p>
      </div>
      <div className="flex items-center gap-2">
        <button className="hidden rounded-lg border border-[#252c38] px-3 py-2 text-xs text-zinc-300 sm:flex sm:items-center sm:gap-2">
          <span className="h-2 w-2 rounded-full bg-emerald-400" /> API connected
        </button>
        <button className="rounded-lg p-2 text-zinc-400 hover:bg-[#111722] hover:text-white"><Bell size={18}/></button>
        <div className="flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-br from-zinc-600 to-zinc-800 text-xs font-semibold">SM</div>
      </div>
    </header>
  );
}