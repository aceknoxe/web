import type { NextPage } from 'next';
import Head from 'next/head';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Contact from '../components/Contact';

const Lery: NextPage = () => {
  return (
    <>
      <Head>
        <title>aceknox</title>
        <meta content="Example" name="description" />
        <meta property="og:url" content="example.com" />
        <meta property="og:description" content="Example" />
        <meta property="og:title" content="Example" />
        <meta property="og:image" content="" />
        <link rel="shortcut icon" href="/favicon.png" />
      </Head>
      <div className="smooth-scroll h-full leading-normal text-gray-100">
        <Header />
        <Contact />
        <Footer />
      </div>
    </>
  );
};

export default Lery;
