// import React from "react";
// import logo from "./logo.svg";
// import "./App.css";

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
import React from "react";
import ReactDOM from "react-dom";
import "./calculator.css";

function Calculator() {
  return (
    <div className="calculator">
      <div id="display" className="display">
        125
      </div>
      <button>1</button>
      <button>2</button>
      <button>3</button>
      <button>4</button>
      <button>1</button>
      <button>2</button>
      <button>3</button>
      <button>4</button>
      <button>1</button>
      <button>2</button>
      <button>3</button>
      <button>4</button>
      <button>1</button>
      <button>2</button>
      <button>3</button>
      <button>4</button>
      <button>1</button>
      <button>2</button>
      <button>3</button>
      <button>4</button>
    </div>
  );
}

//ReactDOM.render(<App />, document.getElementById("app"));

export default Calculator;
