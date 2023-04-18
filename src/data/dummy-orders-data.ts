import { Order } from '../utils/interface';
import { dummyCartItems } from './cart-data';

export const dummyOrders: Order[] = [
  {
    id: '111-111-1111',
    status: 'processing',
    items: dummyCartItems,
    grandTotal: 15.8,
    subtotal: 13.98,
    tax: 1.82,
    shipping: 0,
    paymentMethod: 'emoney',
    cardNumber: '*****1234',
    shippingAddress: {
      attn: 'John Doe',
      unit: 'Unit 1201',
      street1: '1137 Williams Avenue',
      city: 'New York',
      state: 'New York',
      postalCode: '10001',
      country: 'United States',
    },
    createdAt: 'April 15, 2023',
  },
  {
    id: '111-111-1112',
    status: 'shipped',
    items: dummyCartItems,
    grandTotal: 15.8,
    subtotal: 13.98,
    tax: 1.82,
    shipping: 50,
    paymentMethod: 'cash',
    shippingAddress: {
      attn: 'John Doe',
      unit: 'Unit 1201',
      street1: '1137 Williams Avenue',
      city: 'New York',
      state: 'New York',
      postalCode: '10001',
      country: 'United States',
    },
    createdAt: 'April 11, 2023',
  },
];
