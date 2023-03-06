import React from 'react'
import Specs from '../Assets/Images/specsImage.png'
import SpecsLogo from '../Assets/Icons/specsLogo.png'
import Bluetooth from '../Assets/Icons/bluetooth.png'
import Battery from '../Assets/Icons/battery.png'
import Load from '../Assets/Icons/charger.png'
import Microphone from '../Assets/Icons/mic.png'

function SectionThree() {
  return (
    <div className='my-14 px-4 py-7 flex flex-col justify-center items-center gap-10 md:px-14 md:py-8 lg:px-20 lg:py-9 2xl:px-56'>
        <div>
            <img src={SpecsLogo} alt='specs' className='w-52 md:w-72 lg:w-80 2xl:w-98'/>
        </div>
        <div className='my-4 flex flex-col justify-center items-center gap-16 2xl:flex-row 2xl:gap-52'>
            <div className='flex flex-row justify-center items-center flex-wrap gap-12 2xl:flex-col'>
              <div className='m-0 flex flex-col justify-center items-start gap-1 w-32 '>
                <img src={Bluetooth} alt='' className='animate-pulse'/>
                <p className='font-semibold'>Connection</p>
                <p className='font-light text-gray-400 text-xs'>Bluetooth v5.2</p>
              </div>
              <div className='m-0 flex flex-col justify-center items-start gap-1 w-32 2xl:mr-20'>
                <img src={Battery} alt='' className='animate-pulse'/>
                <p className='font-semibold'>Battery</p>
                <p className='font-light text-gray-400 text-xs'>Duration 40h</p>
              </div>
              <div className='m-0 flex flex-col justify-center items-start gap-1 w-32 2xl:mr-20'>
                <img src={Load} alt='' className='animate-pulse'/>
                <p className='font-semibold'>Load</p>
                <p className='font-light text-gray-400 text-xs'>Fast charge 4.2-AAC</p>
              </div>
              <div className='m-0 flex flex-col justify-center items-start gap-1 w-32'>
                <img src={Microphone} alt='' className='animate-pulse'/>
                <p className='font-semibold'>Microphone</p>
                <p className='font-light text-gray-400 text-xs'>Supports Apple Siri and Google</p>
              </div>
            </div>
            <div>
              <img src={Specs} alt='specs' className='transition-all duration-1000 transform hover:-rotate-45 hover:scale-75 md:hover:rotate-180 md:hover:scale-125 2xl:w-[25rem]'/>
            </div>
        </div>
    </div>
  )
}

export default SectionThree;