import React from 'react';

const Coming: React.FC = () => {
    return (
        <div className="py-20 bg-opacity-50 bg-emerald-50">
        <div className="mt-3 max-w-4xl mx-auto px-4 py-12">
            <h1 className="mt-4 text-3xl font-medium text-center bg-gradient-to-r from-[#1D976C] to-[#38ef7d] bg-clip-text text-transparent">
           !!! Currently Closed !!!
            </h1>
            <div className="flex flex-col  items-center justify-center md:justify-start space-y-4 md:space-y-0 md:space-x-8 mt-6">
                <div className="max-w-md">
                    <img
                        src="https://img.freepik.com/free-vector/coming-soon-web-page-template-with-megaphone-design_1017-50854.jpg?t=st=1720089508~exp=1720093108~hmac=ba62fc5993473f1b35895da7c49d98a15c535afa2bd232815de3efb14e8c625f&w=740"
                        alt="coming soon"
                        className="rounded-2xl shadow-md"
                    />
                </div>
            </div>
        </div>
    </div>
    );
};

export default Coming;
