import React from 'react'
import books from '../Assets/PW-books-icon.svg'
import student from '../Assets/PW-student-icon.svg'
import creditCard from '../Assets/PW-credit-card-icon.svg'
const Center = () => (
    <div className='grid gap-y-5 md:grid-cols-3 justify-items-center py-24'>
        <div style={{display:'flex',flexDirection:"column", alignItems:"center"}} className='gap-4'>
            <img src={books} alt="Books" className='w-36'/>
            <h2 className='text-3xl font-semibold text-center'>600+</h2>
            <h3 className='text-xl md:text-2xl lg:text-3xl text-[#757575] font-semibold text-base text-center'>Different Courses</h3>
        </div>
        <div style={{display:'flex',flexDirection:"column", alignItems:"center"}} className='gap-4'>
            <img src={student} alt="Student" className='w-36'/>
            <h2 className='text-3xl font-semibold text-center'>700000+</h2>
            <h3 className='text-xl md:text-2xl lg:text-3xl text-[#757575] font-semibold text-base text-center'>Students Enrolled</h3>
        </div>
        <div style={{display:'flex',flexDirection:"column", alignItems:"center"}} className='gap-4'>
        <img src={creditCard} alt="credit" className='w-36'/>
            <h2 className='text-3xl font-semibold text-center'>10000+</h2>
            <h3 className='text-xl md:text-2xl lg:text-3xl text-[#757575] font-semibold text-base text-center'>Successful Transition</h3>
        </div>
    </div>
)

export default Center