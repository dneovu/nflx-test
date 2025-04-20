import { useCartContext } from '../../contexts/cartContext';

interface QuantityButtonProps {
  itemId: number;
  quantity: number;
  action: 'increase' | 'decrease';
}

const QuantityButton = ({ itemId, quantity, action }: QuantityButtonProps) => {
  const { changeQuantity } = useCartContext();
  const valueToChange = action === 'increase' ? 1 : -1;

  return (
    <button
      onClick={() => changeQuantity(itemId, valueToChange)}
      disabled={quantity === 1 && action === 'decrease'}
      className={`bg-light-accent flex size-7 cursor-pointer items-center justify-center rounded-full text-3xl text-white select-none disabled:bg-gray-300`}
    >
      {action === 'increase' ? '+' : '−'}
    </button>
  );
};

export default QuantityButton;
