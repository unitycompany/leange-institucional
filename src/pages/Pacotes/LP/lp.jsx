import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useParams } from "react-router-dom";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../../../firebaseConfig";
import SobreLP from "./Sobre";
import AcomodacoesLP from "./Acomodacoes";
import Avaliacao from "./Avaliacao";
import Galeria from "./Galeria";

const Container = styled.div`
  width: 100%;
  max-width: 1280px;
  padding-top: 4.5%;
  left: 50%;
  top: 0;
  transform: translateX(-50%);
  position: relative;
  height: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 50px;

  @media (max-width: 768px){
        padding-top: 20%;
    }
`;

export default function PacotesLP() {
    const { slug } = useParams();
    const [pacoteData, setPacoteData] = useState(null);
    const [loading, setLoading] = useState(true);

    // Função para criar slug a partir do título do pacote
    const createSlug = (title) => {
        if (!title) return '';
        return title
            .toLowerCase()
            .normalize('NFD')
            .replace(/[\u0300-\u036f]/g, '') // Remove acentos
            .replace(/[^a-z0-9\s-]/g, '') // Remove caracteres especiais
            .replace(/\s+/g, '-') // Substitui espaços por hífens
            .replace(/-+/g, '-') // Remove hífens duplicados
            .trim();
    };

    // Buscar dados do pacote no Firebase
    useEffect(() => {
        const fetchPacoteData = async () => {
            try {
                setLoading(true);
                const querySnapshot = await getDocs(collection(db, "pacotes"));
                const pacotesData = querySnapshot.docs.map((doc) => ({
                    id: doc.id,
                    ...doc.data(),
                }));

                // Encontrar o pacote pelo slug
                const pacoteEncontrado = pacotesData.find(p => createSlug(p.title) === slug);

                if (pacoteEncontrado) {
                    setPacoteData(pacoteEncontrado);
                }
            } catch (error) {
                console.error("❌ Erro ao buscar dados do pacote:", error);
            } finally {
                setLoading(false);
            }
        };

        if (slug) {
            fetchPacoteData();
        }
    }, [slug]);

    // Título do pacote - usar o título real ou fallback para o slug
    const getTitulo = () => {
        if (pacoteData?.title) {
            return pacoteData.title;
        }
        return slug || "Pacote Especial";
    };

    if (loading) {
        return (
            <Container>
                <div style={{ padding: '50px', textAlign: 'center' }}>
                    <h1>Carregando informações do pacote...</h1>
                </div>
            </Container>
        );
    }

    return (
        <>
            <Container>
                <SobreLP pacote={slug} />
                <AcomodacoesLP 
                
                />
                <Avaliacao />
                <Galeria titulodopacote={getTitulo()} />
            </Container>
        </>
    )
}