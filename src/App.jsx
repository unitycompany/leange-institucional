import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { SpeedInsights } from "@vercel/speed-insights/react";
import { AnimatePresence, motion } from 'framer-motion';
import { Analytics } from "@vercel/analytics/react"

import './styles/App.css';
import './styles/global.css';
import './styles/index.css';
import './styles/variables.css';

import DebugRedirect from '../debug';

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
import Pacotes from './pages/Pacotes/pacotes';
import Modal from './components/modal';
import ModalAlert from './components/modalAlert';

function ScrollToTop() {
    const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);

    return null;
}

function AnimatedRoutes() {
    const location = useLocation();

    // Configurações de animação para entrada e saída
    const pageTransition = {
        initial: { opacity: 0, scale: 0.9 },
        animate: { opacity: 1, scale: 1 },
        exit: { opacity: 0, scale: 0.9 },
        transition: { duration: 0.5, ease: 'easeInOut' }
    };

    return (
        <>
        <DebugRedirect />

        <AnimatePresence mode="wait">
            <Routes location={location} key={location.pathname}>
                <Route
                    path="/"
                    element={
                        <motion.div {...pageTransition}>
                            <Home />
                        </motion.div>
                    }
                />
                <Route
                    path="/sobre"
                    element={
                        <motion.div {...pageTransition}>
                            <Sobre />
                        </motion.div>
                    }
                />
                <Route
                    path="/mar"
                    element={
                        <motion.div {...pageTransition}>
                            <Mar />
                        </motion.div>
                    }
                />
                <Route
                    path="/serra"
                    element={
                        <motion.div {...pageTransition}>
                            <Serra />
                        </motion.div>
                    }
                />
                <Route
                    path="/event"
                    element={
                        <motion.div {...pageTransition}>
                            <Event />
                        </motion.div>
                    }
                />
                <Route
                    path="/acomodaMar"
                    element={
                        <motion.div {...pageTransition}>
                            <AcomodaMar />
                        </motion.div>
                    }
                />
                 <Route
                    path="/pacotes"
                    element={
                        <motion.div {...pageTransition}>
                            <Pacotes />
                        </motion.div>
                    }
                />
                <Route
                    path="/acomodaSerra"
                    element={
                        <motion.div {...pageTransition}>
                            <AcomodaSerra />
                        </motion.div>
                    }
                />
                <Route
                    path="/lpSerra"
                    element={
                        <motion.div {...pageTransition}>
                            <LpSerra />
                        </motion.div>
                    }
                />
                <Route
                    path="/lpMar"
                    element={
                        <motion.div {...pageTransition}>
                            <LpMar />
                        </motion.div>
                    }
                />
            </Routes>
        </AnimatePresence>
        </>
    );
}

function AppContent() {
    const location = useLocation();

    // Rotas onde o NavegationBar deve ser escondido
    const hiddenRoutes = ['/lpMar', '/lpSerra'];

    // Verifica se a rota atual está na lista de rotas escondidas
    const hideNav = hiddenRoutes.some((route) => location.pathname.startsWith(route));

    return (
        <>
            {!hideNav && <NavegationBar />}
            <AnimatedRoutes />
            {/* Adicione o SpeedInsights aqui */}
            <SpeedInsights />
            <Analytics />
        </>
    );
}

function App() {
    return (
        <Router>
            
            <ScrollToTop />
            <AppContent />
        </Router>
    );
}

export default App;
