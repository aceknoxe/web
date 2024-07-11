import type { NextPage } from 'next';
import Head from 'next/head';

import Header from '../components/Header';
import Landing from '../components/Landing';
import Features from '../components/Features';
import Demo from '../components/Demo';
import Founders from '../components/Founders';
import Register from '../components/Register'
import Footer from '../components/Footer';
import Photos from '@/components/Photos';

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Gbot</title>
        <meta content="Example" name="description" />
        <meta property="og:url" content="https://example.com" />
        <meta property="og:description" content="Example" />
        <meta property="og:title" content="Example" />
        <meta property="og:image" content="/path/to/image.jpg" />
        <link rel="shortcut icon" href="/images/logo (1).png "/>
      </Head>
      <div className="h-full leading-normal text-gray-100">
        <div
          className="absolute top-0 left-0 right-0 bg-no-repeat bg-cover -bottom-full brightness-90 filter md:bottom-0 md:bg-center md:brightness-100"
        />
        <Header />
        <Landing />
        <Features />        
        <Demo />
        <Photos />
        <Founders /> 
        <Register/>
        <Footer />
      </div>
    </>
  );
};

export default Home;
