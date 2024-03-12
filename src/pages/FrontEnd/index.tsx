import './FrontEnd.style.css';
import imgApresentacao from '../../assets/img/imagem-apresentação.png';
import CardProjetos from '../../components/CardProjetos';
import Imagem from '../../assets/icons/logo-principal.png'; 

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

            <section id='segunda-apresentacao'>
                <CardProjetos
                imagemProjeto={Imagem}
                nomeProjeto='Nome do Projeto'
                descricaoProjeto='Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
                Magni assumenda quibusdam sequi beatae ipsum similique ex 
                ut deserunt veniam blanditiis. Iure exercitationem blanditiis 
                numquam iusto nisi necessitatibus veritatis voluptatem illum?' />
                
                <CardProjetos
                imagemProjeto={Imagem}
                nomeProjeto='Nome do Projeto'
                descricaoProjeto='Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
                Magni assumenda quibusdam sequi beatae ipsum similique ex 
                ut deserunt veniam blanditiis. Iure exercitationem blanditiis 
                numquam iusto nisi necessitatibus veritatis voluptatem illum?' />

                <CardProjetos
                imagemProjeto={Imagem}
                nomeProjeto='Nome do Projeto'
                descricaoProjeto='Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
                Magni assumenda quibusdam sequi beatae ipsum similique ex 
                ut deserunt veniam blanditiis. Iure exercitationem blanditiis 
                numquam iusto nisi necessitatibus veritatis voluptatem illum?' />
            </section>
        </>
    );
}