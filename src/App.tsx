import React from "react";
import "./App.css";
import { Search } from "./screens/search/search";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Invest Guinea</h1>
      </header>
      <div className="container">
        <Search />
      </div>
    </div>
  );
}

export default App;
