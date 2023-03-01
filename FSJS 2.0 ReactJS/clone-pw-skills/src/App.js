import React from 'react'
import './App.css';
// Importing sections
import Nav from './Components/Nav'
import Navchild from './Components/Navchild'
import Banner from './Components/Banner'  
import Header from './Components/Header'  
import Center from './Components/Center';
import Achievers from './Components/Achievers';
import Line from './Components/Line';
import Popular from './Components/Popular';
const App = () =>(
    <>
        <Nav/>
        <Navchild/>
        <Banner/>
        <Header head={`"Pure Hardwork, No Shortcuts!"`}/>
        <Center/>
        <Header head={"Our Achiever's Work with"}/>
        <Achievers/>
        <Header head={"Popular Programs"}/>
        <Line text={"Most in demand and watched by people."}/>
        <Popular/>
        <Header head={"Affordable Programs"}/>
        <Line text={"Find your favorite courses in pocket-friendly ways."}/>
        <Popular/>
        <Header head={"Community Programs"}/>
        <Line text={"Open to all pro-live classes on Youtube for free."}/>
        <Popular/>
    </>
)

export default App