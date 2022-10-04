import "./VendingMachine.css";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

import vMachineBGImg from "../Assets/VendingMachine.png";
import vMachineSign from "../Assets/VendingMachine-sign.png";

const VendingMachine = () => {
  return (
    <div
      className="VendingMachine"
      style={{ backgroundImage: `url(${vMachineBGImg})` }}
    >
      <div className="VendingMachine-info">
        <img src={vMachineSign} alt="vending machine sign" />
        <h1>PICK A SNACK!</h1>
        <h2>
          <Link to={"/soda"}>Soda</Link>
        </h2>
        <h2>
          <Link to={"/chips"}>Chips</Link>
        </h2>
        <h2>
          <Link to={"/candy"}>Candy</Link>
        </h2>
      </div>
    </div>
  );
};

export default VendingMachine;
