import React from 'react'
import Black from '../Assets/Images/black.png'
import RedBlack from '../Assets/Images/redBlack.png'
import Blue from '../Assets/Images/blue.png'
import NightBlack from '../Assets/Images/nightBlack.png'
import TwilightGray from '../Assets/Images/twilightGray.png'
import Bag from '../Assets/Icons/shoppingBag.png'
import Style from '../Assets/Icons/productLogo.png'

const Card = ({image , name , price}) =>(
    <div className='flex flex-col justify-center items-center'>
        <img src={image} alt='' className='relative w-24 top-4 transition-all duration-1000 transform hover:scale-125 hover:rotate-12 '/>
        <div className='bg-gray-900 flex flex-row justify-center items-center gap-6 p-6 rounded-lg'>
            <div>
                <p>{name}</p>
                <p>{price}</p>
            </div>
            <img src={Bag} alt='' className='p-2 hover:bg-black rounded-md'/>
        </div>
    </div>
)

function SectionSix() {
  return (
    <div className='my-8 px-4 py-7 md:px-14 md:py-8 lg:px-20 lg:py-9 2xl:px-56 flex flex-col justify-center items-center gap-10 2xl:my-14'>
        <img src={Style} alt='' className='w-64 md:w-80 lg:w-[22rem] 2xl:w-[28rem]'/>
        <div className='grid grid-cols-2 gap-14 justify-items-center content-center md:grid-cols-3 my-4 mx-3 px-5 md:px-14  md:my-5 lg:px-20 2xl:px-56'>
            <Card image={Black} name='Black' price='N299K'/>
            <Card image={RedBlack} name='Red' price='N299K'/>
            <Card image={NightBlack} name='Orange' price='N299K'/>
            <Card image={Blue} name='Blue' price='N299K'/>
            <Card image={TwilightGray} name='Gold' price='N299K'/>
        </div>
    </div>
  )
}

export default SectionSix;