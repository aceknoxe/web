import React from 'react';

const Landing: React.FC = () => {
  return (
    <section>
      <div className="py-20 bg-opacity-50 bg-emerald-50">
      <div className="max-w-6xl mx-8 md:mx-auto  ">
        <div className="my-20 space-y-10 text-center sm:my-16 md:space-y-14">
          <div className="space-y-5 md:space-y-8 mt-39">
            <h1 className="mt-24 bg-gradient-to-r from-green-900 to-green-500 bg-clip-text text-5xl font-medium text-transparent">
              Welcome to Gbot.
            </h1>
            <h2 className="text-lg text-gray-900 md:text-2xl md:mx-10 md:text-gray-600">
              we build empowering technologies.
            </h2>
          </div>
        </div>
      </div>
      <div className="relative w-full px-4 text-center sm:px-0 md:mx-auto md:my-12 md:w-3/5">
        <div className="relative z-10">
          <a
            target="_blank"
            rel="noreferrer"
            href=""
          >
            <img
              className="transition duration-700 shadow-xl rounded-xl ring-1 ring-black ring-opacity-5 hover:transform hover:scale-105 flex items-center justify-center w-screen "
              src="https://img.freepik.com/free-photo/egyptian-wall-with-hieroglyphs_23-2151617076.jpg?t=st=1719900323~exp=1719903923~hmac=d0354aa87a90b9581a2482303a9200a41a2a8696020f79d4e36f7af8ce67fa1d&w=826"
              alt="Product Image"
            />
          </a>
        </div>
      </div>
      <div className="flex justify-center mt-10">
        <a
          href="#features"
          className="text-gray-700 hover:text-gray-900 transition duration-500"
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" className="h-10 w-10 animate-bounce">
            <path d="M137.4 374.6c12.5 12.5 32.8 12.5 45.3 0l128-128c9.2-9.2 11.9-22.9 6.9-34.9s-16.6-19.8-29.6-19.8L32 192c-12.9 0-24.6 7.8-29.6 19.8s-2.2 25.7 6.9 34.9l128 128z"/>
          </svg>
        </a>
      </div>
      </div>
    </section>
  );
}

export default Landing;
