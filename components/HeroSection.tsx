"use client"

import { Button } from "@/components/ui/button"
import { Star, TrendingUp, Sparkles } from "lucide-react"
import Image from "next/image"

export const HeroSection = () => {
  const handleSmoothScroll = (targetId: string) => {
    const targetElement = document.getElementById(targetId)
    
    if (targetElement) {
      const headerHeight = 80
      const targetPosition = targetElement.offsetTop - headerHeight
      const start = window.scrollY
      const distance = targetPosition - start
      const duration = Math.min(Math.abs(distance) * 1.2, 2500)
      let startTime: number

      const animateScroll = (currentTime: number) => {
        if (!startTime) startTime = currentTime
        const timeElapsed = currentTime - startTime
        const progress = Math.min(timeElapsed / duration, 1)
        
        const ease = progress < 0.5 ? 2 * progress * progress : 1 - Math.pow(-2 * progress + 2, 3) / 2
        
        window.scrollTo(0, start + distance * ease)
        
        if (progress < 1) {
          requestAnimationFrame(animateScroll)
        }
      }
      requestAnimationFrame(animateScroll)
    }
  }

  return (
    <section className="relative bg-gradient-to-br from-impulse-red via-impulse-magenta to-impulse-red text-white min-h-screen overflow-hidden pt-24 flex items-center">
      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 25% 25%, white 2px, transparent 2px)`,
            backgroundSize: "50px 50px",
            animation: "float 20s ease-in-out infinite",
          }}
        ></div>
      </div>

      <div className="container mx-auto px-4 relative z-20">
        <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center">
          <div className="space-y-6 md:space-y-8 text-center xl:text-left">
            <div className="flex items-center justify-center xl:justify-start space-x-2 mb-4">
              <Star className="w-6 h-6 text-white animate-spin" />
              <span className="text-base md:text-lg font-codec-semibold bg-white bg-opacity-20 px-3 py-1 md:px-4 md:py-1.5 rounded-full">
                #Agencia de Marketing
              </span>
            </div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-codec-bold leading-tight">
              <span className="inline-block hover:scale-105 transition-transform duration-300">POTENCIAMOS</span>
              <br />
              <span className="inline-block italic font-handelson text-white pb-4 md:pb-6 leading-normal text-7xl md:text-8xl lg:text-9xl">
                tu éxito
              </span>
            </h1>

            <p className="text-lg md:text-xl leading-relaxed text-white text-opacity-95 max-w-xl mx-auto xl:mx-0 font-codec-light">
              En <span className="font-bold text-white">IMPULSE AGENCY</span>, transformamos tu presencia digital
              y aceleramos el crecimiento de tu negocio con estrategias probadas.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center xl:justify-start">
              <Button 
                onClick={() => handleSmoothScroll('planes')}
                className="bg-white text-impulse-red hover:bg-gray-100 font-codec-semibold py-3 px-8 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
              >
                Ver planes
              </Button>
              <Button 
                onClick={() => handleSmoothScroll('contacto')}
                className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-impulse-red font-codec-semibold py-3 px-8 rounded-full transition-all duration-300 transform hover:scale-105"
              >
                Cotizar precios
              </Button>
            </div>

          </div>

          <div className="absolute right-0 top-0 bottom-0 w-1/2 hidden xl:flex items-center justify-center pointer-events-none overflow-hidden">
            <Image
              src="/material web/opcion 2.png"
              alt="Ilustración representando crecimiento digital"
              width={1500}
              height={1500}
              className="w-full max-w-4xl h-auto object-contain drop-shadow-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  )
}