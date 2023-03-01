import React from "react";
import Neurolab from "../Assets/PW-neurolab-icon.svg"
import JobPortal from '../Assets/PW-jobPortal-icon.svg'
import Internship from '../Assets/PW-Internship-icon.svg'
import Affiliate from '../Assets/PW-affilitatePortal-icon.svg'
import Fame from '../Assets/PW-halloffame-icon.svg'


let lab = {
    image: Neurolab,
    head: 'PW Skills Lab',
    description:'Supercharge your project development with our robust lab.'
}
let job = {
    image: JobPortal,
    head: 'Job Portal',
    description:'Use exceptional templates for a stand-out resume minus the sign up process.'
}
let internship = {
    image: Internship,
    head: 'Experience portal',
    description:`PW Skills's self-paced experience portal prioritizes hands-on training with 570+ internship projects.`
}
let aff = {
    image: Affiliate,
    head: 'Become an affiliate',
    description:'Explore affiliate marketing opportunities with PW Skills and attain financial freedom.'
}
let hall = {
    image: Fame,
    head: 'Hall of fame',
    description:'Our student placements and 100K+ career transitions speak volumes about our courses.'
}

const Card = (props) =>(
    <div className='flex flex-col justify-center items-center gap-4'>
        <img src={props.image} alt="pop-pic"/>
        <h2 className='font-bold text-lg'>{props.head}</h2>
        <p className='text-[#757575] w-72 text-center'>{props.description}</p>
    </div>
)

const Products = () =>(
    <div className="flex justify-center items-center gap-8 flex-wrap py-10 px-2 md:py-24 xl:px-44">
        <Card {...lab}/>
        <Card {...job}/>
        <Card {...internship}/>
        <Card {...aff}/>
        <Card {...hall}/>
    </div>
)

export default Products;