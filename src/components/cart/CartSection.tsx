import CartProductCard from './CartProductCard';
import { useCartContext } from '../../contexts/cartContext';
import { HEADPHONES } from '../../data/shopItems';
import { CartItem } from '../../types/CartItem';

const CartSection = () => {
  const { cartItems } = useCartContext();

  // сопоставляем id из контекста с shopItems data
  // и получаем данные для корзины
  const items: CartItem[] = cartItems.map((cartItem) => {
    const shopItem = HEADPHONES.find((item) => item.id === cartItem.id)!;

    return {
      id: shopItem.id,
      title: shopItem.title,
      price: shopItem.price,
      imgSrc: shopItem.imgSrc,
      quantity: cartItem.quantity,
    };
  });

  return (
    <section>
      <ul className="space-y-4">
        {items.map((item) => (
          <li key={item.id}>
            <CartProductCard
              id={item.id}
              quantity={item.quantity}
              title={item.title}
              price={item.price}
              imgSrc={item.imgSrc}
            />
          </li>
        ))}
      </ul>
    </section>
  );
};

export default CartSection;
