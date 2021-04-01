import React, { useState, useEffect } from "react";

const products = [
  {
    id: 1,
    image: {
      sourceUrl:
        "https://d1rn6kzjmi8824.cloudfront.net/wp-content/uploads/2020/07/09062732/vegetables11-4.jpg",
    },
    name: "New Product 1",
    price: "£10.00",
    regularPrice: "£16.00",
    quantity: 0,
    description: "hello",
    prices: "price_1IbIoySFrPpOeTCilACys1sJ",
  },
  {
    id: 2,
    image: {
      sourceUrl:
        "https://d1rn6kzjmi8824.cloudfront.net/wp-content/uploads/2020/07/09062732/vegetables11-4.jpg",
    },
    name: "New Product 2",
    price: "£10.00",
    regularPrice: "£16.00",
    quantity: 0,
    description: "hello",
  },
  {
    id: 3,
    image: {
      sourceUrl:
        "https://d1rn6kzjmi8824.cloudfront.net/wp-content/uploads/2020/07/09062732/vegetables11-4.jpg",
    },
    name: "New Product 3",
    price: "£10.00",
    regularPrice: "£16.00",
    quantity: 0,
    description: "hello",
  },
  {
    id: 4,
    image: {
      sourceUrl:
        "https://d1rn6kzjmi8824.cloudfront.net/wp-content/uploads/2020/07/09062732/vegetables11-4.jpg",
    },
    name: "New Product 4",
    price: "£10.00",
    regularPrice: "£16.00",
    quantity: 0,
    description: "hello",
  },
  {
    id: 5,
    image: {
      sourceUrl:
        "https://d1rn6kzjmi8824.cloudfront.net/wp-content/uploads/2020/07/09062732/vegetables11-4.jpg",
    },
    name: "New Product 5",
    price: "£10.00",
    regularPrice: "£16.00",
    quantity: 0,
    description: "hello",
  },
  {
    id: 6,
    image: {
      sourceUrl:
        "https://d1rn6kzjmi8824.cloudfront.net/wp-content/uploads/2020/07/09062732/vegetables11-4.jpg",
    },
    name: "New Product 6",
    price: "£10.00",
    regularPrice: "£16.00",
    quantity: 0,
    description: "hello",
  },
];

export const ShopContext = React.createContext();

const ShopContextProvider = (props) => {
  const [store, setStore] = useState([]);
  const [value, setValue] = useState(0);
  useEffect(() => {
    setValue(store.reduce((acc, product) => acc + product.quantity, 0));
  }, [store, value]);
  // Decrement Function
  const Decrement = (product) => {
    setStore((prevStore) =>
      prevStore.find(({ id }) => id === product.id)?.quantity > 1
        ? prevStore.map((item) =>
            item.id === product.id
              ? { ...item, quantity: item.quantity - 1 }
              : item
          )
        : prevStore.filter(({ id }) => id !== product.id)
    );
  };
  // Increment Function
  const addProductToCart = (product) =>
    !store.find(({ id }) => id === product.id)
      ? (setStore((prevData) => [...prevData, { ...product, quantity: 1 }]),
        setValue(value + 1))
      : setStore((prevStore) =>
          prevStore.map((item) =>
            item.id === product.id
              ? { ...item, quantity: item.quantity + 1 }
              : item
          )
        );
  return (
    <ShopContext.Provider
      value={{ products, addProductToCart, Decrement, value, store }}
    >
      {props.children}
    </ShopContext.Provider>
  );
};
export default ShopContextProvider;
