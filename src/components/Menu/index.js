import React from 'react';
import Logo from '../../assets/img/devflix.png';
//import ButtonLink from "./components/ButtonLink";
import Button from '../Button';
import './Menu.css';

function Menu() {

    return (
        <header className="Menu">
            <a href="/">
                <img className="Logo" src={ Logo } alt="devFlix Logo"/>
            </a>

            <Button as="a" className="ButtonLink" href="/">
                Novo Vídeo
            </Button>

        </header>
    )
}

export default Menu;