"use client"

import { Mail, Phone, MapPin, Instagram, Linkedin } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import { useContactModal } from "./ContactModalContext"
// import logoImpulse from "@/assets/favimpulse.png"

export const Footer = () => {
  const { openContactModal } = useContactModal()

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
    <footer id="contacto" className="bg-black text-white relative overflow-hidden">
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-impulse-red/5 to-impulse-magenta/5"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Main CTA Section */}
        <div id="calendario" className="text-center py-16 md:py-20 border-b border-gray-800">
          <h2 className="text-3xl md:text-5xl font-codec-bold mb-6 tracking-tight">
            ¿Listo para impulsar 
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-impulse-red to-impulse-magenta"> tu negocio</span>?
          </h2>
          <p className="text-gray-400 text-lg md:text-xl mb-8 max-w-2xl mx-auto font-codec-light">
            Hablemos de tu proyecto y descubre cómo podemos ayudarte a crecer
          </p>
          {/* Cal.com Widget - Back to iframe with proper height */}
          <iframe 
            src="https://cal.com/impulse-agency" 
            width="100%" 
            height="800"
            className="rounded-xl"
            style={{ border: 'none', minHeight: '800px' }}
            title="Agendar Consulta"
          />
        </div>

        {/* Footer Content */}
        <div className="py-12 md:py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
            
            {/* Brand Section */}
            <div className="lg:col-span-1 text-center md:text-left">
              <div className="flex items-center justify-center md:justify-start mb-6">
                <Image
                  src="/material web/logo color impulse.png"
                  alt="IMPULSE AGENCY Logo"
                  width={200}
                  height={80}
                  className="object-contain"
                />
              </div>
              <p className="text-gray-400 text-sm mb-6 leading-relaxed font-codec-light">
                Transformamos ideas en experiencias digitales que conectan, convierten y crecen.
              </p>
              <div className="flex space-x-3 justify-center md:justify-start">
                <a href="https://www.instagram.com/impulseagency.ar/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-impulse-red transition-all duration-300 group">
                  <Instagram className="w-4 h-4 group-hover:text-white" />
                </a>
                <a href="https://www.linkedin.com/company/impulseagency-ar" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-impulse-red transition-all duration-300 group">
                  <Linkedin className="w-4 h-4 group-hover:text-white" />
                </a>
              </div>
            </div>

            {/* Services */}
            <div className="text-center md:text-left">
              <h3 className="text-lg font-codec-semibold mb-6 text-white">Servicios</h3>
              <ul className="space-y-3">
                <li>
                  <button onClick={() => handleSmoothScroll('servicios')} className="text-gray-400 hover:text-white transition-colors text-sm font-codec-light">
                    Redes Sociales
                  </button>
                </li>
                <li>
                  <button onClick={() => handleSmoothScroll('servicios')} className="text-gray-400 hover:text-white transition-colors text-sm font-codec-light">
                    Email Marketing
                  </button>
                </li>
                <li>
                  <button onClick={() => handleSmoothScroll('servicios')} className="text-gray-400 hover:text-white transition-colors text-sm font-codec-light">
                    Google Ads
                  </button>
                </li>
                <li>
                  <button onClick={() => handleSmoothScroll('servicios')} className="text-gray-400 hover:text-white transition-colors text-sm font-codec-light">
                    Meta Ads
                  </button>
                </li>
                <li>
                  <button onClick={() => handleSmoothScroll('servicios')} className="text-gray-400 hover:text-white transition-colors text-sm font-codec-light">
                    LinkedIn
                  </button>
                </li>
                <li>
                  <button onClick={() => handleSmoothScroll('diseno')} className="text-gray-400 hover:text-white transition-colors text-sm font-codec-light">
                    Diseño
                  </button>
                </li>
              </ul>
            </div>


            {/* Contact */}
            <div className="text-center md:text-left">
              <h3 className="text-lg font-codec-semibold mb-6 text-white">Contacto</h3>
              <div className="space-y-4">
                <div className="flex items-start justify-center md:justify-start space-x-3">
                  <Mail className="w-4 h-4 mt-1 text-gray-400" />
                  <a href="mailto:info@impulse.com.ar" className="text-gray-400 hover:text-white transition-colors text-sm font-codec-light">
                    info@impulse.com.ar
                  </a>
                </div>
                <div className="flex items-start justify-center md:justify-start space-x-3">
                  <Phone className="w-4 h-4 mt-1 text-gray-400" />
                  <a href="tel:+5491150510738" className="text-gray-400 hover:text-white transition-colors text-sm font-codec-light">
                    +54 9 11 5051-0738
                  </a>
                </div>
                <div className="flex items-start justify-center md:justify-start space-x-3">
                  <MapPin className="w-4 h-4 mt-1 text-gray-400" />
                  <span className="text-gray-400 text-sm font-codec-light">
                    Morón, BA<br />
                    Argentina
                  </span>
                </div>
              </div>
            </div>

            {/* CTA Section - Visible en todos los dispositivos */}
            <div className="text-center md:text-left lg:text-center">
              <h3 className="text-lg font-codec-semibold mb-6 text-white">¿Tienes alguna consulta?</h3>
              <p className="text-gray-400 text-sm mb-6 leading-relaxed font-codec-light">
                ¿No quieres agendar una reunión ahora? Envíanos tu consulta por email.
              </p>
              <Button 
                onClick={() => openContactModal()}
                className="w-full bg-gradient-to-r from-impulse-red to-impulse-magenta hover:from-impulse-magenta hover:to-impulse-red text-white font-codec-semibold py-3 px-6 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
              >
                <Mail className="w-4 h-4 mr-2" />
                Enviar consulta
              </Button>
            </div>

          </div>
        </div>

        {/* Bottom Section*/}
        <div className="py-6 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-500 text-sm font-codec-light">
              © 2025 IMPULSE AGENCY. Todos los derechos reservados.
            </p>
            {/*<div className="flex space-x-6 text-sm">
              <a href="/privacy" className="text-gray-500 hover:text-gray-300 transition-colors">
                Privacidad
              </a>
              <a href="/terms" className="text-gray-500 hover:text-gray-300 transition-colors">
                Términos
              </a>
              <a href="/cookies" className="text-gray-500 hover:text-gray-300 transition-colors">
                Cookies
              </a>
            </div>*/}
          </div>
        </div>
      </div>
    </footer>
  )
}