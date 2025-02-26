import React from "react";

const Hero1 = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-between px-6 md:px-44 py-10 md:py-15 bg-gray-50 h-auto md:h-screen mt-10 md:mt-28">
      <div className="md:w-1/2 text-center md:text-left">
        <h2 className="text-2xl md:text-3xl font-semibold text-gray-800">
          The unseen of spending three years at Pixelgrade
        </h2>
        <p className="text-gray-600 mt-4 text-sm md:text-base">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet
          justo ipsum. Sed accumsan quam vitae est varius fringilla.
          Pellentesque placerat vestibulum lorem sed porta.
        </p>
        <button className="mt-6 bg-green-500 text-white px-6 py-3 rounded-lg font-medium hover:bg-green-600 transition">
          Learn More
        </button>
      </div>

      <div className="md:w-1/2 mt-6 md:mt-0 flex justify-center md:p-16">
        <img src="/Frame.png" alt="Illustration" className="w-full max-w-xs md:max-w-md" />
      </div>
    </div>
  );
};

export default Hero1;
