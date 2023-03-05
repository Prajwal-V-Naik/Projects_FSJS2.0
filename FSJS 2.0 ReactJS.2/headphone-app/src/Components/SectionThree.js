import React from 'react'
import Specs from '../Assets/Images/specsImage.png'
import SpecsLogo from '../Assets/Icons/specsLogo.png'

function SectionThree() {
  return (
    <div className='my-4 px-4 py-7 flex flex-col justify-center items-center gap-10 md:px-14 md:py-8 lg:px-20 lg:py-9 2xl:px-56'>
        <div>
            <img src={SpecsLogo} alt='specs'/>
        </div>
        <div>
            <div>

            </div>
            <div>
                <img src={Specs} alt='specs' className='transition-all duration-1000 transform hover:rotate-180 hover:scale-125 2xl:w-[25rem]'/>
            </div>
        </div>
    </div>
  )
}

export default SectionThree;