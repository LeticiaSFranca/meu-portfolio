import './Footer.style.css';
import { IoMail } from "react-icons/io5";
import { AiFillInstagram } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";

export function Footer() {
    return (
        <footer>
            <p>Desenvolvido por Letícia França</p>
            <div id='div-como-encontrar'>
                <a href="https://www.instagram.com/leticia.s.franca/?hl=pt-br" target="_blank" rel="noopener noreferrer"><AiFillInstagram className='icones-como-encontrar' /></a>
                <a href="mailto:leticiasilvafranca17@gmail.com" target="_blank" rel="noopener noreferrer"><IoMail className='icones-como-encontrar' /></a>
                <a href="https://www.linkedin.com/in/leticiasfranca/" target="_blank" rel="noopener noreferrer"><FaLinkedinIn className='icones-como-encontrar'/></a>
                <a href="https://www.youtube.com/@leticia.s.franca" target="_blank" rel="noopener noreferrer"><FaYoutube className='icones-como-encontrar' /></a>
                <a href="https://github.com/LeticiaSFranca" target="_blank" rel="noopener noreferrer"><FaGithub className='icones-como-encontrar' /></a>

            </div>
        </footer>
    );
}