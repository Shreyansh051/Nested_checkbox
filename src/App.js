import React, { useState } from "react";
import "./App.css";
import CheckBoxes from "./components/CheckBoxes";
import DisplayData from "./components/DisplayData";
import { TeacherData } from "./DB"

function App() {

  const [Data, setData] = useState(false)
  
  return (
    <>
      <div className="container">
        <div>
          <div className="heading"><mark>Teachers and Students</mark></div>
          <div className="grid-container">
            {TeacherData?.map((element, index) => (
              <CheckBoxes key={index} Store={element} Data={Data} setData={setData} />
            ))}
          </div>
        </div>
        <div>
          <div className="heading"><mark>Selected Teachers and Students</mark></div>
          <div className="grid-container">
            {TeacherData.map((element) => (
              <DisplayData Store={element} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
