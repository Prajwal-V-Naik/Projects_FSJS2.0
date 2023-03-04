import React from 'react'
import Apple from '../Assets/Images/appleLogo.png'
import Spotify from '../Assets/Images/spotifyLogo.png'
import Amazon from '../Assets/Images/amazonLogo.png'
import Youtube from '../Assets/Images/youtubeLogo.png'

const Card = ({image}) => (
    <div className='transition-all duration-500 transform hover:scale-125 cursor-pointer'>
        <img src={image} alt='CardPhoto'/>
    </div>
)

function SectionTwo() {
  return (
    <div className='my-4 px-4 py-7 flex justify-center items-center gap-10 flex-wrap md:px-14 md:py-8 md:gap-16 lg:px-20 lg:py-9 lg:gap-28 2xl:px-56 2xl:gap-60'>
        <Card image={Apple}/>
        <Card image={Spotify}/>
        <Card image={Amazon}/>
        <Card image={Youtube}/>
    </div>
  )
}

export default SectionTwo;