import React from "react";
import Layout from "../components/Layout";
import Header from "../components/Header";
import "./styles.css";

import "./google-fonts.css";

// Importa otros componentes de diseño aquí, si los tienes.

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Header />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}

export default MyApp;
