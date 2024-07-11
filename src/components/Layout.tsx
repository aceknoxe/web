// src/components/Layout.tsx
import { ReactNode, useEffect } from 'react';
import { motion, AnimatePresence, useAnimation } from 'framer-motion';
import { useRouter } from 'next/router';
import { useScroll } from 'framer-motion';

interface LayoutProps {
  children: ReactNode;
}

const variants = {
  hidden: { opacity: 0, x: -200, y: 0 },
  enter: { opacity: 1, x: 0, y: 0 },
  exit: { opacity: 0, x: 0, y: -100 },
};

const Layout = ({ children }: LayoutProps) => {
  const router = useRouter();
  const controls = useAnimation();
  const { scrollY } = useScroll();

  useEffect(() => {
    scrollY.onChange((latest) => {
      controls.start({ y: -latest });
    });
  }, [scrollY, controls]);

  return (
    <AnimatePresence mode="wait" initial={false}>
      <motion.div
        key={router.route}
        variants={variants}
        initial="hidden"
        animate="enter"
        exit="exit"
        transition={{ type: 'linear' }}
        style={{ position: 'relative', overflow: 'hidden' }}
      >
        <motion.div animate={controls} transition={{ type: 'tween', ease: 'easeOut', duration: 0.5 }}>
          {children}
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default Layout;
