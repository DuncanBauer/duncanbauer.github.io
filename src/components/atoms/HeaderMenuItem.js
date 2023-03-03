import { IconContext } from "react-icons";

export default function HeaderMenuItem(props) {
    return (
        <IconContext.Provider value={{ className: "shared-class", size: 32 }}>
            <div className="Header-menu-item">
                <a htef="" alt={props.alt} onClick={props.onClick}>
                    {props.icon}
                </a>
            </div>
        </IconContext.Provider>
    )
}