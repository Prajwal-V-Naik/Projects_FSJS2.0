import React from "react";
import img1 from "../Assets/Inferenz-PW.png"
import img2 from "../Assets/leventm-PW.png"
import img3 from "../Assets/oracle-PW.png"
import img4 from "../Assets/reliance-PW.png"
import img5 from "../Assets/swiggy-PW.png"

const Achievers = () => (
    <div className="flex flex-col justify-center items-center gap-9 md:flex-row md:justify-around md:flex-wrap  py-16 px-20 md:py-24">
        <img src={img1} alt="images" className="w-60"/>
        <img src={img2} alt="images" className="w-60"/>
        <img src={img3} alt="images" className="w-60"/>
        <img src={img4} alt="images" className="w-60"/>
        <img src={img5} alt="images" className="w-60"/>
    </div>
)

export default Achievers;