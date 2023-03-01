import React from "react";
// import Logo from '../Assets/PWSkillsLogo.png';
const Nav = () => (
<div className="flex justify-center items-center px-20 py-4 gap-24">
    {/* <img src={Logo} alt="Logo" className="w-1 basis-1/4 2xl:w-1 "/> */}
    <h1 className="text-orange-600 text-3xl lg:text-2xl base-1 md:base-1 lg:base-2/5"><span className="font-extrabold text-green-600">PW</span>-Skills</h1>
    <input type="text" placeholder="Search: What do you want to learn" className="hidden lg:block lg:basis-2/5 xl:basis-3/5 border-2 border-black-500 px-3 py-2 rounded-lg"/>
    <button className="hidden md:block md:base-1 lg:base-2/5 px-8 py-2  bg-[#5a4bda] rounded-lg text-white font-bold ">Login / Register</button>
</div>
)       

export default Nav;