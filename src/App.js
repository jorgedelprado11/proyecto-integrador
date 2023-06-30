import "./App.css";
import Cards from "./components/Cards/Cards.jsx";
import Nav from "./components/Nav/Nav";
import { useState } from "react";
import axios from "axios";
import { Routes, Route, Outlet } from "react-router-dom";
import About from "./components/About/About";
import Detail from "./components/Detail/Detail";

function App() {
  const [characters, setCharacters] = useState([]);

  const onSearch = (id) => {
    axios(`https://rickandmortyapi.com/api/character/${id}`)
      .then((response) => response.data)
      .then((data) => {
        if (data.name) {
          setCharacters((oldChars) => [...oldChars, data]);
        } else {
          window.alert("¡No hay personajes con este ID!");
        }
      });
  };

  const onClose = (id) => {
    const charactersFiltered = characters.filter(
      (character) => character.id !== Number(id)
    );
    setCharacters(charactersFiltered);
  };

  return (
    <Routes>
      <Route
        path="/"
        element={
          <div className="App">
            <Nav onSearch={onSearch} />
            <Outlet />
          </div>
        }
      >
        <Route
          path="/home"
          element={<Cards characters={characters} onClose={onClose} />}
        />
        <Route path="/about" element={<About />} />
        <Route
          path="/detail/:id"
          element={<Detail />}
        />
      </Route>
    </Routes>
  );
}

export default App;
