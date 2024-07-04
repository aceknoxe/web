import React from 'react';
import Link from 'next/link';
import SocialLinks from './SocialLinks';

const Footer: React.FC = () => {
  return (
    <footer className="py-20 bg-emerald-50 bg-opacity-50">
      <div className="max-w-7xl mx-auto px-8 md:px-10 lg:px-10">
        <div className="grid grid-cols-1 gap-10 mb-10 text-gray-400 lg:grid-cols-2 ">
          <div>
            <h4 className="mb-6 font-semibold text-gray-900 uppercase text-center ">Company</h4>
            <ul className="space-y-3 flex flex-col items-center">
              <li>
                <a href="/about" className="text-gray-500 hover:text-gray-700 ">About Us</a>
              </li>
              <li>
                <a href="/gallery" className="text-gray-500 hover:text-gray-700">Gallery</a>
              </li>
              <li>
                <a href="/member" className="text-gray-500 hover:text-gray-700">Execome</a>
              </li>
              <li>
                <a href="/blog" className="text-gray-500 hover:text-gray-700">Blog</a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="mb-6 font-semibold text-gray-900 uppercase text-center ">Resources</h4>
            <ul className="space-y-3 flex flex-col items-center">
              <li>
                <a href="/arduino" className="text-gray-500 hover:text-gray-700">Arduino</a>
              </li>
              <li>
                <a href="/raspberry" className="text-gray-500 hover:text-gray-700">Raspberry</a>
              </li>
              <li>
                <a href="/embedded-c" className="text-gray-500 hover:text-gray-700">Embedded C</a>
              </li>
              <li>
                <a href="/micropython" className="text-gray-500 hover:text-gray-700">MicroPython</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="flex justify-center py-7">
          <SocialLinks />
        </div>
        <div className="text-center text-gray-700 mt-10 ">
          <p className="text tex-semibold">
            Made by{' '}
            <a
              href="https://instagram.com"
              className="underline text-green-300 hover:text-green-500"
            >
              me
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
