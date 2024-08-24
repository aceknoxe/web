import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Tweet: React.FC<{ name: string, position: string, text: string, photoLink: string, linkedinLink?: string }> = ({ name, position, text, photoLink, linkedinLink }) => {
  const defaultLink = "/"; // Fallback URL

  return (
    <div className="relative group ">
      <div className="absolute transition rounded-xl opacity-25 -inset-1 bg-gradient-to-r blur duration-400 group-hover:opacity-100 group-hover:duration-200" />
      <Link href={linkedinLink || defaultLink} className="cursor-pointer">
        <div className="relative p-6 space-y-6 leading-none rounded-lg bg-green-100 ">
          <div className="flex items-center space-x-4">
            {photoLink ? (
              <div>
                <Image 
                  src={photoLink} 
                  alt={name} 
                  width={60} 
                  height={60} 
                  className="rounded-full" 
                />
              </div>
            ) : (
              <div>
                <Image 
                  src="/default-photo.jpg" 
                  alt="Default Photo" 
                  width={60} 
                  height={60} 
                  className="rounded-full" 
                />
              </div>
            )}
            <div>
              <h3 className="text-lg font-semibold text-gray-700">{name}</h3>
              <p className="text-gray-700 text-md">{position}</p>
            </div>
          </div>
          <p className="leading-normal text-gray-700 text-md">{text}</p>
        </div>
      </Link>
    </div>
  );
};

const Testimonies: React.FC = () => {
  // Example data array containing tweets for different individuals
  const tweetsData = [
    {
      name: "Kanye West",
      position: "Rapper & Entrepreneur",
      text: "Find Good.",
      photoLink: "/founders/f2.jpg",
      linkedinLink: "https://www.linkedin.com/in/kanyewest/"
    },
    {
      name: "Google",
      position: "Search Engine",
      text: "Data is mine",
      photoLink: "/founders/f2.jpg",
      linkedinLink: "https://www.linkedin.com/in/kanyewest/"
    },
    {
      name: "MicroSoft",
      position: "Windows",
      text: "Ex- Most Valuable company",
      photoLink: "/founders/f2.jpg",
      linkedinLink: "https://www.linkedin.com/in/kanyewest/"
    },
    {
      name: "Apple",
      position: "ios",
      text: "Diam quis enim lobortis scelerisque fermentum dui faucibus in ornare. Donec pretium vulputate",
      photoLink: "/founders/f2.jpg",
      linkedinLink: "https://www.linkedin.com/in/kanyewest/"
    },
    {
      name: "Tim Cook",
      position: "CEO of Apple",
      text: "Diam quis enim lobortis scelerisque fermentum dui faucibus in ornare. Donec pretium vulputate sapien nec sagittis aliquam malesuada bibendum.",
      photoLink: "/founders/f1.jpg",
      linkedinLink: "https://www.linkedin.com/in/timcook/"
    },
    // Add more objects for each person
  ];

  return (
    <section id="testimonies" className="py-20 bg-opacity-50 bg-emerald-50">
      <div className="max-w-6xl mx-8 md:mx-10 lg:mx-20 xl:mx-auto">
        <div className="transition duration-500 ease-in-out transform scale-100 translate-x-0 translate-y-0 opacity-100">
          <div className="mb-12 space-y-5 md:mb-16 md:text-center">
            <div className="inline-block px-3 py-1 text-sm font-semibold rounded-lg bg-emerald-100 bg-opacity-60 text-emerald-500 hover:cursor-pointer hover:bg-opacity-80">
              Words from Others
            </div>
            <h1 className="mb-5 text-3xl font-semibold text-gray-700 md:text-center md:text-5xl">
              It&apos;s not just us.
            </h1>
            <p className="text-xl text-gray-700 md:text-center md:text-2xl">
              Here&apos;s what others have to say about us.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-6 ">
          <ul className="space-y-8">
            {tweetsData.map((tweet, index) => (
              <li key={index} className="text-sm leading-6">
                <Tweet {...tweet} />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Testimonies;
