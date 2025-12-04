"use client"

import { motion } from "framer-motion"
import { MapPin } from "lucide-react"
import Image from "next/image"
import { Button } from "@/components/ui/button"

export default function StoreSection() {
  return (
    <section className="relative h-screen w-full flex items-center justify-center overflow-hidden bg-black text-white">
       <Image
        src="/Image (4).jpeg"
        alt="Store"
        fill
        className="object-cover opacity-40"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-transparent" />
      
      <div className="relative z-10 container mx-auto px-6 grid grid-cols-1 md:grid-cols-2">
        <motion.div
          initial={{ x: -50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          className="bg-black/50 backdrop-blur-lg border border-white/10 p-12"
        >
          <h2 className="text-[#ccff00] text-sm font-bold uppercase tracking-[0.3em] mb-4">HQ / Omaha</h2>
          <h3 className="text-5xl md:text-6xl font-black uppercase italic mb-8">
            The <br /> Locker Room
          </h3>
          <div className="space-y-6 font-mono text-sm text-gray-300">
            <div className="flex gap-4">
              <MapPin className="text-[#ccff00]" />
              <div>
                <p className="font-bold text-white">1234 Soccer Way</p>
                <p>Omaha, NE 68102</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="w-6 h-6 flex items-center justify-center text-[#ccff00] font-bold border border-[#ccff00] rounded-full">!</div>
              <div>
                <p className="font-bold text-white">Opening Hours</p>
                <p>Daily: 10AM - 9PM</p>
              </div>
            </div>
          </div>
          <Button className="mt-8 bg-[#ccff00] text-black font-bold px-8 py-4 uppercase w-full">
            Get Directions
          </Button>
        </motion.div>
      </div>
    </section>
  )
}
