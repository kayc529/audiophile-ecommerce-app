import { CartItem } from './interface';

const VAT = 0.13;

export const calculateTotalAmount = (cartItems: CartItem[]) => {
  return cartItems.reduce(
    (acc, cartItem) => acc + cartItem.price * cartItem.quantity,
    0
  );
};

export const calculateShipping = () => {
  return 50;
};

export const calculateVAT = (cartItems: CartItem[] | number) => {
  return Array.isArray(cartItems)
    ? calculateTotalAmount(cartItems) * VAT
    : cartItems * VAT;
};

export const calculateGrandTotalAmount = (cartItems: CartItem[]) => {
  let total = calculateTotalAmount(cartItems);
  return total + calculateShipping() + calculateVAT(total);
};

export const getAllCheckoutAmount = (cartItems: CartItem[]) => {
  return {
    total: calculateTotalAmount(cartItems),
    tax: calculateVAT(cartItems),
    grandTotal: calculateGrandTotalAmount(cartItems),
    shipping: calculateShipping(),
  };
};
