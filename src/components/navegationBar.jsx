import { Link, useLocation } from 'react-router-dom';
import styled, { keyframes } from 'styled-components';
import Logo from '../../public/logos/black.png';
import Button from './Button';
import { FaHome, FaInfoCircle, FaAnchor, FaMountain, FaCalendar, FaBed } from 'react-icons/fa';
import { HiBars3BottomRight } from "react-icons/hi2";
import { useState, useEffect } from 'react';
import Confetti from 'react-confetti';

const StyledDiv = styled.div`
    display: none;

    @media (min-width: 1080px) {
        display: flex;
        background-color: ${({ isScrolled }) => (isScrolled ? 'rgba(251, 251, 251, 0.4)' : '#fbfbfb')};
        backdrop-filter: ${({ isScrolled }) => (isScrolled ? 'blur(10px)' : 'none')}; 
        position: fixed;
        align-items: center;
        justify-content: space-between;
        width: 85%;
        max-width: 1440px;
        left: 50%;
        transform: translateX(-50%);
        margin-top: 10px;
        padding: 0 2.5%;
        height: 10vh;
        box-shadow: 0 0 5px #4d4d4d80;
        border-radius: 15px;
        z-index: 999;
        transition: background-color 0.3s ease, backdrop-filter 0.3s ease;
    }
`;

const StyledHeader = styled.header`
    display: flex;
    gap: 5px;
`;

const StyledLink = styled(({ isActive, ...props }) => <Link {...props} />)`
    position: relative;
    color: var(--color--black);
    text-decoration: none;
    font-size: 14px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: var(--font--avenir);
    padding: 5px 15px;
    transition: all 0.3s ease;
    border-radius: var(--border--radius--btn);
    background-color: ${({ isActive, variant }) =>
        isActive
            ? variant === 'serra'
                ? 'var(--color--green)'
                : variant === 'mar'
                ? 'var(--color--blue)'
                : 'var(--color--black)'
            : 'transparent'};
    color: ${({ isActive }) => (isActive ? 'var(--color--white)' : 'var(--color--black)')};

    &::before {
        content: '';
        position: absolute;
        top: 0;
        bottom: 0;
        right: 100%;
        left: 0;
        background: rgb(20, 20, 20);
        opacity: 0;
        z-index: -1;
        transition: all 0.5s;
        border-radius: var(--border--radius--btn);
    }

    &:hover {
        color: var(--color--white);
        background-color: ${({ variant }) => 
            variant === 'serra' ? 'var(--color--green)' : 
            variant === 'mar' ? 'var(--color--blue)' : 
            'var(--color--black)'};
    }

    &:hover::before {
        left: 0;
        right: 0;
        opacity: 1;
    }
`;

const IconContainer = styled.span`
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 0;
    height: 0;
    opacity: 0;
    transform: scale(0);
    transition: opacity 0.3s ease, transform 0.3s ease, width 0.3s ease, height 0.3s ease;
    overflow: hidden;

    ${({ isVisible }) => isVisible && `
        width: 13px;
        height: 13px;
        opacity: 1;
        transform: scale(1);
        margin-right: 7.5px;
    `}
`;

const ConfettiContainer = styled.div`
    opacity: ${({ isVisible }) => (isVisible ? 1 : 0)};
    transition: opacity 1s ease-out;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    pointer-events: none;
`;

const EventButton = styled(StyledLink)`
    background: ${({ isActive }) => (isActive ? 'linear-gradient(45deg, #ff6b6b, #f06595, #eeafaf)' : 'transparent')};
    color: ${({ isActive }) => (isActive ? 'white' : 'var(--color--black)')};

    &:hover {
        background: linear-gradient(45deg, #f06595, #ff6b6b, #eeafaf);
        color: white;
    }
`;

