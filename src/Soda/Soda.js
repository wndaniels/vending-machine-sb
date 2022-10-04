import { Link } from "react-router-dom";
import "./Soda.css";
import sodaImg from "../Assets/Soda.png";

const Soda = () => {
  return (
    <div className="Soda">
      <h1>
        <Link className="Soda-return" to={"/"}>
          Pick Another Snack!
        </Link>
      </h1>
      <img src={sodaImg} alt="can of soda" />
    </div>
  );
};

export default Soda;
