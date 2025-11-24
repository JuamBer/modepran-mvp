import { ArrowRight, Calendar, Heart } from 'lucide-react';
import React from 'react';
import { Link } from 'react-router-dom';

interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  category: string;
  image: string;
  featured?: boolean;
}

const MOCK_POSTS: BlogPost[] = [
  {
    id: '1',
    title: 'Luna ha encontrado su hogar definitivo',
    excerpt: 'Después de 8 meses en el refugio, Luna por fin tiene una familia que la ama. Una historia conmovedora que nos llena de esperanza.',
    date: '2024-11-20',
    category: 'Adopciones',
    image: 'https://images.unsplash.com/photo-1587300003388-59208cc962cb?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    featured: true
  },
  {
    id: '2',
    title: 'Jornada de adopción este fin de semana',
    excerpt: 'Os esperamos el sábado de 10:00 a 18:00 en nuestro centro de Benimàmet. Ven a conocer a tus futuros mejores amigos.',
    date: '2024-11-18',
    category: 'Eventos',
    image: 'https://images.unsplash.com/photo-1548199973-03cce0bbc87b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    featured: true
  },
  {
    id: '3',
    title: 'Necesitamos voluntarios para el fin de semana',
    excerpt: 'Buscamos personas que puedan ayudarnos con los paseos, limpieza y socialización de nuestros perros este fin de semana.',
    date: '2024-11-15',
    category: 'Voluntariado',
    image: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80'
  },
  {
    id: '4',
    title: 'Campaña de esterilización gratuita',
    excerpt: 'Gracias a vuestras donaciones, hemos podido esterilizar a 25 gatos callejeros este mes, ayudando a controlar la población.',
    date: '2024-11-12',
    category: 'Salud',
    image: 'https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80'
  },
  {
    id: '5',
    title: 'Max necesita tratamiento urgente',
    excerpt: 'Max, un perro de 5 años, necesita una operación de cadera. Cualquier ayuda es bienvenida para cubrir los gastos veterinarios.',
    date: '2024-11-10',
    category: 'Urgencias',
    image: 'https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80'
  },
  {
    id: '6',
    title: 'Recogida solidaria de alimentos',
    excerpt: 'Estamos organizando una recogida de pienso y comida húmeda para nuestros peludos. Puntos de recogida disponibles.',
    date: '2024-11-08',
    category: 'Donaciones',
    image: 'https://images.unsplash.com/photo-1529472119196-cb724127a98e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80'
  }
];

export const Blog: React.FC = () => {
  const featuredPosts = MOCK_POSTS.filter(post => post.featured);
  const regularPosts = MOCK_POSTS.filter(post => !post.featured);

  const getCategoryColor = (category: string) => {
    const colors: Record<string, string> = {
      'Adopciones': 'bg-green-100 text-green-700',
      'Eventos': 'bg-blue-100 text-blue-700',
      'Voluntariado': 'bg-purple-100 text-purple-700',
      'Salud': 'bg-pink-100 text-pink-700',
      'Urgencias': 'bg-red-100 text-red-700',
      'Donaciones': 'bg-yellow-100 text-yellow-700'
    };
    return colors[category] || 'bg-gray-100 text-gray-700';
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('es-ES', { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    });
  };

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Novedades Modepran</h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Mantente al día con las últimas noticias, eventos y adopciones de nuestra protectora
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Featured Posts */}
        {featuredPosts.length > 0 && (
          <section className="mb-16">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
              <Heart className="w-6 h-6 text-red-500 mr-2" /> Destacados
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {featuredPosts.map((post) => (
                <article 
                  key={post.id} 
                  className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 group"
                >
                  <div className="relative h-64 overflow-hidden">
                    <img 
                      src={post.image} 
                      alt={post.title} 
                      className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-4 left-4">
                      <span className={`px-3 py-1 rounded-full text-xs font-semibold ${getCategoryColor(post.category)}`}>
                        {post.category}
                      </span>
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center text-sm text-gray-500 mb-3">
                      <Calendar className="w-4 h-4 mr-2" />
                      <span>{formatDate(post.date)}</span>
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-green-700 transition-colors">
                      {post.title}
                    </h3>
                    <p className="text-gray-600 mb-4 leading-relaxed">
                      {post.excerpt}
                    </p>
                    <button className="text-green-700 font-semibold flex items-center hover:text-green-800 transition-colors">
                      Leer más <ArrowRight className="w-4 h-4 ml-2" />
                    </button>
                  </div>
                </article>
              ))}
            </div>
          </section>
        )}

        {/* Regular Posts Grid */}
        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Todas las Noticias</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {regularPosts.map((post) => (
              <article 
                key={post.id} 
                className="bg-white rounded-xl shadow-sm overflow-hidden hover:shadow-lg transition-all duration-300 group"
              >
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={post.image} 
                    alt={post.title} 
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-3 left-3">
                    <span className={`px-2 py-1 rounded-full text-xs font-semibold ${getCategoryColor(post.category)}`}>
                      {post.category}
                    </span>
                  </div>
                </div>
                <div className="p-5">
                  <div className="flex items-center text-xs text-gray-500 mb-2">
                    <Calendar className="w-3 h-3 mr-1" />
                    <span>{formatDate(post.date)}</span>
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-green-700 transition-colors line-clamp-2">
                    {post.title}
                  </h3>
                  <p className="text-gray-600 text-sm mb-3 line-clamp-3">
                    {post.excerpt}
                  </p>
                  <button className="text-green-700 text-sm font-semibold flex items-center hover:text-green-800 transition-colors">
                    Leer más <ArrowRight className="w-3 h-3 ml-1" />
                  </button>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* Call to Action */}
        <section className="mt-16 bg-gradient-to-r from-green-600 to-green-700 rounded-2xl p-12 text-center text-white">
          <h2 className="text-3xl font-bold mb-4">¿Quieres estar al día?</h2>
          <p className="text-green-100 mb-8 max-w-2xl mx-auto">
            Síguenos en nuestras redes sociales para no perderte ninguna noticia, evento de adopción o historia de éxito
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a 
              href="https://www.instagram.com/protectoradeanimales_modepran/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-white text-green-700 px-6 py-3 rounded-full font-semibold hover:bg-gray-100 transition"
            >
              Seguir en Instagram
            </a>
            <a 
              href="https://www.facebook.com/protectoramodepran" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-white text-green-700 px-6 py-3 rounded-full font-semibold hover:bg-gray-100 transition"
            >
              Seguir en Facebook
            </a>
            <Link 
              to="/contacto"
              className="bg-orange-500 text-white px-6 py-3 rounded-full font-semibold hover:bg-orange-600 transition"
            >
              Suscríbete al boletín
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
};
