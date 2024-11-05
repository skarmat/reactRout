import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
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
      </div>
    </>
  );
}

export default App;
