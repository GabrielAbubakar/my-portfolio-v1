import React from "react";
import styles from "./navbar.scss"


const Navbar = () => {

    return (
        
        <nav>
            <p className="name">Gabriel Abubakar</p>
                
                <ul>
                    <li><a href="#about">About</a></li>
                    <li><a href="#work">Work</a></li>
                    <li><a href="#connect">Connect</a></li>
                </ul>
        </nav>
    )
}

export default Navbar