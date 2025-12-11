"use client"

import { Button } from "@/components/ui/button"
import { Zap, Menu, X, ChevronUp } from "lucide-react"
import Image from "next/image"
import { useState, useEffect } from "react"
import { useContactModal } from "./ContactModalContext"
// import logoImpulse from "@/assets/favimpulse.png"

// Add keyframes for mobile menu animation
const styles = `
@keyframes slideIn {
  from {
    opacity: 0;
    transform: translateY(-10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
`

// Inject styles
if (typeof document !== 'undefined') {
  const styleSheet = document.createElement('style')
  styleSheet.textContent = styles
  document.head.appendChild(styleSheet)
}

export const Header = () => {
  const { openContactModal } = useContactModal()
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('')
  const [showScrollToTop, setShowScrollToTop] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  const navItems = [
    { name: 'NOSOTROS', href: '#nosotros' },
    { name: 'SERVICIOS', href: '#servicios' },
    { name: 'DISEÑO', href: '#diseno' },
    { name: 'PLANES', href: '#planes' },
    { name: 'CONTACTO', href: '#contacto' }
  ]

  const allSections = [
    ...navItems,
    { name: 'CALENDARIO', href: '#calendario' }
  ]

  useEffect(() => {
    const handleScroll = () => {
      const sections = allSections.map(item => item.href.substring(1))
      const scrollPosition = window.scrollY + 100

      // Show/hide scroll to top button
      setShowScrollToTop(window.scrollY > 300)

      // Check if we're past the hero section
      setIsScrolled(window.scrollY > 500)

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i])
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(sections[i])
          break
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToCalendar = () => {
    const targetElement = document.getElementById('calendario')
    
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

  const handleNavClick = (href: string) => {
    setIsMenuOpen(false)
    const targetId = href.substring(1)
    const targetElement = document.getElementById(targetId)
    
    if (targetElement) {
      const headerHeight = 80
      const targetPosition = targetElement.offsetTop - headerHeight
      const start = window.scrollY
      const distance = targetPosition - start
      const duration = Math.min(Math.abs(distance) * 1.2, 2500) // Más lento
      let startTime: number

      const animateScroll = (currentTime: number) => {
        if (!startTime) startTime = currentTime
        const timeElapsed = currentTime - startTime
        const progress = Math.min(timeElapsed / duration, 1)
        
        // Easing function para suavidad
        const ease = progress < 0.5 ? 2 * progress * progress : 1 - Math.pow(-2 * progress + 2, 3) / 2
        
        window.scrollTo(0, start + distance * ease)
        
        if (progress < 1) {
          requestAnimationFrame(animateScroll)
        }
      }
      requestAnimationFrame(animateScroll)
    }
  }

  const scrollToTop = () => {
    const start = window.scrollY
    const duration = Math.min(start * 1.2, 2500) // Más lento
    let startTime: number

    const animateScroll = (currentTime: number) => {
      if (!startTime) startTime = currentTime
      const timeElapsed = currentTime - startTime
      const progress = Math.min(timeElapsed / duration, 1)
      
      // Easing function para suavidad
      const ease = progress < 0.5 ? 2 * progress * progress : 1 - Math.pow(-2 * progress + 2, 3) / 2
      
      window.scrollTo(0, start * (1 - ease))
      
      if (progress < 1) {
        requestAnimationFrame(animateScroll)
      }
    }
    requestAnimationFrame(animateScroll)
  }

  return (
    <>
      <header className={`fixed top-0 w-full md:py-4 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-black/80 backdrop-blur-md shadow-sm text-white' 
          : 'bg-transparent text-white'
      }`}>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex justify-between md:justify-center items-center">
            {/* Logo - Positioned left on mobile, centered on desktop */}
            <div className="flex items-center group md:absolute md:left-4 ml-4">
              <Image
                src="/material web/LOGO BLANCO IMPULSE.png"
                alt="Logo IMPULSE AGENCY"
                width={160}
                height={60}
                className="object-contain group-hover:scale-110 transition-transform duration-300"
              />
            </div>

            {/* Desktop Navigation - Centered */}
            <nav className="hidden md:flex items-center space-x-6 lg:space-x-8">
              {navItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => handleNavClick(item.href)}
                  className={`hover:text-white transition-all duration-300 font-codec-semibold relative group ${
                    activeSection === item.href.substring(1) ? 'text-white' : 'text-white/80'
                  }`}
                >
                  {item.name}
                  <span className={`absolute -bottom-1 left-0 h-0.5 bg-white transition-all duration-300 ${
                    activeSection === item.href.substring(1) ? 'w-full' : 'w-0 group-hover:w-full'
                  }`}></span>
                </button>
              ))}
            </nav>

            {/* CTA Button - Positioned right on desktop */}
            <Button 
              onClick={() => handleNavClick('#contacto')}
              className="hidden md:block md:absolute md:right-4 bg-white text-black hover:bg-gray-100 font-codec-semibold py-2 px-6 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              Agendar reunión gratuita
            </Button>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden text-white p-2"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        <div className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out border-t border-white/20 ${
          isScrolled ? '' : 'bg-transparent backdrop-blur-md'
        } ${
          isMenuOpen ? 'max-h-[600px] opacity-100' : 'max-h-0 opacity-0'
        }`}>
          <nav className="container mx-auto px-4 py-6 space-y-2">
              {navItems.map((item, index) => (
                <button
                  key={item.name}
                  onClick={() => handleNavClick(item.href)}
                  className={`block w-full text-left py-4 px-4 rounded-xl font-codec-semibold transition-all duration-300 transform hover:scale-105 ${
                    activeSection === item.href.substring(1)
                      ? 'text-white bg-gradient-to-r from-impulse-red to-impulse-magenta shadow-lg'
                      : 'text-white/80 hover:text-white hover:bg-white/10'
                  }`}
                  style={{
                    animationDelay: `${index * 50}ms`,
                    animation: isMenuOpen ? 'slideIn 0.3s ease-out forwards' : 'none'
                  }}
                >
                  <span className="flex items-center justify-between">
                    {item.name}
                    <span className="text-xs opacity-60">→</span>
                  </span>
                </button>
              ))}
              
              {/* Mobile CTA Button */}
              <Button 
                onClick={() => handleNavClick('#contacto')}
                className="w-full mt-4 bg-white text-black hover:bg-gray-100 font-codec-semibold py-3 px-6 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
                style={{
                  animationDelay: `${navItems.length * 50}ms`,
                  animation: isMenuOpen ? 'slideIn 0.3s ease-out forwards' : 'none'
                }}
              >
                Agendar reunión gratuita
              </Button>
            </nav>
        </div>
      </header>

      {/* Scroll to Top Button */}
      {showScrollToTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 z-50 w-12 h-12 bg-impulse-red hover:bg-impulse-magenta text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center group"
        >
          <ChevronUp className="w-6 h-6 group-hover:scale-110 transition-transform duration-300" />
        </button>
      )}
    </>
  )
}