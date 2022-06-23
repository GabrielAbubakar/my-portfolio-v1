import React from "react";
import "./work.scss";
import Heading from "../../components/heading/heading";
import ProjectItem from "../../components/projectItem/projectItem";
import Loop from '../../assets/Loopstudios.jpeg'
import Natours from '../../assets/Natours.jpeg'
import Portfolio from '../../assets/Portfolio.jpeg'
import LearnLaw from '../../assets/learnlaw.png'
import Space from '../../assets/spacetours.png'
import SPHX from '../../assets/Sphx.png'
import Todo from '../../assets/TodoApp.png'
import Shopster from '../../assets/Scandiweb.png'


const Work = () => {

    return (
        <section className="work">


            <Heading title="Work." name="work" />
            <p>
                Over the course of learning about web technologies, I took on a hands-on approach of taking a number of personal projects based on said tech.
                Here is a group of selected works that I have worked on recently. This list gets updated regularly as more projects are added into it
            </p>
            <div className="work__flex">
                <div className="project__column">

                    <ProjectItem image={Todo} title="Todo App Tracker" details="Made with React.js functional components and hooks. Also uses the LocalStorage API to persist todo data on page refresh" link="https://loopstudio-gabeabu.netlify.app/" alt="Loopstudios page" />

                    <ProjectItem image={LearnLaw} title="Learn Nigerian Law" details="A live service providing educational materials on the Nigerian Legal System as taught in Nigerian schools. Created in Next.js and in collaboration with another developer to leverage the SEO, prerendering and multipage capabilities of Next.js" link="https://www.learnnigerianlaw.com/" alt="Learn Law home page" />

                    <ProjectItem image={Loop} title="Loopstudios" details="Made with the building blocks of the web (HTML, CSS and JS), a landing page project for a fictional VR firm." link="https://loopstudio-gabeabu.netlify.app/" alt="Loopstudios page" />

                    {/* <ProjectItem image={Natours} title="Natours" details="The landing page of a fictonal tourism agency with a display of CSS animations. (Made with HTML, SCSS and JS)  " link="https://gabeabu-natours-home.netlify.app/" alt="Natours page" /> */}


                </div>
                <div className="project__column margin-top">

                    <ProjectItem image={Shopster} title="Shopster (Work in Progress)" details="An ecommerce web app leveraging the powerful state management capabilities of React-Redux and fetching the data from a local GraphQL server. Complete with cart management, local storage of cart data, and dynamic product routes." link=" https://spacetourism-gabeabu.netlify.app" alt="Spacetours page" />

                    <ProjectItem image={Space} title="Space Tours" details="The home page of a fictional tourist service. Made with the Next.js framework to leverage its multipage and prerendering capabilities" link=" https://spacetourism-gabeabu.netlify.app" alt="Spacetours page" />

                    {/* <ProjectItem image={Portfolio} title="Portfolio" details="My personal portfolio website. Designed in Figma and made for web with ReactJS and SCSS, with responsiveness at every viewport." link="https://gabrielabubakar.netlify.app/" alt="Portfolio Page" /> */}

                    <ProjectItem image={SPHX} title="SPHX Landing" details="Landing page for a fictional furniture shopping store and a section containing filtered products. React framework for creating the project" link="https://shpx-landing.netlify.app/" alt="SPHX Page" />

                </div>
            </div>


        </section>
    )
}


export default Work;