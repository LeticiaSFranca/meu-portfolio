import './Home.style.css';
import { Link } from 'react-router-dom';
import imgApresentacao from '../../assets/img/imagem-apresentação.png';
import imgApresentacao2 from '../../assets/img/imagem-apresentação-2.png';
import imgApresentacao3 from '../../assets/img/imagem-apresentação-3.png';

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
                <Link to='/desenvolvimento-web' className='botoes-areas'>
                    <img src={imgApresentacao} alt="Imagem 1" className='imgs-segunda-apresentacao'/>
                        <p>Desenvolvimento Web<br /> e Design
                        </p>
                </Link>

                <Link to='/medicina-veterinaria' className='botoes-areas'>
                    <img src={imgApresentacao2} alt="Imagem 1" className='imgs-segunda-apresentacao'/>
                    <p><b>Medicina <br />Veterinária</b></p>
                </Link>

                <Link to='contato' className='botoes-areas'>
                    <img src={imgApresentacao3} alt="Imagem 1" className='imgs-segunda-apresentacao'/>
                    <p>Entrar em <br />Contato</p>
                </Link>
            </section>
        </>
    );
}