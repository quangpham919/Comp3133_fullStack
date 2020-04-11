import React from "react";
import { Link } from "react-router-dom";

const Navigation = () => {
  const studentname = "Quang Pham";
  return (
    <div>
      <ul>
        <li>
          <Link to="/"> Home </Link>
        </li>
        <li>
          <Link to="/contact"> Contact </Link>{" "}
        </li>
        <li>
          <Link to="/about"> About </Link>{" "}
        </li>
        <li>
          <Link to="/student/Quang Pham"> Student: {studentname} </Link>{" "}
        </li>
        <li>
          <Link to="/student/Quang Pham/101136246">
            {" "}
            Student: {studentname}, Student No: 101136246{" "}
          </Link>{" "}
        </li>
        <li>
          {" "}
          <Link to="/redirect"> Redirect </Link>{" "}
        </li>
      </ul>
    </div>
  );
};

export default Navigation;
