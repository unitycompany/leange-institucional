import React, { useEffect } from 'react';
import { StaticRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
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
                    <Route path="/" element={<Home />} />
                    <Route path="/sobre" element={<Sobre />} />
                    <Route path="/mar" element={<Mar />} />
                    <Route path="/serra" element={<Serra />} />
                    <Route path="/event" element={<Event />} />
                    <Route path="/acomodaMar" element={<AcomodaMar />} />
                    <Route path="/acomodaSerra" element={<AcomodaSerra />} />
                    <Route path="/lpSerra" element={<LpSerra />} />
                    <Route path="/lpMar" element={<LpMar />} />
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