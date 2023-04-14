import { createSlice } from '@reduxjs/toolkit';
import { CartItem } from '../../utils/interface';
const _ = require('lodash');

export interface UserInitialState {
  isLoading: boolean;
  cartItems: CartItem[];
}

const initialState: UserInitialState = {
  isLoading: false,
  cartItems: [],
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

      return { ...state, cartItems: temp };
    },
    removeAllCartItems: (state) => {
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
