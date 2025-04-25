import React, { createContext, useState, ReactNode } from "react";

// Define the shape of a list item
export type ListItem = {
  title: string;
  number: number;
};

// Define the shape of the context
export type ListContextType = {
  items: ListItem[];
  addItem: () => void;
  removeItem: (number: number) => void;
  removeAllItems: () => void;
};

// Create the context with an initial default value
export const ListContext = createContext<ListContextType>({
  items: [],
  addItem: () => {},
  removeItem: () => {},
  removeAllItems: () => {}
});

// Create the provider component
export const ListProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [items, setItems] = useState<ListItem[]>([]);

  // Function to add a new item
  const addItem = () => {
    const newNumber = items.length > 0
      ? items[items.length - 1].number + 1
      : 1;

    setItems((prevState) => [...prevState, { title: "New Item", number: newNumber }]);
  };

  // Function to remove an item by its number
  const removeItem = (number: number) => {
    setItems((prevState) =>
      prevState.filter((item) => item.number !== number)
    );
  };

  // Function to remove all items
  const removeAllItems = () => {
    setItems([]);
  };

  // Provide the context value
  return (
    <ListContext.Provider value={{ items, addItem, removeItem, removeAllItems }}>
      {children}
    </ListContext.Provider>
  );
};
