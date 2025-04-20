import { createContext, useContext } from 'react';
import { CartStorageItem } from '../types/CartStorageItem';

interface CartContext {
  cartItems: CartStorageItem[];
  totalQuantity: number;
  addToCart: (id: number) => void;
}

const defaultCartContext: CartContext = {
  cartItems: [],
  totalQuantity: 0,
  addToCart: () => {},
};

export const CartContext = createContext<CartContext>(defaultCartContext);

export const useCartContext = () => {
  const context = useContext(CartContext);

  if (context === undefined) {
    throw new Error('useCartContext must be used within a CartProvider');
  }

  return context;
};
