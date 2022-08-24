import * as React from 'react';
import './style.css';
import { BrowserRouter } from 'react-router-dom';
import Header from './Containers/Header';
import Footer from './Containers/Footer';
import Container from './Containers/Container';

export default function App() {
  return (
    <BrowserRouter>
      <Header />
      <Container />
      <Footer />
    </BrowserRouter>
  );
}
