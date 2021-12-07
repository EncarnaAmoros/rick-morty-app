import React from "react";
import { CharactersList } from "./app/CharactersList/CharactersList";

import "./App.scss";

function App() {
  return (
    <div className="app">
      <h1 className="app__title">{"Rick & Morty"}</h1>
      <CharactersList />
    </div>
  );
}

export default App;
