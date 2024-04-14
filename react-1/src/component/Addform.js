import "./Addform.css";
import { useState } from "react";
export default function AddForm() {
    const [name,setname]=useState("");
  return (
    <section className="container">
      <form>
        <label>Student Name</label>
        <input type="text" name="name" value={name} onChange={(e)=>setname(e.target.value)}/>
        <button type="submit" className="btn-add">บันทึก</button>
      </form>
    </section>
  );
}
