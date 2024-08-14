import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { MedicinaVeterinaria } from './pages/MedicinaVeterinaria';
import { FrontEnd } from './pages/FrontEnd';
import { Home } from './pages/Home';
import { Page404 } from './pages/Page404';
import { Contato } from './pages/Contato';
import BasePage from './pages/BasePage';

export function AppRoutes() {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<BasePage />}>
                        <Route index element={<Home />}></Route>
                        <Route
                            path="/medicina-veterinaria"
                            element={<MedicinaVeterinaria />}
                        ></Route>
                        <Route path="/desenvolvimento-web" element={<FrontEnd />} />
                        <Route path="/contato" element={<Contato />} />
                        <Route path="*" element={<Page404 />} />
                    </Route>
                </Routes>
            </BrowserRouter>
        </>
    );
}
