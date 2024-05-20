import './Home.style.css';
import { Link } from 'react-router-dom';
import imgApresentacao from '../../assets/img/imagem-apresentação.png';
import imgApresentacao2 from '../../assets/img/imagem-apresentação-2.png';
import imgApresentacao3 from '../../assets/img/imagem-apresentação-3.png';
import { useEffect } from 'react';

export function Home() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <>
            <section id='primeira-apresentacao'>
                <img src={imgApresentacao} alt="img-apresentação" id='img-apresentacao' />
                <div id='texto-abertura'>
                    <h3 id='titulo-apresentacao'>Bem-vindo(a)!</h3>
                    <p>Oie! Me chamo <b id='meu-nome'>Letícia França</b>, muito prazer🤎! <br /><br />
                    Convido você a navegar pelo meu portfólio, aqui estão reunidos diversos dos meus projetos,
                    cursos e outras experiências🌟! Espero que encontrem inspirações e motivações para suas aventuras🤎!
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

            <section id='terceira-apresentacao'>
                <h2 id='h2-curiosidades'>Curiosidades Sobre Mim</h2>
                <p id='texto-sobre-mim'>
                🐴🃏 Amo cavalos, amo roça, amo jogar truco e amo ouvir moda de viola, se juntar todos, melhor ainda! <br />
                🎬📸 Amo criar e registrar coisas, então aprendi a montar vídeos com as fotos que tiro <br />
                🐶🌳 Amo passar um tempo na natureza com os animais <br />
                🏐🚲 Amo passar um tempo com meus amigos e amo praticar esportes (principalmente andar a cavalo, jogar vôlei e andar de bike) <br /> 
                📚🎶 Amo ler e ouvir músicas <br /><br />

                ➡ E com o Ensino Médio no Cotemig integrado com o técnico em informática, peguei também grande interesse e gosto na área de programação, principalmente mais focado em criação visual💻💜! <br />
                ➡ Sou muito curiosa, adoro sempre estar aprendendo algo e também sou muito esforçada em todas as áreas da minha vida🏆 <br />
                ➡ Tenho 3 pets que amo muito, 2 cachorrinhas super fofas e 1 cavalo muito esperto💖 <br />
                </p>
            </section>
        </>
    );
}