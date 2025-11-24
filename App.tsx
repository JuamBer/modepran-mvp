import React from 'react';
import { HashRouter, Routes, Route, Navigate } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { Home } from './pages/Home';
import { Catalog } from './pages/Catalog';
import { AnimalDetail } from './pages/AnimalDetail';
import { Centers } from './pages/Centers';
import { Contact } from './pages/Contact';

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
