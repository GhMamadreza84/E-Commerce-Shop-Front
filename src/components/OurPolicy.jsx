import React from 'react'
import { assets } from '../assets/assets'

const OurPolicy = () => {
  return (
    <div className='flex flex-col justify-around gap-12 py-20 text-xs text-center text-gray-700 sm:flex-row sm:gap-2 sm:text-sm md:text-base'>

      <div className="">
        <img className='w-12 m-auto mb-5 ' src={assets.exchange_icon}  alt="exchangeicon" />
        <p className='font-semibold'> Easy Exchange Policy</p>
        <p className='text-gray-400'>We offer hassle free exchange policy</p>
      </div>
      
    </div>
  )
}

export default OurPolicy
