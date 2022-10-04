import { Link } from "react-router-dom";
import "./Chips.css";
import chipsImg from "../Assets/Chips.png";

const Chips = () => {
  return (
    <div className="Chips">
      <h1>
        <Link className="Chips-return" to={"/"}>
          Pick Another Snack!
        </Link>
      </h1>
      <img src={chipsImg} alt="bag of chips" />
    </div>
  );
};

export default Chips;
