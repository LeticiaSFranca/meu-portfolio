import './Home.style.css';
import imgApresentacao from '../../assets/img/imagem-apresentação.png';

export function Home() {
    return (
        <>
            <section id='primeira-apresentacao'>
                <img src={imgApresentacao} alt="img-apresentação" id='img-apresentacao' />
                <div id='texto-abertura'>
                    <h3>Bem-vindo(a)!</h3>
                    <p>Oie! Me chamo <b>Letícia França</b>, muito prazer! Navegue pelo meu portfólio: no cabeçalho tem duas opções de áreas que atuo,
                        você pode escolher qual deseja visitar! E caso queira entrar em contato comigo, pode acessar 
                        também pelo cabeçalho!
                    </p>
                </div>
            </section>

            <section id='segunda-apresentacao'>

            </section>
        </>
    );
}