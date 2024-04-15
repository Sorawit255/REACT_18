import "./Header.css"
export default function Header(props){
    const {theme,setTheme} = props;
    function ToggleTheme(){
        if(theme==="light"){
            setTheme("dark")
        }else{
            setTheme("light")
        }
    }
    return(
        <header>
            <div className="Logo">
                <span>Task Managemet</span>
            </div>
            <div className="theme-container">
                <span>{theme === "light" ? "โหมดกลางวัน" : "โหมดกลางคืน"}</span>
                <span className="icon" onClick={ToggleTheme}>สลับ</span>
            </div>
        </header>
    )
}