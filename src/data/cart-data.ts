import { CartItem } from '../utils/interface';

export const dummyCartItems: CartItem[] = [
  {
    id: 1,
    productId: 'xx99-mark-two-headphones',
    productCode: 'XX99 MK II',
    thumbnail:
      '/assets/product-xx99-mark-two-headphones/mobile/image-product.jpg',
    quantity: 1,
    price: 2999,
  },
  {
    id: 3,
    productId: 'xx59-headphones',
    productCode: 'XX59',
    thumbnail: '/assets/product-xx59-headphones/mobile/image-product.jpg',
    quantity: 2,
    price: 899,
  },
  {
    id: 6,
    productId: 'yx1-wireless-earphones',
    productCode: 'YX1',
    thumbnail: '/assets/product-yx1-earphones/mobile/image-product.jpg',
    quantity: 1,
    price: 599,
  },
];
