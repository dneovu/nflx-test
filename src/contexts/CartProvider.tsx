import { useEffect, useState } from 'react';
import { CartStorageItem } from '../types/CartStorageItem';
import { CartContext } from './cartContext';

const CartProvider = ({ children }: { children: React.ReactNode }) => {
  const [cartItems, setCartItems] = useState<CartStorageItem[]>([
    ...JSON.parse(sessionStorage.getItem('cartItems') || '[]'),
  ]);
  const totalQuantity = cartItems.reduce((acc, item) => acc + item.quantity, 0);

  useEffect(() => {
    sessionStorage.setItem('cartItems', JSON.stringify(cartItems));
  }, [cartItems]);

  const addToCart = (id: number) => {
    const existingItem = cartItems.find((item) => item.id === id);

    if (existingItem) {
      setCartItems(
        cartItems.map((item) => {
          if (item.id === id) {
            return {
              ...item,
              quantity: item.quantity + 1,
            };
          }
          return item;
        }),
      );
    } else {
      setCartItems((prev) => [...prev, { id, quantity: 1 }]);
    }
  };

  return (
    <CartContext.Provider value={{ cartItems, totalQuantity, addToCart }}>
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
