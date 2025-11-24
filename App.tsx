import React from 'react';
import { HashRouter, Navigate, Route, Routes } from 'react-router-dom';
import { Footer } from './components/Footer';
import { Navbar } from './components/Navbar';
import { AnimalDetail } from './pages/AnimalDetail';
import { Catalog } from './pages/Catalog';
import { Centers } from './pages/Centers';
import { Contact } from './pages/Contact';
import { Home } from './pages/Home';
import { Volunteer } from './pages/Volunteer';

const App: React.FC = () => {
  return (
    <HashRouter>
      <div className="flex flex-col min-h-screen font-sans text-gray-900 bg-white">
        <Navbar />
        
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/adopta" element={<Catalog />} />
            <Route path="/adopta/:id" element={<AnimalDetail />} />
            <Route path="/centros" element={<Centers />} />
            <Route path="/contacto" element={<Contact />} />
            <Route path="/voluntariado" element={<Volunteer />} />
            
            {/* Fallback routes */}
            <Route path="/donar" element={<Contact />} /> 
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </HashRouter>
  );
};

export default App;
