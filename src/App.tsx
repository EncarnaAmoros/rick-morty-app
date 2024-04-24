import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { CharactersList } from "app/CharactersList/CharactersList";
import { CharacterDetail } from "app/CharacterDetail/CharactersDetail";

import "./App.scss";

export const App = () => {
  const title = "Rick & Morty";

  return (
    <div className="app">
      <div className="app__header">
        <h1 className="app__title">{title}</h1>
      </div>
      <BrowserRouter>
        <Routes>
          <Route path="/character/:id" element={<CharacterDetail />} />
          <Route path="/" element={<CharactersList />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};
