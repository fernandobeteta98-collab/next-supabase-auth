# Sistema de Autenticación Seguro con Next.js y Supabase

Aplicación web desarrollada con Next.js App Router, TypeScript y Supabase SSR. Implementa autenticación robusta mediante cookies `httpOnly`, protección contra ataques XSS/CSRF, Server Actions y Middleware para el control de acceso a rutas protegidas.

##  Stack Tecnológico

- **Framework:** Next.js (App Router)
- **Base de Datos & Auth:** Supabase (`@supabase/ssr`)
- **Lenguaje:** TypeScript
- **Estilos:** Tailwind CSS

##  Características de Seguridad

- Gestión de sesiones del lado del servidor usando cookies `httpOnly`, `Secure` y `SameSite`.
- Autenticación manejada íntegramente por Server Actions.
- Middleware en el servidor para proteger rutas privadas (`/dashboard`) y redirigir usuarios autenticados.
- Sin exposición de tokens o credenciales en `localStorage`.

##  Instalación y Uso Local

1. **Clonar el repositorio:**
   ```bash
   git clone [https://github.com/TU_USUARIO/next-supabase-auth.git](https://github.com/fernandobeteta98-collab/next-supabase-auth.git)
   cd next-supabase-auth