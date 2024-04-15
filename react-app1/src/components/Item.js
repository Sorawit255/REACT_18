import "./Item.css";
import { BsTrash3 } from "react-icons/bs";
import { BiSolidEditAlt } from "react-icons/bi";
export default function Item(props){
    const {data,deleteTask,editTask} = props
    return(
        <div className="list-item">
            <p className="title">{data.title}</p>
            <div className="button-container">
                <BsTrash3 className="btn" onClick={()=>deleteTask(data.id)}/>
                <BiSolidEditAlt className="btn" onClick={()=>editTask(data.id)} />
            </div>
        </div>
    )
}