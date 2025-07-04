import React from 'react'
import { IoSearch } from "react-icons/io5";
import { FaCartShopping } from "react-icons/fa6";
import DarkMode from './DarkModde'; 
import { FaCaretDown } from "react-icons/fa";


const Menu = [
    
    {
        id:1,
        name:" Home",
        link:"/#"
    },
    {
        id:2,
        name:"Top Rated",
        link:"/#Service"
    },
    {
        id:3,
        name:"Kids Wear",
        link:"/#"
    }
]
const DropdownLinks = [
    {
        name:"Trending Products",
        link:"/#",
    },
    {
        name:"Best selling",
        link:"/#",
    },
    {
        name:"Top Rated",
        link:"/#",
    },
]

import Riy from './Riy.png'
function NavBar(){
  return (
    <div className="shadow-md bg-red-200 dark-bg-500 dark:text-white">
        <div className="bg-primary/40 py-3 sm:py-0 ">
            <div className=' container  flex justify-between items-center'>
                <div>
                    <a href="#" className="font-bold text-2xl sm:text-3xl flex gap-2">
                        <img className='w-1/40 text:white uppercase ml-5' src={Riy} alt="Logo"/>
                    shopsy</a>
                </div>
                <div className='relative group hidden sm:block'>
                    <input type='text' placeholder='search' className="w-[200px] sm:w=[200px] group-hover:w-[300px] transition-all duration-300 rounded-full border border-gray-700 px-2 py-1 focus:outline-none focus:border-1 focus:border-primarydark:border-gray-500 drak:gray-800 bg-white-300" />
                    <IoSearch className='text-gray-700 group-hover:text-primary absolute top-1/2 -translate-y-1/2 right-3'/>
                </div>
                <button onclick={() => alert("Ordering not available yet")} className='bg-gradient-to-r from-primary to-secondary transition-all duration-200 bg-red-200 text-white py-1 px-4 rounded-full flex items-center gap-3 group'>
                <span className='group-hover:block hidden transition-all duration-200'>Order
                </span>
                <FaCartShopping className='text-xl text-white drop-shadow-sm cursor-pointer'/>
            </button>
            <div>
                <DarkMode/>

            </div>
            </div>
            </div>
        <div className='flex justify-center bg-gray-500'>
            <ul className="sm:flex hidden items-center gap-4">
                {
                    Menu.map((data)=>(
                        <li key={data.id}>
                            <a href={data.link} className='inline-block px-4 hover:text-primary duration-200'>{data.name}</a>
                        
                    </li>
                    ))
                }
                <li className='group relative cursor-pointer'>
                    <a href="#" className='flex items-center gap-[2px] py-2'>
                        Trending Product
                        <span>
                        <FaCaretDown className="transition-all duration-200 group-hover:rotate-180"/>
                        </span>
                    </a>
                    <div className='absolute z-[9999] hidden group-hover:block w-[150px] rounded-md bg-gray-200 p-2 text-black shadow-md'>
                        <ul>
                           {DropdownLinks.map((data) => (
                            <li key={data.id}>
                            <a href={data.link} className='inline-block w-full rounded-md p-2 hover:bg-primary/20'>
                                {data.name}
                            </a>
                            </li>

                           ))}
                        </ul>
                    </div>
                </li>
            </ul>
        </div>
        </div>

  )
}

export default NavBar