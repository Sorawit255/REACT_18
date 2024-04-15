import "./App.css";
import Header from './components/Header';
import AddForm from './components/AddForm';
import Item from './components/Item';
import {useState } from "react";
function App() {
  const [tasks,setTasks]=useState([
    {id:1,title:"sdgsdg"},
  ])
  const [title,setTitle]=useState("")
  function deleteTask(id){
    const result = tasks.filter(item=>item.id !==id)
    setTasks(result)
  }
  function saveTask(e){
    e.preventDefault();
    if(!title){
      alert("กรุณาป้อนข้อมูลด้วยครับ")
    }
    else{
      //เพิ่มรายการใหม่
      const newTask={
          id:Math.floor(Math.random()*1000),
          title:title
      }
      setTasks([...tasks,newTask])
      setTitle("")
    }
  }
  return (
    <div className="App">
      <Header/>
      <div className="container">
        <AddForm title={title} setTitle={setTitle} saveTask={saveTask}/>
        <section>
          {
            tasks.map((data)=>(
              <Item key={data.id} data={data} deleteTask={deleteTask}/>
            ))
          }
        </section>
      </div>
    </div>
  );
}

export default App;
