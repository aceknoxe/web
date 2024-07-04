import React from 'react';

type TweetProps = {
  name: string;
  position: string;
  text: string;
  photoLink?: string;
  linkedinLink?: string;
};

const Tweet: React.FC<TweetProps> = ({ name, position, text, photoLink, linkedinLink }) => {
  return (
    <div className="relative group">
      <div className="absolute transition rounded-lg opacity-25 -inset-1 bg-gradient-to-r blur duration-400 group-hover:opacity-100 group-hover:duration-200" />
      <a href={linkedinLink} className="cursor-pointer">
        <div className="relative p-6 space-y-6 leading-none rounded-lg bg-green-100 ">
          <div className="flex items-center space-x-4">
            {photoLink && (
              <div>
                <img src={photoLink} alt={name} className="w-12 h-12 rounded-full" />
              </div>
            )}
            <div>
              <h3 className="text-lg font-semibold text-gray-700">{name}</h3>
              <p className="text-gray-700 text-md">{position}</p>
            </div>
          </div>
          <p className="leading-normal text-gray-700 text-md">{text}</p>
        </div>
      </a>
    </div>
  );
};

const Testimonies: React.FC = () => {
  return (
    <section id="testimonies" className="py-20 bg-opacity-50 bg-emerald-50">
      <div className="max-w-6xl mx-8 md:mx-10 lg:mx-20 xl:mx-auto">
        <div className="transition duration-500 ease-in-out transform scale-100 translate-x-0 translate-y-0 opacity-100">
          <div className="mb-12 space-y-5 md:mb-16 md:text-center">
            <div className="inline-block px-3 py-1 text-sm font-semibold rounded-lg bg-emerald-100 bg-opacity-60 text-emerald-500 hover:cursor-pointer hover:bg-opacity-80">
              Words from Others
            </div>
            <h1 className="mb-5 text-3xl font-semibold text-gray-700 md:text-center md:text-5xl">
              It's not just us.
            </h1>
            <p className="text-xl text-gray-700 md:text-center md:text-2xl">
              Here's what others have to say about us.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-6 ">
          <ul className="space-y-8">
            <li className="text-sm leading-6">
              <Tweet
                name="Kanye West"
                position="Rapper & Entrepreneur"
                text="Find Good."
                photoLink="https://cdn.pixabay.com/photo/2023/11/03/02/38/ai-generated-8361907_640.jpg"
                linkedinLink="https://www.linkedin.com/in/kanyewest/"
              />
            </li>
            <li className="text-sm leading-6">
              <Tweet
                name="Tim Cook"
                position="CEO of Apple"
                text="Diam quis enim lobortis scelerisque fermentum dui faucibus in ornare. Donec pretium vulputate sapien nec sagittis aliquam malesuada bibendum."
                photoLink="https://pbs.twimg.com/profile_images/1535420431766671360/Pwq-1eJc_400x400.jpg"
                linkedinLink="https://www.linkedin.com/in/timcook/"
              />
            </li>
            <li className="text-sm leading-6">
              <Tweet
                name="Parag Agrawal"
                position="CEO of Twitter"
                text="Enim neque volutpat ac tincidunt vitae semper. Mattis aliquam faucibus purus in massa tempor. Neque vitae tempus quam pellentesque nec. Turpis cursus in hac habitasse platea dictumst."
                photoLink="https://pbs.twimg.com/profile_images/1375285353146327052/y6jeByyD_400x400.jpg"
                linkedinLink="https://www.linkedin.com/in/paragagrawal/"
              />
            </li>
            <li className="text-sm leading-6">
              <Tweet
                name="Satya Nadella"
                position="CEO of Microsoft"
                text="Tortor dignissim convallis aenean et tortor at. At ultrices mi tempus imperdiet nulla malesuada. Id cursus metus aliquam eleifend mi. Quis ipsum suspendisse ultrices gravida dictum fusce ut."
                photoLink="https://pbs.twimg.com/profile_images/1221837516816306177/_Ld4un5A_400x400.jpg"
                linkedinLink="https://www.linkedin.com/in/satyanadella/"
              />
            </li>
            <li className="text-sm leading-6">
              <Tweet
                name="Dan Schulman"
                position="CEO of PayPal"
                text="Quam pellentesque nec nam aliquam sem et tortor consequat id. Enim sit amet venenatis urna cursus."
                photoLink="https://pbs.twimg.com/profile_images/516916920482672641/3jCeLgFb_400x400.jpeg"
                linkedinLink="https://www.linkedin.com/in/danschulman/"
              />
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Testimonies;
