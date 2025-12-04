"use client"

import { motion } from "framer-motion"

export default function Marquee() {
  return (
    <div className="bg-[#ccff00] text-black py-4 overflow-hidden whitespace-nowrap border-y-4 border-black">
      <motion.div
        className="flex items-center gap-8 text-4xl md:text-6xl font-black italic uppercase tracking-tighter"
        animate={{ x: "-50%" }}
        transition={{ repeat: Infinity, ease: "linear", duration: 20 }}
      >
        {[...Array(10)].map((_, i) => (
          <span key={i} className="flex items-center gap-8">
            OMAHA SOCCER <span className="text-white [-webkit-text-stroke:1px_black]">///</span> PREMIUM GEAR <span className="text-white">///</span>
          </span>
        ))}
      </motion.div>
    </div>
  )
}
