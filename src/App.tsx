import React from "react";
import "./App.css";
import Start from "./components/Start";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Start />,
  },
]);

function App() {
  return (
    <div className="App">
      <header className="App-header">Tic Tac Toe - Version Accessible </header>
      <main>
        <div className="App-body">
          <RouterProvider router={router} />
        </div>
      </main>
    </div>
  );
}

export default App;
