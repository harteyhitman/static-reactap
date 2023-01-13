import React from "react"
import "./App.css"
import logo from './logo192.png'

 function Navbar(){
    return (
        <nav className="navbar">
        <img className="img" src={logo} alt="logo" width="40px"/>
               <h2 className="react-facts">ReactFacts</h2>
            <h3>React course-project</h3>
        </nav>
    )
}

export default Navbar