import * as React from 'react';
import { Routes, Route } from 'react-router-dom';

import Artistas from '../Pages/Artistas';
import Home from '../Pages/Home';
import Biblioteca from '../Pages/Biblioteca';
import Buscar from '../Pages/Buscar';
import Login from '../Pages/Login';
import Perfil from '../Sub-Menu/Perfil';
import Playlists from '../Sub-Menu/Playlists';
import Favoritos from '../Sub-Menu/Favoritos';
import Config from '../Sub-Menu/Config';
import Sair from '../Sub-Menu/Sair';

export default function Container() {
  return (
    <main className="app-container">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/artistas" element={<Artistas />} />
        <Route path="/biblioteca" element={<Biblioteca />} />
        <Route path="/login" element={<Login />} />
        <Route path="/buscar" element={<Buscar />} />
        <Route path="/perfil" element={<Perfil />} />
        <Route path="/playlists" element={<Playlists />} />
        <Route path="/favoritos" element={<Favoritos />} />
        <Route path="/Config" element={<Config />} />
        <Route path="/Sair" element={<Sair />} />
      </Routes>
    </main>
  );
}
