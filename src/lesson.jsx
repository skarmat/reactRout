import React from "react";
import ReactDOM from "react-dom";

const fName = "Sonam";
const lName = "Wangchuk";

const currentDate = new Date();
const year = currentDate.getFullYear();

ReactDOM.render(
  <>
    <h4>Hello {fName + " " + lName}!</h4>
    <p>
      This Application is created by: {fName} <br />
      copyright: {year}
    </p>
  </>,
  document.getElementById("lessonJSX")
);