const MobileBar = styled.div`
    display: none;

    @media (max-width: 768px) {
        display: flex;
        background-color: ${({ isScrolled }) => (isScrolled ? 'rgba(251, 251, 251, 0.4)' : '#fbfbfb')};
        backdrop-filter: ${({ isScrolled }) => (isScrolled ? 'blur(10px)' : 'none')}; 
        position: fixed;
        z-index: 999;
        align-items: center;
        justify-content: space-between;
        width: 85%;
        margin-left: 7.5%;
        margin-top: 10px;
        padding: 0 5%;
        height: 8vh;
        box-shadow: 0 0 5px #4d4d4d80;
        border-radius: 10px;

        & > img {
            width: 25%;
            height: 100%;
            object-fit: contain;
        }

        & > button {
            display: flex;
            width: 30%;
            border-radius: 5px;
            font-family: var(--font--comfortaa);
            border: none;
            font-size: 12px;
            padding: 7.5px;
            gap: 2.5px;
            background-color: transparent;
            color: var(--color--black);
            align-items: center;
            justify-content: space-evenly;
            transition: all 0.2s ease;
            border: 1px solid var(--color--black);
            background-color: ${({ isClicked }) => (isClicked ? 'var(--color--black)' : 'transparent')};
            color: ${({ isClicked }) => (isClicked ? 'var(--color--white)' : 'var(--color--black)')};

            &:hover {
                background-color: var(--color--black);
                color: var(--color--white);
                border: 1px solid var(--color--black);
                transform: scale(0.95);
            }
        }
    }
`;

const Sidebar = styled.div`
    display: flex;
    position: fixed;
    z-index: 999;
    background-color: rgba(255, 255, 255, 0.8);
    backdrop-filter: blur(10px);
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    border-radius: 0 20px 20px 0;
    padding: 20px;
    width: 250px;
    height: 95dvh;
    margin-top: 2.5vh;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);

    transform: translateX(-100%);
    transition: transform 0.3s ease;

    ${({ isOpen }) => isOpen && `
        transform: translateX(0);
    `}

    & > button:nth-child(1) {
        position: absolute;
        right: 10px;
        top: 10px;
        font-size: 12px;
        border: none;
        width: 25px;
        height: 25px;
        border-radius: 50%;
        background-color: var(--color--black);
        color: var(--color--white);
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
        transition: all .2s ease-in-out;

        &:hover{
            transform: rotate(180deg) scale(0.95);
            border: 2px solid var(--color--black);
            background-color: red;
        }
    }

    & > img {
        width: 65%;
        margin-top: 50px;
    }

    & > div {
        display: flex;
        flex-direction: column;
        gap: 5px;
    }
`;

