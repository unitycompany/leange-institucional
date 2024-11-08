import styled from 'styled-components';
import { LuInstagram } from "react-icons/lu";
import { AiOutlineTikTok, AiOutlinePinterest } from "react-icons/ai";
import { FaArrowRightLong } from "react-icons/fa6";
import { MdOutlineArrowRight } from "react-icons/md";
import { motion, useInView } from 'framer-motion';
import React, { useRef, useState } from 'react';
import LogoWhite from '../../public/logos/white.png';

const SubmitBtn = styled(motion.button)`
    font-family: inherit;
    width: 80%;
    border-radius: 20px 0 20px 0;
    font-size: 20px;
    background: #212121;
    color: white;
    padding: 0.5em 1em;
    display: flex;
    align-items: center;
    cursor: pointer;
    border: none;
    font-weight: 1000;

    @media (max-width: 768px){
        width: 100%;
        font-size: 10px;
        padding: 1em;
    }

    & > span {
        margin-left: 20px;
        transition: opacity 0.3s ease-in-out;
        font-family: var(--font--comfortaa);
        font-size: 15px;
    }

    & > svg {
        transition: transform 0.3s ease-in-out, color 0.3s ease-in-out;
        max-width: 100%;
    }

    &:hover {
        background: var(--color--blue);
    }

    &:hover > svg {
        transform: translateX(5px) scale(1.2);
        color: #fff;
    }

    &:active {
        transform: scale(0.95);
    }
`;

const StyledFooterContainer = styled(motion.footer)`
    height: auto;
    margin-top: 5vh;
    padding: 5% 5%;
    width: 96%;
    margin-left: 2%;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: var(--color--black);
    border-radius: 70px 70px 0 0;
    gap: 60px;

    @media (max-width: 768px){
        margin-top: 5vh;
        border-radius: 25px 25px 0 0;
        padding: 10% 5%;
    }
`;

const StyledTitles = styled.div`
    width: 50%;
    height: 100%;
    display: flex;
    align-items: flex-start;
    justify-content: center;
    flex-direction: column;
    gap: 30px;

    @media (max-width: 768px){
        width: 100%;
        align-items: center;
    }

    & > h1{
        font-family: var(--font--comfortaa);
        width: 70%;
        font-size: 28px;
        line-height: 100%;
        color: var(--color--white);
        font-weight: 400;

        @media (max-width: 768px){
            width: 80%;
            display: flex;
            align-items: center;
            justify-content: center;
            text-align: center;
            font-size: 20px;
        }
    }

    & > p {
        width: 80%;
        line-height: 110%;
        color: var(--color--white);
        font-family: var(--font--avenir);

        @media (max-width: 768px){
            width: 90%;
            text-align: center;
            font-size: 12px;
        }
    }

    & > p > a{
        margin-left: 1ch;
        color: var(--color--blue);
    }

    & > hr{
        width: 85%;

        @media (max-width: 768px){
            display: none;
        }
    }

    & > div{
        width: 85%;
        display: flex;
        justify-content: space-between;
        margin-top: -25px;
        color: var(--color--white);

        @media (max-width: 768px){
            display: none;
        }
    }

    & > div > div{
        display: flex;
        gap: 10px;
    }

    & > div > div > a {
        color: var(--color--white);
    }
`;

const StyledForm = styled.div`
    width: 50%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 10px;

    @media (max-width: 768px){
        width: 100%;
    }

    & > form{
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        width: 100%;
        gap: 10px;
    }

    & > form > input{
        width: 80%;
        height: 30px;
        border-radius: 0 20px 0 20px;
        border: none;
        padding: 20px;
        background-color: var(--color--white);
        font-family: var(--font--comfortaa);

        @media (max-width: 768px){
            width: 100%;
        }
    }
`;

const StyledSectionTop = styled.section`
    display: flex;
    width: 100%;
    height: 35vh;

    @media (max-width: 768px){
        height: auto;
        flex-direction: column;
        gap: 25px;
    }
`;

