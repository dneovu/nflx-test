import { useCartContext } from '../../contexts/cartContext';

const CheckoutSection = () => {
  const { totalPrice } = useCartContext();

  return (
    <section className="min-w-87">
      <div className="text-primary flex items-center justify-between rounded-2xl bg-white p-5.5 font-semibold uppercase">
        <h2>Итого</h2>
        <p>{totalPrice} ₽</p>
      </div>
      <button className="bg-primary w-full -translate-y-4 cursor-pointer rounded-2xl py-4 text-white">
        Перейти к оформлению
      </button>
    </section>
  );
};

export default CheckoutSection;
