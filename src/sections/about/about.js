import React from "react";
import "./about.scss"
import Heading from "../../components/heading/heading";

const About = () => {

    return (

        <section className="about">

            <Heading title="About." name="about" />

            <article className="about__text-container">
                <p className="about__text">
                    Hi there, I’m Gabriel, a self taught front-end web developer currently surviving Lagos, Nigeria.
                </p>
                <p className="about__text">
                    I’m interested in creating user web experiences out of designs by writing as little and efficient code as possible so as to reduce load times thereby creating awesome site experiences.🚀🚀
                </p>
                <p className="about__text">
                    I have been writing frontend code since 2020 and over time have acquired various skills that have advanced my development workflow.
                </p>
                <p className="about__text">
                    These skills include competency in the building blocks of the web (HTML, CSS and Javascript), alongside other frontend frameworks and libraries such as React.js, Vue.js and Next.js.
                </p>
                <p className="about__text">
                    I have also worked personally with further concepts such as Web Accessibility, Site Optimization for Search Engines as well as Prototyping wireframes via products such as Figma and Adobe XD.
                </p>
                <p className="about__text">
                    I’m open to learning new web technologies in other to be able to work efficiently in diverse development teams.🙃
                </p>

                <a href="https://drive.google.com/file/d/1l139L0_-eaw2O_a5PQgTvCZPfXMkxWst/view?usp=sharing" target="_blank" rel="noreferrer" >Resume</a>
            </article>
        </section>
    )
}

export default About