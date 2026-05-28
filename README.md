# ECIJA Argentina — Sitio web

Sitio institucional del estudio jurídico, construido con **Next.js 15**, **Tailwind CSS** y **TypeScript**. Trilingüe (español, inglés, alemán) y completamente estático: rapidísimo, SEO-friendly y listo para desplegar en Vercel.

## Stack

- Next.js 15 (App Router) + React 19
- Tailwind CSS 3
- Framer Motion (animaciones de scroll y hero)
- next/font (tipografías Fraunces + Inter)
- i18n con middleware propio (ES / EN / DE)

## Estructura

```
app/
  [locale]/                # rutas por idioma: /es, /en, /de
    page.tsx               # home
    estudio/               # sobre el estudio
    areas/                 # áreas de práctica (lista y detalle)
    equipo/                # equipo (directorio y perfiles)
    insights/              # blog / análisis
    oficinas/              # oficinas
    contacto/              # formulario
    legal/[slug]/          # privacidad, términos, cookies
components/                # UI compartida
lib/
  i18n/                    # diccionarios y config de idioma
  data/                    # contenido tipado (áreas, equipo, insights, oficinas)
middleware.ts              # redirige a /[locale] según el idioma del navegador
```

## Desarrollo local

```bash
npm install
npm run dev
# http://localhost:3000
```

## Build de producción

```bash
npm run build
npm run start
```

## Deploy en Vercel

1. Entrá a [vercel.com/new](https://vercel.com/new) e iniciá sesión con GitHub.
2. Importá el repositorio `dcontro20/ecija-webpage`.
3. Vercel detecta automáticamente que es un proyecto Next.js — no hace falta tocar nada.
4. **Production Branch**: elegir `main` (o la rama que se quiera como producción).
5. Click en **Deploy**.

Cada push a la rama de producción genera un nuevo deploy automáticamente. Cualquier otra rama (incluidas las de Claude Code) recibe una **URL de preview** automática para revisar cambios antes de mergear.

## Idiomas

Todo el contenido vive en archivos tipados:

- UI: `lib/i18n/dictionaries.ts`
- Contenido (áreas, equipo, insights, oficinas, sectores): `lib/data/*.ts`

Cada string tiene su versión en `es`, `en` y `de`. Agregar un idioma nuevo se reduce a sumarlo a `lib/i18n/config.ts` y completar los diccionarios.

## Notas

- Los datos del equipo, métricas y direcciones son **placeholders realistas** y deben reemplazarse por los datos reales antes de salir a producción.
- Las fotos del equipo usan Unsplash temporalmente. Reemplazarlas por fotos profesionales reales.
- El formulario de contacto y el de newsletter aún no envían los datos a ningún backend — solo muestran el mensaje de éxito en cliente.
