import { SiReact, SiGithub, SiCplusplus, SiPython } from "react-icons/si";
import FooterMenuItem from '../atoms/FooterMenuItem';

export default function FooterMenu(props) {
    return (
        <div className="Footer-menu">
            <FooterMenuItem icon={<SiReact/>} alt="Home" />
            <FooterMenuItem icon={<SiGithub/>} alt="About" />
            <FooterMenuItem icon={<SiCplusplus/>} alt="Portfolio" />
            <FooterMenuItem icon={<SiPython/>} alt="Lastly" />
        </div>
    )
}