"use client"

import { Sparkles } from "lucide-react"

export const AboutSection = () => {
  return (
    <section id="nosotros" className="py-16 md:py-24 bg-white relative">
      <div className="absolute inset-0 bg-gradient-to-br from-gray-50 to-white"></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12 md:mb-20">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-codec-bold mb-4 md:mb-6">
            <span className="text-impulse-red">SABEMOS LO QUE</span>{" "}
            <span className="italic font-handelson text-gray-700 text-6xl md:text-7xl lg:text-8xl">hacemos</span>
          </h2>
          <p className="text-xl md:text-2xl lg:text-3xl text-gray-600 max-w-5xl mx-auto leading-relaxed font-codec-light mb-4 md:mb-6">
            Optimizamos tu marca y aceleramos el crecimiento con
          </p>
          <div className="inline-flex items-center bg-gradient-to-r from-impulse-red to-impulse-magenta text-white px-5 py-1.5 md:px-6 md:py-2 rounded-full">
            <span className="font-codec-semibold text-lg md:text-xl lg:text-2xl">estrategias especializadas</span>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-12 items-center mb-16 md:mb-20">
          <div className="text-center">
              <p className="text-lg md:text-xl lg:text-2xl text-gray-700 leading-relaxed group-hover:text-gray-800 transition-colors duration-300 font-codec-light">
                Capitalizamos oportunidades en fechas clave<br />
                como: <span className="font-codec-bold text-impulse-red">Cyber Monday, Hot Sale, Black Friday</span><br />
                optimizando ventas y maximizando el ROI.
              </p>
          </div>

          <div className="p-6 md:p-8 border-l-4 border-impulse-red hover:shadow-xl transition-all duration-300 group rounded-3xl bg-gray-100 text-center">
              <p className="text-lg md:text-xl lg:text-2xl text-gray-700 leading-relaxed group-hover:text-gray-800 transition-colors duration-300 font-codec-light">
                Nos enfocamos en obtener la mayor<br />
                ganancia posible en relación con la<br />
                inversión realizada.
              </p>
          </div>
        </div>

        <div className="text-center">
          <div className="inline-block p-0.5 md:p-1 rounded-3xl">
            <div className="rounded-3xl p-6 md:p-8">
              <p className="text-2xl md:text-3xl lg:text-4xl font-codec-bold mb-3 md:mb-4">
                <span className="text-impulse-red">Más del 80%</span> <span className="font-codec-light">del crecimiento de ventas</span>
              </p>
              <p className="text-2xl md:text-3xl lg:text-4xl">
                <span className="font-codec-light">proviene de</span>{" "}
                <span className="font-codec-bold text-black">
                  CANALES DIGITALES.
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}