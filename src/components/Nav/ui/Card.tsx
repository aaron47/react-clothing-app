import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTShirt } from "@fortawesome/free-solid-svg-icons";

interface Props {
  children: React.ReactNode;
  text: string;
}

const Card: React.FC<Props> = ({ children, text }) => {
  return (
    <div className="card">
      <div className="container">
        <span className="tshirt">
          <FontAwesomeIcon icon={faTShirt} />
        </span>
        {children}
        <p>{text}</p>
      </div>
    </div>
  );
};

export default Card;
