import './Home.style.css';
import imgApresentacao from '../../assets/img/imagem-apresentação.png';
import { MdDevices } from "react-icons/md";
import { FaUserDoctor } from "react-icons/fa6";
import { IoMail } from "react-icons/io5";
import { AiFillInstagram } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

export function Home() {
    return (
        <>
            <section id='primeira-apresentacao'>
                <img src={imgApresentacao} alt="img-apresentação" id='img-apresentacao' />
                <div id='texto-abertura'>
                    <h3 id='titulo-apresentacao'>Bem-vindo(a)!</h3>
                    <p>Oie! Me chamo <b id='meu-nome'>Letícia França</b>, muito prazer! <br /><br />
                        Navegue pelo meu portfólio: no cabeçalho tem duas opções de áreas que atuo,
                        você pode escolher qual deseja visitar🤎! E caso queira entrar em contato comigo, pode acessar 
                        também pelo cabeçalho🤎!
                    </p>
                </div>
            </section>

            <section id='segunda-apresentacao'>
                <button className='botoes-areas'><a href="/desenvolvimento-web">
                    <MdDevices className='icons-areas'/>
                    <p>Desenvolvimento Web 
                        <br /> e Design
                    </p>
                </a>
                </button>
                <button className='botoes-areas'><a href="/medicina-veterinaria">
                    <FaUserDoctor className='icons-areas'/>
                    <p>Medicina Veterinária</p>
                    </a>
                </button>
                <button className='botoes-areas'><a href="/contato">
                    <IoMail className='icons-areas'/>
                    <p>Entrar em Contato</p>
                    </a>
                </button>
            </section>

            <section id='terceira-apresentacao'>
                <p id='texto-como-encontrar'>Como me encontrar?</p>
                <div id='div-como-encontrar'>
                    <a href="https://www.instagram.com/leticia.s.franca/?hl=pt-br" target="_blank" rel="noopener noreferrer"><AiFillInstagram className='icones-como-encontrar'/></a>
                    <a href="mailto:leticiasilvafranca17@gmail.com" target="_blank" rel="noopener noreferrer"><IoMail className='icones-como-encontrar'/></a>
                    <a href="https://www.linkedin.com/in/leticiasfranca/" target="_blank" rel="noopener noreferrer"><FaLinkedinIn className='icones-como-encontrar'/></a>
                </div>
            </section>
        </>
    );
}