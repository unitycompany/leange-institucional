import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import styled, { keyframes } from 'styled-components';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import { motion, useInView } from 'framer-motion';
import ButtonAcomoda from './button2';

const waterWave2 = keyframes`
  0% {
    border-radius: 0 20px 20px 0;
  }
  25% {
    border-radius: 20px 0 20px 20px;
  }
  50% {
    border-radius: 20px 20px 0 20px;
  }
  75% {
    border-radius: 20px 20px 20px 0;
  }
  100% {
    border-radius: 0 20px 20px 0;
  }
`;

const CardContainer = styled(motion.div)`
    display: flex;
    flex-direction: column;
    height: auto;
    padding: 10px;
    background: var(--color--white);
    border-radius: 12px;
    overflow: hidden;
    width: 100%;
    border: 1px solid var(--color--black);
    animation: ${waterWave2} 5s ease-in-out infinite;
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);

    @media (max-width: 768px){
        border: none;
        padding: 5px;
        background-color: rgba(0, 0, 0, 0.1);
        animation: none;
        border-radius: 15px 15px 5px 5px;
    }
`;

const CardImage = styled.img`
    width: 100%;
    height: 220px;
    object-fit: cover;
    border-radius: 10px;

    @media (max-width: 768px){
        border: 2px solid var(--color--black);
        height: 320px;
    }
`;

const CardContent = styled.div`
    padding: 10px;
    display: flex;
    flex-direction: column;
    gap: 10px;
    color: #333;
`;

const Title = styled.h3`
    font-size: 22px;
    font-weight: bold;
    font-family: var(--font--comfortaa);
    margin: 0;
`;

const DateRange = styled.p`
    font-size: 14px;
    color: #777;
    font-family: var(--font--avenir);
    margin: 0;
`;

const Features = styled.div`
    display: flex;
    gap: 8px;
    flex-wrap: wrap;
    font-size: 12px;
    color: #555;

    span {
        display: flex;
        align-items: center;
        gap: 5px;
        background: #e0e0e0;
        font-family: var(--font--comfortaa);
        padding: 5px 8px;
        border-radius: 8px;
        font-size: 10px;

        @media (max-width: 768px){
            background-color: var(--color--white);
        }
    }
`;

const PriceSection = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 10px;
    font-size: 16px;
`;

const Price = styled.p`
    font-size: 18px;
    font-family: var(--font--comfortaa);
    font-weight: bold;
    margin: 0;
    color: #333;

    & > span{
        font-size: 10px;
    }
`;

const EventCardCarousel = ({ events = [] }) => {
    return (
        <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            autoplay={true}
            spaceBetween={20}
            navigation
            pagination={false}
            loop={true}
            breakpoints={{
                1024: { slidesPerView: 3 }, // Desktop
                768: { slidesPerView: 2 },  // Tablet
                0: { slidesPerView: 1 }     // Telefone
            }}
        >
            {events.map((event, index) => (
                <SwiperSlide key={index}>
                    <InViewCardContainer event={event} delay={index * 0.1} />
                </SwiperSlide>
            ))}
        </Swiper>
    );
};

const InViewCardContainer = ({ event, delay }) => {
    const ref = React.useRef(null);
    const isInView = useInView(ref, { once: true }); // Animar apenas uma vez quando visível

    const handleClick = () => {
        window.open("https://wa.link/dojlwi", "_blank");
    };

    return (
        <CardContainer
            ref={ref}
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay }}
        >
            <CardImage src={event.image} alt={event.title} />
            <CardContent>
                <Title>{event.title}</Title>
                <DateRange>{event.dateRange}</DateRange>
                <Features>
                    {event.features.map((feature, i) => (
                        <span key={i}>
                            {feature.icon} {feature.text}
                        </span>
                    ))}
                </Features>
                <PriceSection>
                    <Price>A partir de: <span>10x</span>R${event.price}</Price>
                </PriceSection>
                <ButtonAcomoda 
                    text="Quero fechar minha reserva agora" 
                    backDefine="var(--color--black)" 
                    colorDefine="var(--color--white)"
                    onClick={handleClick} // Passa o onClick para o ButtonAcomoda
                />
            </CardContent>
        </CardContainer>
    );
};

export default EventCardCarousel;
