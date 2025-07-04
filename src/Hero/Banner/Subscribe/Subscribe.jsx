import React from 'react'

function Subscribe (){
  return (
    <div
      data-aos="fade-up" className='container backdrop-blur-sm py-10 bg-yellow-500'>
        <div className="space-y-6 max-w-xl mx-auto relative">
            <h1 className='text-2xl text-center sm:text-left sm:text-4xl font-semibold'>Get Notified about new Products</h1>
            <input data-aos="fade-up" type="email" placeholder="Enter your email" className="w-full p-3 border border-gray-300 rounded top-0" />
        </div>
    </div>
  )
}

export default Subscribe;