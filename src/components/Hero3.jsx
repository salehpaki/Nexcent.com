import React from 'react'

const Hero3 = () => {
  return (
    <div className="bg-white p-8 rounded-lg flex flex-col md:flex-row items-center justify-between">
      {/* Left Side - Image */}
      <div className="md:w-1/2 flex justify-center">
        <img
          src="/22.png"
          alt="Signup Illustration"
          className="max-w-full"
        />
      </div>

      {/* Right Side - Text Content */}
      <div className="md:w-1/2 text-center md:text-left mt-6 md:mt-0">
        <h2 className="text-2xl md:text-3xl font-semibold text-gray-800">
          How to design your site footer like <br className="hidden md:block" />
          we did
        </h2>
        <p className="text-gray-600 mt-3">
        Donec a eros justo. Fusce egestas tristique ultrices. Nam tempor, augue nec tincidunt molestie, massa nunc varius arcu, at scelerisque elit erat a magna. Donec quis erat at libero ultrices mollis. In hac habitasse platea dictumst. Vivamus vehicula leo dui, at porta nisi facilisis finibus. In euismod augue vitae nisi ultricies, non aliquet urna tincidunt. Integer in nisi eget nulla commodo faucibus efficitur quis massa. Praesent felis est, finibus et nisi ac, hendrerit venenatis libero. Donec consectetur faucibus ipsum id gravida.
        </p>
        <button className="mt-4 px-6 py-3 bg-green-500 text-white font-semibold rounded-lg hover:bg-green-600">
          Learn More
        </button>
      </div>
    </div>
  )
}

export default Hero3
