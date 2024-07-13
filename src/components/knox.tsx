import React, { useEffect, useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { disableBodyScroll, enableBodyScroll } from 'body-scroll-lock';

interface BlogData {
  src: string;
  title: string;
  description: string;
  content: string;
}

const MasonryBlog: React.FC = () => {
  const [blogs, setBlogs] = useState<BlogData[]>([]);
  const [selectedBlog, setSelectedBlog] = useState<BlogData | null>(null);
  const [loadingImages, setLoadingImages] = useState<{ [key: number]: boolean }>({});
  const modalRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    fetch('/blogs/blog.json')
      .then((res) => res.json())
      .then((data: BlogData[]) => {
        setBlogs(data);
      });
  }, []);

  const handleClick = (blog: BlogData) => {
    setSelectedBlog(blog);
    if (modalRef.current) {
      disableBodyScroll(modalRef.current);
    }
  };

  const handleClose = () => {
    setSelectedBlog(null);
    if (modalRef.current) {
      enableBodyScroll(modalRef.current);
    }
  };

  const handleImageLoad = (index: number) => {
    setLoadingImages((prev) => ({ ...prev, [index]: false }));
  };

  return (
    <div className="py-20 bg-opacity-50 bg-emerald-50">
      <div className="min-h-screen p-11 space-y-8 text-center">
        <div className="mt-2 inline-block px-3 py-1 text-sm font-semibold rounded-lg bg-emerald-100 bg-opacity-60 text-emerald-500 hover:cursor-pointer hover:bg-opacity-80 mt-3">
          Blog Gallery
        </div>
        <h1 className="mt-7 bg-gradient-to-r from-[#1D976C] to-[#38ef7d] bg-clip-text text-3xl font-medium text-transparent text-center">
          Discover Our Latest Blogs
        </h1>
        <p className="text-green-500 text-md text-semi-bold">
          Click any image to read the full blog
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
          {blogs.map((blog, index) => (
            <div key={index} className="relative grid gap-2">
              <div
                className="relative cursor-pointer"
                onClick={() => handleClick(blog)}
              >
                {loadingImages[index] && (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="spinner-border animate-spin inline-block w-8 h-8 border-4 rounded-full text-emerald-500"></div>
                  </div>
                )}
                <img
                  className={`h-48 w-full sm:h-64 md:h-80 lg:h-96 rounded-lg object-cover object-center ${loadingImages[index] ? 'opacity-0' : 'opacity-100'}`}
                  src={blog.src}
                  alt={blog.title}
                  onLoad={() => handleImageLoad(index)}
                />
                <div className="text-center mt-2">
                  <h2 className="flex text-lg text-gray-600 font-semibold">{blog.title}</h2>
                  <p className="flex text-sm text-gray-600">{blog.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selectedBlog && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-gray-900 bg-opacity-90 flex items-center justify-center"
          >
            <motion.div
              initial={{ scale: 0.5 }}
              animate={{ scale: 1 }}
              transition={{ type: 'spring', stiffness: 260, damping: 20 }}
              className="max-w-4xl mx-auto p-6 bg-gray-40 rounded-lg overflow-hidden relative"
              style={{ maxHeight: '90vh', overflowY: 'auto' }}
              ref={modalRef}
            >
              <motion.button
                onClick={handleClose}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
                className="absolute top-1 right-2 text-white-500 hover:text-white-700 focus:outline-none"
              >
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </motion.button>
              <img
                src={selectedBlog.src}
                alt={selectedBlog.title}
                className="w-full h-auto max-h-64 object-contain rounded-2xl"
              />
              <div className="mt-8">
                <h2 className="text-xl font-semibold">{selectedBlog.title}</h2>
                <p className="text-white-700">{selectedBlog.content}</p>
              </div>
              <div className="mt-4 text-center">
                <button
                  onClick={handleClose}
                  className="px-4 py-2 bg-emerald-50 text-green-800 rounded-xl hover:bg-emerald-700 hover:text-white transition duration-300"
                >
                  Close
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default MasonryBlog;
