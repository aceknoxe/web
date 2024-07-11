import { useRouter } from 'next/router';
import Head from 'next/head';
import blogs from '../../../public/blogs/blogs.json';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';


const BlogPost = () => {
  const router = useRouter();
  const { id } = router.query;
  const post = blogs.find((blog) => blog.id === parseInt(id as string));

  const [isVisible, setIsVisible] = useState(true);

  const handleClose = () => {
    setIsVisible(false);
    setTimeout(() => {
      router.push('/blogs'); // Navigate to the homepage or replace '/' with the desired route
    }, 500); // Duration should match the exit animation duration
  };

  if (!post) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <div className="relative flex items-center justify-center w-24 h-24">
          <div className="absolute w-10 h-10 bg-blue-500 rounded-full opacity-75 animate-stream"></div>
          <div className="absolute w-10 h-10 bg-blue-500 rounded-full opacity-75 animate-stream animation-delay-500"></div>
          <div className="absolute w-10 h-10 bg-blue-500 rounded-full opacity-75 animate-stream animation-delay-1000"></div>
        </div>
      </div>
    );
  }

  return (
    <>
      <Head>
        <title>{post.title}</title>
        <meta name="description" content="Example" />
        <meta property="og:url" content="example.com" />
        <meta property="og:description" content="Example" />
        <meta property="og:title" content="Example" />
        <meta property="og:image" content="" />
        <link rel="shortcut icon" href="/favicon.png" />
      </Head>
      <div className="min-h-screen py-20 bg-opacity-50 bg-emerald-50 text-gray-900">
        <Header />
        <AnimatePresence>
          {isVisible && (
            <motion.main
              key={post.id}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="container mx-auto px-4 py-8 sm:py-3 mt-10"
            >
              <article className="bg-opacity-50 bg-emerald-90 p-51 rounded-lg shadow-md relative">
                <button
                  onClick={handleClose}
                  className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 focus:outline-none"
                >
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
                <h1 className="text-3xl font-bold mb-4">{post.title}</h1>
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-96 object-cover mb-4 rounded-md"
                  loading="lazy"
                />
                <p className="text-gray-700 mb-4">{post.content}</p>
                <p className="text-sm text-gray-500">Author: {post.author}</p>
                <p className="text-sm text-gray-500">Date: {post.date}</p>
              </article>
            </motion.main>
          )}
        </AnimatePresence>
        <Footer />
      </div>
    </>
  );
};

export default BlogPost;
