import React from 'react';
import Logo from '../../assets/img/devflix.png';
import { Link } from 'react-router-dom';
//import ButtonLink from "./components/ButtonLink";
import Button from '../Button';
import './Menu.css';

function Menu() {

    return (
        <header className="Menu">
            <Link to="/">
                <img className="Logo" src={ Logo } alt="devFlix Logo"/>
            </Link>

            <Button as={Link} className="ButtonLink" to="/cadastro/video">
                Novo Vídeo
            </Button>

        </header>
    )
}

export default Menu;