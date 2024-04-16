import { Link } from "react-router-dom"

export default function Navber(){
    return(
        <nav>
            <Link to="/">Blogs Application</Link>
            <Link to="/">หน้าแรก</Link>
            <Link to="/about">เกี่ยวกับเรา</Link>
            <Link to="/blogs">บทความทั้งหมด</Link>
        </nav>
    )
}