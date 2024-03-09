import { useRef } from 'react';
import { FaTimes } from 'react-icons/fa';
import { GrAppsRounded } from 'react-icons/gr';
import './Header.style.css';
import { Link } from 'react-router-dom';

export default function Header() {
    const navRef = useRef();

	const showNavbar = () => {
		navRef.current.classList.toggle(
			'responsive_nav'
		);
	};

    return (
        <header>
			<Link to="/" className="logo">
				<img src="/white-logo.png" alt="Logo" />
			</Link>
			<nav ref={navRef}>
				<Link to="/" onClick={showNavbar}>Home</Link>
				<Link to="/produtos" onClick={showNavbar}>Produtos</Link>
				<Link to="/contato" onClick={showNavbar}>Contato</Link>
				<button
					className="nav_btn nav_close_btn"
					onClick={showNavbar}>
					<FaTimes />
				</button>
			</nav>
			<button
				className="nav_btn"
				onClick={showNavbar}>
				<GrAppsRounded />
			</button>
		</header>
    );
};