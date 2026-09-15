import { createSlice } from "@reduxjs/toolkit";

const savedUser =
  JSON.parse(localStorage.getItem("loggedUser")) || null;

const initialState = {
  user: savedUser,
};

const authSlice = createSlice({
  name: "auth",

  initialState,

  reducers: {

    registerUser: (state, action) => {

      const { name, email, password } =
        action.payload;

      const users =
        JSON.parse(
          localStorage.getItem("users")
        ) || [];

      const alreadyExists = users.find(
        (user) => user.email === email
      );

      if (alreadyExists) {
        return;
      }

      const newUser = {
        id: Date.now(),
        name,
        email,
        password,
      };

      users.push(newUser);

      localStorage.setItem(
        "users",
        JSON.stringify(users)
      );
    },

    loginUser: (state, action) => {

      const { email, password } =
        action.payload;

      const users =
        JSON.parse(
          localStorage.getItem("users")
        ) || [];

      const foundUser = users.find(
        (user) =>
          user.email === email &&
          user.password === password
      );

      if (foundUser) {

        state.user = foundUser;

        localStorage.setItem(
          "loggedUser",
          JSON.stringify(foundUser)
        );
      }
    },

    logoutUser: (state) => {

      state.user = null;

      localStorage.removeItem(
        "loggedUser"
      );
    },
  },
});

export const {
  registerUser,
  loginUser,
  logoutUser,
} = authSlice.actions;

export default authSlice.reducer;