import Footer from '../components/footer/Footer';
import Header from '../components/header/Header';
import PageWrapper from '../components/wrappers/PageWrapper';

const Favorites = () => {
  return (
    <PageWrapper>
      <Header />
      <main className="flex-auto">
        <h1>Favorites</h1>
      </main>
      <Footer />
    </PageWrapper>
  );
};

export default Favorites;
