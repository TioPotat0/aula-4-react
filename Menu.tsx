import * as React from 'react';
import './style.css';
import { Link } from 'react-router-dom';
import Container from './Containers/Container';

export default function Menu() {
  let className = 'menu';
  return (
    <div>
      <h1>Menu</h1>
      <nav>
        <ul className={className}>
          <li>
            <Link to="/"> Home </Link>
          </li>
          <li>
            <Link to="/Biblioteca"> Biblioteca </Link>
          </li>
          <li>
            <Link to="/Artistas"> Artistas </Link>
          </li>
         
        
          <li>
            <Link to="/Buscar"> Buscar </Link>
          </li>
          <li>
            <Link to="/Login"> Login </Link>
          </li>

          <li>
            <a href="#">Sua Conta </a>

            <ul>
              <li>
                <Link to="/Perfil"> Perfil </Link>
              </li>
              <li>
                <Link to="/Playlists"> Playlists </Link>
              </li>
              <li>
                <Link to="/Favoritos"> Favoritos </Link>
              </li>
              <li>
                <Link to="/Config"> Config </Link>
              </li>
              <li>
                <Link to="/Sair"> Sair→ </Link>
              </li>
            </ul>
          </li>
        </ul>
      </nav>
    </div>
  );
}
