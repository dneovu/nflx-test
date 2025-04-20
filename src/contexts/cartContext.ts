import { createContext, useContext } from 'react';
import { CartItem } from '../types/CartItem';

interface CartContext {
  cartItems: CartItem[];
  totalQuantity: number;
  totalPrice: number;
  addToCart: (id: number) => void;
}

const defaultCartContext: CartContext = {
  cartItems: [],
  totalQuantity: 0,
  totalPrice: 0,
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
