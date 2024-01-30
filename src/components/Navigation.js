import React, {useState} from "react";
import {NavLink} from "react-router-dom";
import "./Navigation.css";

function Navigation(){
    const [menuOpen, setMenuOpen] = useState(false);
      return(
        <nav>
            <NavLink className="navTitle" to="/">Chitipothu Kaushik</NavLink>
            <div className="menu" onClick={()=>{
                setMenuOpen(!menuOpen);
            }}>
                <span></span>
                <span></span>
                <span></span>
            </div>
            <ul className={menuOpen?"open":""}>
                <li>
                    <NavLink to="/about">About me</NavLink>
                </li>
                <li>
                    <NavLink to="/projects">Projects</NavLink>
                </li>
                <li>
                    <NavLink to="/contact">Contact</NavLink>
                </li>
            </ul>
        </nav>
      )
}

export default Navigation;