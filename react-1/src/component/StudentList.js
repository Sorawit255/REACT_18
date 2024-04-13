import { useState } from "react";
import "./StudentList.css";
import Item from "./Item";
export default function StudentList(props) {
  const{students}=props;
  // create State
  const [count, setCount] = useState(0);
  function addcount() {
    setCount(count + 1);
  }
  // boolean T F
  const [show, setShow] = useState(true);
  const btnStyle={
    background: show? "purple" : "Green"
  }
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
          students.map((data) => (
            <Item key={data.ID} data={data} />
          ))}
      </ul>
      {/* boolean */}
      <button onClick={() => setShow(!show)} style={btnStyle}>{show?"Hide":"Show"}</button>
    </>
  );
}
