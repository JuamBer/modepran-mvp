import { Mail, MessageSquare, Phone, Send } from 'lucide-react';
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

export const Contact: React.FC = () => {
  const location = useLocation();
  const initialSubject = location.state?.subject || '';
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: initialSubject,
    message: ''
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate submission
    setIsSubmitted(true);
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-green-50 px-4">
        <div className="bg-white p-8 rounded-2xl shadow-lg text-center max-w-md w-full">
          <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <Send className="w-8 h-8 text-green-600" />
          </div>
          <h2 className="text-2xl font-bold text-gray-900 mb-2">¡Mensaje Enviado!</h2>
          <p className="text-gray-600 mb-6">
            Gracias por contactar con Modepran. Hemos recibido tu solicitud y te responderemos lo antes posible.
          </p>
          <button 
            onClick={() => window.location.hash = '/'}
            className="bg-green-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-green-700"
          >
            Volver al inicio
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-3xl font-bold text-gray-900">Contacta con Nosotros</h1>
          <p className="mt-4 text-lg text-gray-600">Estamos aquí para ayudarte en el proceso de adopción o resolver cualquier duda.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-12">
          {/* Contact Info Side */}
          <div className="md:col-span-1 space-y-8">
            <div className="bg-green-50 p-6 rounded-xl border border-green-100">
              <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center">
                <Phone className="w-5 h-5 text-green-700 mr-2" /> Urgencias
              </h3>
              <p className="text-gray-600 text-sm mb-2">Para emergencias relacionadas con animales heridos o abandonados:</p>
              <a href="tel:+34963406555" className="text-2xl font-bold text-green-700 block">+34 963 40 65 55</a>
            </div>

            <div className="bg-orange-50 p-6 rounded-xl border border-orange-100">
              <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center">
                <Mail className="w-5 h-5 text-orange-600 mr-2" /> Consultas Generales
              </h3>
              <p className="text-gray-600 text-sm mb-2">Para dudas sobre adopciones, voluntariado o donaciones:</p>
              <a href="mailto:info@modepran.com" className="text-lg font-semibold text-orange-600 block">info@modepran.com</a>
            </div>
          </div>

          {/* Form Side */}
          <div className="md:col-span-2 bg-white rounded-2xl shadow-lg border border-gray-100 p-8">
            <h2 className="text-xl font-bold text-gray-900 mb-6 flex items-center">
              <MessageSquare className="w-5 h-5 mr-2" /> Envíanos un mensaje
            </h2>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Nombre completo</label>
                  <input 
                    id="name"
                    name="name"
                    type="text" 
                    required
                    aria-required="true"
                    className="w-full border-gray-300 rounded-lg shadow-sm focus:ring-green-500 focus:border-green-500 py-2 px-3 border"
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                  <input 
                    id="email"
                    name="email"
                    type="email" 
                    required
                    aria-required="true"
                    className="w-full border-gray-300 rounded-lg shadow-sm focus:ring-green-500 focus:border-green-500 py-2 px-3 border"
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Teléfono</label>
                  <input 
                    id="phone"
                    name="phone"
                    type="tel" 
                    className="w-full border-gray-300 rounded-lg shadow-sm focus:ring-green-500 focus:border-green-500 py-2 px-3 border"
                    value={formData.phone}
                    onChange={(e) => setFormData({...formData, phone: e.target.value})}
                  />
                </div>
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">Asunto</label>
                  <input 
                    id="subject"
                    name="subject"
                    type="text" 
                    required
                    aria-required="true"
                    className="w-full border-gray-300 rounded-lg shadow-sm focus:ring-green-500 focus:border-green-500 py-2 px-3 border"
                    value={formData.subject}
                    onChange={(e) => setFormData({...formData, subject: e.target.value})}
                  />
                </div>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Mensaje</label>
                <textarea 
                  id="message"
                  name="message"
                  rows={5}
                  required
                  aria-required="true"
                  className="w-full border-gray-300 rounded-lg shadow-sm focus:ring-green-500 focus:border-green-500 py-2 px-3 border"
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                  placeholder="Cuéntanos qué necesitas..."
                ></textarea>
              </div>

              <div className="flex items-center">
                <input 
                  type="checkbox" 
                  required 
                  className="h-4 w-4 text-green-600 focus:ring-green-500 border-gray-300 rounded"
                />
                <span className="ml-2 text-sm text-gray-500">
                  He leído y acepto la política de privacidad.
                </span>
              </div>

              <button 
                type="submit"
                className="w-full bg-green-700 text-white font-bold py-3 px-6 rounded-lg hover:bg-green-800 transition shadow-md"
              >
                Enviar Mensaje
              </button>
            </form>
          </div>
        </div>

        {/* Donation Section */}
        <div className="mt-16 bg-gradient-to-r from-orange-500 to-orange-600 rounded-2xl overflow-hidden">
          <div className="p-8 md:p-12 text-center text-white">
            <h2 className="text-3xl font-bold mb-4">¿Quieres Hacer una Donación?</h2>
            <p className="text-orange-100 mb-8 max-w-2xl mx-auto text-lg">
              Tu apoyo económico nos ayuda a seguir rescatando y cuidando animales necesitados
            </p>
            
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {/* Bank Transfer */}
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                <h3 className="text-xl font-bold mb-4">Transferencia Bancaria</h3>
                <p className="text-orange-100 text-sm mb-4">
                  Puedes realizar una transferencia directa a nuestra cuenta:
                </p>
                <div className="bg-white text-orange-700 p-4 rounded-lg font-mono text-lg font-bold break-all">
                  ESXX XXXXXXXXXXXXX
                </div>
                <p className="text-orange-100 text-xs mt-3">
                  Titular: Protectora de Animales Modepran
                </p>
              </div>

              {/* PayPal */}
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                <h3 className="text-xl font-bold mb-4">PayPal</h3>
                <p className="text-orange-100 text-sm mb-4">
                  También puedes hacer tu donación mediante PayPal:
                </p>
                <a 
                  href="https://www.paypal.com/donate/?hosted_button_id=YOUR_PAYPAL_ID" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-block bg-white text-orange-600 px-6 py-3 rounded-lg font-bold hover:bg-gray-100 transition"
                >
                  Donar con PayPal
                </a>
                <p className="text-orange-100 text-xs mt-3">
                  De forma rápida y segura
                </p>
              </div>
            </div>

            {/* Teaming Link */}
            <div className="mt-8 pt-8 border-t border-white/20">
              <p className="text-orange-100 mb-4">
                ¿Prefieres donar solo <span className="font-bold text-white">1€ al mes</span>?
              </p>
              <Link 
                to="/teaming"
                className="inline-block bg-yellow-400 text-gray-900 px-8 py-3 rounded-full font-bold hover:bg-yellow-300 transition shadow-lg"
              >
                Únete a nuestro Teaming
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
