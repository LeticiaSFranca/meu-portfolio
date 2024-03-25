import { useEffect } from 'react';

export function Page404() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    
    return (
        <>
            <h1>Erro 404</h1>
            <p>Página não encontrada</p>
        </>
    );
}