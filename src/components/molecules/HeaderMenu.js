import { useState } from "react";
import { SiReact, SiGithub, SiCplusplus, SiPython } from "react-icons/si";
import HeaderMenuItem from "../atoms/HeaderMenuItem";

export default function HeaderMenu() {
    const pages = ["About", "Portfolio", "Blog", "Contact"];
    const [active, setActive] = useState(pages[0]);

    return (
        <div className="Header-menu">
            <HeaderMenuItem icon={<SiReact/>} alt="About" />
            <HeaderMenuItem icon={<SiGithub/>} alt="Portfolio" />
            <HeaderMenuItem icon={<SiCplusplus/>} alt="Blog" />
            <HeaderMenuItem icon={<SiPython/>} alt="Contact" />
        </div>
    )
}