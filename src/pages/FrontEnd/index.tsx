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
import Design10 from '../../assets/img/Projetos/Design/Design-10.png';

import Dev1 from '../../assets/img/Projetos/Programação/Dev-1.png';
import Dev2 from '../../assets/img/Projetos/Programação/Dev-2.png';
import Dev3 from '../../assets/img/Projetos/Programação/Dev-3.png';
import Dev4 from '../../assets/img/Projetos/Programação/Dev-4.png';
import Dev5 from '../../assets/img/Projetos/Programação/Dev-5.png';

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
                descricaoProjetos='Do jeitinho que você quiser!' />
                
                <CardProjetos
                imagemProjetos={Design2}
                nomeProjetos='Capas de Cadernos'
                descricaoProjetos='Do jeitinho que você quiser!' />

                <CardProjetos
                imagemProjetos={Design3}
                nomeProjetos='Criação de Vídeos'
                descricaoProjetos='Do jeitinho que você quiser!' />

                <CardProjetos
                imagemProjetos={Design4}
                nomeProjetos='Criação de Imagens'
                descricaoProjetos='Do jeitinho que você quiser!' />

                <CardProjetos
                imagemProjetos={Design5}
                nomeProjetos='Adesivos'
                descricaoProjetos='Do jeitinho que você quiser!' />

                <CardProjetos
                imagemProjetos={Design6}
                nomeProjetos='Cartões de Visita'
                descricaoProjetos='Do jeitinho que você quiser!' />

                <CardProjetos
                imagemProjetos={Design7}
                nomeProjetos='Crachás'
                descricaoProjetos='Do jeitinho que você quiser!' />

                <CardProjetos
                imagemProjetos={Design8}
                nomeProjetos='Logomarcas'
                descricaoProjetos='Do jeitinho que você quiser!' />

                <CardProjetos
                imagemProjetos={Design9}
                nomeProjetos='Brasão'
                descricaoProjetos='Do jeitinho que você quiser!' />

                <CardProjetos
                imagemProjetos={Design10}
                nomeProjetos='Meu YouTube'
                descricaoProjetos='Aqui ficam guardados todos os meus projetos em vídeos!' />
                </div>
            </section>

            <section id='terceira-apresentacao'>
                <h2>Projetos de Programação Web</h2>
                
                <div className='todos-os-cards'>
                <CardProjetos
                imagemProjetos={Dev1}
                nomeProjetos='CraftAPI'
                descricaoProjetos='Proposta de projeto de estudos, produzir uma API e usá-la com o tema que quiséssemos!' />
                
                <CardProjetos
                imagemProjetos={Dev2}
                nomeProjetos='To-Do List'
                descricaoProjetos='Proposta de projeto de estudos, produzir uma lista de tarefas. Onde vc seleciona os pendentes e os concluídos.' />

                <CardProjetos
                imagemProjetos={Dev3}
                nomeProjetos='WE Equipamentos'
                descricaoProjetos='Lorem ipsum, dolor sit amet consectetur adipisicing elit.' />

                <CardProjetos
                imagemProjetos={Dev4}
                nomeProjetos='QuickFood'
                descricaoProjetos='Lorem ipsum, dolor sit amet consectetur adipisicing elit.' />

                <CardProjetos
                imagemProjetos={Dev5}
                nomeProjetos='Meu GitHub'
                descricaoProjetos='Lorem ipsum, dolor sit amet consectetur adipisicing elit.' />
                </div>
            </section>
        </>
    );
}