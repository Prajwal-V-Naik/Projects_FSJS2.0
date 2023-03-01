import React from 'react'
import './App.css';
// Importing sections
import Nav from './Components/Nav'
import Navchild from './Components/Navchild'
import Banner from './Components/Banner'  
import Header from './Components/Header'  
import Center from './Components/Center';
import Achievers from './Components/Achievers';
const App = () =>(
    <>
        <Nav/>
        <Navchild/>
        <Banner/>
        <Header head={`"Pure Hardwork, No Shortcuts!"`}/>
        <Center/>
        <Header head={"Our Achiever's Work with"}/>
        <Achievers/>
    </>
)

export default App