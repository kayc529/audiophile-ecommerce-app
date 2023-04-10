import { createSlice } from '@reduxjs/toolkit';

export interface UserInitialState {
  isLoading: boolean;
}

const initialState: UserInitialState = {
  isLoading: false,
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {},
  extraReducers: {},
});
export const {} = userSlice.actions;
export default userSlice.reducer;
