"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Check, X, Star, Sparkles, Rocket, Calendar, Clock, Shield } from "lucide-react"
import { useContactModal } from "./ContactModalContext"

export const PricingSection = () => {
  const { openContactModal } = useContactModal()
  const basicFeatures = [
    "Gestión de publicaciones en redes sociales",
    "Publicidad en Meta (Facebook & Instagram)",
    "Métricas básicas",
    "Seguimiento mensual"
  ]

  const basicNotIncluded = [
    "Email marketing automatizado", 
    "Google Ads", 
    "LinkedIn Business", 
    "Analytics avanzado", 
    "Consultoría estratégica"
  ]

  const proFeatures = [
    "Campañas de email marketing",
    "Publicidad básica en Google Ads",
    "Métricas avanzadas y reportes más completos"
  ]

  const proNotIncluded = [
    "LinkedIn Premium ads", 
    "Analytics predictivo", 
    "Consultoría 24/7",
    "A/B testing avanzado"
  ]

  const advancedFeatures = [
    "Community Manager dedicado",
    "Creación de videos para redes",
    "Asesoramiento comercial y monitoreo semanal de ecommerce",
    "Publicidad avanzada en Google Ads (estrategias segmentadas y optimizadas)"
  ]

  return (
    <section
      id="planes"
      className="py-16 md:py-24 bg-gradient-to-br from-impulse-red via-impulse-magenta to-impulse-red text-white relative overflow-hidden"
    >
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full bg-black opacity-10"></div>
        <div className="absolute top-20 right-20 w-40 h-40 bg-white opacity-5 rounded-full animate-pulse"></div>
        <div className="absolute bottom-20 left-20 w-32 h-32 bg-white opacity-5 rounded-full animate-pulse animation-delay-2000"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12 md:mb-20">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-codec-bold mb-4 md:mb-6">
            NUESTROS <span className="italic font-handelson text-white text-6xl md:text-7xl lg:text-8xl">paquetes</span>
          </h2>
          <p className="text-base md:text-xl text-white text-opacity-95 max-w-3xl mx-auto leading-relaxed font-codec-light">
            Planes diseñados para escalar tu negocio con resultados medibles.
          </p>
        </div>

        {/* Plan Creativo - Separado */}
        <div className="mb-16 md:mb-20 max-w-7xl mx-auto">
          <Card className="bg-white text-gray-800 border-4 border-impulse-red h-full rounded-3xl overflow-hidden relative">
            <CardContent className="p-8 md:p-10 text-center">
              <div className="max-w-4xl mx-auto">
                <div className="mb-6">
                  <h3 className="text-3xl md:text-4xl font-codec-bold mb-4">
                    PLAN CREATIVO (Diseño & Branding)
                  </h3>
                  <p className="text-lg text-gray-600 leading-relaxed font-codec-light">
                    Ideal para marcas que quieren una identidad profesional y coherente.
                  </p>
                </div>

                <div className="mb-8">
                  <div className="flex items-center mb-4 justify-center">
                    <Check className="w-4 h-4 text-green-500 mr-2" />
                    <span className="font-codec-semibold text-lg">Incluye:</span>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-left max-w-3xl mx-auto">
                    <div className="flex items-start">
                      <div className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <span className="text-base text-gray-700 font-codec-light">Diseño de logotipo profesional</span>
                    </div>
                    <div className="flex items-start">
                      <div className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <span className="text-base text-gray-700 font-codec-light">Paleta de colores personalizada</span>
                    </div>
                    <div className="flex items-start">
                      <div className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <span className="text-base text-gray-700 font-codec-light">Estilo de comunicación definido</span>
                    </div>
                    <div className="flex items-start">
                      <div className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <span className="text-base text-gray-700 font-codec-light">Selección de tipografías</span>
                    </div>
                    <div className="flex items-start">
                      <div className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <span className="text-base text-gray-700 font-codec-light">Pack de íconos personalizados</span>
                    </div>
                    <div className="flex items-start">
                      <div className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <span className="text-base text-gray-700 font-codec-light">Plantillas personalizables</span>
                    </div>
                  </div>
                </div>

                <Button 
                  onClick={() => openContactModal("PLAN CREATIVO")}
                  className="bg-impulse-red hover:bg-impulse-magenta text-white py-3 px-8 rounded-2xl font-codec-semibold text-lg transition-colors duration-200"
                >
                  Solicitar Plan Creativo
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8 max-w-7xl mx-auto mb-12 md:mb-16 items-end">
          {/* Plan Básico */}
          <Card className="bg-white text-gray-800 border-4 border-gray-200 h-full">
            <CardContent className="p-6 md:p-8 flex flex-col h-full">
              <div className="text-center mb-6 md:mb-8">
                <div className="mb-4">
                  <h3 className="text-2xl md:text-3xl font-codec-bold mb-2">
                    Plan Basic
                  </h3>
                </div>
                <p className="text-sm md:text-base text-gray-600 leading-relaxed font-codec-light">
                  Para negocios que quieren dar sus primeros pasos en redes sociales.
                </p>
              </div>

              <div className="mb-6 flex-grow">
                <div className="flex items-center mb-3">
                  <Check className="w-4 h-4 text-green-500 mr-2" />
                  <span className="font-codec-semibold text-sm">Incluye:</span>
                </div>
                <ul className="space-y-2">
                  {basicFeatures.map((item, index) => (
                    <li key={index} className="flex items-start">
                      <div className="w-2 h-2 bg-green-500 rounded-full mt-1.5 mr-3 flex-shrink-0"></div>
                      <span className="text-sm text-gray-700 font-codec-light">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <button 
                onClick={(e) => {
                  e.preventDefault()
                  e.stopPropagation()
                  openContactModal("PLAN BASIC")
                }}
                type="button"
                className="w-full bg-black hover:bg-gray-800 text-white py-3 rounded-lg font-codec-semibold text-base transition-colors duration-200"
              >
                Elegir plan
              </button>
            </CardContent>
          </Card>

          {/* Plan Pro */}
          <Card className="bg-white text-gray-800 border-4 border-impulse-red h-full relative">
            <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 z-10">
              <div className="bg-impulse-red text-white px-6 py-2 rounded-t-lg text-lg font-codec-semibold shadow-lg">
                Popular
              </div>
            </div>
            <CardContent className="p-6 md:p-8 flex flex-col h-full">
              <div className="text-center mb-6 md:mb-8">
                <div className="mb-4">
                  <h3 className="text-2xl md:text-3xl font-codec-bold mb-2 text-impulse-red">Plan Pro</h3>
                </div>
                <p className="text-sm md:text-base text-gray-600 leading-relaxed font-codec-light">
                  Para marcas que buscan escalar su presencia digital.
                </p>
              </div>

              <div className="mb-6 flex-grow">
                <div className="flex items-center mb-3">
                  <Check className="w-4 h-4 text-green-500 mr-2" />
                  <span className="font-codec-semibold text-sm">Incluye todo lo del Plan Basic, más:</span>
                </div>
                <ul className="space-y-2">
                  {proFeatures.map((item, index) => (
                    <li key={index} className="flex items-start">
                      <div className="w-2 h-2 bg-green-500 rounded-full mt-1.5 mr-3 flex-shrink-0"></div>
                      <span className="text-sm text-gray-700 font-codec-light">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <button 
                onClick={(e) => {
                  e.preventDefault()
                  e.stopPropagation()
                  openContactModal("PLAN PRO")
                }}
                type="button"
                className="w-full bg-black hover:bg-gray-800 text-white py-3 rounded-lg font-codec-semibold text-base transition-colors duration-200"
              >
                Elegir plan
              </button>
            </CardContent>
          </Card>

          {/* Plan Advanced */}
          <Card className="bg-white text-gray-800 border-4 border-gray-200 h-full">
            <CardContent className="p-6 md:p-8 flex flex-col h-full">
              <div className="text-center mb-6 md:mb-8">
                <div className="mb-4">
                  <h3 className="text-2xl md:text-3xl font-codec-bold mb-2">
                    Plan Advanced
                  </h3>
                </div>
                <p className="text-sm md:text-base text-gray-600 leading-relaxed font-codec-light">
                  La solución más completa para quienes necesitan crecer de forma sostenida.
                </p>
              </div>

              <div className="mb-6 flex-grow">
                <div className="flex items-center mb-3">
                  <Check className="w-4 h-4 text-green-500 mr-2" />
                  <span className="font-codec-semibold text-sm">Incluye todo lo del Plan Pro, más:</span>
                </div>
                <ul className="space-y-2">
                  {advancedFeatures.map((item, index) => (
                    <li key={index} className="flex items-start">
                      <div className="w-2 h-2 bg-green-500 rounded-full mt-1.5 mr-3 flex-shrink-0"></div>
                      <span className="text-sm text-gray-700 font-codec-light">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <button 
                onClick={(e) => {
                  e.preventDefault()
                  e.stopPropagation()
                  openContactModal("PLAN ADVANCED")
                }}
                type="button"
                className="w-full bg-black hover:bg-gray-800 text-white py-3 rounded-lg font-codec-semibold text-base transition-colors duration-200"
              >
                Elegir plan
              </button>
            </CardContent>
          </Card>
        </div>

        {/* Botón Plan Personalizado */}
        <div className="text-center mt-12 md:mt-16">
          <div className="max-w-2xl mx-auto">
            <p className="text-white text-opacity-90 text-lg md:text-xl mb-6 font-codec-light">
              ¿Necesitas algo más específico para tu negocio?
            </p>
            <Button 
              onClick={() => openContactModal("OTRA CONSULTA")}
              className="bg-white text-impulse-red hover:bg-gray-100 py-4 px-8 rounded-2xl font-codec-bold text-lg transition-colors duration-200 shadow-lg hover:shadow-xl transform hover:scale-105"
            >
              Solicitar Plan Personalizado
            </Button>
          </div>
        </div>

      </div>
    </section>
  )
}