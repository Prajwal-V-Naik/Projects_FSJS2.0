import React from 'react'
import BeatsLogo from '../Assets/Images/beatsLogo.png';

function NavBar() {
  return (
    <div className='px-4 py-7 flex justify-between align-center md:px-14 md:py-8 lg:px-20 lg:py-9 2xl:px-56'>
        <img src={BeatsLogo} alt='beatsLogo' className='py-2 w-11'/>
        <ul className='flex pt-3 gap-5 md:gap-6 lg:gap-9 2xl:gap-20'>
            <li className='hidden py-2 cursor-pointer md:text-lg 2xl:text-xl md:block hover:text-slate-500'>Home</li>
            <li className='hidden py-2 cursor-pointer md:text-lg 2xl:text-xl md:block hover:text-slate-500'>Specs</li>
            <li className='hidden py-2 cursor-pointer md:text-lg 2xl:text-xl md:block hover:text-slate-500'>Case</li>
            <li className='hidden py-2 cursor-pointer md:text-lg 2xl:text-xl md:block hover:text-slate-500'>Products</li>
            <li><button className='px-4 py-2 bg-[#333333] rounded-lg md:text-lg 2xl:text-xl lg:px-6 2xl:px-8 hover:bg-slate-600 hover:shadow-lg hover:shadow-slate-500/20'>Shop</button></li>
        </ul>
    </div>
  )
}

export default NavBar;