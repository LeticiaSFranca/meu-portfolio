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
                    <p>Oie! Sou uma estudante de Medicina Veterinária apaixonada 
                        por animais e pela natureza, sendo influenciada desde bebê 
                        pelos ensinamentos e pelo amor dos meus avós, que foram nascidos 
                        e criados no campo🌱💖. Sua conexão com a terra e os animais despertou 
                        em mim um profundo desejo de proteger e cuidar das criaturas que 
                        compartilham nosso mundo🥰💖. Inspirada pelo legado da minha família, 
                        estou comprometida em contribuir para o bem-estar dos animais💖.</p>
                </div>
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
                <h2>Medicina Veterinária com amor💖!</h2>

                <div className='todos-os-registros'>
                    <img src={Polaroid1} alt="Polaroid-1" className='img-polaroids'/>
                    <img src={Polaroid2} alt="Polaroid-2" className='img-polaroids'/>
                    <img src={Polaroid3} alt="Polaroid-3" className='img-polaroids'/>
                    <img src={Polaroid4} alt="Polaroid-4" className='img-polaroids'/>
                </div>
            </section>

            <section id='quarta-apresentacao'>
            <h2>Meus Projetos</h2>
                
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
        </>
    );
}