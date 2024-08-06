import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Coming: React.FC = () => {
  return (
    <div className="py-40 bg-opacity-50 bg-emerald-50">
      <div className="mt-3 max-w-4xl mx-auto px-4 py-12 text-center">
        <h1 className="mt-4 text-5xl font-medium text-center bg-gradient-to-r from-[#1D976C] to-[#38ef7d] bg-clip-text text-transparent">
          !!! Currently Closed !!!
        </h1>
        <div className="flex flex-col items-center justify-center md:justify-start space-y-4 md:space-y-0 md:space-x-8 mt-6">
          <div className="max-w-md">
            <div className="relative w-full h-80 md:h-96 rounded-2xl shadow-md">
              <Image
                src="/resources/think.png"
                alt="coming soon"
                layout="fill"
                objectFit="contain"
                className="rounded-2xl"
                priority
              />
            </div>
            <div className="mt-6">
              <Link href="/" legacyBehavior>
                <a className="px-4 py-2 bg-gradient-to-r from-[#1D972C] to-[#38ef7d] text-white font-semibold rounded-lg shadow-md hover:bg-opacity-80 transition">
                  Go Back To Home
                </a>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Coming;
