import { createContext, useState } from "react";
import Card from "./components/ui/Card";
import useFetch from "./shared/useFetch";

const ClothesContext = createContext<any | null>(null);

interface Props {
  children: React.ReactNode;
}

export const ClothesContextProvider: React.FC<Props> = ({ children }) => {
  const [cart, setCart] = useState<any>([]);

  const {
    data: items,
    isLoading,
    error,
  } = useFetch("http://localhost:8000/items");

  const addItem = (item: any): void => {
    setCart((prevState: any[]) => prevState.concat(item));
  };

  const removeItem = (item: any): void => {
    setCart((prevState: any[]) =>
      prevState.filter((i: any) => i.id !== item.id)
    );
  };

  const returnCart = (): JSX.Element => {
    return (
      <>
        {cart.map((item: any, index: number) => {
          return (
            <div onClick={() => removeItem(item)}>
              <Card key={index} text="Remove from cart">
                <h3>{item.name}</h3>
                <p>{item.price}$</p>
              </Card>
            </div>
          );
        })}
      </>
    );
  };

  const context: any = {
    items: items,
    isLoading: isLoading,
    error: error,
    cart: cart,
    addItem: addItem,
    removeItem: removeItem,
    returnCart: returnCart,
  };

  return (
    <ClothesContext.Provider value={context}>
      {isLoading && <h1>Loading...</h1>}
      {error && <h1>An error has occured</h1>}
      {items && children}
    </ClothesContext.Provider>
  );
};

export default ClothesContext;
