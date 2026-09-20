import Link from 'next/link'

export default function Home() {
  return (
    <main style={{ textAlign: 'center', marginTop: '100px' }}>
      <h1>Sistema de Autenticación Seguro</h1>
      <p style={{ marginTop: '20px' }}>
        <Link href="/login" style={{ marginRight: '15px' }}>Iniciar Sesión</Link>
        <Link href="/register">Registrarse</Link>
      </p>
    </main>
  )
}