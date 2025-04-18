import CatalogSection from '../components/catalog/CatalogSection';
import Footer from '../components/footer/Footer';
import Header from '../components/header/Header';
import PageWrapper from '../components/wrappers/PageWrapper';
import { HEADPHONES, WIRELESS_HEADPHONES } from '../data/shopItems';

const Home = () => {
  return (
    <PageWrapper>
      <Header />
      <main className="mt-5 space-y-5">
        <CatalogSection title="Наушники" items={HEADPHONES} />
        <CatalogSection
          title="Беспроводные наушники"
          items={WIRELESS_HEADPHONES}
        />
      </main>
      <Footer />
    </PageWrapper>
  );
};

export default Home;
