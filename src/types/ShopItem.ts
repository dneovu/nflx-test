export type ShopItem = {
  id: number;
  title: string;
  price: number;
  prevPrice?: number;
  rating: number;
  imgSrc: string;
  type: 'wired' | 'wireless';
};
