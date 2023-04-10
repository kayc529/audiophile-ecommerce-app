import { createSlice } from '@reduxjs/toolkit';

export interface ModalSliceStates {
  isHeaderMenuOpen: boolean;
  isCartOpen: boolean;
}

const initialState: ModalSliceStates = {
  isHeaderMenuOpen: false,
  isCartOpen: false,
};

export const modalSlice = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    toggleHeaderMenu: (state) => {
      return { ...state, isHeaderMenuOpen: !state.isHeaderMenuOpen };
    },
    toggleCart: (state) => {
      return { ...state, isCartOpen: !state.isCartOpen };
    },
    closeAllModals: (state) => {
      return initialState;
    },
  },
});

export const { toggleHeaderMenu, toggleCart, closeAllModals } =
  modalSlice.actions;
export default modalSlice.reducer;
