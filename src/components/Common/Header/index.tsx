import { useRef } from 'react';
import { FaTimes } from 'react-icons/fa';
import { GrAppsRounded } from 'react-icons/gr';
import './Header.style.css';
import logo from '../../../assets/icons/logo-principal.png';
import { Link } from 'react-router-dom';

export function Header() {
    const navRef = useRef<HTMLDivElement>(null);

    const showNavbar = () => {
        navRef.current?.classList.toggle('responsive_nav');
    };

    return (
        <header>
            <Link to="/" className="logo">
                <img src={logo} alt="Logo" />
            </Link>
            <nav ref={navRef}>
                <Link to="/desenvolvimento-web" onClick={showNavbar}>
                    Desenvolvimento Web
                </Link>
                <Link to="/medicina-veterinaria" onClick={showNavbar}>
                    Medicina Veterinária
                </Link>
                <Link to="/contato" onClick={showNavbar}>
                    Contato
                </Link>
                <button className="nav_btn nav_close_btn" onClick={showNavbar}>
                    <FaTimes />
                </button>
            </nav>
            <button className="nav_btn" onClick={showNavbar}>
                <GrAppsRounded />
            </button>
        </header>
    );
}
