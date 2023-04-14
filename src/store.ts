import { configureStore } from '@reduxjs/toolkit';
import userReducer from './features/user/userSlice';
import modalSlice from './features/modal/modalSlice';
import productSlice from './features/product/productSlice';

//dispatch type for useDispatch
export type AppDispatch = typeof store.dispatch;
//root state type for useSelector
export type RootState = ReturnType<typeof store.getState>;

export const store = configureStore({
  reducer: {
    user: userReducer,
    modal: modalSlice,
    product: productSlice,
  },
});
