import React from 'react'
import {IoMdSearch} from 'react-icons/io'
import {FaCaretDown, FaCartShopping} from 'react-icons/fa6'
import DarkMode from './DarkMode'

const MenuLinks = [
    {
        id: 1,
        name: 'Home',
        link: '/#',
    },
    {
        id: 2,
        name: 'Shop',
        link: '/#shop',
    },
    {
        id: 3,
        name: 'About',
        link: '/about',
    },
    {
        id: 4,
        name: 'Contact',
        link: '/#contact',
    }
]
const DropdownLinks = [
    {
        id: 1,
        name: "Trending Products",
        link: "/#",
    },
    {
        id: 2,
        name: "Best Selling",
        link: "/#",
    },  
    {
        id: 3,
        name: "Top Rated",
        link: "/#",
    }
]

const Navbar = () => {
  return (
    <div className='bg-white py-2 dark:bg-gray-900 dark:text-white duration-200 relative z-40'>
      <div className="container flex justify-between items-center">
        {/* logo & links section */}
        <div className='flex gap-4 items-center'>
            <a className='text-primary font-semibold tracking-widest text-2xl uppercase sm:text-3xl' href="#">
                Gading Acc
            </a>
            {/* items menu */}
            <div className='hidden lg:block'>
                <ul className='flex items-center gap-4'>
                    {
                        MenuLinks.map((data, index) => (
                            <li key={index}>
                                <a className='inline-block px-4 font-semibold text-gray-500 hover:text-black dark:hover:text-white duration-200' href={data.link}>{" "}{data.name}</a>
                            </li>
                        ))}
                        {/* dropdown */}
                        <li className='relative group cursor-pointer'>
                            <a href="#" className='flex items-center gap-[2px] font-semibold text-gray-500 dark:hover:text-white py-2'>
                                Quick Links
                                <span>
                                    <FaCaretDown className='group-hover:rotate-180 duration-300' />
                                </span>
                            </a>
                            {/* dropdown links */}
                            <div className='absolute z-[9999] hidden group-hover:block w-[200px] rounded-md bg-white shadow-md dark:bg-gray-900 p-2 dark:text-white '>
                                <ul className='space-y-2'>
                                    {
                                        DropdownLinks.map((data, index) => (
                                            <li>
                                                <a className='text-gray-500 hover:text-black dark:hover:text-white duration-200 p-2 hover:bg-primary/20 inline-block w-full rounded-md font-semibold' href={data.link}>{data.name}</a>
                                            </li>
                                        ))
                                    }
                                </ul>
                            </div>
                        </li>
                </ul>
            </div>
        </div>

        {/* navbar right section */}
        <div className='flex justify-between items-center gap-4'>
             {/* seacrh bar */}
                <div className='relative group hidden sm:block'>
                    <input type="text" placeholder='Search' className='search-bar' />
                    <IoMdSearch className='text-xl text-gray-600 group-hover:text-primary dark:text-gray-400 absolute top-1/2 -translate-y-1/2 right-3 duration-200'/>
                </div>
            {/* order button section */}
            <button className='relative p-3'>
                <FaCartShopping className='text-xl text-gray-600 dark:text-gray-400' />
            <div className='w-4 h-4 bg-red-500 text-white rounded-full absolute top-0 right-0 flex items-center justify-center text-xs'>
                4
            </div>
            </button>
             {/* dark mode section */}
             <div>
                <DarkMode />
             </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar
