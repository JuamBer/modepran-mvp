import { ArrowRight, Heart } from 'lucide-react';
import React from 'react';
import { Link } from 'react-router-dom';
import { MOCK_ANIMALS } from '../constants';
import { AnimalStatus } from '../types';

export const Home: React.FC = () => {
  const urgentAnimals = MOCK_ANIMALS.filter(a => a.status === AnimalStatus.URGENT || a.status === AnimalStatus.FOSTER).slice(0, 3);

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <div className="relative h-[600px] flex items-center justify-center">
        <div className="absolute inset-0 overflow-hidden">
          <img 
            src="https://images.unsplash.com/photo-1552053831-71594a27632d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80" 
            alt="Perro feliz" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-transparent"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="max-w-2xl text-white">
            <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-6">
              Tu mejor amigo te espera en <span className="text-green-400">Modepran</span>
            </h1>
            <p className="text-lg md:text-xl mb-8 text-gray-200 leading-relaxed">
              Miles de historias comienzan con un "Hola". Dales la oportunidad de tener un hogar y el amor que merecen.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/adopta" className="inline-flex justify-center items-center px-8 py-4 border border-transparent text-lg font-bold rounded-full text-white bg-green-600 hover:bg-green-700 transition shadow-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2" aria-label="Ver animales disponibles para adopción">
                Adoptar ahora
              </Link>
              <Link to="/teaming" className="inline-flex justify-center items-center px-8 py-4 border-2 border-white text-lg font-bold rounded-full text-white hover:bg-white hover:text-green-700 transition focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2" aria-label="Unirse al teaming con 1 euro al mes">
                Únete a Teaming
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Urgent Cases Carousel (Simulated with Grid for MVP) */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-end mb-10">
            <div>
              <h2 className="text-3xl font-bold text-gray-900">Casos Urgentes</h2>
              <p className="mt-2 text-gray-600">Estos pequeños necesitan un hogar lo antes posible.</p>
            </div>
            <Link to="/adopta" className="hidden sm:flex items-center text-green-700 font-semibold hover:text-green-800">
              Ver todos <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {urgentAnimals.map((animal) => (
              <Link key={animal.id} to={`/adopta/${animal.id}`} className="group block bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100">
                <div className="relative h-64 overflow-hidden">
                  <img src={animal.images[0]} alt={animal.name} className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500" />
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-red-500 text-white text-xs font-bold uppercase tracking-wider rounded-full shadow-md animate-pulse">
                      {animal.status}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-2xl font-bold text-gray-800 group-hover:text-green-700 transition-colors">{animal.name}</h3>
                    <Heart className="h-6 w-6 text-gray-300 group-hover:text-pink-500 transition-colors" />
                  </div>
                  <p className="text-gray-500 text-sm mb-4">{animal.breed} • {animal.ageText}</p>
                  <p className="text-gray-600 line-clamp-2 text-sm">{animal.description}</p>
                </div>
              </Link>
            ))}
          </div>

          <div className="mt-8 text-center sm:hidden">
            <Link to="/adopta" className="text-green-700 font-semibold hover:text-green-800">
              Ver todos los animales &rarr;
            </Link>
          </div>
        </div>
      </section>

      {/* Teaming/Sponsorship Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-green-600 to-green-700 rounded-3xl overflow-hidden shadow-2xl">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="p-8 md:p-12 text-white">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">¡Hazte Padrino de la Prote!</h2>
                <p className="text-green-100 mb-6 text-lg leading-relaxed">
                  Con solo <span className="font-bold text-yellow-300">1€ al mes</span>, formas parte de nuestra familia de teamers 
                  que nos ayudan a alimentar, cuidar y dar una segunda oportunidad a cientos de animales.
                </p>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center text-green-100">
                    <Heart className="w-5 h-5 mr-3 text-yellow-300 flex-shrink-0" />
                    <span>Más de 1.000 teamers ya nos apoyan</span>
                  </li>
                  <li className="flex items-center text-green-100">
                    <Heart className="w-5 h-5 mr-3 text-yellow-300 flex-shrink-0" />
                    <span>Sin permanencia ni compromisos</span>
                  </li>
                  <li className="flex items-center text-green-100">
                    <Heart className="w-5 h-5 mr-3 text-yellow-300 flex-shrink-0" />
                    <span>Transparencia total del dinero recaudado</span>
                  </li>
                </ul>
                <Link 
                  to="/teaming" 
                  className="inline-block bg-yellow-400 text-gray-900 px-8 py-4 rounded-full font-bold text-lg hover:bg-yellow-300 transition shadow-lg"
                >
                  Únete a Teaming
                </Link>
              </div>
              <div className="hidden md:block h-full">
                <img 
                  src="https://images.unsplash.com/photo-1450778869180-41d0601e046e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" 
                  alt="Comunidad de teamers" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Strip */}
      <section className="bg-orange-500 py-12">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">¿No puedes adoptar? ¡Acoge!</h2>
          <p className="text-orange-100 mb-8 max-w-2xl mx-auto">Ser casa de acogida salva vidas. Ofrece un hogar temporal a un animal que se recupera o espera su familia definitiva.</p>
          <Link to="/contacto" className="bg-white text-orange-600 px-8 py-3 rounded-full font-bold hover:bg-gray-100 transition">
            Infórmate sobre acogidas
          </Link>
        </div>
      </section>
    </div>
  );
};
