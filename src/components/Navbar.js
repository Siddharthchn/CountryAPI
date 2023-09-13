import React, { useEffect, useState } from 'react'
import "./Navbar.css"
import {FaRegMoon} from "react-icons/fa";
import {FaMoon} from "react-icons/fa";

function Navbar() {
  const [theme,setTheme] = useState(document.body.className);

  const toggleTheme = (e) => {
    e.preventDefault();
    if(theme === "light-theme") setTheme("dark-theme");
    else setTheme("light-theme");
  }

  useEffect(()=> {
    document.body.className = theme;
  },[theme]);
  
  
  return (
    <header>
    <nav id="navbar">
      <div className="container flex">
        <h3 className="logo-heading">Where in the world ?</h3>
        <a href="/" className="btn-theme flex light" onClick={toggleTheme}>
          {theme === "light-theme" ? <FaRegMoon class='btn-theme-icon'/> :
          <FaMoon class='btn-theme-icon'/>}
          <span className="btn-theme-text"> {theme === "light-theme" ? "Dark" : "Light"} Mode </span>
        </a>
      </div>
    </nav>
  </header>
  )
}

export default Navbar