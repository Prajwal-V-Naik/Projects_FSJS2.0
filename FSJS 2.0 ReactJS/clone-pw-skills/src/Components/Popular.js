import React from 'react'
import Java from '../Assets/PW-Java.jpg'
import Data from '../Assets/PW-Data-Science.jpg'
import Web from '../Assets/PW-Web.jpg'

let data1 = {
    image: Java,
    head: 'Java with Dsa and System Design',
    mentor: 'Priya Bhatia',
    price: '3500.00Rs'
}
let data2 = {
    image: Data,
    head: 'Data Science Master',
    mentor: 'Krish naik',
    price: '3500.00Rs'
}
let data3 = {
    image: Web,
    head: 'Full Stack Web Development',
    mentor: 'Hithesh Choudary',
    price: '3500.00Rs'
}


const Card = (props) =>(
    <div className='flex flex-col gap-4 p-4 md:p-8 shadow-xl '>
        <img src={props.image} alt="pop-pic" className='w-96'/>
        <h2 className='text-[#5a4bda] font-bold text-lg'>{props.head}</h2>
        <p className='text-[#757575]'>{props.mentor}</p>
        <p className='font-bold'>{props.price}</p>
    </div>
)

const Popular = () => (
    <div className='flex justify-center items-center gap-6 flex-wrap py-10 px:2 md:py-24'>
        <Card {...data1}/>
        <Card {...data2}/>
        <Card {...data3}/>
    </div>
)

export default Popular;
// image={Java} head={"Java with Dsa and System Design"} mentor={"Priya Bhatia"} price={"3500.00 Rs"}