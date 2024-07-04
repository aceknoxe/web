import type { NextPage } from 'next';
import Head from 'next/head';
import Header from '../components/Header';
import Footer from '../components/Footer';
import About from '../components/About';


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
        <div
          className="absolute top-0 left-0 right-0 bg-no-repeat bg-cover -bottom-full brightness-90 filter md:bottom-0 md:bg-center md:brightness-100"
        />
        <Header />
        <About />
        <Footer />
      </div>
    </>
  );
};

export default Lery;