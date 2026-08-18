# AndusChile Reservas — Landing page

Landing page para campaña de Meta Ads dirigida a dueños de alojamientos
turísticos (hostales, cabañas, hoteles boutique) en Chile.

Stack: Vite + React 19, CSS Modules, mismo design system del sitio
principal (anduschile.com).

## Desarrollo local

```
npm install
npm run dev
```

Copia `.env.example` a `.env` y agrega tu endpoint de Formspree en
`VITE_FORMSPREE_ENDPOINT` para que el formulario envíe datos de verdad.
Mientras esa variable esté vacía, el formulario avisa que aún no está
conectado y no finge un envío exitoso.

## Para desplegar en Vercel

1. Subir este repo a GitHub como `anduschile/anduschile-reservas`
2. Crear nuevo proyecto en Vercel conectado a ese repo
3. Build command: `npm run build` / Output: `dist`
4. Agregar variable de entorno `VITE_FORMSPREE_ENDPOINT`
5. En Vercel: Settings → Domains → agregar `reservas.anduschile.com`
6. En Hostinger DNS: agregar registro CNAME `reservas` → `cname.vercel-dns.com`
