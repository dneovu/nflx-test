import CartSection from '../components/cart/CartSection';
import Footer from '../components/footer/Footer';
import Header from '../components/header/Header';
import PageWrapper from '../components/wrappers/PageWrapper';
// для теста данных. потом заменить на session storage
import { HEADPHONES } from '../data/shopItems';

const Cart = () => {
  return (
    <PageWrapper>
      <Header />
      <main className="mt-5">
        <h1 className={`text-primary mb-5 text-lg font-semibold`}>Корзина</h1>
        <div className="flex flex-wrap justify-between gap-4">
          <CartSection title="Корзина" items={HEADPHONES} />
          <section className="min-w-87">
            <div className="text-primary flex items-center justify-between rounded-2xl bg-white p-5.5 font-semibold uppercase">
              <h2>Итого</h2>
              <p>5431 ₽</p>
            </div>
            <button className="bg-primary w-full -translate-y-4 cursor-pointer rounded-2xl py-4 text-white">
              Перейти к оформлению
            </button>
          </section>
        </div>
      </main>
      <Footer />
    </PageWrapper>
  );
};

export default Cart;
