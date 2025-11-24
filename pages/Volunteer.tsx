import { Award, Calendar, CheckCircle, Heart, Mail, Users } from 'lucide-react';
import React from 'react';
import { Link } from 'react-router-dom';

export const Volunteer: React.FC = () => {
  const benefits = [
    {
      icon: Heart,
      title: 'Marca la diferencia',
      description: 'Ayuda directamente a mejorar la vida de animales necesitados'
    },
    {
      icon: Users,
      title: 'Conoce gente',
      description: 'Conecta con personas que comparten tu pasión por los animales'
    },
    {
      icon: Award,
      title: 'Desarrolla habilidades',
      description: 'Aprende sobre cuidado animal y gestión de protectoras'
    },
    {
      icon: Calendar,
      title: 'Flexibilidad horaria',
      description: 'Elige cuándo y cuánto tiempo puedes dedicar'
    }
  ];

  const activities = [
    'Cuidado diario de los animales (alimentación, limpieza, paseos)',
    'Ayuda en eventos de adopción y recaudación de fondos',
    'Transporte de animales a veterinarios o casas de acogida',
    'Socialización y entrenamiento básico',
    'Fotografía y difusión en redes sociales',
    'Tareas administrativas y de gestión',
    'Acogida temporal de animales en tu hogar',
    'Mantenimiento de instalaciones'
  ];

  const requirements = [
    'Ser mayor de 18 años (menores con autorización parental)',
    'Tener amor y respeto por los animales',
    'Comprometerse con un mínimo de tiempo semanal',
    'Disponibilidad para asistir a una sesión de orientación',
    'Responsabilidad y puntualidad',
    'Actitud positiva y trabajo en equipo'
  ];

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <div className="relative h-[400px] flex items-center justify-center">
        <div className="absolute inset-0 overflow-hidden">
          <img 
            src="https://images.unsplash.com/photo-1559827260-dc66d52bef19?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80" 
            alt="Voluntarios con animales" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-green-900/80 to-green-700/60"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-4 text-white">
            Únete como Voluntario
          </h1>
          <p className="text-lg md:text-xl text-gray-100 max-w-3xl mx-auto">
            Tu tiempo y dedicación pueden cambiar la vida de muchos animales. Descubre cómo puedes ayudar.
          </p>
        </div>
      </div>

      {/* Why Volunteer Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">¿Por qué ser voluntario?</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Ser voluntario en Modepran es una experiencia gratificante que beneficia tanto a los animales como a ti
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center p-6 rounded-lg hover:bg-gray-50 transition">
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

      {/* Activities Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Actividades que puedes realizar</h2>
              <p className="text-gray-600 mb-6">
                Ofrecemos diversas oportunidades de voluntariado para que encuentres la que mejor se adapte a tus habilidades e intereses:
              </p>
              <ul className="space-y-3">
                {activities.map((activity, index) => (
                  <li key={index} className="flex items-start">
                    <CheckCircle className="h-6 w-6 text-green-600 mr-3 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">{activity}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Requisitos</h2>
              <p className="text-gray-600 mb-6">
                No necesitas experiencia previa, solo ganas de ayudar. Estos son nuestros requisitos básicos:
              </p>
              <ul className="space-y-3 mb-8">
                {requirements.map((requirement, index) => (
                  <li key={index} className="flex items-start">
                    <CheckCircle className="h-6 w-6 text-green-600 mr-3 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">{requirement}</span>
                  </li>
                ))}
              </ul>
              
              <div className="bg-green-50 border-l-4 border-green-600 p-6 rounded">
                <h3 className="font-semibold text-gray-900 mb-2">¿Primera vez como voluntario?</h3>
                <p className="text-gray-700">
                  No te preocupes, proporcionamos formación inicial y apoyo continuo para que te sientas cómodo y seguro en tu rol.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Heart className="h-16 w-16 text-green-600 mx-auto mb-6" />
          <h2 className="text-3xl font-bold text-gray-900 mb-4">¿Listo para empezar?</h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Completa nuestro formulario de contacto indicando tu interés en el voluntariado y nos pondremos en contacto contigo para comenzar el proceso.
          </p>
          <Link 
            to="/contacto" 
            className="inline-flex items-center px-8 py-4 border border-transparent text-lg font-bold rounded-full text-white bg-green-600 hover:bg-green-700 transition shadow-lg"
          >
            <Mail className="mr-2" size={20} />
            Inscríbete ahora
          </Link>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Lo que dicen nuestros voluntarios</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-green-200 rounded-full flex items-center justify-center text-green-700 font-bold text-xl">
                  M
                </div>
                <div className="ml-3">
                  <h4 className="font-semibold text-gray-900">María González</h4>
                  <p className="text-sm text-gray-600">Voluntaria desde 2023</p>
                </div>
              </div>
              <p className="text-gray-700 italic">
                "Ser voluntaria en Modepran ha sido una de las mejores decisiones de mi vida. Ver cómo los animales encuentran un hogar es increíblemente gratificante."
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-green-200 rounded-full flex items-center justify-center text-green-700 font-bold text-xl">
                  C
                </div>
                <div className="ml-3">
                  <h4 className="font-semibold text-gray-900">Carlos Ruiz</h4>
                  <p className="text-sm text-gray-600">Voluntario desde 2022</p>
                </div>
              </div>
              <p className="text-gray-700 italic">
                "El ambiente es maravilloso, todos compartimos la misma pasión. He aprendido mucho sobre cuidado animal y he hecho grandes amigos."
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-green-200 rounded-full flex items-center justify-center text-green-700 font-bold text-xl">
                  L
                </div>
                <div className="ml-3">
                  <h4 className="font-semibold text-gray-900">Laura Martínez</h4>
                  <p className="text-sm text-gray-600">Voluntaria desde 2024</p>
                </div>
              </div>
              <p className="text-gray-700 italic">
                "Aunque empecé hace poco, ya siento que formo parte de una gran familia. Cada día aprendo algo nuevo y me siento útil ayudando."
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
