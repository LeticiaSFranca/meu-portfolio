import './FrontEnd.style.css';
import imgApresentacao from '../../assets/img/imagem-apresentação.png';
import CardProjetos from '../../components/Cards/CardProjetos';
import { useEffect } from 'react';

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
import Design11 from '../../assets/img/Projetos/Design/Design-11.png';
import Design12 from '../../assets/img/Projetos/Design/Design-12.png';

import Dev1 from '../../assets/img/Projetos/Programação/Dev-1.png';
import Dev2 from '../../assets/img/Projetos/Programação/Dev-2.png';
import Dev3 from '../../assets/img/Projetos/Programação/Dev-3.png';
import Dev4 from '../../assets/img/Projetos/Programação/Dev-4.png';
import Dev6 from '../../assets/img/Projetos/Programação/Dev-6.png';
import Dev7 from '../../assets/img/Projetos/Programação/Dev-7.png';
import Dev8 from '../../assets/img/Projetos/Programação/Dev-8.png';
import Dev9 from '../../assets/img/Projetos/Programação/Dev-9.png';
import Dev10 from '../../assets/img/Projetos/Programação/Dev-10.png';
import Dev11 from '../../assets/img/Projetos/Programação/Dev-11.png';
import Dev12 from '../../assets/img/Projetos/Programação/Dev-12.png';

import Registro1 from '../../assets/img/Registros/Desenvolvimento/Reg-1.png';
import Registro2 from '../../assets/img/Registros/Desenvolvimento/Reg-2.png';
import Registro3 from '../../assets/img/Registros/Desenvolvimento/Reg-3.png';
import Registro4 from '../../assets/img/Registros/Desenvolvimento/Reg-4.png';
import Registro5 from '../../assets/img/Registros/Desenvolvimento/Reg-5.png';
import Registro6 from '../../assets/img/Registros/Desenvolvimento/Reg-6.png';
import Registro7 from '../../assets/img/Registros/Desenvolvimento/Reg-7.png';
import Registro8 from '../../assets/img/Registros/Desenvolvimento/Reg-8.png';
import Registro9 from '../../assets/img/Registros/Desenvolvimento/Reg-9.png';
import Registro10 from '../../assets/img/Registros/Desenvolvimento/Reg-10.png';
import Registro11 from '../../assets/img/Registros/Desenvolvimento/Reg-11.png';
import Registro12 from '../../assets/img/Registros/Desenvolvimento/Reg-12.png';
import Registro13 from '../../assets/img/Registros/Desenvolvimento/Reg-13.png';
import Registro14 from '../../assets/img/Registros/Desenvolvimento/Reg-14.png';
import Registro15 from '../../assets/img/Registros/Desenvolvimento/Reg-15.png';
import Registro16 from '../../assets/img/Registros/Desenvolvimento/Reg-16.png';
import Registro17 from '../../assets/img/Registros/Desenvolvimento/Reg-17.png';
import Registro18 from '../../assets/img/Registros/Desenvolvimento/Reg-18.png';

import { FaHtml5 } from 'react-icons/fa';
import { IoLogoCss3 } from 'react-icons/io';
import { RiReactjsFill } from 'react-icons/ri';
import { IoLogoJavascript } from 'react-icons/io5';
import { GrMysql } from 'react-icons/gr';
import { SiPhp } from 'react-icons/si';
import { SiCsharp } from 'react-icons/si';

