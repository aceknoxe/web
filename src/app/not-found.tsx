import Link from 'next/link';
import '../styles/globals.css';

const Custom404 = () => {
  return (
    <div className="container flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="max-w-3xl px-8 mx-auto sm:px-6 sm:pt-20 lg:max-w-5xl lg:px-8 text-center">
        <div className="banner mt-12 text-sm rounded-lg md:md-0 hover:bg-opacity-80">

        </div>
        <h2 className="heading mt-4">
          Oops! Looks like you're lost.
        </h2>
        
          <a  href="/" className="button mt-6">
            Go back to Home
          </a>
        
      </div>
    </div>
  );
};

export default Custom404;

