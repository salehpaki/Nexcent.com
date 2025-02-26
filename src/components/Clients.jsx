import React from 'react'

const Clients = () => {
  return (
    <div className='text-center font-sans font-bold text-6xl mt-6'>
      Our Clients
      <p className='font-sans font-normal text-3xl py-10'>
      We have been working with some Fortune 500+ clients
      </p>
      <div className="flex flex-wrap items-center justify-center space-x-10 py-20 bg-white gap-20">
      <img src="/Logo1.png" alt="Logo 1" className="h-10" />
      <img src="/Logo2.png" alt="Logo 2" className="h-10" />
      <img src="/Logo3.png" alt="Logo 3" className="h-10" />
      <img src="/Logo4.png" alt="Logo 4" className="h-10" />
      <img src="/Logo5.png" alt="Logo 5" className="h-10" />
      <img src="/Logo6.png" alt="Logo 6" className="h-10" />
    </div>

    <div className='text-5xl font-semibold text-gray-800 text-center py-4 '>
        <h1>Manage your entire community <br/> in a single system</h1>
    </div>
    <div className='font-normal py-1 text-3xl '> Who is Nextcent suitable for?</div>


    <div className='flex flex-wrap items-center justify-center gap-10 py-9'>
    <div className="bg-white shadow-lg rounded-xl p-6 text-center w-72 hover:bg-gray-50">
      <div className="bg-green-100 p-3 rounded-lg inline-block">
        <img src="/Icon.png" alt="Membership Icon" className="h-8 w-8" />
      </div>
      <h3 className="text-xl font-semibold text-gray-800 mt-4">
        Membership Organisations
      </h3>
      <p className="text-gray-500 mt-2 text-sm">
        Our membership management software provides full automation of membership renewals and payments.
      </p>
    </div>

    <div className="bg-white shadow-lg rounded-xl p-6 text-center w-72 hover:bg-gray-50">
      <div className="bg-green-100 p-3 rounded-lg inline-block">
        <img src="/Icon.png" alt="Membership Icon" className="h-8 w-8" />
      </div>
      <h3 className="text-xl font-semibold text-gray-800 mt-4">
      National Associations
      </h3>
      <p className="text-gray-500 mt-2 text-sm">
      Our membership management software provides full automation of membership renewals and payments      </p>
    </div>


    <div className="bg-white shadow-lg rounded-xl p-6 text-center w-72 hover:bg-gray-50">
      <div className="bg-green-100 p-3 rounded-lg inline-block">
        <img src="/Icon.png" alt="Membership Icon" className="h-8 w-8" />
      </div>
      <h3 className="text-xl font-semibold text-gray-800 mt-4">
        Membership Organisations
      </h3>
      <p className="text-gray-500 mt-2 text-sm">
        Our membership management software provides full automation of membership renewals and payments.
      </p>
    </div>

    </div>
    </div>
  )
}
export default Clients
