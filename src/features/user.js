import { createSlice } from "@reduxjs/toolkit";

const initialValue = {
  isLoggedIn: false,
  username: "",
  email: "",
  newsletter: false,
  sessionId: "",
};

const storage = localStorage.getItem("user");

export const userSlice = createSlice({
  name: "user",
  initialState: {
    value: storage ? JSON.parse(storage) : initialValue,
  },
  reducers: {
    signup: (state, action) => {
      state.value = action.payload;
    },
    login: (state, action) => {
      state.value = { ...action.payload, isLoggedIn: true };
    },
    logout: (state, action) => {
      state.value = initialValue;
    },
  },
});

export const { setUser, login, logout } = userSlice.actions;
export default userSlice.reducer;
