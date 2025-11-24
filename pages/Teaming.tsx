import { CheckCircle, Euro, ExternalLink, Heart, TrendingUp, Users } from 'lucide-react';
import React from 'react';
import { Link } from 'react-router-dom';

export const Teaming: React.FC = () => {
  const benefits = [
    {
      icon: Euro,
      title: 'Desde 1€ al mes',
      description: 'Pequeñas aportaciones que juntas hacen grandes cosas'
    },
    {
      icon: Users,
      title: 'Únete a nuestra familia',
      description: 'Más de 1.000 teamers ya nos apoyan cada mes'
    },
    {
      icon: TrendingUp,
      title: 'Impacto real',
      description: 'Tu donación mensual nos permite planificar mejor'
    },
    {
      icon: Heart,
      title: 'Transparencia total',
      description: 'Publicamos cada mes en qué se invierte el dinero'
    }
  ];

  const uses = [
    'Alimentación diaria de los animales',
    'Tratamientos veterinarios y medicamentos',
    'Mantenimiento de las instalaciones',
    'Esterilizaciones y microchips',
    'Vacunas y desparasitaciones',
    'Material de limpieza e higiene',
    'Campañas de adopción y difusión'
  ];

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <div className="relative h-[400px] flex items-center justify-center bg-gradient-to-br from-green-600 to-green-800">
        <div className="absolute inset-0 overflow-hidden opacity-10">
          <img 
            src="https://images.unsplash.com/photo-1450778869180-41d0601e046e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80" 
            alt="Teamers unidos" 
            className="w-full h-full object-cover"
          />
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-white text-green-600 mb-6">
            <Users size={40} />
          </div>
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-4 text-white">
            Únete a Nuestro Teaming
          </h1>
          <p className="text-lg md:text-xl text-green-100 max-w-3xl mx-auto mb-8">
            Con solo <span className="font-bold text-yellow-300">1€ al mes</span>, juntos podemos cambiar la vida de cientos de animales
          </p>
          <a 
            href="https://www.teaming.net/protectoramodepran" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-yellow-400 text-gray-900 px-8 py-4 rounded-full font-bold text-lg hover:bg-yellow-300 transition shadow-lg"
          >
            Hazte Teamer Ahora <ExternalLink size={20} />
          </a>
        </div>
      </div>

      {/* What is Teaming Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">¿Qué es Teaming?</h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              Teaming es una plataforma solidaria donde muchas personas se unen para apoyar una causa con 
              <span className="font-bold text-green-700"> micro-donaciones de 1€ al mes</span>. 
              Parece poco, pero cuando somos miles, el impacto es enorme. Sin permanencia, sin letra pequeña, 
              solo personas que quieren ayudar.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center p-6 rounded-xl border-2 border-gray-100 hover:border-green-300 hover:shadow-lg transition">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-green-100 text-green-700 mb-4">
                  <benefit.icon size={32} />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Cómo Funciona</h2>
            <p className="text-lg text-gray-600">Es muy sencillo unirse y ayudar</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="bg-white p-8 rounded-xl shadow-sm text-center">
              <div className="w-12 h-12 bg-green-600 text-white rounded-full flex items-center justify-center font-bold text-xl mx-auto mb-4">
                1
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Regístrate</h3>
              <p className="text-gray-600">
                Entra en nuestra página de Teaming y crea tu cuenta en segundos
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-sm text-center">
              <div className="w-12 h-12 bg-green-600 text-white rounded-full flex items-center justify-center font-bold text-xl mx-auto mb-4">
                2
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Únete al grupo</h3>
              <p className="text-gray-600">
                Busca "Protectora Modepran" y haz clic en unirte
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-sm text-center">
              <div className="w-12 h-12 bg-green-600 text-white rounded-full flex items-center justify-center font-bold text-xl mx-auto mb-4">
                3
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">¡Listo!</h3>
              <p className="text-gray-600">
                Cada mes se cargará 1€ automáticamente. ¡Así de fácil!
              </p>
            </div>
          </div>

          <div className="text-center mt-12">
            <a 
              href="https://www.teaming.net/protectoramodepran" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-green-600 text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-green-700 transition shadow-lg"
            >
              Ir a Teaming <ExternalLink size={20} />
            </a>
          </div>
        </div>
      </section>

      {/* Where does the money go */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">¿En qué se invierte tu 1€?</h2>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Cada euro cuenta. Nuestros gastos son transparentes y todos los fondos van 
                directamente al cuidado de los animales. No tenemos ánimo de lucro y todos 
                los voluntarios trabajamos de forma altruista.
              </p>

              <ul className="space-y-3">
                {uses.map((use, index) => (
                  <li key={index} className="flex items-start">
                    <CheckCircle className="w-6 h-6 text-green-600 mr-3 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">{use}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1601758228041-f3b2795255f1?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" 
                alt="Cuidado animal" 
                className="rounded-2xl shadow-xl"
              />
              <div className="absolute -bottom-6 -left-6 bg-green-600 text-white p-6 rounded-xl shadow-lg max-w-xs">
                <p className="text-4xl font-bold mb-2">+1.000</p>
                <p className="text-green-100">Teamers ya nos apoyan cada mes</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-16 bg-gradient-to-r from-green-600 to-green-700">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            ¿Listo para hacer la diferencia?
          </h2>
          <p className="text-green-100 text-lg mb-8">
            Únete a nuestra familia de teamers. Juntos somos más fuertes.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="https://www.teaming.net/protectoramodepran" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-yellow-400 text-gray-900 px-8 py-4 rounded-full font-bold text-lg hover:bg-yellow-300 transition shadow-lg"
            >
              Hazte Teamer <ExternalLink size={20} />
            </a>
            <Link 
              to="/contacto"
              className="inline-flex items-center justify-center gap-2 bg-white text-green-700 px-8 py-4 rounded-full font-bold text-lg hover:bg-gray-100 transition"
            >
              ¿Tienes dudas? Contáctanos
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};
