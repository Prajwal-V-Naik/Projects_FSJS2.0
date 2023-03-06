import React from 'react'
import Bag from '../Assets/Icons/shoppingBag.png'
import Foldset from '../Assets/Images/buyNowSectionImage.png'
function SectionFive() {
  return (
    <div className='my-4 mx-3 px-5 py-14 md:px-14 md:py-16 md:my-14 lg:px-20 2xl:px-56 flex flex-col justify-center items-center gap-14 bg-[#333333] rounded-2xl hover:bg-zinc-600 md:flex-row 2xl:mx-60 2xl:my-20 '>
        <div className='mb-5 flex flex-col justify-center items-center gap-2'>
            <h1 className='text-center font-bold text-lg lg:text-2xl'>Immerse yourself in your music</h1>
            <p className='text-center font-light text-sm lg:text-lg'>Buy Now, up to 40% off</p>
            <button className='flex flex-row justify-center gap-2 bg-black rounded-lg mx-1 px-4 py-2'><img src={Bag} alt=''/>Buy Now</button>
        </div>
        <div>
            <img src={Foldset} alt='' className='transition-all duration-1000 transform hover:rotate-90 md:w-64 lg:w-80 2xl:w-98'/>
        </div>
    </div>
  )
}

export default SectionFive