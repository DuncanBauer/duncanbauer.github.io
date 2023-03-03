import React from "react"

export default function Project(props) {
    return (
        <div className={props.style}>
            <br/>
            <br/>
            <br/>
            {/* <label className={props.style_1}>{props.name}</label> */}
            <a href="http://duncanbauer.github.io/ProjectAurora/" className={props.style_1}>{props.name}</a>
            <p className={props.style_2}>{props.description}</p>
        </div>
    )
}