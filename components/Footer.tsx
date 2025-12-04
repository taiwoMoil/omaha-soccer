"use client"

export default function Footer() {
  return (
    <footer className="bg-black text-white py-20 border-t border-white/10">
      <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8">
         <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-[#ccff00] text-black rounded-sm flex items-center justify-center font-black text-lg italic">
            O
          </div>
          <span className="text-lg font-bold tracking-tighter uppercase">OMAHA SOCCER</span>
        </div>
        <p className="text-gray-500 text-xs uppercase tracking-widest">
          © 2025 Omaha Soccer Store. All rights reserved.
        </p>
        <div className="flex gap-6">
          {["Instagram", "Twitter", "Youtube"].map(social => (
             <a key={social} href="#" className="text-gray-500 hover:text-[#ccff00] uppercase text-xs font-bold tracking-widest transition-colors">
               {social}
             </a>
          ))}
        </div>
      </div>
    </footer>
  )
}
