import { createSlice } from '@reduxjs/toolkit';
import { CartItem } from '../../utils/interface';
import {
  getCartFromLocalStorage,
  removeCartInLocalStorage,
  updateCartInLocalStorage,
} from '../../utils/localStorageHelper';
const _ = require('lodash');

export interface UserInitialState {
  isLoading: boolean;
  cartItems: CartItem[];
}

const initialState: UserInitialState = {
  isLoading: false,
  cartItems: getCartFromLocalStorage(),
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    addItemToCart: (state, action) => {
      let temp: CartItem[] = _.cloneDeep(state.cartItems);

      let index = temp.findIndex(
        (item) => item.productId === action.payload.productId
      );

      if (index !== -1) {
        temp[index].quantity += action.payload.quantity;
      } else {
        temp.push(action.payload);
      }

      updateCartInLocalStorage(temp);
      return { ...state, cartItems: temp };
    },
    modifyCartItemQuantity: (state, action) => {
      let temp: CartItem[] = _.cloneDeep(state.cartItems);
      let index = temp.findIndex(
        (item) => item.productId === action.payload.productId
      );

      if (index !== -1) {
        temp[index].quantity = action.payload.quantity;
      }

      updateCartInLocalStorage(temp);
      return { ...state, cartItems: temp };
    },
    removeItemFromCart: (state, action) => {
      let temp: CartItem[] = _.cloneDeep(state.cartItems);

      let index = temp.findIndex(
        (item) => item.productId === action.payload.productId
      );

      if (index !== -1) {
        temp.splice(index, 1);
      }

      updateCartInLocalStorage(temp);
      return { ...state, cartItems: temp };
    },
    removeAllCartItems: (state) => {
      removeCartInLocalStorage();
      return { ...state, cartItems: [] };
    },
  },
  extraReducers: {},
});
export const {
  addItemToCart,
  modifyCartItemQuantity,
  removeAllCartItems,
  removeItemFromCart,
} = userSlice.actions;
export default userSlice.reducer;
