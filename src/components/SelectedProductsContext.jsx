import { createContext, useState } from 'react';

export const SelectedProductsContext = createContext();

export const SelectedProductsProvider = ({ children }) => {
  const [selectedProducts, setSelectedProducts] = useState([]);

  const clearSelectedProducts = () => {
    setSelectedProducts([]);
  };
  
  return (
    <SelectedProductsContext.Provider value={{ selectedProducts, setSelectedProducts, clearSelectedProducts  }}>
      {children}
    </SelectedProductsContext.Provider>
  );
};