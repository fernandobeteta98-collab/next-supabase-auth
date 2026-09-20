import { createClient } from '@/utils/supabase/server'
import { signout } from '@/app/actions/auth'

export default async function DashboardPage() {
  const supabase = await createClient()

  const {
    data: { user },
  } = await supabase.auth.getUser()

  return (
    <div style={{ maxWidth: '600px', margin: '50px auto', padding: '20px' }}>
      <h1>Dashboard Privado</h1>
      <p style={{ marginTop: '10px' }}>Usuario autenticado correctamente.</p>
      
      <div style={{ background: '#f4f4f4', padding: '15px', borderRadius: '5px', margin: '20px 0', color: '#333' }}>
        <p><strong>Email:</strong> {user?.email}</p>
        <p><strong>ID de Usuario:</strong> {user?.id}</p>
      </div>

      <form action={signout}>
        <button type="submit" style={{ padding: '10px 20px', backgroundColor: '#d9534f', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer' }}>
          Cerrar Sesión
        </button>
      </form>
    </div>
  )
}