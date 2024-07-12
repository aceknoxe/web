import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface ImageData {
  src: string;
  title: string;
  description: string;
}

const MasonryGridGallery: React.FC = () => {
  const [images, setImages] = useState<ImageData[]>([]);
  const [selectedImage, setSelectedImage] = useState<ImageData | null>(null);

  useEffect(() => {
    fetch('/images/images.json') // Adjust the path to your images.json file
      .then((res) => res.json())
      .then((data: ImageData[]) => {
        setImages(data);
      });
  }, []);

  const handleClick = (image: ImageData) => {
    setSelectedImage(image);
  };

  const handleClose = () => {
    setSelectedImage(null);
  };

  return (
    <div className="py-20 bg-opacity-50 bg-emerald-50">
      <div className="mt-3 min-h-screen p-11 space-y-8 text-center">
        <div className="mt-9 inline-block px-3 py-1 text-sm font-semibold rounded-lg bg-emerald-100 bg-opacity-60 text-emerald-500 hover:cursor-pointer hover:bg-opacity-80 mt-3">
          Gallery
        </div>
        <h1 className="mt-7 bg-gradient-to-r from-[#1D976C] to-[#38ef7d] bg-clip-text text-3xl font-medium text-transparent text-center">
          Decked with countless features.
        </h1>
        <p className="text-green-500 text-md text-semi-bold">
          click any Image to full view
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
          {images.map((image, index) => (
            <div key={index} className="relative grid gap-2">
              <div
                className="relative cursor-pointer"
                onClick={() => handleClick(image)}
              >
                <img
                  className="h-auto max-w-full rounded-lg object-cover object-center"
                  src={image.src}
                  alt={image.title}
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gray-80 bg-opacity-75 text-white text-center opacity-0 transition-opacity duration-300 ease-in-out hover:opacity-100 semi-bold py-2">
                  <span className="text-sm">{image.title}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selectedImage && (
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
                src={selectedImage.src}
                alt={selectedImage.title}
                className="w-full h-auto max-h-screen object-contain rounded-2xl"
              />
              <div className="mt-4">
                <h2 className="text-xl font-semibold">{selectedImage.title}</h2>
                <p className="text-white-700">{selectedImage.description}</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default MasonryGridGallery;
