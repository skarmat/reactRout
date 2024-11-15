import React from "react";
import ReactDOM from "react-dom";
import "./lesson.css";

const fName = "Mere";
const lName = "Bai ly!";

const currentDate = new Date();
const year = currentDate.getFullYear();

const picsunImages = "https://picsum.photos/200/300";

ReactDOM.render(
  <>
    <h4 className="heading">Julley {fName + " " + lName}!</h4>
    <p className="para">
      This Application is created by: {fName} <br />
      copyright: {year}
    </p>
    <p className="editable" contentEditable="true" spellCheck="false">
      This paragraph if editable{" "}
    </p>
    <div className="images">
      <img className="random-image" src={picsunImages + "?grayscale"} alt="" />
      <img
        className="random-image"
        src="https://img.freepik.com/free-photo/colorful-design-with-spiral-design_188544-9588.jpg"
        alt=""
      />
      <img
        className="random-image"
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1Dw7-4lVfRq74_YEiPEt4e-bQ0_6UA2y73Q&s"
        alt=""
      />
    </div>
  </>,
  document.getElementById("lessonJSX")
);