const StyledLinks = styled.section`
    width: 100%;
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    height: 30vh;

    @media (max-width: 768px){
        width: 100%;
        height: auto;
        flex-direction: column;
        gap: 50px;
    }

    & > div {
        width: 25%;
        height: 100%;
        display: flex;
        flex-direction: column;
        gap: 2px;

        @media (max-width: 768px){
         width: 100%;
        }
    }

    & > div p{
        color: var(--color--white);
        width: 80%;
        line-height: 100%;
        font-family: var(--font--avenir);
        margin-top: 10px;

        @media (max-width: 768px){
            font-size: 16px;
        }
    }

    & > div h2{
        color: var(--color--white);
        font-family: var(--font--comfortaa);
        font-size: 18px;
        font-weight: 100;
        margin-bottom: 10px;

        @media (max-width: 768px){
            font-size: 20px;
        }
    }

    & > div a{
        color: var(--color--white);
        text-decoration: none;
        font-family: var(--font--avenir);
        display: flex;
        align-items: center;
        justify-content: flex-start;
        gap: 2px;
        transition: all .2s ease;
        border-radius: 5px;
        width: 80%;
    }

    & > div a:hover{
        background-color: var(--color--white);
        transform: translateX(20px);
        color: var(--color--black);
        width: 80%;
    }

    & > div > img {
        width: 40%;
        object-fit: contain;
    }
`;

const StyledLocation = styled.section`
    width: 100%;
    height: 30vh;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 20px;

    @media (max-width: 768px){
        height: auto;
        flex-direction: column;
    }

    & > h1{
        color: var(--color--white);
        font-family: var(--font--comfortaa);
        width: 30%;
        line-height: 100%;

        @media (max-width: 768px){
            width: 100%;
            font-size: 20px;
            text-align: center;
        }
    }
`;

const StyledHR = styled.hr`
    width: 100%;
    margin-bottom: -50px;
`;

const StyledPolitica = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 2vh;

    @media (max-width: 768px){
        height: auto;
        flex-direction: column;
        gap: 15px;
    }

    & > p{
        color: var(--color--white);
        font-family: var(--font--comfortaa);
        font-size: 12px;
    }

    & > a{
        color: var(--color--blue);
        font-size: 12px;
    }

    & > p > b > a{
        color: var(--color--blue);
        margin-left: 1ch;
    }
