import CartSection from '../components/cart/CartSection';
import CheckoutSection from '../components/cart/CheckoutSection';
import Footer from '../components/footer/Footer';
import Header from '../components/header/Header';
import PageWrapper from '../components/wrappers/PageWrapper';
import { useCartContext } from '../contexts/cartContext';

const Cart = () => {
  const { totalQuantity } = useCartContext();

  return (
    <PageWrapper>
      <Header />
      <main className="mt-5">
        <h1 className={`text-primary mb-5 text-lg font-semibold`}>Корзина</h1>
        {totalQuantity > 0 ? (
          <div className="flex flex-wrap justify-between gap-4">
            <CartSection />
            <CheckoutSection />
          </div>
        ) : (
          <p>У вас пока нет товаров в корзине</p>
        )}
      </main>
      <Footer />
    </PageWrapper>
  );
};

export default Cart;
