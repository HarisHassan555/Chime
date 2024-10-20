import { createSlice } from '@reduxjs/toolkit';

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    isLogin: true,
    user: null,
  },
  reducers: {
    toggleAuth: (state) => {
      state.isLogin = !state.isLogin;
    },
    setUser: (state, action) => {
      state.user = action.payload;
    },
  },
});

export const { toggleAuth, setUser } = authSlice.actions;
export default authSlice.reducer;
