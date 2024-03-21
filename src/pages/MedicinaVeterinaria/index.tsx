import './MedicinaVeterinaria.style.css';
import imgApresentacao from '../../assets/img/imagem-apresentação-2.png';
import Imagem from '../../assets/img/em-andamento.png';
import CardProjetos from '../../components/CardProjetos';

export function MedicinaVeterinaria() {
    return (
        <>
            <section id='primeira-apresentacao'>
                <img src={imgApresentacao} alt="img-apresentação" id='img-apresentacao' />
                <div id='texto-abertura'>
                    <h3 id='titulo-apresentacao'>Medicina Veterinária</h3>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
                        Magni assumenda quibusdam sequi beatae ipsum similique ex 
                        ut deserunt veniam blanditiis. Iure exercitationem blanditiis 
                        numquam iusto nisi necessitatibus veritatis voluptatem illum?</p>
                </div>
            </section>

            <section id='segunda-apresentacao'>
                <h2>Cursos e Congressos</h2>
                
                <div className='todos-os-cards'>
                <CardProjetos
                imagemProjetos={Imagem}
                nomeProjetos='Em Breve'
                descricaoProjetos='...' />
                
                <CardProjetos
                imagemProjetos={Imagem}
                nomeProjetos='Em Breve'
                descricaoProjetos='...' />

                <CardProjetos
                imagemProjetos={Imagem}
                nomeProjetos='Em Breve'
                descricaoProjetos='...' />

                <CardProjetos
                imagemProjetos={Imagem}
                nomeProjetos='Em Breve'
                descricaoProjetos='...' />

                <CardProjetos
                imagemProjetos={Imagem}
                nomeProjetos='Em Breve'
                descricaoProjetos='...' />
                </div>
            </section>
        </>
    );
}