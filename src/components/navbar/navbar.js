import React from "react";
import styles from "./navbar.scss"


const Navbar = () => {

    return (
        
        <nav>
            <p className="name">GABRIEL ABUBAKAR.</p>
                
                <ul>
                    <li><a href="#about">ABOUT</a></li>
                    <li><a href="#work">WORK</a></li>
                    <li><a href="#connect">CONNECT</a></li>
                </ul>
        </nav>
    )
}

export default Navbar