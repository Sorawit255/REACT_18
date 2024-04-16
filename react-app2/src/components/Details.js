import { useParams } from "react-router-dom";
import { useEffect ,useState} from "react"
import blogs from "../data/blogs";
export default function Details(){
    const {id} = useParams()
    useEffect(()=>{
        //ดึงข้อมูลบทความ
        const result = blogs.find((item)=>item.id === parseInt(id))
        console.log(result)
    })
    return(
       <div className="container">
            <h2 className="title">บทความ : {id}</h2>
       </div>
    )
}