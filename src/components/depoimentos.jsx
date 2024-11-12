import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import styled from "styled-components";
import CustomButton from "./button3";

const StyledTextDepoimentos = styled.section`
    width: 100%;
    margin-top: 5vh;
    display: flex;
    padding: 0 5%;
    justify-content: center;
    align-items: center;
    height: 12vh;
    
    @media (max-width: 768px){
        height: 10vh;
        align-items: center;
        margin-top: 2.5vh;
    }

    & > h1 {
        font-size: 2rem;
        font-family: var(--font--comfortaa);
        font-weight: 100;
        text-align: center;
        width: 100%;
        
        @media (max-width: 768px){
            font-size: 1.6rem;
        }
    }
`;

const CarouselContainer = styled.div`
    display: flex;
    width: 100%;
    justify-content: space-between;
    align-items: center;
    height: 80vh;
    padding: 0 5%;

    @media (max-width: 768px){
        height: auto;
    }
`;

const Container = styled.div`
    width: 95%; 
    height: 70vh; 
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 0 10px;
    border-radius: 15px 0 15px 0; 
    position: relative; 
    overflow: hidden; 

    @media (max-width: 768px){
        width: 100%;
        margin: 0;
        height: 65vh;
        border: 1px solid transparent;
    }
`;

const DepoimentoText = styled.p`
    font-size: .6rem;
    border-radius: 0 10px 0 10px;
    position: absolute;
    bottom: 72%;
    left: -60px;
    transform: rotate(270deg);
    padding: 5px 25px;
    margin: 10px 0; 
    color: var(--color--white);
    background-color: rgba(0, 0, 0, 0.4);
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
    backdrop-filter: blur(20px);
    z-index: 1; 
    font-family: var(--font--comfortaa);
    font-weight: 100;

    @media (max-width: 768px){
        font-size: .7rem;
        text-align: center;
        width: 60%;
        display: inline-block;
        left: -75px;
        bottom: 72.5%;
        width: 55%;
    }
`;

const depoimentosData = [
    {
        id: 1,
        text: "Pousada Le Ange Mar",
        bgImages: ["https://res.cloudinary.com/dupg7clzc/image/upload/f_auto,q_auto/v1731341041/3_nxmzvb_uqceix.webp", "https://res.cloudinary.com/dupg7clzc/image/upload/f_auto,q_auto/v1731341041/4_zkfafk_oftuer.webp", "https://res.cloudinary.com/dupg7clzc/image/upload/f_auto,q_auto/v1731341043/5_tb7gyj_m9gzdd.webp", "https://res.cloudinary.com/dupg7clzc/image/upload/f_auto,q_auto/v1731341046/6_y0fjmz_u19wod.webp", "https://res.cloudinary.com/dupg7clzc/image/upload/f_auto,q_auto/v1731341046/2_kck8ru_pps4we.webp"],
    },
    {
        id: 2,
        text: "Pousada Le Ange Serra",
        bgImages: ["https://res.cloudinary.com/dupg7clzc/image/upload/f_auto,q_auto/v1731341240/1_ph73ii.webp", "https://res.cloudinary.com/dupg7clzc/image/upload/f_auto,q_auto/v1731341241/2_v8reyz_vm3ce1.webp", "https://res.cloudinary.com/dupg7clzc/image/upload/f_auto,q_auto/v1731341241/3_ji6uzq_daetsl.webp", "https://res.cloudinary.com/dupg7clzc/image/upload/f_auto,q_auto/v1731341242/5_ty6zqr_q1l2mc.webp", "https://res.cloudinary.com/dupg7clzc/image/upload/f_auto,q_auto/v1731341242/6_dovfum_tswv2e.webp", "https://res.cloudinary.com/dupg7clzc/image/upload/f_auto,q_auto/v1731341242/4_u1pvbr_zcx4gk.webp"],
    },
    {
        id: 3,
        text: "Pousada Le Ange Mar",
        bgImages: ["https://res.cloudinary.com/dupg7clzc/image/upload/f_auto,q_auto/v1731341441/1_fddk63_gm2m6g.webp", "https://res.cloudinary.com/dupg7clzc/image/upload/f_auto,q_auto/v1731341442/2_eomyvd_nnnec7.webp", "https://res.cloudinary.com/dupg7clzc/image/upload/f_auto,q_auto/v1731341444/3_islkto_wkjaco.webp", "https://res.cloudinary.com/dupg7clzc/image/upload/f_auto,q_auto/v1731341446/4_tds2ap_sarfwc.webp", "https://res.cloudinary.com/dupg7clzc/image/upload/f_auto,q_auto/v1731341448/5_cvbsbp_vbx4jm.webp", "https://res.cloudinary.com/dupg7clzc/image/upload/f_auto,q_auto/v1731341450/6_cs2odp_vpnkmq.webp"],
    },
    {
        id: 4,
        text: "Pousada Le Ange Serra",
        bgImages: ["https://res.cloudinary.com/dupg7clzc/image/upload/f_auto,q_auto/v1731341580/1_vw8gku_jdpu1m.webp", "https://res.cloudinary.com/dupg7clzc/image/upload/f_auto,q_auto/v1731341581/2_u9soep_axzzap.webp", "https://res.cloudinary.com/dupg7clzc/image/upload/f_auto,q_auto/v1731341582/3_aryhje_lmyuui.webp", "https://res.cloudinary.com/dupg7clzc/image/upload/f_auto,q_auto/v1731341584/4_g2prnk_ejavci.webp"],
    },
    {
        id: 5,
        text: "Pousada Le Ange Mar",
        bgImages: ["https://res.cloudinary.com/dupg7clzc/image/upload/f_auto,q_auto/v1731341717/1_urlgor_pasdht.webp", "https://res.cloudinary.com/dupg7clzc/image/upload/f_auto,q_auto/v1731341718/2_ij3lu8.webp", "https://res.cloudinary.com/dupg7clzc/image/upload/f_auto,q_auto/v1731341720/3_scnvzz_z55ake.webp", "https://res.cloudinary.com/dupg7clzc/image/upload/f_auto,q_auto/v1731341722/4_j7wxsn_d4icoi.webp", "https://res.cloudinary.com/dupg7clzc/image/upload/f_auto,q_auto/v1731341724/5_jn3xrs_bx73kp.webp"],
    },
    {
        id: 6,
        text: "Pousada Le Ange Serra",
        bgImages: ["https://res.cloudinary.com/dupg7clzc/image/upload/f_auto,q_auto/v1731341840/1_zt1frt_tozga2.webp", "https://res.cloudinary.com/dupg7clzc/image/upload/f_auto,q_auto/v1731341841/2_m6a7pn_dljjpo.webp", "https://res.cloudinary.com/dupg7clzc/image/upload/f_auto,q_auto/v1731341842/3_f1nazk_rjbcys.webp", "https://res.cloudinary.com/dupg7clzc/image/upload/f_auto,q_auto/v1731341845/4_al1kde_fctxov.webp", "https://res.cloudinary.com/dupg7clzc/image/upload/f_auto,q_auto/v1731341847/5_fz3g46_f4bfjz.webp"],
    },
    {
        id: 7,
        text: "Pousada Le Ange Mar",
        bgImages: ["https://res.cloudinary.com/dupg7clzc/image/upload/f_auto,q_auto/v1731342013/1_adshm2_k64nfp.webp", "https://res.cloudinary.com/dupg7clzc/image/upload/f_auto,q_auto/v1731342015/2_gvo2bk_z3cakr.webp", "https://res.cloudinary.com/dupg7clzc/image/upload/f_auto,q_auto/v1731342017/3_eqkktf_gldizg.webp", "https://res.cloudinary.com/dupg7clzc/image/upload/f_auto,q_auto/v1731342019/4_pw8xsl_suk6of.webp", "https://res.cloudinary.com/dupg7clzc/image/upload/f_auto,q_auto/v1731342021/5_abwhg7_odyfrq.webp"],
    }
];

