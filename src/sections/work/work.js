import React from "react";
import "./work.scss";
import Heading from "../../components/heading/heading";
import ProjectItem from "../../components/projectItem/projectItem";
import Loop from '../../assets/Loopstudios.jpeg'
import Natours from '../../assets/Natours.jpeg'
import Parsons from '../../assets/Parsons.jpeg'
import Trillo from '../../assets/Trillo.jpeg'
import Portfolio from '../../assets/Portfolio.jpeg'


const Work = () => {

    return (
        <section className="work">


            <Heading title="Work." name="work"/>
            <p>
                Over the course of learning about web technologies, I took on a hands-on approach of taking a number of personal projects based on said tech.
                Here is a group of selected works that I have worked on recently. This list gets updated regularly as more projects are added into it
            </p>
            <div className="work__flex">
                <div className="project__column">
                    
                    <ProjectItem image={Loop} title="Loopstudios" details="Made with the building blocks of the web (HTML, CSS and JS), a landing page project for a fictional VR firm." link="https://loopstudio-gabeabu.netlify.app/" alt="Loopstudios page" />

                    <ProjectItem image={Natours} title="Natours" details="The landing page of a fictonal tourism agency with a display of CSS animations. (Made with HTML, SCSS and JS)  " link="https://gabeabu-natours-home.netlify.app/" alt="Natours page" />

                    <ProjectItem image={Parsons} title="Parsons" details="Multipage web recreation of a design made in Adobe XD." link="https://parsons-home.netlify.app/" alt="Parsons page"/>

                </div>
                <div className="project__column margin-top">

                    <ProjectItem image={Trillo} title="Trillo" details="The home dashboard of a fictional tourist service. Made with HTML and CSS and includes CSS animations." link="https://gabeabu-trillo-home.netlify.app/" alt="Trillo page"/>

                    <ProjectItem image={Portfolio} title="Portfolio" details="My personal portfolio website. Designed in Figma and made for web with ReactJS and SCSS, with responsiveness at every viewport." link="https://gabrielabubakar.netlify.app/" alt="Portfolio Page"/>

                </div>
            </div>


        </section>
    )
}


export default Work;