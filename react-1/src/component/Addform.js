import "./Addform.css";
import { useState } from "react";
export default function AddForm() {
    const [name,setname]=useState("");
    function saveStudent(e){
        e.preventDefault();
        console.log(name);
        if(!name){
            alert("ป้อนชื่อ!!")
        }
        else{
            const newStudent={
                ID:Math.floor(Math.random()*1000),
                name:name
            }
            console.log(newStudent);
            setname("")
        }
    }
  return (
    <section className="container">
      <form onSubmit={saveStudent}>
        <label>Student Name</label>
        <input type="text" name="name" value={name} onChange={(e)=>setname(e.target.value)}/>
        <button type="submit" className="btn-add">บันทึก</button>
      </form>
    </section>
  );
}
