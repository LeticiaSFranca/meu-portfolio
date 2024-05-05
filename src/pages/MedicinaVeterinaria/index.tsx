import './MedicinaVeterinaria.style.css';

import imgApresentacao from '../../assets/img/imagem-apresentação-2.png';
import Imagem from '../../assets/img/em-andamento.png';
import CardProjetos from '../../components/CardProjetos';

import Registro1 from '../../assets/img/Registros/MedVet/Reg-1.png';
import Registro2 from '../../assets/img/Registros/MedVet/Reg-2.png';
import Registro3 from '../../assets/img/Registros/MedVet/Reg-3.png';
import Registro4 from '../../assets/img/Registros/MedVet/Reg-4.png';
import Registro5 from '../../assets/img/Registros/MedVet/Reg-5.png';
import Registro6 from '../../assets/img/Registros/MedVet/Reg-6.png';
import Registro7 from '../../assets/img/Registros/MedVet/Reg-7.png';
import Registro8 from '../../assets/img/Registros/MedVet/Reg-8.png';
import Registro9 from '../../assets/img/Registros/MedVet/Reg-9.png';
import Registro10 from '../../assets/img/Registros/MedVet/Reg-10.png';
import Registro11 from '../../assets/img/Registros/MedVet/Reg-11.png';
import Registro12 from '../../assets/img/Registros/MedVet/Reg-12.png';
import Registro13 from '../../assets/img/Registros/MedVet/Reg-13.png';
import Registro14 from '../../assets/img/Registros/MedVet/Reg-14.png';
import Registro15 from '../../assets/img/Registros/MedVet/Reg-15.png';
import Registro16 from '../../assets/img/Registros/MedVet/Reg-16.png';

import { GiCow } from "react-icons/gi";
import { FaHorse } from "react-icons/fa";
import { GiSheep } from "react-icons/gi";
import { GiPig } from "react-icons/gi";
import { GiChicken } from "react-icons/gi";
import { useEffect } from 'react';

import Projeto1 from '../../assets/img/Projetos/Programação/Dev-10.png';
import Projeto2 from '../../assets/img/Projetos/Programação/Dev-11.png';

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

            <section id='icones-principais'>
                <GiCow />
                <FaHorse />
                <GiSheep />
                <GiPig />
                <GiChicken />
            </section>

            <section id='segunda-apresentacao'>
                <h2 className='titulo-colorido'>Cursos e Congressos</h2>
                
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
                <h2 className='titulo-colorido'>Alguns Registros 📸💖</h2>

                <div className='todos-os-registros'>
                <img src={Registro1} alt="Registro-1" className='img-registros'/>
                    <img src={Registro2} alt="Registro-2" className='img-registros'/>
                    <img src={Registro3} alt="Registro-3" className='img-registros'/>
                    <img src={Registro4} alt="Registro-4" className='img-registros'/>
                    <img src={Registro5} alt="Registro-5" className='img-registros'/>
                    <img src={Registro6} alt="Registro-6" className='img-registros'/>
                    <img src={Registro7} alt="Registro-7" className='img-registros'/>
                    <img src={Registro8} alt="Registro-8" className='img-registros'/>
                    <img src={Registro9} alt="Registro-9" className='img-registros'/>
                    <img src={Registro10} alt="Registro-10" className='img-registros'/>
                    <img src={Registro11} alt="Registro-11" className='img-registros'/>
                    <img src={Registro12} alt="Registro-12" className='img-registros'/>
                    <img src={Registro13} alt="Registro13" className='img-registros'/>
                    <img src={Registro14} alt="Registro-14" className='img-registros'/>
                    <img src={Registro15} alt="Registro-15" className='img-registros'/>
                    <img src={Registro16} alt="Registro-16" className='img-registros'/> 
                </div>
            </section>

            <section id='quarta-apresentacao'>
            <h2 className='titulo-branco'>Meus Projetos</h2>
                
                <div className='todos-os-cards'>
                <CardProjetos
                imagemProjetos={Projeto1}
                nomeProjetos='MindWell'
                linkProjetos='https://projetomindwell.vercel.app/'
                nomeBotao='> Acessar <' />
                
                <CardProjetos
                imagemProjetos={Projeto2}
                nomeProjetos='Plumas Preciosas'
                linkProjetos='https://plumaspreciosas.vercel.app/'
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
                </div>
            </section>
        </>
    );
}