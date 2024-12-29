import React, {useState} from 'react'
import './Navbar.css'
import {Link} from 'react-router-dom'
// import { FaBars } from "react-icons";
import { FiMenu, FiX } from "react-icons/fi";

const Navbar = () => {
    const [click, setClick] = useState(false)
    const handleClick = () => setClick(!click)
    
    const [color, setColor] = useState(false)
    const changeColor = () => {
        if(window.scrollY>=100){
            setColor(true)
        }
        else{
            setColor(false)
        }
    }

    window.addEventListener("scroll", changeColor)
  return (
    <div className={color ? "header header-bg" : "header"}>
        <Link to="/">
           <h1>Portfolio.</h1>
        </Link>
        <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className='menu'>
                <Link to="/">Home</Link>
            </li>
            <li className='menu'>
                <Link to="/project">Project</Link>
            </li>
            <li className='menu'>
                <Link to="/about">About</Link>
            </li>
            <li className='menu'>
                <Link to="/contact">Contact</Link>
            </li>
        </ul>
        <div className="hamburger" onClick={handleClick}>
            {click ? (<FiX size={20} style={{color: "#fff"}}/>) : (<FiMenu size={20} style={{color: "#fff"}}/>) }
           
           
        </div>
      
    </div>
  )
}

export default Navbar
