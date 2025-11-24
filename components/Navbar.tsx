import { Heart, Menu, X } from 'lucide-react';
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: 'Inicio', path: '/' },
    { name: 'Adoptar', path: '/adopta' },
    { name: 'Nuestros Centros', path: '/centros' },
    { name: 'Voluntariado', path: '/voluntariado' },
    { name: 'Blog', path: '/blog' },
    { name: 'Contacto', path: '/contacto' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <>
      {/* Skip to main content link for accessibility */}
      <a 
        href="#main-content" 
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-green-600 text-white px-4 py-2 rounded-md z-50 focus:outline-none focus:ring-2 focus:ring-green-500"
      >
        Saltar al contenido principal
      </a>
    <nav className="bg-white shadow-md sticky top-0 z-50" role="navigation" aria-label="Navegación principal">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0 flex items-center gap-2">
              <Heart className="h-8 w-8 text-green-700 fill-green-700" />
              <span className="font-bold text-2xl text-gray-800 tracking-tight">MODEPRAN</span>
            </Link>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-sm font-medium transition-colors duration-200 ${
                  isActive(link.path) 
                    ? 'text-green-700 border-b-2 border-green-700' 
                    : 'text-gray-600 hover:text-green-700'
                }`}
              >
                {link.name}
              </Link>
            ))}
            <Link 
              to="/teaming" 
              className="bg-orange-500 hover:bg-orange-600 text-white px-5 py-2 rounded-full font-semibold shadow-sm transition-transform transform hover:scale-105"
            >
              Teaming 1€
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
              aria-label="Abrir menú de navegación"
              aria-expanded={isOpen}
              aria-controls="mobile-menu"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t" id="mobile-menu">
          <nav className="px-2 pt-2 pb-3 space-y-1 sm:px-3" aria-label="Menú principal móvil">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={`block px-3 py-2 rounded-md text-base font-medium ${
                  isActive(link.path)
                    ? 'bg-green-50 text-green-700'
                    : 'text-gray-600 hover:bg-gray-50 hover:text-green-700'
                }`}
              >
                {link.name}
              </Link>
            ))}
            <Link 
              to="/teaming"
              onClick={() => setIsOpen(false)}
              className="block w-full text-center mt-4 bg-orange-500 text-white px-4 py-3 rounded-lg font-bold"
            >
              Teaming 1€
            </Link>
          </nav>
        </div>
      )}
    </nav>
    </>
  );
};
