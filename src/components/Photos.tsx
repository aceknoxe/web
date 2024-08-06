import React from 'react';
import Image from 'next/image';

const Photos: React.FC = () => {
  return (
    <div className="py-20 bg-opacity-50 bg-emerald-50"> 
      <div className="max-w-3xl px-8 mx-auto sm:px-6 lg:max-w-5xl lg:px-8 mt-8">
        <div className="inline-block px-3 py-1 mt-12 text-sm rounded-lg md:md-0 bg-emerald-100 bg-opacity-60 text-emerald-500">
          Product in Reaction
        </div>
        <h2 className="mt-4 bg-gradient-to-r from-[#1D976C] to-[#38ef7d] bg-clip-text text-3xl font-medium text-transparent">
          Implementation In Favor
        </h2>
        <p className='mt-4 text-lg font-normal text-gray-700 md:text-center'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat aperiam doloremque error, placeat distinctio commodi 
        </p>
        <div className="mt-6 grid grid-cols-2 gap-4 md:grid-cols-4 px-2">
          {['image4.png', 'image.png', 'image1.png', 'image2.png', 'image1.png', 'image2.png', 'image4.png', 'image3.png', 'image3.png', 'image4.png', 'image.png', 'image.png'].map((imageSrc, index) => (
            <div key={index} className="relative group h-60">
              <Image
                className="rounded-lg object-cover"
                src={`/photos/${imageSrc}`}
                alt="gallery-photo"
                layout="fill"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Photos;
