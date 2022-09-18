import React from "react";

function CheckBoxes({ Store, Data, setData }) {
  const handleClick = (number) =>
   {
    //if number is equal to 0 or value is false then map the data 
    if (number === 0 && Store.Checked === false) {
      Store.Checked = true;
      Store.childrens.map((child) => (
        child.childBox = true
      ))
    } else if (number === 0 && Store.Checked === true) {   //if value is true than set value false
      Store.Checked = false;
      Store.childrens.map((child) => (
        child.childBox = false
      ))
    } else if (number !== 0) {   //else if
      Store.childrens[number - 1].childBox = !Store.childrens[number - 1].childBox
  //if all value is true and all checkbox selected then set parent value true
      if (Store.childrens[0].childBox === true &&
        Store.childrens[1].childBox === true &&
        Store.childrens[2].childBox === true &&
        Store.childrens[3].childBox === true) {
        Store.Checked = true;
      } else {   // else set the parent value false 
        Store.Checked = false;
      }
    }
    //store all data to the props
    setData(!Data)
  };
  
  return (
    <div className="box">
      <div className="check">
        <input type="checkbox" checked={Store.Checked} onChange={() => { handleClick(0) }} />
        <label>{Store.parentBox} </label>
      </div>
      {Store.childrens.map((child, index) => (
        <div className="check" key={index} >
          <input type="checkbox" checked={child.childBox} onChange={() => handleClick(index + 1)} />
          <label>{child.name}</label>
        </div>
      ))}
    </div>
  );
};

export default CheckBoxes;
