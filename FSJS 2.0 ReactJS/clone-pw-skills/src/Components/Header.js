import React from 'react'

const Header = ({head}) => (
    <div className='pt-16 md:pt-20 gap-3 text-center'style={{display:'flex',flexDirection:"column", alignItems:"center"}}>
        <h1 className='text-4xl md:text-5xl text-[#5a4bda] font-bold'>{head}</h1>
        <hr className='border-2 border-yellow-400 w-56 md:w-44 '/>
    </div>
)

export default Header