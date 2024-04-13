import { useState } from "react";
import './App.css';

function App() {
  // create State
  const [count,setCount] = useState(0);
    function addcount(){
      setCount(count+1); 
    }
  return (
    <>
      <h1>จำนวนเลข : {count}</h1>
      <button onClick={addcount}>Add</button>
      {/* เขียนแบบ Arrow function ()=>...คำสั่ง... */}
      <button onClick={()=>setCount(count-1)}>Delete</button>
      <button onClick={()=>setCount(0)}>Reset</button>
    </>
  );
}

export default App;
