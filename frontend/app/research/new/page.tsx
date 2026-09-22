 "use client";
import { useState } from "react";
import { ArrowLeft, ArrowUp, Check, ChevronDown, FileText, Github, Globe, Library, Paperclip, Plus, Settings2, Sparkles, Users } from "lucide-react";
import Link from "next/link";
import AppShell from "@/components/AppShell";

const agents = [
  {name:"Web Researcher", icon:<Globe size={16}/>, desc:"Search current web sources"},
  {name:"Paper Researcher", icon:<Library size={16}/>, desc:"Find academic evidence"},
  {name:"GitHub Researcher", icon:<Github size={16}/>, desc:"Analyze repos and adoption"},
  {name:"Fact Checker", icon:<Check size={16}/>, desc:"Validate claims and sources"},
  {name:"Synthesizer", icon:<Sparkles size={16}/>, desc:"Connect findings across agents"},
];

export default function NewResearch() {
  const [query,setQuery] = useState("");
  const [started,setStarted] = useState(false);
  const [depth,setDepth] = useState("Deep research");

  if (started) return <ResearchRunning query={query}/>;

  return <AppShell><div className="mx-auto flex min-h-[calc(100vh-64px)] max-w-[1050px] flex-col px-4 py-7 sm:px-6">
    <Link href="/dashboard" className="mb-8 flex w-fit items-center gap-2 text-xs text-zinc-500 hover:text-white"><ArrowLeft size={14}/> Back to dashboard</Link>
    <div className="text-center"><div className="mx-auto flex h-12 w-12 items-center justify-center rounded-2xl bg-violet-500/10 text-violet-400"><Sparkles/></div><h1 className="mt-5 text-3xl font-semibold tracking-tight sm:text-4xl">What should we research?</h1><p className="mx-auto mt-3 max-w-xl text-sm leading-6 text-zinc-500">Your AI research team will search the web, papers and GitHub, verify evidence, then write the final report.</p></div>
    <div className="mt-9 rounded-2xl border border-[#2b3240] bg-[#0d1118] p-3 shadow-2xl shadow-black/20"><textarea value={query} onChange={e=>setQuery(e.target.value)} rows={5} placeholder="Example: Research the latest AI agent frameworks and compare LangGraph, CrewAI, AutoGen and OpenAI Agents." className="w-full resize-none bg-transparent p-3 text-sm leading-6 outline-none placeholder:text-zinc-700"/><div className="flex flex-wrap items-center justify-between gap-3 border-t border-[#202733] pt-3"><div className="flex items-center gap-1"><button className="rounded-lg p-2 text-zinc-500 hover:bg-[#161c25] hover:text-white"><Paperclip size={17}/></button><button className="rounded-lg p-2 text-zinc-500 hover:bg-[#161c25] hover:text-white"><Settings2 size={17}/></button><select value={depth} onChange={e=>setDepth(e.target.value)} className="rounded-lg bg-[#111722] px-2.5 py-2 text-xs text-zinc-400 outline-none"><option>Quick research</option><option>Deep research</option><option>Maximum depth</option></select></div><button onClick={()=>setStarted(true)} disabled={!query.trim()} className="flex items-center gap-2 rounded-xl bg-white px-4 py-2.5 text-xs font-semibold text-black disabled:cursor-not-allowed disabled:opacity-30">Start research <ArrowUp size={15}/></button></div></div>
    <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">{agents.map(a=><div key={a.name} className="rounded-xl border border-[#202733] bg-[#0b0f15] p-4"><div className="flex items-center gap-2 text-sm font-medium">{a.icon}{a.name}</div><p className="mt-2 text-xs text-zinc-500">{a.desc}</p></div>)}</div>
    <div className="mt-6 flex flex-wrap items-center justify-center gap-5 text-[11px] text-zinc-600"><span className="flex items-center gap-1"><Users size={13}/> Parallel agents</span><span>•</span><span>Checkpointed</span><span>•</span><span>Human approval</span><span>•</span><span>PDF output</span></div>
  </div></AppShell>
}

function ResearchRunning({query}:{query:string}) {
 const stages = ["Supervisor","Web Researcher","Paper Researcher","GitHub Researcher","Fact Checker","Synthesizer","Report Writer"];
 return <AppShell><div className="mx-auto max-w-[1100px] px-4 py-7 sm:px-6">
  <div className="flex flex-col justify-between gap-3 sm:flex-row sm:items-center"><div><p className="text-xs text-violet-400">RESEARCH RUN #R-1048</p><h1 className="mt-1 text-xl font-semibold">{query}</h1></div><span className="rounded-full bg-amber-500/10 px-3 py-1.5 text-xs text-amber-400">Running</span></div>
  <div className="mt-7 grid gap-5 lg:grid-cols-[1fr_330px]">
   <div className="rounded-2xl border border-[#202733] bg-[#0d1118] p-5"><div className="flex items-center justify-between"><h2 className="font-semibold">Agent workflow</h2><span className="text-xs text-zinc-500">2m 14s</span></div><div className="mt-6 space-y-3">{stages.map((s,i)=><div key={s} className="flex items-center gap-3 rounded-xl border border-[#202733] bg-[#0a0e14] p-3"><div className={`flex h-8 w-8 items-center justify-center rounded-lg text-xs ${i<4?"bg-emerald-500/10 text-emerald-400":i===4?"bg-amber-500/10 text-amber-400":"bg-zinc-800 text-zinc-500"}`}>{i<4?"✓":i===4?"…":i+1}</div><div className="flex-1"><p className="text-sm font-medium">{s}</p><p className="text-[11px] text-zinc-600">{i<4?"Completed":"Waiting for upstream results"}</p></div>{i<4&&<span className="text-[11px] text-emerald-400">Done</span>}</div>)}</div></div>
   <div className="space-y-5"><div className="rounded-2xl border border-[#202733] bg-[#0d1118] p-5"><h2 className="font-semibold">Live usage</h2><div className="mt-5 text-3xl font-semibold">24,816</div><p className="mt-1 text-xs text-zinc-500">tokens used so far</p><div className="mt-5 h-2 rounded-full bg-zinc-800"><div className="h-full w-[24%] rounded-full bg-violet-500"/></div><div className="mt-3 flex justify-between text-[11px] text-zinc-600"><span>Input 15.4K</span><span>Output 9.4K</span></div></div><div className="rounded-2xl border border-[#202733] bg-[#0d1118] p-5"><h2 className="font-semibold">Research state</h2><div className="mt-4 space-y-3 text-xs"><Row k="Sources found" v="87"/><Row k="Claims extracted" v="143"/><Row k="Sources verified" v="61"/><Row k="Checkpoint" v="3 saved"/></div></div></div>
  </div>
 </div></AppShell>
}
function Row({k,v}:{k:string,v:string}){return <div className="flex justify-between"><span className="text-zinc-500">{k}</span><span>{v}</span></div>}