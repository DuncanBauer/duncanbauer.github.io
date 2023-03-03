import { IconContext } from "react-icons";

export default function FooterMenuItem(props) {
    return (
        <IconContext.Provider value={{ className: "shared-class", size: 32 }}>
            <div className="Footer-menu-item">
                <a href="" alt={props.alt} onClick={props.onClick}>
                    {props.icon}
                </a>
            </div>
        </IconContext.Provider>
    )
}