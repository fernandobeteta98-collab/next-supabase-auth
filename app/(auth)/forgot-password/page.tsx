'use client'

import { useState } from 'react'
import { resetPassword } from '@/app/actions/auth'

export default function ForgotPasswordPage() {
  const [message, setMessage] = useState<string | null>(null)
  const [error, setError] = useState<string | null>(null)

  async function handleSubmit(formData: FormData) {
    setError(null)
    setMessage(null)
    const result = await resetPassword(formData)
    if (result?.error) {
      setError(result.error)
    } else if (result?.success) {
      setMessage(result.success)
    }
  }

  return (
    <div style={{ maxWidth: '400px', margin: '50px auto', padding: '20px', border: '1px solid #ccc', borderRadius: '8px' }}>
      <h1>Recuperar Contraseña</h1>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      {message && <p style={{ color: 'green' }}>{message}</p>}
      <form action={handleSubmit}>
        <div style={{ marginBottom: '10px' }}>
          <label>Email:</label>
          <input type="email" name="email" required style={{ width: '100%', padding: '8px', marginTop: '5px' }} />
        </div>
        <button type="submit" style={{ width: '100%', padding: '10px', cursor: 'pointer' }}>Enviar Enlace</button>
      </form>
    </div>
  )
}