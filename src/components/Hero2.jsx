import React from 'react'

const Hero2 = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-between px-6 md:px-20 py-10 md:py-20 bg-white">
      {/* Left Side - Text Content */}
      <div className="md:w-1/2 text-center md:text-left">
        <h2 className="text-2xl md:text-3xl font-semibold text-gray-800">
          Helping a local <span className="text-green-500"><br/> business reinvent itself</span>
        </h2>
        <p className="text-gray-600 mt-2">We reached here with our hard work and dedication</p>
      </div>

      {/* Right Side - Stats */}
      <div className="md:w-1/2 grid grid-cols-2 gap-6 mt-6 md:mt-0">
        <div className="flex items-center space-x-3">
          <img src="/Vector.png" alt="Members" className="w-6 h-6" />
          <div>
            <p className="text-xl font-semibold text-gray-800">2,245,341</p>
            <p className="text-gray-500 text-sm">Members</p>
          </div>
        </div>

        <div className="flex items-center space-x-3">
          <img src="/Icon.png" alt="Clubs" className="w-6 h-6" />
          <div>
            <p className="text-xl font-semibold text-gray-800">46,328</p>
            <p className="text-gray-500 text-sm">Clubs</p>
          </div>
        </div>

        <div className="flex items-center space-x-3">
          <img src="/Vector1.png" alt="Event Bookings" className="w-6 h-6" />
          <div>
            <p className="text-xl font-semibold text-gray-800">828,867</p>
            <p className="text-gray-500 text-sm">Event Bookings</p>
          </div>
        </div>

        <div className="flex items-center space-x-3">
          <img src="/Vector2.png" alt="Payments" className="w-6 h-6" />
          <div>
            <p className="text-xl font-semibold text-gray-800">1,926,436</p>
            <p className="text-gray-500 text-sm">Payments</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero2
