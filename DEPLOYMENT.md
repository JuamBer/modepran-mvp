# Guía de Despliegue - Modepran MVP

## 📋 Requisitos Previos

- Node.js (v16 o superior)
- npm o yarn
- Cuenta en GitHub (para GitHub Pages) o servicio de hosting

## 🚀 Despliegue en GitHub Pages

### Opción 1: Despliegue Automático con GitHub Actions

1. **Preparar el repositorio**:

```bash
git init
git add .
git commit -m "Initial commit with improvements"
git branch -M main
git remote add origin https://github.com/JuamBer/modepran-mvp.git
git push -u origin main
```

2. **Configurar GitHub Pages**:
   - Ve a Settings → Pages
   - Source: GitHub Actions
   - El workflow se ejecutará automáticamente

### Opción 2: Despliegue Manual

1. **Construir el proyecto**:

```bash
npm run build
```

2. **Instalar gh-pages** (si no está instalado):

```bash
npm install --save-dev gh-pages
```

3. **Agregar scripts en package.json**:

```json
{
  "scripts": {
    "predeploy": "npm run build",
    "deploy": "gh-pages -d dist"
  }
}
```

4. **Desplegar**:

```bash
npm run deploy
```

5. **Configurar en GitHub**:
   - Settings → Pages → Source: gh-pages branch

## 🌐 Despliegue en Netlify

1. **Conectar repositorio**:

   - Crear cuenta en Netlify
   - New site from Git
   - Conectar con GitHub

2. **Configurar build**:

   - Build command: `npm run build`
   - Publish directory: `dist`

3. **Variables de entorno** (si aplica):

   - Configurar en Site settings → Environment variables

4. **Desplegar**:
   - El despliegue es automático en cada push

## 📦 Despliegue en Vercel

1. **Instalar Vercel CLI**:

```bash
npm i -g vercel
```

2. **Login**:

```bash
vercel login
```

3. **Desplegar**:

```bash
vercel
```

4. **Producción**:

```bash
vercel --prod
```

## 🔧 Configuración de vite.config.ts

Para GitHub Pages, asegúrate de que `vite.config.ts` tenga:

```typescript
export default defineConfig({
  base: "/modepran-mvp/", // Nombre de tu repositorio
  plugins: [react()],
});
```

Para otros servicios (Netlify, Vercel), usa:

```typescript
export default defineConfig({
  base: "/",
  plugins: [react()],
});
```

## 🌍 Dominio Personalizado

### GitHub Pages

1. Crear archivo `CNAME` en `/public`:

```
www.protectoramodepran.com
```

2. Configurar DNS:
   - Tipo A → 185.199.108.153
   - Tipo A → 185.199.109.153
   - Tipo A → 185.199.110.153
   - Tipo A → 185.199.111.153
   - CNAME www → tu-usuario.github.io

### Netlify/Vercel

1. En dashboard → Domain settings
2. Agregar dominio personalizado
3. Configurar DNS según instrucciones

## 📊 Analytics (Opcional)

### Google Analytics

1. Crear cuenta en Google Analytics
2. Obtener Measurement ID (G-XXXXXXXXXX)
3. Agregar en `index.html` antes de `</head>`:

```html
<!-- Google Analytics -->
<script
  async
  src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"
></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag() {
    dataLayer.push(arguments);
  }
  gtag("js", new Date());
  gtag("config", "G-XXXXXXXXXX");
</script>
```

## 🔐 Variables de Entorno (Para futuras integraciones)

Crear archivo `.env`:

```env
VITE_API_URL=https://api.modepran.com
VITE_PAYPAL_CLIENT_ID=tu-client-id
VITE_GOOGLE_MAPS_API_KEY=tu-api-key
```

**Importante**: Nunca commitear `.env` al repositorio. Agregar a `.gitignore`.

## 🧪 Testing Pre-Deploy

Antes de cada despliegue, ejecutar:

```bash
# Instalar dependencias
npm install

# Verificar errores de TypeScript
npm run build

# Vista previa del build
npm run preview

# Tests (cuando se implementen)
npm test
```

## ✅ Checklist Pre-Producción

- [ ] Actualizar `base` en `vite.config.ts`
- [ ] Verificar que todas las URLs sean relativas o absolutas correctas
- [ ] Probar formularios
- [ ] Verificar links externos (redes sociales)
- [ ] Comprobar responsive en múltiples dispositivos
- [ ] Validar accesibilidad (Lighthouse)
- [ ] Optimizar imágenes
- [ ] Configurar meta tags SEO
- [ ] Añadir favicon
- [ ] Configurar dominio personalizado
- [ ] Configurar HTTPS
- [ ] Añadir Analytics
- [ ] Crear sitemap.xml
- [ ] Configurar robots.txt

## 📱 PWA (Progressive Web App) - Opcional

Para convertir en PWA:

1. **Instalar plugin**:

```bash
npm install vite-plugin-pwa -D
```

2. **Configurar en vite.config.ts**:

```typescript
import { VitePWA } from "vite-plugin-pwa";

export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: "autoUpdate",
      manifest: {
        name: "Modepran - Protectora de Animales",
        short_name: "Modepran",
        description: "Adopta, acoge o colabora con Modepran",
        theme_color: "#15803d",
        icons: [
          {
            src: "icon-192x192.png",
            sizes: "192x192",
            type: "image/png",
          },
          {
            src: "icon-512x512.png",
            sizes: "512x512",
            type: "image/png",
          },
        ],
      },
    }),
  ],
});
```

## 🆘 Solución de Problemas

### Páginas en blanco después del deploy

- Verificar `base` en vite.config.ts
- Comprobar rutas relativas vs absolutas
- Verificar console del navegador para errores

### Imágenes no cargan

- Usar URLs absolutas para imágenes externas
- Para imágenes locales, colocar en `/public`
- Verificar permisos CORS

### Rutas 404 en refresh

- En Netlify: crear `_redirects` en `/public`:

```
/*    /index.html   200
```

- En Vercel: crear `vercel.json`:

```json
{
  "rewrites": [{ "source": "/(.*)", "destination": "/" }]
}
```

## 📞 Soporte

Para problemas específicos:

- GitHub Issues: https://github.com/JuamBer/modepran-mvp/issues
- Email: info@modepran.com

## 📚 Recursos Adicionales

- [Vite Deploy Guide](https://vitejs.dev/guide/static-deploy.html)
- [GitHub Pages Docs](https://docs.github.com/en/pages)
- [Netlify Docs](https://docs.netlify.com/)
- [Vercel Docs](https://vercel.com/docs)

---

**Última actualización**: Noviembre 2024
