"use client"

import { useState } from "react"
import { motion, useScroll, useMotionValueEvent, AnimatePresence } from "framer-motion"
import { ShoppingBag, Search, Menu, X } from "lucide-react"

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const { scrollY } = useScroll()

  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsScrolled(latest > 50)
  })

  return (
    <>
      <motion.header
        className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-300 ${
          isScrolled ? "bg-black/80 backdrop-blur-md py-4" : "bg-transparent py-6"
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="container mx-auto px-6 flex items-center justify-between">
          <div className="flex items-center gap-2 z-50">
            <div className="w-10 h-10 bg-[#ccff00] text-black rounded-sm flex items-center justify-center font-black text-xl italic skew-x-[-10deg]">
              O
            </div>
            <span className="text-xl font-bold tracking-tighter uppercase italic">OMAHA SOCCER</span>
          </div>
          
          <nav className="hidden md:flex items-center gap-8">
            {["Shop", "Training", "Lifestyle", "Team"].map((item) => (
              <a
                key={item}
                href="#"
                className="text-sm font-bold uppercase tracking-widest hover:text-[#ccff00] transition-colors"
              >
                {item}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-4">
            <Search className="w-5 h-5 hover:text-[#ccff00] transition-colors cursor-pointer hidden md:block" />
            <div className="relative hidden md:block">
              <ShoppingBag className="w-5 h-5 hover:text-[#ccff00] transition-colors cursor-pointer" />
              <span className="absolute -top-2 -right-2 w-4 h-4 bg-[#ccff00] text-black text-[10px] font-bold flex items-center justify-center rounded-full">
                2
              </span>
            </div>
            <button onClick={() => setIsMobileMenuOpen(true)} className="md:hidden text-white">
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>
      </motion.header>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "tween", duration: 0.3 }}
            className="fixed inset-0 z-[60] bg-black flex flex-col p-8"
          >
            <div className="flex justify-end mb-12">
              <button onClick={() => setIsMobileMenuOpen(false)}>
                <X className="w-8 h-8 text-white hover:text-[#ccff00]" />
              </button>
            </div>
            <nav className="flex flex-col gap-8">
              {["Shop", "Training", "Lifestyle", "Team", "Account"].map((item, i) => (
                <motion.a
                  key={item}
                  href="#"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className="text-4xl font-black uppercase italic hover:text-[#ccff00] transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item}
                </motion.a>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
