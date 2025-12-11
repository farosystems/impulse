import { NextRequest, NextResponse } from 'next/server'
import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(request: NextRequest) {
  try {
    const { nombre, empresa, cargo, email, asunto, mensaje } = await request.json()

    const { data, error } = await resend.emails.send({
      from: 'onboarding@resend.dev',
      to: ['marketing@impulse.com.ar'],
      subject: `Consulta: ${asunto}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #e11d48; border-bottom: 2px solid #e11d48; padding-bottom: 10px;">
            Nueva consulta desde la web
          </h2>
          
          <div style="margin: 20px 0;">
            <h3>Información del contacto:</h3>
            <p><strong>Nombre y Apellido:</strong> ${nombre}</p>
            <p><strong>Empresa:</strong> ${empresa}</p>
            <p><strong>Cargo:</strong> ${cargo}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Asunto:</strong> ${asunto}</p>
          </div>

          <div style="margin: 20px 0;">
            <h3>Mensaje:</h3>
            <div style="background: #f8f9fa; padding: 15px; border-left: 4px solid #e11d48;">
              ${mensaje || 'Sin mensaje adicional'}
            </div>
          </div>

          <div style="margin-top: 30px; font-size: 12px; color: #666;">
            <p>Este email fue enviado desde el formulario de contacto de Impulse Agency.</p>
          </div>
        </div>
      `,
    })

    if (error) {
      return NextResponse.json({ error }, { status: 400 })
    }

    return NextResponse.json({ message: 'Email sent successfully', data })
  } catch (error) {
    return NextResponse.json({ error: 'Failed to send email' }, { status: 500 })
  }
}