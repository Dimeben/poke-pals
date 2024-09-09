import { useState } from "react";
import "./App.css";
import Header from "./Header";
import TypeBox from "../TypeBox";
import PokeList from "./PokeList";
import PokeSearch from "./PokeSearch";

function App() {
  const [searchTerm, setSearchTerm] = useState("normal");

  return (
    <div className="app">
      <Header searchTerm={searchTerm} />
      <TypeBox />
      <PokeSearch setSearchTerm={setSearchTerm} />
      <PokeList searchTerm={searchTerm} />
    </div>
  );
}

export default App;
