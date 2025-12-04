"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import Image from "next/image"
import { Button } from "@/components/ui/button"

export default function TacticalBreakdown() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: false, margin: "-100px" })

  return (
    <section className="py-32 bg-black relative overflow-hidden" ref={ref}>
      {/* Tactical Board Background */}
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <svg className="w-full h-full" width="100%" height="100%">
          <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
            <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#333" strokeWidth="1" />
          </pattern>
          <rect width="100%" height="100%" fill="url(#grid)" />
          {/* Tactical Lines */}
          <motion.path
            d="M 0 100 Q 400 200 800 100 T 1600 100"
            stroke="#ccff00"
            strokeWidth="2"
            fill="none"
            strokeDasharray="10 10"
            initial={{ pathLength: 0 }}
            animate={isInView ? { pathLength: 1 } : { pathLength: 0 }}
            transition={{ duration: 2, ease: "easeInOut" }}
          />
           <motion.circle
            cx="800"
            cy="300"
            r="100"
            stroke="white"
            strokeWidth="2"
            fill="none"
            initial={{ scale: 0, opacity: 0 }}
            animate={isInView ? { scale: 1, opacity: 0.2 } : { scale: 0, opacity: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
          />
        </svg>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="grid gap-4">
            {[
              { src: "/Image (1).jpeg", label: "Drills" },
              { src: "/Image (2).jpeg", label: "Focus" },
              { src: "/Image (3).jpeg", label: "Intensity" }
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ x: -100, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ delay: i * 0.2 }}
                className="relative h-64 w-full overflow-hidden border-l-4 border-[#ccff00]"
              >
                <Image src={item.src} alt={item.label} fill className="object-cover grayscale hover:grayscale-0 transition-all duration-500" />
                <div className="absolute bottom-4 left-4 bg-black/80 px-4 py-2">
                  <span className="text-[#ccff00] font-mono uppercase tracking-widest">{item.label}</span>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <h2 className="text-5xl md:text-7xl font-black uppercase italic leading-none">
              Master <br />
              Your <span className="text-[#ccff00]">Craft</span>
            </h2>
            <p className="text-gray-400 text-xl max-w-md border-l border-gray-700 pl-6">
              Every touch, every pass, every goal starts here. Our gear is engineered for the moments that define the game.
            </p>
            
            <ul className="space-y-4 font-mono text-sm text-gray-300">
              <li className="flex items-center gap-4">
                <span className="w-2 h-2 bg-[#ccff00]" />
                PRECISION ENGINEERING
              </li>
              <li className="flex items-center gap-4">
                <span className="w-2 h-2 bg-[#ccff00]" />
                LIGHTWEIGHT PERFORMANCE
              </li>
              <li className="flex items-center gap-4">
                <span className="w-2 h-2 bg-[#ccff00]" />
                ADAPTIVE TRACTION SYSTEM
              </li>
            </ul>

            <Button className="bg-white text-black hover:bg-[#ccff00] font-bold px-8 py-6 rounded-none uppercase mt-8 w-full md:w-auto">
              View Training Gear
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
