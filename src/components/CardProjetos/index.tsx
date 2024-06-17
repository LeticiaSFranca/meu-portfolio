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
            <a href={linkProjetos} target="_blank" rel="noopener noreferrer" className='card-projetos'>
                    <img src={imagemProjetos} alt={nomeProjetos} />
                    <h3>{nomeProjetos}</h3>
            </a>
        </>
    );
}

export default CardProjetos;