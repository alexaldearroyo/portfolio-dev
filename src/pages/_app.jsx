import React from 'react';
import Header from '../components/Header';
import './styles.css';

import './google-fonts.css';


// Importa otros componentes de diseño aquí, si los tienes.

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Header />
      {/* Otros componentes de diseño aquí */}
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
