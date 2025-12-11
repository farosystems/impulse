"use client"

import React, { createContext, useContext, useState } from 'react'
import { Mail, Phone, MapPin, Facebook, Instagram, Linkedin, Twitter, ArrowRight, X, Send } from "lucide-react"
import { Button } from "@/components/ui/button"
import toast from 'react-hot-toast'

interface FormData {
  nombre: string
  empresa: string
  cargo: string
  email: string
  asunto: string
  mensaje: string
}

interface ContactModalContextType {
  isContactModalOpen: boolean
  openContactModal: (preselectedPlan?: string) => void
  closeContactModal: () => void
}

const ContactModalContext = createContext<ContactModalContextType | undefined>(undefined)

export const useContactModal = () => {
  const context = useContext(ContactModalContext)
  if (!context) {
    throw new Error('useContactModal must be used within a ContactModalProvider')
  }
  return context
}

export const ContactModalProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false)
  const [formData, setFormData] = useState<FormData>({
    nombre: '',
    empresa: '',
    cargo: '',
    email: '',
    asunto: '',
    mensaje: ''
  })

  const openContactModal = (preselectedPlan?: string) => {
    if (preselectedPlan) {
      setFormData(prev => ({ ...prev, asunto: preselectedPlan }))
    }
    setIsContactModalOpen(true)
    document.documentElement.classList.add('modal-open')
  }

  const closeContactModal = () => {
    setIsContactModalOpen(false)
    setFormData({ nombre: '', empresa: '', cargo: '', email: '', asunto: '', mensaje: '' })
    document.documentElement.classList.remove('modal-open')
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }))
  }

  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    try {
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        toast.success('¡Consulta enviada exitosamente! Te responderemos pronto.', {
          duration: 5000,
          icon: '✨',
        })
        closeContactModal()
      } else {
        toast.error('Hubo un error al enviar la consulta. Inténtalo de nuevo.', {
          icon: '⚠️',
        })
      }
    } catch (error) {
      toast.error('Error de conexión. Verifica tu internet e inténtalo de nuevo.', {
        icon: '🌐',
      })
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <ContactModalContext.Provider value={{ isContactModalOpen, openContactModal, closeContactModal }}>
      {children}
      
      {/* Contact Modal */}
      {isContactModalOpen && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-1 sm:p-4">
          <div className="bg-white rounded-2xl sm:rounded-3xl max-w-lg w-full max-h-[85vh] sm:max-h-[90vh] overflow-y-auto relative shadow-2xl border border-gray-100 mx-1 sm:mx-0">
            {/* Header con gradiente */}
            <div className="sticky top-0 bg-gradient-to-r from-impulse-red to-impulse-magenta rounded-t-2xl sm:rounded-t-3xl p-3 sm:p-6">
              <div className="flex justify-between items-center">
                <div>
                  <h3 className="text-xl sm:text-2xl font-codec-bold text-white">Enviar consulta</h3>
                  <p className="text-white/80 text-xs sm:text-sm font-codec-light mt-1">Te responderemos en menos de 24 horas</p>
                </div>
                <button
                  onClick={closeContactModal}
                  className="p-2 hover:bg-white/20 rounded-full transition-all duration-200 text-white hover:scale-105 flex-shrink-0"
                >
                  <X className="w-5 h-5 sm:w-6 sm:h-6" />
                </button>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="p-3 sm:p-6 space-y-2 sm:space-y-4">
              {/* Grid de 2 columnas para nombre y empresa - responsive */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                <div className="space-y-2">
                  <label className="block text-sm font-codec-semibold text-gray-800 flex items-center">
                    <span className="text-impulse-red mr-2">•</span>
                    Nombre y Apellido *
                  </label>
                  <input
                    type="text"
                    name="nombre"
                    value={formData.nombre}
                    onChange={handleInputChange}
                    required
                    className="w-full p-3 sm:p-4 border-2 border-gray-200 rounded-xl sm:rounded-2xl focus:ring-2 focus:ring-black/10 focus:border-black font-codec-light transition-all duration-200 hover:border-gray-300 text-sm sm:text-base"
                    placeholder="Tu nombre completo"
                  />
                </div>
                
                <div className="space-y-2">
                  <label className="block text-sm font-codec-semibold text-gray-800 flex items-center">
                    <span className="text-impulse-red mr-2">•</span>
                    Empresa *
                  </label>
                  <input
                    type="text"
                    name="empresa"
                    value={formData.empresa}
                    onChange={handleInputChange}
                    required
                    className="w-full p-3 sm:p-4 border-2 border-gray-200 rounded-xl sm:rounded-2xl focus:ring-2 focus:ring-black/10 focus:border-black font-codec-light transition-all duration-200 hover:border-gray-300 text-sm sm:text-base"
                    placeholder="Nombre de tu empresa"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                <div className="space-y-2">
                  <label className="block text-sm font-codec-semibold text-gray-800 flex items-center">
                    <span className="text-impulse-red mr-2">•</span>
                    Cargo *
                  </label>
                  <input
                    type="text"
                    name="cargo"
                    value={formData.cargo}
                    onChange={handleInputChange}
                    required
                    className="w-full p-3 sm:p-4 border-2 border-gray-200 rounded-xl sm:rounded-2xl focus:ring-2 focus:ring-black/10 focus:border-black font-codec-light transition-all duration-200 hover:border-gray-300 text-sm sm:text-base"
                    placeholder="Tu posición en la empresa"
                  />
                </div>

                <div className="space-y-2">
                  <label className="block text-sm font-codec-semibold text-gray-800 flex items-center">
                    <span className="text-impulse-red mr-2">•</span>
                    Email *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full p-3 sm:p-4 border-2 border-gray-200 rounded-xl sm:rounded-2xl focus:ring-2 focus:ring-black/10 focus:border-black font-codec-light transition-all duration-200 hover:border-gray-300 text-sm sm:text-base"
                    placeholder="tu@email.com"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="block text-sm font-codec-semibold text-gray-800 flex items-center">
                  <span className="text-impulse-red mr-2">•</span>
                  Asunto *
                </label>
                <div className="relative">
                  <select
                    name="asunto"
                    value={formData.asunto}
                    onChange={handleInputChange}
                    required
                    className="w-full p-3 sm:p-4 border-2 border-gray-200 rounded-xl sm:rounded-2xl focus:ring-2 focus:ring-black/10 focus:border-black font-codec-light transition-all duration-200 hover:border-gray-300 appearance-none bg-white text-sm sm:text-base"
                  >
                    <option value="">Selecciona un asunto</option>
                    <option value="PLAN BASIC">PLAN BASIC</option>
                    <option value="PLAN PRO">PLAN PRO</option>
                    <option value="PLAN ADVANCED">PLAN ADVANCED</option>
                    <option value="PLAN CREATIVO">PLAN CREATIVO</option>
                    <option value="OTRA CONSULTA">OTRA CONSULTA</option>
                  </select>
                  <div className="absolute inset-y-0 right-0 flex items-center pr-4 pointer-events-none">
                    <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                </div>
              </div>

              <div className="space-y-2">
                <label className="block text-sm font-codec-semibold text-gray-800">
                  Mensaje
                </label>
                <textarea
                  name="mensaje"
                  value={formData.mensaje}
                  onChange={handleInputChange}
                  rows={3}
                  className="w-full p-3 sm:p-4 border-2 border-gray-200 rounded-xl sm:rounded-2xl focus:ring-2 focus:ring-black/10 focus:border-black font-codec-light resize-none transition-all duration-200 hover:border-gray-300 text-sm sm:text-base"
                  placeholder="Cuéntanos más sobre tu consulta o proyecto..."
                />
              </div>

              {/* Botón de envío mejorado - responsive */}
              <div className="pt-3 sm:pt-4 border-t border-gray-100">
                <Button
                  type="submit"
                  disabled={isLoading}
                  className="w-full bg-gradient-to-r from-impulse-red to-impulse-magenta hover:from-impulse-magenta hover:to-impulse-red text-white font-codec-semibold py-3 sm:py-4 px-6 sm:px-8 rounded-xl sm:rounded-2xl transition-all duration-300 transform hover:scale-[1.02] shadow-lg hover:shadow-xl group disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <Send className="w-4 h-4 sm:w-5 sm:h-5 mr-2 sm:mr-3 group-hover:translate-x-1 transition-transform duration-200" />
                  <span className="text-base sm:text-lg">
                    {isLoading ? 'Enviando...' : 'Enviar consulta'}
                  </span>
                  <span className="ml-1 sm:ml-2 text-white/80">→</span>
                </Button>
              </div>
            </form>
          </div>
        </div>
      )}
    </ContactModalContext.Provider>
  )
}