import { createSlice } from '@reduxjs/toolkit';

const userSlice = createSlice({
  name: 'user',
  initialState: {
    isSignedIn: false,
    userData: null,
    token: null,
  },
  reducers: {
    setSignedIn: (state, action) => {
      state.isSignedIn = action.payload;
    },
    setUserData: (state, action) => {
      state.userData = action.payload;

      localStorage.setItem('user', JSON.stringify({ state }));
    },
  },
});

export const { setSignedIn, setUserData } = userSlice.actions;

export const selectSignedIn = (state) => state.user.isSignedIn;
export const selectUserData = (state) => state.user.userData;

export default userSlice.reducer;
