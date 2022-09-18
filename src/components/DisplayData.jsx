import React from 'react'

function DisplayData({ Store }) {

  const Count = Store.childrens.filter((child) => child.childBox === true).length;
  if (Count === 0) return ""
  return (
    <div className="box">
      <div className="check">
        <li>{Store.parentBox}</li>
      </div>
      {Store.childrens.map((child, index) =>
        (child.childBox) && (
          <ul className="check" key={index}>
            <li>{child.name}</li>
          </ul>
        ))}
    </div>
  );
};
export default DisplayData