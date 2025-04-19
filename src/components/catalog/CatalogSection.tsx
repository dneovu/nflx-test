import { ShopItem } from '../../types/ShopItem';
import SectionTitle from '../common/SectionTitle';
import CatalogProductCard from './CatalogProductCard';

interface CatalogSectionProps {
  title: string;
  items: ShopItem[];
}

const CatalogSection = ({ title, items }: CatalogSectionProps) => {
  return (
    <section>
      <SectionTitle title={title} />
      <ul className="flex flex-wrap gap-4">
        {items.map((item) => (
          <li key={item.id}>
            <CatalogProductCard
              id={item.id}
              title={item.title}
              price={item.price}
              prevPrice={item.prevPrice}
              rating={item.rating}
              imgSrc={item.imgSrc}
            />
          </li>
        ))}
      </ul>
    </section>
  );
};

export default CatalogSection;
