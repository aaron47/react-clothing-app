import Card from "./ui/Card";
import { useContext } from "react";
import ClothesContext from "../ClothesContext";

const Products: React.FC = () => {
  const clothesContext = useContext(ClothesContext);
  return (
    <>
      {clothesContext.isLoading && <h1>Loading...</h1>}
      {clothesContext.error && <h1>There was an error</h1>}

      <div className="clothes-container">
        {clothesContext.items &&
          clothesContext.items.map((item: any, index: number) => {
            return (
              <div key={item.name} onClick={() => clothesContext.addItem(item)}>
                <Card key={index} text="Add to cart">
                  <h3>{item.name}</h3>
                  <p>{item.price}$</p>
                </Card>
              </div>
            );
          })}
      </div>
    </>
  );
};

export default Products;
