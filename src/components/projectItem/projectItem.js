import React from "react";
import './projectItem.scss';


const ProjectItem = (props) => {

    return(

        <div className="project__item">
            <a href="">
                <figure>
                    <img src={props.image} alt={props.alt} />
                </figure>
                <h3>{props.title}</h3>
                <p>{props.details}</p>
            </a>
        </div>
    )
}

export default ProjectItem