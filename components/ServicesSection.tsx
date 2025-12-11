"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Rocket } from "lucide-react"
import Image from "next/image"

export const ServicesSection = () => {
  const services = [
    {
      images: [
        "/material web/FACEBOOK.png",
        "/material web/INSTAGRAM.png",
        "/material web/TIKTOK.png",
      ],
      title: "Redes Sociales",
      description: "Gestión estratégica de contenido para fortalecer tu marca en plataformas digitales.",
      features: ["Contenido personalizado", "Programación automática", "Análisis de engagement"],
    },
    {
      image: "/material web/BREVO.png",
      title: "Email Marketing",
      description: "Campañas personalizadas para fidelizar clientes y generar nuevas oportunidades de venta.",
      features: ["Segmentación avanzada", "Automatización", "Métricas detalladas"],
    },
    {
      image: "/material web/META.png",
      title: "Publicidad en RRSS",
      description: "Publicidad en Facebook e Instagram para aumentar la visibilidad y generar conversiones.",
      features: ["Targeting preciso", "Optimización continua", "ROI maximizado"],
    },
    {
      image: "/material web/GOOGLE ADS.png",
      title: "Publicidad en Google",
      description: "Creación y gestión de anuncios en Google para mejorar el alcance y posicionamiento.",
      features: ["Palabras clave estratégicas", "Campañas optimizadas", "Seguimiento de conversiones"],
    },
    {
      image: "/material web/LINKEDIN.png",
      title: "LinkedIn",
      description: "Optimización y gestión de perfiles profesionales y páginas empresariales para aumentar conexiones de valor.",
      features: ["Networking B2B", "Contenido profesional", "Lead generation"],
    },
    {
      image: "/material web/MY BUSINESS.png",
      title: "Google My Business",
      description: "Configuración y administración para mejorar la presencia de tu negocio en búsquedas locales.",
      features: ["Optimización local", "Gestión de reseñas", "Visibilidad en mapas"],
    },
  ]

  return (
    <section id="servicios" className="py-16 md:py-24 bg-gradient-to-br from-impulse-red via-impulse-magenta to-impulse-red text-white relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-10 left-10 w-32 h-32 bg-white opacity-5 rounded-full animate-bounce"></div>
        <div className="absolute bottom-10 right-10 w-24 h-24 bg-white opacity-5 rounded-full animate-bounce animation-delay-2000"></div>
        <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-white opacity-5 rounded-full animate-bounce animation-delay-4000"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12 md:mb-20">
          <div className="inline-flex items-center space-x-2 bg-white bg-opacity-20 backdrop-blur-sm px-5 py-1.5 md:px-6 md:py-2 rounded-full mb-4 md:mb-6">
            <Rocket className="w-4 h-4 md:w-5 md:h-5" />
            <span className="font-codec-semibold text-sm md:text-base">Todo en Uno</span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-codec-bold mb-4 md:mb-6">
            SOLUCIONES <span className="italic font-handelson text-6xl md:text-7xl lg:text-8xl">integrales</span>
          </h2>
          <p className="text-base md:text-xl text-white text-opacity-95 max-w-2xl mx-auto leading-relaxed font-codec-light">
            100% pensadas para potenciar tu empresa
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {services.map((service, index) => (
            <Card
              key={index}
              className="bg-white text-gray-800 border-0 hover:shadow-2xl transform hover:scale-105 hover:-translate-y-2 transition-all duration-500 group overflow-hidden relative rounded-3xl"
            >
              <CardContent className="p-6 md:p-8 relative z-10">
                <div className="mb-4 md:mb-6">
                  {service.images && (
                    <div className="flex items-center space-x-2">
                      {service.images.map((imageSrc, iconIndex) => (
                        <div
                          key={iconIndex}
                          className="w-10 h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300 overflow-hidden"
                        >
                          <Image
                            src={imageSrc}
                            alt="Service icon"
                            width={48}
                            height={48}
                            className="w-full h-full object-contain"
                          />
                        </div>
                      ))}
                    </div>
                  )}
                  {service.image && (
                    <div className={`flex items-center justify-center group-hover:scale-110 transition-transform duration-300 ${
                      service.image === "/material web/GOOGLE ADS.png" 
                        ? "w-20 h-20 md:w-24 md:h-24" 
                        : "w-12 h-12 md:w-16 md:h-16"
                    }`}>
                      <Image
                        src={service.image}
                        alt="Service logo"
                        width={service.image === "/material web/GOOGLE ADS.png" ? 96 : 64}
                        height={service.image === "/material web/GOOGLE ADS.png" ? 96 : 64}
                        className="w-full h-full object-contain"
                      />
                    </div>
                  )}
                </div>
                <h3 className="text-lg md:text-xl font-codec-bold mb-3 md:mb-4 group-hover:text-impulse-red transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-3 md:mb-4 leading-relaxed text-sm md:text-base font-codec-light">
                  {service.description}
                </p>
                <ul className="space-y-2 text-xs md:text-sm">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center">
                      <div className="w-1.5 h-1.5 bg-impulse-red rounded-full mr-2 md:mr-3 group-hover:animate-pulse"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}