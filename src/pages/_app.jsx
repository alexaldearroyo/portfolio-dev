import React from "react";
import Head from 'next/head';
import Layout from "../components/Layout";
import Header from "../components/Header";
import "./styles.css";
import "./google-fonts.css";
import "./projects.css";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Alex Arroyo</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}

export default MyApp;
