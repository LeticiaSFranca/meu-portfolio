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
            <div className="card">

                <img src={imagemProjetos} alt={nomeProjetos} id='img-cards-projetos'/>
                
                <div className="card__content">
                    <p className="card__title">{nomeProjetos}</p>
                    <a href={linkProjetos} target="_blank" rel="noopener noreferrer" className="card__title">{nomeBotao}</a>
                </div>
            </div>
        </>
    );
}

export default CardProjetos;