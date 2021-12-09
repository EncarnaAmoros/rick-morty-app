import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { CharactersList } from "src/app/CharactersList/CharactersList";
import { CharacterDetail } from "src/app/CharacterDetail/CharactersDetail";

import "./App.scss";

function App() {
  return (
    <div className="app">
      <h1 className="app__title">{"Rick & Morty"}</h1>
      <BrowserRouter>
        <Routes>
          <Route path="/character/:id" element={<CharacterDetail />} />
          <Route path="/" element={<CharactersList />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
