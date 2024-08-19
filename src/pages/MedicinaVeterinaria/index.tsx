import './MedicinaVeterinaria.style.css';

import imgApresentacao from '../../assets/img/imagem-apresentação-2.png';
import Imagem from '../../assets/img/em-andamento.png';
import CardProjetos from '../../components/Cards/CardProjetos';

import { GiCow } from 'react-icons/gi';
import { FaHorse } from 'react-icons/fa';
import { GiSheep } from 'react-icons/gi';
import { GiPig } from 'react-icons/gi';
import { GiChicken } from 'react-icons/gi';
import { useEffect } from 'react';

import Projeto1 from '../../assets/img/Projetos/Programação/Dev-10.png';
import Projeto2 from '../../assets/img/Projetos/Programação/Dev-11.png';
import { RegistrationCarouselVeterinaryMedicine } from '../../components/Carousels/RegistrationCarouselVeterinaryMedicine';

export function MedicinaVeterinaria() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <>
            <section id="primeira-apresentacao-medvet">
                <img src={imgApresentacao} alt="img-apresentação" id="img-apresentacao" />
                <div id="texto-abertura">
                    <h3 id="titulo-apresentacao">Medicina Veterinária</h3>
                    <p>
                        Oie! Sou uma estudante de Medicina Veterinária apaixonada por animais e pela
                        natureza, sendo influenciada desde bebê pelos ensinamentos e pelo amor dos
                        meus avós, que foram nascidos e criados no campo🌱💖. Sua conexão com a
                        terra e os animais despertou em mim um profundo desejo de proteger e cuidar
                        das criaturas que compartilham nosso mundo🥰💖. Inspirada pelo legado da
                        minha família, estou comprometida em contribuir para o bem-estar dos
                        animais💖.
                    </p>
                </div>
            </section>

            <section id="icones-principais">
                <GiCow />
                <FaHorse />
                <GiSheep />
                <GiPig />
                <GiChicken />
            </section>

            <section id="segunda-apresentacao-medvet">
                <h2 className="titulo-colorido">Cursos e Congressos 📚</h2>

                <div className="todos-os-cards">
                    <CardProjetos
                        imagemProjetos={Imagem}
                        nomeProjetos="Em Breve"
                        linkProjetos=""
                        nomeBotao=""
                    />

                    <CardProjetos
                        imagemProjetos={Imagem}
                        nomeProjetos="Em Breve"
                        linkProjetos=""
                        nomeBotao=""
                    />

                    <CardProjetos
                        imagemProjetos={Imagem}
                        nomeProjetos="Em Breve"
                        linkProjetos=""
                        nomeBotao=""
                    />

                    <CardProjetos
                        imagemProjetos={Imagem}
                        nomeProjetos="Em Breve"
                        linkProjetos=""
                        nomeBotao=""
                    />

                    <CardProjetos
                        imagemProjetos={Imagem}
                        nomeProjetos="Em Breve"
                        linkProjetos=""
                        nomeBotao=""
                    />
                </div>
            </section>

            <section id="terceira-apresentacao-medvet">
                <h2 className="titulo-colorido">Meus Projetos 🛠️</h2>

                <div className="todos-os-cards">
                    <CardProjetos
                        imagemProjetos={Projeto1}
                        nomeProjetos="MindWell"
                        linkProjetos="https://projetomindwell.vercel.app/"
                        nomeBotao="> Acessar <"
                    />

                    <CardProjetos
                        imagemProjetos={Projeto2}
                        nomeProjetos="Plumas Preciosas"
                        linkProjetos="https://plumaspreciosas.vercel.app/"
                        nomeBotao="> Acessar <"
                    />

                    <CardProjetos
                        imagemProjetos={Imagem}
                        nomeProjetos="Em Breve"
                        linkProjetos=""
                        nomeBotao=""
                    />

                    <CardProjetos
                        imagemProjetos={Imagem}
                        nomeProjetos="Em Breve"
                        linkProjetos=""
                        nomeBotao=""
                    />

                    <CardProjetos
                        imagemProjetos={Imagem}
                        nomeProjetos="Em Breve"
                        linkProjetos=""
                        nomeBotao=""
                    />
                </div>
            </section>

            <section id="secao-registros-medvet">
                <h2 className="titulo-colorido titulo-registros">Alguns Registros 📸💖</h2>
                <RegistrationCarouselVeterinaryMedicine />
            </section>
        </>
    );
}
