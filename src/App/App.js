import { Routes, Route } from "react-router-dom";
import "./App.css";

import VendingMachine from "../VendingMachine/VendingMachine";
import Soda from "../Soda/Soda";
import Chips from "../Chips/Chips";
import Candy from "../Candy/Candy";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<VendingMachine />}></Route>
        <Route exact path="/soda" element={<Soda />}></Route>
        <Route exact path="/chips" element={<Chips />}></Route>
        <Route exact path="/candy" element={<Candy />}></Route>
      </Routes>
    </div>
  );
}

export default App;
