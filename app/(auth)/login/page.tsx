'use client'

import { useState } from 'react'
import { login } from '@/app/actions/auth'
import Link from 'next/link'

export default function LoginPage() {
  const [error, setError] = useState<string | null>(null)

  async function handleSubmit(formData: FormData) {
    setError(null)
    const result = await login(formData)
    if (result?.error) {
      setError(result.error)
    }
  }

  return (
    <div style={{ maxWidth: '400px', margin: '50px auto', padding: '20px', border: '1px solid #ccc', borderRadius: '8px' }}>
      <h1>Iniciar Sesión</h1>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <form action={handleSubmit}>
        <div style={{ marginBottom: '10px' }}>
          <label>Email:</label>
          <input type="email" name="email" required style={{ width: '100%', padding: '8px', marginTop: '5px' }} />
        </div>
        <div style={{ marginBottom: '10px' }}>
          <label>Contraseña:</label>
          <input type="password" name="password" required style={{ width: '100%', padding: '8px', marginTop: '5px' }} />
        </div>
        <button type="submit" style={{ width: '100%', padding: '10px', cursor: 'pointer' }}>Ingresar</button>
      </form>
      <p style={{ marginTop: '15px' }}>
        ¿No tienes cuenta? <Link href="/register">Regístrate</Link>
      </p>
      <p>
        <Link href="/forgot-password">¿Olvidaste tu contraseña?</Link>
      </p>
    </div>
  )
}