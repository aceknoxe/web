import '../styles/globals.css';
import '../styles/loading.css';
import type { AppProps } from 'next/app';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Loading from '../app/loading';
import { AnimatePresence } from 'framer-motion';

function MyApp({ Component, pageProps }: AppProps) {
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    const handleStart = () => {
      setLoading(true);
    };
    const handleComplete = () => {
      setLoading(false);
    };

    // Show loading animation on initial load
    handleComplete();

    router.events.on('routeChangeStart', handleStart);
    router.events.on('routeChangeComplete', handleComplete);
    router.events.on('routeChangeError', handleComplete);

    return () => {
      router.events.off('routeChangeStart', handleStart);
      router.events.off('routeChangeComplete', handleComplete);
      router.events.off('routeChangeError', handleComplete);
    };
  }, [router]);

  return (
    <>
      <AnimatePresence mode="wait">
        {loading ? (
          <Loading key="loading" />
        ) : (
          <Component {...pageProps} key={router.route} />
        )}
      </AnimatePresence>
    </>
  );
}

export default MyApp;