`;

const Footer = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [tel, setTel] = useState('');

    const fadeUp = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
    };

    const handleSubmit = async (e) => {
        e.preventDefault(); // Impede o comportamento padrão de recarregar a página

        // Verifique se os dados estão preenchidos
        if (!name || !email || !tel) {
            alert('Por favor, preencha todos os campos.');
            return;
        }

        // Cria um objeto com todos os valores como strings
        const formData = {
            name: String(name).trim(),  // Garantindo que seja uma string e removendo espaços em branco
            email: String(email).trim(), // Garantindo que seja uma string e removendo espaços em branco
            tel: String(tel).trim(),     // Garantindo que seja uma string e removendo espaços em branco
        };

        try {
            const response = await fetch('https://hook.us1.make.com/e79ttwjdwv9soeppgqnu5rbnpk9l828e', { // URL do seu webhook
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData), // Convertendo os dados para JSON
            });

            // Verifica se a resposta não é um JSON válido
            const responseBody = await response.text(); // Obtém a resposta como texto
            if (response.ok) {
                alert('Dados enviados com sucesso!'); // Mensagem de sucesso
                // Limpar os campos após o envio
                setName('');
                setEmail('');
                setTel('');
            } else {
                console.error('Erro de resposta:', responseBody); // Log do erro
                alert('Erro ao enviar os dados: ' + responseBody); // Mensagem de erro
            }
        } catch (error) {
            console.error('Erro:', error);
            alert('Erro ao enviar os dados. Tente novamente.'); // Mensagem de erro
        }
    };

    return (
        <>
            <StyledFooterContainer ref={ref} initial="hidden" animate={isInView ? "visible" : "hidden"}>
                <StyledSectionTop as={motion.div}>
                    <StyledTitles>
                        <motion.h1 variants={fadeUp} initial="hidden" animate={isInView ? "visible" : "hidden"} transition={{ delay: 0.2 }}>
                            Fale agora com a nossa central de reservas
                        </motion.h1>
                        <motion.p variants={fadeUp} initial="hidden" animate={isInView ? "visible" : "hidden"} transition={{ delay: 0.3 }}>
                            Todas as informações são usadas apenas para entrar em contato. Entenda melhor sobre o uso das suas informações pela nossa 
                            <a href="https://exemplo.com/politica-de-privacidade">política de privacidade</a>.
                        </motion.p>
                        <motion.hr variants={fadeUp} initial="hidden" animate={isInView ? "visible" : "hidden"} transition={{ delay: 0.4 }} />
                        <div>
                            <motion.h4 variants={fadeUp} initial="hidden" animate={isInView ? "visible" : "hidden"} transition={{ delay: 0.5 }}>
                                Siga-nos
                            </motion.h4>
                            <div>
                                <motion.a href="https://instagram.com" target="_blank" rel="noopener noreferrer" whileHover={{ scale: 1.1 }} variants={fadeUp} initial="hidden" animate={isInView ? "visible" : "hidden"} transition={{ delay: 0.6 }}>
                                    <LuInstagram />
                                </motion.a>
                                <motion.a href="https://tiktok.com" target="_blank" rel="noopener noreferrer" whileHover={{ scale: 1.1 }} variants={fadeUp} initial="hidden" animate={isInView ? "visible" : "hidden"} transition={{ delay: 0.7 }}>
                                    <AiOutlineTikTok />
                                </motion.a>
                                <motion.a href="https://pinterest.com" target="_blank" rel="noopener noreferrer" whileHover={{ scale: 1.1 }} variants={fadeUp} initial="hidden" animate={isInView ? "visible" : "hidden"} transition={{ delay: 0.8 }}>
                                    <AiOutlinePinterest />
                                </motion.a>
                            </div>
                        </div>
                    </StyledTitles>
                    <StyledForm>
                        <form id="contactForm" onSubmit={handleSubmit}>
                            <motion.input
                                type="text"
                                id="name"
                                placeholder="Me diga seu nome"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                variants={fadeUp}
                                initial="hidden"
                                animate={isInView ? "visible" : "hidden"}
                                transition={{ delay: 0.9 }}
                            />
                            <motion.input
                                type="email"
                                id="email"
                                placeholder="Preciso saber seu e-mail também!"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                variants={fadeUp}
                                initial="hidden"
                                animate={isInView ? "visible" : "hidden"}
                                transition={{ delay: 1.0 }}
                            />
                            <motion.input
                                type="tel"
                                id="tel"
                                placeholder="Me diga seu número de WhatsApp"
                                value={tel}
                                onChange={(e) => setTel(e.target.value)}
                                variants={fadeUp}
                                initial="hidden"
                                animate={isInView ? "visible" : "hidden"}
                                transition={{ delay: 1.1 }}
                            />
                            <SubmitBtn
                                type="submit"
                                whileHover={{ scale: 1.05, backgroundColor: 'var(--color--blue)' }}
                                whileTap={{ scale: 0.95 }}
                            >
                                <FaArrowRightLong size={20} />
                                <span>Enviar meus dados para contato</span>
                            </SubmitBtn>
                        </form>
                    </StyledForm> 
                </StyledSectionTop>

                <StyledLinks as={motion.div}>
                    <motion.div variants={fadeUp} initial="hidden" animate={isInView ? "visible" : "hidden"} transition={{ delay: 1.2 }}>
                        <img 
                            src="https://res.cloudinary.com/dupg7clzc/image/upload/f_auto,q_auto/v1729513421/white_sevdgn.png" 
                            alt="Descrição da imagem" 
                            loading="lazy" 
                        />
                        <p>A pousada mais Pet Friendly, venha conhecer!</p>
                    </motion.div>
                    <motion.div variants={fadeUp} initial="hidden" animate={isInView ? "visible" : "hidden"} transition={{ delay: 1.3 }}>
                        <h2>Âncoras</h2>
                        <a href='#'> <MdOutlineArrowRight /> Início </a>
                        <a href='#/sobre'> <MdOutlineArrowRight /> Sobre nós </a>
                        <a href='#/serra'> <MdOutlineArrowRight /> Le Ange Serra </a>
                        <a href='#/mar'> <MdOutlineArrowRight /> Le Ange Mar </a>
                        <a href='#/eventos'> <MdOutlineArrowRight /> Eventos </a>
                        <a href='#/acomoda'> <MdOutlineArrowRight /> Acomodações </a>
                    </motion.div>
                    <motion.div variants={fadeUp} initial="hidden" animate={isInView ? "visible" : "hidden"} transition={{ delay: 1.4 }}>
                        <h2>Ajuda</h2>
                        <a href="https://wa.link/dojlwi" target='_blank'> <MdOutlineArrowRight /> WhatsApp </a>
                        <a href="https://wa.link/dojlwi" target='_blank'> <MdOutlineArrowRight /> +55 (21) 99423-0871 </a>
                        <a href='mailto:pousadaleange@gmail.com' target='_blank'> <MdOutlineArrowRight /> pousadaleange@gmail.com </a>
                    </motion.div>
                    <motion.div variants={fadeUp} initial="hidden" animate={isInView ? "visible" : "hidden"} transition={{ delay: 1.5 }}>
                        <h2>Fique por dentro de tudo</h2>
                        <a href='https://www.instagram.com/pousadaleange/' target='_blank'> <MdOutlineArrowRight /> Instagram </a>
                        <a href='https://www.tiktok.com/@pousadaleange' target='_blank'> <MdOutlineArrowRight /> TikTok </a>
                        <a href='https://br.pinterest.com/pousadaleange/' target='_blank'> <MdOutlineArrowRight /> Pinterest </a>
                    </motion.div>
                </StyledLinks>

                <StyledLocation as={motion.div} variants={fadeUp} initial="hidden" animate={isInView ? "visible" : "hidden"} transition={{ delay: 1.6 }}>
                    <h1>Saiba onde estamos localizados</h1>
                    <div>
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d235239.22077211382!2d-43.355636!3d-22.461517!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x99106a0d4d634d%3A0x5a069366075bf207!2sPousada%20Le%20Ange!5e0!3m2!1spt-BR!2sbr!4v1697101366468!5m2!1spt-BR!2sbr"
                            width="300"
                            height="150"
                            style={{ border: 0, borderRadius: 15 }}
                            allowFullScreen=""
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            title="Mapa da Unidade Serra"
                        ></iframe>
                    </div>
                    <div>
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14718.952062952678!2d-41.958707!3d-22.737977!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x97ab01cac79615%3A0x6b404b4741597da1!2sLeAnge%20Mar!5e0!3m2!1spt-BR!2sus!4v1728577984633!5m2!1spt-BR!2sus"
                            width="300"
                            height="150"
                            style={{ border: 0, borderRadius: 15 }}
                            allowFullScreen=""
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            title="Mapa da Unidade Mar"
                        ></iframe>
                    </div>
                </StyledLocation>

                <StyledHR as={motion.hr} variants={fadeUp} initial="hidden" animate={isInView ? "visible" : "hidden"} transition={{ delay: 1.7 }} />

                <StyledPolitica as={motion.div} variants={fadeUp} initial="hidden" animate={isInView ? "visible" : "hidden"} transition={{ delay: 1.8 }}>
                    <p>Todos os direitos reservados | &copy 2024</p>
                    <a href='#'>Termos de condições</a>
                    <p>Desenvolvido por <b><a href='#'>Aleph</a></b></p>
                </StyledPolitica>
            </StyledFooterContainer>
        </>
    );
}

export default Footer;