const NavegationBar = () => {
    const location = useLocation();
    const [showConfetti, setShowConfetti] = useState(false);
    const [confettiVisible, setConfettiVisible] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const [isClicked, setIsClicked] = useState(false);
    let scrollTimeout;

    const toggleSidebar = () => {
        setIsSidebarOpen((prev) => !prev);
        setIsClicked((prev) => !prev); // Alterna o estado de clique
    };

    const closeSidebar = () => {
        setIsSidebarOpen(false);
        setIsClicked(false); // Reseta o estado de clique ao fechar
    };

    const handleScroll = () => {
        setIsScrolled(true);
        clearTimeout(scrollTimeout);
        scrollTimeout = setTimeout(() => {
            setIsScrolled(false);
        }, 3000);
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
            clearTimeout(scrollTimeout);
        };
    }, []);

    useEffect(() => {
        if (location.pathname === "/event") {
            setShowConfetti(true);
            setConfettiVisible(true);
            const timer = setTimeout(() => {
                setConfettiVisible(false);
                setTimeout(() => setShowConfetti(false), 1000);
            }, 5000);
            return () => clearTimeout(timer);
        } else {
            setConfettiVisible(false);
            setTimeout(() => setShowConfetti(false), 1000);
        }
    }, [location.pathname]);

    return (
        <>
            <StyledDiv isScrolled={isScrolled}>
                {showConfetti && (
                    <ConfettiContainer isVisible={confettiVisible}>
                        <Confetti />
                    </ConfettiContainer>
                )}
                <Link to="/" aria-label="Home">
                    <picture>
                        <source media="(max-width: 480px)" srcSet={Logo} />
                        <source media="(max-width: 768px)" srcSet={Logo} />
                        <source media="(min-width: 769px)" srcSet={Logo} />
                        <img src={Logo} alt="Logo da Empresa" style={{ maxHeight: '40px' }} />
                    </picture>
                </Link>
                <StyledHeader>
                    <StyledLink to="/" isActive={location.pathname === "/"}><IconContainer isVisible={location.pathname === "/"}><FaHome /></IconContainer>Início</StyledLink>
                    <StyledLink to="/sobre" isActive={location.pathname === "/sobre"}><IconContainer isVisible={location.pathname === "/sobre"}><FaInfoCircle /></IconContainer>Sobre nós</StyledLink>
                    <StyledLink to="/mar" variant="mar" isActive={location.pathname === "/mar"}><IconContainer isVisible={location.pathname === "/mar"}><FaAnchor /></IconContainer>Le Ange Mar</StyledLink>
                    <StyledLink to="/serra" variant="serra" isActive={location.pathname === "/serra"}><IconContainer isVisible={location.pathname === "/serra"}><FaMountain /></IconContainer>Le Ange Serra</StyledLink>
                    <StyledLink to="/leange#pacotes" isActive={location.pathname === "/home" && location.hash === "#pacotes"}><IconContainer isVisible={location.pathname === "/home" && location.hash === "#pacotes"}><FaBed /></IconContainer>Pacotes</StyledLink>
                    <EventButton to="/event" isActive={location.pathname === "/event"}><IconContainer isVisible={location.pathname === "/event"}><FaCalendar /></IconContainer>Eventos</EventButton>
                    <StyledLink to="/acomoda" isActive={location.pathname === "/acomoda"}><IconContainer isVisible={location.pathname === "/acomoda"}><FaBed /></IconContainer>Acomodações</StyledLink>
                </StyledHeader>
                <Button
                text="Fazer minha reserva"
                />
            </StyledDiv>

            <MobileBar isScrolled={isScrolled}>
                    <img src={Logo} alt='logo da le ange' />
                    <button onClick={toggleSidebar} isClicked={isClicked}>
                    Menu
                    <HiBars3BottomRight />
                </button>
            </MobileBar>

            <Sidebar isOpen={isSidebarOpen}>
                <button onClick={closeSidebar}>X</button>
                <img src={Logo} alt='logo da le ange' />
                <div>
                    <StyledLink to="/" isActive={location.pathname === "/"} onClick={closeSidebar}>
                        <IconContainer isVisible={location.pathname === "/"}><FaHome /></IconContainer>Início
                    </StyledLink>
                    <StyledLink to="/sobre" isActive={location.pathname === "/sobre"} onClick={closeSidebar}>
                        <IconContainer isVisible={location.pathname === "/sobre"}><FaInfoCircle /></IconContainer>Sobre nós
                    </StyledLink>
                    <StyledLink to="/mar" variant="mar" isActive={location.pathname === "/mar"} onClick={closeSidebar}>
                        <IconContainer isVisible={location.pathname === "/mar"}><FaAnchor /></IconContainer>Le Ange Mar
                    </StyledLink>
                    <StyledLink to="/serra" variant="serra" isActive={location.pathname === "/serra"} onClick={closeSidebar}>
                        <IconContainer isVisible={location.pathname === "/serra"}><FaMountain /></IconContainer>Le Ange Serra
                    </StyledLink>
                    <StyledLink to="/home/#pacotes" isActive={location.pathname === "/home/#pacotes"} onClick={closeSidebar}>
                        <IconContainer isVisible={location.pathname === "/home/#pacotes"}><FaBed /></IconContainer>Pacotes
                    </StyledLink>
                    <EventButton to="/event" isActive={location.pathname === "/event"} onClick={closeSidebar}>
                        <IconContainer isVisible={location.pathname === "/event"}><FaCalendar /></IconContainer>Eventos
                    </EventButton>
                    <StyledLink to="/acomoda" isActive={location.pathname === "/acomoda"} onClick={closeSidebar}>
                        <IconContainer isVisible={location.pathname === "/acomoda"}><FaBed /></IconContainer>Acomodações
                    </StyledLink>
                </div>
                <Button text="Fazer minha reserva" />
            </Sidebar>
        </>
    );
}

export default NavegationBar;
