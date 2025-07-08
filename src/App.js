import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './Layout';
import Rase from './pages/Rase';
import Kviz from './pages/Kviz';
import Beleske from './pages/Beleske';
import Karakter from './pages/Karakter';
import RasaDetalji from './pages/RasaDetalji'; // 🆕 uvozi novu stranicu

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Rase />} />
          <Route path="/kviz" element={<Kviz />} />
          <Route path="/beleske" element={<Beleske />} />
          <Route path="/karakter" element={<Karakter />} />
          <Route path="/rase/:rasaId" element={<RasaDetalji />} /> {/* 🆕 nova ruta */}
        </Route>
      </Routes>
    </BrowserRouter>
  );
}



