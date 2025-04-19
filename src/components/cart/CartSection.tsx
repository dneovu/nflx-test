import { ShopItem } from '../../types/ShopItem';
import CartProductCard from './CartProductCard';

interface CartSectionProps {
  title: string;
  items: ShopItem[];
}

const CartSection = ({ items }: CartSectionProps) => {
  return (
    <section>
      <ul className="space-y-4">
        {items.map((item) => (
          <li key={item.id}>
            <CartProductCard
              id={item.id}
              quantity={5} // заменить
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
