import { ShopItem } from '../../types/ShopItem';
import CatalogProductCard from './CatalogProductCard';

interface CatalogSectionProps {
  title: string;
  items: ShopItem[];
}

const CatalogSection = ({ title, items }: CatalogSectionProps) => {
  return (
    <section>
      <h2 className="text-secondary mb-5 text-lg font-semibold">{title}</h2>
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
