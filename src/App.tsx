import React from "react";
import "./App.css";
import Start from "./components/Start";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <strong>Tic Tac Toe</strong>
      </header>
      <main>
        <div className="App-body">
          <Start />
        </div>
      </main>
    </div>
  );
}

export default App;
