import './Home.style.css';
import imgApresentacao from '../../assets/img/imagem-apresentação.png';

export function Home() {
    return (
        <>
            <section id='primeira-apresentacao'>
                <img src={imgApresentacao} alt="img-apresentação" id='img-apresentacao' />
                <div id='texto-abertura'>
                    <h3>Oie! Me chamo Letícia, muito prazer!</h3>
                    <p>Seja bem-vindo(a) ao meu portfólio! No cabeçalho tem duas opções de áreas que atuo,
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