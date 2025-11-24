import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { MOCK_ANIMALS } from '../constants';
import { AnimalStatus, Sex, Size } from '../types';
import { Filter, SlidersHorizontal } from 'lucide-react';

export const Catalog: React.FC = () => {
  const [filters, setFilters] = useState({
    species: '',
    sex: '',
    size: '',
    age: ''
  });

  const [showMobileFilters, setShowMobileFilters] = useState(false);

  const filteredAnimals = useMemo(() => {
    return MOCK_ANIMALS.filter(animal => {
      if (filters.species && animal.species !== filters.species) return false;
      if (filters.sex && animal.sex !== filters.sex) return false;
      if (filters.size && animal.size !== filters.size) return false;
      if (filters.age) {
        if (filters.age === 'puppy' && animal.age > 1) return false;
        if (filters.age === 'adult' && (animal.age <= 1 || animal.age > 8)) return false;
        if (filters.age === 'senior' && animal.age <= 8) return false;
      }
      return true;
    });
  }, [filters]);

  const handleFilterChange = (key: string, value: string) => {
    setFilters(prev => ({ ...prev, [key]: value }));
  };

  return (
    <div className="bg-gray-50 min-h-screen py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col md:flex-row justify-between items-baseline mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Nuestros Animales</h1>
          <span className="text-gray-500 text-sm mt-2 md:mt-0">{filteredAnimals.length} compañeros encontrados</span>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar Filters */}
          <div className={`lg:w-64 flex-shrink-0 ${showMobileFilters ? 'block' : 'hidden lg:block'}`}>
            <div className="bg-white p-6 rounded-lg shadow-sm sticky top-24">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-lg font-semibold flex items-center gap-2">
                  <Filter className="w-5 h-5 text-green-700" /> Filtros
                </h2>
                <button 
                  onClick={() => setFilters({ species: '', sex: '', size: '', age: '' })}
                  className="text-xs text-orange-500 hover:text-orange-600 underline"
                >
                  Limpiar
                </button>
              </div>

              {/* Filter Groups */}
              <div className="space-y-6">
                {/* Species */}
                <div>
                  <h3 className="font-medium text-sm text-gray-700 mb-2">Especie</h3>
                  <div className="space-y-2">
                    {['Perro', 'Gato'].map(s => (
                      <label key={s} className="flex items-center">
                        <input 
                          type="radio" 
                          name="species" 
                          className="text-green-600 focus:ring-green-500" 
                          checked={filters.species === s}
                          onChange={() => handleFilterChange('species', s)}
                        />
                        <span className="ml-2 text-sm text-gray-600">{s}</span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Sex */}
                <div>
                  <h3 className="font-medium text-sm text-gray-700 mb-2">Sexo</h3>
                  <div className="space-y-2">
                    {Object.values(Sex).map(s => (
                      <label key={s} className="flex items-center">
                        <input 
                          type="radio" 
                          name="sex" 
                          className="text-green-600 focus:ring-green-500"
                          checked={filters.sex === s}
                          onChange={() => handleFilterChange('sex', s)}
                        />
                        <span className="ml-2 text-sm text-gray-600">{s}</span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Size */}
                <div>
                  <h3 className="font-medium text-sm text-gray-700 mb-2">Tamaño</h3>
                  <div className="space-y-2">
                    {Object.values(Size).map(s => (
                      <label key={s} className="flex items-center">
                        <input 
                          type="radio" 
                          name="size" 
                          className="text-green-600 focus:ring-green-500"
                          checked={filters.size === s}
                          onChange={() => handleFilterChange('size', s)}
                        />
                        <span className="ml-2 text-sm text-gray-600">{s}</span>
                      </label>
                    ))}
                  </div>
                </div>

                 {/* Age */}
                 <div>
                  <h3 className="font-medium text-sm text-gray-700 mb-2">Edad</h3>
                  <select 
                    className="w-full border-gray-300 rounded-md text-sm focus:ring-green-500 focus:border-green-500"
                    value={filters.age}
                    onChange={(e) => handleFilterChange('age', e.target.value)}
                  >
                    <option value="">Cualquiera</option>
                    <option value="puppy">Cachorro (0-1 año)</option>
                    <option value="adult">Adulto (1-8 años)</option>
                    <option value="senior">Senior (+8 años)</option>
                  </select>
                </div>
              </div>
            </div>
          </div>

          {/* Mobile Filter Toggle */}
          <button 
            className="lg:hidden flex items-center justify-center w-full bg-white p-3 rounded-lg shadow text-gray-700 font-medium mb-4"
            onClick={() => setShowMobileFilters(!showMobileFilters)}
          >
            <SlidersHorizontal className="w-5 h-5 mr-2" /> {showMobileFilters ? 'Ocultar Filtros' : 'Mostrar Filtros'}
          </button>

          {/* Grid */}
          <div className="flex-1">
            {filteredAnimals.length === 0 ? (
              <div className="text-center py-20">
                <p className="text-gray-500 text-lg">No hemos encontrado animales con esos filtros.</p>
                <button 
                  onClick={() => setFilters({ species: '', sex: '', size: '', age: '' })}
                  className="mt-4 text-green-600 font-semibold hover:underline"
                >
                  Ver todos
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredAnimals.map(animal => (
                  <Link key={animal.id} to={`/adopta/${animal.id}`} className="group bg-white rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden border border-gray-100 flex flex-col">
                    <div className="relative aspect-[4/3] overflow-hidden bg-gray-200">
                      <img 
                        src={animal.images[0]} 
                        alt={animal.name} 
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                        loading="lazy"
                      />
                       <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm px-2 py-1 rounded-md text-xs font-bold text-gray-800 shadow-sm">
                         {animal.sex}
                       </div>
                    </div>
                    <div className="p-5 flex flex-col flex-1">
                      <div className="flex justify-between items-center mb-1">
                        <h3 className="text-xl font-bold text-gray-800">{animal.name}</h3>
                        {animal.status === AnimalStatus.URGENT && (
                          <span className="inline-block w-2 h-2 bg-red-500 rounded-full animate-pulse"></span>
                        )}
                      </div>
                      <p className="text-sm text-green-700 font-medium mb-3">{animal.breed}</p>
                      
                      <div className="grid grid-cols-2 gap-2 text-xs text-gray-500 mb-4">
                        <div className="bg-gray-50 p-1.5 rounded text-center">{animal.ageText}</div>
                        <div className="bg-gray-50 p-1.5 rounded text-center">{animal.size}</div>
                      </div>

                      <div className="mt-auto pt-4 border-t border-gray-100">
                        <span className="text-orange-500 text-sm font-bold group-hover:translate-x-1 transition-transform inline-block">
                          Conóceme &rarr;
                        </span>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
