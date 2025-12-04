import Header from "@/components/Header"
import Hero from "@/components/Hero"
import Marquee from "@/components/Marquee"
import HorizontalGallery from "@/components/HorizontalGallery"
import TacticalBreakdown from "@/components/TacticalBreakdown"
import FeaturedProducts from "@/components/FeaturedProducts"
import StoreSection from "@/components/StoreSection"
import Footer from "@/components/Footer"

export default function FootballLanding() {
  return (
    <div className="bg-black text-white font-sans selection:bg-[#ccff00] selection:text-black overflow-x-hidden">
      <Header />
      <Hero />
      <Marquee />
      <HorizontalGallery />
      <TacticalBreakdown />
      <FeaturedProducts />
      <StoreSection />
      <Footer />
    </div>
  )
}
