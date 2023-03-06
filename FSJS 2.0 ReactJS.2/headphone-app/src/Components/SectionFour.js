import React from 'react'
import Case from '../Assets/Images/caseImage.png'
import CaseLogo from '../Assets/Icons/caseLogo.png'
import Group  from '../Assets/Icons/group.png'
function SectionFour() {
  return (
    <div className='my-4 px-4 py-7 md:px-14 md:py-8 lg:px-20 lg:py-9 2xl:px-56 flex flex-col justify-center items-center gap-10'>
        <img src={CaseLogo} alt='' className='w-52 md:w-72 lg:w-80 2xl:w-98'/>
        <div className='my-4 flex flex-col justify-center items-center gap-10 md:flex-row lg:gap-24 2xl:gap-52'>
            <img src={Case} alt='' className='w-52 md:w-72 2xl:w-98'/>
            <div className='flex flex-col justify-center items-center gap-10 md:justify-start md:items-start lg:w-72'>
                <p>With a comfortable and adaptable case so that you can store it whenever you want, and keep your durability forever.</p>
                <button className='flex justify-center items-center gap-3 mx-1 px-4 py-2 bg-[#333333] rounded-lg hover:bg-slate-600 hover:shadow-lg hover:shadow-slate-500/20'><img src={Group} alt=''/>More info </button>
            </div>
        </div>
    </div>
  )
}

export default SectionFour