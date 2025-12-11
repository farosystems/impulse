"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import {
  Check,
  X,
  Settings,
  Users,
  Rocket,
  Award,
  Target,
  Palette,
  Share2,
  Linkedin,
  Building2,
  Sparkles,
  Zap,
  TrendingUp,
  Star,
} from "lucide-react"
import Image from "next/image"
import logoImpulse from "@/assets/favimpulse.png"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      {/* Animated Background Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-pink-200 to-red-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-red-200 to-pink-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse animation-delay-2000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-60 h-60 bg-gradient-to-br from-pink-100 to-red-100 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-4000"></div>
      </div>

      {/* Header */}
      <header className="relative bg-gradient-to-r from-pink-500 via-red-500 to-pink-600 text-white py-4 shadow-2xl">
        <div className="absolute inset-0 bg-black opacity-10"></div>
        <div className="container mx-auto px-4 flex justify-between items-center relative z-10">
          <div className="flex items-center space-x-3 group">
            <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
              <Image
                src={logoImpulse}
                alt="Logo IMPULSE"
                width={40}
                height={40}
                className="object-contain p-1" // Ajusta el padding según necesites
              />
            </div>
            {/* Logo */}

            <div className="flex flex-col">
              <span className="text-3xl font-bold tracking-wide text-white">
                IMPULSE
              </span>
              <div className="flex items-center">
                <div className="h-1 bg-white" style={{ width: 'calc(100% - 4.5rem)' }}></div>
                <span className="text-sm font-semibold tracking-widest text-white uppercase ml-2">
                  AGENCY
                </span>
              </div>
            </div>

          </div>
          <nav className="hidden md:flex space-x-8">
            {["NOSOTROS", "SERVICIOS", "PLANES", "CONTACTO"].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="hover:text-pink-200 transition-all duration-300 font-medium relative group"
              >
                {item}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}
          </nav>
          <Button className="bg-white text-pink-500 hover:bg-pink-50 font-semibold px-6 py-2 rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300">
            <Zap className="w-4 h-4 mr-2" />
            Comenzar ahora
          </Button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-pink-500 via-red-500 to-pink-600 text-white py-24 overflow-hidden">
        {/* Animated background pattern */}
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

        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center">
            <div className="space-y-6 md:space-y-8 text-center lg:text-left">
              <div className="flex items-center justify-center lg:justify-start space-x-2 mb-4">
                <div className="flex items-center space-x-2 mb-4">
                  <Star className="w-6 h-6 text-yellow-300 animate-spin" />
                  <span className="text-base md:text-lg font-semibold bg-white bg-opacity-20 px-3 py-1 md:px-4 md:py-1.5 rounded-full">
                    #1 Agencia Digital
                  </span>
                </div>
                <h1 className="text-6xl md:text-7xl font-bold leading-tight">
                  <span className="inline-block hover:scale-105 transition-transform duration-300">POTENCIAMOS</span>
                  <br />
                  <span className="inline-block italic font-light bg-gradient-to-r from-yellow-300 to-white bg-clip-text text-7xl animate-pulse pb-1">
                    tu éxito
                  </span>
                </h1>
              </div>

              <p className="text-lg md:text-xl leading-relaxed text-white text-opacity-95 max-w-xl mx-auto lg:mx-0">
                En <span className="font-bold text-yellow-300">IMPULSE AGENCY</span>, transformamos tu presencia digital
                y aceleramos el crecimiento de tu negocio con estrategias probadas.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Button className="bg-white text-pink-500 hover:bg-yellow-50 font-semibold px-6 py-3 md:px-8 md:py-4 rounded-full text-base md:text-lg shadow-2xl hover:shadow-3xl transform hover:scale-105 hover:-translate-y-1 transition-all duration-300 group">
                  <TrendingUp className="w-4 h-4 md:w-5 md:h-5 mr-2 group-hover:animate-bounce" />
                  Ver Planes
                </Button>
                <Button
                  variant="outline"
                  className="border-2 border-white text-white hover:bg-white hover:text-pink-500 font-semibold px-8 py-4 rounded-full text-lg bg-transparent backdrop-blur-sm shadow-2xl hover:shadow-3xl transform hover:scale-105 hover:-translate-y-1 transition-all duration-300"
                >
                  <Sparkles className="w-5 h-5 mr-2" />
                  Cotizar Precio
                </Button>
              </div>
            </div>

            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 to-pink-400 rounded-full blur-3xl opacity-30 animate-pulse"></div>
              <div className="relative transform hover:scale-105 transition-transform duration-500">
                <Image
                  src="/lightbulb-image.png"
                  alt="Bombilla representando ideas creativas"
                  width={500}
                  height={400}
                  className="w-full h-auto drop-shadow-2xl"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sabemos lo que hacemos */}
      <section className="py-24 bg-white relative">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-50 to-white"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-bold mb-8">
              <span className="text-red-500">SABEMOS LO QUE</span>{" "}
              <span className="italic font-light text-gray-700">hacemos</span>
            </h2>
            <p className="text-xl text-gray-600 mb-4">Optimizamos tu marca y aceleramos el crecimiento con</p>
            <div className="inline-block bg-gradient-to-r from-red-500 to-pink-500 text-white px-8 py-3 rounded-full text-xl font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300">
              <Sparkles className="w-5 h-5 inline mr-2" />
              estrategias especializadas
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
            <Card className="p-8 border-l-4 border-red-500 hover:shadow-xl transition-all duration-300 group">
              <CardContent className="p-0">
                <p className="text-lg text-gray-700 leading-relaxed group-hover:text-gray-800 transition-colors duration-300">
                  Capitalizamos oportunidades en fechas clave como:{" "}
                  <span className="font-bold text-red-500">Cyber Monday, Hot Sale, Black Friday</span>, optimizando
                  ventas y maximizando el ROI.
                </p>
              </CardContent>
            </Card>

            <Card className="p-8 border-l-4 border-red-500 hover:shadow-xl transition-all duration-300 group">
              <CardContent className="p-0">
                <p className="text-lg text-gray-700 leading-relaxed group-hover:text-gray-800 transition-colors duration-300">
                  Nos enfocamos en obtener la <span className="font-bold text-pink-500">mayor ganancia posible</span> en
                  relación con la inversión realizada.
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="text-center">
            <div className="inline-block bg-gradient-to-r from-red-500 to-pink-500 p-1 rounded-2xl shadow-2xl">
              <div className="bg-white rounded-xl p-8">
                <p className="text-3xl md:text-4xl font-bold mb-4">
                  <span className="text-red-500 animate-pulse">Más del 80%</span> del crecimiento de ventas
                </p>
                <p className="text-3xl md:text-4xl font-bold">
                  proviene de{" "}
                  <span className="font-black bg-gradient-to-r from-red-500 to-pink-500 bg-clip-text text-transparent">
                    CANALES DIGITALES.
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Soluciones Integrales */}
      <section className="py-24 bg-gradient-to-br from-pink-500 via-red-500 to-pink-600 text-white relative overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0">
          <div className="absolute top-10 left-10 w-32 h-32 bg-white opacity-5 rounded-full animate-bounce"></div>
          <div className="absolute bottom-10 right-10 w-24 h-24 bg-white opacity-5 rounded-full animate-bounce animation-delay-2000"></div>
          <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-white opacity-5 rounded-full animate-bounce animation-delay-4000"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-20">
            <div className="inline-flex items-center space-x-2 bg-white bg-opacity-20 backdrop-blur-sm px-6 py-2 rounded-full mb-6">
              <Rocket className="w-5 h-5" />
              <span className="font-semibold">Todo en Uno</span>
            </div>
            <h2 className="text-5xl md:text-6xl font-bold mb-6">
              SOLUCIONES <span className="italic font-light text-yellow-300">integrales</span>
            </h2>
            <p className="text-xl text-white text-opacity-95 max-w-2xl mx-auto leading-relaxed">
              100% pensadas para potenciar tu empresa
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icons: [
                  { component: Share2, bg: "bg-blue-600" },
                  { component: Share2, bg: "bg-gradient-to-r from-purple-500 to-pink-500" },
                  { component: Share2, bg: "bg-black" },
                ],
                title: "Redes Sociales",
                description: "Gestión estratégica de contenido para fortalecer tu marca en plataformas digitales.",
                features: ["Contenido personalizado", "Programación automática", "Análisis de engagement"],
              },
              {
                brand: "Brevo",
                brandColor: "text-green-600",
                title: "Email Marketing",
                description: "Campañas personalizadas para fidelizar clientes y generar nuevas oportunidades de venta.",
                features: ["Segmentación avanzada", "Automatización", "Métricas detalladas"],
              },
              {
                brand: "Meta",
                brandColor: "text-blue-600",
                title: "Publicidad en RRSS",
                description: "Publicidad en Facebook e Instagram para aumentar la visibilidad y generar conversiones.",
                features: ["Targeting preciso", "Optimización continua", "ROI maximizado"],
              },
              {
                brand: "Google Ads",
                brandColors: true,
                title: "Publicidad en Google",
                description: "Creación y gestión de anuncios en Google para mejorar el alcance y posicionamiento.",
                features: ["Palabras clave estratégicas", "Campañas optimizadas", "Seguimiento de conversiones"],
              },
              {
                icon: Linkedin,
                iconBg: "bg-blue-700",
                title: "LinkedIn",
                description:
                  "Optimización y gestión de perfiles profesionales y páginas empresariales para aumentar conexiones de valor.",
                features: ["Networking B2B", "Contenido profesional", "Lead generation"],
              },
              {
                icon: Building2,
                iconBg: "bg-blue-600",
                title: "Google My Business",
                description:
                  "Configuración y administración para mejorar la presencia de tu negocio en búsquedas locales.",
                features: ["Optimización local", "Gestión de reseñas", "Visibilidad en mapas"],
              },
            ].map((service, index) => (
              <Card
                key={index}
                className="bg-white text-gray-800 border-0 hover:shadow-2xl transform hover:scale-105 hover:-translate-y-2 transition-all duration-500 group overflow-hidden relative"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-pink-50 to-red-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <CardContent className="p-8 relative z-10">
                  <div className="mb-6">
                    {service.icons && (
                      <div className="flex items-center space-x-2">
                        {service.icons.map((icon, iconIndex) => (
                          <div
                            key={iconIndex}
                            className={`w-12 h-12 ${icon.bg} rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}
                          >
                            <icon.component className="w-6 h-6 text-white" />
                          </div>
                        ))}
                      </div>
                    )}
                    {service.brand && !service.brandColors && (
                      <div
                        className={`text-2xl font-bold ${service.brandColor} group-hover:scale-105 transition-transform duration-300`}
                      >
                        {service.brand}
                      </div>
                    )}
                    {service.brandColors && (
                      <div className="text-2xl font-bold group-hover:scale-105 transition-transform duration-300">
                        <span className="text-blue-500">G</span>
                        <span className="text-red-500">o</span>
                        <span className="text-yellow-500">o</span>
                        <span className="text-blue-500">g</span>
                        <span className="text-green-500">l</span>
                        <span className="text-red-500">e</span>
                        <span className="text-gray-600"> Ads</span>
                      </div>
                    )}
                    {service.icon && (
                      <div
                        className={`w-12 h-12 ${service.iconBg} rounded flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}
                      >
                        <service.icon className="w-6 h-6 text-white" />
                      </div>
                    )}
                  </div>
                  <h3 className="text-xl font-bold mb-4 group-hover:text-red-500 transition-colors duration-300">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">{service.description}</p>
                  <ul className="space-y-2 text-sm">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center">
                        <div className="w-1.5 h-1.5 bg-red-500 rounded-full mr-3 group-hover:animate-pulse"></div>
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

      {/* Diseño Gráfico Section */}
      <section className="py-24 bg-gradient-to-br from-gray-50 to-white relative">
        <div className="absolute inset-0 bg-gradient-to-r from-pink-50 to-red-50 opacity-50"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-20">
            <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-pink-500 to-red-500 text-white px-6 py-2 rounded-full mb-6">
              <Palette className="w-5 h-5" />
              <span className="font-semibold">Creatividad Premium</span>
            </div>
            <h2 className="text-5xl md:text-6xl font-bold mb-6">
              <span className="text-red-500 hover:text-red-600 transition-colors duration-300">DISEÑO GRÁFICO</span>{" "}
              <span className="italic font-light text-gray-700">y audiovisual</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Fortalecemos la identidad de tu marca con diseños profesionales que comunican y convierten
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-24">
            {[
              {
                icon: Award,
                title: "Identidad de Marca",
                description:
                  "Creación y desarrollo de logotipos, paleta de colores, tipografías y elementos visuales que consoliden tu identidad de tu empresa.",
                gradient: "from-red-500 to-pink-500",
              },
              {
                icon: Target,
                title: "Material Corporativo",
                description: "Diseño de tarjetas, sobres, firmas digitales y documentos institucionales.",
                gradient: "from-pink-500 to-red-400",
              },
              {
                icon: Sparkles,
                title: "Plantillas Personalizadas",
                description:
                  "Creación de formatos gráficos personalizables para publicaciones en distintas plataformas.",
                gradient: "from-red-400 to-pink-600",
              },
            ].map((service, index) => (
              <Card
                key={index}
                className={`bg-gradient-to-br ${service.gradient} text-white border-0 hover:shadow-2xl transform hover:scale-105 hover:-translate-y-2 transition-all duration-500 group overflow-hidden relative`}
              >
                <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
                <CardContent className="p-8 relative z-10">
                  <div className="w-16 h-16 bg-white bg-opacity-20 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-12 transition-all duration-300">
                    <service.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4 group-hover:text-yellow-200 transition-colors duration-300">
                    {service.title}
                  </h3>
                  <p className="text-white text-opacity-90 leading-relaxed">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Proceso Creativo */}
          <div className="text-center mb-16">
            <h3 className="text-5xl font-bold mb-8">
              <span className="italic font-light text-gray-700">Proceso creativo</span>
            </h3>
          </div>

          <div className="flex flex-col lg:flex-row justify-center items-center space-y-12 lg:space-y-0 lg:space-x-8">
            {[
              { number: 1, title: "Briefing", description: "Entendemos necesidades y objetivos", icon: Users },
              { number: 2, title: "Concepto", description: "Desarrollamos conceptos creativos", icon: Sparkles },
              { number: 3, title: "Diseño", description: "Creamos las piezas gráficas", icon: Palette },
              { number: 4, title: "Entrega", description: "Archivos finales en todos los formatos", icon: Rocket },
            ].map((step, index) => (
              <div key={index} className="flex flex-col lg:flex-row items-center">
                <div className="text-center group">
                  <div className="w-24 h-24 bg-gradient-to-br from-red-500 to-pink-500 rounded-full flex items-center justify-center text-white text-3xl font-bold mb-4 mx-auto shadow-2xl group-hover:scale-110 group-hover:shadow-3xl transition-all duration-300 relative overflow-hidden">
                    <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
                    <span className="relative z-10">{step.number}</span>
                  </div>
                  <div className="mb-2">
                    <step.icon className="w-6 h-6 text-red-500 mx-auto mb-2" />
                  </div>
                  <h4 className="text-xl font-bold mb-2 group-hover:text-red-500 transition-colors duration-300">
                    {step.title}
                  </h4>
                  <p className="text-gray-600 max-w-xs">{step.description}</p>
                </div>
                {index < 3 && (
                  <div className="hidden lg:block w-16 h-0.5 bg-gradient-to-r from-red-500 to-pink-500 mx-4 relative">
                    <div className="absolute inset-0 bg-gradient-to-r from-red-500 to-pink-500 animate-pulse"></div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline del primer mes */}
      <section className="py-24 bg-gradient-to-br from-gray-50 to-white relative">
        <div className="container mx-auto px-4">
          <div className="text-center mb-20">
            <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-red-500 to-pink-500 text-white px-6 py-2 rounded-full mb-6">
              <Rocket className="w-5 h-5" />
              <span className="font-semibold">Roadmap Garantizado</span>
            </div>
            <h2 className="text-5xl md:text-6xl font-bold mb-8 text-gray-800">
              ¿QUÉ NOS ESPERA EL <br />
              <span className="text-red-500">PRIMER MES?</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Te mostramos paso a paso cómo trabajamos para asegurar el éxito de tu proyecto desde el primer día
            </p>
          </div>

          <div className="max-w-5xl mx-auto">
            <div className="space-y-16">
              {[
                {
                  icon: Palette,
                  title: "Definición de Identidad",
                  week: "Semana 1",
                  description:
                    "Establecemos la identidad visual, logo, colores, tipografías y elementos gráficos que representen tu marca de forma profesional.",
                  color: "from-red-500 to-pink-500",
                },
                {
                  icon: Settings,
                  title: "Configuración Digital",
                  week: "Semana 2",
                  description:
                    "Configuramos redes sociales, tiendas online y optimizamos plataformas para mejorar posicionamiento y atraer tráfico de calidad.",
                  color: "from-pink-500 to-red-400",
                },
                {
                  icon: Users,
                  title: "Estrategia de Contenido",
                  week: "Semana 3",
                  description:
                    "Organizamos base de datos, desarrollamos catálogos digitales y creamos materiales gráficos coherentes para todos los canales.",
                  color: "from-red-400 to-pink-600",
                },
                {
                  icon: Rocket,
                  title: "Lanzamiento y Optimización",
                  week: "Semana 4",
                  description:
                    "Implementamos estrategias, iniciamos campañas publicitarias y comenzamos monitoreo activo con optimización continua.",
                  color: "from-pink-600 to-red-500",
                },
              ].map((step, index) => (
                <div key={index} className="flex items-start space-x-8 group">
                  <div className="flex-shrink-0">
                    <div
                      className={`w-20 h-20 bg-gradient-to-br ${step.color} rounded-full flex items-center justify-center shadow-2xl group-hover:scale-110 group-hover:shadow-3xl transition-all duration-500 relative overflow-hidden`}
                    >
                      <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
                      <step.icon className="w-10 h-10 text-white relative z-10" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-6">
                      <h3 className="text-3xl font-bold text-gray-800 group-hover:text-red-500 transition-colors duration-300">
                        {step.title}
                      </h3>
                      <span
                        className={`bg-gradient-to-r ${step.color} text-white px-6 py-2 rounded-full font-semibold shadow-lg group-hover:shadow-xl transform group-hover:scale-105 transition-all duration-300`}
                      >
                        {step.week}
                      </span>
                    </div>
                    <Card className="border-0 shadow-lg group-hover:shadow-xl transition-all duration-300">
                      <CardContent className="p-6">
                        <p className="text-gray-600 text-lg leading-relaxed">{step.description}</p>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section
        id="planes"
        className="py-24 bg-gradient-to-br from-pink-500 via-red-500 to-pink-600 text-white relative overflow-hidden"
      >
        {/* Animated background */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-full h-full bg-black opacity-10"></div>
          <div className="absolute top-20 right-20 w-40 h-40 bg-white opacity-5 rounded-full animate-pulse"></div>
          <div className="absolute bottom-20 left-20 w-32 h-32 bg-white opacity-5 rounded-full animate-pulse animation-delay-2000"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-20">
            <div className="inline-flex items-center space-x-2 bg-white bg-opacity-20 backdrop-blur-sm px-6 py-2 rounded-full mb-6">
              <Star className="w-5 h-5 text-yellow-300" />
              <span className="font-semibold">Planes Premium</span>
            </div>
            <h2 className="text-5xl md:text-6xl font-bold mb-6">
              NUESTROS <span className="italic font-light text-yellow-300">paquetes</span>
            </h2>
            <p className="text-xl text-white text-opacity-95 max-w-3xl mx-auto leading-relaxed">
              Elige el plan que mejor se adapte a las necesidades de tu negocio. Todos incluyen soporte personalizado.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 max-w-7xl mx-auto mb-16">
            {/* Plan Básico */}
            <Card className="bg-white text-gray-800 border-4 border-transparent hover:border-yellow-400 transition-all duration-500 transform hover:scale-105 hover:-translate-y-2 group overflow-hidden relative">
              <div className="absolute inset-0 bg-gradient-to-br from-gray-50 to-white opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <CardContent className="p-8 relative z-10">
                <div className="text-center mb-8">
                  <h3 className="text-3xl font-bold mb-2 group-hover:text-red-500 transition-colors duration-300">
                    BÁSICO
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    Ideal para empezar a profesionalizar tu presencia digital
                  </p>
                </div>

                <div className="mb-8">
                  <div className="flex items-center mb-4">
                    <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center mr-3">
                      <Check className="w-5 h-5 text-white" />
                    </div>
                    <span className="font-semibold text-lg">Incluye:</span>
                  </div>
                  <ul className="space-y-3">
                    {[
                      "Desarrollo completo de identidad visual",
                      "Configuración de redes sociales principales",
                      "Plantillas personalizadas",
                      "Publicidad en Facebook",
                    ].map((item, index) => (
                      <li
                        key={index}
                        className="flex items-start group-hover:translate-x-2 transition-transform duration-300"
                      >
                        <div className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0 group-hover:animate-pulse"></div>
                        <span className="text-sm">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mb-8">
                  <div className="flex items-center mb-4">
                    <div className="w-8 h-8 bg-red-500 rounded-full flex items-center justify-center mr-3">
                      <X className="w-5 h-5 text-white" />
                    </div>
                    <span className="font-semibold text-lg">No incluye:</span>
                  </div>
                  <ul className="space-y-2 text-sm text-gray-500">
                    {["Email marketing avanzado", "Google Ads", "LinkedIn", "Análisis", "Consultoría Premium"].map(
                      (item, index) => (
                        <li key={index}>• {item}</li>
                      ),
                    )}
                  </ul>
                </div>

                <Button className="w-full bg-gradient-to-r from-gray-800 to-gray-700 hover:from-red-500 hover:to-pink-500 text-white py-3 rounded-full font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300">
                  Cotizar plan →
                </Button>
              </CardContent>
            </Card>

            {/* Plan Pro */}
            <Card className="bg-white text-gray-800 border-4 border-yellow-400 relative transform scale-105 shadow-2xl">
              <div className="absolute -top-6 left-1/2 transform -translate-x-1/2">
                <div className="bg-gradient-to-r from-yellow-400 to-yellow-500 text-gray-800 px-6 py-3 rounded-full text-sm font-bold shadow-lg flex items-center space-x-2">
                  <Star className="w-4 h-4" />
                  <span>MÁS POPULAR</span>
                  <Star className="w-4 h-4" />
                </div>
              </div>
              <div className="absolute inset-0 bg-gradient-to-br from-yellow-50 to-orange-50 opacity-50"></div>
              <CardContent className="p-8 relative z-10">
                <div className="text-center mb-8">
                  <h3 className="text-3xl font-bold mb-2 text-red-500">PRO</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Ideal para empresas o profesionales tu presencia digital
                  </p>
                </div>

                <div className="mb-8">
                  <div className="flex items-center mb-4">
                    <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center mr-3">
                      <Check className="w-5 h-5 text-white" />
                    </div>
                    <span className="font-semibold text-lg">Incluye:</span>
                  </div>
                  <ul className="space-y-3">
                    {[
                      "Todo lo incluido en BÁSICO",
                      "Configuración avanzada en Instagram y Facebook",
                      "Email marketing con 3 campañas",
                      "Publicidad con Google Ads",
                      "Optimización continua",
                    ].map((item, index) => (
                      <li key={index} className="flex items-start">
                        <div className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0 animate-pulse"></div>
                        <span className="text-sm">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mb-8">
                  <div className="flex items-center mb-4">
                    <div className="w-8 h-8 bg-red-500 rounded-full flex items-center justify-center mr-3">
                      <X className="w-5 h-5 text-white" />
                    </div>
                    <span className="font-semibold text-lg">No incluye:</span>
                  </div>
                  <ul className="space-y-2 text-sm text-gray-500">
                    {["Email marketing avanzado", "LinkedIn Premium", "Análisis avanzado", "Consultoría 24/7"].map(
                      (item, index) => (
                        <li key={index}>• {item}</li>
                      ),
                    )}
                  </ul>
                </div>

                <Button className="w-full bg-gradient-to-r from-red-500 to-pink-500 hover:from-red-600 hover:to-pink-600 text-white py-3 rounded-full font-semibold shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300">
                  <Sparkles className="w-4 h-4 mr-2" />
                  Cotizar plan →
                </Button>
              </CardContent>
            </Card>

            {/* Plan Advanced */}
            <Card className="bg-white text-gray-800 border-4 border-transparent hover:border-purple-400 transition-all duration-500 transform hover:scale-105 hover:-translate-y-2 group overflow-hidden relative">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-50 to-pink-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <CardContent className="p-8 relative z-10">
                <div className="text-center mb-8">
                  <h3 className="text-3xl font-bold mb-2 group-hover:text-purple-500 transition-colors duration-300">
                    ADVANCED
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    Ideal para empresas que buscan maximizar tu presencia digital
                  </p>
                </div>

                <div className="mb-8">
                  <div className="flex items-center mb-4">
                    <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center mr-3">
                      <Check className="w-5 h-5 text-white" />
                    </div>
                    <span className="font-semibold text-lg">Incluye:</span>
                  </div>
                  <ul className="space-y-3">
                    {[
                      "Todo lo incluido en PRO",
                      "LinkedIn Premium completo",
                      "Análisis y optimización avanzada",
                      "Consultoría 24/7",
                      "Soporte prioritario",
                    ].map((item, index) => (
                      <li
                        key={index}
                        className="flex items-start group-hover:translate-x-2 transition-transform duration-300"
                      >
                        <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 mr-3 flex-shrink-0 group-hover:animate-pulse"></div>
                        <span className="text-sm">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mb-8">
                  <div className="flex items-center mb-4">
                    <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center mr-3">
                      <Check className="w-5 h-5 text-white" />
                    </div>
                    <span className="font-semibold text-lg text-green-600">Todo incluido:</span>
                  </div>
                  <p className="text-sm text-green-600 font-medium">
                    ¡Sin limitaciones! Acceso completo a todas nuestras herramientas y servicios.
                  </p>
                </div>

                <Button className="w-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white py-3 rounded-full font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300">
                  <Rocket className="w-4 h-4 mr-2" />
                  Cotizar plan →
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Consulta gratuita */}
          <div className="max-w-3xl mx-auto">
            <Card className="bg-white text-gray-800 border-0 shadow-2xl hover:shadow-3xl transition-all duration-500 transform hover:scale-105 overflow-hidden relative">
              <div className="absolute inset-0 bg-gradient-to-br from-yellow-50 to-orange-50"></div>
              <CardContent className="p-10 text-center relative z-10">
                <div className="mb-6">
                  <div className="w-16 h-16 bg-gradient-to-r from-red-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Users className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-3xl font-bold mb-4">¿No sabés qué plan elegir?</h3>
                  <p className="text-gray-600 text-lg leading-relaxed">
                    Agenda una consulta gratuita de 30 minutos y te ayudamos a encontrar la solución perfecta para tu
                    negocio.
                  </p>
                </div>
                <Button className="bg-gradient-to-r from-red-500 to-pink-500 hover:from-red-600 hover:to-pink-600 text-white px-10 py-4 rounded-full text-lg font-semibold shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300">
                  <Sparkles className="w-5 h-5 mr-2" />
                  Agendar consulta gratuita
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-r from-gray-900 to-black text-white py-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-pink-900 to-red-900 opacity-10"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center">
            <div className="flex items-center justify-center space-x-3 mb-8 group">
              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                <Image
                  src={logoImpulse}
                  alt="Logo IMPULSE"
                  width={40}
                  height={40}
                  className="object-contain p-1" // Ajusta el padding según necesites
                />
              </div>
              <div className="flex flex-col">
                <span className="text-3xl font-bold tracking-wide text-white">
                  IMPULSE
                </span>
                <div className="flex items-center">
                  <div className="h-1 bg-white" style={{ width: 'calc(100% - 4.5rem)' }}></div>
                  <span className="text-sm font-semibold tracking-widest text-white uppercase ml-2">
                    AGENCY
                  </span>
                </div>
              </div>




            </div>
            <p className="text-gray-300 text-lg mb-6 max-w-2xl mx-auto leading-relaxed">
              Transformamos tu presencia digital y aceleramos el crecimiento de tu negocio con estrategias probadas
            </p>
            <div className="flex justify-center space-x-6 mb-8">
              {["Facebook", "Instagram", "LinkedIn", "Twitter"].map((social) => (
                <a
                  key={social}
                  href="#"
                  className="w-10 h-10 bg-white bg-opacity-10 rounded-full flex items-center justify-center hover:bg-red-500 transition-all duration-300 transform hover:scale-110"
                >
                  <Share2 className="w-5 h-5" />
                </a>
              ))}
            </div>
            <p className="text-gray-500 text-sm">© 2024 IMPULSE AGENCY. Todos los derechos reservados.</p>
          </div>
        </div>
      </footer>

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(180deg); }
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
      `}</style>
    </div>
  )
}
