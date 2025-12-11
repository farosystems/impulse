"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Rocket, Palette, Settings, FileText } from "lucide-react"
import { useState, useEffect, useRef } from "react"

export const TimelineSection = () => {
  const [scrollProgress, setScrollProgress] = useState(0)
  const [activeStep, setActiveStep] = useState(-1)
  const sectionRef = useRef(null)
  const stepRefs = useRef([])

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '-40% 0px -40% 0px', // Más centrado en pantalla
      threshold: 0.5 // Se activa cuando el step está en el centro
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const stepIndex = stepRefs.current.indexOf(entry.target)
          if (stepIndex !== -1) {
            const progress = ((stepIndex + 1) / 4) * 100
            setScrollProgress(progress)
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

  const timelineSteps = [
    {
      icon: Palette,
      title: "Definición de Identidad",
      week: "Semana 1",
      description: "Establecemos la identidad visual, logo, colores, tipografías y elementos gráficos que representen tu marca de forma profesional.",
      color: "from-impulse-red to-impulse-magenta",
    },
    {
      icon: Settings,
      title: "Configuración Digital",
      week: "Semana 2",
      description: "Configuramos redes sociales, tiendas online y optimizamos plataformas para mejorar posicionamiento y atraer tráfico de calidad.",
      color: "from-impulse-magenta to-impulse-red",
    },
    {
      icon: FileText,
      title: "Estrategia de Contenido",
      week: "Semana 3",
      description: "Organizamos base de datos, desarrollamos catálogos digitales y creamos materiales gráficos coherentes para todos los canales.",
      color: "from-impulse-red to-impulse-magenta",
    },
    {
      icon: Rocket,
      title: "Lanzamiento y Optimización",
      week: "Semana 4",
      description: "Implementamos estrategias, iniciamos campañas publicitarias y comenzamos monitoreo activo con optimización continua.",
      color: "from-impulse-magenta to-impulse-red",
    },
  ]

  return (
    <section id="proceso" className="py-16 md:py-24 bg-white relative">
      <div className="absolute inset-0 bg-gradient-to-br from-gray-50 to-white"></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12 md:mb-20">
          <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-impulse-red to-impulse-magenta text-white px-5 py-1.5 md:px-6 md:py-2 rounded-full mb-4 md:mb-6">
            <Rocket className="w-4 h-4 md:w-5 md:h-5" />
            <span className="font-codec-semibold text-sm md:text-base">Roadmap Garantizado</span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-codec-bold mb-4 md:mb-8 text-gray-800">
            ¿QUÉ NOS ESPERA EL<br />
            <span className="text-impulse-red">PRIMER MES</span>?
          </h2>
          <p className="text-base md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed font-codec-light">
            Te mostramos paso a paso cómo trabajamos para asegurar el éxito de tu proyecto desde el primer día
          </p>
        </div>

        <div className="max-w-5xl mx-auto">

          <div className="relative">
            <div className="space-y-10 md:space-y-16">
              {timelineSteps.map((step, index) => (
                <div
                  key={index}
                  ref={(el) => stepRefs.current[index] = el}
                  className={`flex flex-col md:flex-row items-start space-y-4 md:space-y-0 md:space-x-8 relative transition-all duration-700 ${
                    activeStep === index 
                      ? 'scale-105 opacity-100' 
                      : activeStep === -1 
                        ? 'scale-100 opacity-100' 
                        : 'scale-95 opacity-60'
                  }`}
                >
                <div className="flex-shrink-0 w-full md:w-auto flex justify-center md:block">
                  <div className={`w-16 h-16 md:w-20 md:h-20 bg-gradient-to-br ${step.color} rounded-full flex items-center justify-center shadow-2xl transition-all duration-500 relative overflow-hidden ${
                    activeStep === index ? 'ring-4 ring-white ring-opacity-50 shadow-3xl' : ''
                  }`}>
                    {/* Step Number */}
                    <div className="absolute -top-2 -right-2 w-6 h-6 bg-white rounded-full flex items-center justify-center shadow-lg">
                      <span className="text-xs font-codec-bold text-gray-800">{index + 1}</span>
                    </div>
                    <step.icon className="w-8 h-8 md:w-10 md:h-10 text-white relative z-10" />
                  </div>
                </div>
                <div className="flex-1 text-center md:text-left">
                  <div className="flex flex-col md:flex-row items-center md:justify-between mb-4 md:mb-6">
                    <h3 className={`text-2xl md:text-3xl font-codec-bold transition-colors duration-300 ${
                      activeStep === index ? 'text-impulse-red' : 'text-gray-800'
                    }`}>
                      {step.title}
                    </h3>
                    <span className={`bg-gradient-to-r ${step.color} text-white px-4 py-1.5 md:px-6 md:py-2 rounded-full font-codec-semibold text-sm md:text-base shadow-lg transition-all duration-300 mt-2 md:mt-0`}>
                      {step.week}
                    </span>
                  </div>
                  <Card className="border-0 shadow-lg transition-all duration-300">
                    <CardContent className="p-5 md:p-6">
                      <p className="text-gray-600 text-sm md:text-lg leading-relaxed font-codec-light">{step.description}</p>
                    </CardContent>
                  </Card>
                </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}