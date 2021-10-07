import React from "react";
import "./navbar.scss"


const Navbar = () => {

    return (
        
        <nav>
            <p className="name">GABRIEL ABUBAKAR.</p>
                
                <ul>
                    <li><a href="#about">About</a></li>
                    <li><a href="#work">Work</a></li>
                    <li><a href="#connect">Connect</a></li>
                </ul>
        </nav>
    )
}

export default Navbar