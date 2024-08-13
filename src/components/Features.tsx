import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLaptopCode, faUsers, faChalkboardTeacher, faTools, faHandsHelping, faRobot } from '@fortawesome/free-solid-svg-icons';

const Features: React.FC = () => {
  return (
    <section id="features" className="py-20 bg-opacity-50 bg-emerald-50">
      <div className="mx-8 max-w-7xl md:mx-10 lg:mx-20 xl:mx-auto">
        <div className="space-y-16 md:space-y-24">
          <div className="transition duration-500 ease-in-out transform scale-100 translate-x-0 translate-y-0 opacity-100">
            <div className="space-y-5 md:text-center">
              <div className="inline-block px-3 py-1 text-sm font-semibold rounded-lg bg-emerald-100 bg-opacity-60 text-emerald-500 hover:cursor-pointer hover:bg-opacity-80">
                Awesome Features
              </div>
              <h1 className="mt-4 bg-gradient-to-r from-[#1D976C] to-[#38ef7d] bg-clip-text text-3xl font-medium text-transparent md:text-center">
                Decked with countless features.
              </h1>
              <p className="text-xl text-gray-600 md:text-2xl">
                Each feature is specifically made for devs and aimed at making <span className="font-semibold">your</span> life easier.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 grid-rows-2 gap-8 text-lg md:grid-cols-2 lg:grid-cols-3">
            <div className="flex shadow-md hover:shadow-green flex-col justify-between p-5 transition duration-400 bg-white bg-opacity-20 rounded-3xl card-hover group space-y-5">
              <FontAwesomeIcon icon={faLaptopCode} className="text-[#322e37] bg-gradient-to-g from-[#5b585f] to-[#2d2a33] h-10 w-10 rounded-full border p-2 transition duration-400 group-hover:border-[#30FF7C] group-hover:shadow-[#30FF7C] group-hover:shadow-sm" />
              <h3 className="text-xl font-semibold text-gray-700">
                CUTTING-EDGE WORKSHOPS
              </h3>
              <p className="text-gray-700">
                Immerse yourself in our hands-on workshops, unlocking the latest in robotics tech—a vital resource curated for enthusiasts on our new website.
              </p>
            </div>
            <div className="flex shadow-md hover:shadow-green flex-col justify-between p-5 transition duration-400 bg-white bg-opacity-20 rounded-3xl card-hover group space-y-5">
              <FontAwesomeIcon icon={faUsers} className="text-[#322e37] bg-gradient-to-g from-[#5b585f] to-[#2d2a33] h-10 w-10 rounded-full border p-2 transition duration-400 group-hover:border-[#30FF7C] group-hover:shadow-[#30FF7C] group-hover:shadow-sm" />
              <h3 className="text-xl font-semibold text-gray-800">
                DYNAMIC TRAINING PROGRAMS
              </h3>
              <p className="text-gray-700">
                Elevate your skills with our comprehensive training modules, accessible on the website, designed to keep you ahead in the dynamic world of robotics.
              </p>
            </div>
            <div className="flex shadow-md hover:shadow-green flex-col justify-between p-5 transition duration-400 bg-white bg-opacity-20 rounded-3xl card-hover group space-y-5">
              <FontAwesomeIcon icon={faChalkboardTeacher} className="text-[#322e37] bg-gradient-to-g from-[#5b585f] to-[#2d2a33] h-10 w-10 rounded-full border p-2 transition duration-400 group-hover:border-[#30FF7C] group-hover:shadow-[#30FF7C] group-hover:shadow-sm" />
              <h3 className="text-xl font-semibold text-gray-800">
                BOUNDARY-DEFINING CLASSES
              </h3>
              <p className="text-gray-700">
                Explore our innovative classes breaking traditional barriers, featured on our website to encourage limitless learning and creativity.
              </p>
            </div>
            <div className="flex shadow-md hover:shadow-green flex-col justify-between p-5 transition duration-400 bg-white bg-opacity-20 rounded-3xl card-hover group space-y-5">
              <FontAwesomeIcon icon={faTools} className="text-[#322e37] bg-gradient-to-g from-[#5b585f] to-[#2d2a33] h-10 w-10 rounded-full border p-2 transition duration-400 group-hover:border-[#30FF7C] group-hover:shadow-[#30FF7C] group-hover:shadow-sm" />
              <h3 className="text-xl font-semibold text-gray-800">
                QUALITY EQUIPMENT
              </h3>
              <p className="text-gray-700">
                The sea freight service has grown consider ably in recent years. We spend time getting to know.
              </p>
            </div>
            <div className="flex shadow-md hover:shadow-green flex-col justify-between p-5 transition duration-400 bg-white bg-opacity-20 rounded-3xl card-hover group space-y-5">
              <FontAwesomeIcon icon={faHandsHelping} className="text-[#322e37] bg-gradient-to-g from-[#5b585f] to-[#2d2a33] h-10 w-10 rounded-full border p-2 transition duration-400 group-hover:border-[#30FF7C] group-hover:shadow-[#30FF7C] group-hover:shadow-sm" />
              <h3 className="text-xl font-semibold text-gray-800">
                COMMUNITY OUTREACH INITIATIVES
              </h3>
              <p className="text-gray-700">
                Discover how Gbot extends its passion beyond campus through our outreach programs, connecting with schools and communities, detailed on our digital platform.
              </p>
            </div>
            <div className="flex shadow-md hover:shadow-green flex-col justify-between p-5 transition duration-400 bg-white bg-opacity-20 rounded-3xl card-hover group space-y-5">
              <FontAwesomeIcon icon={faRobot} className="text-[#322e37] bg-gradient-to-g from-[#5b585f] to-[#2d2a33] h-10 w-10 rounded-full border p-2 transition duration-400 group-hover:border-[#30FF7C] group-hover:shadow-[#30FF7C] group-hover:shadow-sm" />
              <h3 className="text-xl font-semibold text-gray-800">
                EFFICIENT LABS
              </h3>
              <p className="text-gray-700">
                Discover how Gbot extends its passion beyond campus through our outreach programs, connecting with schools and communities, detailed on our digital platform.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Features;
