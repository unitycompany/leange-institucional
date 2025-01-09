import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import styled, { keyframes } from 'styled-components';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import IconButton from './button4';
import AOS from 'aos';
import 'aos/dist/aos.css';

// Importação dos ícones necessários
import { FaUtensils, FaRegCreditCard, FaPaw } from 'react-icons/fa';

// Mapeamento de strings para componentes de ícones
const iconMap = {
  '<FaUtensils />': <FaUtensils />,
  '<FaRegCreditCard />': <FaRegCreditCard />,
  '<FaPaw />': <FaPaw />,
};

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

const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: auto;
  padding: 10px;
  background: var(--color--white);
  border-radius: 12px;
  overflow: hidden;
  width: 100%;
  animation: ${waterWave2} 5s ease-in-out infinite;
  background-color: rgba(0, 0, 0, 0.1);

  @media (max-width: 768px) {
    border: none;
    padding: 5px;
    background-color: rgba(0, 0, 0, 0.1);
    animation: none;
    border-radius: 15px 15px 5px 5px;
  }
`;

const SwiperSlideSection = styled('SwiperSlide')`
   width: 33%; /* Cada card terá 30% de largura */
  display: flex;
  justify-content: center; /* Centraliza o conteúdo */
  box-sizing: border-box;
  padding: 0 10px; /* Adiciona espaçamento horizontal entre os cards */

  @media (max-width: 768px) {
    width: 100%; /* No mobile, cada card ocupa 100% da largura */
    padding: 0; /* Remove o espaçamento horizontal */
  }
`

const SwiperContainer = styled.div`
  display: flex;
  justify-content: space-between; /* Garante espaçamento uniforme entre os cards */
  flex-wrap: wrap; /* Permite quebra de linha em telas menores */
  width: 100%; /* O container ocupa 100% da largura */
  box-sizing: border-box;
`;

const CardImage = styled.img`
  width: 100%;
  height: 40vh !important;
  object-fit: cover;
  border-radius: 10px;

  @media (max-width: 768px) {
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
  font-family: var(--font--comfortaa);
  font-weight: 100;
  margin: 0;
`;

const Features = styled.div`
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
  font-size: 12px;
  color: var(--color--black);

  span {
    display: flex;
    align-items: center;
    gap: 5px;
    background: var(--color--white);
    font-family: var(--font--comfortaa);
    padding: 5px 8px;
    border-radius: 8px;
    font-size: 10px;

    @media (max-width: 768px) {
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

  & > span {
    font-size: 10px;
  }
`;

const EventCardCarousel = ({ events = [] }) => {
    return (
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        autoplay={{ delay: 7000, disableOnInteraction: false, pauseOnMouseEnter: true }}
        spaceBetween={20}
        navigation
        pagination={false}
        loop={true}
        breakpoints={{
          1024: { slidesPerView: 3, spaceBetween: 20 }, // Exibe 3 cards em telas maiores
          768: { slidesPerView: 2, spaceBetween: 15 }, // Exibe 2 cards em tablets
          0: { slidesPerView: 1, spaceBetween: 0 }, // Exibe 1 card no mobile
        }}
      >
        {events.map((event, index) => (
          <SwiperSlide key={index}>
            <CardContainer data-aos="fade-up" data-aos-delay="0">
              <CardImage src={event.image} alt={event.title} data-aos="fade-up" data-aos-delay="100" />
              <CardContent>
                <Title data-aos="fade-up" data-aos-delay="200">{event.title}</Title>
                <DateRange data-aos="fade-down" data-aos-delay="250">{event.dateRange}</DateRange>
                <Features data-aos="fade-up" data-aos-delay="300">
                  {event.features.map((feature, i) => (
                    <span key={i} data-aos="fade-up" data-aos-delay="400">
                      {iconMap[feature.icon] || feature.icon} {feature.text}
                    </span>
                  ))}
                </Features>
                <PriceSection>
                  <Price data-aos="fade-in" data-aos-delay="500">A partir de: <span>12x</span>R${event.price}</Price>
                </PriceSection>
                <IconButton
                  text="Quero fazer minha reserva agora"
                  text2="Clique e reserve!"
                  borderColor="var(--color--black)"
                  textColor="var(--color--black)"
                  hoverColor="var(--color--black)"
                  hoverTextColor="var(--color--white)"
                  onClick={() => window.open("https://wa.link/dojlwi", "_blank")}
                />
              </CardContent>
            </CardContainer>
          </SwiperSlide>
        ))}
      </Swiper>
    );
  };
  

export default EventCardCarousel;
