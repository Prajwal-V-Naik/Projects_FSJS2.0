import React from 'react'

const Navitems = ({name}) =>(
    <>
        <p className='font-medium tracking-wide text-base text-center'>{name}</p>
    </>
)

const Navchild = () => (
    <div className='flex justify-around items-center gap-4 flex-wrap px-20 py-4'>
        <Navitems name="Courses"/>
        <Navitems name="PW Skills Lab"/>
        <Navitems name="Job Portal"/>
        <Navitems name="Experience Portal"/>
        <Navitems name="Become an affiliate"/>
        <Navitems name="Hall of fame"/>
        <Navitems name="More"/>
    </div>
)

export default Navchild;