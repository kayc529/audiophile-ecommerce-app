import { createSlice } from '@reduxjs/toolkit';

export interface UserInitialState {
  isLoading: boolean;
  isMenuOpened: boolean;
}

const initialState: UserInitialState = {
  isLoading: false,
  isMenuOpened: false,
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    toggleTopMenu: (state) => {
      return { ...state, isMenuOpened: !state.isMenuOpened };
    },
  },
  extraReducers: {},
});
export const { toggleTopMenu } = userSlice.actions;
export default userSlice.reducer;
