import React from 'react'
import women4 from './women4.png'
import { GrSecure } from "react-icons/gr";
import { IoFastFood } from "react-icons/io5";



const Banner = () => {
  return (
    <div className='min-h-[600px] flex justify-center items-center py-12 sm:py-0'>
        <div className='container'>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 items-center">
              <div data-aos="zoom-in">
                <img src={women4} alt=""
                className="max-w-[400px] h-[300px] w-full mx-auto drop-shadow-[-10px_10px_12px_rgba(0,0,0,1)] object-cover"/>
              
              </div>
              <div className='flex flex-col justify-center gap-6 sm:pt-0'>  
                <h1 data-aos="fade-up" className='text-3xl sm:text-4xl font-bold'>Winner Sale Upto 50% off</h1>
              <p data-aos="fade-up" className='text-sm text-gray-500 tracking-wide leading-5'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Impedit, molestias!</p>
             <div>
                <div className='flex items-center gap-4'>
                    <GrSecure className='text-4xl h-12 w-12 shadow-sm p-4 rounded-full bg-orange-100 dark:bg-orange-400'/>
                    <p>Quality Products</p>
                    <IoFastFood className='text-4xl h-12 w-12 shadow-sm p-4 rounded-full  bg-orange-100 dark:bg-orange-400'/>
                    <p>Fast Delivery</p>
                </div>
             </div>
              </div>
            </div>

        </div>
    </div>
  )
}

export default Banner