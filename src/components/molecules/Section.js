import React from "react"

export default function Section(props) {
    return (
        <div className={props.style_0}>
            <br/>
            <br/>
            <br/>
            <a href={props.link} className={props.style_1}>{props.name}</a>
            <p className={props.style_2}>{props.description}</p>
        </div>
    )
}