import { Link } from "react-router-dom"
import "./Navbar.css"
export default function Navber(){
    return(
        <nav>
            <Link to="/" className="logo"><h3>Blogs Application</h3></Link>
            <Link to="/">หน้าแรก</Link>
            <Link to="/about">เกี่ยวกับเรา</Link>
            <Link to="/blogs">บทความทั้งหมด</Link>
        </nav>
    )
}