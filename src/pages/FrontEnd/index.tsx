import './FrontEnd.style.css';
import imgApresentacao from '../../assets/img/imagem-apresentação.png';
import CardProjetos from '../../components/CardProjetos';
import Imagem from '../../assets/icons/logo-cavalo.png'
import Design1 from '../../assets/img/Projetos/Design/Design-1.png';
import Design2 from '../../assets/img/Projetos/Design/Design-2.png';
import Design3 from '../../assets/img/Projetos/Design/Design-3.png';
import Design4 from '../../assets/img/Projetos/Design/Design-4.png';
import Design5 from '../../assets/img/Projetos/Design/Design-5.png';
import Design6 from '../../assets/img/Projetos/Design/Design-6.png';
import Design7 from '../../assets/img/Projetos/Design/Design-7.png';
import Design8 from '../../assets/img/Projetos/Design/Design-8.png';
import Design9 from '../../assets/img/Projetos/Design/Design-9.png';

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
                <h2>Projetos de Design e Personalizados</h2>
                
                <div className='todos-os-cards'>
                <CardProjetos
                imagemProjetos={Design1}
                nomeProjetos='Calendários'
                descricaoProjetos='Lorem ipsum, dolor sit amet consectetur adipisicing elit.' />
                
                <CardProjetos
                imagemProjetos={Design2}
                nomeProjetos='Capas de Caderno/Agendas'
                descricaoProjetos='Lorem ipsum, dolor sit amet consectetur adipisicing elit.' />

                <CardProjetos
                imagemProjetos={Design3}
                nomeProjetos='Criação de Vídeos'
                descricaoProjetos='Lorem ipsum, dolor sit amet consectetur adipisicing elit.' />

                <CardProjetos
                imagemProjetos={Design4}
                nomeProjetos='Criação de Imagens'
                descricaoProjetos='Lorem ipsum, dolor sit amet consectetur adipisicing elit.' />

                <CardProjetos
                imagemProjetos={Design5}
                nomeProjetos='Adesivos'
                descricaoProjetos='Lorem ipsum, dolor sit amet consectetur adipisicing elit.' />

                <CardProjetos
                imagemProjetos={Design6}
                nomeProjetos='Cartões de Visita'
                descricaoProjetos='Lorem ipsum, dolor sit amet consectetur adipisicing elit.' />

                <CardProjetos
                imagemProjetos={Design7}
                nomeProjetos='Crachás'
                descricaoProjetos='Lorem ipsum, dolor sit amet consectetur adipisicing elit.' />

                <CardProjetos
                imagemProjetos={Design8}
                nomeProjetos='Logomarcas'
                descricaoProjetos='Lorem ipsum, dolor sit amet consectetur adipisicing elit.' />

                <CardProjetos
                imagemProjetos={Design9}
                nomeProjetos='Brasão'
                descricaoProjetos='Lorem ipsum, dolor sit amet consectetur adipisicing elit.' />
                </div>
            </section>

            <section id='terceira-apresentacao'>
                <h2>Projetos de Programação Web</h2>
                
                <div className='todos-os-cards'>
                <CardProjetos
                imagemProjetos={Imagem}
                nomeProjetos='Nome do Projeto'
                descricaoProjetos='Lorem ipsum, dolor sit amet consectetur adipisicing elit.' />
                
                <CardProjetos
                imagemProjetos={Imagem}
                nomeProjetos='Nome do Projeto'
                descricaoProjetos='Lorem ipsum, dolor sit amet consectetur adipisicing elit.' />

                <CardProjetos
                imagemProjetos={Imagem}
                nomeProjetos='Nome do Projeto'
                descricaoProjetos='Lorem ipsum, dolor sit amet consectetur adipisicing elit.' />

                <CardProjetos
                imagemProjetos={Imagem}
                nomeProjetos='Nome do Projeto'
                descricaoProjetos='Lorem ipsum, dolor sit amet consectetur adipisicing elit.' />

                <CardProjetos
                imagemProjetos={Imagem}
                nomeProjetos='Nome do Projeto'
                descricaoProjetos='Lorem ipsum, dolor sit amet consectetur adipisicing elit.' />

                <CardProjetos
                imagemProjetos={Imagem}
                nomeProjetos='Nome do Projeto'
                descricaoProjetos='Lorem ipsum, dolor sit amet consectetur adipisicing elit.' />
                </div>
            </section>
        </>
    );
}