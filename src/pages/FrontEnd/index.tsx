import './FrontEnd.style.css';
import imgApresentacao from '../../assets/img/imagem-apresentação.png';
import CardProjetos from '../../components/CardProjetos';
import { FaGithub } from "react-icons/fa6";

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
                    <p>Oie! Sou designer web e desenvolvedora web apaixonada por criar experiências
                        digitais cativantes💖. Meu trabalho é impulsionado pela emoção positiva que ele
                        pode gerar, tanto para os usuários quanto para a marca💖. Com habilidades técnicas
                        sólidas e uma mente criativa, estou sempre em busca de desafios que me permitam
                        inovar e superar expectativas🤩. Adoro colaborar em projetos que valorizem
                        a excelência e o impacto positivo💖.</p>
                </div>
            </section>

            <section id='segunda-apresentacao'>
                <h2>Projetos de Design e Personalizados</h2>
                
                <div className='todos-os-cards'>
                <CardProjetos
                imagemProjetos={Design1}
                nomeProjetos='Calendários'
                linkProjetos=''
                nomeBotao='' />
                
                <CardProjetos
                imagemProjetos={Design2}
                nomeProjetos='Capas de Cadernos'
                linkProjetos=''
                nomeBotao='' />

                <CardProjetos
                imagemProjetos={Design3}
                nomeProjetos='Criação de Vídeos'
                linkProjetos=''
                nomeBotao='' />

                <CardProjetos
                imagemProjetos={Design4}
                nomeProjetos='Criação de Imagens'
                linkProjetos=''
                nomeBotao='' />

                <CardProjetos
                imagemProjetos={Design5}
                nomeProjetos='Adesivos'
                linkProjetos=''
                nomeBotao='' />

                <CardProjetos
                imagemProjetos={Design6}
                nomeProjetos='Cartões de Visita'
                linkProjetos=''
                nomeBotao='' />

                <CardProjetos
                imagemProjetos={Design7}
                nomeProjetos='Crachás'
                linkProjetos=''
                nomeBotao='' />

                <CardProjetos
                imagemProjetos={Design8}
                nomeProjetos='Logomarcas'
                linkProjetos=''
                nomeBotao='' />

                <CardProjetos
                imagemProjetos={Design9}
                nomeProjetos='Brasão'
                linkProjetos=''
                nomeBotao='' />

                <CardProjetos
                imagemProjetos={Design10}
                nomeProjetos='Meu YouTube'
                linkProjetos=''
                nomeBotao='' />
                </div>
            </section>

            <section id='terceira-apresentacao'>
                <h2>Projetos de Programação Web</h2>
                
                <div className='todos-os-cards'>
                <CardProjetos
                imagemProjetos={Dev1}
                nomeProjetos='CraftAPI'
                linkProjetos='https://craft-api.vercel.app'
                nomeBotao='> Acessar <' />
                
                <CardProjetos
                imagemProjetos={Dev2}
                nomeProjetos='To-Do List'
                linkProjetos='https://to-do-list-framework.vercel.app/'
                nomeBotao='> Acessar <' />

                <CardProjetos
                imagemProjetos={Dev3}
                nomeProjetos='WE Equipamentos'
                linkProjetos='https://weequipamentos.com.br'
                nomeBotao='> Acessar <' />

                <CardProjetos
                imagemProjetos={Dev4}
                nomeProjetos='QuickFood'
                linkProjetos='https://qftech.com.br'
                nomeBotao='> Acessar <' />

                <CardProjetos
                imagemProjetos={Dev5}
                nomeProjetos='Meu GitHub'
                linkProjetos='https://github.com/LeticiaSFranca'
                nomeBotao='> Acessar <' />
                </div>
            </section>

            <section id='quarta-apresentacao'>
                <div id='github-card'>
                    <div id='icone-github-card'><FaGithub /></div>
                    
                    <div id='texto-github-card'>
                        <h3>Acesse Meu GitHub!</h3>
                        <p>Oie! Lá no meu GitHub, possui todos os meus projetos feitos
                            até hoje, venha ver!
                        </p>
                        <a href="https://github.com/LeticiaSFranca" target="_blank" rel="noopener noreferrer">Acessar</a>
                    </div>
                </div>
            </section>
        </>
    );
}