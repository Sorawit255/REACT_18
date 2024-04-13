import { useState } from "react";
import "./studentList.css"
export default function StudentList() {
  //สร้าง array state
  const [students, setstudent] = useState([
    { id: 1, name: "Kong" },
    { id: 2, name: "Jojo" },
    { id: 3, name: "Su" },
  ]);
  const [show, setShow] = useState(true);
  return (
    <>
      <ul>
        <div className="Header">
          <h1>Number of students({students.length}) (จาก studentList)</h1>
          <button onClick={() => setShow(!show)} className="del">{show?"hide":"Show"}</button>
        </div>
        {show &&
          students.map((item) => (
            <li kry={item.id}>
              {item.id} - {item.name}
            </li>
          ))}
      </ul>
    </>
  );
}
