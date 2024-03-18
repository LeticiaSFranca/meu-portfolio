import React from 'react';
import './CardProjetos.style.css';

interface CardProjetosProps {
    imagemProjetos: string;
    nomeProjetos: string;
    descricaoProjetos: string;
}

const CardProjetos: React.FC<CardProjetosProps> = ({ imagemProjetos, nomeProjetos, descricaoProjetos }) => {
    return (
        <>
            <div className='card-projetos'>
                <div>
                    <img src={imagemProjetos} alt={nomeProjetos} />
                    <h2>{nomeProjetos}</h2>
                    <hr />
                    <p>{descricaoProjetos}</p>
                </div>
            </div>
        </>
    );
}

export default CardProjetos;