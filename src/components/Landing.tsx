import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowDown } from '@fortawesome/free-solid-svg-icons';
import { motion } from 'framer-motion';
import Link from 'next/link';

interface AnimatedTextCharacterProps {
  text: string[];
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
  return (
    <div className="flex flex-col sm:flex-row sm:justify-center sm:space-x-3">
      {text.map((line, index) => (
        <motion.div
          key={index}
          className="overflow-hidden flex text-3xl sm:text-4xl md:text-5xl font-medium justify-center sm:justify-start"
          variants={container}
          initial="hidden"
          animate="visible"
        >
          {Array.from(line).map((letter, i) => (
            <motion.span
              key={i}
              variants={child}
              className="bg-gradient-to-r from-green-900 to-green-500 bg-clip-text text-transparent"
            >
              {letter === ' ' ? '\u00A0' : letter}
            </motion.span>
          ))}
        </motion.div>
      ))}
    </div>
  );
};

const Landing: React.FC = () => {
  return (
    <section className="min-h-screen flex flex-col justify-center bg-opacity-50 bg-emerald-50">
      <div className="flex flex-col justify-center">
        <div className="max-w-8xl mx-8 md:mx-auto mt-10 text-center">
          <div className="my-20 space-y-10 text-center sm:my-16 md:space-y-14">
            <div className="space-y-5 md:space-y-8 flex flex-col items-center">
              <AnimatedTextCharacter text={['WELCOME', 'To', 'Gbot']} />
              <motion.h2
                className="text-lg sm:text-4xl md:text-4xl text-gray-700 md:text-gray-600"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.5 }}
              >
                we build empowering technologies.
              </motion.h2>
              <motion.h2
                className="text-md sm:text-lg md:text-xl text-gray-700 md:text-gray-600"
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
          <Link href="#features" legacyBehavior>
            <a className="text-gray-700 hover:text-gray-900 transition duration-500 text-lg sm:text-xl md:text-2xl">
              <FontAwesomeIcon icon={faArrowDown} />
            </a>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default Landing;
