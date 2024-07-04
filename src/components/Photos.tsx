import React from 'react';

const Photos: React.FC = () => {
  return (
    <div className="py-20 bg-opacity-50 bg-emerald-50"> 
    <div className="max-w-3xl px-8 mx-auto sm:px-6 sm:pt-20 lg:max-w-5xl lg:px-8">
    <div className="inline-block px-3 py-1 mt-12 text-sm rounded-lg md:md-0 bg-emerald-100 bg-opacity-60 text-emerald-500 hover:cursor-pointer hover:bg-opacity-80">
      Product in Reaction
    </div>
    <h2 className="mt-4 bg-gradient-to-r from-[#1D976C] to-[#38ef7d] bg-clip-text text-3xl font-medium text-transparent">
      Continuously exceeds expectations
    </h2>
    <div className="mt-6 grid grid-cols-2 gap-4 md:grid-cols-4 px-2 ">
      <div className="grid gap-4">
        <div className="relative group">
          <img
            className="h-auto max-w-full rounded-lg object-cover object-center transition duration-300 transform group-hover:scale-105"
            src="https://images.unsplash.com/photo-1432462770865-65b70566d673?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
            alt="gallery-photo"
          />
        </div>
        <div className="relative group">
          <img
            className="h-auto max-w-full rounded-lg object-cover object-center transition duration-300 transform group-hover:scale-105"
            src="https://images.unsplash.com/photo-1629367494173-c78a56567877?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=927&q=80"
            alt="gallery-photo"
          />
        </div>
        <div className="relative group">
          <img
            className="h-auto max-w-full rounded-lg object-cover object-center transition duration-300 transform group-hover:scale-105"
            src="https://images.unsplash.com/photo-1493246507139-91e8fad9978e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80"
            alt="gallery-photo"
          />
        </div>
      </div>
      <div className="grid gap-4">
        <div className="relative group">
          <img
            className="h-auto max-w-full rounded-lg object-cover object-center transition duration-300 transform group-hover:scale-105"
            src="https://images.unsplash.com/photo-1552960562-daf630e9278b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
            alt="gallery-photo"
          />
        </div>
        <div className="relative group">
          <img
            className="h-auto max-w-full rounded-lg object-cover object-center transition duration-300 transform group-hover:scale-105"
            src="https://images.unsplash.com/photo-1540553016722-983e48a2cd10?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80"
            alt="gallery-photo"
          />
        </div>
        <div className="relative group">
          <img
            className="h-auto max-w-full rounded-lg object-cover object-center transition duration-300 transform group-hover:scale-105"
            src="https://docs.material-tailwind.com/img/team-3.jpg"
            alt="gallery-photo"
          />
        </div>
      </div>
      <div className="grid gap-4">
        <div className="relative group">
          <img
            className="h-auto max-w-full rounded-lg object-cover object-center transition duration-300 transform group-hover:scale-105"
            src="https://images.unsplash.com/photo-1493246507139-91e8fad9978e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80"
            alt="gallery-photo"
          />
        </div>
        <div className="relative group">
          <img
            className="h-auto max-w-full rounded-lg object-cover object-center transition duration-300 transform group-hover:scale-105"
            src="https://docs.material-tailwind.com/img/team-3.jpg"
            alt="gallery-photo"
          />
        </div>
        <div className="relative group">
          <img
            className="h-auto max-w-full rounded-lg object-cover object-center transition duration-300 transform group-hover:scale-105"
            src="https://images.unsplash.com/photo-1552960562-daf630e9278b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
            alt="gallery-photo"
          />
        </div>
      </div>
      <div className="grid gap-4">
        <div className="relative group">
          <img
            className="h-auto max-w-full rounded-lg object-cover object-center transition duration-300 transform group-hover:scale-105"
            src="https://images.unsplash.com/photo-1552960562-daf630e9278b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
            alt="gallery-photo"
          />
        </div>
        <div className="relative group">
          <img
            className="h-auto max-w-full rounded-lg object-cover object-center transition duration-300 transform group-hover:scale-105"
            src="https://images.unsplash.com/photo-1629367494173-c78a56567877?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=927&q=80"
            alt="gallery-photo"
          />
        </div>
      </div>
    </div>
  </div>
  </div>
);
}

export default Photos;