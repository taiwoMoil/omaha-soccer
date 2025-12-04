"use client"

import { useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import { Play } from "lucide-react"
import Image from "next/image"
import { Button } from "@/components/ui/button"

export default function Hero() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  })

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"])
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0])
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.1])

  return (
    <section ref={ref} className="relative h-screen w-full overflow-hidden">
      <motion.div style={{ y, scale, opacity }} className="absolute inset-0 z-0">
        <Image
          src="/Image.jpeg"
          alt="Hero"
          fill
          className="object-cover opacity-60"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/30" />
      </motion.div>

      <div className="relative z-10 h-full flex flex-col justify-center items-start container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h2 className="text-[#ccff00] text-lg font-bold tracking-[0.3em] uppercase mb-4 flex items-center gap-4">
            <span className="w-12 h-[2px] bg-[#ccff00]" />
            Est. 2025
          </h2>
          <h1 className="text-7xl md:text-9xl font-black tracking-tighter uppercase leading-[0.9] italic mb-8">
            Play <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-500">
              Fast.
            </span>
          </h1>
          <div className="flex flex-wrap gap-4">
            <Button className="bg-[#ccff00] text-black hover:bg-white hover:text-black font-bold text-lg px-8 py-6 rounded-none uppercase skew-x-[-10deg] transition-all hover:skew-x-0">
              Shop Collection
            </Button>
            <Button variant="outline" className="border-white text-black hover:bg-white hover:text-black font-bold text-lg px-8 py-6 rounded-none uppercase skew-x-[-10deg] transition-all hover:skew-x-0">
              Watch Film <Play className="w-4 h-4 ml-2 fill-current" />
            </Button>
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 1.5 }}
      >
        <span className="text-[10px] uppercase tracking-[0.3em] text-gray-400">Scroll</span>
        <div className="w-[1px] h-12 bg-gradient-to-b from-[#ccff00] to-transparent" />
      </motion.div>
    </section>
  )
}
