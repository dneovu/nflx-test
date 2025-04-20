import CatalogSection from '../components/catalog/CatalogSection';
import Footer from '../components/footer/Footer';
import Header from '../components/header/Header';
import PageWrapper from '../components/wrappers/PageWrapper';
import { HEADPHONES } from '../data/shopItems';

const Home = () => {
  const WIRED_HEADPHONES = HEADPHONES.filter((item) => item.type === 'wired');
  const WIRELESS_HEADPHONES = HEADPHONES.filter(
    (item) => item.type === 'wireless',
  );

  return (
    <PageWrapper>
      <Header />
      <main className="mt-5 flex-auto space-y-5">
        <CatalogSection title="Наушники" items={WIRED_HEADPHONES} />
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
