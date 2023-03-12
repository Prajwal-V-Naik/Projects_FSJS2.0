import React from 'react'
import FootLogo from '../Assets/Images/beatsLogo.png'
import Send from '../Assets/Icons/rightArrow.png'
import FaceBook from '../Assets/Icons/facebook.png'
import Twitter  from '../Assets/Icons/twitter.png'
import Instagram from '../Assets/Icons/instagram.png'
import LinkedIn from '../Assets/Icons/linkedin.png'

function Footer() {
  return (
    <div className='my-4 mx-3 px-5 py-14 md:px-14 md:py-16 md:my-14 lg:px-20 2xl:px-56 flex flex-col-reverse justify-center items-start gap-10'>
        <div>
            <img src={FootLogo} alt=''/>
        </div>
        <div>
            <h3>Products</h3>
            <p>HeadPhones</p>
            <p>EarPhones</p>
            <p>EarBuds</p>
            <p>Accessories</p>
        </div>
        <div>
            <h3>Support</h3>
            <p>Product Help</p>
            <p>Register</p>
            <p>Updates</p>
            <p>Provides</p>
        </div>
        <div>
            <form className='flex flex-row gap-4 p-4'>
                <input type='email' placeholder='Email'></input>
                <button className='flex flex-row justify-center items-center'><img src={Send} alt=''/>Subscribe</button>
            </form>
            <div>
                <img src={FaceBook} alt=''/>
                <img src={Twitter} alt=''/>
                <img src={Instagram} alt=''/>
                <img src={LinkedIn} alt=''/>
            </div>
        </div>
    </div>
  )
}

export default Footer