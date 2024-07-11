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
          <img src="/images/logo.png" alt="Logo" className="h-30 w-60" loading='lazy' />
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
            animate={isOpen ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
            transition={{ duration: 0.3 }}
          />
          <motion.div
            className="w-5 h-0.5 bg-green-800"
            initial={false}
            animate={isOpen ? { opacity: 0 } : { opacity: 1 }}
            transition={{ duration: 0.3 }}
          />
          <motion.div
            className="w-5 h-0.5 bg-green-800 mt-1"
            initial={false}
            animate={isOpen ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }}
            transition={{ duration: 0.3 }}
          />
        </button>
        {/* Dropdown Menu */}
        <AnimatePresence>
          {(isOpen || window.innerWidth >= 768) && (
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 50 }}
              transition={{ duration: 0.3 }}
              className={`fixed md:static mt-6 top-14 right-10 md:mt-0 md:top-auto md:right-auto w-47 bg-green-50 shadow-lg rounded-lg md:flex md:w-auto md:shadow-none md:bg-transparent transition-all duration-300 ${isOpen ? 'block' : 'hidden md:block'}`}
            >
              <nav className="flex flex-col p-4 space-y-4 md:flex-row md:space-y-0 md:space-x-6 md:p-0">
                {['Home', 'About', 'Contact', 'Gallery', 'Execome', 'Blogs'].map((text, index) => (
                  <motion.div
                    key={text}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1, duration: 0.3 }}
                  >
                    <Link href={text === 'Home' ? '/' : `/${text.toLowerCase()}`} passHref>
                      <span className="text-gray-800 hover:text-green-900 transition-colors rounded-xl border border-green-300 px-4 py-2 text-center block">
                        {text}
                      </span>
                    </Link>
                  </motion.div>
                ))}
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
};

export default Header;
