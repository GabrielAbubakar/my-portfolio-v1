import React from "react";
import './projectItem.scss';


const ProjectItem = (props) => {

    return(

        <div className="project__item">
                <a href={props.link} target="_blank" rel="noreferrer">
                    <figure>
                        <img src={props.image} alt={props.alt} width="1080" height="561"/>
                    </figure>
                </a>
                <div>
                    <h3>{props.title}</h3>
                    <p>{props.details}</p>
                </div>
        </div>
    )
}

export default ProjectItem