import { useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import blogs from '../../public/blogs/blogs.json';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Blogs = () => {
  const [selectedBlog, setSelectedBlog] = useState(null);

  return (
    <>
      <Head>
        <title>My Blog</title>
        <meta name="description" content="Example" />
        <meta property="og:url" content="example.com" />
        <meta property="og:description" content="Example" />
        <meta property="og:title" content="Example" />
        <meta property="og:image" content="" />
        <link rel="shortcut icon" href="/favicon.png" />
      </Head>
      <div className="min-h-screen py-20 bg-opacity-50 bg-emerald-50 text-gray-900">
        <Header />
        <main className="mt-8 container mx-auto px-4 py-8">
          <h1 className="mt-16 py-7 bg-gradient-to-r from-[#1D976C] to-[#38ef7d] bg-clip-text text-3xl font-medium text-transparent text-center">Latest Blog Posts</h1>
          <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {blogs.map((blog) => (
              <Link key={blog.id} href={`/blog/${blog.id}`} passHref>
                <div className="bg-opacity-50 bg-emerald-50 p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200 cursor-pointer">
                  <img
                    src={blog.image}
                    alt={blog.title}
                    className="w-full h-48 object-cover mb-4 rounded-md"
                    loading="lazy"
                  />
                  <h2 className="text-xl font-semibold">{blog.title}</h2>
                  <p className="text-gray-700 mt-2">{blog.content.substring(0, 100)}...</p>
                  <p className="text-sm text-gray-500 mt-2">Author: {blog.author}</p>
                  <p className="text-sm text-gray-500">Date: {blog.date}</p>
                </div>
              </Link>
            ))}
          </div>
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Blogs;
