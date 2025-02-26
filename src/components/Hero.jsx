import React from "react";

const Hero = () => {
  return (
    <div>
      <section className="flex flex-col md:flex-row items-center justify-between px-10 md:px-40 py-10 md:py-30 bg-gray-50 h-auto md:h-screen">
        <div className="max-w-lg mb-8">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-800">
            Lessons and insights <br />
            <span className="text-green-500">from 8 years</span>
          </h1>
          <p className="text-gray-600 mt-4">
            Where to grow your business as a photographer: site or social media?
          </p>
          <button className="mt-6 px-6 py-3 bg-green-500 text-white font-semibold rounded-md hover:bg-green-600">
            Register
          </button>
        </div>
        <div className="mt-10 md:mt-0">
          <img
            src="/Illustration.png"
            alt="Hero Illustration"
            className="w-full max-w-xs md:max-w-md"
          />
        </div>
        <div className="absolute bottom-6 flex space-x-2"></div>
      </section>
    </div>
  );
};

export default Hero;
