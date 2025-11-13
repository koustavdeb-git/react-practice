import React, { useState, useEffect } from 'react';
import { setDarkMode, setLightMode } from '../DarkModeComponent/DarkMode';
import "./NavbarStyle.css"
import Switch from '@mui/material/Switch';


const Navbar = () => {

  const [checked, setchecked] = useState(false)

  const toggleSwitch = () => {
    setchecked(!checked)
    
  }

  useEffect(() => {

    if (checked) {
      console.log("I am true");  
      setDarkMode()      
    } else {      
      console.log("I am false");  
      setLightMode()
    }
  
    return () => {
    }
  }, [checked])
  

  return (
    <div>
      <ul className="myList">
        <li>Dashboard</li>
        <li>Contact Us</li>
        <li>Help</li>
        <p>Dark Mode</p>
        <Switch className={"mySwitch"} checked={checked} onChange={toggleSwitch}/>
      </ul>

    </div>
  )
}

export default Navbar
