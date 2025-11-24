import { Clock, MapPin, Phone } from 'lucide-react';
import React from 'react';

export const Centers: React.FC = () => {
  return (
    <div className="bg-gray-50 min-h-screen py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-3xl font-bold text-gray-900">Nuestros Centros</h1>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            Modepran gestiona actualmente varios centros donde cuidamos a nuestros animales. Ven a visitarnos para conocer a tu futuro mejor amigo.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Benimàmet */}
          <div className="bg-white rounded-2xl shadow-sm overflow-hidden border border-gray-200">
             <div className="h-48 bg-gray-200 relative">
               <img 
                 src="https://images.unsplash.com/photo-1548199973-03cce0bbc87b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" 
                 alt="Centro Benimàmet" 
                 className="w-full h-full object-cover"
               />
               <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
                 <h2 className="text-white font-bold text-2xl p-6">Benimàmet</h2>
               </div>
             </div>
             <div className="p-6">
               <ul className="space-y-4">
                 <li className="flex items-start text-gray-600">
                   <MapPin className="w-6 h-6 text-green-700 mr-3 flex-shrink-0" />
                   <span>Camino Nuevo de Paterna, 165, 46035 Benimàmet, Valencia</span>
                 </li>
                 <li className="flex items-start text-gray-600">
                   <Clock className="w-6 h-6 text-green-700 mr-3 flex-shrink-0" />
                   <div>
                     <p className="font-semibold text-gray-900">Horario de Atención:</p>
                     <p>Lunes a Sábado: 10:00 - 13:30 / 16:30 - 18:00</p>
                     <p>Domingos: 10:00 - 13:30</p>
                   </div>
                 </li>
                 <li className="flex items-center text-gray-600">
                   <Phone className="w-6 h-6 text-green-700 mr-3 flex-shrink-0" />
                   <span>+34 963 40 65 55</span>
                 </li>
               </ul>
               <div className="mt-6">
                 <a 
                   href="https://maps.google.com" 
                   target="_blank" 
                   rel="noopener noreferrer"
                   className="block w-full text-center border-2 border-green-700 text-green-700 font-bold py-2 rounded-lg hover:bg-green-50 transition"
                 >
                   Cómo llegar
                 </a>
               </div>
             </div>
          </div>

          {/* Carraixet/Other Center */}
          <div className="bg-white rounded-2xl shadow-sm overflow-hidden border border-gray-200">
             <div className="h-48 bg-gray-200 relative">
               <img 
                 src="https://images.unsplash.com/photo-1570018144715-43110363d70a?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" 
                 alt="Centro Carlet" 
                 className="w-full h-full object-cover"
               />
               <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
                 <h2 className="text-white font-bold text-2xl p-6">Carlet</h2>
               </div>
             </div>
             <div className="p-6">
               <ul className="space-y-4">
                 <li className="flex items-start text-gray-600">
                   <MapPin className="w-6 h-6 text-green-700 mr-3 flex-shrink-0" />
                   <span>Polígono Industrial Carlet, Valencia</span>
                 </li>
                 <li className="flex items-start text-gray-600">
                   <Clock className="w-6 h-6 text-green-700 mr-3 flex-shrink-0" />
                   <div>
                     <p className="font-semibold text-gray-900">Horario de Atención:</p>
                     <p>Lunes a Viernes: 10:00 - 13:30</p>
                     <p>Sábados: Cita Previa</p>
                   </div>
                 </li>
                 <li className="flex items-center text-gray-600">
                   <Phone className="w-6 h-6 text-green-700 mr-3 flex-shrink-0" />
                   <span>+34 963 40 65 55</span>
                 </li>
               </ul>
               <div className="mt-6">
                 <a 
                   href="https://maps.google.com" 
                   target="_blank" 
                   rel="noopener noreferrer"
                   className="block w-full text-center border-2 border-green-700 text-green-700 font-bold py-2 rounded-lg hover:bg-green-50 transition"
                 >
                   Cómo llegar
                 </a>
               </div>
             </div>
          </div>

        </div>
      </div>
    </div>
  );
};
