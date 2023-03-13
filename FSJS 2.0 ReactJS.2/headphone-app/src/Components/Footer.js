import React from 'react'
import FootLogo from '../Assets/Images/beatsLogo.png'
import Send from '../Assets/Icons/rightArrow.png'
import FaceBook from '../Assets/Icons/facebook.png'
import Twitter  from '../Assets/Icons/twitter.png'
import Instagram from '../Assets/Icons/instagram.png'
import LinkedIn from '../Assets/Icons/linkedin.png'

function Footer() {
  return (
    <div className='my-4 mx-3 px-5 py-14 md:px-0 md:py-16 md:my-14 lg:gap-16 2xl:px-60 2xl:justify-between flex flex-col-reverse justify-center items-center gap-10 md:flex-row md:gap-12'>
        <div>
            <img src={FootLogo} alt='' />
        </div>
        <div className='flex flex-col justify-center items-center gap-1 2xl:basis-2'>
            <h3 className='text-2xl font-bold text-red-300 underline'>Products</h3>
            <p className='hover:underline'>HeadPhones</p>
            <p className='hover:underline'>EarPhones</p>
            <p className='hover:underline'>EarBuds</p>
            <p className='hover:underline'>Accessories</p>
        </div>
        <div className='flex flex-col justify-center items-center gap-1 2xl:basis-2'>
            <h3 className='text-2xl font-bold text-red-300 underline'>SUPPORT</h3>
            <p className='hover:underline'>Product Help</p>
            <p className='hover:underline'>Register</p>
            <p className='hover:underline'>Updates</p>
            <p className='hover:underline'>Provides</p>
        </div>
        <div className='2xl:basis-1/3 '>
            <form className='flex flex-col justify-center items-center 2xl:flex-row gap-3 p-4 bg-[#333333] rounded-lg'>
                <input type='email' placeholder='Email' className='p-2 rounded-lg text-black'></input>
                <button className='flex flex-row justify-center items-center gap-3 p-2 hover:bg-black rounded-lg'><img src={Send} alt='' className='w-6'/>Subscribe</button>
            </form>
            <div className='mt-2 flex flex-row justify-center items-center gap-4'>
                <img src={FaceBook} alt='' className='w-10'/>
                <img src={Twitter} alt='' className='w-10'/>
                <img src={Instagram} alt='' className='w-10'/>
                <img src={LinkedIn} alt='' className='w-10'/>
            </div>
        </div>
    </div>
  )
}

export default Footer