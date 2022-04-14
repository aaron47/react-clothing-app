import { useContext } from "react";
import ClothesContext from "../ClothesContext";

const Cart: React.FC = () => {
  const clothesContext = useContext(ClothesContext);
  return (
    <>
      <div className="clothes-container">{clothesContext.returnCart()}</div>
    </>
  );
};

export default Cart;
