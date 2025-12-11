"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Palette, Award, Target, Sparkles, Users, Rocket } from "lucide-react"
import { useState, useEffect, useRef } from "react"

export const DesignSection = () => {
  const [activeStep, setActiveStep] = useState(-1)
  const stepRefs = useRef<(HTMLDivElement | null)[]>([])

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '-30% 0px -30% 0px',
      threshold: 0.5
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const stepIndex = stepRefs.current.indexOf(entry.target as HTMLDivElement)
          if (stepIndex !== -1) {
            setActiveStep(stepIndex)
          }
        }
      })
    }, observerOptions)

    stepRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref)
    })

    return () => observer.disconnect()
  }, [])

  const designServices = [
    {
      icon: Award,
      title: "Diseño de marca",
      description: "Creación y desarrollo de logotipos, paleta de colores, tipografías y elementos visuales que consoliden tu identidad de tu empresa.",
      gradient: "from-impulse-red to-impulse-magenta"
    },
    {
      icon: Target,
      title: "Material Corporativo",
      description: "Diseño de tarjetas, sobres, firmas digitales y documentos institucionales.",
      gradient: "from-impulse-magenta to-impulse-red"
    },
    {
      icon: Sparkles,
      title: "Videos para redes",
      description: "Nos encargamos desde el armado de guiones, hasta la producción, grabación, edición y publicación de videos.",
      gradient: "from-impulse-red to-impulse-magenta"
    },
  ]

  const processSteps = [
    { number: 1, title: "Briefing", description: "Entendemos necesidades y objetivos", icon: Users },
    { number: 2, title: "Concepto", description: "Desarrollamos conceptos creativos", icon: Sparkles },
    { number: 3, title: "Diseño", description: "Creamos las piezas gráficas", icon: Palette },
    { number: 4, title: "Entrega", description: "Archivos finales en todos los formatos", icon: Rocket },
  ]

  return (
    <section id="diseno" className="py-16 md:py-24 bg-white relative">
      <div className="absolute inset-0 bg-gradient-to-br from-gray-50 to-white"></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12 md:mb-20">
          <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-impulse-red to-impulse-magenta text-white px-5 py-1.5 md:px-6 md:py-2 rounded-full mb-4 md:mb-6">
            <Palette className="w-4 h-4 md:w-5 md:h-5" />
            <span className="font-codec-semibold text-sm md:text-base">Creatividad al máximo</span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-codec-bold mb-4 md:mb-6">
            <span className="text-impulse-red">DISEÑO GRÁFICO</span>{" "}
            <span className="italic font-handelson text-gray-700 text-6xl md:text-7xl lg:text-8xl">y audiovisual</span>
          </h2>
          <p className="text-base md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed font-codec-light">
            Fortalecemos la identidad de tu marca con diseños profesionales que comunican y convierten
          </p>
        </div>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16 md:mb-24 max-w-6xl mx-auto">
          {designServices.map((service, index) => (
            <Card
              key={index}
              className={`bg-gradient-to-br ${service.gradient} text-white border-0 h-full overflow-hidden relative rounded-3xl`}
            >
              <CardContent className="p-6 md:p-8 h-full flex flex-col justify-between">
                <div>
                  <div className="w-16 h-16 md:w-20 md:h-20 bg-white bg-opacity-20 rounded-2xl flex items-center justify-center mb-6">
                    <service.icon className="w-8 h-8 md:w-10 md:h-10 text-white" />
                  </div>
                  <h3 className="text-xl md:text-2xl font-codec-bold mb-4">
                    {service.title}
                  </h3>
                  <p className="text-white text-opacity-90 leading-relaxed text-base font-codec-light">
                    {service.description}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

      </div>
    </section>
  )
}