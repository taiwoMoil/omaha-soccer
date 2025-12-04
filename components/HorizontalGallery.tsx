"use client"

import { useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import { ArrowRight } from "lucide-react"
import Image from "next/image"

function ExpandingCard({ 
  src, 
  title, 
  index, 
  scrollProgress, 
  range 
}: { 
  src: string
  title: string
  index: number
  scrollProgress: any
  range: [number, number] 
}) {
  // Map the specific range of scroll to width expansion
  // Default width: 15vw (narrow)
  // Active width: 40vw (wide)
  const width = useTransform(scrollProgress, 
    [range[0] - 0.1, range[0], range[1], range[1] + 0.1], 
    ["15vw", "45vw", "45vw", "15vw"]
  )
  
  const opacity = useTransform(scrollProgress,
     [range[0] - 0.1, range[0], range[1], range[1] + 0.1],
     [0.5, 1, 1, 0.5]
  )

  const textOpacity = useTransform(scrollProgress,
    [range[0], range[0] + 0.05, range[1] - 0.05, range[1]],
    [0, 1, 1, 0]
 )

  return (
    <motion.div 
      style={{ width, opacity }} 
      className="relative h-[70vh] mx-2 flex-shrink-0 overflow-hidden bg-zinc-900 border-l border-zinc-800"
    >
      <Image
        src={src}
        alt={title}
        fill
        className="object-cover grayscale hover:grayscale-0 transition-all duration-500"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/90" />
      
      <motion.div 
        style={{ opacity: textOpacity }}
        className="absolute bottom-8 left-8 z-10 whitespace-nowrap"
      >
         <h3 className="text-6xl font-black uppercase italic text-white">
          {title}
        </h3>
        <p className="text-[#ccff00] font-mono text-sm tracking-widest uppercase mt-2">
          0{index + 1} /// Series
        </p>
      </motion.div>

      {/* Vertical text for inactive state */}
       <div className="absolute top-8 right-4 z-10 vertical-writing-lr">
        <p className="text-xs font-bold uppercase tracking-widest text-gray-500 rotate-180 [writing-mode:vertical-rl]">
          0{index + 1} {title}
        </p>
      </div>
    </motion.div>
  )
}

export default function HorizontalGallery() {
  const targetRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end end"]
  })

  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-40%"])

  return (
    <section ref={targetRef} className="relative h-max pt-12 bg-black">
      <div className="sticky top-0 flex h-max items-center overflow-hidden">
        <motion.div style={{ x }} className="flex gap-4 px-[5vw]">
           {/* Title Card */}
           <div className="min-w-[30vw] flex flex-col justify-center px-12">
              <h2 className="text-6xl md:text-8xl font-black uppercase leading-none mb-6 text-white">
                The <br />
                <span className="text-[#ccff00]">Lineup</span>
              </h2>
              <p className="text-gray-400 max-w-xs text-lg">
                Scroll to explore the collection.
              </p>
              <ArrowRight className="w-12 h-12 text-[#ccff00] mt-8" />
           </div>

          {/* Expanding Cards */}
          <ExpandingCard
            src="/Image_4.jpeg"
            title="Precision"
            index={0}
            scrollProgress={scrollYProgress}
            range={[0, 0.25]}
          />
          <ExpandingCard
            src="/Image_5.jpeg"
            title="Speed"
            index={1}
            scrollProgress={scrollYProgress}
            range={[0.25, 0.5]}
          />
          <ExpandingCard
            src="/Image_6.jpeg"
            title="Control"
            index={2}
            scrollProgress={scrollYProgress}
            range={[0.5, 0.75]}
          />
           <ExpandingCard
            src="/Image_7.jpeg"
            title="Power"
            index={3}
            scrollProgress={scrollYProgress}
            range={[0.75, 1]}
          />
        </motion.div>
      </div>
    </section>
  )
}
