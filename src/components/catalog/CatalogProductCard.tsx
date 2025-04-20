import Star from '../../assets/StarIcon.svg?react';
import { useCartContext } from '../../contexts/cartContext';
import { ShopItem } from '../../types/ShopItem';

type CatalogProductCardProps = Omit<ShopItem, 'type'>;

const CatalogProductCard = ({
  id,
  title,
  price,
  prevPrice,
  rating,
  imgSrc,
}: CatalogProductCardProps) => {
  const { addToCart } = useCartContext();

  return (
    <article className="flex min-h-[407px] min-w-[350px] flex-col justify-between rounded-2xl bg-white p-5 text-lg font-semibold shadow-md">
      <div className="flex min-h-56 w-full items-center justify-center select-none">
        <img src={imgSrc} alt={title} width={220} />
      </div>
      <div className="flex justify-between">
        <div className="flex flex-col gap-6">
          <h3>{title}</h3>
          <div className="flex gap-2.5">
            <Star />
            <span className="text-secondary">{rating}</span>
          </div>
        </div>
        <div className="flex flex-col items-center gap-6">
          <p className="text-accent">{price} ₽</p>
          {prevPrice && (
            <p className="absolute translate-y-6 text-sm text-amber-400 line-through">
              {prevPrice} ₽
            </p>
          )}
          <button
            className="text-primary hover:text-accent cursor-pointer"
            onClick={() => addToCart(id)}
          >
            Купить
          </button>
        </div>
      </div>
    </article>
  );
};

export default CatalogProductCard;
