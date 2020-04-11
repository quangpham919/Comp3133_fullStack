import React from "react";

const Student = ({ match }) => {
  const { studentno, studentname } = match.params;

  return (
    <>
      <div>
        <p> Student </p>
        <div> {` The student name is: ${studentname} `} </div>

        <div> {` The student no is ${studentno} `} </div>
      </div>
    </>
  );
};

export default Student;
