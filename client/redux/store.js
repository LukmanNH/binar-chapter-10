import { configureStore } from "@reduxjs/toolkit";
import gameReducer from "./slices/gameSlice";
import userReducer from "./slices/userSlice";

export const store = configureStore({
  reducer: {
    user: userReducer,
    game: gameReducer,
  },
});
