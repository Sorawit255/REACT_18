import { useParams } from "react-router-dom";
export default function Details(){
    const {id} = useParams()
    return(
       <div className="container">
            <h2 className="title">บทความ : {id}</h2>
       </div>
    )
}