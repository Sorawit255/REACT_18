import { useState } from "react";
import './App.css';

function App() {
  // create State
  const [count,setCount] = useState(0);
    function addcount(){
      setCount(count+1); 
    }
  // Array state 
  const [students,setstudents] = useState([
    {ID:1 , name:"Muragi"},
    {ID:2 , name:"Rina"}
  ])
  return (
    <>
      <h1>จำนวนเลข : {count}</h1>
      <button onClick={addcount}>Add</button>
      {/* เขียนแบบ Arrow function ()=>...คำสั่ง... */}
      <button onClick={()=>setCount(count-1)}>Delete</button>
      <button onClick={()=>setCount(0)}>Reset</button>
      {/* Array state */}
      <h1>studentList = {students.length}</h1>
      <ul>
        {students.map((item)=>(
          <li key={item.ID}>
            <p>{item.ID} , {item.name}</p>
          </li>
        ))}
      </ul>
    </>
  );
}

export default App;
