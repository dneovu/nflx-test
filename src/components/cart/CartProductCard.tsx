import QuantityButton from './QuantityButton';
import { CartItem } from '../../types/CartItem';

const CartProductCard = ({ title, price, imgSrc, quantity }: CartItem) => {
  return (
    <article className="flex max-w-158 flex-col gap-4 rounded-2xl bg-white p-6 shadow-md sm:min-w-158">
      <div className="flex items-center gap-6">
        <div className="flex h-34 w-36.5 items-center justify-center select-none">
          <img src={imgSrc} alt={title} />
        </div>
        <div className="space-y-3">
          <h2 className="text-primary font-medium">{title}</h2>
          <p className="text-secondary font-semibold">{price} ₽</p>
        </div>
      </div>
      <div className="flex items-center justify-between pl-3.5">
        <div className="flex gap-6">
          <QuantityButton text="−" />
          <div className="flex w-3 justify-center">
            <span>{quantity}</span>
          </div>
          <QuantityButton text="+" />
        </div>
        <p className="text-primary font-semibold">{price * quantity} ₽</p>
      </div>
    </article>
  );
};

export default CartProductCard;
