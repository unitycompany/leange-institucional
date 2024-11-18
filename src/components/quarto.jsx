import styled, { createGlobalStyle } from "styled-components";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation, Autoplay } from "swiper/modules";
import Button from "./button";

const SwiperStyles = createGlobalStyle`
  .swiper-button-next, .swiper-button-prev {
      color: white; 
      border-radius: 50%;
      width: 45px;
      height: 45px;
      background-color: rgba(0, 0, 0, 0.6);
      box-shadow: 0 0 5px rgba(0, 0, 0, 0.5)!important;
      display: flex;
      align-items: center;
      justify-content: center;
      transition: all .2s ease;

      &:hover {
          background-color: rgba(255, 255, 255, .7);
          color: black;
          transform: scale(1.05);
      }

      &::after {
          font-size: 25px; /* Ajuste aqui o tamanho do ícone */
      }
  }

  .swiper-pagination-bullet {
      background: black;
      opacity: 0.7;
      &.swiper-pagination-bullet-active {
          background: #A5C933;
      }
  }
`;


const ContainerQuarto = styled.section`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 80vh;
    padding: 0 5%;
    gap: 15px;
    flex-direction: ${({ reverse }) => (reverse ? "row-reverse" : "row")};

    @media (max-width: 768px){
        flex-direction: column;
        height: auto;
        padding: 5% 2.5%;
    }
`;

const CarrosselDoQuarto = styled.div`
    width: 50%;
    height: 95%;
    border-radius: 35px 0 35px 0;

    @media (max-width: 768px){
        width: 100%;
        height: 50vh;
    }
`;

const TextsDoQuarto = styled.div`
    width: 50%;
    height: 95%;
    display: flex;
    align-items: flex-start;
    justify-content: center;
    flex-direction: column;
    gap: 20px;
    padding: 25px;
    background-color: ${({ background }) => background || "rgba(0, 0, 0, 0.1)"};
    border-radius: 0px 30px 0px 10px;

    @media (max-width: 768px){
        width: 100%;
        height: 55vh;
        padding: 15px;
        gap: 50px;
    }

    & > div{
        height: 80%;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: flex-start;

        & > section{
            width: 100%;
            display: flex;

            & > div{
                width: 100%;
                display: flex;
                justify-content: space-between;

                & > p{
                    font-size: 1.5rem;
                    font-weight: 300;
                    font-family: var(--font--comfortaa);
                    color: var(--color--black);

                    @media (max-width: 768px){
                        font-size: 1.2rem;
                    }
                }
            }
        }
    }
`;

const SuiteTitle = styled.h2`
    font-size: 1rem;
    display: flex;
    align-items: center;
    justify-content: center;
    color: var(--color--black);
    font-family: var(--font--comfortaa);
    font-weight: 400;
    padding: 3px 12px;
    border-radius: 0 10px 0 10px;
    background-color: transparent;
    cursor: default;


    @media (max-width: 768px){
        font-size: .7rem;
        padding: 5px 15px;
        display: inline;
        white-space: nowrap;
    }
`;

const SuiteDescription = styled.p`
    font-size: .9rem;
    line-height: 120%;
    color: var(--color--black); 
    font-family: var(--font--comfortaa)!important;
    
    @media (max-width: 768px){
        font-size: 0.75rem;
    }
`;

const Features = styled.div`
    display: flex;
    gap: 8px;
    flex-wrap: wrap;

    span {
        display: flex;
        align-items: center;
        gap: 5px;
        background: var(--color--white);
        backdrop-filter: blur(10px);
        justify-content: center;
        gap: 10px;
        padding: 5px 10px;
        border-radius: 12px 0 12px 0;
        font-size: 10px;
        transition: all .2s ease;
        font-family: var(--font--comfortaa);

        @media (max-width: 768px){
            font-size: 10px;
            font-weight: 300;
            padding: 5px 10px;
        }
        
        &:hover {
            color: var(--color--white);
            background-color: var(--color--black);
            cursor: default;
        }
    }

    svg {
        font-size: 14px;

        @media (max-width: 768px){
            font-size: 12px;
        }
    }
`;

const SwiperImage = styled.img`
    width: 100%;
    height: 75.8vh;
    object-fit: cover;
    border-radius: 35px 0 35px 0;

    @media (max-width: 768px){
        height: 50vh;
    }
`;

const Quarto = ({ images = [], suites = [], reverse = false, background = "rgba(0, 0, 0, 0.1)" }) => {
    return (
        <ContainerQuarto reverse={reverse}>
            <CarrosselDoQuarto>
                <SwiperStyles />
                <Swiper
                    modules={[Autoplay, Pagination, Navigation]}
                    autoplay={{
                        delay: 200000,
                        disableOnInteraction: false,
                        pauseOnMouseEnter: true,
                    }}
                    navigation={true}
                    pagination={true}
                    loop={true}
                    spaceBetween={10}
                    slidesPerView={1}
                >
                    {images.map((image, index) => (
                        <SwiperSlide key={index}>
                            <SwiperImage src={image} alt={`Slide ${index + 1}`} />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </CarrosselDoQuarto>

            <TextsDoQuarto background={background}>
                {suites.map((suite, index) => (
                    <div key={index}>
                        <section>
                            <div>
                                <p>{suite.NomedaSuite}</p>
                                <SuiteTitle>{suite.NomedaPousada}</SuiteTitle>
                            </div>
                        </section>
                        <Features>
                            {suite.features?.map((feature, idx) => (
                                <span key={idx}>
                                    {feature.icon} {feature.text}
                                </span>
                            ))}
                        </Features>
                        <SuiteDescription>{suite.Description}</SuiteDescription>
                        <Button
                            onClick={() => window.open("https://wa.link/dojlwi", "_blank")}
                            text="Fazer reserva agora!"
                        />
                    </div>
                ))}
            </TextsDoQuarto>
        </ContainerQuarto>
    );
};


export default Quarto;
