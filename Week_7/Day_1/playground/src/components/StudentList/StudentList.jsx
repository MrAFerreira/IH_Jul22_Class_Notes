import React from 'react';

function StudentList(props) {
  console.log(props.children);
  return (
    <div style={{ border: '2px solid black', backgroundColor: 'beige' }}>
      <h1>Ironhack Students: </h1>
      <hr />
      {props.children}
    </div>
  );
}

export default StudentList;
