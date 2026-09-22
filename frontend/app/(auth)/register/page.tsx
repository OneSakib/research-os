import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Logo } from "@/components/Logo";

export default function Register() {
  return (
    <main className="flex min-h-screen items-center justify-center px-5 py-10">
      <div className="w-full max-w-[440px]">
        <div className="mb-10 flex justify-center"><Logo /></div>
        <div className="rounded-2xl border border-[#202733] bg-[#0d1118] p-6 shadow-2xl shadow-black/20 sm:p-8">
          <h1 className="text-2xl font-semibold">Create your workspace</h1>
          <p className="mt-2 text-sm text-zinc-500">Start researching with your multi-agent team.</p>
          <form action="/dashboard" className="mt-7 space-y-4">
            <Field label="Full name" placeholder="Sakib Malik"/>
            <Field label="Work email" placeholder="you@example.com" type="email"/>
            <Field label="Password" placeholder="Minimum 8 characters" type="password"/>
            <label className="flex gap-2 text-xs leading-5 text-zinc-500"><input type="checkbox" className="mt-1 accent-violet-500"/> I agree to the Terms and Privacy Policy.</label>
            <button className="flex w-full items-center justify-center gap-2 rounded-xl bg-white py-3 text-sm font-semibold text-black hover:bg-zinc-200">Create account <ArrowRight size={16}/></button>
          </form>
          <p className="mt-6 text-center text-sm text-zinc-500">Already have an account? <Link href="/login" className="text-white hover:underline">Sign in</Link></p>
        </div>
      </div>
    </main>
  );
}
function Field({label,placeholder,type="text"}:{label:string,placeholder:string,type?:string}) {
 return <label className="block"><span className="mb-2 block text-xs font-medium text-zinc-400">{label}</span><input type={type} placeholder={placeholder} className="w-full rounded-xl border border-[#2a313d] bg-[#080b10] px-4 py-3 text-sm outline-none placeholder:text-zinc-700 focus:border-violet-500"/></label>
}