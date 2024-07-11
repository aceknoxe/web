import React, { useEffect, useState } from 'react';

interface ImageData {
  src: string;
  title: string;
}

const MasonryGridGallery: React.FC = () => {
  const [images, setImages] = useState<ImageData[]>([]);
  const [hoveredImage, setHoveredImage] = useState<number | null>(null);

  useEffect(() => {
    fetch('images/images.json')
      .then((res) => res.json())
      .then((data: ImageData[]) => {
        setImages(data);
      });
  }, []);

  const handleMouseEnter = (index: number) => {
    setHoveredImage(index);
  };

  const handleMouseLeave = () => {
    setHoveredImage(null);
  };

  return (
   <div className="py-20 bg-opacity-50 bg-emerald-50">
    <div className="mt-3 min-h-screen p-11 space-y-8  text-center">
      <div className="mt-9 inline-block px-3 py-1 text-sm font-semibold rounded-lg bg-emerald-100 bg-opacity-60 text-emerald-500 hover:cursor-pointer hover:bg-opacity-80 mt-3">
        Gallery
      </div>
      <h1 className="mt-7 bg-gradient-to-r from-[#1D976C] to-[#38ef7d] bg-clip-text text-3xl font-medium text-transparent text-center">
        Decked with countless features.
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
        {images.map((image, index) => (
          <div key={index} className="relative grid gap-2">
            <div
              className="relative"
              onMouseEnter={() => handleMouseEnter(index)}
              onMouseLeave={handleMouseLeave}
            >
              <img
                className="h-auto max-w-full rounded-lg object-cover object-center"
                src={image.src}
                alt={image.title}
              />
              {hoveredImage === index && (
                <div className="absolute bottom-0 left-0 right-0 bg-gray-80 bg-opacity-15 text-white text-center transition-opacity duration-300 ease-in-out opacity-0 hover:opacity-100 semi-bold py-2">
                  <span className="text-sm">{image.title}</span>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
  );
};

export default MasonryGridGallery;