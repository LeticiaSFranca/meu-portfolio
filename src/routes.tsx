import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { MedicinaVeterinaria } from './pages/MedicinaVeterinaria';
import { FrontEnd } from './pages/FrontEnd';
import { Home } from './pages/Home';
import { Page404 } from './pages/Page404';

function AppRoutes() {
    return (
        <>
            <BrowserRouter>
                <Routes>
                        <Route path="/" element={<Home />}></Route>
                        <Route path="/medicina-veterinaria" element={<MedicinaVeterinaria />}></Route>
                        <Route path="/desenvolvimento-web" element={<FrontEnd />} />
                        <Route path="*" element={<Page404 />} />
                </Routes>
            </BrowserRouter>
        </>
    )
}

export default AppRoutes;