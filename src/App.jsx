
import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import { Toaster } from '@/components/ui/toaster';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import HomePage from '@/pages/HomePage';
import ContactPage from '@/pages/ContactPage';
import JoinJamlPage from '@/pages/JoinJamlPage';

function App() {
  const location = useLocation();
  const isJaml = location.pathname === '/join-jaml';
  return (
    <div className="flex flex-col min-h-screen bg-background">
      {!isJaml && <Navbar />}
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<HomePage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/join-jaml" element={<JoinJamlPage />} />
        </Routes>
      </AnimatePresence>
      {!isJaml && <Footer />}
      <Toaster />
    </div>
  );
}

export default App;
