import './MedicinaVeterinaria.style.css';
import imgApresentacao from '../../assets/img/imagem-apresentação-2.png';
import Imagem from '../../assets/img/em-andamento.png';
import CardProjetos from '../../components/CardProjetos';

import Polaroid1 from '../../assets/img/Polaroids/Polaroid-1.png';
import Polaroid2 from '../../assets/img/Polaroids/Polaroid-2.png';
import Polaroid3 from '../../assets/img/Polaroids/Polaroid-3.png';
import Polaroid4 from '../../assets/img/Polaroids/Polaroid-4.png';

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

            <section id='terceira-apresentacao'>
                <h2>Registros de alguém que ama animais💖!</h2>

                <div className='todos-os-registros'>
                    <img src={Polaroid1} alt="Polaroid-1" />
                    <img src={Polaroid2} alt="Polaroid-2" />
                    <img src={Polaroid3} alt="Polaroid-3" />
                    <img src={Polaroid4} alt="Polaroid-4" />
                </div>
            </section>

            <section id='quarta-apresentacao'>
            <h2>Meus Projetos</h2>
                
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