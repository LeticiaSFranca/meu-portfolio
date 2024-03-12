import './CardProjetos.style.css';

export default function CardProjetos({ imagemProjetos, nomeProjetos, descricaoProjetos}) {
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