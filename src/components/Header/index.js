import React from "react";
import {Navbar} from "./styles";


export function Header() {
    return (
        <Navbar>
            <img src="" alt="Logo Amapá Digital" />
            <ul>
                <li>
                    <a href="caminho/arquivo1.html">Dashboard</a>
                </li>
                <li>
                    <a href="caminho/arquivo2.html">Notícias</a>
                </li>
                <li>
                    <a href="caminho/arquivo2.html">Banners</a>
                </li>
                <li>
                    <a href="caminho/arquivo2.html">Artigos</a>
                </li>
            </ul>

        </Navbar>
    )
}