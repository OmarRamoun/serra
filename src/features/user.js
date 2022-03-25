import {createSlice} from '@reduxjs/toolkit';

export const userSlice = createSlice({
  name: 'user',
  initialState: {
    value: {
      isLoggedIn: false,
      username: "",
      email: "",
      password: "",
      newsletter: false,
    }
  },
  reducers: {
    signup: (state, action) => {
      state.value = action.payload;
    },
    login: (state, action) => {
      state.value = {...action.payload, isLoggedIn: true};
    },
    logout: (state, action) => {
      state.value = {...action.payload, isLoggedIn: false};
    }
  }
})

export const {setUser, login, logout} = userSlice.actions;
export default userSlice.reducer;
