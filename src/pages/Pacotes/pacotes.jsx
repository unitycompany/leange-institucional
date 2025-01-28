import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../../firebaseConfig";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/autoplay";
import CardPacote from "../../components/cards/cardPacote";
import Footer from "../../components/footer";
import { FaArrowRight } from "react-icons/fa6";
import { FaArrowLeft } from "react-icons/fa";

const Container = styled.div`
  width: 100%;
  max-width: 1280px;
  left: 50%;
  top: 15vh;
  margin-bottom: 20vh;
  transform: translateX(-50%);
  position: relative;
  height: auto;
  display: flex;
  flex-wrap: wrap;
  gap: 25px;
  align-items: center;
  justify-content: space-between;
`;

const PacotesSection = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  padding: 0 5% 5% 5%;
  gap: 20px;
`;

const PacotesDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;

  & > div {
    & > h1 {
      font-size: 38px;
      font-weight: 800;
      font-family: var(--font--comfortaa);
      background: linear-gradient(90deg, var(--color--green), var(--color--blue));
      -webkit-background-clip: text;
      color: transparent;
      padding-bottom: 15px;

      @media (max-width: 768px) {
            font-size: 26px;
            padding-bottom: 15px;
        }
    }

    & > p {
      font-size: 16px;
      color: var(--color--black);
      font-family: var(--font--comfortaa);
      font-weight: 300;
      margin-bottom: 20px;
      
    }
  }
`;

const SwiperContainer = styled.div`
  width: 100%;
  height: auto;
`;

const StyledSwiperSlide = styled(SwiperSlide)`
  display: flex;
  justify-content: center;
  align-items: center;
  height: auto;
  padding-top: 30px;

  & > div {
    width: 90%;
  }
`;

const Pacotes = () => {
  const [pacotes, setPacotes] = useState([]);

  useEffect(() => {
    const fetchPacotes = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "pacotes"));
        const pacotesData = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setPacotes(pacotesData);
      } catch (error) {
        console.error("❌ Erro ao buscar pacotes:", error);
      }
    };

    fetchPacotes();
  }, []);

  const categorias = ["Programações Especiais", "Feriados", "Promoções"];

  return (
    <>
      <Container>
        {categorias.map((categoria) => {
          const pacotesFiltrados = pacotes.filter((pacote) =>
            Array.isArray(pacote.categorias)
              ? pacote.categorias.includes(categoria)
              : pacote.categorias === categoria
          );

          return (
            <PacotesSection key={categoria}>
              <PacotesDiv>
                <div>
                  <h1>{categoria}</h1>
                  <p>
                    Pacotes exclusivos para {categoria.toLowerCase()}! Reserve
                    agora e aproveite condições especiais.
                  </p>
                </div>
              </PacotesDiv>

              {pacotesFiltrados.length > 0 ? (
                <SwiperContainer>
                  <Swiper
                    slidesPerView={1}
                    spaceBetween={30}
                    loop={true}
                    autoplay={{ delay: 3000, disableOnInteraction: false }}
                    modules={[Autoplay, Navigation]}
                    breakpoints={{
                      1280: { slidesPerView: 3, spaceBetween: 30 },
                      1024: { slidesPerView: 3, spaceBetween: 20 },
                      768: { slidesPerView: 1, spaceBetween: 15 },
                      480: { slidesPerView: 1, spaceBetween: 10 },
                    }}
                  >
                    {pacotesFiltrados.map((pacote) => (
                      <StyledSwiperSlide key={pacote.id}>
                        <CardPacote pacote={pacote} />
                      </StyledSwiperSlide>
                    ))}
                  </Swiper>
                </SwiperContainer>
              ) : (
                <p
                  style={{
                    textAlign: "center",
                    fontSize: "16px",
                    fontFamily: "var(--font--comfortaa)",
                    color: "var(--color--black)",
                  }}
                >
                  Por enquanto não temos nenhuma promoção, mas fique por dentro de tudo pelo nosso 
                  <a 
                  style={{
                    color: "var(--color--white)",
                    fontSize: "16px",
                    fontWeight: "600",
                    cursor: "pointer",
                    marginLeft: "1ch",
                    background: "var(--color--blue)",
                    padding: "10px 15px",
                    borderRadius: "10px",
                    textDecoration: "none",
                  }}
                  href="https://chat.whatsapp.com/FsOfaL1Y3jz4XQvNqaAVtZ" target="_blank">GRUPO EXCLUSIVO.</a>
                </p>
              )}
            </PacotesSection>
          );
        })}
      </Container>
      <Footer />
    </>
  );
};

export default Pacotes;
