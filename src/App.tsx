
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { Header } from './Componentes/Header/header';
import { Details } from './pages/details/Details';
import { Sobre } from './pages/Sobre/Sobre';

import './App.css';

function App() {
  return (
    <BrowserRouter>
      <div className="site-layout">

        {/* HEADER */}
        <Header />

        {/* CONTEÚDO DAS PÁGINAS */}
        <div className="site-content">
          <Routes>
            <Route
              path="/"
              element={<Details />}
            />

            <Route
              path="/sobre"
              element={<Sobre />}
            />
          </Routes>
        </div>

      </div>
    </BrowserRouter>
  );
}

export default App;
