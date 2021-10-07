import React from "react";
import "./heading.scss"

const Heading = (props) => {

    return (

        <div className="heading">

            <h2 id={props.name}>{props.title}</h2>
        </div>
    )
}

export default Heading