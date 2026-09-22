import Link from "next/link";
import { ArrowUpRight, Clock3, FileText, Search, Sparkles, TrendingUp, Zap } from "lucide-react";
import AppShell from "@/components/AppShell";

const recent = [
  ["AI Agent Frameworks — 2026", "Completed", "12 min ago", "42.8K"],
  ["RAG evaluation techniques", "Completed", "Yesterday", "31.2K"],
  ["MCP ecosystem landscape", "In progress", "2 days ago", "18.7K"],
];

export default function Dashboard() {
  return <AppShell><div className="mx-auto max-w-[1400px] px-4 py-6 sm:px-6 lg:px-8">
    <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
      <div><p className="text-sm text-zinc-500">Tuesday, September 22</p><h1 className="mt-1 text-2xl font-semibold tracking-tight sm:text-3xl">Good evening, Sakib</h1><p className="mt-2 text-sm text-zinc-500">What would you like your research team to investigate?</p></div>
      <Link href="/research/new" className="inline-flex items-center justify-center gap-2 rounded-xl bg-white px-4 py-2.5 text-sm font-semibold text-black"><Sparkles size={16}/> New research</Link>
    </div>
    <div className="mt-7 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
      <Stat title="Research runs" value="24" delta="+18%" icon={<Search/>}/>
      <Stat title="Reports generated" value="17" delta="+12%" icon={<FileText/>}/>
      <Stat title="Tokens used" value="680K" delta="68% of limit" icon={<Zap/>}/>
      <Stat title="Avg. research time" value="8m 42s" delta="-21%" icon={<Clock3/>}/>
    </div>
    <div className="mt-7 grid gap-5 xl:grid-cols-[1fr_360px]">
      <section className="rounded-2xl border border-[#202733] bg-[#0d1118]">
        <div className="flex items-center justify-between border-b border-[#202733] p-5"><div><h2 className="font-semibold">Recent research</h2><p className="mt-1 text-xs text-zinc-500">Your latest multi-agent runs</p></div><Link href="/reports/demo" className="text-xs text-zinc-400 hover:text-white">View all</Link></div>
        <div>{recent.map((r,i)=><Link href="/reports/demo" key={i} className="flex items-center justify-between gap-4 border-b border-[#1b212b] px-5 py-4 last:border-0 hover:bg-[#10151e]"><div className="min-w-0"><p className="truncate text-sm font-medium">{r[0]}</p><div className="mt-1 flex items-center gap-2 text-xs text-zinc-500"><span className={`rounded-full px-2 py-0.5 ${r[1]==="Completed"?"bg-emerald-500/10 text-emerald-400":"bg-amber-500/10 text-amber-400"}`}>{r[1]}</span><span>•</span><span>{r[2]}</span></div></div><span className="shrink-0 text-xs text-zinc-500">{r[3]} tok</span></Link>)}</div>
      </section>
      <section className="rounded-2xl border border-[#202733] bg-[#0d1118] p-5"><h2 className="font-semibold">Token usage</h2><p className="mt-1 text-xs text-zinc-500">Current billing period</p><div className="mt-6 flex items-end justify-between"><div><span className="text-3xl font-semibold">680K</span><span className="ml-2 text-xs text-zinc-500">/ 1M</span></div><span className="text-xs text-violet-400">68%</span></div><div className="mt-3 h-2 rounded-full bg-zinc-800"><div className="h-full w-[68%] rounded-full bg-gradient-to-r from-violet-500 to-indigo-500"/></div><div className="mt-5 space-y-3 text-xs"><Usage label="Input tokens" value="421K" percent="62%"/><Usage label="Output tokens" value="259K" percent="38%"/></div></section>
    </div>
    <section className="mt-5 rounded-2xl border border-[#202733] bg-gradient-to-br from-[#111421] to-[#0d1118] p-6"><div className="max-w-2xl"><div className="flex h-9 w-9 items-center justify-center rounded-xl bg-violet-500/10 text-violet-400"><TrendingUp size={18}/></div><h2 className="mt-4 text-xl font-semibold">Build an evidence-backed report</h2><p className="mt-2 text-sm leading-6 text-zinc-500">Give the supervisor a question. It will coordinate web, papers and GitHub agents, verify evidence and turn the findings into a polished report.</p><Link href="/research/new" className="mt-5 inline-flex items-center gap-2 rounded-lg border border-[#343b49] px-3 py-2 text-xs font-medium hover:bg-white hover:text-black">Start a research run <ArrowUpRight size={14}/></Link></div></section>
  </div></AppShell>
}
function Stat({title,value,delta,icon}:{title:string,value:string,delta:string,icon:React.ReactNode}) { return <div className="rounded-2xl border border-[#202733] bg-[#0d1118] p-5"><div className="flex items-center justify-between"><span className="text-xs text-zinc-500">{title}</span><span className="text-zinc-500">{icon}</span></div><div className="mt-3 text-2xl font-semibold">{value}</div><p className="mt-1 text-xs text-emerald-400">{delta}</p></div> }
function Usage({label,value,percent}:{label:string,value:string,percent:string}) { return <div className="flex items-center justify-between"><span className="text-zinc-500">{label}</span><span className="text-zinc-300">{value} <span className="text-zinc-600">({percent})</span></span></div> }