"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"

export default function FeaturedProducts() {
  const products = [
    { name: "Vomero Plus", price: "$180", cat: "Boots" },
    { name: "Tech Fleece", price: "$120", cat: "Apparel" },
    { name: "Pro Match Ball", price: "$140", cat: "Equipment" },
    { name: "Elite Gloves", price: "$85", cat: "Accessories" },
  ]

  return (
    <section className="py-32 bg-white text-black">
      <div className="container mx-auto px-6">
        <div className="flex justify-between items-end mb-16">
          <h2 className="text-6xl font-black uppercase tracking-tighter">
            Game <span className="text-transparent bg-clip-text bg-gradient-to-r from-black to-gray-400">Ready</span>
          </h2>
          <Button variant="link" className="text-black uppercase font-bold underline decoration-2 underline-offset-4 hover:text-[#ccff00] hover:bg-black transition-colors px-4">
            All Products
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((p, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="group cursor-pointer"
            >
              <div className="relative aspect-[3/4] bg-gray-100 mb-4 overflow-hidden border-2 border-transparent group-hover:border-black transition-colors">
                <div className="absolute inset-0 flex items-center justify-center text-gray-300 text-6xl font-black opacity-20 group-hover:scale-110 transition-transform duration-500">
                  OMAHA
                </div>
                <div className="absolute bottom-0 left-0 w-full h-1 bg-[#ccff00] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
              </div>
              <div className="flex justify-between items-start">
                <div>
                  <p className="text-xs font-bold uppercase text-gray-500 mb-1">{p.cat}</p>
                  <h3 className="text-xl font-black uppercase italic">{p.name}</h3>
                </div>
                <span className="font-mono font-bold">{p.price}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
