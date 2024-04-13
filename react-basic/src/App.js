import { useState } from "react";
import Header from "./component/Header";
import StudentList from "./component/studentList";
import "./App.css"
function App() {
  const name = "อิอิอิ";
  //สร้าง state
  const [count, setCount] = useState(0);
  function addcount() {
    setCount(count + 1);
  }
  function delcount() {
    setCount(count - 1);
  }
  //สร้าง array state
  const [students,setstudent] = useState([
    {id:1,name:"Kong"},
    {id:2,name:"Jojo"},
    {id:3,name:"Su"}
  ]);
  const [show,setShow]=useState(true); 

  //พื้นที่แสดงผล
  return (
    <div className="App">
    <Header/>
    {/* studentList ดึงข้อมูลการทำงานมาจาก component js,css */}
    <StudentList/> 
      <h1>Hello : {name}</h1>
      <button onClick={() => alert("คลิกทำไม")}>Click me</button>
      {/* จากสร้่าง state */}
      <h1>{count}</h1>
      <button onClick={addcount}>Addvalue</button>
      <button onClick={delcount}>delvalue</button>
      <button onClick={()=>setCount(0)}>Reset</button>
      {/* จาก array state */}
      <h1>Number of students : {students.length}</h1>
      <button onClick={()=>setShow(!show)}>Toggle</button>
      <ul>
        {show && students.map((item)=>(
          <li kry={item.id}>{item.id} - {item.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
