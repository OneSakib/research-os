import Link from "next/link";
import { ArrowRight, Github, Mail } from "lucide-react";
import { Logo } from "@/components/Logo";

export default function Login() {
  return (
    <main className="grid min-h-screen lg:grid-cols-2">
      <section className="hidden lg:flex grid-bg flex-col justify-between border-r border-[#202733] p-12">
        <Logo />
        <div className="max-w-xl">
          <p className="mb-4 text-sm font-medium text-violet-400">MULTI-AGENT RESEARCH</p>
          <h1 className="text-5xl font-semibold leading-[1.05] tracking-tight">Research deeper.<br/>Write smarter.</h1>
          <p className="mt-6 max-w-lg text-base leading-7 text-zinc-400">Coordinate web, papers and GitHub researchers, fact-check evidence and generate professional reports from one workspace.</p>
        </div>
        <p className="text-xs text-zinc-600">© 2026 ResearchOS</p>
      </section>
      <section className="flex items-center justify-center px-5 py-12">
        <div className="w-full max-w-[410px]">
          <div className="mb-8 lg:hidden"><Logo /></div>
          <p className="text-sm text-zinc-500">Welcome back</p>
          <h2 className="mt-1 text-3xl font-semibold">Sign in to ResearchOS</h2>
          <p className="mt-2 text-sm text-zinc-500">Continue to your research workspace.</p>
          <div className="mt-8 space-y-3">
            <button className="flex w-full items-center justify-center gap-2 rounded-xl border border-[#2a313d] bg-[#0d1118] py-3 text-sm hover:bg-[#111722]"><Github size={17}/> Continue with GitHub</button>
            <button className="flex w-full items-center justify-center gap-2 rounded-xl border border-[#2a313d] bg-[#0d1118] py-3 text-sm hover:bg-[#111722]"><Mail size={17}/> Continue with Google</button>
          </div>
          <div className="my-7 flex items-center gap-3 text-xs text-zinc-600"><span className="h-px flex-1 bg-[#202733]"/>OR<span className="h-px flex-1 bg-[#202733]"/></div>
          <form action="/dashboard" className="space-y-4">
            <Field label="Email" type="email" placeholder="you@example.com"/>
            <Field label="Password" type="password" placeholder="••••••••"/>
            <button className="flex w-full items-center justify-center gap-2 rounded-xl bg-white py-3 text-sm font-semibold text-black hover:bg-zinc-200">Sign in <ArrowRight size={16}/></button>
          </form>
          <p className="mt-6 text-center text-sm text-zinc-500">Don't have an account? <Link href="/register" className="text-white hover:underline">Create one</Link></p>
        </div>
      </section>
    </main>
  );
}
function Field({label,type,placeholder}:{label:string,type:string,placeholder:string}) {
  return <label className="block"><span className="mb-2 block text-xs font-medium text-zinc-400">{label}</span><input type={type} placeholder={placeholder} className="w-full rounded-xl border border-[#2a313d] bg-[#0d1118] px-4 py-3 text-sm outline-none placeholder:text-zinc-700 focus:border-violet-500"/></label>
}