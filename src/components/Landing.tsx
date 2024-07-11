import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowDown } from '@fortawesome/free-solid-svg-icons';
import { motion } from 'framer-motion';
import Link from 'next/link';

interface AnimatedTextCharacterProps {
  text: string;
}

const container = {
  hidden: { opacity: 1 },
  visible: (i = 0) => ({
    opacity: 1,
    transition: { staggerChildren: 0.03, delayChildren: 0.04 * i },
  }),
};

const child = {
  visible: {
    opacity: 1,
    x: 0,
    y: 0,
    transition: {
      type: 'spring',
      damping: 12,
      stiffness: 100,
    },
  },
  hidden: {
    opacity: 0,
    x: -20,
    y: 10,
    transition: {
      type: 'spring',
      damping: 12,
      stiffness: 100,
    },
  },
};

const AnimatedTextCharacter: React.FC<AnimatedTextCharacterProps> = ({ text }) => {
  const letters = Array.from(text);

  return (
    <motion.div
      className="overflow-hidden flex text-5xl font-medium justify-center"
      variants={container}
      initial="hidden"
      animate="visible"
    >
      {letters.map((letter, index) => (
        <motion.span
          variants={child}
          key={index}
          className="bg-gradient-to-r from-green-900 to-green-500 bg-clip-text text-transparent"
        >
          {letter === ' ' ? '\u00A0' : letter}
        </motion.span>
      ))}
    </motion.div>
  );
};

const Landing: React.FC = () => {
  return (
    <section className="min-h-screen flex flex-col justify-center bg-opacity-50 bg-emerald-50">
        <div className="flex flex-col justify-center">
          <div className="max-w-8xl mx-8 md:mx-auto mt-20 text-center">
            <div className="my-20 space-y-10 text-center sm:my-16 md:space-y-14">
              <div className="space-y-5 md:space-y-8  flex flex-col items-center">
                <AnimatedTextCharacter text="Welcome to Gbot" />
                <motion.h2
                  className="text-2xl text-gray-700 md:text-2xl md:mx-10 md:text-gray-600"
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1, delay: 0.5 }}
                >
                  we build empowering technologies.
                </motion.h2>
                <motion.h2
                  className="text-xl text-gray-700 md:text-2xl md:mx-10 md:text-gray-600"
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1, delay: 1 }}
                >
                  our motive.
                </motion.h2>
              </div>
            </div>
          </div>
          <motion.div
            className="flex justify-center mt-30"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.5 }}
          >
            <Link href="#features" passHref>
              <span className="text-gray-700 hover:text-gray-900 transition duration-500">
                <FontAwesomeIcon icon={faArrowDown} />
              </span>
            </Link>
          </motion.div>
        </div>
    </section>
  );
};

export default Landing;
