import { useState } from "react";
import "./App.css";
import Header from "./Header";
import PokeList from "./PokeList";
import PokeSearch from "./PokeSearch";

function App() {
  const [searchTerm, setSearchTerm] = useState("normal");

  return (
    <div className="app">
      <Header searchTerm={searchTerm} />
      <PokeSearch setSearchTerm={setSearchTerm} />
      <PokeList searchTerm={searchTerm} />
    </div>
  );
}

export default App;
