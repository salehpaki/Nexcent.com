import React from 'react';

const Hero4 = () => {
  return (
    <div className="bg-gray-100 p-6 md:p-10 rounded-lg flex flex-col md:flex-row items-center md:items-start">
      {/* Left Side - Image */}
      <div className="w-full md:w-1/3 flex justify-center">
        <img
          src="/image9.png"
          alt="Tesla Logo"
          className="w-60 md:w-80 h-auto rounded-xl shadow-lg"
        />
      </div>

      {/* Right Side - Text Content */}
      <div className="w-full md:w-2/3 md:ml-8 text-center md:text-left mt-6 md:mt-0">
        <p className="text-gray-700 text-sm md:text-base leading-relaxed">
          Maecenas dignissim justo eget nulla rutrum molestie. Maecenas lobortis sem dui, vel rutrum risus tincidunt ullamcorper. Proin eu enim metus. Vivamus sed libero ornare, tristique quam in, gravida enim. Nullam ut molestie arcu, at hendrerit elit. Morbi laoreet elit at ligula molestie, nec molestie mi blandit. Suspendisse cursus tellus sed augue ultrices, quis tristique nulla sodales. Suspendisse eget lorem eu turpis vestibulum pretium. Suspendisse potenti. Quisque malesuada enim sapien, vitae placerat ante feugiat eget. Quisque vulputate odio neque, eget efficitur libero condimentum id. Curabitur id nibh id sem dignissim finibus ac sit amet magna.
        </p>

        {/* Customer Info */}
        <div className="mt-4">
          <h4 className="text-green-600 font-semibold">Tim Smith</h4>
          <p className="text-gray-500 text-sm">British Dragon Boat Racing Association</p>
        </div>

        {/* Logos Section */}
        <div className="flex flex-wrap items-center mt-6 gap-6 justify-center md:justify-start">
          {[1, 2, 3, 4, 5].map((num) => (
            <img key={num} src={`/Logo${num}.png`} alt={`Logo ${num}`} className="h-10" />
          ))}
          <a href="#" className="text-green-600 font-semibold flex items-center gap-1">
            Meet all customers →
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero4;
