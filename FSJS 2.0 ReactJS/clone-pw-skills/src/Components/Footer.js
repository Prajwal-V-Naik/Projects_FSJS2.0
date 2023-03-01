import React from "react";

const SectionOne = () =>(
    <div className="flex flex-col gap-4">
        <h1 className="text-orange-600 text-3xl lg:text-2xl"><span className="font-extrabold text-green-600">PW</span>-Skills</h1>
        <hr className='border-2 border-yellow-400 w-56 md:w-44 '/>
        <p>Email:support@pwskill.com</p>
        <h3>Social Icons</h3>
        <h3>Iso Image</h3>
        <p>ISO 9001</p>
    </div>
)

const SectionTwo = () =>(
    <div className="flex flex-col gap-4">
        <h2 className="text-2xl font-bold">PW Skills</h2>
        <hr className='border-2 border-yellow-400 w-56 md:w-44 '/>
        <p>About us</p>
        <p>FAQs</p>
        <p>Privacy policy</p>
        <p>Contact Us</p>
        <p>Job assistance</p>
        <p>Terms and conditions</p>
    </div>
)


const SectionThree = () => (
    <div className="flex flex-col gap-4">
        <h2 className="text-2xl font-bold">Products</h2>
        <hr className='border-2 border-yellow-400 w-56 md:w-44 '/>
        <p>Pw Skills lab</p>
        <p>Job Portal</p>
        <p>Experience Portal</p>
        <p>Become an affiliate</p>
        <p>Hall of Fame</p>
    </div>
)

const Footer = () => (
    <div className="flex flex-col md:flex-row md:justify-around justify-center items-center md:items-start md:gap-0  gap-8  text-white bg-[#1b2124] py-10 md:py-20">
       <SectionOne/>
       <SectionTwo/>
       <SectionThree/>
    </div>
)

export default Footer;