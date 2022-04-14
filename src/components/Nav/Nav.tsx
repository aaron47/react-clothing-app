import { useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBriefcase } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import ClothesContext from "../../ClothesContext";

const Nav: React.FC = () => {
  const clothesContext = useContext(ClothesContext);

  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Wear</Link>
        </li>
        <li className="right-li">
          {" "}
          <span>
            <Link to="/cart">
              <FontAwesomeIcon icon={faBriefcase} />{" "}
              {clothesContext.cart.length}
            </Link>
          </span>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
