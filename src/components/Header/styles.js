import styled from "styled-components";

export const Navbar = styled.nav`
    position: fixed;
    top: 0;
    display: flex;
    width: 100%;
    background: #00008B;
    border-bottom: 1px solid blueviolet;
    margin-bottom: 1rem;
    align-items: center;
    justify-content: space-between;
    color: white;
    padding: 1rem;


    li {
        display: inline-flex;
        font-size: 1rem;
        width: 8rem;
        height: 4rem;
        font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
        font-weight: 400;
        align-items: center;
        justify-content: center;
        
    }

    a {
        color: white;
        text-decoration: none;

        &:hover {
            color: #87CEFA;
        }
    }

`;