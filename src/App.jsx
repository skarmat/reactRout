import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

const khorlo =
  "https://upload.wikimedia.org/wikipedia/commons/thumb/3/35/8-Signs_KHORLO.svg/1920px-8-Signs_KHORLO.svg.png";
function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <a href="https://hial.edu.in/static/logo.png" target="_blank">
          <img
            src="https://hial.edu.in/static/logo.png"
            className="logo"
            alt="Vite logo"
          />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={khorlo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>HIAL + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      <div className="readMe">
        <h4>Read This Paragraph and Start Learniig React</h4>
        <p>
          <ol>
            <li>Learn from Anjela's Video</li>
            <li>frok it on Code SandBox</li>
            <li>Deploy Same on VS Code / Local Environment</li>
            <li>Commit to Git Hub</li>
            <li>Create separate file for each lesson</li>
          </ol>
        </p>

        <p>
          <ol>
            <li>
              <a href="/lessonJSX.html">Lesson on Jsx</a>
            </li>
            <li>
              <a href="#">Lesson on Jsx</a>
            </li>
          </ol>
        </p>
      </div>
    </>
  );
}

export default App;
