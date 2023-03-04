import React from 'react'
import Headset from '../Assets/Images/mainImage.png'
import OnEar from '../Assets/Images/onEar.png'
import Bag from '../Assets/Icons/shoppingBag.png'

const SectionOne = () => (
    <div className='px-4 py-7 flex flex-col justify-center items-center  md:px-14 md:py-8 md:flex-row md:gap-24 lg:px-20 lg:py-9 2xl:px-56 lg:gap-36 2xl:gap-[29rem]'>
        {/* Main image part */}
        <div className='relative -top-36 transition-all duration-500 transform hover:scale-110 hover:translate-y-32 md:-right-14 lg:-top-40 lg:hover:translate-y-20 lg:-right-16 2xl:-right-56'> {/* z-0 */}
            <img src={Headset} alt='mainImage' className='w-56 md:w-[40rem] lg:w-[37rem]'/>
        </div>
        <div className='flex flex-col gap-4 md:mt-20 2xl:gap-7 md:mt-24'>
            <img src={OnEar} alt='OnEar' className='w-96 md:w-64 -mt-3 animate-pulse hover:animate-none lg:w-72 2xl:w-8/12'/>
            <h1 className='text-5xl ml-1 2xl:text-6xl'>Beats 3</h1>
            <p className='text-xl ml-1 font-bold 2xl:text-2xl'>Overview</p>
            <p className='text-md text-left ml-1 2xl:text-lg'>Enjoy award-winning Beats sound with wireless listening freedom and a sleek, streamlined design with comfortable padded earphones, delivering first-rate playback.</p>
            <button className='flex justify-center gap-2 mx-1 px-4 py-2 bg-[#333333] rounded-lg hover:bg-slate-600 hover:shadow-lg hover:shadow-slate-500/20'>
                <img src={Bag} alt='Bag'/>
                <p className='text-md 2xl:text-lg'>Add to Bag <span className='font-bold'>N399K</span></p>
            </button>
        </div>
    </div>
)

export default SectionOne