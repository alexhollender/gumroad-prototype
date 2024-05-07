"use client";

import * as React from "react";
import { StaticImageData } from "next/image";
import stream from "../public/images/stream.png";
import books from "../public/images/books.png";

export type Product = {
  _id: string;
  title: string;
  image?: StaticImageData;
  price: number;
  sales: number;
};

// Define the structure of the global context
type GlobalContextType = {
  products: Product[];
  addProduct: (product: Product) => void;
};

// Initialize the global context with an empty array and a no-op function
const GlobalContext = React.createContext<GlobalContextType>({
  products: [],
  addProduct: () => {}, // No-op function
});

export function GlobalProvider({ children }: { children: React.ReactNode }) {
  const [products, setProducts] = React.useState<Product[]>([
    {
      _id: "less-is-more",
      title: "Less is More: Using a flip-phone in 2024",
      image: stream,
      price: 25,
      sales: 350,
    },
    {
      _id: "book-club",
      title: "Naturalist book club",
      image: books,
      price: 8,
      sales: 842,
    },
  ]);

  // Function to add a new product to the products array
  const addProduct = (product: Product) => {
    setProducts((prevProducts) => [...prevProducts, product]);
  };

  return (
    <GlobalContext.Provider
      value={{
        products,
        addProduct,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
}

export const useGlobalContext = () => {
  const context = React.useContext(GlobalContext);
  if (!context) {
    throw new Error("useGlobalContext must be used within a GlobalProvider");
  }
  return context;
};
