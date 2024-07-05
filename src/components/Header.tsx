import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link'; // Import Link from Next.js

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="fixed top-0 z-50 w-full bg-transparent backdrop-filter backdrop-blur bg-green-50 bg-opacity-80 h-15">
      <div className="relative flex items-center justify-between mx-auto max-w-7xl px-4">
        {/* Logo */}
        <div className="flex mt-4">
          <img src="/images/logo.png" alt="Logo" className="h-30 w-60" />
        </div>
        {/* Hamburger Button */}
        <button
          className="relative w-10 h-5 flex flex-col justify-center items-center md:hidden focus:outline-none"
          onClick={toggleMenu}
          aria-label="Toggle navigation"
        >
          <motion.div
            className="w-5 h-0.5 bg-green-800 mb-1"
            initial={false}
            animate={isOpen ? { rotate: 90, y: 6 } : { rotate: 0, y: 0 }}
            transition={{ duration: 0.3 }}
          />
          <motion.div
            className="w-5 h-0.5 bg-green-800 mb-1"
            initial={false}
            animate={{ opacity: isOpen ? 50 : 1 }}
            transition={{ duration: 0.3 }}
          />
          <motion.div
            className="w-5 h-0.5 bg-green-800"
            initial={false}
            animate={isOpen ? { rotate: -90, y: -6 } : { rotate: 0, y: 0 }}
            transition={{ duration: 0.3 }}
          />
        </button>
        {/* Dropdown Menu */}
        <AnimatePresence>
          {/* Always render on larger screens */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 50 }}
            transition={{ duration: 0.3 }}
            className={`fixed mt-6 top-14 right-10  md:top-2 md:right-20 w-47 bg-green-50 shadow-lg rounded-lg md:flex md:w-auto md:shadow-none md:bg-transparent transition-all duration-300 ${isOpen ? 'block' : 'hidden'}`}
          >
            <nav className="flex flex-col p-4 space-y-4 md:flex-row md:space-y-0 md:space-x-6 md:p-0 ">
              <Link href="/"
                 className="text-gray-800 hover:text-green-900 transition-colors rounded-xl border border-green-300 px-4 py-2 text-center block">
                  Home
               
              </Link>
              <Link href="/about"
                 className="text-gray-800 hover:text-green-900 transition-colors rounded-xl border border-green-300 px-4 py-2 text-center block">
                  About
                
              </Link>
              <Link href="/contact"
                 className="text-gray-800 hover:text-green-900 transition-colors rounded-xl border border-green-300 px-4 py-2 text-center block">
                  Contact
                
              </Link>
              <Link href="/gallery"
                 className="text-gray-800 hover:text-green-900 transition-colors rounded-xl border border-green-300 px-4 py-2 text-center block">
                  Gallery
                
              </Link>
              <Link href="/members"
                 className="text-gray-800 hover:text-green-900 transition-colors rounded-xl border border-green-300 px-4 py-2 text-center block">
                  Execome
                
              </Link>
              <Link href="/blogs"
                 className="text-gray-800 hover:text-green-900 transition-colors rounded-xl border border-green-300 px-4 py-2 text-center block">
                  Blogs
                
              </Link>
            </nav>
          </motion.div>
        </AnimatePresence>
      </div>
    </header>
  );
};

export default Header;
