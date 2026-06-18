import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="flex items-center justify-between py-6 px-8 max-w-7xl mx-auto w-full absolute top-0 left-0 right-0 z-50">
      <div className="flex items-center">
        <Link href="/">
          <Image src="/logo.png" alt="Powfolio" width={48} height={48} className="object-contain" />
        </Link>
      </div>
      
      <div className="hidden md:flex items-center space-x-8">
        <Link href="#features" className="text-slate-900 hover:text-primary transition-colors text-[15px] font-nunito font-semibold leading-none px-6">Features</Link>
        <Link href="#how-it-works" className="text-slate-900 hover:text-primary transition-colors text-[15px] font-nunito font-semibold leading-none px-6">How it works</Link>
        <Link href="#pricing" className="text-slate-900 hover:text-primary transition-colors text-[15px] font-nunito font-semibold leading-none px-6">Pricing</Link>
        <Link href="#connect" className="text-slate-900 hover:text-primary transition-colors text-[15px] font-nunito font-semibold leading-none px-6">Connect</Link>
      </div>

      <div className="flex items-center">
        {/* SIGNUP  */}
        <Link href="/login" className="text-slate-900 hover:text-primary transition-colors text-[18px] font-nunito font-semibold leading-none mr-6">Signup</Link>
        {/* LOGIN */}
        <Link href="/login" className="bg-primary text-white px-6 py-2 rounded-full font-nunito font-semibold text-[18px] leading-none hover:bg-primary/90 transition-colors shadow-sm">
          Login
        </Link>
      </div>
    </nav>
  );
}
