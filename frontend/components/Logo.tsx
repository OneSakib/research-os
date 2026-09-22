import { Sparkles } from "lucide-react";

export function Logo({ compact = false }: { compact?: boolean }) {
  return (
    <div className="flex items-center gap-2.5">
      <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-violet-500 to-indigo-600 shadow-lg shadow-violet-950/30">
        <Sparkles size={18} />
      </div>
      {!compact && <span className="text-[15px] font-semibold tracking-tight">ResearchOS</span>}
    </div>
  );
}