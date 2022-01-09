import React from "react"
import Navbar from "../../components/navbar/navbar"
import "./mainSection.scss"

const MainSection = () => {

    return (

        <section className="mainSection">
            
            <Navbar />

            <h1>
                <span className="brown">Hi there🖐🏼.</span> I am <span className="whiteBold">Gabriel, </span><br />
                a <span className="white">frontend developer</span> based in <span className="brown">Lagos, Nigeria</span> dedicated to creating awesome and accesible web experiences.  
            </h1>
        </section>
    )
}

export default MainSection