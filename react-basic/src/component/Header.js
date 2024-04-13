import logo from "../image/logo.png";
import "./Header.css";
export default function Header() {
    return(
        <nav>
            <img src={logo} alt="Logo" className="logo"/>
            <a href="/">หน้าแรก</a>
        </nav>
    );
}
