import './Footer.style.css';
import { IoMail } from "react-icons/io5";
import { AiFillInstagram } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

export function Footer() {
    return (
        <footer>
            <p>Desenvolvido por Letícia França</p>
            <div id='div-como-encontrar'>
                <a href="https://www.instagram.com/leticia.s.franca/?hl=pt-br" target="_blank" rel="noopener noreferrer"><AiFillInstagram className='icones-como-encontrar'/></a>
                <a href="mailto:leticiasilvafranca17@gmail.com" target="_blank" rel="noopener noreferrer"><IoMail className='icones-como-encontrar'/></a>
                <a href="https://www.linkedin.com/in/leticiasfranca/" target="_blank" rel="noopener noreferrer"><FaLinkedinIn className='icones-como-encontrar'/></a>
            </div>
        </footer>
    );
}