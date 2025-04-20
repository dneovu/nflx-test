import CartProductCard from './CartProductCard';
import { useCartContext } from '../../contexts/cartContext';

const CartSection = () => {
  const { cartItems } = useCartContext();

  return (
    <section>
      <ul className="space-y-4">
        {cartItems.map((item) => (
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
