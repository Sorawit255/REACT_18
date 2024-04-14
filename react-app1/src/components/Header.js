import "./Header.css"
export default function Header(){
    return(
        <header>
            <div className="Logo">
                <span>Task Managemet</span>
            </div>
            <div className="theme-container">
                <span>โหมดกลางคืน</span>
                <span className="icon">สลับ</span>
            </div>
        </header>
    )
}