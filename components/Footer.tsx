import { Facebook, Instagram, Mail, MapPin, Phone, Twitter, Youtube } from 'lucide-react';
import React from 'react';
import { Link } from 'react-router-dom';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white pt-12 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          
          {/* About */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-green-400">Modepran</h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              Asociación protectora de animales en Valencia. Trabajamos incansablemente para dar una segunda oportunidad a los animales abandonados.
            </p>
            <div className="mt-6 flex space-x-4">
              <a href="https://www.facebook.com/protectoramodepran" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition" aria-label="Facebook"><Facebook className="h-5 w-5" /></a>
              <a href="https://www.instagram.com/protectoradeanimales_modepran/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition" aria-label="Instagram"><Instagram className="h-5 w-5" /></a>
              <a href="https://twitter.com/modepran" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition" aria-label="Twitter"><Twitter className="h-5 w-5" /></a>
              <a href="https://www.youtube.com/channel/UCNFXpMeTcp9ayxbSK3oVWCQ" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition" aria-label="YouTube"><Youtube className="h-5 w-5" /></a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-green-400">Enlaces</h3>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li><Link to="/adopta" className="hover:text-white transition">Adoptar</Link></li>
              <li><Link to="/teaming" className="hover:text-white transition">Teaming</Link></li>
              <li><Link to="/voluntariado" className="hover:text-white transition">Voluntariado</Link></li>
              <li><Link to="/blog" className="hover:text-white transition">Blog</Link></li>
              <li><Link to="/centros" className="hover:text-white transition">Nuestros Centros</Link></li>
              <li><Link to="/contacto" className="hover:text-white transition">Contacto</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-green-400">Contacto</h3>
            <ul className="space-y-3 text-gray-400 text-sm">
              <li className="flex items-start">
                <MapPin className="h-5 w-5 mr-2 text-orange-500 flex-shrink-0" />
                <span>Camino Nuevo de Paterna, 165, 46035 Benimàmet, Valencia</span>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 mr-2 text-orange-500 flex-shrink-0" />
                <span>+34 963 40 65 55</span>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 mr-2 text-orange-500 flex-shrink-0" />
                <span>info@modepran.com</span>
              </li>
            </ul>
          </div>

          {/* Hours */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-green-400">Horario Adopciones</h3>
            <div className="text-gray-400 text-sm">
              <p className="mb-2"><span className="font-bold text-white">Lunes - Sábado:</span> 10:00 - 13:30 / 16:30 - 18:00</p>
              <p className="mb-2"><span className="font-bold text-white">Domingos:</span> 10:00 - 13:30</p>
              <p className="mt-4 text-xs text-gray-500">* Cita previa recomendada para adopciones.</p>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-xs text-gray-500">
          <p>&copy; {new Date().getFullYear()} Protectora de Animales Modepran. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
};
