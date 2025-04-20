import { useEffect, useState } from 'react';
import { CartContext } from './cartContext';
import { CartItem } from '../types/CartItem';
import { HEADPHONES } from '../data/shopItems';

const CartProvider = ({ children }: { children: React.ReactNode }) => {
  const [cartItems, setCartItems] = useState<CartItem[]>([
    ...JSON.parse(sessionStorage.getItem('cartItems') || '[]'),
  ]);
  // для отображения кол-ва у иконки и суммы в итого
  let totalQuantity = 0;
  let totalPrice = 0;
  cartItems.forEach((item) => {
    totalQuantity += item.quantity;
    totalPrice += item.price * item.quantity;
  });

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
      const itemToAdd = HEADPHONES.find((item) => item.id === id);
      if (itemToAdd) {
        const cartItem: CartItem = {
          id: itemToAdd.id,
          title: itemToAdd.title,
          price: itemToAdd.price,
          imgSrc: itemToAdd.imgSrc,
          quantity: 1,
        };

        setCartItems((prev) => [...prev, cartItem]);
      }
    }
  };

  const changeQuantity = (id: number, value: number) => {
    setCartItems(
      cartItems.map((item) => {
        if (item.id === id) {
          return {
            ...item,
            quantity: item.quantity + value,
          };
        }
        return item;
      }),
    );
  };

  const deleteFromCart = (id: number) => {
    const updatedItems = cartItems.filter((item) => item.id !== id);

    if (updatedItems) {
      setCartItems(updatedItems);
    }
  };

  return (
    <CartContext.Provider
      value={{
        cartItems,
        totalQuantity,
        totalPrice,
        addToCart,
        deleteFromCart,
        changeQuantity,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
