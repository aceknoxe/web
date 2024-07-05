import React from 'react';
import Link from 'next/link';
import SocialLinks from './SocialLinks';

const Footer: React.FC = () => {
  return (
    <footer className="py-20 bg-emerald-50 bg-opacity-50">
      <div className="max-w-7xl mx-auto px-8 md:px-10 lg:px-10">
        <div className="grid grid-cols-1 gap-10 mb-10 text-gray-400 lg:grid-cols-2 ">
          <div>
            <h4 className="mb-6 font-semibold text-gray-900 uppercase text-center">Company</h4>
            <ul className="space-y-3 flex flex-col items-center">
              <li>
                <Link href="/about">
                  <span className="text-gray-500 hover:text-gray-700 cursor-pointer">About Us</span>
                </Link>
              </li>
              <li>
                <Link href="/gallery">
                  <span className="text-gray-500 hover:text-gray-700 cursor-pointer">Gallery</span>
                </Link>
              </li>
              <li>
                <Link href="/member">
                  <span className="text-gray-500 hover:text-gray-700 cursor-pointer">Execome</span>
                </Link>
              </li>
              <li>
                <Link href="/blog">
                  <span className="text-gray-500 hover:text-gray-700 cursor-pointer">Blog</span>
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="mb-6 font-semibold text-gray-900 uppercase text-center">Resources</h4>
            <ul className="space-y-3 flex flex-col items-center">
              <li>
                <Link href="/arduino">
                  <span className="text-gray-500 hover:text-gray-700 cursor-pointer">Arduino</span>
                </Link>
              </li>
              <li>
                <Link href="/raspberry">
                  <span className="text-gray-500 hover:text-gray-700 cursor-pointer">Raspberry</span>
                </Link>
              </li>
              <li>
                <Link href="/embedded-c">
                  <span className="text-gray-500 hover:text-gray-700 cursor-pointer">Embedded C</span>
                </Link>
              </li>
              <li>
                <Link href="/micropython">
                  <span className="text-gray-500 hover:text-gray-700 cursor-pointer">MicroPython</span>
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="flex justify-center py-7">
          <SocialLinks />
        </div>
        <div className="text-center text-gray-700 mt-10">
          <p className="text tex-semibold">
            Made by{' '}
            <a
              href="https://instagram.com"
              className="underline text-green-300 hover:text-green-500"
              target="_blank"
              rel="noopener noreferrer"
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
