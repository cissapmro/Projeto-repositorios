import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Main from './pages/Main';
import Repositorio from './pages/Repositorio'

const AppRoutes = () => (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/repositorio/:repositorioParams" element={<Repositorio />} />
        </Routes>
    </BrowserRouter>
);
export default AppRoutes;

