import React from "react"
import Header from "./Components/Header"
import Herosection from "./Components/Herosection"
import './App.css'
import Aboutpage from "./Components/Aboutpage"
import Skills from "./Components/Skills"
import Projects from "./Components/Projects"
import Contact from "./Components/Contact"
import Footer from "./Components/Footer"
import {BrowserRouter, Routes, Route} from 'react-router-dom'
function App() {
  return (
    <>
   
    <Header/> 
    
      <Herosection/>
      <Aboutpage/>
      <Skills/>
      <Projects/>
      <Contact/>
    
   
  
    <Footer/>

    </>
  )
}

export default App
