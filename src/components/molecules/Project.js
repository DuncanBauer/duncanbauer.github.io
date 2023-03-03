import React from "react"

export default function Project(props) {
    return (
        <div className={props.style}>
            <br/>
            <br/>
            <br/>
            <label className={props.style_1}>{props.name}</label>
            <p className={props.style_2}>{props.description}</p>
        </div>
    )
}