import type { Metadata } from 'next'
import { GeistSans } from 'geist/font/sans'
import { GeistMono } from 'geist/font/mono'
import { ContactModalProvider } from '@/components/ContactModalContext'
import { Toaster } from 'react-hot-toast'
import './globals.css'

export const metadata: Metadata = {
  title: 'Impulse Agency',
  description: 'Creado por FARO',
  generator: 'Faro.dev',
  icons: {
    icon: [
      { url: '/material web/ICONO COLOR IMPULSE.png', sizes: '32x32', type: 'image/png' },
      { url: '/material web/ICONO COLOR IMPULSE.png', sizes: '16x16', type: 'image/png' },
    ],
    shortcut: '/material web/ICONO COLOR IMPULSE.png',
    apple: { url: '/material web/ICONO COLOR IMPULSE.png', sizes: '180x180', type: 'image/png' },
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <style>{`
html {
  font-family: ${GeistSans.style.fontFamily};
  --font-sans: ${GeistSans.variable};
  --font-mono: ${GeistMono.variable};
  scroll-padding-top: 80px;
}

@media (prefers-reduced-motion: reduce) {
  html {
    scroll-behavior: auto;
  }
}

.modal-open {
  overflow: hidden !important;
}
        `}</style>
      </head>
      <body>
        <ContactModalProvider>
          {children}
        </ContactModalProvider>
        <Toaster 
          position="top-center"
          toastOptions={{
            duration: 4000,
            style: {
              background: '#1f2937',
              color: '#fff',
              fontSize: '14px',
              fontWeight: '500',
              padding: '16px 20px',
              borderRadius: '12px',
              boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.25)',
            },
            success: {
              iconTheme: {
                primary: '#10b981',
                secondary: '#fff',
              },
            },
            error: {
              iconTheme: {
                primary: '#ef4444',
                secondary: '#fff',
              },
            },
          }}
        />
      </body>
    </html>
  )
}
