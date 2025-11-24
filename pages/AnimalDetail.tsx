import React, { useEffect, useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { MOCK_ANIMALS } from '../constants';
import { Timeline } from '../components/Timeline';
import { generateAnimalStory, askAboutAnimal } from '../services/geminiService';
import { 
  MapPin, Share2, CheckCircle, XCircle, Info, Heart, 
  Syringe, Sparkles, MessageCircle 
} from 'lucide-react';

export const AnimalDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const animal = MOCK_ANIMALS.find(a => a.id === id);

  const [activeImage, setActiveImage] = useState(0);
  const [aiStory, setAiStory] = useState<string>('');
  const [loadingStory, setLoadingStory] = useState(false);
  
  const [chatInput, setChatInput] = useState('');
  const [chatResponse, setChatResponse] = useState('');
  const [loadingChat, setLoadingChat] = useState(false);

  useEffect(() => {
    if (!animal) {
      navigate('/adopta'); // Redirect if not found
      return;
    }
    
    // Scroll to top
    window.scrollTo(0, 0);

    // Generate AI Story
    const fetchStory = async () => {
      setLoadingStory(true);
      const story = await generateAnimalStory(animal);
      setAiStory(story);
      setLoadingStory(false);
    };
    fetchStory();

  }, [animal, navigate]);

  if (!animal) return null;

  const getStatusColor = (status: string) => {
    switch(status) {
      case 'Urgente': return 'bg-red-500 text-white';
      case 'Reservado': return 'bg-amber-400 text-white';
      case 'En Acogida': return 'bg-blue-500 text-white';
      default: return 'bg-green-500 text-white';
    }
  };

  const handleAskAI = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!chatInput.trim()) return;
    
    setLoadingChat(true);
    const answer = await askAboutAnimal(animal, chatInput);
    setChatResponse(answer);
    setLoadingChat(false);
    setChatInput('');
  };

  return (
    <div className="bg-white min-h-screen pb-24 relative">
      {/* Header / Title Mobile */}
      <div className="md:hidden p-4 border-b">
        <h1 className="text-2xl font-bold text-gray-900">{animal.name}</h1>
        <p className="text-gray-500 text-sm">Ref: #{animal.id.padStart(4, '0')}</p>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          
          {/* Left Column: Gallery & Status */}
          <div>
            <div className="relative rounded-2xl overflow-hidden shadow-lg bg-gray-100 aspect-[4/3] mb-4 group">
              <img 
                src={animal.images[activeImage]} 
                alt={animal.name} 
                className="w-full h-full object-cover"
              />
              <div className="absolute top-4 left-4">
                 <span className={`px-4 py-1.5 rounded-full text-sm font-bold shadow-sm uppercase tracking-wide ${getStatusColor(animal.status)}`}>
                   {animal.status}
                 </span>
              </div>
            </div>

            {/* Thumbnails */}
            {animal.images.length > 1 && (
              <div className="flex gap-3 overflow-x-auto pb-2">
                {animal.images.map((img, idx) => (
                  <button 
                    key={idx}
                    onClick={() => setActiveImage(idx)}
                    className={`flex-shrink-0 w-20 h-20 rounded-lg overflow-hidden border-2 transition ${activeImage === idx ? 'border-green-600 ring-2 ring-green-100' : 'border-transparent hover:border-gray-300'}`}
                  >
                    <img src={img} alt="" className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
            )}

            {/* Interactive AI Chat */}
            <div className="mt-8 bg-green-50 rounded-2xl p-6 border border-green-100">
              <div className="flex items-center gap-2 mb-4">
                <Sparkles className="w-5 h-5 text-green-600" />
                <h3 className="font-bold text-green-800">Pregunta a Modepran AI</h3>
              </div>
              
              {chatResponse && (
                 <div className="bg-white p-4 rounded-lg shadow-sm mb-4 text-gray-700 text-sm border-l-4 border-green-500 animate-fade-in">
                   <p className="font-bold text-xs text-gray-400 mb-1">Respuesta:</p>
                   {chatResponse}
                 </div>
              )}

              <form onSubmit={handleAskAI} className="relative">
                <input 
                  type="text" 
                  placeholder={`¿Cómo se lleva ${animal.name} con gatos?`}
                  className="w-full pl-4 pr-12 py-3 rounded-xl border-gray-200 focus:ring-green-500 focus:border-green-500 shadow-sm text-sm"
                  value={chatInput}
                  onChange={(e) => setChatInput(e.target.value)}
                  disabled={loadingChat}
                />
                <button 
                  type="submit" 
                  disabled={loadingChat}
                  className="absolute right-2 top-1/2 -translate-y-1/2 p-1.5 bg-green-600 text-white rounded-lg hover:bg-green-700 disabled:opacity-50"
                >
                  {loadingChat ? <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" /> : <MessageCircle className="w-4 h-4" />}
                </button>
              </form>
              <p className="text-xs text-green-600/70 mt-2 text-center">La IA responde basada en los datos de la ficha.</p>
            </div>
          </div>

          {/* Right Column: Info, Medical, Timeline */}
          <div>
            <div className="flex justify-between items-start mb-6 hidden md:flex">
               <div>
                 <h1 className="text-4xl font-extrabold text-gray-900 mb-1">{animal.name}</h1>
                 <div className="flex items-center text-gray-500 text-sm">
                    <MapPin className="w-4 h-4 mr-1" /> Centro: {animal.location}
                    <span className="mx-2">•</span>
                    <span>Ref: {animal.id.padStart(4, '0')}</span>
                 </div>
               </div>
               <button className="p-2 text-gray-400 hover:text-pink-500 transition rounded-full hover:bg-pink-50">
                 <Share2 className="w-6 h-6" />
               </button>
            </div>

            {/* Key Data Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-8">
               <div className="bg-gray-50 p-4 rounded-xl text-center border border-gray-100">
                 <span className="block text-xs text-gray-500 uppercase font-bold mb-1">Edad</span>
                 <span className="font-semibold text-gray-800">{animal.ageText}</span>
               </div>
               <div className="bg-gray-50 p-4 rounded-xl text-center border border-gray-100">
                 <span className="block text-xs text-gray-500 uppercase font-bold mb-1">Raza</span>
                 <span className="font-semibold text-gray-800 truncate">{animal.breed}</span>
               </div>
               <div className="bg-gray-50 p-4 rounded-xl text-center border border-gray-100">
                 <span className="block text-xs text-gray-500 uppercase font-bold mb-1">Sexo</span>
                 <span className="font-semibold text-gray-800">{animal.sex}</span>
               </div>
               <div className="bg-gray-50 p-4 rounded-xl text-center border border-gray-100">
                 <span className="block text-xs text-gray-500 uppercase font-bold mb-1">Tamaño</span>
                 <span className="font-semibold text-gray-800">{animal.size}</span>
               </div>
            </div>

            {/* Description */}
            <div className="mb-8">
              <h3 className="text-lg font-bold text-gray-900 mb-3">Su Historia</h3>
              <div className="prose text-gray-600 leading-relaxed">
                {loadingStory ? (
                  <div className="animate-pulse space-y-2">
                    <div className="h-4 bg-gray-200 rounded w-3/4"></div>
                    <div className="h-4 bg-gray-200 rounded w-full"></div>
                    <div className="h-4 bg-gray-200 rounded w-5/6"></div>
                  </div>
                ) : (
                  <p className="italic border-l-4 border-orange-200 pl-4 bg-orange-50/50 py-2 rounded-r-lg">
                    "{aiStory}"
                  </p>
                )}
              </div>
            </div>

            {/* Medical Info */}
            <div className="bg-white border border-gray-200 rounded-xl p-6 mb-8 shadow-sm">
              <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center">
                <Syringe className="w-5 h-5 text-blue-500 mr-2" /> Salud y Veterinaria
              </h3>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                  <span className="text-sm text-gray-700 font-medium">Castrado/a</span>
                  {animal.medical.neutered 
                    ? <CheckCircle className="w-5 h-5 text-green-500" /> 
                    : <XCircle className="w-5 h-5 text-red-400" />}
                </div>
                <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                  <span className="text-sm text-gray-700 font-medium">Microchip</span>
                  {animal.medical.microchipped 
                    ? <CheckCircle className="w-5 h-5 text-green-500" /> 
                    : <XCircle className="w-5 h-5 text-red-400" />}
                </div>
              </div>

              <div className="mb-4">
                <span className="text-sm font-bold text-gray-700 block mb-2">Vacunas:</span>
                {animal.medical.vaccines.length > 0 ? (
                  <div className="flex flex-wrap gap-2">
                    {animal.medical.vaccines.map((v, i) => (
                      <span key={i} className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                        {v.name} ({v.date})
                      </span>
                    ))}
                  </div>
                ) : (
                  <span className="text-sm text-gray-500 italic">Pendiente de vacunación</span>
                )}
              </div>

              <div className="flex items-start gap-2 text-sm text-gray-600 bg-blue-50 p-3 rounded-lg">
                <Info className="w-5 h-5 text-blue-500 flex-shrink-0 mt-0.5" />
                <p>{animal.medical.healthNotes}</p>
              </div>
            </div>

            {/* Timeline */}
            <div className="mb-8">
              <h3 className="text-lg font-bold text-gray-900 mb-2">Línea de Tiempo</h3>
              <Timeline events={animal.timeline} />
            </div>

          </div>
        </div>
      </div>

      {/* Sticky CTA Button */}
      <div className="fixed bottom-0 left-0 right-0 p-4 bg-white border-t border-gray-200 md:static md:bg-transparent md:border-none md:p-0 flex justify-center z-40">
         <div className="max-w-7xl mx-auto w-full md:w-auto flex justify-end md:fixed md:bottom-8 md:right-8">
            <Link 
              to="/contacto" 
              state={{ subject: `Interés en adoptar a ${animal.name} (Ref: ${animal.id})` }}
              className="flex items-center justify-center w-full md:w-auto gap-2 bg-orange-600 hover:bg-orange-700 text-white font-bold text-lg py-4 px-8 rounded-full shadow-xl hover:shadow-2xl transition-all transform hover:-translate-y-1"
            >
              <Heart className="w-6 h-6 fill-white" />
              Solicitar Adopción
            </Link>
         </div>
      </div>
    </div>
  );
};