export function FrontEnd() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <>
            <section id="primeira-apresentacao">
                <img src={imgApresentacao} alt="img-apresentação" id="img-apresentacao" />
                <div id="texto-abertura">
                    <h3 id="titulo-apresentacao">Desenvolvimento Web e Design</h3>
                    <p>
                        Oie! Sou designer web e desenvolvedora web apaixonada por criar experiências
                        digitais cativantes💖. Meu trabalho é impulsionado pela emoção positiva que
                        ele pode gerar, tanto para os usuários quanto para a marca💖. Com
                        habilidades técnicas sólidas e uma mente criativa, estou sempre em busca de
                        desafios que me permitam inovar e superar expectativas🤩. Adoro colaborar em
                        projetos que valorizem a excelência e o impacto positivo💖.
                    </p>
                </div>
            </section>

            <section id="icones-principais">
                <FaHtml5 />
                <IoLogoCss3 />
                <RiReactjsFill />
                <IoLogoJavascript />
                <GrMysql />
                <SiPhp />
                <SiCsharp />
            </section>

            <section id="segunda-apresentacao">
                <h2 className="titulo-colorido">Projetos de Design e Personalizados 🎨</h2>

                <div className="todos-os-cards">
                    <CardProjetos
                        imagemProjetos={Design1}
                        nomeProjetos="Calendários"
                        linkProjetos=""
                        nomeBotao=""
                    />

                    <CardProjetos
                        imagemProjetos={Design2}
                        nomeProjetos="Capas de Cadernos"
                        linkProjetos=""
                        nomeBotao=""
                    />

                    <CardProjetos
                        imagemProjetos={Design3}
                        nomeProjetos="Criação de Vídeos"
                        linkProjetos="https://www.youtube.com/@leticia.s.franca"
                        nomeBotao="> Acessar <"
                    />

                    <CardProjetos
                        imagemProjetos={Design4}
                        nomeProjetos="Fotografias"
                        linkProjetos=""
                        nomeBotao=""
                    />

                    <CardProjetos
                        imagemProjetos={Design5}
                        nomeProjetos="Criação de Imagens"
                        linkProjetos=""
                        nomeBotao=""
                    />

                    <CardProjetos
                        imagemProjetos={Design6}
                        nomeProjetos="Adesivos"
                        linkProjetos=""
                        nomeBotao=""
                    />

                    <CardProjetos
                        imagemProjetos={Design7}
                        nomeProjetos="Cartões de Visita"
                        linkProjetos=""
                        nomeBotao=""
                    />

                    <CardProjetos
                        imagemProjetos={Design8}
                        nomeProjetos="Crachás"
                        linkProjetos=""
                        nomeBotao=""
                    />

                    <CardProjetos
                        imagemProjetos={Design9}
                        nomeProjetos="Logomarcas"
                        linkProjetos=""
                        nomeBotao=""
                    />

                    <CardProjetos
                        imagemProjetos={Design10}
                        nomeProjetos="Personalizados"
                        linkProjetos=""
                        nomeBotao=""
                    />

                    <CardProjetos
                        imagemProjetos={Design11}
                        nomeProjetos="Social Mídia"
                        linkProjetos=""
                        nomeBotao=""
                    />

                    <CardProjetos
                        imagemProjetos={Design12}
                        nomeProjetos="Criação de Sites"
                        linkProjetos=""
                        nomeBotao=""
                    />
                </div>
            </section>

            <section id="terceira-apresentacao">
                <h2 className="titulo-colorido">Projetos de Programação Web 👩🏼‍💻</h2>

                <div className="todos-os-cards">
                    <CardProjetos
                        imagemProjetos={Dev1}
                        nomeProjetos="CraftAPI"
                        linkProjetos="https://craft-api.vercel.app"
                        nomeBotao="> Acessar <"
                    />

                    <CardProjetos
                        imagemProjetos={Dev2}
                        nomeProjetos="To-Do List"
                        linkProjetos="https://to-do-list-framework.vercel.app/"
                        nomeBotao="> Acessar <"
                    />

                    <CardProjetos
                        imagemProjetos={Dev3}
                        nomeProjetos="WE Equipamentos"
                        linkProjetos="https://weequipamentos.com.br"
                        nomeBotao="> Acessar <"
                    />

                    <CardProjetos
                        imagemProjetos={Dev4}
                        nomeProjetos="QuickFood"
                        linkProjetos="https://qftech.com.br"
                        nomeBotao="> Acessar <"
                    />

                    {/* <CardProjetos
                imagemProjetos={Dev5}
                nomeProjetos='Meu GitHub'
                linkProjetos='https://github.com/LeticiaSFranca'
                nomeBotao='> Acessar <' /> */}

                    <CardProjetos
                        imagemProjetos={Dev6}
                        nomeProjetos="Gerenciamento de Estoque"
                        linkProjetos="https://github.com/LeticiaSFranca/Projetos-Html-Css/tree/main/projeto-estoque-js"
                        nomeBotao="> GitHub <"
                    />

                    <CardProjetos
                        imagemProjetos={Dev7}
                        nomeProjetos="E-Commerce Estático"
                        linkProjetos="https://github.com/LeticiaSFranca/Projetos-Html-Css/tree/main/E-Commerce-main"
                        nomeBotao="> GitHub <"
                    />

                    <CardProjetos
                        imagemProjetos={Dev8}
                        nomeProjetos="Landing Page - Super Mario Bross"
                        linkProjetos="https://github.com/LeticiaSFranca/Projetos-Html-Css/tree/main/site-mario-bross"
                        nomeBotao="> GitHub <"
                    />

                    <CardProjetos
                        imagemProjetos={Dev9}
                        nomeProjetos="Meu Primeiro Site em HTML & CSS"
                        linkProjetos="https://github.com/LeticiaSFranca/Projetos-Html-Css/tree/main/Meu-Primeiro-Site"
                        nomeBotao="> GitHub <"
                    />

                    <CardProjetos
                        imagemProjetos={Dev10}
                        nomeProjetos="Projeto WindWell"
                        linkProjetos="https://projetomindwell.vercel.app/"
                        nomeBotao="> Acessar <"
                    />

                    <CardProjetos
                        imagemProjetos={Dev11}
                        nomeProjetos="Plumas Preciosas"
                        linkProjetos="https://plumaspreciosas.vercel.app/"
                        nomeBotao="> Acessar <"
                    />

                    <CardProjetos
                        imagemProjetos={Dev12}
                        nomeProjetos="Angells Vet"
                        linkProjetos="https://angellsvet.vercel.app/"
                        nomeBotao="> Acessar <"
                    />
                </div>
            </section>

            <section id="quarta-apresentacao">
                <h2 className="titulo-colorido">Alguns Registros 📸💖</h2>
                <div className="todos-os-registros">
                    <img src={Registro1} alt="Registro-1" className="img-registros" />
                    <img src={Registro2} alt="Registro-2" className="img-registros" />
                    <img src={Registro3} alt="Registro-3" className="img-registros" />
                    <img src={Registro4} alt="Registro-4" className="img-registros" />
                    <img src={Registro5} alt="Registro-5" className="img-registros" />
                    <img src={Registro6} alt="Registro-6" className="img-registros" />
                    <img src={Registro7} alt="Registro-7" className="img-registros" />
                    <img src={Registro8} alt="Registro-8" className="img-registros" />
                    <img src={Registro9} alt="Registro-9" className="img-registros" />
                    <img src={Registro10} alt="Registro-10" className="img-registros" />
                    <img src={Registro11} alt="Registro-11" className="img-registros" />
                    <img src={Registro12} alt="Registro-12" className="img-registros" />
                    <img src={Registro13} alt="Registro13" className="img-registros" />
                    <img src={Registro14} alt="Registro-14" className="img-registros" />
                    <img src={Registro15} alt="Registro-15" className="img-registros" />
                    <img src={Registro16} alt="Registro-16" className="img-registros" />
                    <img src={Registro17} alt="Registro-17" className="img-registros" />
                    <img src={Registro18} alt="Registro-18" className="img-registros" />
                </div>
            </section>
        </>
    );
}
