import React from 'react';
import './CardProjetos.style.css';

interface CardProjetosProps {
    imagemProjetos: string;
    nomeProjetos: string;
    linkProjetos: string;
    nomeBotao: string;
}

const CardProjetos: React.FC<CardProjetosProps> = ({ imagemProjetos, nomeProjetos, linkProjetos, nomeBotao }) => {
    return (
        <>
            <div className='card-projetos'>
                <div>
                    <img src={imagemProjetos} alt={nomeProjetos} />
                    <h3>{nomeProjetos}</h3>
                    <hr />
                    <a href={linkProjetos} target="_blank" rel="noopener noreferrer">{nomeBotao}</a>
                </div>
            </div>
        </>
    );
}

export default CardProjetos;