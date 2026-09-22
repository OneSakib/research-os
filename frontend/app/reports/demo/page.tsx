import AppShell from "@/components/AppShell";
import { Download, ExternalLink, FileText, Share2, CheckCircle2, Clock3, Search, ChevronRight } from "lucide-react";

export default function Report() {
 return <AppShell><div className="mx-auto max-w-[1250px] px-4 py-6 sm:px-6 lg:px-8">
  <div className="flex flex-col gap-4 border-b border-[#202733] pb-6 md:flex-row md:items-center md:justify-between"><div><div className="flex items-center gap-2 text-xs text-zinc-500"><span>Reports</span><ChevronRight size={12}/><span>R-1047</span></div><h1 className="mt-2 text-2xl font-semibold">AI Agent Frameworks — 2026</h1><div className="mt-2 flex flex-wrap items-center gap-3 text-xs text-zinc-500"><span className="flex items-center gap-1 text-emerald-400"><CheckCircle2 size={13}/> Completed</span><span>•</span><span>Generated 12 min ago</span><span>•</span><span>42.8K tokens</span></div></div><div className="flex gap-2"><button className="flex items-center gap-2 rounded-lg border border-[#2a313d] px-3 py-2 text-xs hover:bg-[#111722]"><Share2 size={14}/> Share</button><button className="flex items-center gap-2 rounded-lg bg-white px-3 py-2 text-xs font-semibold text-black"><Download size={14}/> PDF</button></div></div>
  <div className="mt-6 grid gap-6 lg:grid-cols-[minmax(0,1fr)_310px]">
   <article className="rounded-2xl border border-[#202733] bg-[#0d1118] p-5 sm:p-8">
    <p className="text-xs font-semibold tracking-wider text-violet-400">EXECUTIVE SUMMARY</p>
    <h2 className="mt-3 text-2xl font-semibold">The current AI agent landscape is converging around graph-based orchestration, tool use and production observability.</h2>
    <p className="mt-4 text-sm leading-7 text-zinc-400">This report compares four agent frameworks across orchestration, state management, human-in-the-loop controls, ecosystem maturity, developer experience and production architecture. Evidence was gathered from official documentation, academic literature and public repositories.</p>
    <div className="my-8 h-px bg-[#202733]"/>
    <h3 className="text-lg font-semibold">Comparison</h3>
    <div className="mt-4 overflow-x-auto"><table className="w-full min-w-[650px] text-left text-xs"><thead><tr className="border-b border-[#2a313d] text-zinc-500"><th className="p-3">Capability</th><th className="p-3">LangGraph</th><th className="p-3">CrewAI</th><th className="p-3">AutoGen</th><th className="p-3">OpenAI Agents</th></tr></thead><tbody>{[["Stateful workflows","Strong","Medium","Strong","Strong"],["Multi-agent","Strong","Strong","Strong","Strong"],["Human-in-loop","Native","Supported","Supported","Supported"],["Graph orchestration","Native","—","—","—"],["Tool calling","Native","Native","Native","Native"]].map((r,i)=><tr key={i} className="border-b border-[#1d232d]"><td className="p-3 text-zinc-400">{r[0]}</td>{r.slice(1).map((x,j)=><td key={j} className="p-3">{x}</td>)}</tr>)}</tbody></table></div>
    <div className="my-8 h-px bg-[#202733]"/>
    <h3 className="text-lg font-semibold">Key findings</h3>
    <ul className="mt-4 space-y-3 text-sm leading-6 text-zinc-400">{["State and checkpointing become important as agent workflows move from demos to long-running production tasks.","Parallel specialist agents can reduce research latency while keeping domain-specific tools isolated.","A verification stage materially improves traceability by separating evidence collection from synthesis.","Human approval points are useful when the workflow is about to publish, spend resources or make an irreversible decision."].map(x=><li key={x} className="flex gap-3"><span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-violet-400"/>{x}</li>)}</ul>
   </article>
   <aside className="space-y-5">
    <div className="rounded-2xl border border-[#202733] bg-[#0d1118] p-5"><h3 className="font-semibold">Run details</h3><div className="mt-4 space-y-4"><Info icon={<Clock3/>} k="Duration" v="8m 42s"/><Info icon={<Search/>} k="Sources" v="87"/><Info icon={<FileText/>} k="Pages" v="26"/><Info icon={<CheckCircle2/>} k="Verified claims" v="61"/></div></div>
    <div className="rounded-2xl border border-[#202733] bg-[#0d1118] p-5"><h3 className="font-semibold">Sources</h3><div className="mt-3 space-y-2">{["LangGraph documentation","CrewAI documentation","AutoGen repository","OpenAI Agents SDK","Agentic AI survey paper"].map((x,i)=><div key={x} className="flex items-center justify-between rounded-lg bg-[#10151e] p-3 text-xs"><span className="text-zinc-400">{x}</span><ExternalLink size={13} className="text-zinc-600"/></div>)}</div></div>
   </aside>
  </div>
 </div></AppShell>
}
function Info({icon,k,v}:{icon:React.ReactNode,k:string,v:string}){return <div className="flex items-center gap-3"><span className="text-zinc-600">{icon}</span><div><p className="text-[11px] text-zinc-600">{k}</p><p className="mt-0.5 text-sm">{v}</p></div></div>}