import { createSlice } from '@reduxjs/toolkit';
const initialState = {
  isModalOpen: false,
};

export const modalSlice = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    openModal: (state) => {
      return { ...state, isModalOpen: true };
    },
    closeModal: (state) => {
      return { ...state, isModalOpen: false };
    },
  },
});

export const { openModal, closeModal } = modalSlice.actions;
export default modalSlice.reducer;
