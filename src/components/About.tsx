import React from 'react';
import Image from 'next/image';

const AboutPage: React.FC = () => {
    return (
        <div className="py-20 bg-opacity-50 bg-emerald-50">
            <div className="mt-3 max-w-4xl mx-auto px-4 py-12">
                <div className="mt-6 mb-5 text-center">
                    <div className="inline-block px-3 py-1 text-sm rounded-lg bg-emerald-100 bg-opacity-60 text-emerald-500 hover:cursor-pointer hover:bg-opacity-80">
                        Technology
                    </div>
                </div>
                <h1 className="mt-4 text-3xl font-medium text-center bg-gradient-to-r from-[#1D976C] to-[#38ef7d] bg-clip-text text-transparent">
                    About Us
                </h1>
                <div className="flex flex-col items-center justify-center md:justify-start space-y-4 md:space-y-0 md:space-x-8 mt-6">
                    <div className="max-w-md md:width-auto">
                        <Image
                            src="/photos/image.png"
                            alt="About Us Image"
                            className="rounded-lg shadow-md"
                            width={740}
                            height={494}
                        />
                    </div>
                    <div className="px-7 text-size-xl md:text-left">
                        <p className="text-lg text-gray-900">
                            Hello!
                        </p>
                        <p className="mt-4 text-lg text-gray-700">
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sunt corrupti doloremque architecto, unde provident perspiciatis quidem expedita exercitationem maiores vero iure totam hic placeat, temporibus animi libero dolore sapiente numquam.
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta placeat amet aliquam. Similique illo voluptatibus, labore magnam cum dolores voluptas excepturi inventore laboriosam odio repudiandae, alias distinctio. Rem, dignissimos quam!
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutPage;
