import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "user",
  initialState: {
    currentUser: null,
    allUser: [],
    user: null
  },
  reducers: {
    login(state, action) {
      state.currentUser = action.payload;
    },
    logout(state, action) {
      state.currentUser = null;
    },
    getAllUser(state, action) {
      state.allUser = action.payload
    },
    setUserInfo(state, action) {
      state.user = action.payload
    }
  },
});

// Action creators are generated for each case reducer function
export const { login, logout, setUserInfo } = userSlice.actions;

export default userSlice.reducer;
