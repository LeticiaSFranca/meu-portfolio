import './FrontEnd.style.css';
import imgApresentacao from '../../assets/img/imagem-apresentação.png';

export function FrontEnd() {
    return (
        <>
            <section id='primeira-apresentacao'>
                <img src={imgApresentacao} alt="img-apresentação" id='img-apresentacao' />
                <div id='texto-abertura'>
                    <h3 id='titulo-apresentacao'>Desenvolvimento Web e Design</h3>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
                        Magni assumenda quibusdam sequi beatae ipsum similique ex 
                        ut deserunt veniam blanditiis. Iure exercitationem blanditiis 
                        numquam iusto nisi necessitatibus veritatis voluptatem illum?</p>
                </div>
            </section>
        </>
    );
}