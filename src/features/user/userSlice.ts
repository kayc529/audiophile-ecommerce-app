import { createSlice } from '@reduxjs/toolkit';

export interface UserInitialState {
  isLoading: boolean;
  isMenuOpened: boolean;
  isCartOpened: boolean;
}

const initialState: UserInitialState = {
  isLoading: false,
  isMenuOpened: false,
  isCartOpened: false,
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    toggleTopMenu: (state) => {
      return { ...state, isMenuOpened: !state.isMenuOpened };
    },
    toggleCart: (state) => {
      return { ...state, isCartOpened: !state.isCartOpened };
    },
  },
  extraReducers: {},
});
export const { toggleTopMenu, toggleCart } = userSlice.actions;
export default userSlice.reducer;
