import React from "react";
import ReactDOM from "react-dom";

const fName = "Sonam";
const lName = "Wangchuk";

ReactDOM.render(
  <>
    <h4>Hello {fName + " " + lName}!</h4>
  </>,
  document.getElementById("lessonJSX")
);
