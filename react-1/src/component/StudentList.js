import { useState } from "react";
import "./StudentList.css";
export default function StudentList() {
  // create State
  const [count, setCount] = useState(0);
  function addcount() {
    setCount(count + 1);
  }
  // Array state
  const [students, setstudents] = useState([
    { ID: 1, name: "Muragi" },
    { ID: 2, name: "Rina" },
    { ID: 3, name: "Saegusa" },
    { ID: 4, name: "Magumi" },
  ]);
  // boolean T F
  const [show, setShow] = useState(true);
  return (
    <>
      <h1 style={{color:"Blue"}}>จำนวนเลข : {count}</h1>
      <button onClick={addcount}>Add</button>
      {/* เขียนแบบ Arrow function ()=>...คำสั่ง... */}
      <button onClick={() => setCount(count - 1)}>Delete</button>
      <button onClick={() => setCount(0)}>Reset</button>
      {/* Array state */}
      <h1>studentList = {students.length}</h1>
      <ul>
        {show &&
          students.map((item) => (
            <li key={item.ID}>
              <p>
                {item.ID} , {item.name}
              </p>
            </li>
          ))}
      </ul>
      {/* boolean */}
      <button onClick={() => setShow(!show)}>สลับ</button>
    </>
  );
}
