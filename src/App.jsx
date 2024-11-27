import React, { useEffect } from 'react';
import { HashRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import './styles/App.css';
import './styles/global.css';
import './styles/index.css';
import './styles/variables.css';

import Home from './pages/Home/Home';
import Event from './pages/Event/Event';
import Sobre from './pages/Sobre/Sobre';
import Serra from './pages/Serra/Serra';
import Mar from './pages/Mar/Mar';
import NavegationBar from './components/navegationBar';
import AcomodaSerra from './pages/Acomoda/acomodaSerra';
import AcomodaMar from './pages/Acomoda/acomodaMar';
import LpMar from './pages/Mar/lpMar';
import LpSerra from './pages/Serra/lpSerra';

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function AnimatedRoutes() {
  const location = useLocation();

  return (
    <>
      <ScrollToTop />
      <AnimatePresence>
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<motion.div initial={{ opacity: 0, scale: 0.8, rotateY: 90 }} animate={{ opacity: 1, scale: 1, rotateY: 0 }} exit={{ opacity: 0, scale: 0.8, rotateY: -90 }} transition={{ duration: 0.2, ease: "easeInOut" }}><Home /></motion.div>} />
          <Route path="/sobre" element={<motion.div initial={{ opacity: 0, scale: 0.8, rotateY: 90 }} animate={{ opacity: 1, scale: 1, rotateY: 0 }} exit={{ opacity: 0, scale: 0.8, rotateY: -90 }} transition={{ duration: 0.2, ease: "easeInOut" }}><Sobre /></motion.div>} />
          <Route path="/mar" element={<motion.div initial={{ opacity: 0, scale: 0.8, rotateY: 90 }} animate={{ opacity: 1, scale: 1, rotateY: 0 }} exit={{ opacity: 0, scale: 0.8, rotateY: -90 }} transition={{ duration: 0.2, ease: "easeInOut" }}><Mar /></motion.div>} />
          <Route path="/serra" element={<motion.div initial={{ opacity: 0, scale: 0.8, rotateY: 90 }} animate={{ opacity: 1, scale: 1, rotateY: 0 }} exit={{ opacity: 0, scale: 0.8, rotateY: -90 }} transition={{ duration: 0.2, ease: "easeInOut" }}><Serra /></motion.div>} />
          <Route path="/event" element={<motion.div initial={{ opacity: 0, scale: 0.8, rotateY: 90 }} animate={{ opacity: 1, scale: 1, rotateY: 0 }} exit={{ opacity: 0, scale: 0.8, rotateY: -90 }} transition={{ duration: 0.2, ease: "easeInOut" }}><Event /></motion.div>} />
          <Route path="/acomodaMar" element={<motion.div initial={{ opacity: 0, scale: 0.8, rotateY: 90 }} animate={{ opacity: 1, scale: 1, rotateY: 0 }} exit={{ opacity: 0, scale: 0.8, rotateY: -90 }} transition={{ duration: 0.2, ease: "easeInOut" }}><AcomodaMar /></motion.div>} />
          <Route path="/acomodaSerra" element={<motion.div initial={{ opacity: 0, scale: 0.8, rotateY: 90 }} animate={{ opacity: 1, scale: 1, rotateY: 0 }} exit={{ opacity: 0, scale: 0.8, rotateY: -90 }} transition={{ duration: 0.2, ease: "easeInOut" }}><AcomodaSerra /></motion.div>} />
          <Route path="/lpSerra" element={<motion.div initial={{ opacity: 0, scale: 0.8, rotateY: 90 }} animate={{ opacity: 1, scale: 1, rotateY: 0 }} exit={{ opacity: 0, scale: 0.8, rotateY: -90 }} transition={{ duration: 0.2, ease: "easeInOut" }}><LpSerra /></motion.div>} />
          <Route path="/lpMar" element={<motion.div initial={{ opacity: 0, scale: 0.8, rotateY: 90 }} animate={{ opacity: 1, scale: 1, rotateY: 0 }} exit={{ opacity: 0, scale: 0.8, rotateY: -90 }} transition={{ duration: 0.2, ease: "easeInOut" }}><LpMar /></motion.div>} />
        </Routes>
      </AnimatePresence>
    </>
  );
}

function AppContent() {
  const location = useLocation();

  // Ocultar NavegationBar nas rotas lpMar e lpSerra
  const hiddenRoutes = ['/lpMar', '/lpSerra'];
  const hideNav = hiddenRoutes.includes(location.pathname);

  return (
    <>
      {!hideNav && <NavegationBar />}
      <AnimatedRoutes />
    </>
  );
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;
