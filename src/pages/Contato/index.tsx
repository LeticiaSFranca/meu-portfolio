import './Contato.style.css';
import imgApresentacao from '../../assets/img/imagem-apresentação-3.png';
import { FaPaperPlane } from "react-icons/fa6";
import { IoPersonSharp } from "react-icons/io5";
import { FaPhone } from "react-icons/fa6";
import { IoMdMail } from "react-icons/io";
import { MdMarkunreadMailbox } from "react-icons/md";
import { AiFillMessage } from "react-icons/ai";
import { IoMail } from "react-icons/io5";
import { AiFillInstagram } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";

export function Contato() {
    return (
        <>
            <section id='primeira-apresentacao'>
                <img src={imgApresentacao} alt="img-apresentação" id='img-apresentacao' />
                <div id='texto-abertura'>
                    <h3 id='titulo-apresentacao'>Entrar em Contato</h3>
                    <p>Oie! Quer entrar em contato comigo? Preencha esse formulário abaixo e sua mensagem
                        chegará diretamente no meu email! Fique atento(a) ao email que você registrou neste formulário,
                        pois irei te responder por lá! Abraços💖!
                    </p>
                    
                    <div id='div-icones-contatos'>
                        <a href="https://www.instagram.com/leticia.s.franca/?hl=pt-br" target="_blank" rel="noopener noreferrer"><AiFillInstagram className='icones-contatos'/></a>
                        <a href="mailto:leticiasilvafranca17@gmail.com" target="_blank" rel="noopener noreferrer"><IoMail className='icones-contatos'/></a>
                        <a href="https://www.linkedin.com/in/leticiasfranca/" target="_blank" rel="noopener noreferrer"><FaLinkedinIn className='icones-contatos'/></a>
                        <a href="https://www.youtube.com/@leticia.s.franca" target="_blank" rel="noopener noreferrer"><FaYoutube /></a>
                    </div>
                </div>
            </section>

            <section className="formularioContato">
            <form action="https://formsubmit.co/leticiasilvafranca17@gmail.com" method="post" encType="multipart/form-data">
                <h3>Formulário</h3>
                <br />
                <label>
                    <span><i className="icon icon-user-1"></i><IoPersonSharp /> Nome</span>
                    <input type="text" name="nome" required placeholder="Seu nome" />
                </label>

                <label>
                    <span><i className="icon icon-email"></i><IoMdMail /> E-mail</span>
                    <input type="text" name="email" className="fade_8S" placeholder="exemplo@email.com" />
                </label>

                <label>
                    <span><i className="icon icon-email"></i><FaPhone /> Telefone</span>
                    <input type="tel" name="celular" required placeholder="(31)91234-5678" id="telefone" />
                </label>

                <label>
                    <span><i className="icon icon-flag"></i>< MdMarkunreadMailbox /> Assunto</span>
                    <input type="text" name="assunto" required placeholder="ex: Orçamento" />
                </label>

                <label>
                    <span><i className="icon icon-comment" id="caixaMensagem"></i><AiFillMessage /> Mensagem</span>
                    <textarea name="mensagem" required placeholder="Digite aqui sua mensagem." />
                </label>

                <input type="hidden" name="acao" value="enviar" />
                <input type="hidden" name="_captcha" value="false" />
                <input type="hidden" name="_next" value="https://leticiafranca.vercel.app" />
                <button type="submit" className="btn-envia" title="Enviar"><b>Enviar <FaPaperPlane /></b></button>
            </form>
            <br />
        </section>
        </>
    );
}