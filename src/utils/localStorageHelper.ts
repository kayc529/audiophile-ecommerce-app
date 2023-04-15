import { CartItem } from './interface';

export const getCartFromLocalStorage = () => {
  try {
    const jsonStr = localStorage.getItem('cart');
    if (jsonStr) {
      const cartItems = JSON.parse(jsonStr);
      return cartItems;
    }

    return [];
  } catch (error) {
    console.log(error);
    return [];
  }
};

export const updateCartInLocalStorage = (cartItems: CartItem[]) => {
  const jsonStr = JSON.stringify(cartItems);
  localStorage.setItem('cart', jsonStr);
};

export const removeCartInLocalStorage = () => {
  localStorage.removeItem('cart');
};
