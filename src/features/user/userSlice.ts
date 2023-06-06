import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import {
  CartItem,
  RegisterUser,
  User,
  LoginCredentials,
} from '../../utils/interface';
import {
  getCartFromLocalStorage,
  getUserInfoFromLocalStorage,
  removeCartInLocalStorage,
  removeUserInfoFromLocalStorage,
  storeUserInfoInLocalStorage,
  updateCartInLocalStorage,
} from '../../utils/localStorageHelper';
import customFetch from '../../utils/customFetch';
const _ = require('lodash');

export interface UserInitialState {
  isLoading: boolean;
  user: User | undefined;
  cartItems: CartItem[];
  isUsingDefaultAddress: boolean;
}

const initialState: UserInitialState = {
  isLoading: false,
  user: getUserInfoFromLocalStorage(),
  cartItems: getCartFromLocalStorage(),
  isUsingDefaultAddress: false,
};

export const loginUser = createAsyncThunk<
  { success: boolean; user: User },
  LoginCredentials,
  { rejectValue: { success: boolean; msg: string } }
>('user/login', async (credentials, thunkApi) => {
  try {
    const res = await customFetch.post('/auth/login', credentials);
    return res.data;
  } catch (error: any) {
    console.log('login', error);
    return thunkApi.rejectWithValue({
      success: false,
      msg: error.response.data.msg,
    });
  }
});

export const registerUser = createAsyncThunk<
  { success: boolean; user: User },
  RegisterUser,
  { rejectValue: { success: boolean; msg: string } }
>('user/register', async (newUser, thunkApi) => {
  try {
    const res = await customFetch.post('/auth/register', newUser);
    return res.data;
  } catch (error: any) {
    console.log('register', error);
    return thunkApi.rejectWithValue({
      success: false,
      msg: error.response.data.msg,
    });
  }
});

export const logoutUser = createAsyncThunk(
  'user/logout',
  async (_, thunkApi) => {
    try {
      const res = await customFetch.get('/auth/logout');
      return res.data;
    } catch (error: any) {
      let errMsg = error.response.data.msg || 'Something went wrong';
      console.log(errMsg);
      return thunkApi.rejectWithValue(errMsg);
    }
  }
);

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
    toggleIsUsingDefaultAddress: (state) => {
      return { ...state, isUsingDefaultAddress: !state.isUsingDefaultAddress };
    },
  },
  extraReducers: (builder) => {
    builder.addCase(loginUser.pending, (state) => {
      state.isLoading = true;
      state.user = undefined;
    });
    builder.addCase(loginUser.fulfilled, (state, { payload }) => {
      storeUserInfoInLocalStorage(payload.user);
      state.isLoading = false;
      state.user = payload.user;
    });
    builder.addCase(loginUser.rejected, (state) => {
      state.isLoading = false;
      state.user = undefined;
    });
    builder.addCase(registerUser.pending, (state) => {
      state.isLoading = true;
      state.user = undefined;
    });
    builder.addCase(registerUser.fulfilled, (state, { payload }) => {
      storeUserInfoInLocalStorage(payload.user);
      state.isLoading = false;
      state.user = payload.user;
    });
    builder.addCase(registerUser.rejected, (state) => {
      state.isLoading = false;
      state.user = undefined;
    });
    builder.addCase(logoutUser.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(logoutUser.fulfilled, (state, { payload }) => {
      removeUserInfoFromLocalStorage();
      state.isLoading = false;
      state.user = undefined;
    });
    builder.addCase(logoutUser.rejected, (state) => {
      state.isLoading = false;
    });
  },
});

export const {
  addItemToCart,
  modifyCartItemQuantity,
  removeAllCartItems,
  removeItemFromCart,
  toggleIsUsingDefaultAddress,
} = userSlice.actions;

export default userSlice.reducer;
