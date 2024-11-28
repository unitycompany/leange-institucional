import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import styled from "styled-components";
import CustomButton from "./button3";
import AOS from 'aos';
import 'aos/dist/aos.css';

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
        bgImages: ["https://res.cloudinary.com/dabucfkmg/image/upload/v1732793650/3_nxmzvb_uqceix_ecvuyx.webp", "https://res.cloudinary.com/dabucfkmg/image/upload/v1732793650/4_zkfafk_oftuer_o9xslm.webp", "https://res.cloudinary.com/dabucfkmg/image/upload/v1732793650/5_tb7gyj_m9gzdd_mrm1gl.jpg", "https://res.cloudinary.com/dabucfkmg/image/upload/v1732793651/2_kck8ru_pps4we_seocfb.webp", "https://res.cloudinary.com/dabucfkmg/image/upload/v1732793651/6_y0fjmz_u19wod_aosz5p.webp"],
    },
    {
        id: 2,
        text: "Pousada Le Ange Serra",
        bgImages: ["https://res.cloudinary.com/dabucfkmg/image/upload/v1732793814/1_ph73ii_ctm2dz.jpg", "https://res.cloudinary.com/dabucfkmg/image/upload/v1732793814/2_v8reyz_vm3ce1_f54jky.jpg", "https://res.cloudinary.com/dabucfkmg/image/upload/v1732793815/6_dovfum_tswv2e_h5v5it.jpg", "https://res.cloudinary.com/dabucfkmg/image/upload/v1732793815/5_ty6zqr_q1l2mc_pkippf.jpg", "https://res.cloudinary.com/dabucfkmg/image/upload/v1732793815/4_u1pvbr_zcx4gk_s0rsvb.webp", "https://res.cloudinary.com/dabucfkmg/image/upload/v1732793815/3_ji6uzq_daetsl_atd9a5.jpg"],
    },
    {
        id: 3,
        text: "Pousada Le Ange Mar",
        bgImages: ["https://res.cloudinary.com/dabucfkmg/image/upload/v1732794079/1_fddk63_gm2m6g_zsmz72.webp", "https://res.cloudinary.com/dabucfkmg/image/upload/v1732794080/3_islkto_wkjaco_rhlozj.webp", "https://res.cloudinary.com/dabucfkmg/image/upload/v1732794079/2_eomyvd_nnnec7_eswd1j.webp", "https://res.cloudinary.com/dabucfkmg/image/upload/v1732794080/4_tds2ap_sarfwc_hc9hcp.jpg", "https://res.cloudinary.com/dabucfkmg/image/upload/v1732794080/6_cs2odp_vpnkmq_qh6coq.webp", "https://res.cloudinary.com/dabucfkmg/image/upload/v1732794080/5_cvbsbp_vbx4jm_vzhrge.webp"],
    },
    {
        id: 4,
        text: "Pousada Le Ange Serra",
        bgImages: ["https://res.cloudinary.com/dabucfkmg/image/upload/v1732794343/1_vw8gku_jdpu1m_tbtbsi.jpg", "https://res.cloudinary.com/dabucfkmg/image/upload/v1732794344/2_u9soep_axzzap_di3ov7.jpg", "https://res.cloudinary.com/dabucfkmg/image/upload/v1732794344/4_g2prnk_ejavci_jbyp2i.jpg", "https://res.cloudinary.com/dabucfkmg/image/upload/v1732794344/3_aryhje_lmyuui_kgbzi6.webp"],
    },
    {
        id: 5,
        text: "Pousada Le Ange Mar",
        bgImages: ["https://res.cloudinary.com/dabucfkmg/image/upload/v1732794449/1_urlgor_pasdht_nv4zgw.webp", "https://res.cloudinary.com/dabucfkmg/image/upload/v1732794450/2_ij3lu8_hd6jwr.webp", "https://res.cloudinary.com/dabucfkmg/image/upload/v1732794450/4_j7wxsn_d4icoi_kdvfuv.jpg", "https://res.cloudinary.com/dabucfkmg/image/upload/v1732794450/3_scnvzz_z55ake_f6spei.jpg", "https://res.cloudinary.com/dabucfkmg/image/upload/v1732794453/5_jn3xrs_bx73kp_on8czh.webp"],
    },
    {
        id: 6,
        text: "Pousada Le Ange Serra",
        bgImages: ["https://res.cloudinary.com/dabucfkmg/image/upload/v1732794515/1_zt1frt_tozga2_ncycjb.jpg", "https://res.cloudinary.com/dabucfkmg/image/upload/v1732794515/2_m6a7pn_dljjpo_y0vvml.jpg", "https://res.cloudinary.com/dabucfkmg/image/upload/v1732794515/3_f1nazk_rjbcys_yotipf.webp", "https://res.cloudinary.com/dabucfkmg/image/upload/v1732794516/4_al1kde_fctxov_rekeo3.webp", "https://res.cloudinary.com/dabucfkmg/image/upload/v1732794520/5_fz3g46_f4bfjz_qs5laa.webp"],
    },
    {
        id: 7,
        text: "Pousada Le Ange Mar",
        bgImages: ["https://res.cloudinary.com/dabucfkmg/image/upload/v1732794621/1_adshm2_k64nfp_uorp6c.webp", "https://res.cloudinary.com/dabucfkmg/image/upload/v1732794622/2_gvo2bk_z3cakr_qgy2tg.webp", "https://res.cloudinary.com/dabucfkmg/image/upload/v1732794622/3_eqkktf_gldizg_wu5png.webp", "https://res.cloudinary.com/dabucfkmg/image/upload/v1732794625/4_pw8xsl_suk6of_mtx3s5.webp", "https://res.cloudinary.com/dabucfkmg/image/upload/v1732794625/5_abwhg7_odyfrq_yini7c.webp"],
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
                            <Container data-aos="fade-up" data-aos-delay="200">
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
