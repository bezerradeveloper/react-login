import React from "react";
import { useNavigate } from "react-router-dom";
import Button from "../../components/Button";
import useAuth from "../../hooks/useAuth";
import {Container, Title } from "./styles";

const Home = () => {
    const { signout } = useAuth();
    const navigate = useNavigate();

    return (
        <Container>
            <Title>Home</Title>
            <nav>
                <li><a href="/pg1">Página 1</a></li>
                <li><a href="/pg2">Página 2</a></li>
            </nav>
            <Button Text="Sair" onClick={() => [signout(), navigate("/")]}>
                Sair
            </Button>
        </Container>
    );
};

export default Home;