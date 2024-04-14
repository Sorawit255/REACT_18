import "./Addform.css";
import { useState } from "react";
export default function AddForm(props) {
    const {students,setstudents}=props;
    const [name,setname]=useState("");
    const [gender,setGender]=useState("male");
    function saveStudent(e){
        e.preventDefault();
        if(!name){
            alert("ป้อนชื่อ!!")
        }else{
            const newStudent={
                ID:Math.floor(Math.random()*1000),
                name:name,
                gender:gender
            }
            setstudents([...students,newStudent])
            setname("")
        }
    }
  return (
    <section className="container">
      <form onSubmit={saveStudent}>
        <label>Student Name</label>
        <input type="text" name="name" value={name} onChange={(e)=>setname(e.target.value)}/>
        <select value={gender} onChange={(e)=>setGender(e.target.value)}>
            <option value="male">male</option>
            <option value="female">female</option>
        </select>
        <button type="submit" className="btn-add">บันทึก</button>
      </form>
    </section>
  );
}
