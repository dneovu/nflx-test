import { CartStorageItem } from './CartStorageItem';
import { ShopItem } from './ShopItem';

export type CartItem = Omit<ShopItem, 'prevPrice' | 'rating' | 'type'> &
  CartStorageItem;
