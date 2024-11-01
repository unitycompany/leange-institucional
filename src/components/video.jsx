import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import styled from 'styled-components';

const StyledVideo = styled(motion.video)`
    width: 100%;
    object-fit: cover;
    height: 95vh;
    position: relative;
    z-index: -1;
    top: 0;
    left: 0;
    border-radius: 0 0 1000px 1000px / 100px 100px;
    clip-path: circle(0% at 50% 50%);
    
    @media (max-width: 768px){
        height: 95dvh;
        border-radius: 0 0 500px 500px / 50px 50px;
    }
`;

const BackgroundVideo = () => {
    const videoRef = useRef(null);

    useEffect(() => {
        const videoElement = videoRef.current;

        // Evitar que o vídeo recarregue sempre que o componente é renderizado novamente
        if (videoElement && !videoElement.playing) {
            videoElement.play().catch(error => console.error("Falha ao iniciar o vídeo:", error));
        }
    }, []);

    return (
        <StyledVideo
            ref={videoRef}
            autoPlay
            loop
            muted
            playsInline
            initial={{ clipPath: "circle(0% at 50% 50%)" }}
            animate={{ clipPath: "circle(100% at 50% 50%)" }}
            transition={{ duration: 1, ease: "easeInOut" }}
        >
            <source 
                src="https://res.cloudinary.com/dupg7clzc/video/upload/f_auto,q_auto/v1729513957/home_play_gfetmo.mp4"
                type="video/mp4" 
            />
            Seu navegador não suporta o elemento de vídeo.
        </StyledVideo>
    );
};

export default BackgroundVideo;
    