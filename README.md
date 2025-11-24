# 🐾 Modepran - Protectora de Animales Valencia

<div align="center">
  <img src="https://images.unsplash.com/photo-1552053831-71594a27632d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80" alt="Modepran Banner" width="100%" />
  
  <p><strong>Sitio web moderno para la Protectora de Animales Modepran en Valencia</strong></p>
  
  [![License: MIT](https://img.shields.io/badge/License-MIT-green.svg)](https://opensource.org/licenses/MIT)
  [![React](https://img.shields.io/badge/React-19.2.0-blue.svg)](https://reactjs.org/)
  [![TypeScript](https://img.shields.io/badge/TypeScript-5.8.2-blue.svg)](https://www.typescriptlang.org/)
  [![Vite](https://img.shields.io/badge/Vite-6.2.0-purple.svg)](https://vitejs.dev/)
</div>

---

## 📋 Sobre el Proyecto

Aplicación web completa para la **Protectora de Animales Modepran** en Valencia. Permite a los usuarios explorar animales en adopción, conocer los centros, unirse como voluntarios, colaborar mediante Teaming, y mantenerse informados con las últimas noticias.

### ✨ Características Principales

- 🐕 **Catálogo de Adopciones**: Explora perros y gatos disponibles con filtros avanzados
- 📍 **Centros**: Información sobre ubicaciones, horarios y cómo llegar
- 🤝 **Voluntariado**: Únete al equipo de voluntarios
- 💰 **Teaming**: Programa de micro-donaciones desde 1€/mes
- 📰 **Blog**: Últimas noticias y novedades de la protectora
- 📞 **Contacto**: Formulario y información de donaciones
- ♿ **Accesibilidad**: Cumple estándares WCAG 2.1 AA
- 📱 **Responsive**: Diseño adaptado a todos los dispositivos
- 🔍 **SEO Optimizado**: Meta tags completos y Open Graph

## 🚀 Inicio Rápido

### Requisitos Previos

- **Node.js** (v16 o superior)
- **npm** o **yarn**

### Instalación

1. **Clona el repositorio**:

```bash
git clone https://github.com/JuamBer/modepran-mvp.git
cd modepran-mvp
```

2. **Instala las dependencias**:

```bash
npm install
```

3. **Ejecuta en desarrollo**:

```bash
npm run dev
```

4. **Abre tu navegador**:
   - El servidor estará disponible en `http://localhost:5173`

### Scripts Disponibles

```bash
npm run dev      # Servidor de desarrollo
npm run build    # Compilar para producción
npm run preview  # Vista previa del build
```

## 🏗️ Estructura del Proyecto

```
modepran-mvp/
├── components/          # Componentes reutilizables
│   ├── Footer.tsx      # Pie de página con enlaces y contacto
│   ├── Navbar.tsx      # Barra de navegación principal
│   ├── Timeline.tsx    # Línea de tiempo de eventos
│   └── LoadingStates.tsx # Estados de carga y error
├── pages/              # Páginas de la aplicación
│   ├── Home.tsx        # Página principal
│   ├── Catalog.tsx     # Catálogo de animales
│   ├── AnimalDetail.tsx # Detalle de un animal
│   ├── Centers.tsx     # Centros de la protectora
│   ├── Contact.tsx     # Contacto y donaciones
│   ├── Volunteer.tsx   # Información de voluntariado
│   ├── Teaming.tsx     # Página de Teaming
│   └── Blog.tsx        # Blog y noticias
├── services/           # Servicios y APIs (futuro)
├── App.tsx             # Componente principal
├── index.tsx           # Punto de entrada
├── constants.ts        # Datos mock y constantes
├── types.ts            # Tipos TypeScript
└── index.html          # HTML principal
```

## 🎨 Tecnologías Utilizadas

- **React 19.2.0** - Framework UI
- **TypeScript 5.8.2** - Tipado estático
- **Vite 6.2.0** - Build tool ultrarrápido
- **React Router DOM 7.9.6** - Enrutamiento
- **Tailwind CSS** - Estilos utility-first
- **Lucide React** - Iconos modernos
- **Open Sans & Montserrat** - Tipografías

## 📄 Páginas y Rutas

| Ruta            | Descripción                         |
| --------------- | ----------------------------------- |
| `/`             | Página principal con casos urgentes |
| `/adopta`       | Catálogo completo de animales       |
| `/adopta/:id`   | Detalle de un animal específico     |
| `/centros`      | Información de centros              |
| `/contacto`     | Formulario e info de donaciones     |
| `/voluntariado` | Cómo ser voluntario                 |
| `/teaming`      | Programa de Teaming                 |
| `/blog`         | Noticias y novedades                |

## 🎯 Características Implementadas

### ✅ Funcionalidad

- [x] Sistema de filtros (especie, sexo, tamaño, edad)
- [x] Navegación responsive
- [x] Formulario de contacto
- [x] Timeline de eventos para cada animal
- [x] Información médica detallada
- [x] Sistema de estados (Urgente, Reservado, En Acogida)
- [x] Blog con categorías
- [x] Página de Teaming completa

### ✅ Accesibilidad

- [x] Skip navigation link
- [x] ARIA labels y roles
- [x] Navegación por teclado
- [x] Focus rings visibles
- [x] Labels HTML apropiados
- [x] Elementos semánticos

### ✅ SEO

- [x] Meta tags completos
- [x] Open Graph tags
- [x] Twitter Card tags
- [x] Títulos descriptivos
- [x] Descriptions optimizadas

### ✅ UX/UI

- [x] Loading states
- [x] Error states
- [x] Empty states
- [x] Transiciones suaves
- [x] Feedback visual
- [x] Mobile-first design

## 🌐 Redes Sociales Oficiales

- **Facebook**: [@protectoramodepran](https://www.facebook.com/protectoramodepran)
- **Instagram**: [@protectoradeanimales_modepran](https://www.instagram.com/protectoradeanimales_modepran/)
- **Twitter**: [@modepran](https://twitter.com/modepran)
- **YouTube**: [Canal Modepran](https://www.youtube.com/channel/UCNFXpMeTcp9ayxbSK3oVWCQ)

## 📞 Información de Contacto

**Protectora de Animales Modepran**

- 📍 Camino Nuevo de Paterna, 165, 46035 Benimàmet, Valencia
- 📞 +34 963 40 65 55
- 📧 info@modepran.com
- 💳 **Cuenta bancaria**: ES94 2100 1716 86 0100503303

## 🚀 Despliegue

Ver [DEPLOYMENT.md](./DEPLOYMENT.md) para instrucciones detalladas de despliegue en:

- GitHub Pages
- Netlify
- Vercel

## 📝 Changelog

Ver [CHANGELOG.md](./CHANGELOG.md) para el historial completo de cambios.

## 🤝 Contribuir

Las contribuciones son bienvenidas. Por favor:

1. Fork el proyecto
2. Crea una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

## 📄 Licencia

Este proyecto está bajo la Licencia MIT. Ver `LICENSE` para más información.

## 👥 Autores

- **JuamBer** - [@JuamBer](https://github.com/JuamBer)

## 🙏 Agradecimientos

- Protectora de Animales Modepran por su increíble labor
- Todos los voluntarios que dedican su tiempo
- Los teamers que apoyan mensualmente
- Las familias que adoptan y acogen

---

<div align="center">
  <p><strong>¡Todos somos la Prote! 🐾</strong></p>
  <p>Hecho con ❤️ para los animales de Modepran</p>
</div>
