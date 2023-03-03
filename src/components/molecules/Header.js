import Clock from "../atoms/Clock"
import HeaderMenu from "./HeaderMenu"

export default function Header(props) {
    return (
        <div className="Header-container">
            <Clock/>
            <HeaderMenu/>
        </div>
    )
}