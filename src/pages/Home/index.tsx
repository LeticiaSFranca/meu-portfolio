import './Home.style.css';
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
                <button className='botoes-areas'><a href="/desenvolvimento-web">
                    <img src={imgApresentacao} alt="Imagem 1" className='imgs-segunda-apresentacao'/>
                    <p>Desenvolvimento Web 
                        <br /> e Design
                    </p>
                </a>
                </button>
                <button className='botoes-areas'><a href="/medicina-veterinaria">
                    <img src={imgApresentacao2} alt="Imagem 1" className='imgs-segunda-apresentacao'/>
                    <p>Medicina <br />Veterinária</p>
                    </a>
                </button>
                <button className='botoes-areas'><a href="/contato">
                    <img src={imgApresentacao3} alt="Imagem 1" className='imgs-segunda-apresentacao'/>
                    <p>Entrar em <br />Contato</p>
                    </a>
                </button>
            </section>
        </>
    );
}