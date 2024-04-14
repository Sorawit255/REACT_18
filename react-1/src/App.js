
import './App.css';
import Header from "./component/Header";
import StudentList from './component/StudentList';
import AddForm from './component/Addform';
import { useState } from "react";

function App() {
  // Array state
  const [students, setstudents] = useState([
    { ID: 1, name: "Muragi" },
    { ID: 2, name: "Rina" },
    { ID: 3, name: "Saegusa" },
    { ID: 4, name: "Magumi" },
  ]);
 
  return (
    <div className='App'>
      <Header/>
      <body>
        <AddForm students={students} setstudents={setstudents}/>
        <StudentList students={students}/>
      </body>
    </div>
  );
}

export default App;
