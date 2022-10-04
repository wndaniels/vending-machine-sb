import { Link } from "react-router-dom";
import "./Candy.css";
import candyImg from "../Assets/Candy.png";

const Candy = () => {
  return (
    <div className="Candy">
      <h1>
        <Link className="Candy-return" to={"/"}>
          Pick Another Snack!
        </Link>
      </h1>
      <img src={candyImg} alt="bag of candy" />
    </div>
  );
};

export default Candy;
