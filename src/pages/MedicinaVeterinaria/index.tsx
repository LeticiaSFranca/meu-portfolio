import './MedicinaVeterinaria.style.css';

import imgApresentacao from '../../assets/img/imagem-apresentação-2.png';
import Imagem from '../../assets/img/em-andamento.png';
import CardProjetos from '../../components/CardProjetos';

import Polaroid1 from '../../assets/img/Polaroids/MedVet/Polaroid-1.png';
import Polaroid2 from '../../assets/img/Polaroids/MedVet/Polaroid-2.png';
import Polaroid3 from '../../assets/img/Polaroids/MedVet/Polaroid-3.png';
import Polaroid4 from '../../assets/img/Polaroids/MedVet/Polaroid-4.png';
import Polaroid5 from '../../assets/img/Polaroids/MedVet/Polaroid-5.png';
import Polaroid6 from '../../assets/img/Polaroids/MedVet/Polaroid-6.png';
import Polaroid7 from '../../assets/img/Polaroids/MedVet/Polaroid-7.png';
import Polaroid8 from '../../assets/img/Polaroids/MedVet/Polaroid-8.png';
import Polaroid9 from '../../assets/img/Polaroids/MedVet/Polaroid-9.png';
import Polaroid10 from '../../assets/img/Polaroids/MedVet/Polaroid-10.png';
import Polaroid11 from '../../assets/img/Polaroids/MedVet/Polaroid-11.png';
import Polaroid12 from '../../assets/img/Polaroids/MedVet/Polaroid-12.png';
import Polaroid13 from '../../assets/img/Polaroids/MedVet/Polaroid-13.png';
import Polaroid14 from '../../assets/img/Polaroids/MedVet/Polaroid-14.png';
import Polaroid15 from '../../assets/img/Polaroids/MedVet/Polaroid-15.png';
import Polaroid16 from '../../assets/img/Polaroids/MedVet/Polaroid-16.png';
import Polaroid17 from '../../assets/img/Polaroids/MedVet/Polaroid-17.png';

import { GiCow } from "react-icons/gi";
import { FaHorse } from "react-icons/fa";
import { GiSheep } from "react-icons/gi";
import { GiPig } from "react-icons/gi";
import { GiChicken } from "react-icons/gi";
import { useEffect } from 'react';

import Projeto1 from '../../assets/img/Projetos/Programação/Dev-10.png'

export function MedicinaVeterinaria() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <>
            <section id='primeira-apresentacao'>
                <img src={imgApresentacao} alt="img-apresentação" id='img-apresentacao' />
                <div id='texto-abertura'>
                    <h3 id='titulo-apresentacao'>Medicina Veterinária</h3>
                    <p>Oie! Sou uma estudante de Medicina Veterinária apaixonada 
                        por animais e pela natureza, sendo influenciada desde bebê 
                        pelos ensinamentos e pelo amor dos meus avós, que foram nascidos 
                        e criados no campo🌱💖. Sua conexão com a terra e os animais despertou 
                        em mim um profundo desejo de proteger e cuidar das criaturas que 
                        compartilham nosso mundo🥰💖. Inspirada pelo legado da minha família, 
                        estou comprometida em contribuir para o bem-estar dos animais💖.</p>
                </div>
            </section>

            <section id='icones-desenvolvimento'>
                <GiCow />
                <FaHorse />
                <GiSheep />
                <GiPig />
                <GiChicken />
            </section>

            <section id='segunda-apresentacao'>
                <h2>Cursos e Congressos</h2>
                
                <div className='todos-os-cards'>
                <CardProjetos
                imagemProjetos={Imagem}
                nomeProjetos='Em Breve'
                linkProjetos=''
                nomeBotao='' />
                
                <CardProjetos
                imagemProjetos={Imagem}
                nomeProjetos='Em Breve'
                linkProjetos=''
                nomeBotao='' />

                <CardProjetos
                imagemProjetos={Imagem}
                nomeProjetos='Em Breve'
                linkProjetos=''
                nomeBotao='' />

                <CardProjetos
                imagemProjetos={Imagem}
                nomeProjetos='Em Breve'
                linkProjetos=''
                nomeBotao='' />

                <CardProjetos
                imagemProjetos={Imagem}
                nomeProjetos='Em Breve'
                linkProjetos=''
                nomeBotao='' />
                </div>
            </section>

            <section id='terceira-apresentacao'>
                <h2>Alguns Registros 📸💖</h2>

                <div className='todos-os-registros'>
                    <img src={Polaroid1} alt="Polaroid-1" className='img-polaroids'/>
                    <img src={Polaroid2} alt="Polaroid-2" className='img-polaroids'/>
                    <img src={Polaroid3} alt="Polaroid-3" className='img-polaroids'/>
                    <img src={Polaroid4} alt="Polaroid-4" className='img-polaroids'/>
                    <img src={Polaroid5} alt="Polaroid-5" className='img-polaroids'/>
                    <img src={Polaroid6} alt="Polaroid-6" className='img-polaroids'/>
                    <img src={Polaroid7} alt="Polaroid-7" className='img-polaroids'/>
                    <img src={Polaroid8} alt="Polaroid-8" className='img-polaroids'/>
                    <img src={Polaroid9} alt="Polaroid-9" className='img-polaroids'/>
                    <img src={Polaroid10} alt="Polaroid-10" className='img-polaroids'/>
                    <img src={Polaroid11} alt="Polaroid-11" className='img-polaroids'/>
                    <img src={Polaroid12} alt="Polaroid-12" className='img-polaroids'/>
                    <img src={Polaroid13} alt="Polaroid-13" className='img-polaroids'/>
                    <img src={Polaroid14} alt="Polaroid-14" className='img-polaroids'/>
                    <img src={Polaroid15} alt="Polaroid-15" className='img-polaroids'/>
                    <img src={Polaroid16} alt="Polaroid-16" className='img-polaroids'/>
                    <img src={Polaroid17} alt="Polaroid-17" className='img-polaroids'/>
                </div>
            </section>

            <section id='quarta-apresentacao'>
            <h2>Meus Projetos</h2>
                
                <div className='todos-os-cards'>
                <CardProjetos
                imagemProjetos={Projeto1}
                nomeProjetos='MindWell'
                linkProjetos='https://projetomindwell.vercel.app/'
                nomeBotao='> Acessar <' />
                
                <CardProjetos
                imagemProjetos={Imagem}
                nomeProjetos='Em Breve'
                linkProjetos=''
                nomeBotao='' />

                <CardProjetos
                imagemProjetos={Imagem}
                nomeProjetos='Em Breve'
                linkProjetos=''
                nomeBotao='' />

                <CardProjetos
                imagemProjetos={Imagem}
                nomeProjetos='Em Breve'
                linkProjetos=''
                nomeBotao='' />

                <CardProjetos
                imagemProjetos={Imagem}
                nomeProjetos='Em Breve'
                linkProjetos=''
                nomeBotao='' />
                </div>
            </section>
        </>
    );
}