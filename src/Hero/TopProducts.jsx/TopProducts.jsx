import React from 'react'
import { FaStar } from 'react-icons/fa';
import Women from './women.png'
import women1 from './women1.png'
import Women2 from './Women2.png'
import Women6 from './Women6.png'
import women7 from './women7.png';
const ProductsData = [
    {
        id:1,
        img:Women,
        title:"women Ethnic",
        rating: "4.5",
        color:"Red",
        aosDElay: "fade-up",
    },
    {
        id:2,
        img:women1,
        title:"women Ethnic",
        rating: "4.5",
        color:"brown",
        aosDElay: "fade-up",
    },
    {
        id:3,
        img:Women6,
        title:"women Ethnic",
        rating: "4.8",
        color:"yellow", 
        aosDElay: "fade-up",
    },
     {
        id:4,
        img:women7,
        title:"women Ethnic",
        rating: "4.8",
        color:"yellow", 
        aosDElay: "fade-up",
    },
    {
        id:5,
        img:Women2,
        title:"women Ethnic",
        rating: "4.8",
        color:"yellow", 
        aosDElay: "fade-up",
    }
]
function  TopProducts (){
  return (
    <div className='mt-14 mb-12'>
        <div className='container '>
            <div className='text-center mb-10 max-w-[600] mx-auto'>
                <p data-aos="fade-up" className='text-sm text-primary '>Top Best Products for Women </p>
                <h1 data-aos="fade-up" className='text-3xl font-bold'> Best Products</h1>
                <p data-aos="fade-up" className='text-xs text-gray-400'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis, aut adipisci!</p>
            </div>
            <div>
                <div className='grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 place-items-center gap-5'>
               {ProductsData.map((data) => (
                <div key={data.id} data-aos="fade-up" data-aos-delay={data.aosDelay} className='space-y-3'>
                  <img src={data.img} alt=""
                  className='h-[220px] w-[150px] object-cover rounded-md'/>
                   <div>
                    <h3 className='font-semibold'>{data.title}</h3>
                    <p className='text-sm text-gray-500'>{data.color}</p>
                    <div className='flex items-center gap-1'>
                        <FaStar className="text-yellow-400"/>
                    <span>{data.rating}</span>
                    </div>
                   </div>
                </div>
               ))}
                </div>
            </div>
        </div>
    </div>
  )
}

export default TopProducts;