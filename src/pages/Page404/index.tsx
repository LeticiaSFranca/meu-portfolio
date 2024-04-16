import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Page404.style.css';
import img404 from '../../assets/img/imagem-404.png';

export function Page404() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    
    return (
        <>
            <section id='page-404'>
                <img src={img404} alt="imagem-404" id='img-404'/>
                
                <div id='div-404'>
                    <p id='texto-404'>Ops...algo não deu certo!</p>
                    <Link to='/' id='botao-404'>Voltar ao início</Link>
                </div>
            </section>
        </>
    );
}