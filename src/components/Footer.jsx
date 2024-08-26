import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
  return (
    <div>
      <div className="flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm">

        <div className="">
          <img className='w-32 mb-5' src={assets.logo} alt="logo" />
          <p className='w-full text-gray-600 md:w-2/3 '>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem fuga cum ea ducimus est dolor.
          </p>
        </div>

        <div className="">
          <p className='mb-5 text-xl font-medium '>COMPANY</p>
          <ul className='flex flex-col gap-1 text-gray-600 '>
            <li>Home</li>
            <li>About us</li>
            <li>َDelivery</li>
            <li>Privacy policy</li>
          </ul>
        </div>

        <div className="">
          <p className='mb-5 text-xl font-medium'>GET IN TOUCH </p>
          <ul className='flex flex-col gap-1 text-gray-600 '>
            <li>+98-954-153-245</li>
            <li>contact@glowmarket.com</li>
          </ul>               
        </div>

      </div>

        <div className="">
          <hr />
          <p className='py-5 text-sm text-center'>Copyright 2024@ glowmarket.com - All Right Reserved</p>
        </div>
    </div>
  )
}

export default Footer
