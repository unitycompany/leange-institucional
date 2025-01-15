import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const DebugRedirect = () => {
    const location = useLocation();

    useEffect(() => {
        console.log("Rota atual:", location.pathname);
        const originalPushState = window.history.pushState;
        const originalReplaceState = window.history.replaceState;

        // Interceptar redirecionamentos
        window.history.pushState = function (...args) {
            console.warn("PushState detectado:", args);
            originalPushState.apply(this, args);
        };

        window.history.replaceState = function (...args) {
            console.warn("ReplaceState detectado:", args);
            originalReplaceState.apply(this, args);
        };

        return () => {
            // Restaurar o comportamento padrão
            window.history.pushState = originalPushState;
            window.history.replaceState = originalReplaceState;
        };
    }, [location]);

    return null;
};

export default DebugRedirect;
