import React from "react";
import { useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import {Container, Title } from "./styles";

const Pg2 = () => {
    const { signout } = useAuth();
    const navigate = useNavigate();

    return (
        <Container>
            <Title>Página 2</Title>
            <nav>
                <li><a href="/home">Home</a></li>
            </nav>
            
        </Container>
    );
};

export default Pg2;