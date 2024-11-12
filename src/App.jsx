import React, { useEffect } from 'react';
import { HashRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import './styles/App.css';
import './styles/global.css';
import './styles/index.css';
import './styles/variables.css';

import Home from './pages/Home/Home';
import Event from './pages/Event/event';
import Sobre from './pages/Sobre/Sobre';
import Serra from './pages/Serra/Serra';
import Mar from './pages/Mar/Mar';
import NavegationBar from './components/navegationBar';
import Acomodacoes from './pages/Acomoda/acomoda';

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
          <Route path="/acomoda" element={<motion.div initial={{ opacity: 0, scale: 0.8, rotateY: 90 }} animate={{ opacity: 1, scale: 1, rotateY: 0 }} exit={{ opacity: 0, scale: 0.8, rotateY: -90 }} transition={{ duration: 0.2, ease: "easeInOut" }}><Acomodacoes /></motion.div>} />
        </Routes>
      </AnimatePresence>
    </>
  );
}

function App() {
  return (
    <Router>
      <NavegationBar />
      <AnimatedRoutes />
    </Router>
  );
}

export default App;