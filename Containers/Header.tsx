import * as React from 'react';
 
import Menu from '../Menu';
 
export default function Header() {
 return (
   <header className="app-header">
    <div>
          <span />
        <span/> <img className="app-header__logo" src="https://storage.googleapis.com/pr-newsroom-wp/1/2018/11/Spotify_Logo_CMYK_Green.png" alt="Girl in a jacket"  />
        </div>

        
       <Menu />
   </header>
    );
  }