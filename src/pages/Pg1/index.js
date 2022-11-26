import React from "react";
import { useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import {Container, Title } from "./styles";

const Pg1 = () => {
    const { signout } = useAuth();
    const navigate = useNavigate();

    return (
        <Container>
            <Title>Página 1</Title>
            <nav>
                <li><a href="/home">Home</a></li>
            </nav>
            
        </Container>
    );
};

export default Pg1;