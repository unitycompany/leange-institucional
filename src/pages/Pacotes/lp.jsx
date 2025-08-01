import React from "react";
import styled from "styled-components";
import { useParams } from "react-router-dom";

export default function PacotesLP() {
    const { slug } = useParams();

    return (
        <>
            <h1>Página do Pacote: {slug}</h1>
            <p>Esta será a página universal para todos os pacotes</p>
            <p>Slug recebido: {slug}</p>
        </>
    )
}