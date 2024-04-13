import Logo from "../image/logo.png"
import "./Header.css";
// export default const Header=()=>{}
export default function Header(){
    return(
        <nav>
            <img src={Logo} alt="logo" className="Logo"/>
            <a href="/">หน้าแรก</a>
        </nav>
    )
}
// export default Header;