const Depoimentos = () => {
    return (
        <>
            <StyledTextDepoimentos>
                <h1>Palavra do Hóspede</h1>
            </StyledTextDepoimentos>

            <CarouselContainer>
                {/* Primeiro Swiper - Carrossel de depoimentos */}
                <Swiper
                    slidesPerView={1}
                    spaceBetween={10}
                    modules={[ Navigation, Pagination, Autoplay ]}
                    pagination={false ? { clickable: true } : false}
                    navigation={true}
                    loop={true}
                    grabCursor={true}
                    autoplay={{ delay: 7000, disableOnInteraction: false, pauseOnMouseEnter: true }}
                    breakpoints={{
                        1024: {
                            slidesPerView: 3, 
                        },
                        768: {
                            slidesPerView: 2, 
                        },
                        480: {
                            slidesPerView: 1, 
                        },
                    }}
                >
                    {depoimentosData.map((depoimento) => (
                        <SwiperSlide key={depoimento.id}>
                            <Container>
                                {/* Segundo Swiper - Carrossel de imagens de fundo dentro de cada depoimento */}
                                <Swiper
                                    slidesPerView={1}
                                    spaceBetween={10}
                                    loop={true}
                                    style={{ width: '100%', height: '100%' }}
                                    autoplay={{ delay: 5000, disableOnInteraction: false, pauseOnMouseEnter: true }}
                                    onTouchStart={(e) => {
                                        e.stopPropagation();
                                    }}
                                    onMouseEnter={(e) => {
                                        e.stopPropagation();
                                    }}
                                >
                                    {depoimento.bgImages.map((bgImage, index) => (
                                        <SwiperSlide key={index}>
                                            <div
                                                style={{
                                                    backgroundImage: `url(${bgImage})`,
                                                    backgroundSize: 'cover',
                                                    backgroundPosition: 'center',
                                                    width: '100%',
                                                    height: '100%',
                                                    borderRadius: '25px 0 25px 0'
                                                }}
                                                loading="lazy"
                                            />
                                        </SwiperSlide>
                                    ))}
                                </Swiper>
                                <DepoimentoText>{depoimento.text}</DepoimentoText>
                            </Container>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </CarouselContainer>

            <StyledTextDepoimentos>
                <CustomButton 
                    text="Reservar agora!"
                    textColor="var(--color--black)"
                    backgroundColor="transparent"
                    borderColor="var(--color--black)"
                    iconColor="var(--color--black)"
                    hoverBackgroundColor="var(--color--black)"
                    hoverBorderColor="var(--color--black)"
                    hoverColor="var(--color--white)"
                    hoverIconColor="var(--color--white)"
                    onClick={() => window.open("https://wa.link/dojlwi", "_blank")}
                />
            </StyledTextDepoimentos>
        </>
    );
}

export default Depoimentos;
